# TCS NQT Heap / Priority Queue - Full Questions and Answers (C++)

This file is dedicated to heap-based patterns using C++ `priority_queue`.
Focus on min-heap, max-heap, top-K, merge-K, and scheduling/story-based use cases.

---

## Q1. Max-Heap Basic Operations

### Problem Statement
Read `N` numbers, push into max-heap, then print elements in descending order.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
Print heap pop order.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    priority_queue<int> pq;
    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        pq.push(x);
    }
    while (!pq.empty()) {
        cout << pq.top() << " ";
        pq.pop();
    }
    cout << "\n";
    return 0;
}
```

### Complexity
- Build: `O(N log N)`
- Pop all: `O(N log N)`

---

## Q2. Min-Heap Basic Operations

### Problem Statement
Read `N` numbers, push into min-heap, then print elements in ascending order.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    priority_queue<int, vector<int>, greater<int>> pq;
    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        pq.push(x);
    }
    while (!pq.empty()) {
        cout << pq.top() << " ";
        pq.pop();
    }
    cout << "\n";
    return 0;
}
```

---

## Q3. Heap Sort (Using Max-Heap)

### Problem Statement
Sort an array in increasing order using heap operations.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    priority_queue<int> pq;
    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        pq.push(x);
    }

    vector<int> ans;
    while (!pq.empty()) {
        ans.push_back(pq.top());
        pq.pop();
    }
    reverse(ans.begin(), ans.end());

    for (int x : ans) cout << x << " ";
    cout << "\n";
    return 0;
}
```

---

## Q4. K-th Largest Element in Array (Min-Heap)

### Problem Statement
Find `K`-th largest element in unsorted array.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    if (k < 1 || k > n) {
        cout << -1 << "\n";
        return 0;
    }

    priority_queue<int, vector<int>, greater<int>> pq;
    for (int x : a) {
        pq.push(x);
        if ((int)pq.size() > k) pq.pop();
    }

    cout << pq.top() << "\n";
    return 0;
}
```

### Complexity
- `O(N log K)`

---

## Q5. K-th Smallest Element in Array (Max-Heap)

### Problem Statement
Find `K`-th smallest element in unsorted array.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    if (k < 1 || k > n) {
        cout << -1 << "\n";
        return 0;
    }

    priority_queue<int> pq;
    for (int x : a) {
        pq.push(x);
        if ((int)pq.size() > k) pq.pop();
    }

    cout << pq.top() << "\n";
    return 0;
}
```

---

## Q6. K-th Largest Element in a Stream

### Problem Statement
Given stream of numbers, after each insertion print current `K`-th largest.
If fewer than `K` elements seen, print `-1`.

### Input Format
- First line: `K N`
- Second line: `N` stream values

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int k, n;
    cin >> k >> n;

    priority_queue<int, vector<int>, greater<int>> pq;
    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        pq.push(x);
        if ((int)pq.size() > k) pq.pop();

        if ((int)pq.size() < k) cout << -1 << " ";
        else cout << pq.top() << " ";
    }
    cout << "\n";
    return 0;
}
```

---

## Q7. Top K Frequent Elements

### Problem Statement
Return `K` elements with highest frequency.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    unordered_map<int, int> freq;
    for (int x : a) freq[x]++;

    // min-heap by frequency
    priority_queue<pair<int,int>, vector<pair<int,int>>, greater<pair<int,int>>> pq;
    for (auto &p : freq) {
        pq.push({p.second, p.first});
        if ((int)pq.size() > k) pq.pop();
    }

    vector<int> ans;
    while (!pq.empty()) {
        ans.push_back(pq.top().second);
        pq.pop();
    }
    reverse(ans.begin(), ans.end());

    for (int x : ans) cout << x << " ";
    cout << "\n";
    return 0;
}
```

---

## Q8. Sort Characters by Frequency

### Problem Statement
Given string, print characters sorted by descending frequency.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin >> s;

    unordered_map<char, int> freq;
    for (char c : s) freq[c]++;

    priority_queue<pair<int,char>> pq;
    for (auto &p : freq) pq.push({p.second, p.first});

    string ans;
    while (!pq.empty()) {
        auto [f, ch] = pq.top();
        pq.pop();
        ans.append(f, ch);
    }

    cout << ans << "\n";
    return 0;
}
```

---

## Q9. Merge K Sorted Arrays

### Problem Statement
Merge `K` sorted arrays into one sorted array.

### Input Format
- First line: `K N` (`N` elements per array)
- Next `K` lines: sorted arrays

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Node {
    int val, r, c;
    bool operator>(const Node &other) const {
        return val > other.val;
    }
};

