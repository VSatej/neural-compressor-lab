import io

import numpy as np
import soundfile as sf

from flask import Flask, request, jsonify, send_file
from flask_cors import CORS


app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

app.config["MAX_CONTENT_LENGTH"] = 25 * 1024 * 1024


def calculate_metrics(audio):
    peak = float(np.max(np.abs(audio)))
    rms = float(np.sqrt(np.mean(audio ** 2)))

    return {
        "peak": peak,
        "rms": rms
    }


def compress_audio(audio, sample_rate, threshold_db, ratio,
                   attack_ms, release_ms):

    # Convert threshold from dBFS to linear amplitude
    threshold = 10 ** (threshold_db / 20)

    # Calculate envelope follower coefficients
    attack_coeff = np.exp(-1.0 / (sample_rate * attack_ms / 1000))
    release_coeff = np.exp(-1.0 / (sample_rate * release_ms / 1000))

    # Process each channel independently
    output = np.zeros_like(audio)

    for channel in range(audio.shape[1]):

        input_signal = audio[:, channel]

        envelope = 0.0
        compressed = np.zeros_like(input_signal)

        for i, sample in enumerate(input_signal):

            magnitude = abs(sample)

            # Envelope follower
            if magnitude > envelope:
                coeff = attack_coeff
            else:
                coeff = release_coeff

            envelope = coeff * envelope + (1 - coeff) * magnitude

            # Calculate gain reduction
            if envelope > threshold:
                level_db = 20 * np.log10(max(envelope, 1e-10))

                output_db = (
                    threshold_db
                    + (level_db - threshold_db) / ratio
                )

                gain_db = output_db - level_db
                gain = 10 ** (gain_db / 20)

            else:
                gain = 1.0

            compressed[i] = sample * gain

        output[:, channel] = compressed

    return np.clip(output, -1.0, 1.0)


@app.route("/api/compress", methods=["POST"])
def compress():
    if "file" not in request.files:
        return jsonify({"error": "No WAV file provided"}), 400

    audio_file = request.files["file"]

    if not audio_file.filename.lower().endswith(".wav"):
        return jsonify({"error": "Only WAV files are supported"}), 400

    try:
        threshold = float(request.form.get("threshold", -18))
        ratio = float(request.form.get("ratio", 4))
        attack = float(request.form.get("attack", 10))
        release = float(request.form.get("release", 100))

        if not -60 <= threshold <= 0:
            return jsonify({"error": "Threshold must be between -60 and 0 dB"}), 400

        if not 1 <= ratio <= 20:
            return jsonify({"error": "Ratio must be between 1 and 20"}), 400

        if not 1 <= attack <= 100:
            return jsonify({"error": "Attack must be between 1 and 100 ms"}), 400

        if not 10 <= release <= 1000:
            return jsonify({"error": "Release must be between 10 and 1000 ms"}), 400

        # Read WAV into a floating-point NumPy array
        audio_bytes = audio_file.read()

        audio, sample_rate = sf.read(
            io.BytesIO(audio_bytes),
            dtype="float32",
            always_2d=True
        )

        if audio.size == 0:
            return jsonify({"error": "The WAV file is empty"}), 400

        # Original signal metrics
        original_metrics = calculate_metrics(audio)

        # Apply compressor
        compressed_audio = compress_audio(
            audio,
            sample_rate,
            threshold,
            ratio,
            attack,
            release
        )

        # Compressed signal metrics
        compressed_metrics = calculate_metrics(compressed_audio)

        # Encode processed audio as WAV
        output_buffer = io.BytesIO()

        sf.write(
            output_buffer,
            compressed_audio,
            sample_rate,
            format="WAV",
            subtype="PCM_16"
        )

        output_buffer.seek(0)

        response = send_file(
            output_buffer,
            mimetype="audio/wav",
            as_attachment=True,
            download_name="compressed.wav"
        )

        # Send metrics through response headers
        response.headers["X-Original-Peak"] = f"{original_metrics['peak']:.4f}"
        response.headers["X-Compressed-Peak"] = f"{compressed_metrics['peak']:.4f}"
        response.headers["X-Original-RMS"] = f"{original_metrics['rms']:.4f}"
        response.headers["X-Compressed-RMS"] = f"{compressed_metrics['rms']:.4f}"

        return response

    except Exception as e:
        app.logger.exception("Audio compression failed")
        return jsonify({"error": str(e)}), 500


@app.get("/api/health")
def health():
    return jsonify({
        "status": "ok",
        "project": "Neural Compressor Lab",
        "dsp": "not implemented yet",
        "ml": "not implemented yet",
    })


if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5000, debug=True)