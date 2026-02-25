# TCS NQT Arrays: Full Questions and Answers in C++

This is an Array-focused document with complete question statements and fully working C++ solutions.
All questions are aligned with repeated TCS NQT PYQ patterns (direct + story-based forms).

## How to use this file

1. Read the problem and try solving yourself first.
2. Match your approach with the optimized approach section.
3. Write the code from scratch without copy-paste.
4. Re-run after changing sample values.

---

## Q1. Largest and Smallest Element in an Array

### Problem Statement
Given an array of `N` integers, find the smallest and largest element.

### Input Format
- First line: integer `N`
- Second line: `N` space-separated integers

### Output Format
Print two integers: `smallest largest`

### Constraints
- `1 <= N <= 2 * 10^5`
- `-10^9 <= A[i] <= 10^9`

### Example
Input:
```text
5
8 3 11 -2 6
```
Output:
```text
-2 11
```

### Approach
Scan once and keep updating `mn` and `mx`.

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;
    long long mn = LLONG_MAX, mx = LLONG_MIN;

    for (int i = 0; i < n; i++) {
        long long x;
        cin >> x;
        mn = min(mn, x);
        mx = max(mx, x);
    }

    cout << mn << " " << mx << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q2. Second Largest and Second Smallest (Distinct)

### Problem Statement
Given an array, print the second smallest and second largest distinct values.
If either does not exist, print `-1 -1`.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
`secondSmallest secondLargest`

### Constraints
- `1 <= N <= 2 * 10^5`

### Example
Input:
```text
6
7 2 9 2 11 7
```
Output:
```text
7 9
```

### Approach
Track four values: smallest, second smallest, largest, second largest with distinct checks.

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
    for (auto &x : a) cin >> x;

    long long mn1 = LLONG_MAX, mn2 = LLONG_MAX;
    long long mx1 = LLONG_MIN, mx2 = LLONG_MIN;

    for (long long x : a) {
        if (x < mn1) {
            mn2 = mn1;
            mn1 = x;
        } else if (x > mn1 && x < mn2) {
            mn2 = x;
        }

        if (x > mx1) {
            mx2 = mx1;
            mx1 = x;
        } else if (x < mx1 && x > mx2) {
            mx2 = x;
        }
    }

    if (mn2 == LLONG_MAX || mx2 == LLONG_MIN) {
        cout << -1 << " " << -1 << "\n";
    } else {
        cout << mn2 << " " << mx2 << "\n";
    }

    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q3. Check if Array is Sorted (Non-Decreasing)

### Problem Statement
Given an array of integers, determine if it is sorted in non-decreasing order.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
Print `Yes` if sorted, else `No`.

### Constraints
- `1 <= N <= 2 * 10^5`

### Example
Input:
```text
5
1 2 2 7 9
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
    for (auto &x : a) cin >> x;

    for (int i = 1; i < n; i++) {
        if (a[i] < a[i - 1]) {
            cout << "No\n";
            return 0;
        }
    }

    cout << "Yes\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q4. Left Rotate an Array by K Places

### Problem Statement
Given an array of size `N`, rotate it to the left by `K` positions.

### Input Format
- First line: `N K`
- Second line: `N` integers

### Output Format
Print rotated array.

### Constraints
- `1 <= N <= 2 * 10^5`
- `0 <= K <= 10^9`

### Example
Input:
```text
5 2
10 20 30 40 50
```
Output:
```text
30 40 50 10 20
```

### Approach
Use reverse trick.

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
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    if (n > 0) {
        k %= n;
        reverse(a.begin(), a.begin() + k);
        reverse(a.begin() + k, a.end());
        reverse(a.begin(), a.end());
    }

    for (int x : a) cout << x << " ";
    cout << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q5. Right Rotate an Array by K Places

### Problem Statement
Given an array of size `N`, rotate it to the right by `K` positions.

### Input Format
- First line: `N K`
- Second line: `N` integers

### Output Format
Print rotated array.

### Example
Input:
```text
5 2
10 20 30 40 50
```
Output:
```text
40 50 10 20 30
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
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    if (n > 0) {
        k %= n;
        reverse(a.begin(), a.end());
        reverse(a.begin(), a.begin() + k);
        reverse(a.begin() + k, a.end());
    }

    for (int x : a) cout << x << " ";
    cout << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q6. Reverse an Array

### Problem Statement
Given an array, reverse it in-place.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
Print reversed array.

