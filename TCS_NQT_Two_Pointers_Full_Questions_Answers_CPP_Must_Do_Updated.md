# TCS NQT Two Pointers: Full Questions and C++ Solutions (Must-Do Updated)

Source: `/Users/rishabhdubey/Documents/prep for tcsnqt/TCS_NQT_Two_Pointers_Full_Questions_Answers_CPP.md`

This version includes only high-priority questions for 15-day TCS NQT prep.

## Included Questions

Q1, Q2, Q3, Q4, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q14, Q15, Q16, Q17, Q18, Q19, Q20, Q21, Q23, Q25, Q26, Q29, Q31, Q39, Q40

---

This is a complete Two Pointers preparation document for TCS NQT coding rounds.
It covers array, string, sorting + pointers, and fast-slow pointer patterns.

## 1) Two Pointers Checklist (Complete)

1. Opposite-end pointers (`l`, `r`)
2. Same-direction slow-fast pointers
3. Sorted array pair/triplet/quadruplet patterns
4. In-place compression/removal patterns
5. Partition/rearrangement patterns
6. String pointer problems (palindrome, backspace, vowels)
7. De-dup and canonical output with pointers
8. Linked-list fast-slow (cycle/middle/palindrome)
9. Pointer + greedy story-based problems
10. Edge-case handling (`empty`, duplicates, overflow)

## 2) Core Pointer Templates

### Opposite Ends (Sorted or symmetric scan)
```cpp
int l = 0, r = n - 1;
while (l < r) {
    // use a[l], a[r]
    if (condition) l++;
    else r--;
}
```

### Slow-Fast In-Place Overwrite
```cpp
int slow = 0;
for (int fast = 0; fast < n; fast++) {
    if (keep(a[fast])) a[slow++] = a[fast];
}
// valid length = slow
```

### Fast-Slow Cycle Detection (Floyd)
```cpp
slow = head; fast = head;
while (fast && fast->next) {
    slow = slow->next;
    fast = fast->next->next;
    if (slow == fast) { /* cycle */ }
}
```

---

---

## Q1. Two Sum in Sorted Array (Indices)

### Problem Statement
Given a sorted array and target `T`, find 1-based indices of two numbers such that sum is `T`.
If no such pair exists, print `-1`.

### Input Format
- `N T`
- `N` sorted integers

### Output Format
- `i j` (1-based) or `-1`

### Example
Input:
```text
5 9
2 3 4 5 7
```
Output:
```text
1 5
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

    int l = 0, r = n - 1;
    while (l < r) {
        long long s = a[l] + a[r];
        if (s == t) {
            cout << (l + 1) << " " << (r + 1) << "\n";
            return 0;
        }
        if (s < t) l++;
        else r--;
    }

    cout << -1 << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)` extra

---

## Q2. Count Pairs with Given Sum in Sorted Array

### Problem Statement
Count total index pairs `(i, j)` with `i < j` and `A[i] + A[j] = K`.
Array is sorted and can contain duplicates.

### Input Format
- `N K`
- `N` sorted integers

### Output Format
- Count of valid pairs

### Example
Input:
```text
6 8
1 2 3 5 5 6
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
    long long k;
    cin >> n >> k;
    vector<long long> a(n);
    for (auto &x : a) cin >> x;

    long long ans = 0;
    int l = 0, r = n - 1;

    while (l < r) {
        long long s = a[l] + a[r];
        if (s < k) l++;
        else if (s > k) r--;
        else {
            if (a[l] == a[r]) {
                long long m = r - l + 1;
                ans += m * (m - 1) / 2;
                break;
            }

            long long leftVal = a[l], rightVal = a[r];
            long long c1 = 0, c2 = 0;
            while (l <= r && a[l] == leftVal) { c1++; l++; }
            while (r >= l && a[r] == rightVal) { c2++; r--; }
            ans += c1 * c2;
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

## Q3. Pair with Sum Closest to Target

### Problem Statement
Given sorted array and target `T`, find pair whose sum is closest to `T`.
Print the pair values.

### Input Format
- `N T`
- `N` sorted integers

### Output Format
- `x y` (pair values)

### Example
Input:
```text
6 10
1 3 4 7 10 12
```
Output:
```text
3 7
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

    int l = 0, r = n - 1;
    long long bestDiff = LLONG_MAX;
    long long ansL = a[0], ansR = a[n - 1];

    while (l < r) {
        long long s = a[l] + a[r];
        long long d = llabs(s - t);

        if (d < bestDiff) {
            bestDiff = d;
            ansL = a[l];
            ansR = a[r];
        }

        if (s < t) l++;
        else r--;
    }

    cout << ansL << " " << ansR << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q4. Remove Duplicates from Sorted Array

