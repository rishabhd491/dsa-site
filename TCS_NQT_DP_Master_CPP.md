# TCS NQT Dynamic Programming (DP) Master (C++): Complete Question Bank

This document is dedicated to **Dynamic Programming** for TCS NQT coding preparation.
It covers beginner to advanced PYQ-style DP patterns with full C++ answers.

## 1) DP Coverage Map

This document covers:
1. 1D DP (fibonacci, stairs, cost, robber)
2. Subset/knapsack DP
3. Sequence DP (LIS, bitonic, MSIS)
4. String DP (LCS, edit distance, palindrome DP)
5. Grid DP (paths, obstacles, min path)
6. Mixed DP (decode ways, matrix chain, stocks)

## 2) DP Decision Rules (Use in Exam)

- If problem asks best/ways/min-max over choices, try DP.
- Define state clearly: `dp[i]`, `dp[i][j]`, or state machine.
- Write recurrence from transitions.
- Set base cases before loops.
- Optimize space only after logic is correct.
- Check edge cases: empty input, single element, large values.

## 3) Common TCS DP Story Conversions

- "minimum cost" -> minimization DP.
- "number of ways" -> counting DP.
- "can be formed" -> boolean DP.
- "maximum profit" -> maximization DP with states.
- "choose items under capacity" -> knapsack family.

---

## Q1. Fibonacci Number (Tabulation)

### Problem
Given `n`, find `n-th` Fibonacci number (`F(0)=0, F(1)=1`).

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    if (n == 0) { cout << 0 << "\n"; return 0; }
    vector<long long> dp(n + 1, 0);
    dp[1] = 1;
    for (int i = 2; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];
    cout << dp[n] << "\n";
    return 0;
}
```

---

## Q2. Climbing Stairs

### Problem
You can climb `1` or `2` steps. Find number of ways to reach step `n`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    if (n <= 1) { cout << 1 << "\n"; return 0; }
    vector<long long> dp(n + 1, 0);
    dp[0] = dp[1] = 1;
    for (int i = 2; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];
    cout << dp[n] << "\n";
    return 0;
}
```

---

## Q3. Min Cost Climbing Stairs

### Problem
Given cost array where `cost[i]` is cost of step `i`, you can move 1 or 2 steps.
Find minimum cost to reach top (after last index).

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> cost(n);
    for (int i = 0; i < n; i++) cin >> cost[i];

    if (n == 1) { cout << cost[0] << "\n"; return 0; }

    vector<int> dp(n + 1, 0);
    dp[0] = 0;
    dp[1] = 0;

    for (int i = 2; i <= n; i++) {
        dp[i] = min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }

    cout << dp[n] << "\n";
    return 0;
}
```

---

## Q4. Frog Jump (Min Energy)

### Problem
From stair `i`, frog jumps to `i+1` or `i+2`.
Energy cost between `i` and `j` is `abs(h[i]-h[j])`.
Find minimum energy to reach last stair.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> h(n);
    for (int i = 0; i < n; i++) cin >> h[i];

    vector<int> dp(n, 0);
    for (int i = 1; i < n; i++) {
        int one = dp[i - 1] + abs(h[i] - h[i - 1]);
        int two = INT_MAX;
        if (i > 1) two = dp[i - 2] + abs(h[i] - h[i - 2]);
        dp[i] = min(one, two);
    }

    cout << dp[n - 1] << "\n";
    return 0;
}
```

---

## Q5. House Robber

### Problem
You cannot rob adjacent houses. Maximize stolen amount.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

long long solveLinear(const vector<int>& a) {
    int n = (int)a.size();
    if (n == 0) return 0;
    if (n == 1) return a[0];

    vector<long long> dp(n, 0);
    dp[0] = a[0];
    dp[1] = max(a[0], a[1]);

    for (int i = 2; i < n; i++) {
        dp[i] = max(dp[i - 1], dp[i - 2] + a[i]);
    }
    return dp[n - 1];
}

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    cout << solveLinear(a) << "\n";
    return 0;
}
```

---

## Q6. House Robber II (Circular Street)

### Problem
First and last houses are adjacent (circular array). Max robbery amount?

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

long long linearRob(const vector<int>& a, int l, int r) {
    long long prev2 = 0, prev1 = 0;
    for (int i = l; i <= r; i++) {
        long long take = prev2 + a[i];
        long long skip = prev1;
        long long cur = max(take, skip);
        prev2 = prev1;
        prev1 = cur;
    }
    return prev1;
}

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    if (n == 1) { cout << a[0] << "\n"; return 0; }

    cout << max(linearRob(a, 0, n - 2), linearRob(a, 1, n - 1)) << "\n";
    return 0;
}
```

