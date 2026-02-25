# TCS NQT Story + Simulation Master (C++): Complete Question Bank

This document is dedicated only to **story-based simulation** questions for TCS NQT coding.
It is designed to cover all major simulation styles asked in PYQ-like sets.

## 1) Coverage Map

This document covers:
1. Sequence and array simulation
2. Queue/process simulation
3. String/transformation simulation
4. Grid and matrix simulation
5. Billing/pricing/time rule simulation
6. Scheduling and resource simulation

## 2) Simulation Mindset (Must-Follow)

- Parse input carefully and map story words to variables/state.
- Build state transitions explicitly.
- Apply rules in exact order.
- Validate edge cases: empty input, zero values, boundaries, overflows.
- Keep output formatting strict.

---

## Q1. Odd-Even Vehicle Rule

### Problem Statement
City rule:
- On even date `D`, vehicles with even last digit are allowed.
- On odd date `D`, vehicles with odd last digit are allowed.
Given `N` and `N` last digits, count allowed vehicles.

### Input Format
- `N D`
- `N` digits

### Output Format
- allowed count

### Example
Input:
```text
6 13
2 5 8 1 7 4
```
Output:
```text
3
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, d;
    cin >> n >> d;
    int need = d % 2;
    int ans = 0;

    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        if ((x % 2 + 2) % 2 == need) ans++;
    }

    cout << ans << "\n";
    return 0;
}
```

---

## Q2. Rearrange Multiples of 10 to End (Stable)

### Problem Statement
Given array, move all elements divisible by 10 to end while preserving order of both groups.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<long long> a(n), out;
    for (auto &x : a) cin >> x;

    out.reserve(n);
    for (auto x : a) if (x % 10 != 0) out.push_back(x);
    for (auto x : a) if (x % 10 == 0) out.push_back(x);

    for (auto x : out) cout << x << " ";
    cout << "\n";
    return 0;
}
```

---

## Q3. Push Empty Packets (0) to End

### Problem Statement
Conveyor has packets; `0` means empty packet.
Move empties to end while maintaining order of non-empty packets.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (auto &x : a) cin >> x;

    int j = 0;
    for (int i = 0; i < n; i++) {
        if (a[i] != 0) swap(a[i], a[j++]);
    }

    for (int x : a) cout << x << " ";
    cout << "\n";
    return 0;
}
```

---

## Q4. Product Codes with No Repeated Digits in [L, R]

### Problem Statement
Count numbers in range `[L, R]` having all distinct digits.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

bool uniqueDigits(long long x) {
    vector<int> seen(10, 0);
    if (x == 0) return true;
    while (x > 0) {
        int d = x % 10;
        if (seen[d]) return false;
        seen[d] = 1;
        x /= 10;
    }
    return true;
}

int main() {
    long long l, r;
    cin >> l >> r;

    long long ans = 0;
    for (long long x = l; x <= r; x++) {
        if (uniqueDigits(x)) ans++;
    }

    cout << ans << "\n";
    return 0;
}
```

---

## Q5. Minimum Left Rotations to Match String

### Problem Statement
Given strings `A` and `B`, find minimum left rotations needed to make `A==B`, else `-1`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string a, b;
    cin >> a >> b;

    if (a.size() != b.size()) {
        cout << -1 << "\n";
        return 0;
    }

    string s = a + a;
    size_t pos = s.find(b);
    if (pos == string::npos || pos >= a.size()) cout << -1 << "\n";
    else cout << pos << "\n";

    return 0;
}
```

---

## Q6. Sort Risk Levels (0,1,2)

### Problem Statement
Sort risk levels (0,1,2) in one pass.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (auto &x : a) cin >> x;

    int l = 0, m = 0, h = n - 1;
    while (m <= h) {
        if (a[m] == 0) swap(a[l++], a[m++]);
        else if (a[m] == 1) m++;
        else swap(a[m], a[h--]);
    }

    for (int x : a) cout << x << " ";
    cout << "\n";
    return 0;
}
```

---

## Q7. Maximum Profit from Stock Prices

### Problem Statement
Given daily stock prices, buy once and sell once later. Find max profit.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> p(n);
    for (auto &x : p) cin >> x;

    int mn = INT_MAX, ans = 0;
    for (int x : p) {
        mn = min(mn, x);
        ans = max(ans, x - mn);
    }

    cout << ans << "\n";
    return 0;
}
```

