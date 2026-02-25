# TCS NQT Greedy Method: Full Questions and Answers in C++ (Must-Do Updated)

Source: `/Users/rishabhdubey/Documents/prep for tcsnqt/TCS_NQT_Greedy_Full_Questions_Answers_CPP.md`

This version includes only high-priority questions for 15-day TCS NQT prep.

## Included Questions

Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19, Q21, Q23, Q27, Q34, Q35

---

This document is a complete Greedy-method preparation sheet for TCS NQT coding.
It covers core patterns, story-based variants, and high-frequency interview-style questions.

## 1) Greedy Coverage Map

This document covers:
1. Sorting + one-pass greedy
2. Interval scheduling / overlap removal
3. Resource allocation (rooms, platforms, boats)
4. Profit and cost maximization problems
5. Heap-based greedy
6. String greedy transformations
7. Array jump / reachability greedy
8. Scheduling with deadlines
9. Refueling / capital / project selection
10. Classic story-based greedy patterns

## 2) How to Detect a Greedy Problem

- You can make a **locally best choice** and never need to revisit it.
- Problem asks for min/max with constraints and can be solved after sorting.
- State depends only on a small summary (current end, remaining fuel, heap top).
- DP/backtracking looks possible but too expensive; greedy gives proof by exchange.

## 3) Greedy Pitfalls to Avoid

- Wrong sort key (start vs end, profit vs ratio, asc vs desc).
- Forgetting tie-break conditions.
- Integer overflow for costs and sums.
- Using greedy where proof does not hold (e.g., arbitrary coin systems).

---

---

## Q1. Assign Cookies (Maximum Content Children)

### Problem
Given children greed factors and cookie sizes, each child gets at most one cookie.
Maximize number of satisfied children.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, m;
    cin >> n >> m;
    vector<int> g(n), s(m);
    for (int i = 0; i < n; i++) cin >> g[i];
    for (int i = 0; i < m; i++) cin >> s[i];

    sort(g.begin(), g.end());
    sort(s.begin(), s.end());

    int i = 0, j = 0, ans = 0;
    while (i < n && j < m) {
        if (s[j] >= g[i]) {
            ans++;
            i++;
            j++;
        } else {
            j++;
        }
    }

    cout << ans << "\n";
    return 0;
}
```

---

## Q2. Lemonade Change

### Problem
Customers pay using 5, 10, or 20. Each lemonade costs 5.
Return `Yes` if change can be given to all in order, else `No`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    int five = 0, ten = 0;

    for (int i = 0; i < n; i++) {
        int bill;
        cin >> bill;

        if (bill == 5) {
            five++;
        } else if (bill == 10) {
            if (five == 0) {
                cout << "No\n";
                return 0;
            }
            five--;
            ten++;
        } else {
            if (ten > 0 && five > 0) {
                ten--;
                five--;
            } else if (five >= 3) {
                five -= 3;
            } else {
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

## Q3. Minimum Coins (Canonical Denominations)

### Problem
Given amount `A`, find minimum number of notes using denominations:
`[2000, 500, 200, 100, 50, 20, 10, 5, 2, 1]`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long A;
    cin >> A;
    vector<int> den = {2000, 500, 200, 100, 50, 20, 10, 5, 2, 1};

    long long cnt = 0;
    for (int d : den) {
        cnt += A / d;
        A %= d;
    }

    cout << cnt << "\n";
    return 0;
}
```

---

## Q4. Fractional Knapsack

### Problem
Given `N` items with value and weight, and bag capacity `W`.
You can take fractions of items. Maximize value.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Item {
    double v, w;
};

