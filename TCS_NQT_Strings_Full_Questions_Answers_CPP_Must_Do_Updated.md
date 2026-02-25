# TCS NQT Strings: Detailed Topics, Full Questions, and C++ Codes (Must-Do Updated)

Source: `/Users/rishabhdubey/Documents/prep for tcsnqt/TCS_NQT_Strings_Full_Questions_Answers_CPP.md`

This version includes only high-priority questions for 15-day TCS NQT prep.

## Included Questions

Q1, Q2, Q4, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q16, Q17, Q18, Q19, Q20, Q24, Q25, Q26, Q28, Q31, Q33, Q34, Q35, Q36, Q37, Q38, Q39, Q40, Q41, Q42

---

This document is a complete Strings pack for TCS NQT coding prep.
It covers all commonly repeated patterns from PYQ-style sets: direct and story-based.

## 1) Strings Topic Checklist (Do not skip)

1. Character basics: uppercase, lowercase, digits, symbols, ASCII operations
2. Frequency counting: fixed array (size 26/52/256), unordered_map
3. Two pointers: palindrome, reverse words, trimming
4. Sliding window: unique substring, anagram window, minimum window
5. Sorting-based string logic: anagram grouping, canonical keys
6. String matching basics: substring check and counting overlaps
7. Transformations: toggle case, Caesar cipher, compression
8. Interview-safe parsing: `getline`, whitespace-safe input, custom atoi

## 2) C++ String Toolkit (Quick reference)

```cpp
#include <bits/stdc++.h>
using namespace std;

// Safe lowercase conversion for signed-char systems
inline char toLow(char c) { return (char)tolower((unsigned char)c); }
inline char toUp(char c)  { return (char)toupper((unsigned char)c); }

bool isAlphaNum(char c) { return isalnum((unsigned char)c); }
bool isDigitChar(char c) { return isdigit((unsigned char)c); }
```

---

---

## Q1. Check if a String is Palindrome (Ignore case and non-alphanumeric)

### Problem Statement
Given a string `S`, determine whether it is a palindrome when compared case-insensitively and ignoring non-alphanumeric characters.

### Input Format
- One line containing string `S`

### Output Format
- Print `Yes` if palindrome, otherwise `No`

### Constraints
- `1 <= |S| <= 2 * 10^5`

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
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    string s;
    getline(cin, s);

    int i = 0, j = (int)s.size() - 1;
    while (i < j) {
        while (i < j && !isalnum((unsigned char)s[i])) i++;
        while (i < j && !isalnum((unsigned char)s[j])) j--;

        if (tolower((unsigned char)s[i]) != tolower((unsigned char)s[j])) {
            cout << "No\n";
            return 0;
        }
        i++, j--;
    }

    cout << "Yes\n";
    return 0;
}
```

### Complexity
- Time: `O(n)`
- Space: `O(1)`

---

## Q2. Check if Two Strings are Anagrams

### Problem Statement
Given two strings `A` and `B`, check if one can be rearranged to form the other.
Case-insensitive, spaces ignored.

### Input Format
- Line 1: `A`
- Line 2: `B`

### Output Format
- Print `Yes` or `No`

### Example
Input:
```text
Listen
Silent
```
Output:
```text
Yes
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

