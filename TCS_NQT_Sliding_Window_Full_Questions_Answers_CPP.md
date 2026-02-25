# TCS NQT Sliding Window: Full Questions and C++ Solutions

This document is a complete sliding-window preparation pack for TCS NQT coding rounds.
It covers fixed-size windows, variable-size windows, deque-based windows, counting windows, and story-based variants.

## 1) Sliding Window Checklist (Complete)

1. Fixed window sum/count/min/max
2. Frequency-based fixed windows
3. Two-pointer variable windows for positive arrays
4. String windows (unique/distinct/frequency constraints)
5. `atMost(K)` to solve `exactly(K)` counting
6. Deque-based max/min window problems
7. Hybrid prefix + deque problems
8. Story-based transformation of standard patterns

## 2) Key Templates

### Fixed-size Window
```cpp
window += a[r];
if (r - l + 1 == k) {
    // process window
    window -= a[l++];
}
```

### Variable-size Window (shrink while invalid)
```cpp
for (int r = 0; r < n; r++) {
    // add a[r]
    while (invalid) {
        // remove a[l]
        l++;
    }
    // process valid window [l..r]
}
```

### Exactly K via AtMost
```cpp
exactlyK = atMostK(k) - atMostK(k - 1);
```

---

## Q1. Maximum Sum Subarray of Size K

### Problem Statement
Given array `A` of size `N` and integer `K`, find maximum sum among all subarrays of size exactly `K`.

### Input Format
- `N K`
- `N` integers

### Output Format
- Maximum sum

### Example
Input:
```text
7 3
2 1 5 1 3 2 4
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
    int n, k;
    cin >> n >> k;
    vector<long long> a(n);
    for (auto &x : a) cin >> x;

    if (k <= 0 || k > n) {
        cout << 0 << "\n";
        return 0;
    }

    long long window = 0;
    for (int i = 0; i < k; i++) window += a[i];

    long long best = window;
    for (int r = k; r < n; r++) {
        window += a[r] - a[r - k];
        best = max(best, window);
    }

    cout << best << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q2. Minimum Sum Subarray of Size K

### Problem Statement
Find minimum sum among all subarrays of fixed size `K`.

### Input Format
- `N K`
- `N` integers

### Output Format
- Minimum sum

### Example
Input:
```text
6 2
3 7 1 9 2 8
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
    int n, k;
    cin >> n >> k;
    vector<long long> a(n);
    for (auto &x : a) cin >> x;

    if (k <= 0 || k > n) {
        cout << 0 << "\n";
        return 0;
    }

    long long window = 0;
    for (int i = 0; i < k; i++) window += a[i];

    long long best = window;
    for (int r = k; r < n; r++) {
        window += a[r] - a[r - k];
        best = min(best, window);
    }

    cout << best << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q3. First Negative Integer in Every Window of Size K

### Problem Statement
For each window of size `K`, print the first negative number. If none, print `0`.

### Input Format
- `N K`
- `N` integers

### Output Format
- Answers for each window

### Example
Input:
```text
8 3
12 -1 -7 8 -15 30 16 28
```
Output:
```text
-1 -1 -7 -15 -15 0
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;
    vector<long long> a(n);
    for (auto &x : a) cin >> x;

    deque<int> dq;

    for (int r = 0; r < n; r++) {
        if (a[r] < 0) dq.push_back(r);

        if (r >= k - 1) {
            int l = r - k + 1;
            while (!dq.empty() && dq.front() < l) dq.pop_front();

            if (dq.empty()) cout << 0;
            else cout << a[dq.front()];

            if (r != n - 1) cout << " ";
        }
    }
    cout << "\n";

    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(K)`

---

## Q4. Count Distinct Elements in Every Window of Size K

### Problem Statement
Print number of distinct elements in each window of size `K`.

### Input Format
- `N K`
- `N` integers

