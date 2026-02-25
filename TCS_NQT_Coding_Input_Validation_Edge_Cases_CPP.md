# TCS NQT Coding: Input Validation and Edge-Case Handling (C++)

This document is focused only on writing safer coding solutions that do not fail on tricky inputs.
Use it as a defensive-coding playbook for TCS NQT style questions.

## 1) Universal Edge-Case Checklist

Before coding any question, explicitly check:

1. Empty input (`N = 0`, empty string, empty matrix)
2. Single element (`N = 1`)
3. All values same
4. All negative / all zero
5. Very large `N` (time complexity risk)
6. Overflow risk (`int` vs `long long`)
7. Invalid range values (if constraints matter)
8. No valid answer case (print `-1` / `No` / empty output exactly as required)
9. Boundary indices (`0`, `N-1`, `L > R`, `K > N`)
10. Format correctness (output spacing/newline strict)

---

## 2) Safe C++ Input Template

```cpp
#include <bits/stdc++.h>
using namespace std;

bool readInt(long long &x) {
    if (!(cin >> x)) return false;
    return true;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    long long nLL;
    if (!readInt(nLL)) return 0;          // no input
    if (nLL < 0 || nLL > 2000000) {       // defensive upper bound
        cout << "Invalid input\n";
        return 0;
    }
    int n = (int)nLL;

    vector<long long> a;
    a.reserve(n);
    for (int i = 0; i < n; i++) {
        long long x;
        if (!readInt(x)) {
            cout << "Invalid input\n";
            return 0;
        }
        a.push_back(x);
    }

    // solve...
    cout << "OK\n";
    return 0;
}
```

---

## 3) Overflow-Safe Helpers

```cpp
#include <bits/stdc++.h>
using namespace std;

bool safeAddLL(long long a, long long b, long long &out) {
    if ((b > 0 && a > LLONG_MAX - b) || (b < 0 && a < LLONG_MIN - b)) return false;
    out = a + b;
    return true;
}

bool safeMulLL(long long a, long long b, long long &out) {
    if (a == 0 || b == 0) { out = 0; return true; }
    if (a == -1 && b == LLONG_MIN) return false;
    if (b == -1 && a == LLONG_MIN) return false;
    if (llabs(a) > LLONG_MAX / llabs(b)) return false;
    out = a * b;
    return true;
}
```

---

## 4) Array: Maximum Subarray Sum (All-Negative Safe)

Edge cases covered:
- `N = 0` -> return 0 or invalid (based on problem)
- all negative values
- large absolute values (use `long long`)

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    if (!(cin >> n) || n < 0) return 0;
    if (n == 0) { cout << 0 << "\n"; return 0; }

    vector<long long> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    long long cur = a[0], best = a[0];
    for (int i = 1; i < n; i++) {
        cur = max(a[i], cur + a[i]);
        best = max(best, cur);
    }
    cout << best << "\n";
    return 0;
}
```

---

## 5) Array Rotation: `K` Can Be Huge / `N` Can Be 0

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    long long k;
    cin >> n >> k;
    if (n < 0) return 0;
    vector<long long> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    if (n == 0) { cout << "\n"; return 0; }
    k %= n;
    if (k < 0) k += n; // if negative rotation allowed

    rotate(a.begin(), a.begin() + (int)k, a.end()); // left rotate by k
    for (long long x : a) cout << x << " ";
    cout << "\n";
    return 0;
}
```

---

## 6) Hashing: Frequency with Tie Handling

Edge cases:
- empty array
- multiple elements with same max frequency
- negative values

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    if (n <= 0) { cout << -1 << "\n"; return 0; }

    unordered_map<long long, int> freq;
    long long bestVal = 0;
    int bestCnt = 0;

    for (int i = 0; i < n; i++) {
        long long x; cin >> x;
        int c = ++freq[x];
        if (c > bestCnt || (c == bestCnt && x < bestVal)) {
            bestCnt = c;
            bestVal = x; // tie: smaller value wins (explicit rule)
        }
    }
    cout << bestVal << "\n";
    return 0;
}
```

---

## 7) String Parsing with Multiple Delimiters

Edge cases:
- empty string
- repeated delimiters
- leading/trailing delimiters

```cpp
#include <bits/stdc++.h>
using namespace std;

