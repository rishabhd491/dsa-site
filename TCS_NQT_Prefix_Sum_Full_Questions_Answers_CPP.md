# TCS NQT Prefix Sum: Full Questions and Answers in C++

This document is dedicated to **Prefix Sum** and **Prefix + HashMap** logic.
It explicitly covers:
- Range sum queries
- Subarray sum = K
- Negative numbers
- Missing/bad indices
- Story-based versions

## 1) Prefix Sum Core Concepts

For array `a[0..n-1]`, define prefix array:
- `pref[i] = a[0] + a[1] + ... + a[i]`

Range sum (`L..R`, 0-indexed):
- `sum(L,R) = pref[R] - (L > 0 ? pref[L-1] : 0)`

For safer coding, use 1-based prefix:
- `pref[0] = 0`
- `pref[i] = pref[i-1] + a[i-1]` for `i=1..n`
- `sum(L,R) = pref[R+1] - pref[L]`

## 2) Prefix + HashMap Core Concepts

To handle negatives in subarray-sum problems:
- Maintain running prefix sum `s`
- For target `K`, check if `s-K` existed earlier
- Count/length/index answers depend on what value is stored in map:
  - count of prefix sums
  - first index of prefix sum
  - existence only

## 3) Edge-Case Checklist (Prefix Sum Specific)

1. `N = 0`, `Q = 0`
2. Query indices outside range
3. `L > R`
4. Negative values in array
5. Large values (use `long long`)
6. No valid subarray found
7. Multiple answers (first / longest / count)

---

## Q1. Build Prefix Sum Array

### Problem
Given array of size `N`, print prefix sum array.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<long long> a(n), pref(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    if (n > 0) pref[0] = a[0];
    for (int i = 1; i < n; i++) pref[i] = pref[i - 1] + a[i];

    for (long long x : pref) cout << x << " ";
    cout << "\n";
    return 0;
}
```

---

## Q2. Single Range Sum Query (0-Indexed)

### Problem
Given array and one query `[L, R]`, print sum from `L` to `R`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, L, R;
    cin >> n;
    vector<long long> a(n), pref(n);
    for (int i = 0; i < n; i++) cin >> a[i];
    cin >> L >> R;

    if (n == 0 || L < 0 || R >= n || L > R) {
        cout << "Invalid query\n";
        return 0;
    }

    pref[0] = a[0];
    for (int i = 1; i < n; i++) pref[i] = pref[i - 1] + a[i];

    long long ans = pref[R] - (L > 0 ? pref[L - 1] : 0LL);
    cout << ans << "\n";
    return 0;
}
```

---

## Q3. Multiple Range Sum Queries (Fast)

### Problem
Given `N`, array, and `Q` queries `(L, R)`, answer each in `O(1)` after preprocessing.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, q;
    cin >> n >> q;

    vector<long long> a(n), pref(n + 1, 0);
    for (int i = 0; i < n; i++) cin >> a[i];

    for (int i = 1; i <= n; i++) pref[i] = pref[i - 1] + a[i - 1];

    while (q--) {
        int L, R;
        cin >> L >> R;
        if (L < 0 || R >= n || L > R) {
            cout << "Invalid\n";
            continue;
        }
        cout << pref[R + 1] - pref[L] << "\n";
    }
    return 0;
}
```

---

## Q4. Range Sum Query with 1-Indexed Input (Very Common Trap)

### Problem
Queries are provided in 1-based indexing. Convert correctly and answer range sums.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, q;
    cin >> n >> q;

    vector<long long> a(n), pref(n + 1, 0);
    for (int i = 0; i < n; i++) cin >> a[i];
    for (int i = 1; i <= n; i++) pref[i] = pref[i - 1] + a[i - 1];

    while (q--) {
        int l1, r1; // 1-indexed
        cin >> l1 >> r1;
        int L = l1 - 1, R = r1 - 1;

        if (L < 0 || R >= n || L > R) {
            cout << "Invalid\n";
            continue;
        }
        cout << pref[R + 1] - pref[L] << "\n";
    }
    return 0;
}
```