### Example
Input:
```text
4
1 2 3 4
```
Output:
```text
4 3 2 1
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
    for (auto &x : a) cin >> x;

    reverse(a.begin(), a.end());

    for (long long x : a) cout << x << " ";
    cout << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)` extra

---

## Q7. Missing Number from 1 to N

### Problem Statement
You are given `N-1` distinct numbers from `1` to `N`. Find the missing number.

### Input Format
- First line: `N`
- Second line: `N-1` integers

### Output Format
Print the missing number.

### Constraints
- `2 <= N <= 2 * 10^5`

### Example
Input:
```text
5
1 2 4 5
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
    int xr = 0;

    for (int i = 1; i <= n; i++) xr ^= i;
    for (int i = 0; i < n - 1; i++) {
        int x;
        cin >> x;
        xr ^= x;
    }

    cout << xr << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q8. Single Number (All Others Appear Twice)

### Problem Statement
Given an array where every element appears exactly twice except one element that appears once, find the single element.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
Print the single element.

### Example
Input:
```text
7
2 5 2 7 5 9 9
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

    int n;
    cin >> n;
    int x, ans = 0;
    for (int i = 0; i < n; i++) {
        cin >> x;
        ans ^= x;
    }

    cout << ans << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q9. Story-Based: Push Empty Packets (0) to End

### Problem Statement
A conveyor belt carries packets represented by integers. Empty packets are denoted by `0`.
Move all empty packets to the end while maintaining the relative order of non-zero packets.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
Print transformed array.

### Example
Input:
```text
8
4 0 3 0 0 7 5 0
```
Output:
```text
4 3 7 5 0 0 0 0
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

    int j = 0;
    for (int i = 0; i < n; i++) {
        if (a[i] != 0) {
            swap(a[i], a[j]);
            j++;
        }
    }

    for (int x : a) cout << x << " ";
    cout << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q10. Longest Subarray with Sum K (Handles Negatives)

### Problem Statement
Given an integer array (may include negative values), find the length of the longest subarray whose sum is exactly `K`.

### Input Format
- First line: `N K`
- Second line: `N` integers

### Output Format
Print one integer: longest length.

### Example
Input:
```text
8 5
1 -1 5 -2 3 2 -2 1
```
Output:
```text
4
```

### Approach
Use prefix sum + first occurrence hashmap.

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
    for (auto &x : a) cin >> x;

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

### Complexity
- Time: `O(N)` average
- Space: `O(N)`

---

## Q11. Count Subarrays with Given Sum K

### Problem Statement
Given an array and integer `K`, count how many subarrays have sum equal to `K`.

### Input Format
- First line: `N K`
- Second line: `N` integers

### Output Format
Print count of valid subarrays.

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
    for (auto &x : a) cin >> x;

    unordered_map<long long, long long> freq;
    freq[0] = 1;

    long long pref = 0, ans = 0;
    for (int i = 0; i < n; i++) {
        pref += a[i];
        if (freq.count(pref - k)) ans += freq[pref - k];
        freq[pref]++;
    }

    cout << ans << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)` average
- Space: `O(N)`

---

## Q12. Maximum Subarray Sum (Kadane)

### Problem Statement
Given an array, find the maximum possible sum of any non-empty contiguous subarray.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
Print maximum sum.

### Example
Input:
```text
9
-2 1 -3 4 -1 2 1 -5 4
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
    for (auto &x : a) cin >> x;

    long long cur = a[0], best = a[0];
    for (int i = 1; i < n; i++) {
        cur = max(a[i], cur + a[i]);
        best = max(best, cur);
    }

    cout << best << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q13. Two Sum Problem

### Problem Statement
Given array `A` and target `T`, find indices of two elements whose sum is `T`.
If multiple answers exist, print the first found pair. If none, print `-1`.

### Input Format
- First line: `N T`
- Second line: `N` integers

### Output Format
- Print two 0-based indices `i j`, or `-1`

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
    for (auto &x : a) cin >> x;

    unordered_map<long long, int> pos;
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
- Time: `O(N)` average
- Space: `O(N)`

---

## Q14. Sort an Array of 0s, 1s and 2s

### Problem Statement
Given an array containing only `0`, `1`, and `2`, sort it in linear time.

### Input Format
- First line: `N`
- Second line: `N` integers (`0/1/2`)

### Output Format
Sorted array.

### Example
Input:
```text
8
2 0 2 1 1 0 2 0
```
Output:
```text
0 0 0 1 1 2 2 2
```

### C++ Solution (Dutch National Flag)
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

    int low = 0, mid = 0, high = n - 1;
    while (mid <= high) {
        if (a[mid] == 0) swap(a[low++], a[mid++]);
        else if (a[mid] == 1) mid++;
        else swap(a[mid], a[high--]);
    }

    for (int x : a) cout << x << " ";
    cout << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q15. Majority Element (> N/2 occurrences)

### Problem Statement
Given an array, find the majority element (appears more than `N/2` times).
If not present, print `-1`.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
Majority value or `-1`

### Example
Input:
```text
7
2 2 1 2 3 2 2
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
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    int cand = 0, cnt = 0;
    for (int x : a) {
        if (cnt == 0) cand = x;
        cnt += (x == cand) ? 1 : -1;
    }

    int freq = 0;
    for (int x : a) if (x == cand) freq++;

    if (freq > n / 2) cout << cand << "\n";
    else cout << -1 << "\n";

    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q16. Leaders in an Array