int main() {
    int n;
    double W;
    cin >> n >> W;

    vector<Item> a(n);
    for (int i = 0; i < n; i++) cin >> a[i].v >> a[i].w;

    sort(a.begin(), a.end(), [](const Item& x, const Item& y) {
        return (x.v / x.w) > (y.v / y.w);
    });

    double ans = 0.0;
    for (auto &it : a) {
        if (W <= 0) break;
        if (it.w <= W) {
            ans += it.v;
            W -= it.w;
        } else {
            ans += (it.v / it.w) * W;
            W = 0;
        }
    }

    cout << fixed << setprecision(6) << ans << "\n";
    return 0;
}
```

---

## Q5. Activity Selection

### Problem
Given activities with start and finish times, find maximum number of non-overlapping activities.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<pair<int,int>> a(n);
    for (int i = 0; i < n; i++) {
        int s, e;
        cin >> s >> e;
        a[i] = {e, s};
    }

    sort(a.begin(), a.end());

    int ans = 0;
    int lastEnd = INT_MIN;
    for (auto &x : a) {
        int e = x.first, s = x.second;
        if (s >= lastEnd) {
            ans++;
            lastEnd = e;
        }
    }

    cout << ans << "\n";
    return 0;
}
```

---

## Q6. N Meetings in One Room (Count + Order)

### Problem
Given start and end arrays, schedule maximum meetings in one room.
Print count and selected meeting indices (1-based).

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Meet {
    int s, e, idx;
};

int main() {
    int n;
    cin >> n;
    vector<int> start(n), endt(n);
    for (int i = 0; i < n; i++) cin >> start[i];
    for (int i = 0; i < n; i++) cin >> endt[i];

    vector<Meet> m(n);
    for (int i = 0; i < n; i++) m[i] = {start[i], endt[i], i + 1};

    sort(m.begin(), m.end(), [](const Meet& a, const Meet& b) {
        if (a.e == b.e) return a.idx < b.idx;
        return a.e < b.e;
    });

    vector<int> chosen;
    int last = -1;
    for (auto &x : m) {
        if (x.s > last) {
            chosen.push_back(x.idx);
            last = x.e;
        }
    }

    cout << chosen.size() << "\n";
    for (int x : chosen) cout << x << " ";
    cout << "\n";
    return 0;
}
```

---

## Q7. Minimum Platforms (Railway)

### Problem
Given arrival and departure times of trains, find minimum platforms required so no train waits.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> arr(n), dep(n);
    for (int i = 0; i < n; i++) cin >> arr[i];
    for (int i = 0; i < n; i++) cin >> dep[i];

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

## Q8. Meeting Rooms II (Minimum Rooms)

### Problem
Given meeting intervals, return minimum number of rooms required.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<pair<int,int>> a(n);
    for (int i = 0; i < n; i++) cin >> a[i].first >> a[i].second;

    sort(a.begin(), a.end());
    priority_queue<int, vector<int>, greater<int>> pq;

    for (auto &it : a) {
        int s = it.first, e = it.second;
        if (!pq.empty() && pq.top() <= s) pq.pop();
        pq.push(e);
    }

    cout << pq.size() << "\n";
    return 0;
}
```

---

## Q9. Erase Overlap Intervals

### Problem
Given intervals, remove minimum number so remaining intervals are non-overlapping.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<pair<int,int>> a(n);
    for (int i = 0; i < n; i++) cin >> a[i].first >> a[i].second;

    sort(a.begin(), a.end(), [](auto &x, auto &y) {
        if (x.second == y.second) return x.first < y.first;
        return x.second < y.second;
    });

    int keep = 0;
    int lastEnd = INT_MIN;
    for (auto &it : a) {
        if (it.first >= lastEnd) {
            keep++;
            lastEnd = it.second;
        }
    }

    cout << (n - keep) << "\n";
    return 0;
}
```

---

## Q10. Minimum Arrows to Burst Balloons

### Problem
Each balloon is interval `[xstart, xend]`. One arrow at `x` bursts all containing `x`.
Return minimum arrows.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<pair<long long,long long>> a(n);
    for (int i = 0; i < n; i++) cin >> a[i].first >> a[i].second;

    sort(a.begin(), a.end(), [](auto &x, auto &y) {
        if (x.second == y.second) return x.first < y.first;
        return x.second < y.second;
    });

    int arrows = 0;
    long long pos = LLONG_MIN;

    for (auto &b : a) {
        if (arrows == 0 || b.first > pos) {
            arrows++;
            pos = b.second;
        }
    }

    cout << arrows << "\n";
    return 0;
}
```

---

## Q11. Merge Overlapping Intervals