### Problem Statement
Given sorted array, remove duplicates in-place such that each element appears once.
Print new length and compacted prefix.

### Input Format
- `N`
- `N` sorted integers

### Output Format
- First line: new length
- Second line: unique elements

### Example
Input:
```text
7
1 1 2 2 3 4 4
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
    int n;
    cin >> n;
    vector<int> a(n);
    for (auto &x : a) cin >> x;

    if (n == 0) {
        cout << 0 << "\n\n";
        return 0;
    }

    int slow = 1;
    for (int fast = 1; fast < n; fast++) {
        if (a[fast] != a[slow - 1]) a[slow++] = a[fast];
    }

    cout << slow << "\n";
    for (int i = 0; i < slow; i++) cout << a[i] << " ";
    cout << "\n";

    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q6. Move All Zeros to End (Stable)

### Problem Statement
Move all zeros to end while maintaining order of non-zero elements.

### Input Format
- `N`
- `N` integers

### Output Format
- Updated array

### Example
Input:
```text
7
0 1 0 3 12 0 5
```
Output:
```text
1 3 12 5 0 0 0
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

    int slow = 0;
    for (int fast = 0; fast < n; fast++) {
        if (a[fast] != 0) swap(a[slow++], a[fast]);
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

## Q7. Partition Negatives and Non-Negatives

### Problem Statement
Rearrange array so all negative numbers come before non-negative numbers.
Order inside groups is not required.

### Input Format
- `N`
- `N` integers

### Output Format
- Rearranged array

### Example
Input:
```text
6
-1 3 -2 4 0 -5
```
Output (one valid):
```text
-1 -5 -2 4 0 3
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

    int l = 0, r = n - 1;
    while (l < r) {
        while (l < n && a[l] < 0) l++;
        while (r >= 0 && a[r] >= 0) r--;
        if (l < r) swap(a[l], a[r]);
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

## Q8. Sort Colors (0,1,2)

### Problem Statement
Given array containing only `0`, `1`, `2`, sort in one pass.

### Input Format
- `N`
- `N` integers

### Output Format
- Sorted array

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

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (auto &x : a) cin >> x;

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

## Q9. Squares of Sorted Array

### Problem Statement
Given sorted array (may include negatives), return sorted squares.

### Input Format
- `N`
- `N` sorted integers

### Output Format
- Sorted squared array

### Example
Input:
```text
5
-4 -1 0 3 10
```
Output:
```text
0 1 9 16 100
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<long long> a(n), ans(n);
    for (auto &x : a) cin >> x;

    int l = 0, r = n - 1, p = n - 1;
    while (l <= r) {
        long long x = a[l] * a[l], y = a[r] * a[r];
        if (x > y) {
            ans[p--] = x;
            l++;
        } else {
            ans[p--] = y;
            r--;
        }
    }

    for (auto x : ans) cout << x << " ";
    cout << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(N)`

---

## Q10. Reverse a String In-Place

### Problem Statement
Reverse string in-place using two pointers.

### Input Format
- One string (no spaces)

### Output Format
- Reversed string

### Example
Input:
```text
coding
```
Output:
```text
gnidoc
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin >> s;

    int l = 0, r = (int)s.size() - 1;
    while (l < r) swap(s[l++], s[r--]);

    cout << s << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)` extra

---

## Q11. Reverse Only Vowels in String

### Problem Statement
Reverse only vowels in string, keep all other characters fixed.

### Input Format
- One string (no spaces)

### Output Format
- Transformed string

### Example
Input:
```text
leetcode
```
Output:
```text
leotcede
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