---

## Q8. Transaction Burst Count (Subarrays with Target Sum)

### Problem Statement
Given daily gains/losses array and target `K`, count contiguous periods summing to `K`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    long long k;
    cin >> n >> k;

    vector<long long> a(n);
    for (auto &x : a) cin >> x;

    unordered_map<long long, long long> freq;
    freq[0] = 1;

    long long pref = 0, ans = 0;
    for (auto x : a) {
        pref += x;
        if (freq.count(pref - k)) ans += freq[pref - k];
        freq[pref]++;
    }

    cout << ans << "\n";
    return 0;
}
```

---

## Q9. ATM Cash Dispense Simulation

### Problem Statement
ATM has limited notes: 2000, 500, 200, 100. Given amount and stock, dispense with greedy high-to-low.
If impossible, print `-1`.

### Input Format
- amount
- stock of 2000 500 200 100

### Output Format
- dispensed notes count in same order or `-1`

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long amt;
    cin >> amt;
    vector<int> den = {2000, 500, 200, 100};
    vector<long long> stock(4), use(4, 0);
    for (auto &x : stock) cin >> x;

    for (int i = 0; i < 4; i++) {
        long long take = min(stock[i], amt / den[i]);
        use[i] = take;
        amt -= take * den[i];
    }

    if (amt != 0) {
        cout << -1 << "\n";
        return 0;
    }

    for (auto x : use) cout << x << " ";
    cout << "\n";
    return 0;
}
```

---

## Q10. Vending Machine Change Feasibility

### Problem Statement
Given customer queue payments for item cost 5 (pay with 5/10/20), determine if seller can provide change always.

### Input Format
- `N`
- `N` payments

### Output Format
- `Yes` / `No`

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    int c5 = 0, c10 = 0;
    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        if (x == 5) c5++;
        else if (x == 10) {
            if (c5 == 0) {
                cout << "No\n";
                return 0;
            }
            c5--;
            c10++;
        } else {
            if (c10 > 0 && c5 > 0) {
                c10--;
                c5--;
            } else if (c5 >= 3) c5 -= 3;
            else {
                cout << "No\n";
                return 0;
            }
        }
    }

    cout << "Yes\n";
    return 0;
}
```

---

## Q11. Time Needed for K-th Ticket Buyer

### Problem Statement
Queue of ticket demands. Front buys 1 ticket each second and requeues if still needed.
Find time for person `k` to finish.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;
    vector<int> t(n);
    for (auto &x : t) cin >> x;

    int ans = 0;
    for (int i = 0; i < n; i++) {
        if (i <= k) ans += min(t[i], t[k]);
        else ans += min(t[i], t[k] - 1);
    }

    cout << ans << "\n";
    return 0;
}
```

---

## Q12. Print Queue Priority (When Target Prints)

### Problem Statement
Jobs have priorities. If front is not highest, move to back; else print.
Find print order of target index.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, idx;
    cin >> n >> idx;

    queue<pair<int,int>> q;
    priority_queue<int> pq;

    for (int i = 0; i < n; i++) {
        int p; cin >> p;
        q.push({p, i});
        pq.push(p);
    }

    int time = 0;
    while (!q.empty()) {
        auto cur = q.front(); q.pop();
        if (cur.first == pq.top()) {
            pq.pop();
            time++;
            if (cur.second == idx) {
                cout << time << "\n";
                return 0;
            }
        } else q.push(cur);
    }

    return 0;
}
```

---

## Q13. Round Robin Completion Time Simulation

### Problem Statement
Given process burst times and fixed quantum `q`, compute completion time for each process (arrival all at 0).

### Input Format
- `N q`
- `N` burst times

### Output Format
- completion times in process order

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, q;
    cin >> n >> q;

    vector<int> bt(n), rem(n), ct(n, 0);
    for (int i = 0; i < n; i++) cin >> bt[i], rem[i] = bt[i];

    queue<int> qu;
    for (int i = 0; i < n; i++) qu.push(i);

    int time = 0;
    while (!qu.empty()) {
        int i = qu.front(); qu.pop();
        int run = min(q, rem[i]);
        rem[i] -= run;
        time += run;

        if (rem[i] == 0) ct[i] = time;
        else qu.push(i);
    }

    for (int x : ct) cout << x << " ";
    cout << "\n";
    return 0;
}
```

---