### Problem Statement
An element is a leader if it is greater than or equal to all elements to its right.
Print all leaders in original order.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
Leaders separated by spaces.

### Example
Input:
```text
6
16 17 4 3 5 2
```
Output:
```text
17 5 2
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

    vector<int> ans;
    int mx = INT_MIN;
    for (int i = n - 1; i >= 0; i--) {
        if (a[i] >= mx) {
            ans.push_back(a[i]);
            mx = a[i];
        }
    }

    reverse(ans.begin(), ans.end());
    for (int x : ans) cout << x << " ";
    cout << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(N)` for output

---

## Q17. Maximum Sum Subarray of Size K (Sliding Window)

### Problem Statement
Given an array and integer `K`, find maximum sum among all contiguous subarrays of size exactly `K`.

### Input Format
- First line: `N K`
- Second line: `N` integers

### Output Format
Print maximum sum.

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
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, k;
    cin >> n >> k;
    vector<long long> a(n);
    for (auto &x : a) cin >> x;

    if (k > n || k <= 0) {
        cout << 0 << "\n";
        return 0;
    }

    long long window = 0;
    for (int i = 0; i < k; i++) window += a[i];
    long long ans = window;

    for (int r = k; r < n; r++) {
        window += a[r] - a[r - k];
        ans = max(ans, window);
    }

    cout << ans << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q18. Longest Subarray with Equal Number of 0s and 1s

### Problem Statement
Given a binary array, find the length of the longest subarray containing equal number of `0`s and `1`s.

### Input Format
- First line: `N`
- Second line: `N` integers (0 or 1)

### Output Format
Print longest length.

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

### Approach
Replace `0` by `-1`, then find longest subarray with sum `0`.

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
- Time: `O(N)` average
- Space: `O(N)`

---

## Q19. Story-Based: Rearrange Multiples of 10 to End (Stable)

### Problem Statement
A supermarket marks some items with prices divisible by `10`. Rearrange the array so all multiples of `10` go to the end, preserving relative order in both groups.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
Print rearranged array.

### Example
Input:
```text
7
23 40 11 60 9 10 17
```
Output:
```text
23 11 9 17 40 60 10
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
    vector<int> a(n), out;
    for (int i = 0; i < n; i++) cin >> a[i];

    out.reserve(n);
    for (int x : a) if (x % 10 != 0) out.push_back(x);
    for (int x : a) if (x % 10 == 0) out.push_back(x);

    for (int x : out) cout << x << " ";
    cout << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(N)`

---

## Q20. Story-Based: Maximum Profit from Stock Prices

### Problem Statement
Given stock prices for `N` days, you may buy once and sell once later. Find maximum profit.
If no profit possible, print `0`.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
Maximum profit.

