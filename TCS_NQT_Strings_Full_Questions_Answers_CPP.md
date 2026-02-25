# TCS NQT Strings: Detailed Topics, Full Questions, and C++ Codes

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

## Q3. Pangram Check

### Problem Statement
Given a sentence, check whether it contains every English alphabet at least once.

### Input Format
- One line containing string

### Output Format
- Print `Yes` if pangram else `No`

### Example
Input:
```text
The quick brown fox jumps over the lazy dog
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

    vector<int> seen(26, 0);
    for (char c : s) {
        if (isalpha((unsigned char)c)) {
            seen[tolower((unsigned char)c) - 'a'] = 1;
        }
    }

    for (int x : seen) {
        if (!x) {
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

## Q5. Toggle Case (Lower to Upper and Upper to Lower)

### Problem Statement
Given a string, toggle each alphabet character's case.

### Input Format
- One line string

### Output Format
- Transformed string

### Example
Input:
```text
AbCdeF12
```
Output:
```text
aBcDEf12
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

    for (char &c : s) {
        if (islower((unsigned char)c)) c = (char)toupper((unsigned char)c);
        else if (isupper((unsigned char)c)) c = (char)tolower((unsigned char)c);
    }

    cout << s << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)`
- Space: `O(1)` extra

---

## Q6. Remove Spaces from a String

### Problem Statement
Given a string, remove all space characters.

### Input Format
- One line string

### Output Format
- String after removing spaces

### Example
Input:
```text
prep for tcs nqt
```
Output:
```text
prepfortcsnqt
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
    out.reserve(s.size());

    for (char c : s) if (c != ' ') out.push_back(c);

    cout << out << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)`
- Space: `O(n)`

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

## Q14. Longest Palindromic Substring

### Problem Statement
Given a string `S`, print the longest palindromic substring.
If multiple answers have same max length, print any one.

### Input Format
- One line string

### Output Format
- Longest palindromic substring

### Example
Input:
```text
babad
```
Output:
```text
bab
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

pair<int, int> expandCenter(const string& s, int l, int r) {
    while (l >= 0 && r < (int)s.size() && s[l] == s[r]) {
        l--;
        r++;
    }
    return {l + 1, r - 1};
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    string s;
    getline(cin, s);

    if (s.empty()) {
        cout << "\n";
        return 0;
    }

    int bestL = 0, bestR = 0;

    for (int i = 0; i < (int)s.size(); i++) {
        auto p1 = expandCenter(s, i, i);
        auto p2 = expandCenter(s, i, i + 1);

        if (p1.second - p1.first > bestR - bestL) {
            bestL = p1.first;
            bestR = p1.second;
        }
        if (p2.second - p2.first > bestR - bestL) {
            bestL = p2.first;
            bestR = p2.second;
        }
    }

    cout << s.substr(bestL, bestR - bestL + 1) << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n^2)`
- Space: `O(1)`

---

## Q15. Count Palindromic Substrings

### Problem Statement
Given a string, count all palindromic substrings.
Single-character substrings are palindromes.

### Input Format
- One line string

### Output Format
- Integer count

### Example
Input:
```text
aaa
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

    string s;
    getline(cin, s);

    long long ans = 0;
    int n = (int)s.size();

    for (int center = 0; center < n; center++) {
        int l = center, r = center;
        while (l >= 0 && r < n && s[l] == s[r]) {
            ans++;
            l--, r++;
        }

        l = center, r = center + 1;
        while (l >= 0 && r < n && s[l] == s[r]) {
            ans++;
            l--, r++;
        }
    }

    cout << ans << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n^2)`
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

## Q21. Story-Based: Word is the Key (Check if a word is C/C++ keyword)

### Problem Statement
Given a word, determine whether it is a reserved keyword in C/C++.
Print `Keyword` or `Not Keyword`.

### Input Format
- One word

### Output Format
- `Keyword` or `Not Keyword`

### Example
Input:
```text
while
```
Output:
```text
Keyword
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    string w;
    cin >> w;

    static const unordered_set<string> kw = {
        "alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit",
        "atomic_noexcept","auto","bitand","bitor","bool","break","case","catch",
        "char","char8_t","char16_t","char32_t","class","compl","concept","const",
        "consteval","constexpr","constinit","const_cast","continue","co_await",
        "co_return","co_yield","decltype","default","delete","do","double","dynamic_cast",
        "else","enum","explicit","export","extern","false","float","for","friend",
        "goto","if","inline","int","long","mutable","namespace","new","noexcept",
        "not","not_eq","nullptr","operator","or","or_eq","private","protected","public",
        "register","reinterpret_cast","requires","return","short","signed","sizeof","static",
        "static_assert","static_cast","struct","switch","template","this","thread_local",
        "throw","true","try","typedef","typeid","typename","union","unsigned","using",
        "virtual","void","volatile","wchar_t","while","xor","xor_eq"
    };

    cout << (kw.count(w) ? "Keyword" : "Not Keyword") << "\n";
    return 0;
}
```

### Complexity
- Time: `O(1)` average
- Space: `O(number_of_keywords)`

---

## Q22. Count Words in a Sentence

### Problem Statement
Given a sentence, count number of words.
A word is a maximal sequence of non-space characters.

### Input Format
- One line string

### Output Format
- Integer count

### Example
Input:
```text
  tcs   nqt coding round  
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

    string s;
    getline(cin, s);

    int words = 0;
    bool inWord = false;

    for (char c : s) {
        if (c == ' ') {
            inWord = false;
        } else {
            if (!inWord) words++;
            inWord = true;
        }
    }

    cout << words << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)`
- Space: `O(1)`

---

## Q23. Largest Word in a Sentence

### Problem Statement
Given a sentence, find the longest word and its length.
If tie occurs, print first occurring longest word.

### Input Format
- One line sentence

### Output Format
- Line 1: longest word
- Line 2: length

### Example
Input:
```text
practice makes coding better
```
Output:
```text
practice
8
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

    string best = "", cur = "";
    for (int i = 0; i <= (int)s.size(); i++) {
        if (i < (int)s.size() && s[i] != ' ') {
            cur.push_back(s[i]);
        } else {
            if ((int)cur.size() > (int)best.size()) best = cur;
            cur.clear();
        }
    }

    cout << best << "\n";
    cout << best.size() << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)`
- Space: `O(n)`

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

## Q27. Group Anagrams (Advanced organization pattern)

### Problem Statement
Given `N` strings, group anagrams together.
Print each group in one line.

### Input Format
- First line: `N`
- Next `N` lines: strings

### Output Format
- Each line: strings belonging to one anagram group

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
Output (one valid format):
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

    unordered_map<string, vector<string>> groups;
    vector<string> order;

    for (const string &s : arr) {
        string key = s;
        sort(key.begin(), key.end());
        if (!groups.count(key)) order.push_back(key);
        groups[key].push_back(s);
    }

    for (const string &key : order) {
        for (int i = 0; i < (int)groups[key].size(); i++) {
            if (i) cout << ' ';
            cout << groups[key][i];
        }
        cout << "\n";
    }

    return 0;
}
```

