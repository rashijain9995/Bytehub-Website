void solve()
{
    int N;
    cin >> N;
    if (N == 1)
        cout << 1 << endl
             << "1 1" << endl;
    else if (N == 2)
        cout << 1 << endl
             << "2 1 2" << endl;
    else if (N == 3)
        cout << (N / 2) << endl
             << "3 1 2 3" << endl;
    else
    {
        cout << (N / 2) << endl
             << "3 1 2 3" << endl;
        string s;
        for (int i = 2; i < (N / 2); i++)
            s += "2 " + t_s(i * 2) + " " + t_s((i * 2) + 1) + "\n";
        cout << s;
        if (N % 2 == 0)
            cout << "1 " << N;
        else
            cout << "2 " << (N - 1) << " " << N;
        cout << endl;
    }
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
