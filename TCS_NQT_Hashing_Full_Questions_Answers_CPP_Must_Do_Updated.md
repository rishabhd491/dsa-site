# TCS NQT Hashing: Detailed Topics, Full Questions, and C++ Codes (Must-Do Updated)

Source: `/Users/rishabhdubey/Documents/prep for tcsnqt/TCS_NQT_Hashing_Full_Questions_Answers_CPP.md`

This version includes only high-priority questions for 15-day TCS NQT prep.

## Included Questions

Q1, Q2, Q3, Q6, Q7, Q8, Q9, Q10, Q13, Q14, Q15, Q16, Q17, Q18, Q19, Q20, Q21, Q22, Q26, Q27, Q28, Q29, Q30, Q31, Q32, Q33, Q34, Q35, Q37, Q38, Q39, Q40, Q41

---

This is a complete Hashing-focused preparation document for TCS NQT coding rounds.
It covers foundational to advanced patterns, including array + string + subarray + story-based hashing problems.

## 1) Hashing Topic Checklist (Do not skip)

1. Frequency map basics (`unordered_map`, `map`)
2. Membership checks (`unordered_set`)
3. Pair/triplet lookup problems (sum/difference)
4. Prefix-sum + hashmap patterns (subarray counting/length)
5. Prefix XOR + hashmap patterns
6. Remainder hashing (`sum % k`) patterns
7. Sliding window + hash counts
8. String mapping problems (anagram, isomorphic, word pattern)
9. Top-K frequency style patterns
10. Design-oriented use of hash (`LRU`, set operations)

## 2) Hashing Quick Notes (Important)

- `unordered_map` / `unordered_set`:
  - Average: `O(1)` insert/find/erase
  - Worst-case: `O(n)` (rare but possible due to collisions)
- `map`:
  - Always `O(log n)` and sorted output
- If you need sorted keys in output, prefer `map`.
- For speed on large input, reserve buckets:
  - `mp.reserve(2 * n);`
  - `mp.max_load_factor(0.7);`
- Prefix-sum hash trick:
  - If `prefix[j] - prefix[i-1] = k`, then `prefix[i-1] = prefix[j] - k`.

## 3) Reusable C++ Template for Hashing Problems

```cpp
#include <bits/stdc++.h>
using namespace std;

using ll = long long;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    return 0;
}
```

---

---

## Q1. Count Frequency of Each Element

### Problem Statement
Given an array of `N` integers, print frequency of each distinct element in ascending order of value.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
Each line: `value frequency`

### Constraints
- `1 <= N <= 2 * 10^5`

### Example
Input:
```text
6
1 2 2 3 3 3
```
Output:
```text
1 1
2 2
3 3
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    map<long long, int> freq;
    for (int i = 0; i < n; i++) {
        long long x;
        cin >> x;
        freq[x]++;
    }

    for (auto &p : freq) {
        cout << p.first << " " << p.second << "\n";
    }

    return 0;
}
```

### Complexity
- Time: `O(n log u)`
- Space: `O(u)`

---

## Q2. Element with Maximum Frequency

### Problem Statement
Find the element with maximum frequency. If tie, print smallest element.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
One integer

### Example
Input:
```text
8
4 1 2 2 3 3 3 1
```
Output:
```text
3
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    unordered_map<long long, int> freq;
    freq.reserve(2 * n + 1);

    for (int i = 0; i < n; i++) {
        long long x;
        cin >> x;
        freq[x]++;
    }

    long long bestVal = 0;
    int bestFreq = -1;

    for (auto &p : freq) {
        if (p.second > bestFreq || (p.second == bestFreq && p.first < bestVal)) {
            bestFreq = p.second;
            bestVal = p.first;
        }
    }

    cout << bestVal << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)` average
- Space: `O(u)`

---

## Q3. First Non-Repeating Element in Array

### Problem Statement
Given an array, find first element that appears exactly once. If none, print `-1`.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
One integer

### Example
Input:
```text
7
4 5 1 2 1 4 5
```
Output:
```text
2
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;
    vector<long long> a(n);

    unordered_map<long long, int> freq;
    freq.reserve(2 * n + 1);

    for (int i = 0; i < n; i++) {
        cin >> a[i];
        freq[a[i]]++;
    }

    for (long long x : a) {
        if (freq[x] == 1) {
            cout << x << "\n";
            return 0;
        }
    }

    cout << -1 << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)` average