---

## Q7. Coin Change (Minimum Coins)

### Problem
Given coin denominations and target amount, find minimum coins needed.
If not possible output `-1`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, amount;
    cin >> n >> amount;
    vector<int> coins(n);
    for (int i = 0; i < n; i++) cin >> coins[i];

    const int INF = 1e9;
    vector<int> dp(amount + 1, INF);
    dp[0] = 0;

    for (int x = 1; x <= amount; x++) {
        for (int c : coins) {
            if (x - c >= 0 && dp[x - c] != INF) {
                dp[x] = min(dp[x], dp[x - c] + 1);
            }
        }
    }

    cout << (dp[amount] == INF ? -1 : dp[amount]) << "\n";
    return 0;
}
```

---

## Q8. Coin Change (Number of Ways)

### Problem
Count number of ways to form amount using unlimited coins.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, amount;
    cin >> n >> amount;
    vector<int> coins(n);
    for (int i = 0; i < n; i++) cin >> coins[i];

    vector<long long> dp(amount + 1, 0);
    dp[0] = 1;

    for (int c : coins) {
        for (int x = c; x <= amount; x++) {
            dp[x] += dp[x - c];
        }
    }

    cout << dp[amount] << "\n";
    return 0;
}
```

---

## Q9. 0/1 Knapsack

### Problem
Given weights and values of `N` items, maximize value under capacity `W`.
Each item can be chosen at most once.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, W;
    cin >> n >> W;
    vector<int> wt(n), val(n);
    for (int i = 0; i < n; i++) cin >> wt[i];
    for (int i = 0; i < n; i++) cin >> val[i];

    vector<vector<int>> dp(n + 1, vector<int>(W + 1, 0));

    for (int i = 1; i <= n; i++) {
        for (int w = 0; w <= W; w++) {
            dp[i][w] = dp[i - 1][w];
            if (wt[i - 1] <= w) {
                dp[i][w] = max(dp[i][w], val[i - 1] + dp[i - 1][w - wt[i - 1]]);
            }
        }
    }

    cout << dp[n][W] << "\n";
    return 0;
}
```

---

## Q10. Unbounded Knapsack

### Problem
Each item can be picked unlimited times. Maximize value under capacity `W`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, W;
    cin >> n >> W;
    vector<int> wt(n), val(n);
    for (int i = 0; i < n; i++) cin >> wt[i];
    for (int i = 0; i < n; i++) cin >> val[i];

    vector<int> dp(W + 1, 0);
    for (int w = 0; w <= W; w++) {
        for (int i = 0; i < n; i++) {
            if (wt[i] <= w) dp[w] = max(dp[w], val[i] + dp[w - wt[i]]);
        }
    }

    cout << dp[W] << "\n";
    return 0;
}
```

---

## Q11. Rod Cutting

### Problem
Given price of rods of length `1..N`, find max price for rod length `N`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> price(n + 1);
    for (int i = 1; i <= n; i++) cin >> price[i];

    vector<int> dp(n + 1, 0);
    for (int len = 1; len <= n; len++) {
        for (int cut = 1; cut <= len; cut++) {
            dp[len] = max(dp[len], price[cut] + dp[len - cut]);
        }
    }

    cout << dp[n] << "\n";
    return 0;
}
```

---

## Q12. Subset Sum (Decision)

### Problem
Given array and target `S`, print `Yes` if subset with sum `S` exists else `No`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, S;
    cin >> n >> S;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    vector<vector<bool>> dp(n + 1, vector<bool>(S + 1, false));
    dp[0][0] = true;

    for (int i = 1; i <= n; i++) {
        for (int s = 0; s <= S; s++) {
            dp[i][s] = dp[i - 1][s];
            if (s >= a[i - 1]) dp[i][s] = dp[i][s] || dp[i - 1][s - a[i - 1]];
        }
    }

    cout << (dp[n][S] ? "Yes" : "No") << "\n";
    return 0;
}
```

---

## Q13. Partition Equal Subset Sum