## Q14. Single-Agent Call Center Waiting Time

### Problem Statement
Customers arrive with arrival time and service time. One agent serves FIFO.
Print waiting time per customer.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    vector<long long> arr(n), srv(n), wait(n);
    for (auto &x : arr) cin >> x;
    for (auto &x : srv) cin >> x;

    long long finish = 0;
    for (int i = 0; i < n; i++) {
        if (finish <= arr[i]) {
            wait[i] = 0;
            finish = arr[i] + srv[i];
        } else {
            wait[i] = finish - arr[i];
            finish += srv[i];
        }
    }

    for (auto x : wait) cout << x << " ";
    cout << "\n";
    return 0;
}
```

---

## Q15. LRU Page Fault Simulation

### Problem Statement
Given cache capacity and page request sequence, count page faults using LRU replacement.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int cap, n;
    cin >> cap >> n;

    list<int> dq;
    unordered_map<int, list<int>::iterator> pos;
    int faults = 0;

    for (int i = 0; i < n; i++) {
        int page;
        cin >> page;

        if (!pos.count(page)) {
            faults++;
            if ((int)dq.size() == cap) {
                int old = dq.back();
                dq.pop_back();
                pos.erase(old);
            }
            dq.push_front(page);
            pos[page] = dq.begin();
        } else {
            dq.erase(pos[page]);
            dq.push_front(page);
            pos[page] = dq.begin();
        }
    }

    cout << faults << "\n";
    return 0;
}
```

---

## Q16. Browser Back/Forward Simulation

### Problem Statement
Support commands: `VISIT url`, `BACK`, `FORWARD`, `CURRENT` from initial page `home`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int q;
    cin >> q;

    stack<string> backSt, fwdSt;
    string cur = "home";

    while (q--) {
        string op;
        cin >> op;

        if (op == "VISIT") {
            string url; cin >> url;
            backSt.push(cur);
            cur = url;
            while (!fwdSt.empty()) fwdSt.pop();
        } else if (op == "BACK") {
            if (!backSt.empty()) {
                fwdSt.push(cur);
                cur = backSt.top(); backSt.pop();
            }
            cout << cur << "\n";
        } else if (op == "FORWARD") {
            if (!fwdSt.empty()) {
                backSt.push(cur);
                cur = fwdSt.top(); fwdSt.pop();
            }
            cout << cur << "\n";
        } else {
            cout << cur << "\n";
        }
    }

    return 0;
}
```

---

## Q17. Caesar Cipher Encryption (Story)

### Problem Statement
Encrypt message by shifting alphabetic characters by `k`, preserving case.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    int k;
    cin.ignore(numeric_limits<streamsize>::max(), '\n');
    getline(cin, s);
    cin >> k;
    k %= 26;

    for (char &c : s) {
        if (c >= 'a' && c <= 'z') c = char('a' + (c - 'a' + k) % 26);
        else if (c >= 'A' && c <= 'Z') c = char('A' + (c - 'A' + k) % 26);
    }

    cout << s << "\n";
    return 0;
}
```

---

## Q18. Keyword Checker (Compiler Story)

### Problem Statement
Given word, print `Keyword` if C/C++ reserved keyword else `Not Keyword`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string w;
    cin >> w;

    static const unordered_set<string> kw = {
        "auto","break","case","char","const","continue","default","do","double","else","enum",
        "extern","float","for","goto","if","int","long","register","return","short","signed",
        "sizeof","static","struct","switch","typedef","union","unsigned","void","volatile","while",
        "bool","class","namespace","new","delete","public","private","protected","template","this",
        "throw","try","catch","using","virtual","friend","inline","operator","true","false","nullptr"
    };

    cout << (kw.count(w) ? "Keyword" : "Not Keyword") << "\n";
    return 0;
}
```

---

## Q19. Mask Digits Except Last 4

### Problem Statement
In a text, replace all digits except last 4 digits by `X`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin.ignore(numeric_limits<streamsize>::max(), '\n');
    getline(cin, s);

    int digits = 0;
    for (char c : s) if (isdigit((unsigned char)c)) digits++;

    int keepFrom = max(0, digits - 4), seen = 0;

    for (char &c : s) {
        if (isdigit((unsigned char)c)) {
            if (seen < keepFrom) c = 'X';
            seen++;
        }
    }

    cout << s << "\n";
    return 0;
}
```

---