- Space: `O(u)`

---

## Q6. Contains Duplicate

### Problem Statement
Given array, check if any value appears at least twice.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
`Yes` or `No`

### Example
Input:
```text
5
1 2 3 4 1
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
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    unordered_set<long long> st;
    st.reserve(2 * n + 1);

    for (int i = 0; i < n; i++) {
        long long x;
        cin >> x;
        if (st.count(x)) {
            cout << "Yes\n";
            return 0;
        }
        st.insert(x);
    }

    cout << "No\n";
    return 0;
}
```

### Complexity
- Time: `O(n)` average
- Space: `O(u)`

---

## Q7. Count Distinct Elements

### Problem Statement
Given an array, count number of unique elements.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
One integer

### Example
Input:
```text
7
1 2 2 3 3 3 4
```
Output:
```text
4
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    unordered_set<long long> st;
    st.reserve(2 * n + 1);

    for (int i = 0; i < n; i++) {
        long long x;
        cin >> x;
        st.insert(x);
    }

    cout << st.size() << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)` average
- Space: `O(u)`

---

## Q8. Two Sum (Return 0-based Indices)

### Problem Statement
Given array and target `T`, find two indices `i, j` such that `A[i] + A[j] = T`.
If none, print `-1`.

### Input Format
- First line: `N T`
- Second line: `N` integers

### Output Format
`i j` or `-1`

### Example
Input:
```text
5 9
2 7 11 15 1
```
Output:
```text
0 1
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    long long target;
    cin >> n >> target;

    vector<long long> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    unordered_map<long long, int> pos;
    pos.reserve(2 * n + 1);

    for (int i = 0; i < n; i++) {
        long long need = target - a[i];
        if (pos.count(need)) {
            cout << pos[need] << " " << i << "\n";
            return 0;
        }
        if (!pos.count(a[i])) pos[a[i]] = i;
    }

    cout << -1 << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)` average
- Space: `O(n)`

---

## Q9. Count Pairs with Given Sum

### Problem Statement
Count number of unordered index pairs `(i, j)` with `i < j` and `A[i] + A[j] = K`.

### Input Format
- First line: `N K`
- Second line: `N` integers

### Output Format
One integer

### Example
Input:
```text
6 6
1 5 7 -1 5 1
```
Output:
```text
3
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    long long k;
    cin >> n >> k;

    vector<long long> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    unordered_map<long long, long long> freq;
    freq.reserve(2 * n + 1);

    long long ans = 0;
    for (long long x : a) {
        long long need = k - x;
        if (freq.count(need)) ans += freq[need];
        freq[x]++;
    }

    cout << ans << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)` average
- Space: `O(n)`

---

## Q10. Count Pairs with Absolute Difference K

### Problem Statement
Count number of unordered index pairs `(i, j)` with `i < j` and `|A[i] - A[j]| = K`.

### Input Format
- First line: `N K`
- Second line: `N` integers

### Output Format
One integer

### Example
Input:
```text
6 2
1 5 3 4 2 3
```
Output:
```text
4
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    long long k;
    cin >> n >> k;

    unordered_map<long long, long long> freq;
    freq.reserve(2 * n + 1);

    for (int i = 0; i < n; i++) {
        long long x;
        cin >> x;
        freq[x]++;
    }

    long long ans = 0;

    if (k == 0) {
        for (auto &p : freq) {
            long long f = p.second;
            ans += f * (f - 1) / 2;
        }
    } else if (k > 0) {
        for (auto &p : freq) {
            long long x = p.first;
            if (freq.count(x + k)) ans += p.second * freq[x + k];
        }
    }

    cout << ans << "\n";
    return 0;
}
```

### Complexity
- Time: `O(u)` average after build
- Space: `O(u)`

---

## Q13. Count Subarrays with Sum K

### Problem Statement
Given array (can contain negative values), count subarrays with sum exactly `K`.

### Input Format
- First line: `N K`
- Second line: `N` integers

### Output Format
One integer

### Example
Input:
```text
8 0
3 4 -7 1 3 3 1 -4
```
Output:
```text
4
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    long long k;
    cin >> n >> k;

    vector<long long> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    unordered_map<long long, long long> freq;
    freq.reserve(2 * n + 1);
    freq[0] = 1;

    long long pref = 0, ans = 0;
    for (long long x : a) {
        pref += x;
        if (freq.count(pref - k)) ans += freq[pref - k];
        freq[pref]++;
    }

    cout << ans << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)` average
