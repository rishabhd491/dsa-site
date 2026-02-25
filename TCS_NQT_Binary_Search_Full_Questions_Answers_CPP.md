# TCS NQT Binary Search: Full Questions and C++ Solutions

This is a complete Binary Search preparation document for TCS NQT.
It covers classic search, bounds, rotated arrays, peaks, and binary-search-on-answer problems.

## 1) Binary Search Checklist

1. Standard binary search (iterative/recursive)
2. Lower bound / upper bound
3. First/last occurrence and count
4. Search in rotated and bitonic arrays
5. Peak / monotonic predicate problems
6. Binary search on answer (capacity/speed/days)
7. Partition optimization problems

## 2) Core Template

```cpp
int l = low, r = high;
while (l <= r) {
    int mid = l + (r - l) / 2;
    if (condition(mid)) {
        // move one side
    } else {
        // move other side
    }
}
```

---

## Q1. Iterative Binary Search

### Problem Statement
Given sorted array and key `x`, return index (0-based) else `-1`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, x;
    cin >> n >> x;
    vector<int> a(n);
    for (auto &v : a) cin >> v;

    int l = 0, r = n - 1;
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (a[m] == x) {
            cout << m << "\n";
            return 0;
        }
        if (a[m] < x) l = m + 1;
        else r = m - 1;
    }

    cout << -1 << "\n";
    return 0;
}
```

## Q2. Recursive Binary Search

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int bs(const vector<int>& a, int l, int r, int x) {
    if (l > r) return -1;
    int m = l + (r - l) / 2;
    if (a[m] == x) return m;
    if (a[m] < x) return bs(a, m + 1, r, x);
    return bs(a, l, m - 1, x);
}

int main() {
    int n, x;
    cin >> n >> x;
    vector<int> a(n);
    for (auto &v : a) cin >> v;

    cout << bs(a, 0, n - 1, x) << "\n";
    return 0;
}
```

## Q3. Lower Bound

### Problem Statement
Find first index `i` such that `A[i] >= x`, else `n`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, x;
    cin >> n >> x;
    vector<int> a(n);
    for (auto &v : a) cin >> v;

    int l = 0, r = n;
    while (l < r) {
        int m = l + (r - l) / 2;
        if (a[m] >= x) r = m;
        else l = m + 1;
    }

    cout << l << "\n";
    return 0;
}
```

## Q4. Upper Bound

### Problem Statement
Find first index `i` such that `A[i] > x`, else `n`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, x;
    cin >> n >> x;
    vector<int> a(n);
    for (auto &v : a) cin >> v;

    int l = 0, r = n;
    while (l < r) {
        int m = l + (r - l) / 2;
        if (a[m] > x) r = m;
        else l = m + 1;
    }

    cout << l << "\n";
    return 0;
}
```

## Q5. First Occurrence of X

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, x;
    cin >> n >> x;
    vector<int> a(n);
    for (auto &v : a) cin >> v;

    int l = 0, r = n - 1, ans = -1;
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (a[m] >= x) {
            if (a[m] == x) ans = m;
            r = m - 1;
        } else l = m + 1;
    }

    cout << ans << "\n";
    return 0;
}
```

## Q6. Last Occurrence of X

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, x;
    cin >> n >> x;
    vector<int> a(n);
    for (auto &v : a) cin >> v;

    int l = 0, r = n - 1, ans = -1;
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (a[m] <= x) {
            if (a[m] == x) ans = m;
            l = m + 1;
        } else r = m - 1;
    }

    cout << ans << "\n";
    return 0;
}
```

## Q7. Count Occurrences of X

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int firstOcc(const vector<int>& a, int x) {
    int l = 0, r = (int)a.size() - 1, ans = -1;
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (a[m] >= x) {
            if (a[m] == x) ans = m;
            r = m - 1;
        } else l = m + 1;
    }
    return ans;
}

int lastOcc(const vector<int>& a, int x) {
    int l = 0, r = (int)a.size() - 1, ans = -1;
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (a[m] <= x) {
            if (a[m] == x) ans = m;
            l = m + 1;
        } else r = m - 1;
    }
    return ans;
}