### Example
Input:
```text
6
7 1 5 3 6 4
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
    vector<int> p(n);
    for (int i = 0; i < n; i++) cin >> p[i];

    int mn = INT_MAX, best = 0;
    for (int x : p) {
        mn = min(mn, x);
        best = max(best, x - mn);
    }

    cout << best << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q21. Count Elements Greater Than All Previous Elements

### Problem Statement
Count how many elements are strictly greater than every element before them.
The first element is always counted.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
Count of such elements.

### Example
Input:
```text
7
2 5 3 7 8 6 9
```
Output:
```text
5
```

Explanation: Valid elements are `2, 5, 7, 8, 9`.

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
    for (auto &x : a) cin >> x;

    long long mx = LLONG_MIN;
    int count = 0;
    for (long long x : a) {
        if (x > mx) {
            count++;
            mx = x;
        }
    }

    cout << count << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Quick Revision Order (Arrays)

1. Q1, Q3, Q6
2. Q4, Q5, Q9
3. Q12, Q17
4. Q10, Q11, Q18
5. Q13, Q14, Q15, Q16
6. Q19, Q20, Q21

## Mock Practice Rule

- Solve any 2 questions in 45 minutes.
- First 5 minutes: choose easiest + one medium.
- Next 35 minutes: code both with edge cases.
- Last 5 minutes: dry run and output format check.


---

## Added Advanced Array Pack (Based on Your Requested Patterns)

These questions are added specifically for:
- Frequency-based patterns
- Compression/removal patterns
- Difference patterns
- Rearrangement traps
- Prefix/Suffix max applications
- Edge-case heavy practice

---

## Q22. Count Frequency of Each Element

### Problem Statement
Given an array of `N` integers, print the frequency of each distinct element in ascending order of value.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
For each distinct value `x`, print one line: `x frequency`

### Constraints
- `1 <= N <= 2 * 10^5`
- `-10^9 <= A[i] <= 10^9`

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
- Time: `O(N log N)`
- Space: `O(U)` where `U` is number of unique elements

---

## Q23. Element with Maximum Frequency

### Problem Statement
Given an array, find the element with highest frequency.
If multiple elements have the same maximum frequency, print the smallest element.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
Print one element (mode with tie-breaker)

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

    for (int i = 0; i < n; i++) {
        long long x;
        cin >> x;
        freq[x]++;
    }

    long long bestVal = 0;
    int bestFreq = -1;

    for (auto &p : freq) {
        long long val = p.first;
        int f = p.second;

        if (f > bestFreq || (f == bestFreq && val < bestVal)) {
            bestFreq = f;
            bestVal = val;
        }
    }

    cout << bestVal << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)` average
- Space: `O(U)`

---

## Q24. Print Elements Occurring Odd and Even Number of Times

### Problem Statement
Given an array, print elements occurring odd number of times and even number of times.
Print each group in ascending order.
If a group is empty, print `-1` for that group.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
- First line: odd-frequency elements or `-1`
- Second line: even-frequency elements or `-1`

### Example
Input:
```text
8
1 1 2 2 2 3 3 4
```
Output:
```text
2 4
1 3
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

    vector<long long> oddVals, evenVals;
    for (auto &p : freq) {
        if (p.second % 2) oddVals.push_back(p.first);
        else evenVals.push_back(p.first);
    }

    if (oddVals.empty()) cout << -1;
    else {
        for (long long x : oddVals) cout << x << " ";
    }
    cout << "\n";

    if (evenVals.empty()) cout << -1;
    else {
        for (long long x : evenVals) cout << x << " ";
    }
    cout << "\n";

    return 0;
}
```

### Complexity
- Time: `O(N log N)`
- Space: `O(U)`

---

## Q25. Remove Duplicates from Sorted Array (In-place style)

### Problem Statement
Given a sorted array, remove duplicates in-place so that each element appears once.
Print:
1. New length
2. The unique part of the array

### Input Format
- First line: `N`
- Second line: `N` sorted integers

### Output Format
- First line: new length `K`
- Second line: first `K` unique elements

### Example
Input:
```text
7
1 1 2 2 2 3 4
```
Output:
```text
4
1 2 3 4
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
    for (auto &x : a) cin >> x;

    if (n == 0) {
        cout << 0 << "\n\n";
        return 0;
    }

    int k = 1;
    for (int i = 1; i < n; i++) {
        if (a[i] != a[k - 1]) {
            a[k++] = a[i];
        }
    }

    cout << k << "\n";
    for (int i = 0; i < k; i++) cout << a[i] << " ";
    cout << "\n";

    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)` extra

---

## Q26. Remove Duplicates from Unsorted Array (Preserve First Occurrence)

### Problem Statement
Given an unsorted array, remove duplicates while preserving order of first occurrence.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
Print deduplicated array.