- Space: `O(n)`

---

## Q14. Longest Subarray with Sum K

### Problem Statement
Given array (with negatives), find longest subarray length with sum `K`.

### Input Format
- First line: `N K`
- Second line: `N` integers

### Output Format
One integer

### Example
Input:
```text
7 5
1 -1 5 -2 3 2 -2
```
Output:
```text
4
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    long long k;
    cin >> n >> k;

    vector<long long> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    unordered_map<long long, int> first;
    first.reserve(2 * n + 1);
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

### Complexity
- Time: `O(n)` average
- Space: `O(n)`

---

## Q15. Zero-Sum Subarray Exists?

### Problem Statement
Check if any non-empty subarray has sum `0`.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
`Yes` / `No`

### Example
Input:
```text
5
4 2 -3 1 6
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
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    vector<long long> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    unordered_set<long long> seen;
    seen.reserve(2 * n + 1);

    long long pref = 0;
    seen.insert(0);

    for (long long x : a) {
        pref += x;
        if (seen.count(pref)) {
            cout << "Yes\n";
            return 0;
        }
        seen.insert(pref);
    }

    cout << "No\n";
    return 0;
}
```

### Complexity
- Time: `O(n)` average
- Space: `O(n)`

---

## Q16. Count Zero-Sum Subarrays

### Problem Statement
Count total number of subarrays having sum `0`.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
One integer

### Example
Input:
```text
5
1 -1 0 2 -2
```
Output:
```text
6
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    vector<long long> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    unordered_map<long long, long long> freq;
    freq.reserve(2 * n + 1);

    long long pref = 0, ans = 0;
    freq[0] = 1;

    for (long long x : a) {
        pref += x;
        ans += freq[pref];
        freq[pref]++;
    }

    cout << ans << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)` average
- Space: `O(n)`

---

## Q17. Longest Zero-Sum Subarray

### Problem Statement
Find length of longest subarray with sum `0`.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
One integer

### Example
Input:
```text
8
15 -2 2 -8 1 7 10 23
```
Output:
```text
5
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    vector<long long> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    unordered_map<long long, int> first;
    first.reserve(2 * n + 1);
    first[0] = -1;

    long long pref = 0;
    int best = 0;

    for (int i = 0; i < n; i++) {
        pref += a[i];
        if (first.count(pref)) best = max(best, i - first[pref]);
        else first[pref] = i;
    }

    cout << best << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)` average
- Space: `O(n)`

---

## Q18. Longest Subarray with Equal 0 and 1

### Problem Statement
Given binary array, find longest subarray containing equal numbers of `0` and `1`.

### Input Format
- First line: `N`
- Second line: `N` values (0/1)

### Output Format
One integer

### Example
Input:
```text
8
0 0 1 0 1 1 0 1
```
Output:
```text
8
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    unordered_map<int, int> first;
    first.reserve(2 * n + 1);
    first[0] = -1;

    int pref = 0, best = 0;
    for (int i = 0; i < n; i++) {
        pref += (a[i] == 0 ? -1 : 1);
        if (first.count(pref)) best = max(best, i - first[pref]);
        else first[pref] = i;
    }

    cout << best << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)` average
- Space: `O(n)`

---

## Q19. Count Subarrays with Equal 0 and 1

### Problem Statement
Given binary array, count number of subarrays having equal `0` and `1`.

### Input Format
- First line: `N`
- Second line: `N` values (0/1)

### Output Format
One integer

### Example
Input:
```text
4
0 1 0 1
```
Output:
```text
4
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    unordered_map<int, long long> freq;
    freq.reserve(2 * n + 1);
    freq[0] = 1;

    int pref = 0;
    long long ans = 0;

    for (int x : a) {
        pref += (x == 0 ? -1 : 1);
        ans += freq[pref];
        freq[pref]++;
    }

    cout << ans << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)` average
- Space: `O(n)`

---

## Q20. Count Subarrays with Sum Divisible by K

### Problem Statement
Given array and integer `K`, count subarrays with sum divisible by `K`.

### Input Format
- First line: `N K`
- Second line: `N` integers

### Output Format
One integer

### Example
Input:
```text
6 5
4 5 0 -2 -3 1
```
Output:
```text
7
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, k;
    cin >> n >> k;

    vector<long long> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    unordered_map<int, long long> freq;
    freq.reserve(2 * k + 1);
    freq[0] = 1;

    long long pref = 0, ans = 0;

    for (long long x : a) {
        pref += x;
        int rem = (int)((pref % k + k) % k);
        ans += freq[rem];
        freq[rem]++;
    }

    cout << ans << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)` average
- Space: `O(k)` to `O(n)` depending on remainders

---

## Q21. Longest Subarray with Sum Divisible by K

### Problem Statement
Find longest subarray length where sum is divisible by `K`.

### Input Format
- First line: `N K`
- Second line: `N` integers

### Output Format
One integer

### Example
Input:
```text
6 3
2 7 6 1 4 5
```
Output:
```text
4
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, k;
    cin >> n >> k;

    vector<long long> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    unordered_map<int, int> first;
    first.reserve(2 * k + 1);
    first[0] = -1;

    long long pref = 0;
    int best = 0;

    for (int i = 0; i < n; i++) {
        pref += a[i];
        int rem = (int)((pref % k + k) % k);

        if (first.count(rem)) best = max(best, i - first[rem]);
        else first[rem] = i;
    }

    cout << best << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)` average
- Space: `O(k)` / `O(n)`

---

## Q22. Longest Consecutive Sequence

### Problem Statement
Given unsorted array, return length of longest consecutive element sequence.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
One integer

### Example
Input:
```text
6
100 4 200 1 3 2
```
Output:
```text
4
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    vector<long long> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    unordered_set<long long> st(a.begin(), a.end());
    st.reserve(2 * n + 1);

    int best = 0;

    for (long long x : st) {
        if (!st.count(x - 1)) {
            int len = 1;
            long long cur = x;
            while (st.count(cur + 1)) {
                cur++;
                len++;
            }
            best = max(best, len);
        }
    }

    cout << best << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)` average
- Space: `O(n)`

---

## Q26. Valid Anagram

### Problem Statement
Given two strings `S` and `T`, check if `T` is an anagram of `S`.

### Input Format
- Line 1: `S`
- Line 2: `T`

### Output Format
`Yes` or `No`

### Example
Input:
```text
anagram
nagaram
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
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    string s, t;
    getline(cin, s);
    getline(cin, t);

    if (s.size() != t.size()) {
        cout << "No\n";
        return 0;
    }

    vector<int> f(256, 0);
    for (char c : s) f[(unsigned char)c]++;
    for (char c : t) f[(unsigned char)c]--;

    for (int x : f) {
        if (x != 0) {
            cout << "No\n";
            return 0;
        }
    }

    cout << "Yes\n";
    return 0;
}
```

### Complexity
- Time: `O(n)`
- Space: `O(1)`

---

## Q27. Group Anagrams

### Problem Statement
Group anagrams together and print each group in a new line.

### Input Format
- First line: `N`
- Next `N` lines: strings

### Output Format
Each line a group

### Example
Input:
```text
6
eat
tea
tan
ate
nat
bat
```
Output (one valid):
```text
eat tea ate
tan nat
bat
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    vector<string> arr(n);
    for (int i = 0; i < n; i++) cin >> arr[i];

    unordered_map<string, vector<string>> mp;
    vector<string> order;
    mp.reserve(2 * n + 1);

    for (string s : arr) {
        string key = s;
        sort(key.begin(), key.end());
        if (!mp.count(key)) order.push_back(key);
        mp[key].push_back(s);
    }

    for (const string &k : order) {
        for (int i = 0; i < (int)mp[k].size(); i++) {
            if (i) cout << ' ';
            cout << mp[k][i];
        }
        cout << "\n";
    }

    return 0;
}
```

### Complexity
- Time: `O(n * L log L)`
- Space: `O(n * L)`

---

## Q28. Isomorphic Strings

### Problem Statement
Two strings are isomorphic if characters in `S` can be replaced to get `T` with one-to-one mapping.

### Input Format
- Line 1: `S`
- Line 2: `T`

### Output Format
`Yes` / `No`

### Example
Input:
```text
egg
add
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
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    string s, t;
    getline(cin, s);
    getline(cin, t);

    if (s.size() != t.size()) {
        cout << "No\n";
        return 0;
    }

    vector<int> m1(256, -1), m2(256, -1);

    for (int i = 0; i < (int)s.size(); i++) {
        unsigned char a = (unsigned char)s[i];
        unsigned char b = (unsigned char)t[i];

        if (m1[a] == -1 && m2[b] == -1) {
            m1[a] = b;
            m2[b] = a;
        } else if (m1[a] != b || m2[b] != a) {
            cout << "No\n";
            return 0;
        }
    }

    cout << "Yes\n";
    return 0;
}
```

### Complexity
- Time: `O(n)`
- Space: `O(1)`

---

## Q29. Word Pattern Matching

### Problem Statement
Given a pattern string and a sentence, check if sentence words follow the same one-to-one mapping pattern.

### Input Format
- Line 1: pattern (e.g., `abba`)
- Line 2: sentence (space-separated words)

### Output Format
`Yes` / `No`

### Example
Input:
```text
abba
dog cat cat dog
```
Output:
```text
Yes
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