int main() {
    int n, x;
    cin >> n >> x;
    vector<int> a(n);
    for (auto &v : a) cin >> v;

    int f = firstOcc(a, x), l = lastOcc(a, x);
    cout << (f == -1 ? 0 : l - f + 1) << "\n";
    return 0;
}
```

## Q8. Search Insert Position

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, x;
    cin >> n >> x;
    vector<int> a(n);
    for (auto &v : a) cin >> v;

    int l = 0, r = n;
    while (l < r) {
        int m = l + (r - l) / 2;
        if (a[m] >= x) r = m;
        else l = m + 1;
    }

    cout << l << "\n";
    return 0;
}
```

## Q9. Floor and Ceil in Sorted Array

### Problem Statement
Find floor (largest <= x) and ceil (smallest >= x) values.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, x;
    cin >> n >> x;
    vector<int> a(n);
    for (auto &v : a) cin >> v;

    int floorVal = -1, ceilVal = -1;

    int l = 0, r = n - 1;
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (a[m] <= x) floorVal = a[m], l = m + 1;
        else r = m - 1;
    }

    l = 0, r = n - 1;
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (a[m] >= x) ceilVal = a[m], r = m - 1;
        else l = m + 1;
    }

    cout << floorVal << " " << ceilVal << "\n";
    return 0;
}
```

## Q10. Square Root (Floor)

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n;
    cin >> n;

    long long l = 0, r = n, ans = 0;
    while (l <= r) {
        long long m = l + (r - l) / 2;
        if (m <= n / max(1LL, m)) {
            ans = m;
            l = m + 1;
        } else r = m - 1;
    }

    cout << ans << "\n";
    return 0;
}
```

## Q11. N-th Root of Integer

### Problem Statement
Given `n` and `m`, find integer `x` such that `x^n = m`, else `-1`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

long long powerLimit(long long a, int n, long long lim) {
    __int128 p = 1;
    for (int i = 0; i < n; i++) {
        p *= a;
        if (p > lim) return lim + 1;
    }
    return (long long)p;
}

int main() {
    int n;
    long long m;
    cin >> n >> m;

    long long l = 1, r = m;
    while (l <= r) {
        long long mid = l + (r - l) / 2;
        long long p = powerLimit(mid, n, m);
        if (p == m) {
            cout << mid << "\n";
            return 0;
        }
        if (p < m) l = mid + 1;
        else r = mid - 1;
    }

    cout << -1 << "\n";
    return 0;
}
```

## Q12. Find Peak Element

### Problem Statement
Find index of any peak (`a[i] > neighbors`).

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (auto &v : a) cin >> v;

    int l = 0, r = n - 1;
    while (l < r) {
        int m = l + (r - l) / 2;
        if (a[m] < a[m + 1]) l = m + 1;
        else r = m;
    }

    cout << l << "\n";
    return 0;
}
```

## Q13. Search in Rotated Sorted Array

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, x;
    cin >> n >> x;
    vector<int> a(n);
    for (auto &v : a) cin >> v;

    int l = 0, r = n - 1;
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (a[m] == x) {
            cout << m << "\n";
            return 0;
        }

        if (a[l] <= a[m]) {
            if (a[l] <= x && x < a[m]) r = m - 1;
            else l = m + 1;
        } else {
            if (a[m] < x && x <= a[r]) l = m + 1;
            else r = m - 1;
        }
    }

    cout << -1 << "\n";
    return 0;
}
```

## Q14. Search in Rotated Sorted Array (With Duplicates)

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, x;
    cin >> n >> x;
    vector<int> a(n);
    for (auto &v : a) cin >> v;

    int l = 0, r = n - 1;
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (a[m] == x) {
            cout << "Yes\n";
            return 0;
        }

        if (a[l] == a[m] && a[m] == a[r]) {
            l++, r--;
            continue;
        }

        if (a[l] <= a[m]) {
            if (a[l] <= x && x < a[m]) r = m - 1;
            else l = m + 1;
        } else {
            if (a[m] < x && x <= a[r]) l = m + 1;
            else r = m - 1;
        }
    }

    cout << "No\n";
    return 0;
}
```

