# TCS NQT Stack: Full Questions and C++ Solutions (Must-Do Updated)

Source: `/Users/rishabhdubey/Documents/prep for tcsnqt/TCS_NQT_Stack_Full_Questions_Answers_CPP.md`

This version includes only high-priority questions for 15-day TCS NQT prep.

## Included Questions

Q1, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q12, Q13, Q14, Q16, Q17, Q18, Q19, Q20, Q21, Q24, Q25

---

This document is a complete Stack preparation set for TCS NQT coding rounds.
It covers basic stack operations, monotonic-stack patterns, expression problems, and story-based problems.

## 1) Stack Topic Checklist

1. Stack implementation (array/linked list)
2. Balanced parentheses and variants
3. Expression conversion/evaluation
4. Monotonic stack (NGE/NSE/stock span)
5. Histogram/rectangle stack patterns
6. String simplification and decoding
7. Stack simulation and sequence validation
8. Story-based stack applications

---

## Q1. Implement Stack Using Array

### Problem Statement
Implement push, pop, top, and size for a stack using array.

### Input Format
- First line: `Q`
- Next `Q` lines:
  - `PUSH x`
  - `POP`
  - `TOP`
  - `SIZE`

### Output Format
- For `POP` and `TOP`, print returned value or `-1` if empty
- For `SIZE`, print stack size

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

class StackArr {
    vector<long long> a;
public:
    void push(long long x) { a.push_back(x); }
    long long pop() {
        if (a.empty()) return -1;
        long long x = a.back();
        a.pop_back();
        return x;
    }
    long long top() const { return a.empty() ? -1 : a.back(); }
    int size() const { return (int)a.size(); }
};

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int q;
    cin >> q;
    StackArr st;

    while (q--) {
        string op;
        cin >> op;
        if (op == "PUSH") {
            long long x;
            cin >> x;
            st.push(x);
        } else if (op == "POP") {
            cout << st.pop() << "\n";
        } else if (op == "TOP") {
            cout << st.top() << "\n";
        } else {
            cout << st.size() << "\n";
        }
    }
    return 0;
}
```

## Q3. Valid Parentheses

### Problem Statement
Given a bracket string containing `()[]{}`, check if it is valid.

### Input Format
- One string `S`

### Output Format
- `Yes` or `No`

### Example
Input:
```text
{[()]}
```
Output:
```text
Yes
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

bool match(char a, char b) {
    return (a=='('&&b==')') || (a=='['&&b==']') || (a=='{'&&b=='}');
}

int main() {
    string s;
    cin >> s;

    stack<char> st;
    for (char c : s) {
        if (c=='(' || c=='[' || c=='{') st.push(c);
        else {
            if (st.empty() || !match(st.top(), c)) {
                cout << "No\n";
                return 0;
            }
            st.pop();
        }
    }

    cout << (st.empty() ? "Yes" : "No") << "\n";
    return 0;
}
```

## Q4. Detect Redundant Parentheses

### Problem Statement
Given expression with brackets and operators, check if redundant brackets exist.

### Input Format
- Expression string `S`

### Output Format
- `Yes` if redundant else `No`

### Example
Input:
```text
((a+b))
```
Output:
```text
Yes
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin >> s;
    stack<char> st;

    for (char c : s) {
        if (c == ')') {
            bool hasOp = false;
            while (!st.empty() && st.top() != '(') {
                char t = st.top(); st.pop();
                if (t=='+' || t=='-' || t=='*' || t=='/' ) hasOp = true;
            }
            if (!st.empty()) st.pop();
            if (!hasOp) {
                cout << "Yes\n";
                return 0;
            }
        } else {
            st.push(c);
        }
    }

    cout << "No\n";
    return 0;
}
```

## Q5. Min Stack

### Problem Statement
Design stack supporting `PUSH`, `POP`, `TOP`, `GETMIN` in O(1).

### Input Format
- First line `Q`
- Queries: `PUSH x`, `POP`, `TOP`, `GETMIN`

### Output Format
- Print outputs for `POP`, `TOP`, `GETMIN`; `-1` when invalid

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

class MinStack {
    stack<long long> st, mn;
public:
    void push(long long x) {
        st.push(x);
        if (mn.empty()) mn.push(x);
        else mn.push(min(mn.top(), x));
    }
    long long pop() {
        if (st.empty()) return -1;
        long long x = st.top();
        st.pop();
        mn.pop();
        return x;
    }
    long long top() const { return st.empty() ? -1 : st.top(); }
    long long getMin() const { return mn.empty() ? -1 : mn.top(); }
};

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int q;
    cin >> q;
    MinStack st;

    while (q--) {
        string op;
        cin >> op;
        if (op == "PUSH") {
            long long x;
            cin >> x;
            st.push(x);
        } else if (op == "POP") cout << st.pop() << "\n";
        else if (op == "TOP") cout << st.top() << "\n";
        else cout << st.getMin() << "\n";
    }
    return 0;
}
```