vector<string> splitWords(const string& s) {
    vector<string> out;
    string cur;
    for (char c : s) {
        if (c == ' ') {
            if (!cur.empty()) {
                out.push_back(cur);
                cur.clear();
            }
        } else cur.push_back(c);
    }
    if (!cur.empty()) out.push_back(cur);
    return out;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    string pattern, line;
    getline(cin, pattern);
    getline(cin, line);

    vector<string> words = splitWords(line);
    if ((int)pattern.size() != (int)words.size()) {
        cout << "No\n";
        return 0;
    }

    unordered_map<char, string> c2w;
    unordered_map<string, char> w2c;

    for (int i = 0; i < (int)pattern.size(); i++) {
        char c = pattern[i];
        string w = words[i];

        if (c2w.count(c) && c2w[c] != w) {
            cout << "No\n";
            return 0;
        }
        if (w2c.count(w) && w2c[w] != c) {
            cout << "No\n";
            return 0;
        }

        c2w[c] = w;
        w2c[w] = c;
    }

    cout << "Yes\n";
    return 0;
}
```

### Complexity
- Time: `O(total characters)`
- Space: `O(number of unique words + pattern chars)`

---

## Q30. Top K Frequent Elements

### Problem Statement
Given array and integer `K`, print `K` most frequent elements.
Tie-break: smaller value first.

### Input Format
- First line: `N K`
- Second line: `N` integers

### Output Format
`K` elements in required order

### Example
Input:
```text
8 2
1 1 1 2 2 3 3 3
```
Output:
```text
1 3
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, k;
    cin >> n >> k;

    unordered_map<long long, int> freq;
    freq.reserve(2 * n + 1);

    for (int i = 0; i < n; i++) {
        long long x;
        cin >> x;
        freq[x]++;
    }

    vector<pair<long long, int>> v(freq.begin(), freq.end());
    sort(v.begin(), v.end(), [](auto &a, auto &b) {
        if (a.second != b.second) return a.second > b.second;
        return a.first < b.first;
    });

    k = min(k, (int)v.size());
    for (int i = 0; i < k; i++) cout << v[i].first << " ";
    cout << "\n";

    return 0;
}
```

### Complexity
- Time: `O(n + u log u)`
- Space: `O(u)`

---

## Q31. Minimum Window Substring

### Problem Statement
Given strings `S` and `T`, find minimum substring of `S` containing all characters of `T`.
If impossible, print `-1`.

### Input Format
- Line 1: `S`
- Line 2: `T`

### Output Format
Minimum window or `-1`

### Example
Input:
```text
ADOBECODEBANC
ABC
```
Output:
```text
BANC
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    string s, t;
    getline(cin, s);
    getline(cin, t);

    if (t.empty() || s.size() < t.size()) {
        cout << -1 << "\n";
        return 0;
    }

    vector<int> need(256, 0), have(256, 0);
    int requiredKinds = 0;

    for (char c : t) {
        if (need[(unsigned char)c] == 0) requiredKinds++;
        need[(unsigned char)c]++;
    }

    int formed = 0;
    int left = 0;
    int bestLen = INT_MAX, bestL = -1;

    for (int right = 0; right < (int)s.size(); right++) {
        unsigned char rc = (unsigned char)s[right];
        have[rc]++;

        if (need[rc] > 0 && have[rc] == need[rc]) formed++;

        while (left <= right && formed == requiredKinds) {
            if (right - left + 1 < bestLen) {
                bestLen = right - left + 1;
                bestL = left;
            }

            unsigned char lc = (unsigned char)s[left];
            have[lc]--;
            if (need[lc] > 0 && have[lc] < need[lc]) formed--;
            left++;
        }
    }

    if (bestL == -1) cout << -1 << "\n";
    else cout << s.substr(bestL, bestLen) << "\n";

    return 0;
}
```

### Complexity
- Time: `O(n + m)`
- Space: `O(1)` fixed alphabet

---

## Q32. Find All Anagram Start Indices

### Problem Statement
Given text `S` and pattern `P`, find all start indices where an anagram of `P` appears.
If none, print `-1`.

### Input Format
- Line 1: `S`
- Line 2: `P`

### Output Format
Indices space-separated or `-1`

### Example
Input:
```text
cbaebabacd
abc
```
Output:
```text
0 6
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    string s, p;
    getline(cin, s);
    getline(cin, p);

    int n = (int)s.size(), m = (int)p.size();
    if (m == 0 || m > n) {
        cout << -1 << "\n";
        return 0;
    }

    vector<int> need(256, 0), have(256, 0);
    for (char c : p) need[(unsigned char)c]++;

    for (int i = 0; i < m; i++) have[(unsigned char)s[i]]++;

    vector<int> ans;
    if (have == need) ans.push_back(0);

    for (int r = m; r < n; r++) {
        have[(unsigned char)s[r]]++;
        have[(unsigned char)s[r - m]]--;
        if (have == need) ans.push_back(r - m + 1);
    }

    if (ans.empty()) cout << -1;
    else {
        for (int x : ans) cout << x << " ";
    }
    cout << "\n";

    return 0;
}
```

### Complexity
- Time: `O(256 * n)`
- Space: `O(1)`

---

## Q33. Distinct Elements in Every Window of Size K

### Problem Statement
Given array and window size `K`, print number of distinct elements in each window.

### Input Format
- First line: `N K`
- Second line: `N` integers

### Output Format
Counts for each window

### Example
Input:
```text
7 4
1 2 1 3 4 2 3
```
Output:
```text
3 4 4 3
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, k;
    cin >> n >> k;

    vector<long long> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    if (k <= 0 || k > n) {
        cout << -1 << "\n";
        return 0;
    }

    unordered_map<long long, int> freq;
    freq.reserve(2 * k + 1);

    for (int i = 0; i < k; i++) freq[a[i]]++;
    cout << freq.size();

    for (int i = k; i < n; i++) {
        long long out = a[i - k];
        freq[out]--;
        if (freq[out] == 0) freq.erase(out);

        freq[a[i]]++;
        cout << " " << freq.size();
    }
    cout << "\n";

    return 0;
}
```

### Complexity
- Time: `O(n)` average
- Space: `O(k)`

---

## Q34. Longest Substring Without Repeating Characters

### Problem Statement
Given string, find length of longest substring with all distinct characters.

### Input Format
- One line string

### Output Format
One integer

### Example
Input:
```text
abcabcbb
```
Output:
```text
3
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    string s;
    getline(cin, s);

    vector<int> last(256, -1);
    int left = 0, best = 0;

    for (int right = 0; right < (int)s.size(); right++) {
        unsigned char c = (unsigned char)s[right];
        left = max(left, last[c] + 1);
        last[c] = right;
        best = max(best, right - left + 1);
    }

    cout << best << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)`
- Space: `O(1)`

---

## Q35. Smallest Subarray Containing All Distinct Elements of Array

### Problem Statement
Given array, find length of smallest subarray that contains every distinct element present in the full array.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
One integer

### Example
Input:
```text
8
7 3 7 3 1 3 4 1
```
Output:
```text
5
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    vector<long long> a(n);
    unordered_set<long long> all;
    all.reserve(2 * n + 1);

    for (int i = 0; i < n; i++) {
        cin >> a[i];
        all.insert(a[i]);
    }

    int need = (int)all.size();

    unordered_map<long long, int> freq;
    freq.reserve(2 * need + 1);

    int left = 0, formed = 0;
    int best = n;

    for (int right = 0; right < n; right++) {
        if (++freq[a[right]] == 1) formed++;

        while (formed == need) {
            best = min(best, right - left + 1);
            if (--freq[a[left]] == 0) formed--;
            left++;
        }
    }

    cout << best << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)` average
- Space: `O(u)`

---

## Q37. Majority Elements More Than n/3 (Hashing Approach)

### Problem Statement
Given array, print all elements appearing more than `n/3` times in ascending order.
If none, print `-1`.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
Elements or `-1`

### Example
Input:
```text
7
1 2 3 1 1 2 1
```
Output:
```text
1
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    unordered_map<long long, int> freq;
    freq.reserve(2 * n + 1);

    for (int i = 0; i < n; i++) {
        long long x;
        cin >> x;
        freq[x]++;
    }

    vector<long long> out;
    for (auto &p : freq) {
        if (p.second > n / 3) out.push_back(p.first);
    }

    if (out.empty()) cout << -1 << "\n";
    else {
        sort(out.begin(), out.end());
        for (long long x : out) cout << x << " ";
        cout << "\n";
    }

    return 0;
}
```

### Complexity
- Time: `O(n)` average + sort answer
- Space: `O(u)`

---

## Q38. Count Subarrays with XOR = K

### Problem Statement
Given array and integer `K`, count number of subarrays with XOR equal to `K`.

### Input Format
- First line: `N K`
- Second line: `N` integers

### Output Format
One integer

### Example
Input:
```text
5 6
4 2 2 6 4
```
Output:
```text
4
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    int k;
    cin >> n >> k;

    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    unordered_map<int, long long> freq;
    freq.reserve(2 * n + 1);
    freq[0] = 1;

    int px = 0;
    long long ans = 0;

    for (int x : a) {
        px ^= x;
        int need = px ^ k;
        if (freq.count(need)) ans += freq[need];
        freq[px]++;
    }

    cout << ans << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)` average
- Space: `O(n)`

---

## Q39. Longest Subarray with XOR = K

### Problem Statement
Given array and integer `K`, find length of longest subarray with XOR equal to `K`.

### Input Format
- First line: `N K`
- Second line: `N` integers

### Output Format
One integer

### Example
Input:
```text
6 5
5 6 7 8 9 10
```
Output:
```text
2
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, k;
    cin >> n >> k;

    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    unordered_map<int, int> first;
    first.reserve(2 * n + 1);
    first[0] = -1;

    int px = 0;
    int best = 0;

    for (int i = 0; i < n; i++) {
        px ^= a[i];

        if (!first.count(px)) first[px] = i;

        int need = px ^ k;
        if (first.count(need)) best = max(best, i - first[need]);
    }

    cout << best << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)` average
- Space: `O(n)`

---

## Q40. Story-Based: Daily Transaction Anomaly (Pair Sum Alert)

### Problem Statement
A fraud system flags a day if two transactions sum to suspicious amount `S`.
Given `N` transaction values and `S`, print `ALERT` if any pair exists, else `SAFE`.

### Input Format
- First line: `N S`
- Second line: `N` integers

### Output Format
`ALERT` / `SAFE`

### Example
Input:
```text
6 100
20 30 70 15 85 40
```
Output:
```text
ALERT
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    long long s;
    cin >> n >> s;

    unordered_set<long long> seen;
    seen.reserve(2 * n + 1);

    for (int i = 0; i < n; i++) {
        long long x;
        cin >> x;
        if (seen.count(s - x)) {
            cout << "ALERT\n";
            return 0;
        }
        seen.insert(x);
    }

    cout << "SAFE\n";
    return 0;
}
```

### Complexity
- Time: `O(n)` average
- Space: `O(n)`

---

## Q41. Story-Based: Find Duplicate Employee ID in Log Stream

### Problem Statement
A log stream contains employee IDs; exactly one ID appears twice and others once.
Find the duplicate ID in one pass using hashing.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
Duplicate ID or `-1`

### Example
Input:
```text
7
101 204 330 101 405 506 607
```
Output:
```text
101
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    unordered_set<long long> seen;
    seen.reserve(2 * n + 1);

    for (int i = 0; i < n; i++) {
        long long x;
        cin >> x;
        if (seen.count(x)) {
            cout << x << "\n";
            return 0;
        }
        seen.insert(x);
    }

    cout << -1 << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)` average
- Space: `O(n)`

---