## Q15. Minimum in Rotated Sorted Array

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (auto &v : a) cin >> v;

    int l = 0, r = n - 1;
    while (l < r) {
        int m = l + (r - l) / 2;
        if (a[m] > a[r]) l = m + 1;
        else r = m;
    }

    cout << a[l] << "\n";
    return 0;
}
```

## Q16. Rotation Count in Rotated Sorted Array

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (auto &v : a) cin >> v;

    int l = 0, r = n - 1;
    while (l < r) {
        int m = l + (r - l) / 2;
        if (a[m] > a[r]) l = m + 1;
        else r = m;
    }

    cout << l << "\n";
    return 0;
}
```

## Q17. Single Element in Sorted Array

### Problem Statement
Every element appears twice except one appears once. Find single.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (auto &v : a) cin >> v;

    int l = 0, r = n - 1;
    while (l < r) {
        int m = l + (r - l) / 2;
        if (m & 1) m--;

        if (a[m] == a[m + 1]) l = m + 2;
        else r = m;
    }

    cout << a[l] << "\n";
    return 0;
}
```

## Q18. K-th Missing Positive Number

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;
    vector<int> a(n);
    for (auto &v : a) cin >> v;

    int l = 0, r = n;
    while (l < r) {
        int m = l + (r - l) / 2;
        int miss = a[m] - (m + 1);
        if (miss < k) l = m + 1;
        else r = m;
    }

    cout << (l + k) << "\n";
    return 0;
}
```

## Q19. Median of Two Sorted Arrays

### Problem Statement
Given sorted arrays `A`, `B`, return median of combined sorted array.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, m;
    cin >> n >> m;
    vector<int> a(n), b(m);
    for (auto &x : a) cin >> x;
    for (auto &x : b) cin >> x;

    if (n > m) { swap(a, b); swap(n, m); }

    int totalLeft = (n + m + 1) / 2;
    int l = 0, r = n;

    while (l <= r) {
        int cutA = l + (r - l) / 2;
        int cutB = totalLeft - cutA;

        int lA = (cutA == 0 ? INT_MIN : a[cutA - 1]);
        int rA = (cutA == n ? INT_MAX : a[cutA]);
        int lB = (cutB == 0 ? INT_MIN : b[cutB - 1]);
        int rB = (cutB == m ? INT_MAX : b[cutB]);

        if (lA <= rB && lB <= rA) {
            if ((n + m) % 2) {
                cout << max(lA, lB) << "\n";
            } else {
                double ans = (max(lA, lB) + min(rA, rB)) / 2.0;
                cout << fixed << setprecision(5) << ans << "\n";
            }
            return 0;
        }

        if (lA > rB) r = cutA - 1;
        else l = cutA + 1;
    }

    return 0;
}
```

## Q20. K-th Element of Two Sorted Arrays

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, m, k;
    cin >> n >> m >> k;
    vector<int> a(n), b(m);
    for (auto &x : a) cin >> x;
    for (auto &x : b) cin >> x;

    if (n > m) { swap(a, b); swap(n, m); }

    int l = max(0, k - m), r = min(k, n);

    while (l <= r) {
        int cutA = l + (r - l) / 2;
        int cutB = k - cutA;

        int lA = (cutA == 0 ? INT_MIN : a[cutA - 1]);
        int rA = (cutA == n ? INT_MAX : a[cutA]);
        int lB = (cutB == 0 ? INT_MIN : b[cutB - 1]);
        int rB = (cutB == m ? INT_MAX : b[cutB]);

        if (lA <= rB && lB <= rA) {
            cout << max(lA, lB) << "\n";
            return 0;
        }

        if (lA > rB) r = cutA - 1;
        else l = cutA + 1;
    }

    return 0;
}
```

## Q21. Koko Eating Bananas (Min Speed)

### Problem Statement
Find minimum integer speed to finish piles within `H` hours.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

bool can(const vector<int>& p, int h, int k) {
    long long t = 0;
    for (int x : p) t += (x + k - 1) / k;
    return t <= h;
}