string normalize(const string& s) {
    string t;
    for (char c : s) {
        if (c != ' ') t.push_back((char)tolower((unsigned char)c));
    }
    return t;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    string a, b;
    getline(cin, a);
    getline(cin, b);

    a = normalize(a);
    b = normalize(b);

    if (a.size() != b.size()) {
        cout << "No\n";
        return 0;
    }

    vector<int> f(256, 0);
    for (char c : a) f[(unsigned char)c]++;
    for (char c : b) f[(unsigned char)c]--;

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
- Space: `O(1)` (fixed 256)

---

## Q4. Count Vowels, Consonants, Digits, Spaces, Special Characters

### Problem Statement
Given a string, count:
- vowels
- consonants
- digits
- spaces
- special characters

### Input Format
- One line string

### Output Format
Print 5 integers in order:
`vowels consonants digits spaces special`

### Example
Input:
```text
TCS NQT 2026!
```
Output:
```text
1 5 4 2 1
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
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    string s;
    getline(cin, s);

    int vowels = 0, consonants = 0, digits = 0, spaces = 0, special = 0;

    for (char c : s) {
        if (isalpha((unsigned char)c)) {
            if (isVowel(c)) vowels++;
            else consonants++;
        } else if (isdigit((unsigned char)c)) {
            digits++;
        } else if (c == ' ') {
            spaces++;
        } else {
            special++;
        }
    }

    cout << vowels << " " << consonants << " " << digits << " " << spaces << " " << special << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)`
- Space: `O(1)`

---

## Q7. Reverse Words in a Sentence

### Problem Statement
Given a sentence with possible extra spaces, reverse the order of words.
Keep exactly one space between words in output.

### Input Format
- One line string

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
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    string s;
    getline(cin, s);

    vector<string> words;
    string cur;
    for (char c : s) {
        if (c == ' ') {
            if (!cur.empty()) {
                words.push_back(cur);
                cur.clear();
            }
        } else {
            cur.push_back(c);
        }
    }
    if (!cur.empty()) words.push_back(cur);

    reverse(words.begin(), words.end());

    for (int i = 0; i < (int)words.size(); i++) {
        if (i) cout << ' ';
        cout << words[i];
    }
    cout << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)`
- Space: `O(n)`

---

## Q8. Check if a String is Substring of Another

### Problem Statement
Given two strings `Text` and `Pattern`, determine if `Pattern` appears in `Text`.

### Input Format
- Line 1: `Text`
- Line 2: `Pattern`

### Output Format
- Print `Yes` or `No`

### Example
Input:
```text
interviewpreparation
prepare
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

    string text, pat;
    getline(cin, text);
    getline(cin, pat);

    cout << (text.find(pat) != string::npos ? "Yes" : "No") << "\n";
    return 0;
}
```

### Complexity
- Average practical: near `O(n*m)` worst for naive find

---

## Q9. Count Number of Occurrences of a Substring (Overlapping allowed)

### Problem Statement
Given string `S` and pattern `P`, count occurrences of `P` in `S`.
Overlapping matches should also be counted.

### Input Format
- Line 1: `S`
- Line 2: `P`

### Output Format
- Integer count

### Example
Input:
```text
aaaaa
aa
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

    string s, p;
    getline(cin, s);
    getline(cin, p);

    if (p.empty()) {
        cout << 0 << "\n";
        return 0;
    }

    int count = 0;
    size_t pos = 0;
    while (true) {
        pos = s.find(p, pos);
        if (pos == string::npos) break;
        count++;
        pos += 1;
    }

    cout << count << "\n";
    return 0;
}
```

### Complexity
- Worst: `O(n*m)`

---

## Q10. Longest Common Prefix of N Strings

### Problem Statement
Given `N` strings, find the longest common prefix shared by all.
If none exists, print `-1`.

### Input Format
- First line: integer `N`
- Next `N` lines: one string each

### Output Format
- Longest common prefix or `-1`

### Example
Input:
```text
3
flower
flow
flight
```
Output:
```text
fl
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
    vector<string> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    if (n == 0) {
        cout << -1 << "\n";
        return 0;
    }

    string pref = a[0];
    for (int i = 1; i < n; i++) {
        int j = 0;
        while (j < (int)pref.size() && j < (int)a[i].size() && pref[j] == a[i][j]) j++;
        pref = pref.substr(0, j);
        if (pref.empty()) break;
    }

    if (pref.empty()) cout << -1 << "\n";
    else cout << pref << "\n";

    return 0;
}
```

### Complexity
- Time: `O(total characters)`
- Space: `O(1)` extra

---

## Q11. First Non-Repeating Character

### Problem Statement
Given a string, print the first character that appears exactly once.
If none, print `-1`.

### Input Format
- One line string

### Output Format
- Character or `-1`

### Example
Input:
```text
aabbcdeff
```
Output:
```text
c
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

    vector<int> freq(256, 0);
    for (char c : s) freq[(unsigned char)c]++;

    for (char c : s) {
        if (freq[(unsigned char)c] == 1) {
            cout << c << "\n";
            return 0;
        }
    }

    cout << -1 << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)`
- Space: `O(1)`

---

## Q12. Character Frequency (Lexicographic output)

### Problem Statement
Given a string, print frequency of each character in lexicographic order.
Ignore spaces.

### Input Format
- One line string

### Output Format
Each line: `character frequency`

### Example
Input:
```text
banana
```
Output:
```text
a 3
b 1
n 2
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

    map<char, int> freq;
    for (char c : s) {
        if (c != ' ') freq[c]++;
    }

    for (auto &p : freq) {
        cout << p.first << " " << p.second << "\n";
    }

    return 0;
}
```

### Complexity
- Time: `O(n log sigma)`
- Space: `O(sigma)`

---

## Q13. Longest Substring Without Repeating Characters

### Problem Statement
Given a string, find the length of the longest substring with all unique characters.

### Input Format
- One line string

### Output Format
- Integer length

### Example
Input:
```text
abcabcbb
```
Output:
```text
3
```

### Approach
Sliding window with last seen index.

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

    for (int r = 0; r < (int)s.size(); r++) {
        unsigned char c = (unsigned char)s[r];
        left = max(left, last[c] + 1);
        last[c] = r;
        best = max(best, r - left + 1);
    }

    cout << best << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)`
