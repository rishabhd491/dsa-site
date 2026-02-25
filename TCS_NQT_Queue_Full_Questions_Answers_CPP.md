# TCS NQT Queue: Full Questions and C++ Solutions

This document covers Queue and Deque topics fully for TCS NQT:
implementation, stream problems, sliding-window deque patterns, and BFS queue applications.

## 1) Queue Topic Checklist

1. Queue implementation (array, linked list)
2. Circular queue/deque
3. Queue using stacks / stack using queues
4. Stream processing problems
5. Sliding window with deque
6. BFS graph/grid queue problems
7. Queue-based simulation and story problems

## Q1. Implement Queue Using Circular Array

### Problem Statement
Implement `ENQUEUE`, `DEQUEUE`, `FRONT`, and `SIZE` using circular array.

### Input Format
- `capacity Q`
- Next `Q` lines operations

### Output Format
- Print output for `DEQUEUE`, `FRONT`, `SIZE`
- For invalid dequeue/front, print `-1`

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

class CQueue {
    vector<long long> a;
    int head = 0, tail = 0, sz = 0, cap;
public:
    CQueue(int c): a(c), cap(c) {}
    bool enqueue(long long x) {
        if (sz == cap) return false;
        a[tail] = x;
        tail = (tail + 1) % cap;
        sz++;
        return true;
    }
    long long dequeue() {
        if (sz == 0) return -1;
        long long x = a[head];
        head = (head + 1) % cap;
        sz--;
        return x;
    }
    long long front() const { return sz ? a[head] : -1; }
    int size() const { return sz; }
};

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int cap, q;
    cin >> cap >> q;
    CQueue qu(cap);

    while (q--) {
        string op;
        cin >> op;
        if (op == "ENQUEUE") {
            long long x;
            cin >> x;
            qu.enqueue(x);
        } else if (op == "DEQUEUE") cout << qu.dequeue() << "\n";
        else if (op == "FRONT") cout << qu.front() << "\n";
        else cout << qu.size() << "\n";
    }
    return 0;
}
```

## Q2. Implement Queue Using Linked List

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Node {
    long long val;
    Node* next;
    Node(long long v): val(v), next(nullptr) {}
};

class QueueLL {
    Node* f = nullptr;
    Node* b = nullptr;
    int sz = 0;
public:
    void enqueue(long long x) {
        Node* n = new Node(x);
        if (!b) f = b = n;
        else {
            b->next = n;
            b = n;
        }
        sz++;
    }
    long long dequeue() {
        if (!f) return -1;
        long long x = f->val;
        Node* t = f;
        f = f->next;
        if (!f) b = nullptr;
        delete t;
        sz--;
        return x;
    }
    long long front() const { return f ? f->val : -1; }
    int size() const { return sz; }
};

int main() {
    int q;
    cin >> q;
    QueueLL qu;

    while (q--) {
        string op;
        cin >> op;
        if (op == "ENQUEUE") {
            long long x;
            cin >> x;
            qu.enqueue(x);
        } else if (op == "DEQUEUE") cout << qu.dequeue() << "\n";
        else if (op == "FRONT") cout << qu.front() << "\n";
        else cout << qu.size() << "\n";
    }

    return 0;
}
```

## Q3. Queue Using Two Stacks

### Problem Statement
Implement queue operations using two stacks.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

class Queue2Stacks {
    stack<long long> in, out;
    void shift() {
        if (out.empty()) {
            while (!in.empty()) {
                out.push(in.top());
                in.pop();
            }
        }
    }
public:
    void enqueue(long long x) { in.push(x); }
    long long dequeue() {
        shift();
        if (out.empty()) return -1;
        long long x = out.top(); out.pop();
        return x;
    }
    long long front() {
        shift();
        return out.empty() ? -1 : out.top();
    }
};