---

## Q5. Story-Based: Daily Revenue Between Days

### Problem
Given daily profit/loss array, each query asks total revenue from day `L` to day `R`.
Days are 1-indexed in statement.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, q;
    cin >> n >> q;
    vector<long long> rev(n), pref(n + 1, 0);

    for (int i = 0; i < n; i++) cin >> rev[i];
    for (int i = 1; i <= n; i++) pref[i] = pref[i - 1] + rev[i - 1];

    while (q--) {
        int dayL, dayR;
        cin >> dayL >> dayR;
        int L = dayL - 1, R = dayR - 1;

        if (L < 0 || R >= n || L > R) {
            cout << "Invalid\n";
        } else {
            cout << pref[R + 1] - pref[L] << "\n";
        }
    }
    return 0;
}
```

---

## Q6. Count Subarrays with Sum = K (Negatives Allowed)

### Problem
Return count of subarrays whose sum is exactly `K`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    long long k;
    cin >> n >> k;

    vector<long long> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    unordered_map<long long, long long> cnt;
    cnt[0] = 1;

    long long pref = 0, ans = 0;
    for (int i = 0; i < n; i++) {
        pref += a[i];
        if (cnt.count(pref - k)) ans += cnt[pref - k];
        cnt[pref]++;
    }

    cout << ans << "\n";
    return 0;
}
```

---

## Q7. Existence of Subarray Sum = K (Negatives Allowed)

### Problem
Print `Yes` if at least one subarray has sum `K`, else `No`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    long long k;
    cin >> n >> k;

    vector<long long> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    unordered_set<long long> seen;
    long long pref = 0;
    seen.insert(0);

    for (int i = 0; i < n; i++) {
        pref += a[i];
        if (seen.count(pref - k)) {
            cout << "Yes\n";
            return 0;
        }
        seen.insert(pref);
    }

    cout << "No\n";
    return 0;
}
```

---

## Q8. Longest Subarray with Sum = K (Negatives Allowed)

### Problem
Find maximum length subarray whose sum equals `K`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    long long k;
    cin >> n >> k;

    vector<long long> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    unordered_map<long long, int> first;
    first[0] = -1;

    long long pref = 0;
    int best = 0;

    for (int i = 0; i < n; i++) {
        pref += a[i];

        if (!first.count(pref)) first[pref] = i;
        if (first.count(pref - k)) {
            best = max(best, i - first[pref - k]);
        }
    }

    cout << best << "\n";
    return 0;
}
```

---

## Q9. Return One Subarray Indices with Sum = K

### Problem
Print one valid pair `(L, R)` where subarray sum is `K`, else `-1 -1`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    long long k;
    cin >> n >> k;

    vector<long long> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    unordered_map<long long, int> first;
    first[0] = -1;

    long long pref = 0;
    for (int i = 0; i < n; i++) {
        pref += a[i];
        if (first.count(pref - k)) {
            cout << first[pref - k] + 1 << " " << i << "\n";
            return 0;
        }
        if (!first.count(pref)) first[pref] = i;
    }

    cout << -1 << " " << -1 << "\n";
    return 0;
}
```

---

## Q10. Count Subarrays with Sum Divisible by K

### Problem
Count subarrays whose sum % `K` is `0`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    long long k;
    cin >> n >> k;
    if (k == 0) { cout << 0 << "\n"; return 0; }

    vector<long long> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    unordered_map<long long, long long> cnt;
    cnt[0] = 1;

    long long pref = 0, ans = 0;
    for (long long x : a) {
        pref += x;
        long long r = pref % k;
        if (r < 0) r += k;

        ans += cnt[r];
        cnt[r]++;
    }

    cout << ans << "\n";
    return 0;
}
```

---

## Q11. Longest Subarray with Sum Divisible by K