## Q6. Evaluate Postfix Expression

### Problem Statement
Evaluate postfix expression tokens.

### Input Format
- First line: `N`
- Second line: `N` space-separated tokens (`+,-,*,/` and integers)

### Output Format
- Expression value

### Example
Input:
```text
5
2 1 + 3 *
```
Output:
```text
9
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<string> tok(n);
    for (auto &x : tok) cin >> x;

    stack<long long> st;
    for (string t : tok) {
        if (t=="+"||t=="-"||t=="*"||t=="/") {
            long long b = st.top(); st.pop();
            long long a = st.top(); st.pop();
            if (t=="+") st.push(a+b);
            else if (t=="-") st.push(a-b);
            else if (t=="*") st.push(a*b);
            else st.push(a/b);
        } else st.push(stoll(t));
    }

    cout << st.top() << "\n";
    return 0;
}
```

## Q7. Infix to Postfix Conversion

### Problem Statement
Convert infix expression (single-letter operands, +,-,*,/,^, brackets) to postfix.

### Input Format
- Infix string

### Output Format
- Postfix string

### Example
Input:
```text
a+b*(c-d)
```
Output:
```text
abcd-*+
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int prec(char c) {
    if (c=='^') return 3;
    if (c=='*' || c=='/') return 2;
    if (c=='+' || c=='-') return 1;
    return -1;
}

int main() {
    string s;
    cin >> s;

    stack<char> st;
    string out;

    for (char c : s) {
        if (isalnum((unsigned char)c)) out.push_back(c);
        else if (c=='(') st.push(c);
        else if (c==')') {
            while (!st.empty() && st.top()!='(') {
                out.push_back(st.top()); st.pop();
            }
            if (!st.empty()) st.pop();
        } else {
            while (!st.empty() && st.top()!='(' &&
                   (prec(st.top()) > prec(c) || (prec(st.top())==prec(c) && c!='^'))) {
                out.push_back(st.top()); st.pop();
            }
            st.push(c);
        }
    }

    while (!st.empty()) {
        out.push_back(st.top()); st.pop();
    }

    cout << out << "\n";
    return 0;
}
```

## Q8. Evaluate Infix Expression

### Problem Statement
Evaluate infix expression containing non-negative integers and operators `+,-,*,/` with parentheses.

### Input Format
- One expression string without spaces

### Output Format
- Result integer

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int prec(char c) {
    if (c=='+' || c=='-') return 1;
    if (c=='*' || c=='/') return 2;
    return 0;
}

long long apply(long long a, long long b, char op) {
    if (op=='+') return a+b;
    if (op=='-') return a-b;
    if (op=='*') return a*b;
    return a/b;
}

int main() {
    string s;
    cin >> s;

    stack<long long> vals;
    stack<char> ops;

    for (int i = 0; i < (int)s.size(); i++) {
        if (isdigit((unsigned char)s[i])) {
            long long num = 0;
            while (i < (int)s.size() && isdigit((unsigned char)s[i])) {
                num = num * 10 + (s[i]-'0');
                i++;
            }
            i--;
            vals.push(num);
        } else if (s[i]=='(') ops.push('(');
        else if (s[i]==')') {
            while (!ops.empty() && ops.top()!='(') {
                long long b = vals.top(); vals.pop();
                long long a = vals.top(); vals.pop();
                vals.push(apply(a,b,ops.top()));
                ops.pop();
            }
            if (!ops.empty()) ops.pop();
        } else {
            while (!ops.empty() && prec(ops.top()) >= prec(s[i])) {
                long long b = vals.top(); vals.pop();
                long long a = vals.top(); vals.pop();
                vals.push(apply(a,b,ops.top()));
                ops.pop();
            }
            ops.push(s[i]);
        }
    }

    while (!ops.empty()) {
        long long b = vals.top(); vals.pop();
        long long a = vals.top(); vals.pop();
        vals.push(apply(a,b,ops.top()));
        ops.pop();
    }

    cout << vals.top() << "\n";
    return 0;
}
```

## Q9. Next Greater Element (Right)

### Problem Statement
For each array element, find next greater element to its right else `-1`.

### Input Format
- `N`
- `N` integers

### Output Format
- NGE array

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<long long> a(n), ans(n, -1);
    for (auto &x : a) cin >> x;

    stack<int> st;
    for (int i = n - 1; i >= 0; i--) {
        while (!st.empty() && a[st.top()] <= a[i]) st.pop();
        if (!st.empty()) ans[i] = a[st.top()];
        st.push(i);
    }

    for (auto x : ans) cout << x << " ";
    cout << "\n";
    return 0;
}
```

