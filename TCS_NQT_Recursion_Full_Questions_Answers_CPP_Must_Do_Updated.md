# TCS NQT Recursion: Full Questions and Answers in C++ (Must-Do Updated)

Source: `/Users/rishabhdubey/Documents/prep for tcsnqt/TCS_NQT_Recursion_Full_Questions_Answers_CPP.md`

This version includes only high-priority questions for 15-day TCS NQT prep.

## Included Questions

Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q10, Q13, Q17, Q18, Q21, Q24, Q27, Q29

---

This document is a complete recursion + backtracking preparation sheet for TCS NQT coding.
It covers beginner recursion, return-based recursion, divide-and-conquer recursion, and high-yield backtracking patterns.

## 1) Recursion Coverage Map

This document covers:
1. Basic recursion (print, sum, factorial)
2. Recursion on digits, arrays, and strings
3. Divide-and-conquer recursion (binary search, fast power)
4. Subsequence and subset generation
5. Backtracking (combinations, permutations)
6. Grid recursion (maze, word search)
7. Constraint recursion (N-Queens, Sudoku)
8. Classic recursion puzzles (Hanoi, Josephus)

## 2) Recursion Rules for Exams

- Always define: base case, hypothesis, recursive step.
- Reduce problem size strictly in every recursive call.
- Keep input/output format exact.
- Add pruning in backtracking where possible.
- Use `long long` for sums/counts where overflow is possible.

## 3) Common Mistakes

- Missing or wrong base case (infinite recursion).
- Modifying shared state without undo step in backtracking.
- Forgetting duplicate handling in combination/permutation problems.
- Exponential recursion used where memoization is required.

---

---

## Q1. Print Numbers from 1 to N

### Problem
Given `N`, print numbers from `1` to `N` using recursion.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

void print1toN(int cur, int n) {
    if (cur > n) return;
    cout << cur << " ";
    print1toN(cur + 1, n);
}

int main() {
    int n;
    cin >> n;
    print1toN(1, n);
    cout << "\n";
    return 0;
}
```

---

## Q2. Print Numbers from N to 1

### Problem
Given `N`, print numbers from `N` to `1` using recursion.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

void printNto1(int n) {
    if (n == 0) return;
    cout << n << " ";
    printNto1(n - 1);
}

int main() {
    int n;
    cin >> n;
    printNto1(n);
    cout << "\n";
    return 0;
}
```

---

## Q3. Sum of First N Natural Numbers

### Problem
Find `1 + 2 + ... + N` using recursion.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

long long sumN(long long n) {
    if (n <= 0) return 0;
    return n + sumN(n - 1);
}

int main() {
    long long n;
    cin >> n;
    cout << sumN(n) << "\n";
    return 0;
}
```

---

## Q4. Factorial of N

### Problem
Find `N!` using recursion.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

long long fact(long long n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
}

int main() {
    long long n;
    cin >> n;
    cout << fact(n) << "\n";
    return 0;
}
```

---

## Q5. Fast Power (a^b)

### Problem
Compute `a^b` using recursion in `O(log b)` time.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

long long fastPow(long long a, long long b) {
    if (b == 0) return 1;
    long long half = fastPow(a, b / 2);
    long long ans = half * half;
    if (b % 2) ans *= a;
    return ans;
}

int main() {
    long long a, b;
    cin >> a >> b;
    cout << fastPow(a, b) << "\n";
    return 0;
}
```

---

## Q6. Fibonacci Number (Memoized Recursion)

### Problem
Find the `n-th` Fibonacci number using recursion + memoization.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

long long fib(int n, vector<long long>& dp) {
    if (n <= 1) return n;
    if (dp[n] != -1) return dp[n];
    return dp[n] = fib(n - 1, dp) + fib(n - 2, dp);
}

int main() {
    int n;
    cin >> n;
    vector<long long> dp(n + 1, -1);
    cout << fib(n, dp) << "\n";
    return 0;
}
```

---

## Q7. GCD of Two Numbers (Euclid Recursion)

### Problem
Find GCD of `a` and `b` recursively.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

long long gcdRec(long long a, long long b) {
    if (b == 0) return a;
    return gcdRec(b, a % b);
}

int main() {
    long long a, b;
    cin >> a >> b;
    cout << gcdRec(a, b) << "\n";
    return 0;
}
```

---

## Q10. Check Palindrome String

### Problem
Check if a string is palindrome using recursion.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

bool isPal(const string& s, int l, int r) {
    if (l >= r) return true;
    if (s[l] != s[r]) return false;
    return isPal(s, l + 1, r - 1);
}

int main() {
    string s;
    cin >> s;
    cout << (isPal(s, 0, (int)s.size() - 1) ? "Yes" : "No") << "\n";
    return 0;
}
```