### Example
Input:
```text
8
4 2 4 1 2 3 1 5
```
Output:
```text
4 2 1 3 5
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
    for (auto &x : a) cin >> x;

    unordered_set<long long> seen;
    vector<long long> out;
    out.reserve(n);

    for (long long x : a) {
        if (!seen.count(x)) {
            seen.insert(x);
            out.push_back(x);
        }
    }

    for (long long x : out) cout << x << " ";
    cout << "\n";

    return 0;
}
```

### Complexity
- Time: `O(N)` average
- Space: `O(U)`

---

## Q27. Count Unique Elements

### Problem Statement
Given an array, count how many distinct elements are present.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
Print one integer: count of unique elements.

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
- Time: `O(N)` average
- Space: `O(U)`

---

## Q28. Maximum Difference A[j] - A[i] with j > i

### Problem Statement
Given an array, find maximum value of `A[j] - A[i]` such that `j > i`.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
Print maximum difference.

### Constraints
- `2 <= N <= 2 * 10^5`

### Example
Input:
```text
6
7 1 5 3 6 4
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
    for (auto &x : a) cin >> x;

    long long minSoFar = a[0];
    long long best = LLONG_MIN;

    for (int j = 1; j < n; j++) {
        best = max(best, a[j] - minSoFar);
        minSoFar = min(minSoFar, a[j]);
    }

    cout << best << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q29. Minimum Absolute Difference in an Array

### Problem Statement
Given an array, find minimum absolute difference between any two elements.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
Print minimum absolute difference.

### Constraints
- `2 <= N <= 2 * 10^5`

### Example
Input:
```text
5
4 9 1 32 13
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
    vector<long long> a(n);
    for (auto &x : a) cin >> x;

    sort(a.begin(), a.end());

    long long ans = LLONG_MAX;
    for (int i = 1; i < n; i++) {
        ans = min(ans, llabs(a[i] - a[i - 1]));
    }

    cout << ans << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N log N)`
- Space: `O(1)` extra

---

## Q30. Closest Pair from Two Arrays (Minimum Absolute Difference)

### Problem Statement
Given arrays `A` of size `N` and `B` of size `M`, find pair `(A[i], B[j])` with minimum `|A[i] - B[j]|`.
Print the pair and difference.
If multiple pairs exist, any one is acceptable.

### Input Format
- First line: `N M`
- Second line: `N` integers
- Third line: `M` integers

### Output Format
Print: `a b diff`

### Example
Input:
```text
4 4
1 4 10 20
5 8 15 30
```
Output:
```text
4 5 1
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, m;
    cin >> n >> m;
    vector<long long> a(n), b(m);
    for (auto &x : a) cin >> x;
    for (auto &x : b) cin >> x;

    sort(a.begin(), a.end());
    sort(b.begin(), b.end());

    int i = 0, j = 0;
    long long bestDiff = LLONG_MAX;
    long long bestA = 0, bestB = 0;

    while (i < n && j < m) {
        long long d = llabs(a[i] - b[j]);
        if (d < bestDiff) {
            bestDiff = d;
            bestA = a[i];
            bestB = b[j];
        }

        if (a[i] < b[j]) i++;
        else j++;
    }

    cout << bestA << " " << bestB << " " << bestDiff << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N log N + M log M)`
- Space: `O(1)` extra

---

## Q31. Rearrange: Negatives Left, Non-Negatives Right

### Problem Statement
Given an array, move all negative numbers to left side and non-negative numbers to right side.
Relative order is not required.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
Print rearranged array.

### Example
Input:
```text
5
-1 2 -3 4 5
```
Output (one valid):
```text
-1 -3 2 4 5
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
    for (auto &x : a) cin >> x;

    int l = 0, r = n - 1;
    while (l < r) {
        while (l < n && a[l] < 0) l++;
        while (r >= 0 && a[r] >= 0) r--;
        if (l < r) swap(a[l], a[r]);
    }

    for (long long x : a) cout << x << " ";
    cout << "\n";

    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q32. Rearrange: Even Numbers First, Then Odd (Stable)

### Problem Statement
Given an array, print all even numbers first, then odd numbers.
Preserve relative order inside each group.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
Rearranged array.

### Example
Input:
```text
7
5 2 8 3 6 1 4
```
Output:
```text
2 8 6 4 5 3 1
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
    vector<long long> a(n), out;
    for (auto &x : a) cin >> x;

    out.reserve(n);
    for (long long x : a) if (x % 2 == 0) out.push_back(x);
    for (long long x : a) if (x % 2 != 0) out.push_back(x);

    for (long long x : out) cout << x << " ";
    cout << "\n";

    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(N)`