## Q10. Next Greater Element Circular

### Problem Statement
Given circular array, find next greater element for each index.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n), ans(n, -1);
    for (auto &x : a) cin >> x;

    stack<int> st;
    for (int i = 2*n - 1; i >= 0; i--) {
        int idx = i % n;
        while (!st.empty() && st.top() <= a[idx]) st.pop();
        if (i < n && !st.empty()) ans[idx] = st.top();
        st.push(a[idx]);
    }

    for (int x : ans) cout << x << " ";
    cout << "\n";
    return 0;
}
```

## Q12. Stock Span

### Problem Statement
For each day price, span = number of consecutive previous days with price <= today.

### Input Format
- `N`
- `N` prices

### Output Format
- spans

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> p(n), span(n);
    for (auto &x : p) cin >> x;

    stack<int> st;
    for (int i = 0; i < n; i++) {
        while (!st.empty() && p[st.top()] <= p[i]) st.pop();
        span[i] = st.empty() ? (i + 1) : (i - st.top());
        st.push(i);
    }

    for (int x : span) cout << x << " ";
    cout << "\n";
    return 0;
}
```

## Q13. Daily Temperatures

### Problem Statement
For each day, find number of days until a warmer temperature. If none, `0`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> t(n), ans(n, 0);
    for (auto &x : t) cin >> x;

    stack<int> st;
    for (int i = n - 1; i >= 0; i--) {
        while (!st.empty() && t[st.top()] <= t[i]) st.pop();
        if (!st.empty()) ans[i] = st.top() - i;
        st.push(i);
    }

    for (int x : ans) cout << x << " ";
    cout << "\n";
    return 0;
}
```

## Q14. Largest Rectangle in Histogram

### Problem Statement
Given bar heights, find max rectangle area.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<long long> h(n);
    for (auto &x : h) cin >> x;

    stack<int> st;
    long long best = 0;

    for (int i = 0; i <= n; i++) {
        long long curH = (i == n ? 0 : h[i]);
        while (!st.empty() && h[st.top()] > curH) {
            long long ht = h[st.top()]; st.pop();
            int l = st.empty() ? -1 : st.top();
            long long width = i - l - 1;
            best = max(best, ht * width);
        }
        st.push(i);
    }

    cout << best << "\n";
    return 0;
}
```

## Q16. Trap Rain Water (Stack Method)

### Problem Statement
Given heights array, compute trapped water using stack.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> h(n);
    for (auto &x : h) cin >> x;

    stack<int> st;
    long long water = 0;

    for (int i = 0; i < n; i++) {
        while (!st.empty() && h[i] > h[st.top()]) {
            int mid = st.top(); st.pop();
            if (st.empty()) break;
            int l = st.top();
            int width = i - l - 1;
            int ht = min(h[l], h[i]) - h[mid];
            water += 1LL * width * ht;
        }
        st.push(i);
    }

    cout << water << "\n";
    return 0;
}
```

## Q17. Simplify Unix Path

### Problem Statement
Simplify absolute Unix path with `.`, `..`, and extra `/`.

### Input Format
- Path string

### Output Format
- Canonical path

### Example
Input:
```text
/a/./b/../../c/
```
Output:
```text
/c
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string path;
    cin >> path;

    vector<string> st;
    string token;

    for (int i = 0; i <= (int)path.size(); i++) {
        if (i == (int)path.size() || path[i] == '/') {
            if (token == "..") {
                if (!st.empty()) st.pop_back();
            } else if (!token.empty() && token != ".") {
                st.push_back(token);
            }
            token.clear();
        } else {
            token.push_back(path[i]);
        }
    }

    if (st.empty()) {
        cout << "/\n";
        return 0;
    }

    string ans;
    for (auto &s : st) ans += "/" + s;
    cout << ans << "\n";
    return 0;
}
```

## Q18. Decode String (k[encoded])

### Problem Statement
Decode strings like `3[a2[c]]`.

### Input Format
- Encoded string

### Output Format
- Decoded string

### Example
Input:
```text
3[a2[c]]
```
Output:
```text
accaccacc
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin >> s;

    stack<int> cnt;
    stack<string> st;

    string cur = "";
    int num = 0;

    for (char c : s) {
        if (isdigit((unsigned char)c)) {
            num = num * 10 + (c - '0');
        } else if (c == '[') {
            cnt.push(num);
            st.push(cur);
            num = 0;
            cur = "";
        } else if (c == ']') {
            int times = cnt.top(); cnt.pop();
            string prev = st.top(); st.pop();

            string rep;
            rep.reserve(cur.size() * times);
            while (times--) rep += cur;
            cur = prev + rep;
        } else {
            cur.push_back(c);
        }
    }

    cout << cur << "\n";
    return 0;
}
```

## Q19. Remove K Digits to Form Smallest Number

### Problem Statement
Given numeric string and integer `k`, remove exactly `k` digits to form smallest possible number.

### Input Format
- Numeric string `num`
- Integer `k`

### Output Format
- Smallest number string

### Example
Input:
```text
1432219
3
```
Output:
```text
1219
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string num;
    int k;
    cin >> num >> k;

    string st;
    for (char c : num) {
        while (!st.empty() && k > 0 && st.back() > c) {
            st.pop_back();
            k--;
        }
        st.push_back(c);
    }

    while (k > 0 && !st.empty()) {
        st.pop_back();
        k--;
    }

    int i = 0;
    while (i < (int)st.size() && st[i] == '0') i++;
    string ans = st.substr(i);

    cout << (ans.empty() ? "0" : ans) << "\n";
    return 0;
}
```

## Q20. Asteroid Collision

### Problem Statement
Given moving asteroids (sign = direction, abs = size), return final state.

### Input Format
- `N`
- `N` integers

### Output Format
- Remaining asteroids in order (or blank)

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (auto &x : a) cin >> x;

    vector<int> st;

    for (int x : a) {
        bool alive = true;
        while (alive && x < 0 && !st.empty() && st.back() > 0) {
            if (st.back() < -x) st.pop_back();
            else if (st.back() == -x) {
                st.pop_back();
                alive = false;
            } else alive = false;
        }
        if (alive) st.push_back(x);
    }

    for (int x : st) cout << x << " ";
    cout << "\n";
    return 0;
}
```