bool isVowel(char c) {
    c = (char)tolower((unsigned char)c);
    return c=='a'||c=='e'||c=='i'||c=='o'||c=='u';
}

int main() {
    string s;
    cin >> s;

    int l = 0, r = (int)s.size() - 1;
    while (l < r) {
        while (l < r && !isVowel(s[l])) l++;
        while (l < r && !isVowel(s[r])) r--;
        if (l < r) swap(s[l++], s[r--]);
    }

    cout << s << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q12. Valid Palindrome (Ignore Non-Alphanumeric)

### Problem Statement
Given string, check if palindrome ignoring non-alphanumeric characters and case.

### Input Format
- Full line string

### Output Format
- `Yes` / `No`

### Example
Input:
```text
A man, a plan, a canal: Panama
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
    string s;
    getline(cin, s);

    int l = 0, r = (int)s.size() - 1;
    while (l < r) {
        while (l < r && !isalnum((unsigned char)s[l])) l++;
        while (l < r && !isalnum((unsigned char)s[r])) r--;

        if (tolower((unsigned char)s[l]) != tolower((unsigned char)s[r])) {
            cout << "No\n";
            return 0;
        }
        l++, r--;
    }

    cout << "Yes\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q14. Merge Two Sorted Arrays (Classic)

### Problem Statement
Given sorted arrays `A` and `B`, print merged sorted array.

### Input Format
- `N M`
- `N` integers
- `M` integers

### Output Format
- merged sorted sequence

### Example
Input:
```text
4 3
1 3 5 7
2 4 6
```
Output:
```text
1 2 3 4 5 6 7
```

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

    int i = 0, j = 0;
    vector<int> out;
    out.reserve(n + m);

    while (i < n && j < m) {
        if (a[i] <= b[j]) out.push_back(a[i++]);
        else out.push_back(b[j++]);
    }
    while (i < n) out.push_back(a[i++]);
    while (j < m) out.push_back(b[j++]);

    for (int x : out) cout << x << " ";
    cout << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N+M)`
- Space: `O(N+M)`

---

## Q15. Merge Sorted Array In-Place (A has extra space)

### Problem Statement
Array `A` has size `N+M`, first `N` elements valid and sorted.
Array `B` has `M` sorted elements. Merge into `A` in-place.

### Input Format
- `N M`
- `N` values for A valid prefix
- `M` values for B

### Output Format
- merged `A`

### Example
Input:
```text
3 3
1 2 4
2 5 6
```
Output:
```text
1 2 2 4 5 6
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<int> a(n + m), b(m);
    for (int i = 0; i < n; i++) cin >> a[i];
    for (int i = 0; i < m; i++) cin >> b[i];

    int i = n - 1, j = m - 1, k = n + m - 1;
    while (i >= 0 && j >= 0) {
        if (a[i] > b[j]) a[k--] = a[i--];
        else a[k--] = b[j--];
    }
    while (j >= 0) a[k--] = b[j--];

    for (int x : a) cout << x << " ";
    cout << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N+M)`
- Space: `O(1)` extra

---

## Q16. Intersection of Two Sorted Arrays with Multiplicity

### Problem Statement
Given two sorted arrays, print common elements considering duplicates.

### Input Format
- `N M`
- `N` sorted integers
- `M` sorted integers

### Output Format
- intersection values (or `-1`)

### Example
Input:
```text
5 5
1 2 2 3 4
2 2 3 5 6
```
Output:
```text
2 2 3
```

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

    int i = 0, j = 0;
    vector<int> out;

    while (i < n && j < m) {
        if (a[i] == b[j]) {
            out.push_back(a[i]);
            i++, j++;
        } else if (a[i] < b[j]) i++;
        else j++;
    }

    if (out.empty()) cout << -1;
    else for (int x : out) cout << x << " ";
    cout << "\n";

    return 0;
}
```

### Complexity
- Time: `O(N+M)`
- Space: `O(min(N,M))`

---

## Q17. Check if S is Subsequence of T

### Problem Statement
Given strings `S` and `T`, check whether `S` is a subsequence of `T`.

### Input Format
- `S`
- `T`

### Output Format
- `Yes` / `No`

### Example
Input:
```text
ace
abcde
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
    string s, t;
    cin >> s >> t;

    int i = 0, j = 0;
    while (i < (int)s.size() && j < (int)t.size()) {
        if (s[i] == t[j]) i++;
        j++;
    }

    cout << (i == (int)s.size() ? "Yes" : "No") << "\n";
    return 0;
}
```

### Complexity
- Time: `O(|T|)`
- Space: `O(1)`

---

## Q18. Backspace String Compare

### Problem Statement
Given strings `A` and `B` where `#` means backspace, check if both become equal.