## Q20. Multi-Delimiter Token Counter

### Problem Statement
Given text and delimiter set string, count tokens separated by any delimiter.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string s, d;
    cin.ignore(numeric_limits<streamsize>::max(), '\n');
    getline(cin, s);
    getline(cin, d);

    vector<int> isDel(256, 0);
    for (char c : d) isDel[(unsigned char)c] = 1;

    int cnt = 0;
    bool inToken = false;

    for (char c : s) {
        if (isDel[(unsigned char)c]) inToken = false;
        else {
            if (!inToken) cnt++;
            inToken = true;
        }
    }

    cout << cnt << "\n";
    return 0;
}
```

---

## Q21. Robot Navigation with Obstacles

### Problem Statement
Given grid (`0` free, `1` blocked), start position and command string `L/R/U/D`.
Execute commands only if next cell valid and free.
Print final coordinates.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;

    vector<vector<int>> g(r, vector<int>(c));
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++) cin >> g[i][j];

    int x, y;
    cin >> x >> y;
    string cmd;
    cin >> cmd;

    for (char ch : cmd) {
        int nx = x, ny = y;
        if (ch == 'L') ny--;
        else if (ch == 'R') ny++;
        else if (ch == 'U') nx--;
        else if (ch == 'D') nx++;

        if (nx >= 0 && nx < r && ny >= 0 && ny < c && g[nx][ny] == 0) {
            x = nx;
            y = ny;
        }
    }

    cout << x << " " << y << "\n";
    return 0;
}
```

---

## Q22. Parking Lot Occupancy Updates

### Problem Statement
Grid has parking slots (`0` free, `1` occupied). Process operations:
- `PARK r c`
- `LEAVE r c`
After all operations print total occupied.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;

    vector<vector<int>> g(r, vector<int>(c));
    int occ = 0;

    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            cin >> g[i][j];
            occ += g[i][j];
        }
    }

    int q;
    cin >> q;

    while (q--) {
        string op;
        int x, y;
        cin >> op >> x >> y;
        if (x < 0 || x >= r || y < 0 || y >= c) continue;

        if (op == "PARK") {
            if (g[x][y] == 0) g[x][y] = 1, occ++;
        } else {
            if (g[x][y] == 1) g[x][y] = 0, occ--;
        }
    }

    cout << occ << "\n";
    return 0;
}
```

---

## Q23. Rotting Oranges Simulation

### Problem Statement
Grid values: `0` empty, `1` fresh, `2` rotten. Rotten spreads to adjacent fresh per minute.
Find time to rot all or `-1`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;

    vector<vector<int>> g(r, vector<int>(c));
    queue<pair<int,int>> q;
    int fresh = 0;

    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            cin >> g[i][j];
            if (g[i][j] == 2) q.push({i,j});
            else if (g[i][j] == 1) fresh++;
        }
    }

    int mins = 0;
    int dr[4] = {1,-1,0,0};
    int dc[4] = {0,0,1,-1};

    while (!q.empty() && fresh > 0) {
        int sz = q.size();
        mins++;
        while (sz--) {
            auto [x,y] = q.front(); q.pop();
            for (int k = 0; k < 4; k++) {
                int nx = x + dr[k], ny = y + dc[k];
                if (nx>=0 && nx<r && ny>=0 && ny<c && g[nx][ny]==1) {
                    g[nx][ny] = 2;
                    fresh--;
                    q.push({nx,ny});
                }
            }
        }
    }

    cout << (fresh == 0 ? mins : -1) << "\n";
    return 0;
}
```

---

## Q24. Nearest Exit Distance for Each Cell (Multi-source BFS)