### Problem
Find maximum length subarray with sum divisible by `K`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    long long k;
    cin >> n >> k;
    if (k == 0) { cout << 0 << "\n"; return 0; }

    vector<long long> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    unordered_map<long long, int> first;
    first[0] = -1;

    long long pref = 0;
    int best = 0;

    for (int i = 0; i < n; i++) {
        pref += a[i];
        long long r = pref % k;
        if (r < 0) r += k;

        if (!first.count(r)) first[r] = i;
        best = max(best, i - first[r]);
    }

    cout << best << "\n";
    return 0;
}
```

---

## Q12. Longest Subarray with Equal 0 and 1

### Problem
Find longest subarray containing equal number of zeros and ones.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    unordered_map<int, int> first;
    first[0] = -1;

    int pref = 0, best = 0;
    for (int i = 0; i < n; i++) {
        pref += (a[i] == 0 ? -1 : 1);
        if (!first.count(pref)) first[pref] = i;
        best = max(best, i - first[pref]);
    }

    cout << best << "\n";
    return 0;
}
```

---

## Q13. Count Subarrays with Equal 0 and 1

### Problem
Count subarrays with equal numbers of 0 and 1.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    unordered_map<int, long long> cnt;
    cnt[0] = 1;

    int pref = 0;
    long long ans = 0;

    for (int i = 0; i < n; i++) {
        pref += (a[i] == 0 ? -1 : 1);
        ans += cnt[pref];
        cnt[pref]++;
    }

    cout << ans << "\n";
    return 0;
}
```

---

## Q14. Prefix XOR Range Query

### Problem
Answer XOR queries in `O(1)` using prefix XOR.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, q;
    cin >> n >> q;

    vector<int> a(n), pref(n + 1, 0);
    for (int i = 0; i < n; i++) cin >> a[i];

    for (int i = 1; i <= n; i++) pref[i] = pref[i - 1] ^ a[i - 1];

    while (q--) {
        int L, R;
        cin >> L >> R;
        if (L < 0 || R >= n || L > R) {
            cout << "Invalid\n";
            continue;
        }
        cout << (pref[R + 1] ^ pref[L]) << "\n";
    }
    return 0;
}
```

---

## Q15. 2D Prefix Sum Matrix Build

### Problem
Given matrix, build `pref2D` where each cell stores sum of submatrix `(0,0)` to `(i,j)`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<vector<long long>> a(n, vector<long long>(m));
    for (int i = 0; i < n; i++)
        for (int j = 0; j < m; j++)
            cin >> a[i][j];

    vector<vector<long long>> pref(n + 1, vector<long long>(m + 1, 0));

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            pref[i][j] = a[i - 1][j - 1] + pref[i - 1][j] + pref[i][j - 1] - pref[i - 1][j - 1];
        }
    }

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) cout << pref[i][j] << " ";
        cout << "\n";
    }
    return 0;
}
```

---

## Q16. 2D Range Sum Query

### Problem
For each query `(r1,c1,r2,c2)` (0-indexed), return submatrix sum.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, m, q;
    cin >> n >> m >> q;

    vector<vector<long long>> a(n, vector<long long>(m));
    for (int i = 0; i < n; i++)
        for (int j = 0; j < m; j++)
            cin >> a[i][j];

    vector<vector<long long>> pref(n + 1, vector<long long>(m + 1, 0));
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            pref[i][j] = a[i - 1][j - 1] + pref[i - 1][j] + pref[i][j - 1] - pref[i - 1][j - 1];
        }
    }

    while (q--) {
        int r1, c1, r2, c2;
        cin >> r1 >> c1 >> r2 >> c2;

        if (r1 < 0 || c1 < 0 || r2 >= n || c2 >= m || r1 > r2 || c1 > c2) {
            cout << "Invalid\n";
            continue;
        }

        long long ans = pref[r2 + 1][c2 + 1] - pref[r1][c2 + 1] - pref[r2 + 1][c1] + pref[r1][c1];
        cout << ans << "\n";
    }
    return 0;
}
```

