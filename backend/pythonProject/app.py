from flask import Flask, jsonify
from flask_cors import CORS
import requests


app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})


@app.get("/api/health")
def health():
    return jsonify({
        "status": "ok",
        "project": "Neural Compressor Lab",
        "dsp": "not implemented yet",
        "ml": "not implemented yet",
    })


@app.get("/api/weather")
def weather():
    response = requests.get('https://api.open-meteo.com/v1/forecast?latitude=45.1885&longitude=5.7245&current'
                            '=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,'
                            'wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,'
                            'precipitation_probability_max&timezone=Europe%2FParis&utm_source=chatgpt.com')
    if response:
        return response.json()


if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5000, debug=True)