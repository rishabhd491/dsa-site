# TCS NQT STL Master Guide (C++) (Must-Do Updated)

Source: `/Users/rishabhdubey/Documents/prep for tcsnqt/TCS_NQT_STL_Sets_Maps_Vector_Usage_CPP.md`

This version includes only high-priority questions for 15-day TCS NQT prep.

## Included Questions

Q1, Q2, Q3, Q4

---

## Vector, Set, Map - High-Utility Exam Usage

This file is a practical STL guide for TCS NQT coding rounds.
Focus containers:
- `vector`
- `set`, `multiset`, `unordered_set`
- `map`, `multimap`, `unordered_map`

---

## 1) Quick Container Selection (Exam Decision)

Use this fast rule during coding:

| Need | Best STL |
|---|---|
| Dynamic array, indexed access | `vector` |
| Keep unique values sorted | `set` |
| Keep unique values, fast average lookup | `unordered_set` |
| Keep key-value pairs sorted by key | `map` |
| Key-value with fast average lookup | `unordered_map` |
| Duplicate values sorted | `multiset` |
| Duplicate keys allowed sorted | `multimap` |

Fast memory trick:
- Need order? use ordered (`set`, `map`).
- Need speed average O(1)? use unordered (`unordered_set`, `unordered_map`).

---

## 2) Complexity Cheat Sheet

| Operation | `vector` | `set` / `map` | `unordered_set` / `unordered_map` |
|---|---|---|---|
| Access by index/key | `O(1)` index | `O(log n)` key | Avg `O(1)`, worst `O(n)` |
| Insert | End `O(1)` amortized | `O(log n)` | Avg `O(1)` |
| Erase | End `O(1)`, middle `O(n)` | `O(log n)` | Avg `O(1)` |
| Find | `O(n)` | `O(log n)` | Avg `O(1)` |
| Iteration order | Insertion order (as stored) | Sorted | Unspecified |

---

## 3) `vector` Essentials

## 3.1 Declaration and Initialization
```cpp
vector<int> a;                    // empty
vector<int> b(5);                 // size 5, all 0
vector<int> c(5, 10);             // size 5, all 10
vector<int> d = {4, 1, 7, 2};
```

## 3.2 Common Operations
```cpp
a.push_back(5);
a.pop_back();
int x = a[0];
int y = a.at(0);                  // bounds-checked
int n = (int)a.size();
bool e = a.empty();
a.clear();
```

## 3.3 Iteration
```cpp
for (int i = 0; i < (int)a.size(); i++) cout << a[i] << " ";
for (int x : a) cout << x << " ";
for (auto it = a.begin(); it != a.end(); ++it) cout << *it << " ";
```

## 3.4 Useful Algorithms with `vector`
```cpp
sort(a.begin(), a.end());
sort(a.rbegin(), a.rend());
reverse(a.begin(), a.end());

int mn = *min_element(a.begin(), a.end());
int mx = *max_element(a.begin(), a.end());
long long sum = accumulate(a.begin(), a.end(), 0LL);
```

## 3.5 Remove Duplicates from Sorted Vector
```cpp
sort(a.begin(), a.end());
a.erase(unique(a.begin(), a.end()), a.end());
```

## 3.6 Custom Sort (Very Common)
```cpp
vector<pair<int,string>> v = {{90, "A"}, {85, "C"}, {90, "B"}};

sort(v.begin(), v.end(), [](const auto &p1, const auto &p2) {
    if (p1.first != p2.first) return p1.first > p2.first; // marks desc
    return p1.second < p2.second;                         // name asc
});
```

---

## 4) `set`, `multiset`, `unordered_set`

## 4.1 `set` (Unique + Sorted)
```cpp
set<int> s;
s.insert(10);
s.insert(5);
s.insert(10); // ignored

if (s.find(5) != s.end()) cout << "found\n";
s.erase(5);

for (int x : s) cout << x << " "; // sorted order
```

## 4.2 `multiset` (Duplicates + Sorted)
```cpp
multiset<int> ms;
ms.insert(5);
ms.insert(5);
ms.insert(2);

cout << ms.count(5) << "\n"; // 2
ms.erase(ms.find(5));          // erase one occurrence
```

## 4.3 `unordered_set` (Unique + Fast Avg O(1))
```cpp
unordered_set<int> us;
us.insert(100);
us.insert(40);

if (us.count(40)) cout << "yes\n";
us.erase(40);
```

When to prefer:
- `set`: need sorted output or lower/upper_bound.
- `unordered_set`: only membership checks and speed.

---

## 5) `map`, `multimap`, `unordered_map`

## 5.1 `map` (Sorted Key-Value)
```cpp
map<string, int> mp;
mp["apple"] = 2;
mp["banana"]++;
mp["banana"]++;

cout << mp["banana"] << "\n"; // 2

if (mp.find("apple") != mp.end()) cout << "found\n";

for (auto &p : mp) {
    cout << p.first << " " << p.second << "\n"; // key sorted
}
```

## 5.2 `unordered_map` (Fast Avg O(1))
```cpp
unordered_map<int, int> freq;
for (int x : vector<int>{1,2,2,3,3,3}) freq[x]++;

cout << freq[3] << "\n"; // 3
```

## 5.3 `multimap` (Duplicate Keys)
```cpp
multimap<int, string> mm;
mm.insert({1, "A"});
mm.insert({1, "B"});
```

---

## 6) Most Important TCS NQT Patterns

## Pattern A: Frequency Count
```cpp
unordered_map<int, int> freq;
for (int x : a) freq[x]++;
```