### Problem
Can array be divided into two subsets with equal sum?

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    long long total = 0;
    for (int i = 0; i < n; i++) {
        cin >> a[i];
        total += a[i];
    }

    if (total % 2) { cout << "No\n"; return 0; }
    int target = (int)(total / 2);

    vector<char> dp(target + 1, 0);
    dp[0] = 1;

    for (int x : a) {
        for (int s = target; s >= x; s--) {
            dp[s] = dp[s] || dp[s - x];
        }
    }

    cout << (dp[target] ? "Yes" : "No") << "\n";
    return 0;
}
```

---

## Q14. Count Subsets with Sum K

### Problem
Count how many subsets have sum exactly `K`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, K;
    cin >> n >> K;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    vector<long long> dp(K + 1, 0);
    dp[0] = 1;

    for (int x : a) {
        for (int s = K; s >= x; s--) {
            dp[s] += dp[s - x];
        }
    }

    cout << dp[K] << "\n";
    return 0;
}
```

---

## Q15. Target Sum Ways (+/- Signs)

### Problem
Assign `+` or `-` to each number so expression equals target `T`.
Return count of ways.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, T;
    cin >> n >> T;
    vector<int> a(n);

    int sum = 0;
    for (int i = 0; i < n; i++) {
        cin >> a[i];
        sum += a[i];
    }

    if ((sum + T) < 0 || (sum + T) % 2 != 0) {
        cout << 0 << "\n";
        return 0;
    }

    int S = (sum + T) / 2;
    if (S < 0) { cout << 0 << "\n"; return 0; }

    vector<long long> dp(S + 1, 0);
    dp[0] = 1;

    for (int x : a) {
        for (int s = S; s >= x; s--) {
            dp[s] += dp[s - x];
        }
    }

    cout << dp[S] << "\n";
    return 0;
}
```

---

## Q16. Longest Increasing Subsequence (LIS)

### Problem
Find length of longest strictly increasing subsequence.

### C++ Solution (O(N^2))
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    vector<int> dp(n, 1);
    int ans = 0;

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < i; j++) {
            if (a[j] < a[i]) dp[i] = max(dp[i], dp[j] + 1);
        }
        ans = max(ans, dp[i]);
    }

    cout << ans << "\n";
    return 0;
}
```

---

## Q17. Maximum Sum Increasing Subsequence

### Problem
Find increasing subsequence with maximum sum.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    vector<long long> dp(n);
    long long ans = LLONG_MIN;

    for (int i = 0; i < n; i++) {
        dp[i] = a[i];
        for (int j = 0; j < i; j++) {
            if (a[j] < a[i]) dp[i] = max(dp[i], dp[j] + a[i]);
        }
        ans = max(ans, dp[i]);
    }

    cout << ans << "\n";
    return 0;
}
```

---

## Q18. Longest Common Subsequence (LCS)

### Problem
Given strings `A` and `B`, find length of longest common subsequence.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string a, b;
    cin >> a >> b;

    int n = (int)a.size(), m = (int)b.size();
    vector<vector<int>> dp(n + 1, vector<int>(m + 1, 0));

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            if (a[i - 1] == b[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
            else dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
        }
    }

    cout << dp[n][m] << "\n";
    return 0;
}
```

---

## Q19. Longest Common Substring

### Problem
Find length of longest common **contiguous** substring.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string a, b;
    cin >> a >> b;

    int n = (int)a.size(), m = (int)b.size();
    vector<vector<int>> dp(n + 1, vector<int>(m + 1, 0));
    int ans = 0;

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            if (a[i - 1] == b[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
                ans = max(ans, dp[i][j]);
            } else {
                dp[i][j] = 0;
            }
        }
    }

    cout << ans << "\n";
    return 0;
}
```

---

## Q20. Edit Distance

### Problem
Minimum operations (insert/delete/replace) to convert string `A` into `B`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string a, b;
    cin >> a >> b;

    int n = (int)a.size(), m = (int)b.size();
    vector<vector<int>> dp(n + 1, vector<int>(m + 1, 0));

    for (int i = 0; i <= n; i++) dp[i][0] = i;
    for (int j = 0; j <= m; j++) dp[0][j] = j;

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            if (a[i - 1] == b[j - 1]) dp[i][j] = dp[i - 1][j - 1];
            else dp[i][j] = 1 + min({dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]});
        }
    }

    cout << dp[n][m] << "\n";
    return 0;
}
```