int main() {
    int k, n;
    cin >> k >> n;
    vector<vector<int>> a(k, vector<int>(n));
    for (int i = 0; i < k; i++)
        for (int j = 0; j < n; j++)
            cin >> a[i][j];

    priority_queue<Node, vector<Node>, greater<Node>> pq;
    for (int i = 0; i < k; i++) pq.push({a[i][0], i, 0});

    vector<int> ans;
    while (!pq.empty()) {
        Node cur = pq.top();
        pq.pop();

        ans.push_back(cur.val);

        if (cur.c + 1 < n) {
            pq.push({a[cur.r][cur.c + 1], cur.r, cur.c + 1});
        }
    }

    for (int x : ans) cout << x << " ";
    cout << "\n";
    return 0;
}
```

---

## Q10. Merge K Sorted Linked Lists

### Problem Statement
Given heads of `K` sorted linked lists, merge into one sorted list.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(nullptr) {}
};

struct Cmp {
    bool operator()(ListNode* a, ListNode* b) {
        return a->val > b->val;
    }
};

ListNode* mergeKLists(vector<ListNode*>& lists) {
    priority_queue<ListNode*, vector<ListNode*>, Cmp> pq;
    for (auto node : lists) if (node) pq.push(node);

    ListNode dummy(0), *tail = &dummy;
    while (!pq.empty()) {
        ListNode* cur = pq.top(); pq.pop();
        tail->next = cur;
        tail = tail->next;
        if (cur->next) pq.push(cur->next);
    }
    return dummy.next;
}

int main() {
    // Build linked lists as needed and call mergeKLists.
    // Template kept concise for study focus.
    return 0;
}
```

---

## Q11. Find Median from Data Stream (Two Heaps)

### Problem Statement
After each number insertion, output current median.

### Input Format
- First line: `N`
- Second line: `N` numbers

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    priority_queue<int> leftMax; // lower half
    priority_queue<int, vector<int>, greater<int>> rightMin; // upper half

    for (int i = 0; i < n; i++) {
        int x; cin >> x;

        if (leftMax.empty() || x <= leftMax.top()) leftMax.push(x);
        else rightMin.push(x);

        if ((int)leftMax.size() > (int)rightMin.size() + 1) {
            rightMin.push(leftMax.top()); leftMax.pop();
        } else if ((int)rightMin.size() > (int)leftMax.size()) {
            leftMax.push(rightMin.top()); rightMin.pop();
        }

        if (leftMax.size() == rightMin.size()) {
            double med = (leftMax.top() + rightMin.top()) / 2.0;
            cout << fixed << setprecision(1) << med << " ";
        } else {
            cout << leftMax.top() << " ";
        }
    }
    cout << "\n";
    return 0;
}
```

---

## Q12. Sliding Window Maximum (Heap)

### Problem Statement
For each window of size `K`, print maximum.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    priority_queue<pair<int,int>> pq; // {value, index}
    vector<int> ans;

    for (int i = 0; i < n; i++) {
        pq.push({a[i], i});

        while (!pq.empty() && pq.top().second <= i - k) pq.pop();

        if (i >= k - 1) ans.push_back(pq.top().first);
    }

    for (int x : ans) cout << x << " ";
    cout << "\n";
    return 0;
}
```

---

## Q13. K Closest Elements to X

### Problem Statement
Given sorted array, print `K` elements closest to `X`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k, x;
    cin >> n >> k >> x;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    priority_queue<pair<int,int>> pq; // {distance, value}
    for (int v : a) {
        pq.push({abs(v - x), v});
        if ((int)pq.size() > k) pq.pop();
    }

    vector<int> ans;
    while (!pq.empty()) {
        ans.push_back(pq.top().second);
        pq.pop();
    }
    sort(ans.begin(), ans.end());

    for (int v : ans) cout << v << " ";
    cout << "\n";
    return 0;
}
```

---

## Q14. K Closest Points to Origin

### Problem Statement
Given points `(x,y)`, return `K` points with minimum distance from origin.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    priority_queue<pair<long long, pair<int,int>>> pq; // max-heap by distance

    for (int i = 0; i < n; i++) {
        int x, y;
        cin >> x >> y;
        long long d = 1LL * x * x + 1LL * y * y;
        pq.push({d, {x, y}});
        if ((int)pq.size() > k) pq.pop();
    }

    vector<pair<int,int>> ans;
    while (!pq.empty()) {
        ans.push_back(pq.top().second);
        pq.pop();
    }

    for (auto &p : ans) cout << p.first << " " << p.second << "\n";
    return 0;
}
```

---

## Q15. Minimum Cost to Connect Ropes

