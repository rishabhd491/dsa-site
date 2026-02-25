# TCS NQT Recursion: Full Questions and Answers in C++

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

## Q8. Sum of Digits

### Problem
Given number `N`, return sum of digits using recursion.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

long long sumDigits(long long n) {
    n = llabs(n);
    if (n == 0) return 0;
    return (n % 10) + sumDigits(n / 10);
}

int main() {
    long long n;
    cin >> n;
    cout << sumDigits(n) << "\n";
    return 0;
}
```

---

## Q9. Reverse a Number

### Problem
Reverse an integer using recursion.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

long long reverseRec(long long n, long long res) {
    if (n == 0) return res;
    return reverseRec(n / 10, res * 10 + (n % 10));
}

int main() {
    long long n;
    cin >> n;
    long long sign = (n < 0 ? -1 : 1);
    n = llabs(n);
    cout << sign * reverseRec(n, 0) << "\n";
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

## Q11. Count Zeros in a Number

### Problem
Count number of digit `0` in integer `N` recursively.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int countZero(long long n) {
    if (n == 0) return 1;
    if (n < 10) return (n == 0 ? 1 : 0);
    return (n % 10 == 0) + countZero(n / 10);
}

int main() {
    long long n;
    cin >> n;
    n = llabs(n);
    cout << countZero(n) << "\n";
    return 0;
}
```

---

## Q12. Decimal to Binary (Recursive)

### Problem
Convert decimal number `N` to binary string using recursion.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

void toBinary(long long n, string& out) {
    if (n == 0) return;
    toBinary(n / 2, out);
    out.push_back(char('0' + (n % 2)));
}

int main() {
    long long n;
    cin >> n;
    if (n == 0) {
        cout << "0\n";
        return 0;
    }

    string out;
    toBinary(n, out);
    cout << out << "\n";
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

## Q14. Linear Search Recursively

### Problem
Given array and key `x`, print `Yes` if present else `No`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

bool findRec(const vector<int>& a, int i, int x) {
    if (i == (int)a.size()) return false;
    if (a[i] == x) return true;
    return findRec(a, i + 1, x);
}

int main() {
    int n, x;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];
    cin >> x;

    cout << (findRec(a, 0, x) ? "Yes" : "No") << "\n";
    return 0;
}
```

---

## Q15. First Occurrence Index

### Problem
Find first index of `x` in array using recursion. If absent print `-1`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int firstOcc(const vector<int>& a, int i, int x) {
    if (i == (int)a.size()) return -1;
    if (a[i] == x) return i;
    return firstOcc(a, i + 1, x);
}

int main() {
    int n, x;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];
    cin >> x;

    cout << firstOcc(a, 0, x) << "\n";
    return 0;
}
```

---

## Q16. Last Occurrence Index

### Problem
Find last index of `x` in array using recursion. If absent print `-1`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int lastOcc(const vector<int>& a, int i, int x) {
    if (i == (int)a.size()) return -1;
    int ans = lastOcc(a, i + 1, x);
    if (ans != -1) return ans;
    return (a[i] == x ? i : -1);
}

int main() {
    int n, x;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];
    cin >> x;

    cout << lastOcc(a, 0, x) << "\n";
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

## Q19. Remove Consecutive Duplicates in String

### Problem
Given string `s`, remove consecutive duplicate characters using recursion.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

void compressRec(const string& s, int i, string& out) {
    if (i == (int)s.size()) return;
    if (out.empty() || out.back() != s[i]) out.push_back(s[i]);
    compressRec(s, i + 1, out);
}

int main() {
    string s;
    cin >> s;
    string out;
    compressRec(s, 0, out);
    cout << out << "\n";
    return 0;
}
```

---

## Q20. Move All 'x' to End

### Problem
Given string `s`, move all `'x'` to end while preserving order of other chars.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

void moveXRec(const string& s, int i, string& left, int& cntX) {
    if (i == (int)s.size()) return;
    if (s[i] == 'x') cntX++;
    else left.push_back(s[i]);
    moveXRec(s, i + 1, left, cntX);
}

int main() {
    string s;
    cin >> s;

    string left;
    int cntX = 0;
    moveXRec(s, 0, left, cntX);

    left += string(cntX, 'x');
    cout << left << "\n";
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

## Q22. Count Subsequences with Sum K

### Problem
Given array and `K`, count subsequences whose sum is exactly `K`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

long long countSubseq(const vector<int>& a, int i, int sum, int k) {
    if (i == (int)a.size()) return (sum == k ? 1 : 0);
    long long take = countSubseq(a, i + 1, sum + a[i], k);
    long long notTake = countSubseq(a, i + 1, sum, k);
    return take + notTake;
}

int main() {
    int n, k;
    cin >> n >> k;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    cout << countSubseq(a, 0, 0, k) << "\n";
    return 0;
}
```