int main() {
    int n, h;
    cin >> n >> h;
    vector<int> p(n);
    for (auto &x : p) cin >> x;

    int l = 1, r = *max_element(p.begin(), p.end()), ans = r;
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (can(p, h, m)) ans = m, r = m - 1;
        else l = m + 1;
    }

    cout << ans << "\n";
    return 0;
}
```

## Q22. Ship Packages Within D Days

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

bool can(const vector<int>& w, int d, int cap) {
    int days = 1;
    long long cur = 0;
    for (int x : w) {
        if (cur + x > cap) {
            days++;
            cur = x;
        } else cur += x;
    }
    return days <= d;
}

int main() {
    int n, d;
    cin >> n >> d;
    vector<int> w(n);
    for (auto &x : w) cin >> x;

    int l = *max_element(w.begin(), w.end());
    int r = accumulate(w.begin(), w.end(), 0);
    int ans = r;

    while (l <= r) {
        int m = l + (r - l) / 2;
        if (can(w, d, m)) ans = m, r = m - 1;
        else l = m + 1;
    }

    cout << ans << "\n";
    return 0;
}
```

## Q23. Minimum Days to Make M Bouquets

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

bool can(const vector<int>& a, int m, int k, int day) {
    int flowers = 0, bouq = 0;
    for (int x : a) {
        if (x <= day) {
            flowers++;
            if (flowers == k) {
                bouq++;
                flowers = 0;
            }
        } else flowers = 0;
    }
    return bouq >= m;
}

int main() {
    int n, m, k;
    cin >> n >> m >> k;
    vector<int> a(n);
    for (auto &x : a) cin >> x;

    if (1LL * m * k > n) {
        cout << -1 << "\n";
        return 0;
    }

    int l = *min_element(a.begin(), a.end());
    int r = *max_element(a.begin(), a.end());
    int ans = r;

    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (can(a, m, k, mid)) ans = mid, r = mid - 1;
        else l = mid + 1;
    }

    cout << ans << "\n";
    return 0;
}
```

## Q24. Smallest Divisor Given Threshold

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

bool ok(const vector<int>& a, int th, int d) {
    long long s = 0;
    for (int x : a) s += (x + d - 1) / d;
    return s <= th;
}

int main() {
    int n, th;
    cin >> n >> th;
    vector<int> a(n);
    for (auto &x : a) cin >> x;

    int l = 1, r = *max_element(a.begin(), a.end()), ans = r;
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (ok(a, th, m)) ans = m, r = m - 1;
        else l = m + 1;
    }

    cout << ans << "\n";
    return 0;
}
```

## Q25. Aggressive Cows

### Problem Statement
Place `C` cows in sorted stalls maximizing minimum distance.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

bool canPlace(const vector<int>& s, int c, int dist) {
    int cnt = 1, last = s[0];
    for (int i = 1; i < (int)s.size(); i++) {
        if (s[i] - last >= dist) {
            cnt++;
            last = s[i];
            if (cnt >= c) return true;
        }
    }
    return false;
}

int main() {
    int n, c;
    cin >> n >> c;
    vector<int> s(n);
    for (auto &x : s) cin >> x;
    sort(s.begin(), s.end());

    int l = 1, r = s.back() - s.front(), ans = 0;
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (canPlace(s, c, m)) ans = m, l = m + 1;
        else r = m - 1;
    }

    cout << ans << "\n";
    return 0;
}
```

## Q26. Allocate Minimum Pages

### Problem Statement
Allocate books in order to `M` students minimizing maximum pages assigned.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

bool can(const vector<int>& a, int m, int cap) {
    int stu = 1;
    long long pages = 0;

    for (int x : a) {
        if (x > cap) return false;
        if (pages + x > cap) {
            stu++;
            pages = x;
        } else pages += x;
    }

    return stu <= m;
}

int main() {
    int n, m;
    cin >> n >> m;
    vector<int> a(n);
    for (auto &x : a) cin >> x;

    if (m > n) {
        cout << -1 << "\n";
        return 0;
    }

    int l = *max_element(a.begin(), a.end());
    int r = accumulate(a.begin(), a.end(), 0);
    int ans = r;

    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (can(a, m, mid)) ans = mid, r = mid - 1;
        else l = mid + 1;
    }

    cout << ans << "\n";
    return 0;
}
```

## Q27. Split Array Largest Sum

### Problem Statement
Split array into `K` subarrays minimizing largest subarray sum.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