---

## Q33. Rearrange Alternating Positive and Negative (Stable)

### Problem Statement
Given an array, rearrange it in alternating positive and negative order while preserving relative order.
If one type remains extra, append extras at the end.
Use non-negative as positive group.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
Rearranged array.

### Example
Input:
```text
8
-1 2 -3 4 5 -6 -7 8
```
Output (one valid):
```text
-1 2 -3 4 -6 5 -7 8
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
    vector<long long> a(n), pos, neg, out;
    for (auto &x : a) cin >> x;

    for (long long x : a) {
        if (x >= 0) pos.push_back(x);
        else neg.push_back(x);
    }

    bool startPos = false;
    for (long long x : a) {
        if (x >= 0) { startPos = true; break; }
        else { startPos = false; break; }
    }

    int i = 0, j = 0;
    out.reserve(n);

    while (i < (int)pos.size() && j < (int)neg.size()) {
        if (startPos) {
            out.push_back(pos[i++]);
            out.push_back(neg[j++]);
        } else {
            out.push_back(neg[j++]);
            out.push_back(pos[i++]);
        }
    }

    while (i < (int)pos.size()) out.push_back(pos[i++]);
    while (j < (int)neg.size()) out.push_back(neg[j++]);

    for (long long x : out) cout << x << " ";
    cout << "\n";

    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(N)`

---

## Q34. Build Prefix Maximum and Suffix Maximum Arrays

### Problem Statement
Given array `A` of size `N`, build:
- `prefixMax[i]` = maximum from `A[0..i]`
- `suffixMax[i]` = maximum from `A[i..N-1]`

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
- First line: prefix max array
- Second line: suffix max array

### Example
Input:
```text
6
3 1 4 2 5 0
```
Output:
```text
3 3 4 4 5 5
5 5 5 5 5 0
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
    vector<long long> a(n), pref(n), suff(n);
    for (auto &x : a) cin >> x;

    pref[0] = a[0];
    for (int i = 1; i < n; i++) pref[i] = max(pref[i - 1], a[i]);

    suff[n - 1] = a[n - 1];
    for (int i = n - 2; i >= 0; i--) suff[i] = max(suff[i + 1], a[i]);

    for (long long x : pref) cout << x << " ";
    cout << "\n";
    for (long long x : suff) cout << x << " ";
    cout << "\n";

    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(N)`

---

## Q35. Trapping Rain Water (Prefix/Suffix Max Method)

### Problem Statement
Given non-negative integer heights of bars, compute how much water can be trapped.

### Input Format
- First line: `N`
- Second line: `N` non-negative integers

### Output Format
Print trapped water units.

### Example
Input:
```text
12
0 1 0 2 1 0 1 3 2 1 2 1
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
    vector<long long> h(n);
    for (auto &x : h) cin >> x;

    if (n == 0) {
        cout << 0 << "\n";
        return 0;
    }

    vector<long long> pref(n), suff(n);
    pref[0] = h[0];
    for (int i = 1; i < n; i++) pref[i] = max(pref[i - 1], h[i]);

    suff[n - 1] = h[n - 1];
    for (int i = n - 2; i >= 0; i--) suff[i] = max(suff[i + 1], h[i]);

    long long water = 0;
    for (int i = 0; i < n; i++) {
        water += min(pref[i], suff[i]) - h[i];
    }

    cout << water << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(N)`

---

## Q36. Range Query Pattern: Maximum Element Outside [L, R]

### Problem Statement
Given array `A` and `Q` queries. For each query `[L, R]` (0-indexed), return maximum element outside that subarray.
If no elements remain outside, print `-1`.

### Input Format
- First line: `N Q`
- Second line: `N` integers
- Next `Q` lines: `L R`

### Output Format
For each query print answer on new line.

### Example
Input:
```text
7 3
5 1 9 3 7 2 8
1 3
0 6
4 5
```
Output:
```text
8
-1
9
```