int main() {
    int q;
    cin >> q;
    Queue2Stacks qu;

    while (q--) {
        string op;
        cin >> op;
        if (op == "ENQUEUE") {
            long long x;
            cin >> x;
            qu.enqueue(x);
        } else if (op == "DEQUEUE") cout << qu.dequeue() << "\n";
        else cout << qu.front() << "\n";
    }

    return 0;
}
```

## Q4. Stack Using Two Queues

### Problem Statement
Implement stack operations using two queues.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

class Stack2Queues {
    queue<long long> q1, q2;
public:
    void push(long long x) {
        q2.push(x);
        while (!q1.empty()) {
            q2.push(q1.front());
            q1.pop();
        }
        swap(q1, q2);
    }
    long long pop() {
        if (q1.empty()) return -1;
        long long x = q1.front(); q1.pop();
        return x;
    }
    long long top() {
        if (q1.empty()) return -1;
        return q1.front();
    }
};

int main() {
    int q;
    cin >> q;
    Stack2Queues st;

    while (q--) {
        string op;
        cin >> op;
        if (op == "PUSH") {
            long long x;
            cin >> x;
            st.push(x);
        } else if (op == "POP") cout << st.pop() << "\n";
        else cout << st.top() << "\n";
    }

    return 0;
}
```

## Q5. Design Circular Queue

### Problem Statement
Support operations: `ENQUEUE x`, `DEQUEUE`, `FRONT`, `REAR`, `ISFULL`, `ISEMPTY`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

class MyCircularQueue {
    vector<int> a;
    int h = 0, t = 0, sz = 0, cap;
public:
    MyCircularQueue(int k): a(k), cap(k) {}
    bool enQueue(int x) {
        if (sz == cap) return false;
        a[t] = x;
        t = (t + 1) % cap;
        sz++;
        return true;
    }
    bool deQueue() {
        if (sz == 0) return false;
        h = (h + 1) % cap;
        sz--;
        return true;
    }
    int Front() const { return sz ? a[h] : -1; }
    int Rear() const { return sz ? a[(t - 1 + cap) % cap] : -1; }
    bool isFull() const { return sz == cap; }
    bool isEmpty() const { return sz == 0; }
};

int main() {
    int k, q;
    cin >> k >> q;
    MyCircularQueue qu(k);

    while (q--) {
        string op;
        cin >> op;
        if (op == "ENQUEUE") {
            int x; cin >> x;
            cout << (qu.enQueue(x) ? "true" : "false") << "\n";
        } else if (op == "DEQUEUE") cout << (qu.deQueue() ? "true" : "false") << "\n";
        else if (op == "FRONT") cout << qu.Front() << "\n";
        else if (op == "REAR") cout << qu.Rear() << "\n";
        else if (op == "ISFULL") cout << (qu.isFull() ? "true" : "false") << "\n";
        else cout << (qu.isEmpty() ? "true" : "false") << "\n";
    }

    return 0;
}
```

## Q6. First Non-Repeating Character in Stream

### Problem Statement
Given stream string, for each prefix print first non-repeating character, else `#`.

### Input Format
- One lowercase string

### Output Format
- Output string

### Example
Input:
```text
aabc
```
Output:
```text
a#bb
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin >> s;

    vector<int> freq(256, 0);
    queue<char> q;
    string out;

    for (char c : s) {
        freq[(unsigned char)c]++;
        q.push(c);

        while (!q.empty() && freq[(unsigned char)q.front()] > 1) q.pop();
        out.push_back(q.empty() ? '#' : q.front());
    }

    cout << out << "\n";
    return 0;
}
```

## Q7. Reverse First K Elements of Queue

### Problem Statement
Reverse first `K` elements of queue and keep rest in same relative order.

### Input Format
- `N K`
- `N` integers (queue front to back)