bool isDelim(char c) {
    return c == ',' || c == ';' || c == '|' || c == ' ';
}

int main() {
    string s;
    getline(cin, s);

    vector<string> tokens;
    string cur;
    for (char c : s) {
        if (isDelim(c)) {
            if (!cur.empty()) {
                tokens.push_back(cur);
                cur.clear();
            }
        } else {
            cur.push_back(c);
        }
    }
    if (!cur.empty()) tokens.push_back(cur);

    cout << tokens.size() << "\n";
    return 0;
}
```

---

## 8) Valid Parentheses: Early Failure Safe

Edge cases:
- odd-length string
- extra closing bracket first
- invalid characters

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin >> s;
    if (s.size() % 2 == 1) { cout << "No\n"; return 0; }

    unordered_map<char, char> mp = {{')','('}, {']','['}, {'}','{'}};
    stack<char> st;

    for (char c : s) {
        if (c == '(' || c == '[' || c == '{') {
            st.push(c);
        } else if (mp.count(c)) {
            if (st.empty() || st.top() != mp[c]) {
                cout << "No\n";
                return 0;
            }
            st.pop();
        } else {
            cout << "No\n"; // invalid character
            return 0;
        }
    }
    cout << (st.empty() ? "Yes" : "No") << "\n";
    return 0;
}
```

---

## 9) Sliding Window (Fixed K): `K > N` Safe

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;
    if (n < 0 || k < 0) return 0;
    vector<long long> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    if (k == 0) { cout << 0 << "\n"; return 0; }
    if (k > n) { cout << -1 << "\n"; return 0; }

    long long win = 0;
    for (int i = 0; i < k; i++) win += a[i];
    long long ans = win;

    for (int i = k; i < n; i++) {
        win += a[i] - a[i - k];
        ans = max(ans, win);
    }
    cout << ans << "\n";
    return 0;
}
```

---

## 10) Two Pointers (Sorted Pair Sum): No Pair Case Safe

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    long long target;
    cin >> n >> target;
    if (n < 2) { cout << "No\n"; return 0; }

    vector<long long> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];
    sort(a.begin(), a.end());

    int l = 0, r = n - 1;
    while (l < r) {
        long long s = a[l] + a[r];
        if (s == target) { cout << "Yes\n"; return 0; }
        if (s < target) l++;
        else r--;
    }
    cout << "No\n";
    return 0;
}
```

---

## 11) Binary Search: Boundaries + Duplicates

Find first occurrence safely.

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    long long x;
    cin >> n >> x;
    vector<long long> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    int lo = 0, hi = n - 1, ans = -1;
    while (lo <= hi) {
        int mid = lo + (hi - lo) / 2;
        if (a[mid] >= x) hi = mid - 1;
        else lo = mid + 1;
        if (a[mid] == x) ans = mid;
    }
    cout << ans << "\n";
    return 0;
}
```

---

## 12) Linked List: Reverse (Null/Single Safe)

```cpp
#include <bits/stdc++.h>
using namespace std;

struct Node {
    int val;
    Node* next;
    Node(int v) : val(v), next(nullptr) {}
};

Node* reverseList(Node* head) {
    if (!head || !head->next) return head;
    Node* prev = nullptr;
    Node* cur = head;
    while (cur) {
        Node* nxt = cur->next;
        cur->next = prev;
        prev = cur;
        cur = nxt;
    }
    return prev;
}

int main() {
    // Build/read list as per question format.
    return 0;
}
```

---

## 13) Stack/Queue Operations: Underflow Guard

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int q;
    cin >> q;
    stack<int> st;

    while (q--) {
        string cmd;
        cin >> cmd;
        if (cmd == "push") {
            int x; cin >> x;
            st.push(x);
        } else if (cmd == "pop") {
            if (st.empty()) cout << "Underflow\n";
            else st.pop();
        } else if (cmd == "top") {
            if (st.empty()) cout << -1 << "\n";
            else cout << st.top() << "\n";
        } else {
            cout << "Invalid command\n";
        }
    }
    return 0;
}
```