---

## Q21. Distinct Subsequences Count

### Problem
Given strings `S` and `T`, count subsequences of `S` equal to `T`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string s, t;
    cin >> s >> t;

    int n = (int)s.size(), m = (int)t.size();
    vector<vector<unsigned long long>> dp(n + 1, vector<unsigned long long>(m + 1, 0));

    for (int i = 0; i <= n; i++) dp[i][0] = 1;

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            dp[i][j] = dp[i - 1][j];
            if (s[i - 1] == t[j - 1]) dp[i][j] += dp[i - 1][j - 1];
        }
    }

    cout << dp[n][m] << "\n";
    return 0;
}
```

---

## Q22. Longest Palindromic Subsequence

### Problem
Find length of longest subsequence that is palindrome.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin >> s;
    int n = (int)s.size();

    vector<vector<int>> dp(n, vector<int>(n, 0));
    for (int i = 0; i < n; i++) dp[i][i] = 1;

    for (int len = 2; len <= n; len++) {
        for (int i = 0; i + len - 1 < n; i++) {
            int j = i + len - 1;
            if (s[i] == s[j]) {
                dp[i][j] = (len == 2) ? 2 : dp[i + 1][j - 1] + 2;
            } else {
                dp[i][j] = max(dp[i + 1][j], dp[i][j - 1]);
            }
        }
    }

    cout << dp[0][n - 1] << "\n";
    return 0;
}
```

---

## Q23. Minimum Insertions to Make Palindrome

### Problem
Find minimum characters to insert in a string to make it palindrome.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin >> s;
    string r = s;
    reverse(r.begin(), r.end());

    int n = (int)s.size();
    vector<vector<int>> dp(n + 1, vector<int>(n + 1, 0));

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            if (s[i - 1] == r[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
            else dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
        }
    }

    int lps = dp[n][n];
    cout << (n - lps) << "\n";
    return 0;
}
```

---

## Q24. Unique Paths in Grid

### Problem
Robot moves only right/down in `m x n` grid. Find number of paths.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int m, n;
    cin >> m >> n;

    vector<vector<long long>> dp(m, vector<long long>(n, 0));
    for (int i = 0; i < m; i++) dp[i][0] = 1;
    for (int j = 0; j < n; j++) dp[0][j] = 1;

    for (int i = 1; i < m; i++) {
        for (int j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    cout << dp[m - 1][n - 1] << "\n";
    return 0;
}
```

---

## Q25. Unique Paths with Obstacles

### Problem
Grid has blocked cells (`1` blocked, `0` free). Count paths from top-left to bottom-right.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int m, n;
    cin >> m >> n;
    vector<vector<int>> g(m, vector<int>(n));
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) cin >> g[i][j];
    }

    vector<vector<long long>> dp(m, vector<long long>(n, 0));
    if (g[0][0] == 1) { cout << 0 << "\n"; return 0; }
    dp[0][0] = 1;

    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (g[i][j] == 1) {
                dp[i][j] = 0;
                continue;
            }
            if (i > 0) dp[i][j] += dp[i - 1][j];
            if (j > 0) dp[i][j] += dp[i][j - 1];
        }
    }

    cout << dp[m - 1][n - 1] << "\n";
    return 0;
}
```

---

## Q26. Minimum Path Sum

### Problem
Find minimum sum path from top-left to bottom-right (right/down only).

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int m, n;
    cin >> m >> n;
    vector<vector<int>> a(m, vector<int>(n));
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) cin >> a[i][j];
    }

    vector<vector<int>> dp(m, vector<int>(n, 0));
    dp[0][0] = a[0][0];

    for (int i = 1; i < m; i++) dp[i][0] = dp[i - 1][0] + a[i][0];
    for (int j = 1; j < n; j++) dp[0][j] = dp[0][j - 1] + a[0][j];

    for (int i = 1; i < m; i++) {
        for (int j = 1; j < n; j++) {
            dp[i][j] = a[i][j] + min(dp[i - 1][j], dp[i][j - 1]);
        }
    }

    cout << dp[m - 1][n - 1] << "\n";
    return 0;
}
```

---

## Q27. Triangle Minimum Path Sum

