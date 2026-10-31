#include <iostream>
using namespace std;

int main() {
    int temp1 = 0, temp2 = 1, sum = 0, n = 0;

    cout << "Please enter an integer: ";
    cin >> n;

    for (int i = 0; i < n; i++) {
        sum = temp1 + temp2;
        temp1 = temp2;
        temp2 = sum;
    }

    return 0;
}