---

## Q13. Check if Array is Sorted

### Problem
Check whether array is non-decreasing using recursion.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

bool sortedRec(const vector<int>& a, int i) {
    if (i == (int)a.size() - 1) return true;
    if (a[i] > a[i + 1]) return false;
    return sortedRec(a, i + 1);
}

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    if (n <= 1) {
        cout << "Yes\n";
    } else {
        cout << (sortedRec(a, 0) ? "Yes" : "No") << "\n";
    }
    return 0;
}
```

---

## Q17. Recursive Binary Search

### Problem
Find index of key `x` in sorted array using recursion. If absent print `-1`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int bsearchRec(const vector<int>& a, int l, int r, int x) {
    if (l > r) return -1;
    int m = l + (r - l) / 2;
    if (a[m] == x) return m;
    if (a[m] > x) return bsearchRec(a, l, m - 1, x);
    return bsearchRec(a, m + 1, r, x);
}

int main() {
    int n, x;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];
    cin >> x;

    cout << bsearchRec(a, 0, n - 1, x) << "\n";
    return 0;
}
```

---

## Q18. Reverse a String Recursively

### Problem
Reverse a string using recursion.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

void revRec(string& s, int l, int r) {
    if (l >= r) return;
    swap(s[l], s[r]);
    revRec(s, l + 1, r - 1);
}

int main() {
    string s;
    cin >> s;
    revRec(s, 0, (int)s.size() - 1);
    cout << s << "\n";
    return 0;
}
```

---

## Q21. Generate All Subsequences of a String

### Problem
Print all subsequences of string `s`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

void genSubs(const string& s, int i, string& cur) {
    if (i == (int)s.size()) {
        cout << (cur.empty() ? "<empty>" : cur) << "\n";
        return;
    }

    cur.push_back(s[i]);
    genSubs(s, i + 1, cur);
    cur.pop_back();

    genSubs(s, i + 1, cur);
}

int main() {
    string s;
    cin >> s;
    string cur;
    genSubs(s, 0, cur);
    return 0;
}
```

---

## Q24. Combination Sum I

### Problem
Given distinct numbers and target `T`, find all combinations where numbers can be reused.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

void dfs(int idx, int target, const vector<int>& a, vector<int>& cur, vector<vector<int>>& ans) {
    if (target == 0) {
        ans.push_back(cur);
        return;
    }
    if (idx == (int)a.size() || target < 0) return;

    cur.push_back(a[idx]);
    dfs(idx, target - a[idx], a, cur, ans);
    cur.pop_back();

    dfs(idx + 1, target, a, cur, ans);
}

int main() {
    int n, target;
    cin >> n >> target;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    vector<int> cur;
    vector<vector<int>> ans;
    dfs(0, target, a, cur, ans);

    if (ans.empty()) {
        cout << -1 << "\n";
        return 0;
    }

    for (auto &v : ans) {
        for (int x : v) cout << x << " ";
        cout << "\n";
    }
    return 0;
}
```

---

## Q27. Permutations of an Array

### Problem
Print all permutations of given array.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

void permute(vector<int>& a, int idx) {
    if (idx == (int)a.size()) {
        for (int x : a) cout << x << " ";
        cout << "\n";
        return;
    }

    for (int i = idx; i < (int)a.size(); i++) {
        swap(a[idx], a[i]);
        permute(a, idx + 1);
        swap(a[idx], a[i]);
    }
}

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    permute(a, 0);
    return 0;
}
```

---

## Q29. Generate Parentheses

### Problem
Given `n` pairs, generate all valid parentheses strings.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

void gen(int n, int open, int close, string& cur, vector<string>& ans) {
    if ((int)cur.size() == 2 * n) {
        ans.push_back(cur);
        return;
    }

    if (open < n) {
        cur.push_back('(');
        gen(n, open + 1, close, cur, ans);
        cur.pop_back();
    }
    if (close < open) {
        cur.push_back(')');
        gen(n, open, close + 1, cur, ans);
        cur.pop_back();
    }
}

int main() {
    int n;
    cin >> n;

    string cur;
    vector<string> ans;
    gen(n, 0, 0, cur, ans);

    for (auto &x : ans) cout << x << "\n";
    return 0;
}
```

---