- Space: `O(1)`

---

## Q16. Caesar Cipher Encryption

### Problem Statement
Given text `S` and shift `K`, encrypt letters by shifting them by `K` positions.
Preserve case. Non-letters remain unchanged.

### Input Format
- Line 1: string `S`
- Line 2: integer `K`

### Output Format
- Encrypted string

### Example
Input:
```text
Abc-XyZ
2
```
Output:
```text
Cde-ZaB
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
    int k;
    cin >> k;

    k %= 26;

    for (char &c : s) {
        if (c >= 'a' && c <= 'z') {
            c = (char)('a' + (c - 'a' + k) % 26);
        } else if (c >= 'A' && c <= 'Z') {
            c = (char)('A' + (c - 'A' + k) % 26);
        }
    }

    cout << s << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)`
- Space: `O(1)`

---

## Q17. Check if One String is Rotation of Another

### Problem Statement
Given strings `A` and `B`, check whether `B` is a rotation of `A`.

### Input Format
- Line 1: `A`
- Line 2: `B`

### Output Format
- Print `Yes` or `No`

### Example
Input:
```text
waterbottle
erbottlewat
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

    string a, b;
    getline(cin, a);
    getline(cin, b);

    if (a.size() != b.size()) {
        cout << "No\n";
        return 0;
    }

    string doubled = a + a;
    cout << (doubled.find(b) != string::npos ? "Yes" : "No") << "\n";
    return 0;
}
```

### Complexity
- Time: practical `O(n)` average

---

## Q18. Remove Duplicate Characters (Keep First Occurrence)

### Problem Statement
Given a string, remove duplicate characters while preserving order of first occurrence.

### Input Format
- One line string

### Output Format
- Deduplicated string

### Example
Input:
```text
programming
```
Output:
```text
progamin
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

    vector<int> seen(256, 0);
    string out;

    for (char c : s) {
        unsigned char uc = (unsigned char)c;
        if (!seen[uc]) {
            seen[uc] = 1;
            out.push_back(c);
        }
    }

    cout << out << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)`
- Space: `O(1)`

---

## Q19. String Compression (Run-Length Encoding)

### Problem Statement
Given a string, compress consecutive repeating characters as `char + count`.

### Input Format
- One line string

### Output Format
- Compressed string

### Example
Input:
```text
aaabbccccd
```
Output:
```text
a3b2c4d1
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

    if (s.empty()) {
        cout << "\n";
        return 0;
    }

    string out;
    int cnt = 1;

    for (int i = 1; i <= (int)s.size(); i++) {
        if (i < (int)s.size() && s[i] == s[i - 1]) {
            cnt++;
        } else {
            out.push_back(s[i - 1]);
            out += to_string(cnt);
            cnt = 1;
        }
    }

    cout << out << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)`
- Space: `O(n)`

---

## Q20. Decode Run-Length Encoded String

### Problem Statement
Given encoded string in format like `a3b2c10`, decode it.
Counts are positive integers.

### Input Format
- One line encoded string

### Output Format
- Decoded string

### Example
Input:
```text
a3b2c4
```
Output:
```text
aaabbcccc
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

    string out;
    int n = (int)s.size();

    for (int i = 0; i < n; ) {
        char ch = s[i++];
        long long count = 0;

        while (i < n && isdigit((unsigned char)s[i])) {
            count = count * 10 + (s[i] - '0');
            i++;
        }

        if (count <= 0) {
            cout << "Invalid\n";
            return 0;
        }

        out.append((size_t)count, ch);
    }

    cout << out << "\n";
    return 0;
}
```

