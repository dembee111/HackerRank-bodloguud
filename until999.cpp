#include <iostream>
#include <cmath>
using namespace std;

int main()
{
    int too, i, a, b, c;
    cin >> too;
    for (i = 100; i <= 999; i++)
    {
        a = i % 10;
        b = (i / 10) % 10;
        c = i / 100;
        if (i == 120)
        {
            cout << " === " << a << " " << b << " " << c;
        }
        if (a + b + c == too)
        {
            cout << "i value is : " << i << "\n ";
        }
    }
}