### Explanation
- Query `[1,3]`: outside elements are `5,7,2,8`, max is `8`
- Query `[0,6]`: outside empty, answer `-1`
- Query `[4,5]`: outside elements are `5,1,9,3,8`, max is `9`

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, q;
    cin >> n >> q;
    vector<long long> a(n), pref(n), suff(n);
    for (auto &x : a) cin >> x;

    pref[0] = a[0];
    for (int i = 1; i < n; i++) pref[i] = max(pref[i - 1], a[i]);

    suff[n - 1] = a[n - 1];
    for (int i = n - 2; i >= 0; i--) suff[i] = max(suff[i + 1], a[i]);

    while (q--) {
        int l, r;
        cin >> l >> r;

        long long leftMax = (l > 0) ? pref[l - 1] : LLONG_MIN;
        long long rightMax = (r + 1 < n) ? suff[r + 1] : LLONG_MIN;

        long long ans = max(leftMax, rightMax);
        if (ans == LLONG_MIN) cout << -1 << "\n";
        else cout << ans << "\n";
    }

    return 0;
}
```

### Complexity
- Preprocessing: `O(N)`
- Per query: `O(1)`
- Total: `O(N + Q)`
- Space: `O(N)`

---

## Q37. Edge-Case Heavy: Maximum Subarray Sum with Indices

### Problem Statement
Given an array (possibly all negative), find:
1. Maximum subarray sum
2. Starting index
3. Ending index

If multiple subarrays have same max sum, print earliest one.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
Print: `maxSum startIndex endIndex`

### Constraints
- `1 <= N <= 10^6`
- `-10^9 <= A[i] <= 10^9`

### Example
Input:
```text
9
-2 1 -3 4 -1 2 1 -5 4
```
Output:
```text
6 3 6
```

### Edge Cases Covered
- `N = 1`
- All elements same
- All elements negative
- Large `N` (must be linear)

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
    for (auto &x : a) cin >> x;

    long long cur = a[0], best = a[0];
    int curL = 0, bestL = 0, bestR = 0;

    for (int i = 1; i < n; i++) {
        if (cur + a[i] < a[i]) {
            cur = a[i];
            curL = i;
        } else {
            cur += a[i];
        }

        if (cur > best) {
            best = cur;
            bestL = curL;
            bestR = i;
        }
    }

    cout << best << " " << bestL << " " << bestR << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)` extra

---

## Updated Revision Order (Arrays)

1. Foundation: Q1-Q9
2. Subarray and hashing/sliding core: Q10-Q18
3. Story-based PYQ style: Q19-Q21
4. Frequency and compression: Q22-Q27
5. Difference patterns: Q28-Q30
6. Rearrangement traps: Q31-Q33
7. Prefix/suffix max applications: Q34-Q36
8. Edge-case stress: Q37

## Edge-Case Drill (Apply to Every Array Question)

- `N = 1`
- All elements equal
- All elements negative (where applicable)
- Already sorted / reverse sorted
- Very large `N` (check if your approach is truly `O(N)` or `O(N log N)`)

---

## Q38. K-th Largest Element in Array (PYQ Add-On)

### Problem Statement
Given an unsorted array and integer `K`, find the `K`-th largest element.
If `K` is invalid, print `-1`.

### Input Format
- First line: `N K`
- Second line: `N` integers

### Output Format
Print the `K`-th largest element.

### Example
Input:
```text
6 2
3 2 1 5 6 4
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

    int n, k;
    cin >> n >> k;
    vector<long long> a(n);
    for (auto &x : a) cin >> x;

    if (k < 1 || k > n) {
        cout << -1 << "\n";
        return 0;
    }

    priority_queue<long long, vector<long long>, greater<long long>> minHeap;
    for (long long x : a) {
        minHeap.push(x);
        if ((int)minHeap.size() > k) minHeap.pop();
    }

    cout << minHeap.top() << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N log K)`
- Space: `O(K)`

---

## Q39. Product of Array Except Self (No Division, PYQ Add-On)

### Problem Statement
For each index `i`, return product of all elements except `A[i]`.
Do not use division.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
Print resulting array.

### Example
Input:
```text
4
1 2 3 4
```
Output:
```text
24 12 8 6
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
    vector<long long> a(n), ans(n, 1), pref(n, 1), suff(n, 1);
    for (auto &x : a) cin >> x;

    for (int i = 1; i < n; i++) pref[i] = pref[i - 1] * a[i - 1];
    for (int i = n - 2; i >= 0; i--) suff[i] = suff[i + 1] * a[i + 1];
    for (int i = 0; i < n; i++) ans[i] = pref[i] * suff[i];

    for (long long x : ans) cout << x << " ";
    cout << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(N)` (can be optimized to `O(1)` extra excluding output)

---

## Q40. Prime Index Sum (PYQ Variant)

