#include <iostream>
#include <vector>
#include <iomanip>

using namespace std;

float compressSample(float sample, float threshold, float ratio) {

    float magnitude = abs(sample);

    if (magnitude <= threshold) {
        return sample;
    }

    float compressed = threshold + (magnitude - threshold) / ratio;

    if (sample < 0) {
        compressed = -compressed;
    }

    return compressed;
}

int main() {
    float threshold;
    float ratio;
    int n;

    cout << "Enter threshold: ";
    cin >> threshold;

    cout << "Enter compression ratio: ";
    cin >> ratio;

    cout << "Enter number of samples: ";
    cin >> n;

    vector<float> samples(n);

    cout << "Enter audio samples: ";
    for (int i = 0; i < n; i++) {
        cin >> samples[i];
    }

    cout << "\nOriginal\tCompressed\n";
    for (int i = 0; i < n; i++) {
        float compressed = compressSample(samples[i], threshold, ratio);
        cout << samples[i] << "\t" << compressed << endl;
    }

    cout << "\nCompression completed!" << endl;

    return 0;
}