### Output Format
- resulting queue

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    queue<int> q;
    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        q.push(x);
    }

    if (k > n) k = n;
    stack<int> st;

    for (int i = 0; i < k; i++) {
        st.push(q.front());
        q.pop();
    }

    while (!st.empty()) {
        q.push(st.top());
        st.pop();
    }

    for (int i = 0; i < n - k; i++) {
        q.push(q.front());
        q.pop();
    }

    while (!q.empty()) {
        cout << q.front() << " ";
        q.pop();
    }
    cout << "\n";

    return 0;
}
```

## Q8. Interleave First and Second Half of Queue

### Problem Statement
Given queue of even length, interleave first half and second half.

### Input Format
- `N` (even)
- `N` integers

### Output Format
- interleaved queue

### Example
Input:
```text
6
1 2 3 4 5 6
```
Output:
```text
1 4 2 5 3 6
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    queue<int> q;
    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        q.push(x);
    }

    queue<int> first;
    for (int i = 0; i < n / 2; i++) {
        first.push(q.front());
        q.pop();
    }

    queue<int> ans;
    while (!first.empty()) {
        ans.push(first.front()); first.pop();
        ans.push(q.front()); q.pop();
    }

    while (!ans.empty()) {
        cout << ans.front() << " ";
        ans.pop();
    }
    cout << "\n";

    return 0;
}
```

## Q9. Generate Binary Numbers from 1 to N

### Problem Statement
Generate binary numbers from `1` to `N` using queue.

### Input Format
- `N`

### Output Format
- N binary strings

### Example
Input:
```text
5
```
Output:
```text
1 10 11 100 101
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    queue<string> q;
    q.push("1");

    for (int i = 0; i < n; i++) {
        string cur = q.front(); q.pop();
        cout << cur << " ";
        q.push(cur + "0");
        q.push(cur + "1");
    }
    cout << "\n";

    return 0;
}
```

## Q10. Sliding Window Maximum (Deque)

### Problem Statement
Given array and `K`, print max of every window size `K`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;
    vector<int> a(n);
    for (auto &x : a) cin >> x;

    deque<int> dq;
    for (int i = 0; i < n; i++) {
        while (!dq.empty() && dq.front() <= i - k) dq.pop_front();
        while (!dq.empty() && a[dq.back()] <= a[i]) dq.pop_back();
        dq.push_back(i);

        if (i >= k - 1) cout << a[dq.front()] << " ";
    }
    cout << "\n";

    return 0;
}
```

## Q11. First Negative in Every Window

### Problem Statement
For each window size `K`, print first negative else `0`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;
    vector<long long> a(n);
    for (auto &x : a) cin >> x;

    deque<int> dq;
    for (int i = 0; i < n; i++) {
        if (a[i] < 0) dq.push_back(i);
        if (i >= k - 1) {
            while (!dq.empty() && dq.front() <= i - k) dq.pop_front();
            cout << (dq.empty() ? 0 : a[dq.front()]) << " ";
        }
    }
    cout << "\n";

    return 0;
}
```

## Q12. Sum of Min and Max in Every Window

### Problem Statement
For each window, compute `min + max` and print total sum over all windows.

### Input Format
- `N K`
- `N` integers

### Output Format
- Total sum

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;
    vector<int> a(n);
    for (auto &x : a) cin >> x;

    deque<int> mx, mn;
    long long ans = 0;

    for (int i = 0; i < n; i++) {
        while (!mx.empty() && mx.front() <= i - k) mx.pop_front();
        while (!mn.empty() && mn.front() <= i - k) mn.pop_front();

        while (!mx.empty() && a[mx.back()] <= a[i]) mx.pop_back();
        while (!mn.empty() && a[mn.back()] >= a[i]) mn.pop_back();

        mx.push_back(i);
        mn.push_back(i);

        if (i >= k - 1) ans += a[mx.front()] + a[mn.front()];
    }

    cout << ans << "\n";
    return 0;
}
```

## Q13. Rotting Oranges (BFS)

### Problem Statement
In grid: `0` empty, `1` fresh, `2` rotten. Every minute rotten infects adjacent fresh.
Return minutes to rot all fresh, else `-1`.

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
                    g[nx][ny]=2;
                    fresh--;
                    q.push({nx,ny});
                }
            }
        }
    }

    cout << (fresh==0 ? mins : -1) << "\n";
    return 0;
}
```

## Q14. 01 Matrix (Nearest Zero Distance)

### Problem Statement
Given binary matrix, compute distance of each cell to nearest 0 using multi-source BFS.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;
    vector<vector<int>> g(r, vector<int>(c)), dist(r, vector<int>(c, INT_MAX));

    queue<pair<int,int>> q;
    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            cin >> g[i][j];
            if (g[i][j] == 0) {
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
            if (nx>=0 && nx<r && ny>=0 && ny<c && dist[nx][ny] > dist[x][y] + 1) {
                dist[nx][ny] = dist[x][y] + 1;
                q.push({nx,ny});
            }
        }
    }

    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) cout << dist[i][j] << " ";
        cout << "\n";
    }

    return 0;
}
```

## Q15. Flood Fill (BFS)