### Problem Statement
Grid has exits as `1`, walls as `-1`, free as `0`.
Print shortest distance from each free cell to nearest exit.
Walls remain `-1`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;

    vector<vector<int>> g(r, vector<int>(c)), dist(r, vector<int>(c, -1));
    queue<pair<int,int>> q;

    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            cin >> g[i][j];
            if (g[i][j] == 1) {
                dist[i][j] = 0;
                q.push({i,j});
            }
        }
    }

    int dr[4] = {1,-1,0,0};
    int dc[4] = {0,0,1,-1};

    while (!q.empty()) {
        auto [x,y] = q.front(); q.pop();
        for (int k = 0; k < 4; k++) {
            int nx = x + dr[k], ny = y + dc[k];
            if (nx>=0 && nx<r && ny>=0 && ny<c && g[nx][ny] != -1 && dist[nx][ny] == -1) {
                dist[nx][ny] = dist[x][y] + 1;
                q.push({nx,ny});
            }
        }
    }

    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            if (g[i][j] == -1) cout << -1 << " ";
            else cout << dist[i][j] << " ";
        }
        cout << "\n";
    }

    return 0;
}
```

---

## Q25. Flood Fill Paint Tool

### Problem Statement
Replace connected component color from `(sr,sc)` with new color.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;

    vector<vector<int>> img(r, vector<int>(c));
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++) cin >> img[i][j];

    int sr, sc, color;
    cin >> sr >> sc >> color;

    int old = img[sr][sc];
    if (old == color) {
        for (int i = 0; i < r; i++) {
            for (int j = 0; j < c; j++) cout << img[i][j] << " ";
            cout << "\n";
        }
        return 0;
    }

    queue<pair<int,int>> q;
    q.push({sr,sc});
    img[sr][sc] = color;

    int dr[4] = {1,-1,0,0};
    int dc[4] = {0,0,1,-1};

    while (!q.empty()) {
        auto [x,y] = q.front(); q.pop();
        for (int k = 0; k < 4; k++) {
            int nx = x + dr[k], ny = y + dc[k];
            if (nx>=0 && nx<r && ny>=0 && ny<c && img[nx][ny]==old) {
                img[nx][ny] = color;
                q.push({nx,ny});
            }
        }
    }

    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) cout << img[i][j] << " ";
        cout << "\n";
    }

    return 0;
}
```

---

## Q26. Island Count (Land-Water Map)

### Problem Statement
Count islands of `1`s in binary grid using 4-direction adjacency.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;

    vector<string> g(r);
    for (int i = 0; i < r; i++) cin >> g[i];

    int ans = 0;
    int dr[4] = {1,-1,0,0};
    int dc[4] = {0,0,1,-1};

    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            if (g[i][j] != '1') continue;
            ans++;

            queue<pair<int,int>> q;
            q.push({i,j});
            g[i][j] = '0';

            while (!q.empty()) {
                auto [x,y] = q.front(); q.pop();
                for (int k = 0; k < 4; k++) {
                    int nx = x + dr[k], ny = y + dc[k];
                    if (nx>=0 && nx<r && ny>=0 && ny<c && g[nx][ny]=='1') {
                        g[nx][ny] = '0';
                        q.push({nx,ny});
                    }
                }
            }
        }
    }

    cout << ans << "\n";
    return 0;
}
```

---

## Q27. Electricity Bill Slab Simulation

### Problem Statement
Billing slabs:
- First 100 units: 1.5/unit
- Next 100: 2.5/unit
- Next 300: 4/unit
- Above 500: 6/unit
Add fixed charge 50.
Given units `U`, print final bill.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    double u;
    cin >> u;

    double bill = 0;
    double rem = u;

    double take = min(rem, 100.0); bill += take * 1.5; rem -= take;
    if (rem > 0) { take = min(rem, 100.0); bill += take * 2.5; rem -= take; }
    if (rem > 0) { take = min(rem, 300.0); bill += take * 4.0; rem -= take; }
    if (rem > 0) { bill += rem * 6.0; }

    bill += 50.0;
    cout << fixed << setprecision(2) << bill << "\n";
    return 0;
}
```

---

## Q28. Taxi Fare Simulation with Night Surcharge

### Problem Statement
Fare rules:
- Base fare: 50 for first 2 km
- Next 8 km: 12/km
- Beyond 10 km: 10/km
- If start hour in [22..23] or [0..5], add 20% surcharge on total
Input distance and start hour.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    double d;
    int hr;
    cin >> d >> hr;

    double fare = 0;
    if (d <= 2) fare = 50;
    else if (d <= 10) fare = 50 + (d - 2) * 12;
    else fare = 50 + 8 * 12 + (d - 10) * 10;

    bool night = (hr >= 22 || hr <= 5);
    if (night) fare *= 1.2;

    cout << fixed << setprecision(2) << fare << "\n";
    return 0;
}
```

---

## Q29. Monthly Savings with Interest + Deposit

### Problem Statement
Given initial balance `P`, monthly deposit `D`, monthly interest rate `%` and months `M`, simulate final balance.
Interest applies on current balance at month end after deposit.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    double p, d, rate;
    int m;
    cin >> p >> d >> rate >> m;

    for (int i = 0; i < m; i++) {
        p += d;
        p += p * (rate / 100.0);
    }

    cout << fixed << setprecision(2) << p << "\n";
    return 0;
}
```