### Complexity
- Time: `O(decoded_length)`
- Space: `O(decoded_length)`

---

## Q24. Find All Start Indices of Anagrams of Pattern in Text

### Problem Statement
Given text `S` and pattern `P`, find all start indices where an anagram of `P` appears in `S`.

### Input Format
- Line 1: `S`
- Line 2: `P`

### Output Format
- Print indices space-separated
- If none, print `-1`

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
        for (int i = 0; i < (int)ans.size(); i++) {
            if (i) cout << ' ';
            cout << ans[i];
        }
    }
    cout << "\n";
    return 0;
}
```

### Complexity
- Time: `O(256 * n)` due vector compare, acceptable for NQT
- Space: `O(1)` fixed alphabet

---

## Q25. Custom ATOI (String to Integer)

### Problem Statement
Implement integer parsing similar to `atoi`:
- Ignore leading spaces
- Optional sign
- Parse consecutive digits
- Stop on first non-digit
- Clamp to 32-bit signed int range

### Input Format
- One line string

### Output Format
- Parsed integer

### Example
Input:
```text
   -42abc
```
Output:
```text
-42
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

    int i = 0, n = (int)s.size();
    while (i < n && s[i] == ' ') i++;

    int sign = 1;
    if (i < n && (s[i] == '+' || s[i] == '-')) {
        if (s[i] == '-') sign = -1;
        i++;
    }

    long long val = 0;
    while (i < n && isdigit((unsigned char)s[i])) {
        int d = s[i] - '0';
        val = val * 10 + d;

        long long signedVal = sign * val;
        if (signedVal > INT_MAX) {
            cout << INT_MAX << "\n";
            return 0;
        }
        if (signedVal < INT_MIN) {
            cout << INT_MIN << "\n";
            return 0;
        }
        i++;
    }

    cout << (int)(sign * val) << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)`
- Space: `O(1)`

---

## Q26. Minimum Window Substring (Advanced but important pattern)

### Problem Statement
Given strings `S` and `T`, find the smallest substring in `S` that contains all characters of `T` (including multiplicity).
If not possible, print `-1`.

### Input Format
- Line 1: `S`
- Line 2: `T`

### Output Format
- Minimum window substring or `-1`

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

    if (t.empty() || s.empty() || t.size() > s.size()) {
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

## Q28. Sort Characters by Frequency

### Problem Statement
Given a string `S`, sort characters in decreasing order of frequency.
If two characters have same frequency, sort by lexicographic order.

### Input Format
- One line: string `S`

### Output Format
- Rearranged string

### Example
Input:
```text
tree
```
Output (one valid):
```text
eert
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

    unordered_map<char, int> freq;
    for (char c : s) freq[c]++;

    vector<pair<char, int>> arr(freq.begin(), freq.end());
    sort(arr.begin(), arr.end(), [](const auto &a, const auto &b) {
        if (a.second != b.second) return a.second > b.second;
        return a.first < b.first;
    });

    string out;
    out.reserve(s.size());
    for (auto &p : arr) out.append(p.second, p.first);

    cout << out << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n + u log u)`
- Space: `O(u)`

---

## Q31. Valid Parentheses ((), {}, [])

### Problem Statement
Given a string containing only bracket characters, check if it is valid.
A valid string has correct order and matching bracket types.

### Input Format
- One line string

### Output Format
- Print `Yes` if valid else `No`

### Example
Input:
```text
{[()]}
```
Output:
```text
Yes
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

