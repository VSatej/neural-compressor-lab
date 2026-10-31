#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Please input a number:";
    cin >> n;
    bool is_prime = true;
    if (n==0 || n==1) {
        is_prime = false;
    }else {
        for (int i=2; i<n; i++) {
            if (n%i == 0) {
                is_prime = false;
            }
        }
    }
    if (is_prime) {
        cout << "Prime ";
    }else {
        cout << "Not prime ";
    }
    return 0;
}