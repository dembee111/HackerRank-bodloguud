#include <iostream>
using namespace std;

int main()
{
    int x, y;
    float z;
    cin >> x;
    cin >> y;
    z = x * x + y * y / (1 + abs(x * y));
    cout << "result is : " << z;
}