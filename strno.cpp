
//programer_Omkar_Deshmukh
#include <bits/stdc++.h>
using namespace std;
#define int long long
#define intvect vector<int>
#define ull unsigned long long
#define t_s to_string
#define fast                          \
    ios_base::sync_with_stdio(false); \
    cin.tie(NULL);
const int mod = 1e9 + 7;
void solve
{
    int x, y;
    cin >> x >> y;
    int t = x;
    int f = 0, z = 2;
    int ans = 0;
    if (x >= y)
    {
        if (y == 1)
            if (x >= 2)
            {
                ans = 1;
            }
            else
            {
                int p = 0;
                for (int i = 2; i * i <= x; i++)
                    if (x % i == 0)
                    {
                        p = 1;
                        break;
                    }
                if (p == 1)
                {
                    int temp = 0;
                    for (int i = 2; i * i <= x; i++)
                        while (x % i == 0)
                        {
                            temp++;
                            x = x / i;
                        }
                    if (x > 2)
                        temp++;
                    if (temp >= y)
                        ans = 1;
                }
            }
    }
    cout << ans << endl;
}
int32_t main()
{
    fast;
    int t;
    cin >> t;
    while (t--)
        solve();
    return 0;
}