---

## Q17. Story-Based: Bank Ledger Running Balance and Segment Sum

### Problem
Given daily credit/debit array, answer total net change in day range.
(negative values represent debits)

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, q;
    cin >> n >> q;

    vector<long long> trans(n), pref(n + 1, 0);
    for (int i = 0; i < n; i++) cin >> trans[i];
    for (int i = 1; i <= n; i++) pref[i] = pref[i - 1] + trans[i - 1];

    while (q--) {
        int L, R;
        cin >> L >> R;
        if (L < 0 || R >= n || L > R) {
            cout << "Invalid\n";
            continue;
        }
        cout << pref[R + 1] - pref[L] << "\n";
    }
    return 0;
}
```

---

## Q18. Story-Based: Parcel Weight Drift Detection (Subarray Sum = K)

### Problem
Daily drift can be + or -. Count how many continuous day ranges total exactly `K` drift.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    long long k;
    cin >> n >> k;

    vector<long long> drift(n);
    for (int i = 0; i < n; i++) cin >> drift[i];

    unordered_map<long long, long long> cnt;
    cnt[0] = 1;

    long long pref = 0, ans = 0;
    for (long long x : drift) {
        pref += x;
        if (cnt.count(pref - k)) ans += cnt[pref - k];
        cnt[pref]++;
    }

    cout << ans << "\n";
    return 0;
}
```

---

## Q19. Missing Index Handling: Clamp and Repair Query

### Problem
Each query may have bad index values. Clamp to valid range `[0, N-1]` and then answer.
If repaired `L > R`, print 0.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, q;
    cin >> n >> q;

    vector<long long> a(n), pref(n + 1, 0);
    for (int i = 0; i < n; i++) cin >> a[i];
    for (int i = 1; i <= n; i++) pref[i] = pref[i - 1] + a[i - 1];

    while (q--) {
        int L, R;
        cin >> L >> R;

        L = max(L, 0);
        R = min(R, n - 1);

        if (L > R || n == 0) {
            cout << 0 << "\n";
            continue;
        }

        cout << pref[R + 1] - pref[L] << "\n";
    }
    return 0;
}
```

---

## Q20. Advanced: Shortest Subarray with Sum at Least K (Negatives Allowed)

### Problem
Find minimum length subarray with sum >= `K`.
If none exists, print `-1`.

### C++ Solution (Prefix + Monotonic Deque)
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    long long k;
    cin >> n >> k;

    vector<long long> a(n), pref(n + 1, 0);
    for (int i = 0; i < n; i++) cin >> a[i];
    for (int i = 1; i <= n; i++) pref[i] = pref[i - 1] + a[i - 1];

    deque<int> dq;
    int ans = n + 1;

    for (int i = 0; i <= n; i++) {
        while (!dq.empty() && pref[i] - pref[dq.front()] >= k) {
            ans = min(ans, i - dq.front());
            dq.pop_front();
        }
        while (!dq.empty() && pref[i] <= pref[dq.back()]) dq.pop_back();
        dq.push_back(i);
    }

    cout << (ans == n + 1 ? -1 : ans) << "\n";
    return 0;
}
```

---

## 4) High-Level Prefix Sum Patterns to Practice Daily

1. Static range query with many `Q`
2. Count subarray sum = `K` with negatives
3. Longest subarray sum = `K` with first-index map
4. Prefix remainder map (divisible by `K`)
5. 2D prefix rectangle queries

## 5) Final Prefix Sum Revision Order

1. Q1-Q5 (prefix foundation + indexing)
2. Q6-Q9 (sum = K family)
3. Q10-Q13 (mod/remainder and binary transform)
4. Q14-Q16 (XOR and 2D prefix)
5. Q17-Q20 (story + advanced negatives)

If you can solve these cleanly, your Prefix Sum coverage for TCS NQT is complete and exam-ready.