---

## Q30. Inventory Reorder Simulation with Lead Time

### Problem Statement
Given daily demand for `N` days, initial stock `S`, reorder threshold `T`, reorder quantity `Q`, lead time `L` days.
Whenever stock after demand <= T and no pending order, place order that arrives after `L` full days.
If demand exceeds stock, unmet demand is lost.
Print total lost demand and ending stock.

### Input Format
- `N S T Q L`
- `N` daily demand values

### Output Format
- `lost endingStock`

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Order { int arriveDay; int qty; };

int main() {
    int n, s, t, q, l;
    cin >> n >> s >> t >> q >> l;
    vector<int> d(n);
    for (auto &x : d) cin >> x;

    queue<Order> pending;
    long long lost = 0;

    for (int day = 0; day < n; day++) {
        while (!pending.empty() && pending.front().arriveDay == day) {
            s += pending.front().qty;
            pending.pop();
        }

        int served = min(s, d[day]);
        s -= served;
        lost += (d[day] - served);

        if (s <= t && pending.empty()) {
            pending.push({day + l + 1, q});
        }
    }

    while (!pending.empty() && pending.front().arriveDay <= n) {
        s += pending.front().qty;
        pending.pop();
    }

    cout << lost << " " << s << "\n";
    return 0;
}
```

---

## Q31. Minimum Train Platforms Required

### Problem Statement
Given arrival and departure times of trains (same day, HHMM integer), find minimum platforms required.

### Input Format
- `N`
- `N` arrival times
- `N` departure times

### Output Format
- min platforms

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> arr(n), dep(n);
    for (auto &x : arr) cin >> x;
    for (auto &x : dep) cin >> x;

    sort(arr.begin(), arr.end());
    sort(dep.begin(), dep.end());

    int i = 0, j = 0;
    int cur = 0, ans = 0;

    while (i < n && j < n) {
        if (arr[i] <= dep[j]) {
            cur++;
            ans = max(ans, cur);
            i++;
        } else {
            cur--;
            j++;
        }
    }

    cout << ans << "\n";
    return 0;
}
```

---

## Q32. CPU Task Scheduler with Cooldown

### Problem Statement
Tasks are uppercase letters; same task needs `n` cooldown intervals.
Find minimum total intervals to finish all tasks.

### Input Format
- tasks string
- cooldown n