### Problem Statement
Given image matrix, starting cell `(sr, sc)`, replace connected component color with new color.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;
    vector<vector<int>> img(r, vector<int>(c));
    for (int i = 0; i < r; i++) for (int j = 0; j < c; j++) cin >> img[i][j];

    int sr, sc, color;
    cin >> sr >> sc >> color;

    int old = img[sr][sc];
    if (old != color) {
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
    }

    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) cout << img[i][j] << " ";
        cout << "\n";
    }

    return 0;
}
```

## Q16. Open the Lock (BFS)

### Problem Statement
Lock has 4 wheels (`0000` start). Given deadends and target, minimum moves to reach target.

### Input Format
- `D` deadends count
- `D` deadend strings
- target string

### Output Format
- minimum moves or `-1`

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

vector<string> nbrs(const string& s) {
    vector<string> out;
    for (int i = 0; i < 4; i++) {
        string t = s;
        t[i] = (s[i] == '9' ? '0' : s[i] + 1);
        out.push_back(t);
        t = s;
        t[i] = (s[i] == '0' ? '9' : s[i] - 1);
        out.push_back(t);
    }
    return out;
}

int main() {
    int d;
    cin >> d;
    unordered_set<string> dead;
    for (int i = 0; i < d; i++) {
        string x; cin >> x;
        dead.insert(x);
    }

    string target;
    cin >> target;

    if (dead.count("0000")) {
        cout << -1 << "\n";
        return 0;
    }

    queue<pair<string,int>> q;
    unordered_set<string> vis;
    q.push({"0000", 0});
    vis.insert("0000");

    while (!q.empty()) {
        auto [cur, dist] = q.front(); q.pop();
        if (cur == target) {
            cout << dist << "\n";
            return 0;
        }

        for (auto &nxt : nbrs(cur)) {
            if (!dead.count(nxt) && !vis.count(nxt)) {
                vis.insert(nxt);
                q.push({nxt, dist + 1});
            }
        }
    }

    cout << -1 << "\n";
    return 0;
}
```

## Q17. Recent Counter (Queue Design)

### Problem Statement
Support `PING t`: return number of pings in range `[t-3000, t]`.

### Input Format
- `Q`
- `Q` integers `t` in increasing order

### Output Format
- answer for each ping

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int q;
    cin >> q;
    queue<int> qu;

    while (q--) {
        int t;
        cin >> t;

        qu.push(t);
        while (!qu.empty() && qu.front() < t - 3000) qu.pop();
        cout << qu.size() << "\n";
    }

    return 0;
}
```

## Q18. Time Needed to Buy Tickets

### Problem Statement
People in queue buy 1 ticket per turn and rejoin if still need more.
Find time for person `k` to finish.

### Input Format
- `N k`
- `N` integers tickets

### Output Format
- total time units

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

## Q19. Josephus Problem (Queue Simulation)

### Problem Statement
`N` people in circle, eliminate every `K`-th. Print survivor.

### Input Format
- `N K`

### Output Format
- survivor index (1-based)

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    queue<int> q;
    for (int i = 1; i <= n; i++) q.push(i);

    while ((int)q.size() > 1) {
        for (int i = 1; i < k; i++) {
            q.push(q.front());
            q.pop();
        }
        q.pop();
    }

    cout << q.front() << "\n";
    return 0;
}
```

## Q20. Number of Islands (BFS)

### Problem Statement
Count islands of `1`s in binary grid (4-directional adjacency).

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;
    vector<string> g(r);
    for (int i = 0; i < r; i++) cin >> g[i];

    int islands = 0;
    int dr[4] = {1,-1,0,0};
    int dc[4] = {0,0,1,-1};

    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            if (g[i][j] != '1') continue;
            islands++;
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

    cout << islands << "\n";
    return 0;
}
```

## Q21. Moving Average from Data Stream

### Problem Statement
Given window size `K`, for each incoming number print moving average of last at most K values.

### Input Format
- `K Q`
- `Q` integers

### Output Format
- averages (2 decimal)

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int k, q;
    cin >> k >> q;

    queue<long long> qu;
    long long sum = 0;

    cout << fixed << setprecision(2);
    while (q--) {
        long long x;
        cin >> x;
        qu.push(x);
        sum += x;

        if ((int)qu.size() > k) {
            sum -= qu.front();
            qu.pop();
        }

        cout << (double)sum / qu.size() << "\n";
    }

    return 0;
}
```