### Complexity
- Time: `O(n * k log k)` where `k` is average word length
- Space: `O(n * k)`

---

## 3) Story-Based String Patterns You Must Practice

1. Caesar cipher (security/encryption story)
2. Keyword check (compiler/token story)
3. Substring search/count (document scan/log analysis story)
4. Anagram window (plagiarism/code match story)
5. Minimum window (inventory/code coverage story)

## 4) Final String Interview Revision Checklist

1. Can you write palindrome/anagram/pangram in under 5 minutes each?
2. Can you decide quickly: hashmap vs fixed array frequency?
3. Can you write sliding window without off-by-one bugs?
4. Can you handle `getline` and spaces correctly?
5. Can you test edge cases: empty input, one char, all same chars, no match?

## 5) Suggested Practice Order (Strings)

1. Q1-Q6 (foundation)
2. Q7-Q12 (intermediate parsing + counting)
3. Q13-Q18 (core interview patterns)
4. Q19-Q23 (story + transformation problems)
5. Q24-Q27 (advanced but high return)


---

## Added Advanced String Pack (Your Requested High-Level Patterns)

This section specifically covers:
1. Custom sorting rules on strings
2. Valid parentheses (string + stack)
3. Rotation count and shift distance
4. Replace/substitute mapping problems
5. Tokenization with multiple delimiters

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

## Q29. Sort Words by Length

### Problem Statement
Given a sentence, sort its words by increasing length.
If lengths tie, preserve original order (stable behavior).

### Input Format
- One line sentence

### Output Format
- Sorted words in one line

### Example
Input:
```text
tcs nqt coding round practice
```
Output:
```text
tcs nqt round coding practice
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
        } else cur.push_back(c);
    }
    if (!cur.empty()) words.push_back(cur);

    stable_sort(words.begin(), words.end(), [](const string &a, const string &b) {
        return a.size() < b.size();
    });

    for (int i = 0; i < (int)words.size(); i++) {
        if (i) cout << ' ';
        cout << words[i];
    }
    cout << "\n";
    return 0;
}
```

### Complexity
- Time: `O(w log w)` where `w = number of words`
- Space: `O(w)`

---

## Q30. Lexicographic Sort Ignoring Case

### Problem Statement
Given `N` strings, sort them lexicographically ignoring case.
If two strings are equal ignoring case, keep original case-sensitive order among them.

### Input Format
- First line: `N`
- Next `N` lines: strings

### Output Format
- `N` lines: sorted strings

