#include <iostream>
#include <cmath>
using namespace std;

int main()
{
    int a, b;
    float c, s;
    cin >> a;
    cin >> b;
    c = sqrt(a * a + b * b);
    s = (a * b) / 2;
    cout << "first value is : " << c << "second value is " << s;
}