bool can(const vector<int>& a, int k, long long cap) {
    int parts = 1;
    long long sum = 0;

    for (int x : a) {
        if (x > cap) return false;
        if (sum + x > cap) {
            parts++;
            sum = x;
        } else sum += x;
    }

    return parts <= k;
}

int main() {
    int n, k;
    cin >> n >> k;
    vector<int> a(n);
    for (auto &x : a) cin >> x;

    long long l = *max_element(a.begin(), a.end());
    long long r = accumulate(a.begin(), a.end(), 0LL), ans = r;

    while (l <= r) {
        long long m = l + (r - l) / 2;
        if (can(a, k, m)) ans = m, r = m - 1;
        else l = m + 1;
    }

    cout << ans << "\n";
    return 0;
}
```

## Q28. Painters Partition Problem

### Problem Statement
Boards must be painted in order by `K` painters, minimize max workload.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

bool ok(const vector<int>& b, int k, long long cap) {
    int painters = 1;
    long long cur = 0;

    for (int x : b) {
        if (x > cap) return false;
        if (cur + x > cap) {
            painters++;
            cur = x;
        } else cur += x;
    }

    return painters <= k;
}

int main() {
    int n, k;
    cin >> n >> k;
    vector<int> b(n);
    for (auto &x : b) cin >> x;

    long long l = *max_element(b.begin(), b.end());
    long long r = accumulate(b.begin(), b.end(), 0LL), ans = r;

    while (l <= r) {
        long long m = l + (r - l) / 2;
        if (ok(b, k, m)) ans = m, r = m - 1;
        else l = m + 1;
    }

    cout << ans << "\n";
    return 0;
}
```

## Q29. Capacity to Run Machines (Story)

### Problem Statement
Given production rates array and required units `U`, each machine runs `T` time.
Find minimum integer `T` to produce at least `U` units.

### Input Format
- `N U`
- `N` rates (`units per time`)

### Output Format
- minimum time `T`

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

bool can(const vector<long long>& r, long long u, long long t) {
    __int128 produced = 0;
    for (long long x : r) {
        produced += (__int128)x * t;
        if (produced >= u) return true;
    }
    return produced >= u;
}

int main() {
    int n;
    long long u;
    cin >> n >> u;

    vector<long long> r(n);
    for (auto &x : r) cin >> x;

    long long l = 0, h = 1;
    while (!can(r, u, h)) {
        if (h > (long long)2e18 / 2) break;
        h *= 2;
    }

    long long ans = h;
    while (l <= h) {
        long long m = l + (h - l) / 2;
        if (can(r, u, m)) ans = m, h = m - 1;
        else l = m + 1;
    }

    cout << ans << "\n";
    return 0;
}
```

## Q30. First Bad Version (Monotonic Boolean)

### Problem Statement
There are versions `1..N`; once bad starts, all later are bad.
Given API `isBad(v)` (simulated via input first bad), find first bad version.

### Input Format
- `N firstBad`

### Output Format
- first bad version

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n, firstBad;
    cin >> n >> firstBad;

    auto isBad = [&](long long v) { return v >= firstBad; };

    long long l = 1, r = n, ans = n;
    while (l <= r) {
        long long m = l + (r - l) / 2;
        if (isBad(m)) ans = m, r = m - 1;
        else l = m + 1;
    }

    cout << ans << "\n";
    return 0;
}
```

## 3) Suggested Revision Order

1. Core search and bounds: `Q1-Q9`
2. Peak/rotated/special arrays: `Q10-Q18`
3. Advanced sorted partitions: `Q19-Q20`
4. Binary search on answer: `Q21-Q30`

## 4) Edge-Case Checklist

- empty/single-element arrays
- duplicates in bound problems
- overflow in midpoint and sums
- impossible constraints (`M > N` style)
- no answer cases (`-1` outputs)

## 5) Most Important NQT Binary Search Questions

1. first/last/count (`Q5-Q7`)
2. rotated search + min (`Q13-Q16`)
3. sqrt/nth-root (`Q10-Q11`)
4. shipping/koko/bouquets/divisor (`Q21-Q24`)
5. aggressive cows/allocate pages (`Q25-Q26`)