## Q22. Implement Deque using Array

### Problem Statement
Implement `PUSHFRONT`, `PUSHBACK`, `POPFRONT`, `POPBACK`, `FRONT`, `BACK` using circular array deque.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

class ArrDeque {
    vector<int> a;
    int h = 0, t = 0, sz = 0, cap;
public:
    ArrDeque(int c): a(c), cap(c) {}

    bool pushFront(int x) {
        if (sz == cap) return false;
        h = (h - 1 + cap) % cap;
        a[h] = x;
        sz++;
        return true;
    }
    bool pushBack(int x) {
        if (sz == cap) return false;
        a[t] = x;
        t = (t + 1) % cap;
        sz++;
        return true;
    }
    int popFront() {
        if (sz == 0) return -1;
        int x = a[h];
        h = (h + 1) % cap;
        sz--;
        return x;
    }
    int popBack() {
        if (sz == 0) return -1;
        t = (t - 1 + cap) % cap;
        int x = a[t];
        sz--;
        return x;
    }
    int front() const { return sz ? a[h] : -1; }
    int back() const { return sz ? a[(t - 1 + cap) % cap] : -1; }
};

int main() {
    int cap, q;
    cin >> cap >> q;
    ArrDeque dq(cap);

    while (q--) {
        string op;
        cin >> op;
        if (op == "PUSHFRONT") {
            int x; cin >> x;
            cout << (dq.pushFront(x) ? "true" : "false") << "\n";
        } else if (op == "PUSHBACK") {
            int x; cin >> x;
            cout << (dq.pushBack(x) ? "true" : "false") << "\n";
        } else if (op == "POPFRONT") cout << dq.popFront() << "\n";
        else if (op == "POPBACK") cout << dq.popBack() << "\n";
        else if (op == "FRONT") cout << dq.front() << "\n";
        else cout << dq.back() << "\n";
    }

    return 0;
}
```

## Q23. Task Scheduler with Cooldown

### Problem Statement
Given tasks as capital letters and cooldown `n`, find minimum intervals to execute all tasks.

### Input Format
- string tasks
- integer n

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
    int cnt = 0;
    for (int x : f) if (x == mx) cnt++;

    int part = (mx - 1) * (n + 1) + cnt;
    cout << max((int)tasks.size(), part) << "\n";
    return 0;
}
```

## Q24. Story-Based Call Center Queue Simulation

### Problem Statement
Customers arrive with service times. One agent handles FIFO queue.
Given arrival/service arrays, print waiting time for each customer.

### Input Format
- `N`
- `N` arrival times
- `N` service durations

### Output Format
- waiting times

### Example
Input:
```text
3
0 1 2
3 2 1
```
Output:
```text
0 2 3
```

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

## Q25. Story-Based Print Queue Priority Simulation

### Problem Statement
Given job priorities and target index, each step prints highest priority job at front else rotates.
Return time when target prints.

### Input Format
- `N idx`
- `N` priorities

### Output Format
- print order time of target (1-based)

### Example
Input:
```text
6 0
1 1 9 1 1 1
```
Output:
```text
5
```

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
            time++;
            pq.pop();
            if (cur.second == idx) {
                cout << time << "\n";
                return 0;
            }
        } else q.push(cur);
    }

    return 0;
}
```

## 2) Suggested Revision Order

1. Core queue implementation: `Q1-Q5`
2. Stream and reordering: `Q6-Q9`, `Q21`, `Q22`
3. Deque/sliding window patterns: `Q10-Q12`
4. BFS queue problems: `Q13-Q16`, `Q20`
5. Story/simulation: `Q17-Q19`, `Q23-Q25`

## 3) Edge-Case Checklist

- empty queue/deque operations
- capacity full in circular queue
- K > N cases in window problems
- BFS with no source nodes
- repeated nodes/states in BFS (always mark visited)

## 4) Most Important Queue Questions

1. circular queue/deque design (`Q1`, `Q5`, `Q22`)
2. first non-repeating stream (`Q6`)
3. sliding window max with deque (`Q10`)
4. rotten oranges / matrix BFS (`Q13`, `Q14`)
5. queue simulation stories (`Q24`, `Q25`)