### Example
Input:
```text
5
Banana
apple
Cat
ant
APP
```
Output:
```text
ant
APP
apple
Banana
Cat
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

string lowerCopy(string s) {
    for (char &c : s) c = (char)tolower((unsigned char)c);
    return s;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;
    cin.ignore(numeric_limits<streamsize>::max(), '\n');

    vector<string> a(n);
    for (int i = 0; i < n; i++) getline(cin, a[i]);

    stable_sort(a.begin(), a.end(), [](const string &x, const string &y) {
        return lowerCopy(x) < lowerCopy(y);
    });

    for (const string &s : a) cout << s << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n log n * L)` where `L` is average length
- Space: `O(1)` extra excluding temporary lower copies

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

## Q32. Minimum Additions to Make Parentheses Valid

### Problem Statement
Given a parentheses string containing `(` and `)`, find minimum insertions needed to make it valid.

### Input Format
- One line string

### Output Format
- Integer answer

### Example
Input:
```text
()))((
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

    string s;
    getline(cin, s);

    int openNeeded = 0;
    int balance = 0;

    for (char c : s) {
        if (c == '(') balance++;
        else if (c == ')') {
            if (balance > 0) balance--;
            else openNeeded++;
        }
    }

    cout << openNeeded + balance << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)`
- Space: `O(1)`

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

---

## Q43. Word Frequency with Capitalized Output in Order of First Appearance (PYQ Variant)

### Problem Statement
Given a sentence, print each unique word in the order of first appearance with its frequency.
Output word should be uppercase.
Treat words case-insensitively while counting.

### Input Format
- One full line sentence

### Output Format
- One line per unique word:
  `WORD COUNT`

### Example
Input:
```text
apple Banana apple banana Cat
```
Output:
```text
APPLE 2
BANANA 2
CAT 1
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

string normalizeToken(const string &w) {
    string t;
    for (char c : w) {
        if (isalnum((unsigned char)c)) t.push_back((char)tolower((unsigned char)c));
    }
    return t;
}

string toUpperStr(string s) {
    for (char &c : s) c = (char)toupper((unsigned char)c);
    return s;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    string line;
    getline(cin, line);

    stringstream ss(line);
    unordered_map<string, int> freq;
    vector<string> order;

    string word;
    while (ss >> word) {
        string key = normalizeToken(word);
        if (key.empty()) continue;
        if (!freq.count(key)) order.push_back(key);
        freq[key]++;
    }

    for (const string &k : order) {
        cout << toUpperStr(k) << " " << freq[k] << "\n";
    }

    return 0;
}
```

### Complexity
- Time: `O(total_characters)`
- Space: `O(unique_words)`

---

## Q44. Valid String Check (PYQ Variant)

### Problem Statement
Given a string, print `Valid` if all of the following are true:
- Length is between 8 and 20
- Contains at least one uppercase letter
- Contains at least one lowercase letter
- Contains at least one digit
- Contains at least one special character from `@#$%^&*`
- Contains no spaces

Otherwise print `Invalid`.

### Input Format
- One line string `s`

### Output Format
- `Valid` or `Invalid`

### Example 1
Input:
```text
Tcs@nqt2026
```
Output:
```text
Valid
```

### Example 2
Input:
```text
tcsnqt26
```
Output:
```text
Invalid
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

    if ((int)s.size() < 8 || (int)s.size() > 20) {
        cout << "Invalid\n";
        return 0;
    }

    bool hasUpper = false, hasLower = false, hasDigit = false, hasSpecial = false;
    string specials = "@#$%^&*";

    for (char c : s) {
        unsigned char uc = (unsigned char)c;
        if (isspace(uc)) {
            cout << "Invalid\n";
            return 0;
        }
        if (isupper(uc)) hasUpper = true;
        else if (islower(uc)) hasLower = true;
        else if (isdigit(uc)) hasDigit = true;
        else if (specials.find(c) != string::npos) hasSpecial = true;
    }

    cout << ((hasUpper && hasLower && hasDigit && hasSpecial) ? "Valid" : "Invalid") << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)`
- Space: `O(1)`

---

## Q45. Colours of Balloons (PYQ Variant)

### Problem Statement
Each character in a string represents balloon color (`A-Z`, `a-z`).
Find the minimum balloons to recolor so that all balloons become the same color.
Treat uppercase and lowercase as the same color.

Minimum recolors = `N - (maximum frequency of any color)`.

### Input Format
- One line string `s` (letters only)

### Output Format
- Print minimum recolors needed

### Example
Input:
```text
RrBGgrrR
```
Output:
```text
4
```
Explanation:
- Frequencies (case-insensitive): `r=4, g=2, b=2`
- Keep all `r`, recolor others: `8 - 4 = 4`

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    string s;
    getline(cin, s);

    vector<int> freq(26, 0);
    int total = 0;

    for (char c : s) {
        unsigned char uc = (unsigned char)c;
        if (isalpha(uc)) {
            freq[tolower(uc) - 'a']++;
            total++;
        }
    }

    if (total == 0) {
        cout << 0 << "\n";
        return 0;
    }

    int mx = *max_element(freq.begin(), freq.end());
    cout << (total - mx) << "\n";
    return 0;
}
```

### Complexity
- Time: `O(n)`
- Space: `O(1)`