### Output Format
- Distinct counts

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
    int n, k;
    cin >> n >> k;
    vector<long long> a(n);
    for (auto &x : a) cin >> x;

    if (k <= 0 || k > n) {
        cout << -1 << "\n";
        return 0;
    }

    unordered_map<long long, int> freq;
    freq.reserve(2 * k + 1);

    for (int i = 0; i < k; i++) freq[a[i]]++;
    cout << freq.size();

    for (int r = k; r < n; r++) {
        long long out = a[r - k];
        if (--freq[out] == 0) freq.erase(out);
        freq[a[r]]++;
        cout << " " << freq.size();
    }
    cout << "\n";

    return 0;
}
```

### Complexity
- Time: `O(N)` average
- Space: `O(K)`

---

## Q5. Maximum of All Subarrays of Size K

### Problem Statement
Print maximum element for every window of size `K`.

### Input Format
- `N K`
- `N` integers

### Output Format
- Window maximums

### Example
Input:
```text
8 3
1 3 -1 -3 5 3 6 7
```
Output:
```text
3 3 5 5 6 7
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;
    vector<int> a(n);
    for (auto &x : a) cin >> x;

    deque<int> dq; // indices with decreasing values

    for (int r = 0; r < n; r++) {
        while (!dq.empty() && a[dq.back()] <= a[r]) dq.pop_back();
        dq.push_back(r);

        int l = r - k + 1;
        if (l >= 0) {
            while (!dq.empty() && dq.front() < l) dq.pop_front();
            cout << a[dq.front()];
            if (r != n - 1) cout << " ";
        }
    }
    cout << "\n";

    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(K)`

---

## Q6. Minimum of All Subarrays of Size K

### Problem Statement
Print minimum element for each window of size `K`.

### Input Format
- `N K`
- `N` integers

### Output Format
- Window minimums

### Example
Input:
```text
7 3
4 2 12 3 -1 6 5
```
Output:
```text
2 2 -1 -1 -1
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;
    vector<int> a(n);
    for (auto &x : a) cin >> x;

    deque<int> dq; // increasing values

    for (int r = 0; r < n; r++) {
        while (!dq.empty() && a[dq.back()] >= a[r]) dq.pop_back();
        dq.push_back(r);

        int l = r - k + 1;
        if (l >= 0) {
            while (!dq.empty() && dq.front() < l) dq.pop_front();
            cout << a[dq.front()];
            if (r != n - 1) cout << " ";
        }
    }
    cout << "\n";

    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(K)`

---

## Q7. Average of Every Window of Size K

### Problem Statement
Given array and `K`, print average of each window of size `K`.

### Input Format
- `N K`
- `N` integers

### Output Format
- Averages with 2 decimal precision

### Example
Input:
```text
5 2
1 3 2 6 4
```
Output:
```text
2.00 2.50 4.00 5.00
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;
    vector<double> a(n);
    for (auto &x : a) cin >> x;

    if (k <= 0 || k > n) {
        cout << -1 << "\n";
        return 0;
    }

    double sum = 0;
    for (int i = 0; i < k; i++) sum += a[i];

    cout << fixed << setprecision(2);
    cout << sum / k;

    for (int r = k; r < n; r++) {
        sum += a[r] - a[r - k];
        cout << " " << sum / k;
    }
    cout << "\n";

    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q8. Count Windows of Size K with Sum >= X

### Problem Statement
Given array, count subarrays of size `K` whose sum is at least `X`.

### Input Format
- `N K X`
- `N` integers

### Output Format
- Count

### Example
Input:
```text
6 3 10
2 5 1 8 2 9
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
    int n, k;
    long long x;
    cin >> n >> k >> x;

    vector<long long> a(n);
    for (auto &v : a) cin >> v;

    if (k <= 0 || k > n) {
        cout << 0 << "\n";
        return 0;
    }

    long long sum = 0;
    for (int i = 0; i < k; i++) sum += a[i];

    long long ans = (sum >= x);
    for (int r = k; r < n; r++) {
        sum += a[r] - a[r - k];
        if (sum >= x) ans++;
    }

    cout << ans << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q9. Maximum Number of Vowels in Any Substring of Length K

### Problem Statement
Given string `S` and integer `K`, find maximum vowels in any substring of length `K`.

### Input Format
- String `S`
- Integer `K`

### Output Format
- Maximum count

### Example
Input:
```text
abciiidef
3
```
Output:
```text
3
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

bool isVowel(char c) {
    c = (char)tolower((unsigned char)c);
    return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
}

