#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>
#include <cmath>

using namespace std;

int main() {
    vector<float> samples = {0.1, -0.9, 0.2, 0.3, 0.4, 0.5};

    cout << "Samples: ";
    for (float sample : samples) {
        cout << sample << " ";
    }
    cout << endl;

    float maxValue = *max_element(samples.begin(), samples.end());
    cout << "Maximum: " << maxValue << endl;

    float minValue = *min_element(samples.begin(), samples.end());
    cout << "Minimum: " << minValue << endl;

    float mean = accumulate(samples.begin(), samples.end(), 0.0f)
                 / samples.size();
    cout << "Mean: " << mean << endl;

    cout << "Absolute values: ";
    for (float sample : samples) {
        cout << abs(sample) << " ";
    }
    cout << endl;

    // Sort ascending
    sort(samples.begin(), samples.end());

    cout << "Sorted ascending: ";
    for (float sample : samples) {
        cout << sample << " ";
    }
    cout << endl;

    return 0;
}