### Input Format
- `A`
- `B`

### Output Format
- `Yes` / `No`

### Example
Input:
```text
ab#c
ad#c
```
Output:
```text
Yes
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int nextValid(const string &s, int i) {
    int skip = 0;
    while (i >= 0) {
        if (s[i] == '#') { skip++; i--; }
        else if (skip > 0) { skip--; i--; }
        else return i;
    }
    return -1;
}

int main() {
    string a, b;
    cin >> a >> b;

    int i = (int)a.size() - 1, j = (int)b.size() - 1;
    while (i >= 0 || j >= 0) {
        i = nextValid(a, i);
        j = nextValid(b, j);

        if (i < 0 || j < 0) {
            cout << (i == j ? "Yes" : "No") << "\n";
            return 0;
        }

        if (a[i] != b[j]) {
            cout << "No\n";
            return 0;
        }

        i--, j--;
    }

    cout << "Yes\n";
    return 0;
}
```

### Complexity
- Time: `O(|A|+|B|)`
- Space: `O(1)`

---

## Q19. Container With Most Water

### Problem Statement
Given heights array, choose two lines that with x-axis forms container storing maximum water.

### Input Format
- `N`
- `N` non-negative integers

### Output Format
- Maximum area

### Example
Input:
```text
9
1 8 6 2 5 4 8 3 7
```
Output:
```text
49
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<long long> h(n);
    for (auto &x : h) cin >> x;

    int l = 0, r = n - 1;
    long long best = 0;

    while (l < r) {
        best = max(best, (long long)(r - l) * min(h[l], h[r]));
        if (h[l] < h[r]) l++;
        else r--;
    }

    cout << best << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q20. Trapping Rain Water

### Problem Statement
Given elevation map, compute trapped rainwater.

### Input Format
- `N`
- `N` non-negative integers

### Output Format
- Water units

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
    int n;
    cin >> n;
    vector<int> h(n);
    for (auto &x : h) cin >> x;

    int l = 0, r = n - 1;
    int leftMax = 0, rightMax = 0;
    long long water = 0;

    while (l <= r) {
        if (h[l] <= h[r]) {
            if (h[l] >= leftMax) leftMax = h[l];
            else water += leftMax - h[l];
            l++;
        } else {
            if (h[r] >= rightMax) rightMax = h[r];
            else water += rightMax - h[r];
            r--;
        }
    }

    cout << water << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q21. 3Sum (Unique Triplets Summing to 0)

### Problem Statement
Given array, print all unique triplets `(a,b,c)` such that `a+b+c=0`.

### Input Format
- `N`
- `N` integers

### Output Format
- One triplet per line (or `-1`)

### Example
Input:
```text
6
-1 0 1 2 -1 -4
```
Output (one valid):
```text
-1 -1 2
-1 0 1
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

    sort(a.begin(), a.end());
    vector<array<int,3>> out;

    for (int i = 0; i < n; i++) {
        if (i > 0 && a[i] == a[i - 1]) continue;

        int l = i + 1, r = n - 1;
        while (l < r) {
            long long s = 1LL * a[i] + a[l] + a[r];
            if (s < 0) l++;
            else if (s > 0) r--;
            else {
                out.push_back({a[i], a[l], a[r]});
                l++, r--;
                while (l < r && a[l] == a[l - 1]) l++;
                while (l < r && a[r] == a[r + 1]) r--;
            }
        }
    }

    if (out.empty()) {
        cout << -1 << "\n";
    } else {
        for (auto &t : out) cout << t[0] << " " << t[1] << " " << t[2] << "\n";
    }

    return 0;
}
```

### Complexity
- Time: `O(N^2)`
- Space: `O(1)` extra (excluding output)

---

## Q23. 4Sum (Unique Quadruplets)

### Problem Statement
Given array and target `T`, print all unique quadruplets with sum `T`.

### Input Format
- `N T`
- `N` integers

### Output Format
- One quadruplet per line or `-1`

### Example
Input:
```text
6 0
1 0 -1 0 -2 2
```
Output (one valid):
```text
-2 -1 1 2
-2 0 0 2
-1 0 0 1
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    long long target;
    cin >> n >> target;
    vector<int> a(n);
    for (auto &x : a) cin >> x;

    sort(a.begin(), a.end());
    vector<array<int,4>> out;

    for (int i = 0; i < n; i++) {
        if (i > 0 && a[i] == a[i - 1]) continue;
        for (int j = i + 1; j < n; j++) {
            if (j > i + 1 && a[j] == a[j - 1]) continue;

            int l = j + 1, r = n - 1;
            while (l < r) {
                long long s = 1LL * a[i] + a[j] + a[l] + a[r];
                if (s < target) l++;
                else if (s > target) r--;
                else {
                    out.push_back({a[i], a[j], a[l], a[r]});
                    l++, r--;
                    while (l < r && a[l] == a[l - 1]) l++;
                    while (l < r && a[r] == a[r + 1]) r--;
                }
            }
        }
    }

    if (out.empty()) cout << -1 << "\n";
    else {
        for (auto &q : out) cout << q[0] << " " << q[1] << " " << q[2] << " " << q[3] << "\n";
    }

    return 0;
}
```

### Complexity
- Time: `O(N^3)`
- Space: `O(1)` extra (excluding output)

---

## Q25. Pair with Given Difference in Sorted Array

### Problem Statement
Given sorted array and `K>=0`, check if there exists pair `(i,j)` (`i<j`) such that `A[j]-A[i]=K`.

### Input Format
- `N K`
- `N` sorted integers

### Output Format
- `Yes` / `No`

### Example
Input:
```text
6 3
1 3 4 6 8 10
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
    int n;
    long long k;
    cin >> n >> k;
    vector<long long> a(n);
    for (auto &x : a) cin >> x;

    int i = 0, j = 1;
    while (i < n && j < n) {
        if (i == j) { j++; continue; }

        long long d = a[j] - a[i];
        if (d == k) {
            cout << "Yes\n";
            return 0;
        }

        if (d < k) j++;
        else i++;
    }

    cout << "No\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q26. Minimum Difference Pair from Two Sorted Arrays