## Pattern B: Element with Maximum Frequency
```cpp
int bestVal = -1, bestCnt = -1;
for (auto &p : freq) {
    if (p.second > bestCnt) {
        bestCnt = p.second;
        bestVal = p.first;
    }
}
```

## Pattern C: First Non-Repeating Element in Array
```cpp
unordered_map<int,int> cnt;
for (int x : a) cnt[x]++;

int ans = -1;
for (int x : a) {
    if (cnt[x] == 1) { ans = x; break; }
}
cout << ans << "\n";
```

## Pattern D: Distinct Count
```cpp
unordered_set<int> st(a.begin(), a.end());
cout << st.size() << "\n";
```

## Pattern E: Remove Duplicates Preserve First Occurrence
```cpp
unordered_set<int> seen;
vector<int> out;
for (int x : a) {
    if (!seen.count(x)) {
        seen.insert(x);
        out.push_back(x);
    }
}
```

## Pattern F: Pair Sum (Two Sum)
```cpp
unordered_map<int,int> pos;
for (int i = 0; i < (int)a.size(); i++) {
    int need = target - a[i];
    if (pos.count(need)) {
        cout << pos[need] << " " << i << "\n";
        break;
    }
    pos[a[i]] = i;
}
```

## Pattern G: Top K Frequent (Map + Heap)
```cpp
unordered_map<int,int> freq;
for (int x : a) freq[x]++;

priority_queue<pair<int,int>, vector<pair<int,int>>, greater<pair<int,int>>> pq;
for (auto &p : freq) {
    pq.push({p.second, p.first});
    if ((int)pq.size() > k) pq.pop();
}
```

## Pattern H: Group Strings by Signature (Anagram Grouping)
```cpp
unordered_map<string, vector<string>> groups;
for (string s : arr) {
    string t = s;
    sort(t.begin(), t.end());
    groups[t].push_back(s);
}
```

---

## 7) Full Mini Programs (Exam-Oriented)

---

## Q1. Frequency of Each Element using `unordered_map`
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    unordered_map<int,int> freq;
    for (int x : a) freq[x]++;

    for (auto &p : freq) cout << p.first << " " << p.second << "\n";
    return 0;
}
```

## Q2. Print Unique Sorted Values using `set`
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    set<int> s;
    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        s.insert(x);
    }

    for (int x : s) cout << x << " ";
    cout << "\n";
    return 0;
}
```

## Q3. Topper List using `vector<pair<int,string>>` + sort
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    vector<pair<int,string>> v;
    for (int i = 0; i < n; i++) {
        string name;
        int marks;
        cin >> name >> marks;
        v.push_back({marks, name});
    }

    sort(v.begin(), v.end(), [](auto &a, auto &b) {
        if (a.first != b.first) return a.first > b.first;
        return a.second < b.second;
    });

    for (int i = 0; i < min(k, (int)v.size()); i++) {
        cout << v[i].second << " " << v[i].first << "\n";
    }
    return 0;
}
```

## Q4. First Non-Repeating Character in String using `map`
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin >> s;

    unordered_map<char,int> cnt;
    for (char c : s) cnt[c]++;

    char ans = '#';
    for (char c : s) {
        if (cnt[c] == 1) {
            ans = c;
            break;
        }
    }

    if (ans == '#') cout << -1 << "\n";
    else cout << ans << "\n";
    return 0;
}
```

---

## 8) STL Input Templates for Common TCS Formats

## Space-Separated Integers in One Line
```cpp
string line;
getline(cin, line);
stringstream ss(line);
vector<int> a;
int x;
while (ss >> x) a.push_back(x);
```

## Comma-Separated Integers (`1,2,3,4`)
```cpp
string line;
getline(cin, line);
for (char &c : line) if (c == ',') c = ' ';
stringstream ss(line);
vector<int> a;
int x;
while (ss >> x) a.push_back(x);
```

## Bracket Format (`[1,2,3]`)
```cpp
string line;
getline(cin, line);
for (char &c : line) {
    if (c == '[' || c == ']' || c == ',') c = ' ';
}
stringstream ss(line);
vector<int> a;
int x;
while (ss >> x) a.push_back(x);
```

---

## 9) Common Mistakes (Very Important)

1. Using `map` when order is not needed and TLE risk is high. Prefer `unordered_map`.
2. Accessing `v[i]` without checking size.
3. Forgetting that `set` removes duplicates automatically.
4. Assuming order in `unordered_map` or `unordered_set`.
5. Erasing from container while iterating incorrectly.
6. Using `mp[key]` only to check existence (it inserts key). Use `find` or `count`.
7. Not using `long long` for sums/frequencies when constraints are large.

---

## 10) High-Value STL One-Liners

```cpp
// Sort descending
sort(a.begin(), a.end(), greater<int>());

// Binary search in sorted vector
bool ok = binary_search(a.begin(), a.end(), x);

// lower_bound index
int idx = lower_bound(a.begin(), a.end(), x) - a.begin();

// Erase all occurrences of val from vector
v.erase(remove(v.begin(), v.end(), val), v.end());

// Convert vector to set for unique
set<int> s(v.begin(), v.end());

// Count frequency quickly
unordered_map<int,int> f;
for (int x : v) f[x]++;
```

---

## 11) What to Practice Daily (STL Drill)

1. Read input in 3 formats into `vector`.
2. Frequency map + max frequency extraction.
3. Distinct count + duplicate removal.
4. Sorting `vector<pair<>>` with custom comparator.
5. At least one `set`-based and one `unordered_map`-based problem.

If you become fast with these STL patterns, TCS NQT coding implementation speed improves significantly.