### Problem Statement
Given an array of size `N`, find the sum of elements at prime indices (0-indexed).
Prime indices are `2, 3, 5, 7, ...`.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
- Print the prime-index sum

### Example
Input:
```text
6
2 4 6 8 10 12
```
Output:
```text
26
```
Explanation:
- Prime indices are `2, 3, 5`
- Sum = `A[2] + A[3] + A[5] = 6 + 8 + 12 = 26`

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
    for (auto &x : a) cin >> x;

    if (n <= 2) {
        cout << 0 << "\n";
        return 0;
    }

    vector<int> isPrime(n, 1);
    isPrime[0] = 0;
    if (n > 1) isPrime[1] = 0;

    for (int p = 2; 1LL * p * p < n; p++) {
        if (isPrime[p]) {
            for (int m = p * p; m < n; m += p) isPrime[m] = 0;
        }
    }

    long long ans = 0;
    for (int i = 0; i < n; i++) {
        if (isPrime[i]) ans += a[i];
    }

    cout << ans << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N log log N)`
- Space: `O(N)`

---

## Q41. Find Common Height Difference or Detect Invalid Input (PYQ Variant)

### Problem Statement
Given heights of a tree for 4 consecutive weeks:
- If any height is negative, print `Not valid inputs`
- Compute weekly differences:
  - `d1 = h2 - h1`
  - `d2 = h3 - h2`
  - `d3 = h4 - h3`
- If any two differences are the same, print that common difference
- Else print `None`

### Input Format
- Four space-separated integers

### Output Format
- `Not valid inputs` / common difference / `None`

### Example 1
Input:
```text
2 4 6 7
```
Output:
```text
2
```

### Example 2
Input:
```text
5 10 11 13
```
Output:
```text
None
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    long long h1, h2, h3, h4;
    cin >> h1 >> h2 >> h3 >> h4;

    if (h1 < 0 || h2 < 0 || h3 < 0 || h4 < 0) {
        cout << "Not valid inputs\n";
        return 0;
    }

    long long d1 = h2 - h1;
    long long d2 = h3 - h2;
    long long d3 = h4 - h3;

    if (d1 == d2 || d1 == d3) {
        cout << d1 << "\n";
    } else if (d2 == d3) {
        cout << d2 << "\n";
    } else {
        cout << "None\n";
    }

    return 0;
}
```

### Complexity
- Time: `O(1)`
- Space: `O(1)`

---

## Q42. Temperature Classifier + Average (PYQ Variant)

### Problem Statement
Given `N` daily temperature readings:
- `temp < 20` -> `COLD`
- `20 <= temp <= 30` -> `WARM`
- `temp > 30` -> `HOT`

Print total count of cold, warm, and hot days, and print average temperature.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
- First line: `coldCount warmCount hotCount`
- Second line: average temperature with 2 decimal places

### Example
Input:
```text
6
18 20 25 31 16 30
```
Output:
```text
2 3 1
23.33
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
    long long sum = 0;
    int cold = 0, warm = 0, hot = 0;

    for (int i = 0; i < n; i++) {
        cin >> a[i];
        sum += a[i];
        if (a[i] < 20) cold++;
        else if (a[i] <= 30) warm++;
        else hot++;
    }

    cout << cold << " " << warm << " " << hot << "\n";
    double avg = (n == 0) ? 0.0 : (double)sum / n;
    cout << fixed << setprecision(2) << avg << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)` extra

---

## Q43. Count Of Elements (PYQ Variant)

### Problem Statement
Given an array, count how many elements have at least one strictly smaller element
and at least one strictly greater element in the same array.

Equivalent view:
- Elements equal to global minimum do not qualify.
- Elements equal to global maximum do not qualify.
- All others qualify.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
- Print the count of qualifying elements

### Example
Input:
```text
8
1 2 2 3 3 4 4 5
```
Output:
```text
6
```
Explanation:
- `min = 1` (excluded), `max = 5` (excluded)
- qualifying elements are: `2, 2, 3, 3, 4, 4`
- total = `6`

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
    for (auto &x : a) cin >> x;

    if (n <= 2) {
        cout << 0 << "\n";
        return 0;
    }

    long long mn = *min_element(a.begin(), a.end());
    long long mx = *max_element(a.begin(), a.end());

    long long ans = 0;
    for (long long x : a) {
        if (x > mn && x < mx) ans++;
    }

    cout << ans << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)` extra