---

## 14) Matrix Traversal: Dimension Validation

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, m;
    cin >> n >> m;
    if (n <= 0 || m <= 0) { cout << "\n"; return 0; }

    vector<vector<int>> a(n, vector<int>(m));
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) cin >> a[i][j];
    }

    // Safe boundary-based traversal
    int top = 0, bottom = n - 1, left = 0, right = m - 1;
    while (top <= bottom && left <= right) {
        for (int j = left; j <= right; j++) cout << a[top][j] << " ";
        top++;
        for (int i = top; i <= bottom; i++) cout << a[i][right] << " ";
        right--;
        if (top <= bottom) {
            for (int j = right; j >= left; j--) cout << a[bottom][j] << " ";
            bottom--;
        }
        if (left <= right) {
            for (int i = bottom; i >= top; i--) cout << a[i][left] << " ";
            left++;
        }
    }
    cout << "\n";
    return 0;
}
```

---

## 15) DP: Proper Base Cases + Impossible State

Coin change (minimum coins) with impossible-case handling.

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, amount;
    cin >> n >> amount;
    if (n < 0 || amount < 0) return 0;

    vector<int> coins(n);
    for (int i = 0; i < n; i++) cin >> coins[i];

    const int INF = 1e9;
    vector<int> dp(amount + 1, INF);
    dp[0] = 0;

    for (int x = 1; x <= amount; x++) {
        for (int c : coins) {
            if (c > 0 && x - c >= 0 && dp[x - c] != INF) {
                dp[x] = min(dp[x], dp[x - c] + 1);
            }
        }
    }

    cout << (dp[amount] == INF ? -1 : dp[amount]) << "\n";
    return 0;
}
```

---

## 16) Greedy: Invalid Interval Filtering

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<pair<int,int>> seg;
    for (int i = 0; i < n; i++) {
        int l, r;
        cin >> l >> r;
        if (l <= r) seg.push_back({l, r}); // discard invalid interval
    }

    sort(seg.begin(), seg.end(), [](auto &a, auto &b) {
        return a.second < b.second;
    });

    int cnt = 0;
    int lastEnd = INT_MIN;
    for (auto &p : seg) {
        if (p.first >= lastEnd) {
            cnt++;
            lastEnd = p.second;
        }
    }
    cout << cnt << "\n";
    return 0;
}
```

---

## 17) Recursion: Base Case + Depth Guard Mindset

```cpp
#include <bits/stdc++.h>
using namespace std;

long long fact(int n) {
    if (n < 0) return -1;   // invalid
    if (n <= 1) return 1;   // base case
    return 1LL * n * fact(n - 1);
}

int main() {
    int n;
    cin >> n;
    if (n > 20) {           // avoid overflow for factorial in long long
        cout << "Overflow risk\n";
        return 0;
    }
    cout << fact(n) << "\n";
    return 0;
}
```

---

## 18) Bit Manipulation: Shift Safety

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long x;
    int k;
    cin >> x >> k;
    if (k < 0 || k >= 63) {
        cout << "Invalid bit index\n";
        return 0;
    }

    long long mask = 1LL << k;
    cout << ((x & mask) ? 1 : 0) << "\n";
    return 0;
}
```

---

## 19) Common No-Answer Output Contract

Always decide and keep fixed:

1. `-1` for impossible numeric answer
2. `No` / `false` for feasibility checks
3. Empty line for empty sequence output
4. `0` when count/sum naturally equals zero

Do not mix conventions inside the same document/problem.

---

## 20) Final Defensive Coding Flow (Use in Every Question)

1. Read input safely.
2. Validate constraints and structural assumptions.
3. Handle trivial cases early (`N=0`, `N=1`, empty string).
4. Choose data type to avoid overflow.
5. Implement main logic.
6. Handle no-answer branch explicitly.
7. Print exact required format.
8. Dry-run 5 edge cases before finalizing.

If you practice these patterns, your TCS NQT coding answers become robust against hidden test cases.