### Output Format
- minimum intervals

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string tasks;
    int n;
    cin >> tasks >> n;

    vector<int> f(26, 0);
    for (char c : tasks) f[c - 'A']++;

    int mx = *max_element(f.begin(), f.end());
    int cntMx = 0;
    for (int x : f) if (x == mx) cntMx++;

    int part = (mx - 1) * (n + 1) + cntMx;
    cout << max((int)tasks.size(), part) << "\n";
    return 0;
}
```

---

## Q33. Parking Spaces (PYQ-Style Variant)

### Problem Statement
A parking lot has capacity `C`. You get `Q` events:
- `IN x`: car `x` tries to enter
- `OUT x`: car `x` leaves

Rules:
- `IN x` is accepted only if `x` is not already parked and free space exists.
- Otherwise `IN x` is rejected.
- Invalid `OUT x` (car not present) is ignored.

Print:
1. total accepted `IN`
2. total rejected `IN`
3. final occupied count

### Input Format
- First line: `C Q`
- Next `Q` lines: `IN x` or `OUT x`

### Output Format
- `accepted rejected occupied`

### Example
Input:
```text
2 6
IN 101
IN 102
IN 103
OUT 101
IN 103
OUT 500
```
Output:
```text
3 1 2
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int C, Q;
    cin >> C >> Q;

    unordered_set<long long> parked;
    int accepted = 0, rejected = 0;

    for (int i = 0; i < Q; i++) {
        string op;
        long long id;
        cin >> op >> id;

        if (op == "IN") {
            if (parked.count(id) || (int)parked.size() >= C) {
                rejected++;
            } else {
                parked.insert(id);
                accepted++;
            }
        } else if (op == "OUT") {
            parked.erase(id);
        }
    }

    cout << accepted << " " << rejected << " " << (int)parked.size() << "\n";
    return 0;
}
```

---

## Q34. Party Guests (PYQ-Style Variant)

### Problem Statement
Given arrival and departure times of `N` guests, find:
- maximum number of guests present together
- earliest time when this maximum occurs

Times are integers in HHMM format.

### Input Format
- First line: `N`
- Second line: `N` arrival times
- Third line: `N` departure times

### Output Format
- `maxGuests earliestTime`

### Example
Input:
```text
6
900 940 950 1100 1500 1800
910 1200 1120 1130 1900 2000
```
Output:
```text
3 1100
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;
    vector<int> arr(n), dep(n);
    for (int i = 0; i < n; i++) cin >> arr[i];
    for (int i = 0; i < n; i++) cin >> dep[i];

    sort(arr.begin(), arr.end());
    sort(dep.begin(), dep.end());

    int i = 0, j = 0;
    int cur = 0, best = 0, bestTime = -1;

    while (i < n && j < n) {
        if (arr[i] <= dep[j]) {
            cur++;
            if (cur > best) {
                best = cur;
                bestTime = arr[i];
            }
            i++;
        } else {
            cur--;
            j++;
        }
    }

    cout << best << " " << bestTime << "\n";
    return 0;
}
```

---

## Q35. Maximum Towers Restored (Exact for Small N, PYQ-Style Variant)

### Problem Statement
You have `N` towers connected by `N-1` roads (tree). Tower `i` needs `A[i]` crystals
to restore. If tower `u` is already restored, it reduces each neighbor's required
crystals by `B[u]`.

Given budget `K`, find the maximum towers that can be restored.

This exact solution is intended for `N <= 20`.

### Input Format
- First line: `T` test cases
- For each test case:
- `N K`
- `A[1..N]`
- `B[1..N]`
- `N-1` edges `u v` (1-indexed)

### Output Format
- For each test case, print maximum restorable towers

### Example
Input:
```text
1
4 9
5 10 3 4
1 5 2 2
1 2
2 3
3 4
```
Output:
```text
4
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

static const long long INF = (long long)4e18;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int T;
    cin >> T;
    while (T--) {
        int n;
        long long K;
        cin >> n >> K;

        vector<long long> A(n), B(n);
        for (int i = 0; i < n; i++) cin >> A[i];
        for (int i = 0; i < n; i++) cin >> B[i];

        vector<vector<int>> g(n);
        for (int i = 0; i < n - 1; i++) {
            int u, v;
            cin >> u >> v;
            --u; --v;
            g[u].push_back(v);
            g[v].push_back(u);
        }

        if (n > 20) {
            cout << "Use N<=20 for this exact model\n";
            continue;
        }

        int totalMasks = 1 << n;
        vector<long long> dp(totalMasks, INF);
        dp[0] = 0;

        int answer = 0;
        for (int mask = 0; mask < totalMasks; mask++) {
            if (dp[mask] > K) continue;
            answer = max(answer, __builtin_popcount((unsigned)mask));

            for (int x = 0; x < n; x++) {
                if (mask & (1 << x)) continue;

                long long reduction = 0;
                for (int nb : g[x]) {
                    if (mask & (1 << nb)) reduction += B[nb];
                }

                long long need = max(0LL, A[x] - reduction);
                int nmask = mask | (1 << x);
                dp[nmask] = min(dp[nmask], dp[mask] + need);
            }
        }

        cout << answer << "\n";
    }
    return 0;
}
```

---

## 3) Suggested Practice Order

1. Array/sequence simulation: `Q1-Q8`
2. Queue/process simulation: `Q9-Q16`
3. String/state simulation: `Q17-Q20`
4. Grid and BFS simulation: `Q21-Q26`
5. Billing/scheduling/resource simulation: `Q27-Q35`

## 4) Story Simulation Edge-Case Checklist

- zero/empty events
- boundary times (start/end of day)
- duplicate priorities
- impossible states (insufficient stock/cash)
- grid boundaries and blocked moves
- integer overflow in cumulative totals
- stable ordering when required

## 5) Most Important Story Patterns for TCS NQT

1. Rule-based filtering/counting
2. Rearrangement with order constraints
3. Queue time simulations
4. String transformation and masking
5. Grid propagation (infection/fill)
6. Billing slab and schedule simulations
7. Cache/history state maintenance