## Q21. Celebrity Problem

### Problem Statement
Given `N x N` matrix `M` (`M[i][j]=1` means i knows j), find celebrity (known by everyone, knows no one), else `-1`.

### Input Format
- `N`
- `N` lines each with `N` values

### Output Format
- celebrity index or `-1`

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<vector<int>> m(n, vector<int>(n));
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) cin >> m[i][j];
    }

    stack<int> st;
    for (int i = 0; i < n; i++) st.push(i);

    while (st.size() > 1) {
        int a = st.top(); st.pop();
        int b = st.top(); st.pop();
        if (m[a][b]) st.push(b);
        else st.push(a);
    }

    int c = st.top();

    for (int i = 0; i < n; i++) {
        if (i == c) continue;
        if (m[c][i] || !m[i][c]) {
            cout << -1 << "\n";
            return 0;
        }
    }

    cout << c << "\n";
    return 0;
}
```

## Q24. Validate Stack Sequences

### Problem Statement
Given pushed and popped sequences, check if popped order is valid stack pop order.

### Input Format
- `N`
- pushed sequence
- popped sequence

### Output Format
- `Yes` / `No`

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> pushed(n), popped(n);
    for (auto &x : pushed) cin >> x;
    for (auto &x : popped) cin >> x;

    stack<int> st;
    int j = 0;

    for (int x : pushed) {
        st.push(x);
        while (!st.empty() && j < n && st.top() == popped[j]) {
            st.pop();
            j++;
        }
    }

    cout << (j == n ? "Yes" : "No") << "\n";
    return 0;
}
```

## Q25. Story-Based Browser Navigation (Back/Forward)

### Problem Statement
Simulate browser with commands:
- `VISIT url`
- `BACK`
- `FORWARD`
- `CURRENT`
Initially at `home`.

### Input Format
- `Q`
- `Q` command lines

### Output Format
- For `BACK`, `FORWARD`, `CURRENT`, print current page

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int q;
    cin >> q;

    stack<string> backSt, fwdSt;
    string cur = "home";

    while (q--) {
        string op;
        cin >> op;

        if (op == "VISIT") {
            string url;
            cin >> url;
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

## 2) Suggested Revision Order

1. Basics and parentheses: `Q1-Q5`
2. Expression and conversion: `Q6-Q8`
3. Monotonic stack core: `Q9-Q16`
4. String/simulation stack: `Q17-Q21`
5. Recursion and validation: `Q22-Q25`

## 3) Edge-Case Checklist

- Empty stack operations
- Duplicate elements in monotonic problems
- Very long expressions
- Integer overflow in expression evaluation
- All opening/all closing parentheses
- No celebrity case in matrix

## 4) Most Important Stack Questions

1. Valid parentheses (`Q3`)
2. NGE/Stock span (`Q9`, `Q12`)
3. Largest rectangle (`Q14`)
4. Infix/Postfix (`Q6`, `Q7`, `Q8`)
5. Min stack + decode/remove digits (`Q5`, `Q18`, `Q19`)