int main() {
    string s;
    int k;
    cin >> s >> k;

    int n = (int)s.size();
    if (k <= 0 || k > n) {
        cout << 0 << "\n";
        return 0;
    }

    int cnt = 0;
    for (int i = 0; i < k; i++) if (isVowel(s[i])) cnt++;

    int best = cnt;
    for (int r = k; r < n; r++) {
        if (isVowel(s[r])) cnt++;
        if (isVowel(s[r - k])) cnt--;
        best = max(best, cnt);
    }

    cout << best << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q10. Permutation in String (Fixed Window Frequency)

### Problem Statement
Given strings `S` and `P`, check if any permutation of `P` exists as substring in `S`.

### Input Format
- String `S`
- String `P`

### Output Format
- `Yes` / `No`

### Example
Input:
```text
ooidbcaf
abc
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
    string s, p;
    cin >> s >> p;

    int n = (int)s.size(), m = (int)p.size();
    if (m > n) {
        cout << "No\n";
        return 0;
    }

    vector<int> need(26, 0), have(26, 0);
    for (char c : p) need[c - 'a']++;

    for (int i = 0; i < m; i++) have[s[i] - 'a']++;
    if (have == need) {
        cout << "Yes\n";
        return 0;
    }

    for (int r = m; r < n; r++) {
        have[s[r] - 'a']++;
        have[s[r - m] - 'a']--;
        if (have == need) {
            cout << "Yes\n";
            return 0;
        }
    }

    cout << "No\n";
    return 0;
}
```

### Complexity
- Time: `O(26*N)`
- Space: `O(1)`

---

## Q11. Smallest Subarray with Sum >= S (Positive Numbers)

### Problem Statement
Given positive array and target `S`, find minimum length subarray whose sum is at least `S`.
If none, print `0`.

### Input Format
- `N S`
- `N` positive integers

### Output Format
- Minimum length or `0`

### Example
Input:
```text
7 7
2 1 5 2 3 2 1
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
    int n;
    long long s;
    cin >> n >> s;

    vector<long long> a(n);
    for (auto &x : a) cin >> x;

    int l = 0;
    long long sum = 0;
    int best = INT_MAX;

    for (int r = 0; r < n; r++) {
        sum += a[r];
        while (sum >= s) {
            best = min(best, r - l + 1);
            sum -= a[l++];
        }
    }

    cout << (best == INT_MAX ? 0 : best) << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q12. Longest Subarray with Sum <= K (Positive Numbers)

### Problem Statement
Given positive array and integer `K`, find longest subarray length with sum <= `K`.

### Input Format
- `N K`
- `N` positive integers

### Output Format
- Maximum length

### Example
Input:
```text
6 8
3 1 2 1 1 1
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
    int n;
    long long k;
    cin >> n >> k;

    vector<long long> a(n);
    for (auto &x : a) cin >> x;

    int l = 0, best = 0;
    long long sum = 0;

    for (int r = 0; r < n; r++) {
        sum += a[r];
        while (sum > k && l <= r) sum -= a[l++];
        best = max(best, r - l + 1);
    }

    cout << best << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q13. Longest Substring Without Repeating Characters

### Problem Statement
Given string `S`, find length of longest substring without repeated characters.

### Input Format
- String `S`

### Output Format
- Maximum length

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
    string s;
    cin >> s;

    vector<int> last(256, -1);
    int l = 0, best = 0;

    for (int r = 0; r < (int)s.size(); r++) {
        unsigned char c = (unsigned char)s[r];
        l = max(l, last[c] + 1);
        last[c] = r;
        best = max(best, r - l + 1);
    }

    cout << best << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q14. Longest Substring with At Most K Distinct Characters

### Problem Statement
Find length of longest substring containing at most `K` distinct characters.

### Input Format
- String `S`
- Integer `K`

### Output Format
- Maximum length

### Example
Input:
```text
aaraaci
2
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
    string s;
    int k;
    cin >> s >> k;

    if (k <= 0) {
        cout << 0 << "\n";
        return 0;
    }

    vector<int> freq(256, 0);
    int distinct = 0, l = 0, best = 0;

    for (int r = 0; r < (int)s.size(); r++) {
        unsigned char c = (unsigned char)s[r];
        if (freq[c]++ == 0) distinct++;

        while (distinct > k) {
            unsigned char cl = (unsigned char)s[l++];
            if (--freq[cl] == 0) distinct--;
        }

        best = max(best, r - l + 1);
    }

    cout << best << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q15. Longest Substring with Exactly K Distinct Characters

### Problem Statement
Find longest substring with exactly `K` distinct characters.
If none, print `0`.

### Input Format
- String `S`
- Integer `K`

### Output Format
- Maximum length

### Example
Input:
```text
aabacbebebe
3
```
Output:
```text
7
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int atMostK(const string& s, int k) {
    if (k < 0) return 0;
    vector<int> freq(256, 0);
    int l = 0, distinct = 0;
    int best = 0;

    for (int r = 0; r < (int)s.size(); r++) {
        unsigned char c = (unsigned char)s[r];
        if (freq[c]++ == 0) distinct++;

        while (distinct > k) {
            unsigned char cl = (unsigned char)s[l++];
            if (--freq[cl] == 0) distinct--;
        }

        best = max(best, r - l + 1);
    }
    return best;
}

int main() {
    string s;
    int k;
    cin >> s >> k;

    // longest exactly-K needs explicit check
    vector<int> freq(256, 0);
    int l = 0, distinct = 0, best = 0;

    for (int r = 0; r < (int)s.size(); r++) {
        unsigned char c = (unsigned char)s[r];
        if (freq[c]++ == 0) distinct++;

        while (distinct > k) {
            unsigned char cl = (unsigned char)s[l++];
            if (--freq[cl] == 0) distinct--;
        }

        if (distinct == k) best = max(best, r - l + 1);
    }

    cout << best << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q16. Count Substrings with At Most K Distinct Characters

### Problem Statement
Given string `S` and `K`, count substrings containing at most `K` distinct characters.

### Input Format
- String `S`
- Integer `K`

### Output Format
- Count

### Example
Input:
```text
pqpqs
2
```
Output:
```text
12
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

long long atMostK(const string& s, int k) {
    if (k < 0) return 0;
    vector<int> freq(256, 0);
    int l = 0, distinct = 0;
    long long ans = 0;

    for (int r = 0; r < (int)s.size(); r++) {
        unsigned char c = (unsigned char)s[r];
        if (freq[c]++ == 0) distinct++;

        while (distinct > k) {
            unsigned char cl = (unsigned char)s[l++];
            if (--freq[cl] == 0) distinct--;
        }

        ans += (r - l + 1);
    }
    return ans;
}

int main() {
    string s;
    int k;
    cin >> s >> k;

    cout << atMostK(s, k) << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q17. Count Substrings with Exactly K Distinct Characters

### Problem Statement
Count substrings with exactly `K` distinct characters.

### Input Format
- String `S`
- Integer `K`

### Output Format
- Count

### Example
Input:
```text
pqpqs
2
```
Output:
```text
7
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

long long atMostK(const string& s, int k) {
    if (k < 0) return 0;
    vector<int> freq(256, 0);
    int l = 0, distinct = 0;
    long long ans = 0;

    for (int r = 0; r < (int)s.size(); r++) {
        unsigned char c = (unsigned char)s[r];
        if (freq[c]++ == 0) distinct++;

        while (distinct > k) {
            unsigned char cl = (unsigned char)s[l++];
            if (--freq[cl] == 0) distinct--;
        }

        ans += (r - l + 1);
    }

    return ans;
}

int main() {
    string s;
    int k;
    cin >> s >> k;

    cout << atMostK(s, k) - atMostK(s, k - 1) << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q18. Longest Repeating Character Replacement

### Problem Statement
Given uppercase string and integer `K`, replace at most `K` chars to get longest substring with same char.

### Input Format
- String `S`
- Integer `K`

### Output Format
- Maximum length

### Example
Input:
```text
AABABBA
1
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
    string s;
    int k;
    cin >> s >> k;

    vector<int> freq(26, 0);
    int l = 0, best = 0, maxCount = 0;

    for (int r = 0; r < (int)s.size(); r++) {
        maxCount = max(maxCount, ++freq[s[r] - 'A']);

        while ((r - l + 1) - maxCount > k) {
            freq[s[l] - 'A']--;
            l++;
        }

        best = max(best, r - l + 1);
    }

    cout << best << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q19. Minimum Window Substring

### Problem Statement
Given strings `S` and `T`, find minimum substring of `S` containing all chars of `T` with multiplicity.
If none, print `-1`.

### Input Format
- String `S`
- String `T`

### Output Format
- Minimum window or `-1`

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
    string s, t;
    cin >> s >> t;

    vector<int> need(256, 0), have(256, 0);
    int requiredKinds = 0;

    for (char c : t) {
        if (need[(unsigned char)c] == 0) requiredKinds++;
        need[(unsigned char)c]++;
    }

    int formed = 0;
    int l = 0, bestLen = INT_MAX, bestL = -1;

    for (int r = 0; r < (int)s.size(); r++) {
        unsigned char rc = (unsigned char)s[r];
        have[rc]++;

        if (need[rc] > 0 && have[rc] == need[rc]) formed++;

        while (l <= r && formed == requiredKinds) {
            if (r - l + 1 < bestLen) {
                bestLen = r - l + 1;
                bestL = l;
            }

            unsigned char lc = (unsigned char)s[l++];
            have[lc]--;
            if (need[lc] > 0 && have[lc] < need[lc]) formed--;
        }
    }

    if (bestL == -1) cout << -1 << "\n";
    else cout << s.substr(bestL, bestLen) << "\n";

    return 0;
}
```

### Complexity
- Time: `O(|S| + |T|)`
- Space: `O(1)`

---

## Q20. Fruits Into Baskets (At Most 2 Distinct)

### Problem Statement
Given integer array, find length of longest subarray with at most 2 distinct values.

### Input Format
- `N`
- `N` integers

### Output Format
- Maximum length

### Example
Input:
```text
6
1 2 1 2 3 2
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
    int n;
    cin >> n;
    vector<int> a(n);
    for (auto &x : a) cin >> x;

    unordered_map<int, int> freq;
    int l = 0, best = 0;

    for (int r = 0; r < n; r++) {
        freq[a[r]]++;

        while ((int)freq.size() > 2) {
            if (--freq[a[l]] == 0) freq.erase(a[l]);
            l++;
        }

        best = max(best, r - l + 1);
    }

    cout << best << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)` average
- Space: `O(2)` to `O(N)` map

---

## Q21. Max Consecutive Ones III (Flip at Most K Zeros)

### Problem Statement
Given binary array and integer `K`, flip at most `K` zeros to ones. Find longest consecutive ones.

### Input Format
- `N K`
- `N` values (0/1)

### Output Format
- Maximum length

### Example
Input:
```text
11 2
1 1 1 0 0 0 1 1 1 1 0
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
    int n, k;
    cin >> n >> k;
    vector<int> a(n);
    for (auto &x : a) cin >> x;

    int l = 0, zeros = 0, best = 0;

    for (int r = 0; r < n; r++) {
        if (a[r] == 0) zeros++;

        while (zeros > k) {
            if (a[l] == 0) zeros--;
            l++;
        }

        best = max(best, r - l + 1);
    }

    cout << best << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q22. Longest Subarray with At Most K Zeroes

### Problem Statement
Given binary array and integer `K`, find longest subarray containing at most `K` zeros.

### Input Format
- `N K`
- `N` values

### Output Format
- Maximum length

### Example
Input:
```text
8 1
1 0 1 1 0 1 1 1
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
    int n, k;
    cin >> n >> k;

    vector<int> a(n);
    for (auto &x : a) cin >> x;

    int l = 0, zeros = 0, best = 0;
    for (int r = 0; r < n; r++) {
        zeros += (a[r] == 0);
        while (zeros > k) {
            zeros -= (a[l] == 0);
            l++;
        }
        best = max(best, r - l + 1);
    }

    cout << best << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q23. Count Nice Subarrays (Exactly K Odd Numbers)

### Problem Statement
Count number of subarrays with exactly `K` odd numbers.

### Input Format
- `N K`
- `N` integers

### Output Format
- Count

### Example
Input:
```text
5 3
1 1 2 1 1
```
Output:
```text
2
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

long long atMostKOdd(const vector<int>& a, int k) {
    if (k < 0) return 0;
    int l = 0, odd = 0;
    long long ans = 0;

    for (int r = 0; r < (int)a.size(); r++) {
        odd += (a[r] & 1);

        while (odd > k) {
            odd -= (a[l] & 1);
            l++;
        }

        ans += (r - l + 1);
    }

    return ans;
}

int main() {
    int n, k;
    cin >> n >> k;

    vector<int> a(n);
    for (auto &x : a) cin >> x;

    cout << atMostKOdd(a, k) - atMostKOdd(a, k - 1) << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q24. Binary Subarrays with Sum = Goal

### Problem Statement
Given binary array and integer `goal`, count subarrays with sum exactly `goal`.

### Input Format
- `N goal`
- `N` values (0/1)

### Output Format
- Count

### Example
Input:
```text
5 2
1 0 1 0 1
```
Output:
```text
4
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

long long atMostSum(const vector<int>& a, int goal) {
    if (goal < 0) return 0;

    int l = 0;
    long long sum = 0, ans = 0;

    for (int r = 0; r < (int)a.size(); r++) {
        sum += a[r];

        while (sum > goal) {
            sum -= a[l++];
        }

        ans += (r - l + 1);
    }

    return ans;
}

int main() {
    int n, goal;
    cin >> n >> goal;

    vector<int> a(n);
    for (auto &x : a) cin >> x;

    cout << atMostSum(a, goal) - atMostSum(a, goal - 1) << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q25. Subarray Product Less Than K

### Problem Statement
Given positive array and integer `K`, count subarrays whose product is strictly less than `K`.

### Input Format
- `N K`
- `N` positive integers

### Output Format
- Count

### Example
Input:
```text
4 100
10 5 2 6
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
    int n;
    long long k;
    cin >> n >> k;

    vector<int> a(n);
    for (auto &x : a) cin >> x;

    if (k <= 1) {
        cout << 0 << "\n";
        return 0;
    }

    long long prod = 1;
    int l = 0;
    long long ans = 0;

    for (int r = 0; r < n; r++) {
        prod *= a[r];

        while (prod >= k && l <= r) {
            prod /= a[l++];
        }

        ans += (r - l + 1);
    }

    cout << ans << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q26. Longest Subarray with Absolute Difference <= Limit

### Problem Statement
Given array and `limit`, find longest subarray such that `max - min <= limit`.

### Input Format
- `N limit`
- `N` integers

### Output Format
- Maximum length

### Example
Input:
```text
4 4
8 2 4 7
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
    int n;
    long long limit;
    cin >> n >> limit;

    vector<long long> a(n);
    for (auto &x : a) cin >> x;

    deque<int> maxDq, minDq;
    int l = 0, best = 0;

    for (int r = 0; r < n; r++) {
        while (!maxDq.empty() && a[maxDq.back()] <= a[r]) maxDq.pop_back();
        while (!minDq.empty() && a[minDq.back()] >= a[r]) minDq.pop_back();

        maxDq.push_back(r);
        minDq.push_back(r);

        while (!maxDq.empty() && !minDq.empty() && a[maxDq.front()] - a[minDq.front()] > limit) {
            if (maxDq.front() == l) maxDq.pop_front();
            if (minDq.front() == l) minDq.pop_front();
            l++;
        }

        best = max(best, r - l + 1);
    }

    cout << best << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(N)`

---

## Q27. Shortest Subarray with Sum at Least K (With Negatives)

### Problem Statement
Given array (can include negatives) and `K`, find shortest non-empty subarray with sum >= `K`.
If none, print `-1`.

### Input Format
- `N K`
- `N` integers

### Output Format
- Minimum length or `-1`

### Example
Input:
```text
3 3
2 -1 2
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
    int n;
    long long k;
    cin >> n >> k;

    vector<long long> a(n), pref(n + 1, 0);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
        pref[i + 1] = pref[i] + a[i];
    }

    deque<int> dq;
    int best = n + 1;

    for (int i = 0; i <= n; i++) {
        while (!dq.empty() && pref[i] - pref[dq.front()] >= k) {
            best = min(best, i - dq.front());
            dq.pop_front();
        }

        while (!dq.empty() && pref[i] <= pref[dq.back()]) dq.pop_back();
        dq.push_back(i);
    }

    cout << (best == n + 1 ? -1 : best) << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(N)`

---

## Q28. Find All Start Indices of Anagrams of Pattern

### Problem Statement
Given text `S` and pattern `P`, print all indices where an anagram of `P` starts.
If none, print `-1`.

### Input Format
- String `S`
- String `P`

### Output Format
- Indices or `-1`

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
    string s, p;
    cin >> s >> p;

    int n = (int)s.size(), m = (int)p.size();
    if (m > n) {
        cout << -1 << "\n";
        return 0;
    }

    vector<int> need(26, 0), have(26, 0);
    for (char c : p) need[c - 'a']++;

    for (int i = 0; i < m; i++) have[s[i] - 'a']++;

    vector<int> ans;
    if (have == need) ans.push_back(0);

    for (int r = m; r < n; r++) {
        have[s[r] - 'a']++;
        have[s[r - m] - 'a']--;
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
- Time: `O(26*N)`
- Space: `O(1)`

---

## Q29. Count Substrings Containing All Three Characters (a,b,c)

### Problem Statement
Given string containing only `a`, `b`, `c`, count substrings containing at least one of each.

### Input Format
- String `S`

### Output Format
- Count

### Example
Input:
```text
abcabc
```
Output:
```text
10
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin >> s;

    vector<int> freq(3, 0);
    int l = 0;
    long long ans = 0;

    for (int r = 0; r < (int)s.size(); r++) {
        freq[s[r] - 'a']++;

        while (freq[0] > 0 && freq[1] > 0 && freq[2] > 0) {
            ans += (long long)s.size() - r;
            freq[s[l] - 'a']--;
            l++;
        }
    }

    cout << ans << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q30. Longest Substring with At Most Two Distinct Characters

### Problem Statement
Given string `S`, find length of longest substring with at most 2 distinct chars.

### Input Format
- String `S`

### Output Format
- Maximum length

### Example
Input:
```text
eceba
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
    string s;
    cin >> s;

    vector<int> freq(256, 0);
    int l = 0, distinct = 0, best = 0;

    for (int r = 0; r < (int)s.size(); r++) {
        unsigned char c = (unsigned char)s[r];
        if (freq[c]++ == 0) distinct++;

        while (distinct > 2) {
            unsigned char cl = (unsigned char)s[l++];
            if (--freq[cl] == 0) distinct--;
        }

        best = max(best, r - l + 1);
    }

    cout << best << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q31. Contains Nearby Duplicate (Distance <= K)

### Problem Statement
Given array and integer `K`, check if there exist indices `i != j` with `A[i] == A[j]` and `|i-j| <= K`.

### Input Format
- `N K`
- `N` integers

### Output Format
- `Yes` / `No`

### Example
Input:
```text
6 3
1 2 3 1 4 5
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
    int n, k;
    cin >> n >> k;

    vector<int> a(n);
    for (auto &x : a) cin >> x;

    unordered_set<int> win;
    for (int i = 0; i < n; i++) {
        if (win.count(a[i])) {
            cout << "Yes\n";
            return 0;
        }

        win.insert(a[i]);
        if ((int)win.size() > k) {
            win.erase(a[i - k]);
        }
    }

    cout << "No\n";
    return 0;
}
```

### Complexity
- Time: `O(N)` average
- Space: `O(K)`

---

## Q32. Maximum Points You Can Obtain from Cards

### Problem Statement
You can pick exactly `K` cards from either start or end of array. Find max score.

### Input Format
- `N K`
- `N` integers

### Output Format
- Maximum score

### Example
Input:
```text
7 3
1 2 3 4 5 6 1
```
Output:
```text
12
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    vector<int> a(n);
    long long total = 0;
    for (int i = 0; i < n; i++) {
        cin >> a[i];
        total += a[i];
    }

    if (k >= n) {
        cout << total << "\n";
        return 0;
    }

    int windowLen = n - k;
    long long window = 0;
    for (int i = 0; i < windowLen; i++) window += a[i];

    long long minWindow = window;
    for (int r = windowLen; r < n; r++) {
        window += a[r] - a[r - windowLen];
        minWindow = min(minWindow, window);
    }

    cout << total - minWindow << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q33. Minimum Operations to Reduce X to Zero

### Problem Statement
Given array and `X`, remove elements from either start or end so removed sum is exactly `X`.
Find minimum operations; else `-1`.

### Input Format
- `N X`
- `N` integers

### Output Format
- Minimum operations or `-1`

### Example
Input:
```text
5 5
1 1 4 2 3
```
Output:
```text
2
```

### Idea
Find longest middle subarray with sum `total - X`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    long long x;
    cin >> n >> x;

    vector<int> a(n);
    long long total = 0;
    for (int i = 0; i < n; i++) {
        cin >> a[i];
        total += a[i];
    }

    long long target = total - x;
    if (target < 0) {
        cout << -1 << "\n";
        return 0;
    }
    if (target == 0) {
        cout << n << "\n";
        return 0;
    }

    int l = 0, best = -1;
    long long sum = 0;

    for (int r = 0; r < n; r++) {
        sum += a[r];
        while (sum > target && l <= r) sum -= a[l++];
        if (sum == target) best = max(best, r - l + 1);
    }

    if (best == -1) cout << -1 << "\n";
    else cout << (n - best) << "\n";

    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q34. Grumpy Bookstore Owner (Story-Based)

### Problem Statement
Owner is grumpy on some minutes. He can suppress grumpiness for `K` continuous minutes.
Find max satisfied customers.

### Input Format
- `N K`
- `N` customers array
- `N` grumpy array (0/1)

### Output Format
- Maximum satisfied customers

### Example
Input:
```text
8 3
1 0 1 2 1 1 7 5
0 1 0 1 0 1 0 1
```
Output:
```text
16
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    vector<int> cust(n), gr(n);
    for (auto &x : cust) cin >> x;
    for (auto &x : gr) cin >> x;

    long long base = 0;
    for (int i = 0; i < n; i++) if (gr[i] == 0) base += cust[i];

    long long gain = 0;
    for (int i = 0; i < k && i < n; i++) if (gr[i]) gain += cust[i];

    long long bestGain = gain;
    for (int r = k; r < n; r++) {
        if (gr[r]) gain += cust[r];
        if (gr[r - k]) gain -= cust[r - k];
        bestGain = max(bestGain, gain);
    }

    cout << base + bestGain << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q35. Diet Plan Performance (Story-Based)

### Problem Statement
Given daily calories and window size `K`:
- if window sum < `lower`, score -1
- if window sum > `upper`, score +1
- else 0
Return total score.

### Input Format
- `N K lower upper`
- `N` integers

### Output Format
- Score

### Example
Input:
```text
5 1 3 3
1 2 3 4 5
```
Output:
```text
0
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    long long lower, upper;
    cin >> n >> k >> lower >> upper;

    vector<int> a(n);
    for (auto &x : a) cin >> x;

    long long sum = 0;
    for (int i = 0; i < k; i++) sum += a[i];

    long long score = 0;
    auto eval = [&](long long s) {
        if (s < lower) return -1LL;
        if (s > upper) return 1LL;
        return 0LL;
    };

    score += eval(sum);

    for (int r = k; r < n; r++) {
        sum += a[r] - a[r - k];
        score += eval(sum);
    }

    cout << score << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q36. Maximum Erasure Value (Unique Subarray Sum)

### Problem Statement
Find maximum possible sum of a subarray containing only unique elements.

### Input Format
- `N`
- `N` integers

### Output Format
- Maximum unique-subarray sum

### Example
Input:
```text
5
4 2 4 5 6
```
Output:
```text
17
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (auto &x : a) cin >> x;

    unordered_map<int, int> last;
    long long sum = 0, best = 0;
    int l = 0;

    for (int r = 0; r < n; r++) {
        if (last.count(a[r]) && last[a[r]] >= l) {
            int newL = last[a[r]] + 1;
            while (l < newL) {
                sum -= a[l];
                l++;
            }
        }

        sum += a[r];
        last[a[r]] = r;
        best = max(best, sum);
    }

    cout << best << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)` average
- Space: `O(N)`

---

## Q37. Longest Repeating Digit Replacement in Numeric String

### Problem Statement
Given numeric string and `K`, replace at most `K` digits to make longest substring of same digit.

### Input Format
- Numeric string `S`
- Integer `K`

### Output Format
- Maximum length

### Example
Input:
```text
12233321
2
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
    string s;
    int k;
    cin >> s >> k;

    vector<int> freq(10, 0);
    int l = 0, best = 0, mx = 0;

    for (int r = 0; r < (int)s.size(); r++) {
        int d = s[r] - '0';
        mx = max(mx, ++freq[d]);

        while ((r - l + 1) - mx > k) {
            freq[s[l] - '0']--;
            l++;
        }

        best = max(best, r - l + 1);
    }

    cout << best << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q38. Count Subarrays with At Most K Distinct Integers

### Problem Statement
Given integer array, count subarrays having at most `K` distinct integers.

### Input Format
- `N K`
- `N` integers

### Output Format
- Count

### Example
Input:
```text
5 2
1 2 1 2 3
```
Output:
```text
12
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

long long atMostK(const vector<int>& a, int k) {
    if (k < 0) return 0;
    unordered_map<int, int> freq;
    int l = 0;
    long long ans = 0;

    for (int r = 0; r < (int)a.size(); r++) {
        freq[a[r]]++;

        while ((int)freq.size() > k) {
            if (--freq[a[l]] == 0) freq.erase(a[l]);
            l++;
        }

        ans += (r - l + 1);
    }

    return ans;
}

int main() {
    int n, k;
    cin >> n >> k;

    vector<int> a(n);
    for (auto &x : a) cin >> x;

    cout << atMostK(a, k) << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)` average
- Space: `O(K)` to `O(N)`

---

## Q39. Count Subarrays with Exactly K Distinct Integers

### Problem Statement
Count subarrays with exactly `K` distinct integers.

### Input Format
- `N K`
- `N` integers

### Output Format
- Count

### Example
Input:
```text
5 2
1 2 1 2 3
```
Output:
```text
7
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

long long atMostK(const vector<int>& a, int k) {
    if (k < 0) return 0;
    unordered_map<int, int> freq;
    int l = 0;
    long long ans = 0;

    for (int r = 0; r < (int)a.size(); r++) {
        freq[a[r]]++;

        while ((int)freq.size() > k) {
            if (--freq[a[l]] == 0) freq.erase(a[l]);
            l++;
        }

        ans += (r - l + 1);
    }

    return ans;
}

int main() {
    int n, k;
    cin >> n >> k;

    vector<int> a(n);
    for (auto &x : a) cin >> x;

    cout << atMostK(a, k) - atMostK(a, k - 1) << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)` average
- Space: `O(K)` to `O(N)`

---

## Q40. Story-Based: Suspicious Transaction Burst

### Problem Statement
Given daily transactions and threshold `T`, find shortest consecutive period where total transactions >= `T`.
If none, print `0`.
(Assume non-negative transactions)

### Input Format
- `N T`
- `N` integers

### Output Format
- Minimum window length or `0`

### Example
Input:
```text
6 15
2 3 5 2 8 1
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
    int n;
    long long t;
    cin >> n >> t;

    vector<long long> a(n);
    for (auto &x : a) cin >> x;

    int l = 0, best = INT_MAX;
    long long sum = 0;

    for (int r = 0; r < n; r++) {
        sum += a[r];
        while (sum >= t) {
            best = min(best, r - l + 1);
            sum -= a[l++];
        }
    }

    cout << (best == INT_MAX ? 0 : best) << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## 3) Sliding Window Revision Order

1. Fixed size basics: `Q1-Q10`
2. Variable size two-pointer: `Q11-Q25`
3. Deque/advanced constraints: `Q26-Q27`
4. String counting and distinct tricks: `Q28-Q30`, `Q38-Q39`
5. Story-based applied problems: `Q31-Q37`, `Q40`

## 4) Edge-Case Checklist

- `K = 0`, `K = 1`, `K = N`, `K > N`
- Empty/very small arrays or strings
- All same values
- No valid window exists
- Negative numbers in sum-based variable windows (may break classic shrinking)
- Overflow in sum/product (`long long`)

## 5) High-Priority NQT Sliding Patterns

1. Fixed window sum/max/min (`Q1`, `Q5`, `Q6`)
2. Smallest/longest valid window with constraints (`Q11`, `Q13`, `Q14`, `Q21`)
3. `atMost -> exactly` trick (`Q17`, `Q23`, `Q24`, `Q39`)
4. Deque optimization (`Q5`, `Q6`, `Q26`)
5. Min window and anagram windows (`Q19`, `Q28`)

