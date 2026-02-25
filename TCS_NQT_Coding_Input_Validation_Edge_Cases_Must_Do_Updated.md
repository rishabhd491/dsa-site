# TCS NQT Coding Input Validation and Edge Cases (Must-Do Updated)

Source: `/Users/rishabhdubey/Documents/prep for tcsnqt/TCS_NQT_Coding_Input_Validation_Edge_Cases_CPP.md`

Included high-yield defensive coding sections only.

## Included Sections

1, 2, 3, 7, 8, 11, 13, 15, 20

---

This document is focused only on writing safer coding solutions that do not fail on tricky inputs.
Use it as a defensive-coding playbook for TCS NQT style questions.

---

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