### Problem Statement
Given two sorted arrays, find minimum absolute difference between any pair `(a, b)`.

### Input Format
- `N M`
- `N` sorted integers
- `M` sorted integers

### Output Format
- Minimum absolute difference

### Example
Input:
```text
4 4
1 4 10 20
5 8 15 30
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
    int n, m;
    cin >> n >> m;
    vector<long long> a(n), b(m);
    for (auto &x : a) cin >> x;
    for (auto &x : b) cin >> x;

    int i = 0, j = 0;
    long long best = LLONG_MAX;

    while (i < n && j < m) {
        best = min(best, llabs(a[i] - b[j]));
        if (a[i] < b[j]) i++;
        else j++;
    }

    cout << best << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N+M)`
- Space: `O(1)`

---

## Q29. Remove Element In-Place

### Problem Statement
Given array and value `x`, remove all occurrences of `x` in-place.
Print new length and valid prefix.

### Input Format
- `N x`
- `N` integers

### Output Format
- First line: new length
- Second line: updated prefix

### Example
Input:
```text
6 3
3 2 2 3 4 3
```
Output:
```text
3
2 2 4
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, x;
    cin >> n >> x;
    vector<int> a(n);
    for (auto &v : a) cin >> v;

    int slow = 0;
    for (int fast = 0; fast < n; fast++) {
        if (a[fast] != x) a[slow++] = a[fast];
    }

    cout << slow << "\n";
    for (int i = 0; i < slow; i++) cout << a[i] << " ";
    cout << "\n";

    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## Q31. Reverse Words in a Sentence

### Problem Statement
Given sentence with extra spaces, reverse order of words and keep single spaces.

### Input Format
- One full line

### Output Format
- Reversed words sentence

### Example
Input:
```text
  i   love   coding  