bool matches(char open, char close) {
    return (open == '(' && close == ')') ||
           (open == '{' && close == '}') ||
           (open == '[' && close == ']');
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    string s;
    getline(cin, s);

    stack<char> st;
    for (char c : s) {
        if (c == '(' || c == '{' || c == '[') st.push(c);
        else if (c == ')' || c == '}' || c == ']') {
            if (st.empty() || !matches(st.top(), c)) {
                cout << "No\n";
                return 0;
            }
            st.pop();
        }
    }

    cout << (st.empty() ? "Yes" : "No") << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)`
- Space: `O(n)`

---

## Q33. Rotation Count (Left Rotations Needed)

### Problem Statement
Given strings `A` and `B` of same length, find how many left rotations of `A` are needed to make it equal to `B`.
If impossible, print `-1`.

### Input Format
- Line 1: `A`
- Line 2: `B`

### Output Format
- Rotation count or `-1`

### Example
Input:
```text
abcde
cdeab
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

    string a, b;
    getline(cin, a);
    getline(cin, b);

    if (a.size() != b.size()) {
        cout << -1 << "\n";
        return 0;
    }

    string doubled = a + a;
    size_t pos = doubled.find(b);

    if (pos == string::npos || pos >= a.size()) cout << -1 << "\n";
    else cout << pos << "\n";

    return 0;
}
```

### Complexity
- Time: practical `O(n)` average
- Space: `O(n)`

---

## Q34. Minimum Circular Shift Distance (Left or Right)

### Problem Statement
Given strings `A` and `B` of equal length, return minimum number of circular shifts (left or right) needed to transform `A` into `B`.
If impossible, print `-1`.

### Input Format
- Line 1: `A`
- Line 2: `B`

### Output Format
- Minimum shifts or `-1`

### Example
Input:
```text
abcde
deabc
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

    string a, b;
    getline(cin, a);
    getline(cin, b);

    int n = (int)a.size();
    if (n != (int)b.size()) {
        cout << -1 << "\n";
        return 0;
    }

    string doubled = a + a;
    size_t pos = doubled.find(b);
    if (pos == string::npos || pos >= (size_t)n) {
        cout << -1 << "\n";
        return 0;
    }

    int leftShifts = (int)pos;
    int rightShifts = n - leftShifts;
    cout << min(leftShifts, rightShifts) << "\n";

    return 0;
}
```

### Complexity
- Time: practical `O(n)` average
- Space: `O(n)`

---

## Q35. Replace All Vowels with '*'

### Problem Statement
Given a string, replace all vowels (`a,e,i,o,u` in both cases) with `*`.

### Input Format
- One line string

### Output Format
- Transformed string

### Example
Input:
```text
TCS NQT Coding
```
Output:
```text
TCS NQT C*d*ng
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
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    string s;
    getline(cin, s);

    for (char &c : s) {
        if (isVowel(c)) c = '*';
    }

    cout << s << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)`
- Space: `O(1)` extra

---

## Q36. Mask Digits Except Last 4

### Problem Statement
Given a string, mask all digits except the last 4 digits in the full string.
Replace masked digits with `X`.

### Input Format
- One line string

### Output Format
- Masked string

### Example
Input:
```text
Card: 1234-5678-9012-3456
```
Output:
```text
Card: XXXX-XXXX-XXXX-3456
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

    int digitCount = 0;
    for (char c : s) if (isdigit((unsigned char)c)) digitCount++;

    int keepFrom = max(0, digitCount - 4);
    int seen = 0;

    for (char &c : s) {
        if (isdigit((unsigned char)c)) {
            if (seen < keepFrom) c = 'X';
            seen++;
        }
    }

    cout << s << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)`
- Space: `O(1)`

---

## Q37. Character Substitution Using Mapping

### Problem Statement
Given source string `S`, mapping string `FROM`, and mapping string `TO` of same length,
replace each character `FROM[i]` in `S` by `TO[i]`.
Characters not present in mapping remain unchanged.

### Input Format
- Line 1: `S`
- Line 2: `FROM`
- Line 3: `TO`

### Output Format
- Transformed string

### Example
Input:
```text
attack at dawn
atcn
ozxy
```
Output:
```text
ozzozk oz dowy
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    string s, from, to;
    getline(cin, s);
    getline(cin, from);
    getline(cin, to);

    if (from.size() != to.size()) {
        cout << "Invalid\n";
        return 0;
    }

    vector<char> mp(256, 0);
    vector<int> has(256, 0);

    for (int i = 0; i < (int)from.size(); i++) {
        unsigned char f = (unsigned char)from[i];
        unsigned char t = (unsigned char)to[i];
        mp[f] = (char)t;
        has[f] = 1;
    }

    for (char &c : s) {
        unsigned char uc = (unsigned char)c;
        if (has[uc]) c = mp[uc];
    }

    cout << s << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n + m)`
- Space: `O(1)` fixed mapping size

---

## Q38. Count Tokens with Multiple Delimiters

### Problem Statement
Given a string and a delimiter set, count how many tokens (words) are present.
A token is a maximal sequence of non-delimiter characters.

### Input Format
- Line 1: string `S`
- Line 2: delimiter string `D` (every character in `D` is considered delimiter)

### Output Format
- Integer token count

### Example
Input:
```text
tcs,nqt;coding|round
,;|
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

    string s, d;
    getline(cin, s);
    getline(cin, d);

    vector<int> isDel(256, 0);
    for (char c : d) isDel[(unsigned char)c] = 1;

    int tokens = 0;
    bool inToken = false;

    for (char c : s) {
        if (isDel[(unsigned char)c]) {
            inToken = false;
        } else {
            if (!inToken) tokens++;
            inToken = true;
        }
    }

    cout << tokens << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n + |D|)`
- Space: `O(1)`

---

## Q39. Tokenize and Print Tokens (Multiple Delimiters)

### Problem Statement
Given a string and delimiter set, split and print all tokens in separate lines.
If no token exists, print `-1`.

### Input Format
- Line 1: string `S`
- Line 2: delimiter set `D`

### Output Format
- One token per line or `-1`

### Example
Input:
```text
hello,,tcs;nqt|prep
,;|
```
Output:
```text
hello
tcs
nqt
prep
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    string s, d;
    getline(cin, s);
    getline(cin, d);

    vector<int> isDel(256, 0);
    for (char c : d) isDel[(unsigned char)c] = 1;

    vector<string> tokens;
    string cur;

    for (char c : s) {
        if (isDel[(unsigned char)c]) {
            if (!cur.empty()) {
                tokens.push_back(cur);
                cur.clear();
            }
        } else {
            cur.push_back(c);
        }
    }
    if (!cur.empty()) tokens.push_back(cur);

    if (tokens.empty()) {
        cout << -1 << "\n";
        return 0;
    }

    for (const string &t : tokens) cout << t << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n + |D|)`
- Space: `O(n)`

---

## Q40. Sum of Numeric Tokens from Mixed Delimiter String

### Problem Statement
Given a string containing integers separated by mixed delimiters, extract all integer tokens and print their sum.
Delimiters and non-digit separators can be mixed (`,`, `;`, `|`, space, etc.).

### Input Format
- One line string

### Output Format
- Sum of all integer tokens

### Example
Input:
```text
10,20;5|100 7
```
Output:
```text
142
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

    long long sum = 0;
    long long cur = 0;
    bool inNumber = false;

    for (char c : s) {
        if (isdigit((unsigned char)c)) {
            cur = cur * 10 + (c - '0');
            inNumber = true;
        } else {
            if (inNumber) {
                sum += cur;
                cur = 0;
                inNumber = false;
            }
        }
    }
    if (inNumber) sum += cur;

    cout << sum << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)`
- Space: `O(1)`

---

## Updated String Revision Order

1. Foundation: Q1-Q12
2. Core interview patterns: Q13-Q20
3. Story + parsing: Q21-Q27
4. Custom sort + stack + rotations: Q28-Q34
5. Substitution + tokenization: Q35-Q40

---

## Q41. Format Camel Case String (PYQ Add-On)

### Problem Statement
Given a camelCase string, convert it into space-separated lowercase words.

### Input Format
- One line string `s` in camelCase

### Output Format
- Space-separated lowercase words

### Example
Input:
```text
findLongestSubarrayNow
```
Output:
```text
find longest subarray now
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

    string out;
    for (int i = 0; i < (int)s.size(); i++) {
        unsigned char c = (unsigned char)s[i];
        if (isupper(c) && i > 0) out.push_back(' ');
        out.push_back((char)tolower(c));
    }

    cout << out << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)`
- Space: `O(n)`

---

## Q42. Roman Numeral to Integer (PYQ Add-On)

### Problem Statement
Convert a Roman numeral string to integer.

### Input Format
- One line: Roman string `s` (`I,V,X,L,C,D,M`)

### Output Format
- Integer value

### Example
Input:
```text
MCMXCIV
```
Output:
```text
1994
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    string s;
    cin >> s;

    unordered_map<char, int> val = {
        {'I', 1}, {'V', 5}, {'X', 10}, {'L', 50},
        {'C', 100}, {'D', 500}, {'M', 1000}
    };

    int ans = 0;
    for (int i = 0; i < (int)s.size(); i++) {
        int cur = val[s[i]];
        int nxt = (i + 1 < (int)s.size()) ? val[s[i + 1]] : 0;
        if (cur < nxt) ans -= cur;
        else ans += cur;
    }

    cout << ans << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)`
- Space: `O(1)`