---

## Q23. Print One Subsequence with Sum K

### Problem
Print any one subsequence with sum `K`. If none, print `-1`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

bool oneSubseq(const vector<int>& a, int i, int sum, int k, vector<int>& cur) {
    if (i == (int)a.size()) return sum == k;

    cur.push_back(a[i]);
    if (oneSubseq(a, i + 1, sum + a[i], k, cur)) return true;
    cur.pop_back();

    if (oneSubseq(a, i + 1, sum, k, cur)) return true;

    return false;
}

int main() {
    int n, k;
    cin >> n >> k;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    vector<int> cur;
    if (oneSubseq(a, 0, 0, k, cur)) {
        for (int x : cur) cout << x << " ";
        cout << "\n";
    } else {
        cout << -1 << "\n";
    }
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

## Q25. Combination Sum II (Each Element Once, Duplicates in Input)

### Problem
Find unique combinations that sum to target. Each index can be used once.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

void dfs(int start, int target, const vector<int>& a, vector<int>& cur, vector<vector<int>>& ans) {
    if (target == 0) {
        ans.push_back(cur);
        return;
    }

    for (int i = start; i < (int)a.size(); i++) {
        if (i > start && a[i] == a[i - 1]) continue;
        if (a[i] > target) break;

        cur.push_back(a[i]);
        dfs(i + 1, target - a[i], a, cur, ans);
        cur.pop_back();
    }
}

int main() {
    int n, target;
    cin >> n >> target;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    sort(a.begin(), a.end());

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

## Q26. Subset Sum List

### Problem
Given array, print all subset sums in sorted order.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

void subsetSums(const vector<int>& a, int i, int curSum, vector<int>& ans) {
    if (i == (int)a.size()) {
        ans.push_back(curSum);
        return;
    }
    subsetSums(a, i + 1, curSum + a[i], ans);
    subsetSums(a, i + 1, curSum, ans);
}

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    vector<int> sums;
    subsetSums(a, 0, 0, sums);
    sort(sums.begin(), sums.end());

    for (int x : sums) cout << x << " ";
    cout << "\n";
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

## Q28. Unique Permutations of a String

### Problem
Print all unique permutations of a string that may contain duplicates.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

void dfs(string& s, int idx) {
    if (idx == (int)s.size()) {
        cout << s << "\n";
        return;
    }

    unordered_set<char> used;
    for (int i = idx; i < (int)s.size(); i++) {
        if (used.count(s[i])) continue;
        used.insert(s[i]);
        swap(s[idx], s[i]);
        dfs(s, idx + 1);
        swap(s[idx], s[i]);
    }
}

int main() {
    string s;
    cin >> s;
    dfs(s, 0);
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

## Q30. Letter Combinations of Phone Number

### Problem
Given digits `2-9`, print all possible letter combinations.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

vector<string> mp = {
    "", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"
};

void solve(const string& d, int i, string& cur, vector<string>& ans) {
    if (i == (int)d.size()) {
        ans.push_back(cur);
        return;
    }

    for (char ch : mp[d[i] - '0']) {
        cur.push_back(ch);
        solve(d, i + 1, cur, ans);
        cur.pop_back();
    }
}

int main() {
    string d;
    cin >> d;

    if (d.empty()) {
        cout << "\n";
        return 0;
    }

    string cur;
    vector<string> ans;
    solve(d, 0, cur, ans);

    for (auto &s : ans) cout << s << "\n";
    return 0;
}
```

---

## Q31. Palindrome Partitioning

### Problem
Print all possible palindrome partitions of a string.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

bool isPal(const string& s, int l, int r) {
    while (l < r) {
        if (s[l++] != s[r--]) return false;
    }
    return true;
}

void dfs(const string& s, int idx, vector<string>& cur, vector<vector<string>>& ans) {
    if (idx == (int)s.size()) {
        ans.push_back(cur);
        return;
    }

    for (int end = idx; end < (int)s.size(); end++) {
        if (!isPal(s, idx, end)) continue;
        cur.push_back(s.substr(idx, end - idx + 1));
        dfs(s, end + 1, cur, ans);
        cur.pop_back();
    }
}

int main() {
    string s;
    cin >> s;

    vector<string> cur;
    vector<vector<string>> ans;
    dfs(s, 0, cur, ans);

    for (auto &part : ans) {
        for (auto &x : part) cout << x << " ";
        cout << "\n";
    }
    return 0;
}
```

---

## Q32. N-Queens (Count Solutions)

### Problem
Place `N` queens on `N x N` board so none attack each other. Print number of solutions.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

void solve(int row, int n, vector<int>& colUsed, vector<int>& diag1, vector<int>& diag2, long long& cnt) {
    if (row == n) {
        cnt++;
        return;
    }

    for (int c = 0; c < n; c++) {
        int d1 = row + c;
        int d2 = row - c + (n - 1);
        if (colUsed[c] || diag1[d1] || diag2[d2]) continue;

        colUsed[c] = diag1[d1] = diag2[d2] = 1;
        solve(row + 1, n, colUsed, diag1, diag2, cnt);
        colUsed[c] = diag1[d1] = diag2[d2] = 0;
    }
}

int main() {
    int n;
    cin >> n;

    vector<int> colUsed(n, 0), diag1(2 * n, 0), diag2(2 * n, 0);
    long long cnt = 0;
    solve(0, n, colUsed, diag1, diag2, cnt);

    cout << cnt << "\n";
    return 0;
}
```

---

## Q33. Rat in a Maze (All Paths)

### Problem
Given `N x N` grid of `0/1` (`1` = open), print all paths from `(0,0)` to `(N-1,N-1)`.
Moves allowed: `D, L, R, U`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int n;
vector<vector<int>> a;
vector<string> ans;

void dfs(int r, int c, string& path) {
    if (r == n - 1 && c == n - 1) {
        ans.push_back(path);
        return;
    }

    a[r][c] = 0;

    int dr[4] = {1, 0, 0, -1};
    int dc[4] = {0, -1, 1, 0};
    char mv[4] = {'D', 'L', 'R', 'U'};

    for (int k = 0; k < 4; k++) {
        int nr = r + dr[k], nc = c + dc[k];
        if (nr >= 0 && nr < n && nc >= 0 && nc < n && a[nr][nc] == 1) {
            path.push_back(mv[k]);
            dfs(nr, nc, path);
            path.pop_back();
        }
    }

    a[r][c] = 1;
}

int main() {
    cin >> n;
    a.assign(n, vector<int>(n));
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            cin >> a[i][j];

    if (a[0][0] == 0 || a[n - 1][n - 1] == 0) {
        cout << -1 << "\n";
        return 0;
    }

    string path;
    dfs(0, 0, path);
    sort(ans.begin(), ans.end());

    if (ans.empty()) cout << -1 << "\n";
    else {
        for (auto &p : ans) cout << p << "\n";
    }
    return 0;
}
```

---

## Q34. Word Search in Grid

### Problem
Given board and word, check if word exists using DFS recursion.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

bool dfs(vector<string>& b, int r, int c, const string& w, int idx) {
    if (idx == (int)w.size()) return true;
    if (r < 0 || c < 0 || r >= (int)b.size() || c >= (int)b[0].size()) return false;
    if (b[r][c] != w[idx]) return false;

    char temp = b[r][c];
    b[r][c] = '#';

    bool ok = dfs(b, r + 1, c, w, idx + 1) ||
              dfs(b, r - 1, c, w, idx + 1) ||
              dfs(b, r, c + 1, w, idx + 1) ||
              dfs(b, r, c - 1, w, idx + 1);

    b[r][c] = temp;
    return ok;
}

int main() {
    int n, m;
    cin >> n >> m;
    vector<string> board(n);
    for (int i = 0; i < n; i++) cin >> board[i];
    string word;
    cin >> word;

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            if (dfs(board, i, j, word, 0)) {
                cout << "Yes\n";
                return 0;
            }
        }
    }

    cout << "No\n";
    return 0;
}
```

---

## Q35. Sudoku Solver

### Problem
Given a `9x9` Sudoku with `0` as empty cells, solve it.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

bool valid(vector<vector<int>>& g, int r, int c, int val) {
    for (int i = 0; i < 9; i++) {
        if (g[r][i] == val) return false;
        if (g[i][c] == val) return false;
    }

    int sr = (r / 3) * 3, sc = (c / 3) * 3;
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            if (g[sr + i][sc + j] == val) return false;
        }
    }
    return true;
}

bool solve(vector<vector<int>>& g) {
    for (int r = 0; r < 9; r++) {
        for (int c = 0; c < 9; c++) {
            if (g[r][c] == 0) {
                for (int v = 1; v <= 9; v++) {
                    if (valid(g, r, c, v)) {
                        g[r][c] = v;
                        if (solve(g)) return true;
                        g[r][c] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
}

int main() {
    vector<vector<int>> g(9, vector<int>(9));
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) cin >> g[i][j];
    }

    if (!solve(g)) {
        cout << "No solution\n";
        return 0;
    }

    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) cout << g[i][j] << " ";
        cout << "\n";
    }
    return 0;
}
```

---

## Q36. Tower of Hanoi

### Problem
Given `N` disks, print moves from rod A to C using B as auxiliary.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

void hanoi(int n, char src, char aux, char dst, vector<string>& moves) {
    if (n == 0) return;
    hanoi(n - 1, src, dst, aux, moves);
    moves.push_back(string("Move disk ") + to_string(n) + " from " + src + " to " + dst);
    hanoi(n - 1, aux, src, dst, moves);
}

int main() {
    int n;
    cin >> n;

    vector<string> moves;
    hanoi(n, 'A', 'B', 'C', moves);

    cout << moves.size() << "\n";
    for (auto &m : moves) cout << m << "\n";
    return 0;
}
```

---

## Q37. Josephus Problem

### Problem
`N` people in circle, eliminate every `K-th` person. Print safe position (1-based).

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int josephus(int n, int k) {
    if (n == 1) return 0;
    return (josephus(n - 1, k) + k) % n;
}

int main() {
    int n, k;
    cin >> n >> k;
    cout << josephus(n, k) + 1 << "\n";
    return 0;
}
```

---

## Q38. K-th Symbol in Grammar

### Problem
Row 1 is `0`. Next row: replace `0->01`, `1->10`.
Find `k-th` symbol in row `n` (1-indexed).

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int kthSymbol(int n, int k) {
    if (n == 1) return 0;
    int parent = kthSymbol(n - 1, (k + 1) / 2);
    if (k % 2 == 1) return parent;
    return 1 - parent;
}

int main() {
    int n, k;
    cin >> n >> k;
    cout << kthSymbol(n, k) << "\n";
    return 0;
}
```

---

## Q39. Sort a Stack Using Recursion

### Problem
Sort stack in ascending order using recursion only (no loops for sorting logic).

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

void insertSorted(stack<int>& st, int x) {
    if (st.empty() || st.top() <= x) {
        st.push(x);
        return;
    }

    int t = st.top();
    st.pop();
    insertSorted(st, x);
    st.push(t);
}

void sortStack(stack<int>& st) {
    if (st.empty()) return;

    int x = st.top();
    st.pop();
    sortStack(st);
    insertSorted(st, x);
}

int main() {
    int n;
    cin >> n;
    stack<int> st;

    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        st.push(x);
    }

    sortStack(st);

    vector<int> out;
    while (!st.empty()) {
        out.push_back(st.top());
        st.pop();
    }

    for (int i = (int)out.size() - 1; i >= 0; i--) cout << out[i] << " ";
    cout << "\n";
    return 0;
}
```

---

## Q40. Reverse a Stack Using Recursion

### Problem
Reverse stack using recursion only.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

void insertBottom(stack<int>& st, int x) {
    if (st.empty()) {
        st.push(x);
        return;
    }
    int t = st.top();
    st.pop();
    insertBottom(st, x);
    st.push(t);
}

void reverseStack(stack<int>& st) {
    if (st.empty()) return;
    int x = st.top();
    st.pop();
    reverseStack(st);
    insertBottom(st, x);
}

int main() {
    int n;
    cin >> n;
    stack<int> st;

    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        st.push(x);
    }

    reverseStack(st);

    while (!st.empty()) {
        cout << st.top() << " ";
        st.pop();
    }
    cout << "\n";
    return 0;
}
```

---

## 4) High-Level Story-Based Recursion Practice Prompts

1. Delivery route branching with include/exclude choices.
2. Security PIN generation with constraints (backtracking).
3. Robot path planning in blocked grid.
4. Resource assignment to slots under constraints.
5. String partitioning into valid chunks.
6. Exact-target bundle creation with reusable/non-reusable items.

## 5) Final Recursion Revision Checklist

- Base case is correct and reachable.
- Each call reduces problem size.
- Backtracking does proper undo.
- Duplicate answers are avoided where needed.
- Stack depth constraints considered for large `N`.

If you can solve these 40 problems confidently, your recursion coverage for TCS NQT is strong and complete.