### Problem
Merge all overlapping intervals and print merged list.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<pair<int,int>> a(n);
    for (int i = 0; i < n; i++) cin >> a[i].first >> a[i].second;

    sort(a.begin(), a.end());
    vector<pair<int,int>> ans;

    for (auto &it : a) {
        if (ans.empty() || ans.back().second < it.first) {
            ans.push_back(it);
        } else {
            ans.back().second = max(ans.back().second, it.second);
        }
    }

    cout << ans.size() << "\n";
    for (auto &x : ans) cout << x.first << " " << x.second << "\n";
    return 0;
}
```

---

## Q12. Insert Interval

### Problem
Given sorted non-overlapping intervals and a new interval, insert and merge if needed.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<pair<int,int>> a(n);
    for (int i = 0; i < n; i++) cin >> a[i].first >> a[i].second;
    pair<int,int> cur;
    cin >> cur.first >> cur.second;

    vector<pair<int,int>> res;
    int i = 0;

    while (i < n && a[i].second < cur.first) res.push_back(a[i++]);

    while (i < n && a[i].first <= cur.second) {
        cur.first = min(cur.first, a[i].first);
        cur.second = max(cur.second, a[i].second);
        i++;
    }
    res.push_back(cur);

    while (i < n) res.push_back(a[i++]);

    cout << res.size() << "\n";
    for (auto &x : res) cout << x.first << " " << x.second << "\n";
    return 0;
}
```

---

## Q13. Job Sequencing with Deadlines

### Problem
Each job has deadline and profit, takes 1 unit time.
Schedule jobs to maximize total profit.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Job {
    int d, p;
};

int main() {
    int n;
    cin >> n;
    vector<Job> jobs(n);
    int maxD = 0;
    for (int i = 0; i < n; i++) {
        cin >> jobs[i].d >> jobs[i].p;
        maxD = max(maxD, jobs[i].d);
    }

    sort(jobs.begin(), jobs.end(), [](const Job& a, const Job& b) {
        return a.p > b.p;
    });

    vector<int> slot(maxD + 1, -1);
    int cnt = 0;
    long long profit = 0;

    for (int i = 0; i < n; i++) {
        for (int t = jobs[i].d; t >= 1; t--) {
            if (slot[t] == -1) {
                slot[t] = i;
                cnt++;
                profit += jobs[i].p;
                break;
            }
        }
    }

    cout << cnt << " " << profit << "\n";
    return 0;
}
```

---

## Q14. Minimum Cost to Connect Ropes

### Problem
Connect all ropes into one rope. Cost of connecting two ropes is their sum.
Find minimum total cost.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    priority_queue<long long, vector<long long>, greater<long long>> pq;

    for (int i = 0; i < n; i++) {
        long long x;
        cin >> x;
        pq.push(x);
    }

    long long cost = 0;
    while (pq.size() > 1) {
        long long a = pq.top(); pq.pop();
        long long b = pq.top(); pq.pop();
        long long c = a + b;
        cost += c;
        pq.push(c);
    }

    cout << cost << "\n";
    return 0;
}
```

---

## Q15. Gas Station Circular Tour

### Problem
Given gas and cost arrays, find starting index to complete circle, else `-1`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> gas(n), cost(n);
    for (int i = 0; i < n; i++) cin >> gas[i];
    for (int i = 0; i < n; i++) cin >> cost[i];

    int total = 0, tank = 0, start = 0;
    for (int i = 0; i < n; i++) {
        int diff = gas[i] - cost[i];
        total += diff;
        tank += diff;
        if (tank < 0) {
            start = i + 1;
            tank = 0;
        }
    }

    cout << (total >= 0 ? start : -1) << "\n";
    return 0;
}
```

---

## Q16. Jump Game I (Reach Last Index)

### Problem
Given max jump lengths, check if last index is reachable.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    int far = 0;
    for (int i = 0; i < n; i++) {
        if (i > far) {
            cout << "No\n";
            return 0;
        }
        far = max(far, i + a[i]);
    }

    cout << "Yes\n";
    return 0;
}
```

---

## Q17. Jump Game II (Minimum Jumps)