```
Output:
```text
coding love i
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    getline(cin, s);

    vector<string> words;
    int i = 0, n = (int)s.size();

    while (i < n) {
        while (i < n && s[i] == ' ') i++;
        if (i >= n) break;

        int j = i;
        while (j < n && s[j] != ' ') j++;
        words.push_back(s.substr(i, j - i));
        i = j;
    }

    for (int k = (int)words.size() - 1; k >= 0; k--) {
        cout << words[k];
        if (k) cout << " ";
    }
    cout << "\n";

    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(N)`

---

## Q39. Story-Based: Rescue Boats (Min Boats)

### Problem Statement
Each boat can carry at most 2 people and total weight <= `limit`.
Find minimum number of boats.

### Input Format
- `N limit`
- `N` weights

### Output Format
- Minimum boats

### Example
Input:
```text
4 5
1 2 2 3
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
    long long limit;
    cin >> n >> limit;

    vector<long long> w(n);
    for (auto &x : w) cin >> x;
    sort(w.begin(), w.end());

    int l = 0, r = n - 1;
    int boats = 0;

    while (l <= r) {
        if (w[l] + w[r] <= limit) l++;
        r--;
        boats++;
    }

    cout << boats << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N log N)`
- Space: `O(1)` extra

---

## Q40. Story-Based: Max Valid Pairings Under Capacity

### Problem Statement
Given sorted skill levels and max allowed difference `D`, pair people (`i,j`) at most once each with `|a[i]-a[j]|<=D`.
Maximize number of pairs.

### Input Format
- `N D`
- `N` sorted integers

### Output Format
- Maximum number of pairs

### Example
Input:
```text
7 2
1 2 3 5 6 8 9
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
    long long d;
    cin >> n >> d;

    vector<long long> a(n);
    for (auto &x : a) cin >> x;

    int i = 0;
    int pairs = 0;

    while (i + 1 < n) {
        if (a[i + 1] - a[i] <= d) {
            pairs++;
            i += 2;
        } else {
            i++;
        }
    }

    cout << pairs << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)`

---

## 3) Suggested Two Pointers Revision Order

1. Basic opposite pointers: `Q1-Q3`, `Q19-Q20`
2. In-place slow-fast: `Q4-Q9`, `Q29-Q31`
3. Sorted multi-sum family: `Q21-Q24`
4. String pointer family: `Q10-Q13`, `Q18`
5. Linked-list fast-slow family: `Q32-Q38`
6. Story-based optimization: `Q39-Q40`

## 4) Edge-Case Checklist

- Empty input / size 1
- All duplicates
- No answer exists
- Multiple valid outputs (avoid duplicates in output)
- Negative numbers for sum-based problems
- Overflow in `sum` (`use long long`)
- For linked list: `N=0`, `N=1`, cycle at head

## 5) Most Important NQT Two Pointers Questions

1. Pair sum/closest (`Q1-Q3`)
2. In-place dedup/move patterns (`Q4-Q6`, `Q29`)
3. 3sum family (`Q21-Q24`)
4. String palindrome/subsequence/backspace (`Q12`, `Q13`, `Q17`, `Q18`)
5. Linked-list fast-slow (`Q32-Q38`)
6. Story-based greedy-pointer (`Q39`, `Q40`)