### Problem
Given triangle with `n` rows, move from row `i` index `j` to `i+1` index `j` or `j+1`.
Find minimum total.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<vector<int>> t(n);
    for (int i = 0; i < n; i++) {
        t[i].resize(i + 1);
        for (int j = 0; j <= i; j++) cin >> t[i][j];
    }

    vector<int> dp = t[n - 1];
    for (int i = n - 2; i >= 0; i--) {
        for (int j = 0; j <= i; j++) {
            dp[j] = t[i][j] + min(dp[j], dp[j + 1]);
        }
    }

    cout << dp[0] << "\n";
    return 0;
}
```

---

## Q28. Decode Ways

### Problem
String contains digits `1-26` mapped to `A-Z`. Count decode ways.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin >> s;
    int n = (int)s.size();
    if (n == 0 || s[0] == '0') { cout << 0 << "\n"; return 0; }

    vector<long long> dp(n + 1, 0);
    dp[0] = 1;
    dp[1] = 1;

    for (int i = 2; i <= n; i++) {
        if (s[i - 1] != '0') dp[i] += dp[i - 1];
        int two = (s[i - 2] - '0') * 10 + (s[i - 1] - '0');
        if (two >= 10 && two <= 26) dp[i] += dp[i - 2];
    }

    cout << dp[n] << "\n";
    return 0;
}
```

---

## Q29. Matrix Chain Multiplication (Minimum Multiplications)

### Problem
Given dimensions array `p` of size `n`, matrix `i` has dimension `p[i-1] x p[i]`.
Find minimum scalar multiplications.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> p(n);
    for (int i = 0; i < n; i++) cin >> p[i];

    int m = n - 1;
    vector<vector<long long>> dp(m + 1, vector<long long>(m + 1, 0));

    for (int len = 2; len <= m; len++) {
        for (int i = 1; i + len - 1 <= m; i++) {
            int j = i + len - 1;
            dp[i][j] = LLONG_MAX;
            for (int k = i; k < j; k++) {
                long long cost = dp[i][k] + dp[k + 1][j] + 1LL * p[i - 1] * p[k] * p[j];
                dp[i][j] = min(dp[i][j], cost);
            }
        }
    }

    cout << dp[1][m] << "\n";
    return 0;
}
```

---

## Q30. Maximum Subarray Sum (Kadane)

### Problem
Find contiguous subarray with maximum sum.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
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

## Q31. Maximum Product Subarray

### Problem
Find contiguous subarray with maximum product.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<long long> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    long long mx = a[0], mn = a[0], ans = a[0];
    for (int i = 1; i < n; i++) {
        if (a[i] < 0) swap(mx, mn);
        mx = max(a[i], mx * a[i]);
        mn = min(a[i], mn * a[i]);
        ans = max(ans, mx);
    }

    cout << ans << "\n";
    return 0;
}
```

---

## Q32. Stock Buy-Sell with Cooldown

### Problem
You may buy/sell stock many times, but after selling one day cooldown is required.
Find maximum profit.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> p(n);
    for (int i = 0; i < n; i++) cin >> p[i];

    if (n == 0) { cout << 0 << "\n"; return 0; }

    long long hold = -p[0];
    long long sold = 0;
    long long rest = 0;

    for (int i = 1; i < n; i++) {
        long long prevHold = hold;
        long long prevSold = sold;
        long long prevRest = rest;

        hold = max(prevHold, prevRest - p[i]);
        sold = prevHold + p[i];
        rest = max(prevRest, prevSold);
    }

    cout << max(sold, rest) << "\n";
    return 0;
}
```

---

## 4) High-Yield DP Pattern Checklist for TCS NQT

- `dp[i]` linear progression problems.
- subset-sum and partition variants.
- coin change min/ways difference (loop order matters).
- LCS/edit-distance table-building.
- grid traversal with min/count objective.
- stock state machine (`hold/sold/rest`).

## 5) Revision Order (Fastest to Strongest)

1. Q1-Q6 (1D basics)
2. Q7-Q15 (knapsack/subset family)
3. Q18-Q23 (string DP core)
4. Q24-Q27 (grid DP)
5. Q28-Q32 (mixed advanced)

## 6) Final Edge Cases to Practice

- Empty and single-element input
- All zeros / all negatives
- Large target sum and impossible cases
- Duplicate values
- Overflow risk in counting problems

If you solve these 32 thoroughly, your DP coverage for TCS NQT is strong and exam-ready.