### Problem
Find minimum jumps to reach last index. If impossible, print `-1`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    if (n <= 1) { cout << 0 << "\n"; return 0; }
    if (a[0] == 0) { cout << -1 << "\n"; return 0; }

    int jumps = 0, end = 0, far = 0;
    for (int i = 0; i < n - 1; i++) {
        far = max(far, i + a[i]);
        if (i == end) {
            jumps++;
            end = far;
            if (end <= i) {
                cout << -1 << "\n";
                return 0;
            }
        }
    }

    cout << jumps << "\n";
    return 0;
}
```

---

## Q18. Candy Distribution

### Problem
Each child has rating. Give at least 1 candy each.
Higher rating than neighbor must get more candies.
Find minimum total candies.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> r(n);
    for (int i = 0; i < n; i++) cin >> r[i];

    vector<int> c(n, 1);

    for (int i = 1; i < n; i++) {
        if (r[i] > r[i - 1]) c[i] = c[i - 1] + 1;
    }

    for (int i = n - 2; i >= 0; i--) {
        if (r[i] > r[i + 1]) c[i] = max(c[i], c[i + 1] + 1);
    }

    long long ans = 0;
    for (int x : c) ans += x;
    cout << ans << "\n";
    return 0;
}
```

---

## Q19. Best Time to Buy and Sell Stock II

### Problem
Unlimited transactions allowed (cannot hold multiple stocks).
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

    long long profit = 0;
    for (int i = 1; i < n; i++) {
        if (p[i] > p[i - 1]) profit += p[i] - p[i - 1];
    }

    cout << profit << "\n";
    return 0;
}
```

---

## Q21. Can Place Flowers

### Problem
Given flowerbed (`0` empty, `1` occupied) and `k`, can you place `k` new flowers
without adjacent flowers?

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    int placed = 0;
    for (int i = 0; i < n; i++) {
        if (a[i] == 1) continue;
        int left = (i == 0 ? 0 : a[i - 1]);
        int right = (i == n - 1 ? 0 : a[i + 1]);
        if (left == 0 && right == 0) {
            a[i] = 1;
            placed++;
        }
    }

    cout << (placed >= k ? "Yes" : "No") << "\n";
    return 0;
}
```

---

## Q23. Remove K Digits (Smallest Number)

### Problem
Given numeric string and `k`, remove exactly `k` digits to form smallest possible number.

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
    string ans = (i == (int)st.size() ? "0" : st.substr(i));

    cout << ans << "\n";
    return 0;
}
```

---

## Q27. Boats to Save People

### Problem
Each boat carries at most 2 people with total weight <= limit.
Find minimum boats.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, limit;
    cin >> n >> limit;
    vector<int> w(n);
    for (int i = 0; i < n; i++) cin >> w[i];

    sort(w.begin(), w.end());

    int i = 0, j = n - 1, boats = 0;
    while (i <= j) {
        if (w[i] + w[j] <= limit) i++;
        j--;
        boats++;
    }

    cout << boats << "\n";
    return 0;
}
```

---

## Q34. Largest Number from Array

### Problem
Arrange non-negative integers to form the largest possible number.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<string> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    sort(a.begin(), a.end(), [](const string& x, const string& y) {
        return x + y > y + x;
    });

    if (!a.empty() && a[0] == "0") {
        cout << "0\n";
        return 0;
    }

    string ans;
    for (auto &s : a) ans += s;
    cout << ans << "\n";
    return 0;
}
```

---

## Q35. Minimize Maximum Difference Between Heights

### Problem
Given heights and integer `K`, each height can be increased or decreased by `K` once.
Find minimum possible difference between highest and lowest.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;
    vector<int> h(n);
    for (int i = 0; i < n; i++) cin >> h[i];

    sort(h.begin(), h.end());
    int ans = h[n - 1] - h[0];

    int small = h[0] + k;
    int big = h[n - 1] - k;
    if (small > big) swap(small, big);

    for (int i = 1; i < n - 1; i++) {
        int sub = h[i] - k;
        int add = h[i] + k;

        if (sub >= small || add <= big) continue;

        if (big - sub <= add - small) {
            small = sub;
        } else {
            big = add;
        }
    }

    cout << min(ans, big - small) << "\n";
    return 0;
}
```

---