### Problem Statement
You have rope lengths. Connect all ropes into one rope with minimum cost.
Connecting two ropes of lengths `a` and `b` costs `a+b`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    priority_queue<long long, vector<long long>, greater<long long>> pq;
    for (int i = 0; i < n; i++) {
        long long x; cin >> x;
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

## Q16. Meeting Rooms II (Minimum Rooms Required)

### Problem Statement
Given intervals `[start, end]`, find minimum meeting rooms required.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<pair<int,int>> v(n);
    for (int i = 0; i < n; i++) cin >> v[i].first >> v[i].second;

    sort(v.begin(), v.end());
    priority_queue<int, vector<int>, greater<int>> pq; // end times

    int ans = 0;
    for (auto &it : v) {
        int s = it.first, e = it.second;
        while (!pq.empty() && pq.top() <= s) pq.pop();
        pq.push(e);
        ans = max(ans, (int)pq.size());
    }

    cout << ans << "\n";
    return 0;
}
```

---

## Q17. Reorganize String (No Adjacent Equal)

### Problem Statement
Rearrange characters so that no two adjacent chars are equal. If impossible, print `-1`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin >> s;

    unordered_map<char,int> freq;
    for (char c : s) freq[c]++;

    priority_queue<pair<int,char>> pq;
    for (auto &p : freq) pq.push({p.second, p.first});

    string ans;
    pair<int,char> prev = {0, '#'};

    while (!pq.empty()) {
        auto cur = pq.top(); pq.pop();
        ans.push_back(cur.second);
        cur.first--;

        if (prev.first > 0) pq.push(prev);
        prev = cur;
    }

    for (int i = 1; i < (int)ans.size(); i++) {
        if (ans[i] == ans[i - 1]) {
            cout << -1 << "\n";
            return 0;
        }
    }

    cout << ans << "\n";
    return 0;
}
```

---

## Q18. Task Scheduler with Cooldown

### Problem Statement
Tasks are uppercase chars. Same task requires `n` cooldown between two executions.
Find minimum total intervals.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int m, cool;
    cin >> m >> cool;
    vector<char> tasks(m);
    for (int i = 0; i < m; i++) cin >> tasks[i];

    vector<int> f(26, 0);
    for (char c : tasks) f[c - 'A']++;

    priority_queue<int> pq;
    for (int x : f) if (x > 0) pq.push(x);

    int time = 0;
    while (!pq.empty()) {
        vector<int> tmp;
        int cycle = cool + 1;

        for (int i = 0; i < cycle; i++) {
            if (!pq.empty()) {
                int cnt = pq.top(); pq.pop();
                if (cnt - 1 > 0) tmp.push_back(cnt - 1);
            }
            time++;
            if (pq.empty() && tmp.empty()) break;
        }

        for (int x : tmp) pq.push(x);
    }

    cout << time << "\n";
    return 0;
}
```

---

## Q19. IPO - Maximize Capital (Two Heaps)

### Problem Statement
You can do at most `K` projects. Each project has `capital[i]` required and `profit[i]` gained.
Start with `W` capital. Maximize final capital.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    long long w;
    cin >> n >> k >> w;

    vector<int> capital(n), profit(n);
    for (int i = 0; i < n; i++) cin >> capital[i];
    for (int i = 0; i < n; i++) cin >> profit[i];

    vector<pair<int,int>> proj;
    for (int i = 0; i < n; i++) proj.push_back({capital[i], profit[i]});
    sort(proj.begin(), proj.end());

    priority_queue<int> bestProfits;
    int i = 0;

    for (int done = 0; done < k; done++) {
        while (i < n && proj[i].first <= w) {
            bestProfits.push(proj[i].second);
            i++;
        }
        if (bestProfits.empty()) break;
        w += bestProfits.top();
        bestProfits.pop();
    }

    cout << w << "\n";
    return 0;
}
```

---

## Q20. Story-Based: Hospital Triage by Severity

### Problem Statement
Each patient has `(name, severity, arrivalOrder)`.
Treat highest severity first. If severity ties, lower arrival order first.
Print treatment order.

### Input Format
- First line: `N`
- Next `N` lines: `name severity`
  - arrival order is input order (0 to N-1)

### Output Format
Print names in treatment order.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Patient {
    string name;
    int sev;
    int idx;
};

struct Cmp {
    bool operator()(const Patient &a, const Patient &b) const {
        if (a.sev == b.sev) return a.idx > b.idx; // earlier index first
        return a.sev < b.sev; // higher severity first
    }
};

int main() {
    int n;
    cin >> n;

    priority_queue<Patient, vector<Patient>, Cmp> pq;

    for (int i = 0; i < n; i++) {
        string name;
        int s;
        cin >> name >> s;
        pq.push({name, s, i});
    }

    while (!pq.empty()) {
        cout << pq.top().name << "\n";
        pq.pop();
    }
    return 0;
}
```

---

## Must-Do Heap Revision Order

1. Q4, Q5, Q6 (K-th and stream)
2. Q7, Q8 (frequency patterns)
3. Q9, Q10 (merge K)
4. Q11 (median stream)
5. Q15, Q16 (cost + scheduling)
6. Q17, Q18, Q19, Q20 (high-yield mixed/story)

If you can solve these cleanly, your heap/`priority_queue` coverage is strong for TCS NQT coding rounds.
