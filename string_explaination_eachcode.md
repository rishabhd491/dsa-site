# TCS_NQT_Strings_Full_Questions_Answers_CPP.md: Line-by-Line Code Explaination

This file explains each C++ code block line-by-line from the source topic file.

## Block 1: General

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

// Safe lowercase conversion for signed-char systems
inline char toLow(char c) { return (char)tolower((unsigned char)c); }
inline char toUp(char c)  { return (char)toupper((unsigned char)c); }

bool isAlphaNum(char c) { return isalnum((unsigned char)c); }
bool isDigitChar(char c) { return isdigit((unsigned char)c); }
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `// Safe lowercase conversion for signed-char systems`
  Explaination: Comment line documenting intent for the next statement(s).
- Line 5: `inline char toLow(char c) { return (char)tolower((unsigned char)c); }`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 6: `inline char toUp(char c)  { return (char)toupper((unsigned char)c); }`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `bool isAlphaNum(char c) { return isalnum((unsigned char)c); }`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `bool isDigitChar(char c) { return isdigit((unsigned char)c); }`
  Explaination: Declares primitive variable(s), optionally with initialization.

## Block 2: Q1. Check if a String is Palindrome (Ignore case and non-alphanumeric)

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 6: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 9: `    getline(cin, s);`
  Explaination: Executes a single statement that updates program state.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    int i = 0, j = (int)s.size() - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    while (i < j) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 13: `        while (i < j && !isalnum((unsigned char)s[i])) i++;`
  Explaination: Loop that repeats while the given condition remains true.
- Line 14: `        while (i < j && !isalnum((unsigned char)s[j])) j--;`
  Explaination: Loop that repeats while the given condition remains true.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `        if (tolower((unsigned char)s[i]) != tolower((unsigned char)s[j])) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `            cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 18: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 19: `        }`
  Explaination: Closes the current scope block.
- Line 20: `        i++, j--;`
  Explaination: Executes a single statement that updates program state.
- Line 21: `    }`
  Explaination: Closes the current scope block.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    cout << "Yes\n";`
  Explaination: Prints formatted output to standard output.
- Line 24: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 25: `}`
  Explaination: Closes the current scope block.

## Block 3: Q2. Check if Two Strings are Anagrams

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `string normalize(const string& s) {`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 5: `    string t;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 6: `    for (char c : s) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 7: `        if (c != ' ') t.push_back((char)tolower((unsigned char)c));`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 8: `    }`
  Explaination: Closes the current scope block.
- Line 9: `    return t;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 10: `}`
  Explaination: Closes the current scope block.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 13: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 14: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    string a, b;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 17: `    getline(cin, a);`
  Explaination: Executes a single statement that updates program state.
- Line 18: `    getline(cin, b);`
  Explaination: Executes a single statement that updates program state.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    a = normalize(a);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: `    b = normalize(b);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    if (a.size() != b.size()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 24: `        cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 25: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 26: `    }`
  Explaination: Closes the current scope block.
- Line 27: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 28: `    vector<int> f(256, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 29: `    for (char c : a) f[(unsigned char)c]++;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 30: `    for (char c : b) f[(unsigned char)c]--;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 31: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 32: `    for (int x : f) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 33: `        if (x != 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 34: `            cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 35: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 36: `        }`
  Explaination: Closes the current scope block.
- Line 37: `    }`
  Explaination: Closes the current scope block.
- Line 38: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 39: `    cout << "Yes\n";`
  Explaination: Prints formatted output to standard output.
- Line 40: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 41: `}`
  Explaination: Closes the current scope block.

## Block 4: Q3. Pangram Check

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 6: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 9: `    getline(cin, s);`
  Explaination: Executes a single statement that updates program state.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    vector<int> seen(26, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 12: `    for (char c : s) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        if (isalpha((unsigned char)c)) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `            seen[tolower((unsigned char)c) - 'a'] = 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `        }`
  Explaination: Closes the current scope block.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    for (int x : seen) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 19: `        if (!x) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 20: `            cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 21: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 22: `        }`
  Explaination: Closes the current scope block.
- Line 23: `    }`
  Explaination: Closes the current scope block.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    cout << "Yes\n";`
  Explaination: Prints formatted output to standard output.
- Line 26: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 27: `}`
  Explaination: Closes the current scope block.

## Block 5: Q4. Count Vowels, Consonants, Digits, Spaces, Special Characters

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `bool isVowel(char c) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    c = (char)tolower((unsigned char)c);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 6: `    return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 7: `}`
  Explaination: Closes the current scope block.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 10: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 11: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 14: `    getline(cin, s);`
  Explaination: Executes a single statement that updates program state.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    int vowels = 0, consonants = 0, digits = 0, spaces = 0, special = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    for (char c : s) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 19: `        if (isalpha((unsigned char)c)) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 20: `            if (isVowel(c)) vowels++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: `            else consonants++;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 22: `        } else if (isdigit((unsigned char)c)) {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 23: `            digits++;`
  Explaination: Executes a single statement that updates program state.
- Line 24: `        } else if (c == ' ') {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 25: `            spaces++;`
  Explaination: Executes a single statement that updates program state.
- Line 26: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 27: `            special++;`
  Explaination: Executes a single statement that updates program state.
- Line 28: `        }`
  Explaination: Closes the current scope block.
- Line 29: `    }`
  Explaination: Closes the current scope block.
- Line 30: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 31: `    cout << vowels << " " << consonants << " " << digits << " " << spaces << " " << special << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 32: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 33: `}`
  Explaination: Closes the current scope block.

## Block 6: Q5. Toggle Case (Lower to Upper and Upper to Lower)

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 6: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 9: `    getline(cin, s);`
  Explaination: Executes a single statement that updates program state.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    for (char &c : s) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        if (islower((unsigned char)c)) c = (char)toupper((unsigned char)c);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: `        else if (isupper((unsigned char)c)) c = (char)tolower((unsigned char)c);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `    }`
  Explaination: Closes the current scope block.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    cout << s << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 17: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 18: `}`
  Explaination: Closes the current scope block.

## Block 7: Q6. Remove Spaces from a String

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 6: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 9: `    getline(cin, s);`
  Explaination: Executes a single statement that updates program state.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    string out;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 12: `    out.reserve(s.size());`
  Explaination: Executes a single statement that updates program state.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    for (char c : s) if (c != ' ') out.push_back(c);`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    cout << out << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 17: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 18: `}`
  Explaination: Closes the current scope block.

## Block 8: Q7. Reverse Words in a Sentence

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 6: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 9: `    getline(cin, s);`
  Explaination: Executes a single statement that updates program state.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    vector<string> words;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 12: `    string cur;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 13: `    for (char c : s) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        if (c == ' ') {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: `            if (!cur.empty()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `                words.push_back(cur);`
  Explaination: Appends a new element to the end of the container.
- Line 17: `                cur.clear();`
  Explaination: Executes a single statement that updates program state.
- Line 18: `            }`
  Explaination: Closes the current scope block.
- Line 19: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 20: `            cur.push_back(c);`
  Explaination: Appends a new element to the end of the container.
- Line 21: `        }`
  Explaination: Closes the current scope block.
- Line 22: `    }`
  Explaination: Closes the current scope block.
- Line 23: `    if (!cur.empty()) words.push_back(cur);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    reverse(words.begin(), words.end());`
  Explaination: Reverses elements in the specified range.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `    for (int i = 0; i < (int)words.size(); i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 28: `        if (i) cout << ' ';`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 29: `        cout << words[i];`
  Explaination: Prints formatted output to standard output.
- Line 30: `    }`
  Explaination: Closes the current scope block.
- Line 31: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 32: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 33: `}`
  Explaination: Closes the current scope block.

## Block 9: Q8. Check if a String is Substring of Another

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 6: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    string text, pat;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 9: `    getline(cin, text);`
  Explaination: Executes a single statement that updates program state.
- Line 10: `    getline(cin, pat);`
  Explaination: Executes a single statement that updates program state.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    cout << (text.find(pat) != string::npos ? "Yes" : "No") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 13: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 14: `}`
  Explaination: Closes the current scope block.

## Block 10: Q9. Count Number of Occurrences of a Substring (Overlapping allowed)

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 6: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    string s, p;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 9: `    getline(cin, s);`
  Explaination: Executes a single statement that updates program state.
- Line 10: `    getline(cin, p);`
  Explaination: Executes a single statement that updates program state.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    if (p.empty()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: `        cout << 0 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 14: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    int count = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: `    size_t pos = 0;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `    while (true) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 20: `        pos = s.find(p, pos);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: `        if (pos == string::npos) break;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 22: `        count++;`
  Explaination: Executes a single statement that updates program state.
- Line 23: `        pos += 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 24: `    }`
  Explaination: Closes the current scope block.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    cout << count << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 27: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 28: `}`
  Explaination: Closes the current scope block.

## Block 11: Q10. Longest Common Prefix of N Strings

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 6: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 10: `    vector<string> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 11: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    if (n == 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `        cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 15: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    string pref = a[0];`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 19: `    for (int i = 1; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 20: `        int j = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: `        while (j < (int)pref.size() && j < (int)a[i].size() && pref[j] == a[i][j]) j++;`
  Explaination: Loop that repeats while the given condition remains true.
- Line 22: `        pref = pref.substr(0, j);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: `        if (pref.empty()) break;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 24: `    }`
  Explaination: Closes the current scope block.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    if (pref.empty()) cout << -1 << "\n";`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 27: `    else cout << pref << "\n";`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 28: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 29: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 30: `}`
  Explaination: Closes the current scope block.

## Block 12: Q11. First Non-Repeating Character

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 6: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 9: `    getline(cin, s);`
  Explaination: Executes a single statement that updates program state.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    vector<int> freq(256, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 12: `    for (char c : s) freq[(unsigned char)c]++;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    for (char c : s) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        if (freq[(unsigned char)c] == 1) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `            cout << c << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 17: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 18: `        }`
  Explaination: Closes the current scope block.
- Line 19: `    }`
  Explaination: Closes the current scope block.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 22: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 23: `}`
  Explaination: Closes the current scope block.

## Block 13: Q12. Character Frequency (Lexicographic output)

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 6: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 9: `    getline(cin, s);`
  Explaination: Executes a single statement that updates program state.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    map<char, int> freq;`
  Explaination: Declares an ordered map with sorted keys.
- Line 12: `    for (char c : s) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        if (c != ' ') freq[c]++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `    }`
  Explaination: Closes the current scope block.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    for (auto &p : freq) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 17: `        cout << p.first << " " << p.second << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 21: `}`
  Explaination: Closes the current scope block.

## Block 14: Q13. Longest Substring Without Repeating Characters

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 6: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 9: `    getline(cin, s);`
  Explaination: Executes a single statement that updates program state.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    vector<int> last(256, -1);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 12: `    int left = 0, best = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    for (int r = 0; r < (int)s.size(); r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        unsigned char c = (unsigned char)s[r];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `        left = max(left, last[c] + 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `        last[c] = r;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: `        best = max(best, r - left + 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `    }`
  Explaination: Closes the current scope block.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    cout << best << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 22: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 23: `}`
  Explaination: Closes the current scope block.

## Block 15: Q14. Longest Palindromic Substring

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `pair<int, int> expandCenter(const string& s, int l, int r) {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 5: `    while (l >= 0 && r < (int)s.size() && s[l] == s[r]) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 6: `        l--;`
  Explaination: Executes a single statement that updates program state.
- Line 7: `        r++;`
  Explaination: Executes a single statement that updates program state.
- Line 8: `    }`
  Explaination: Closes the current scope block.
- Line 9: `    return {l + 1, r - 1};`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 10: `}`
  Explaination: Closes the current scope block.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 13: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 14: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 17: `    getline(cin, s);`
  Explaination: Executes a single statement that updates program state.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    if (s.empty()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 20: `        cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 21: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 22: `    }`
  Explaination: Closes the current scope block.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    int bestL = 0, bestR = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    for (int i = 0; i < (int)s.size(); i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 27: `        auto p1 = expandCenter(s, i, i);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 28: `        auto p2 = expandCenter(s, i, i + 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `        if (p1.second - p1.first > bestR - bestL) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 31: `            bestL = p1.first;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 32: `            bestR = p1.second;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 33: `        }`
  Explaination: Closes the current scope block.
- Line 34: `        if (p2.second - p2.first > bestR - bestL) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 35: `            bestL = p2.first;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 36: `            bestR = p2.second;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 37: `        }`
  Explaination: Closes the current scope block.
- Line 38: `    }`
  Explaination: Closes the current scope block.
- Line 39: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 40: `    cout << s.substr(bestL, bestR - bestL + 1) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 41: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 42: `}`
  Explaination: Closes the current scope block.

## Block 16: Q15. Count Palindromic Substrings

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 6: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 9: `    getline(cin, s);`
  Explaination: Executes a single statement that updates program state.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    long long ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    int n = (int)s.size();`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    for (int center = 0; center < n; center++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        int l = center, r = center;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `        while (l >= 0 && r < n && s[l] == s[r]) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 17: `            ans++;`
  Explaination: Executes a single statement that updates program state.
- Line 18: `            l--, r++;`
  Explaination: Executes a single statement that updates program state.
- Line 19: `        }`
  Explaination: Closes the current scope block.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `        l = center, r = center + 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: `        while (l >= 0 && r < n && s[l] == s[r]) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 23: `            ans++;`
  Explaination: Executes a single statement that updates program state.
- Line 24: `            l--, r++;`
  Explaination: Executes a single statement that updates program state.
- Line 25: `        }`
  Explaination: Closes the current scope block.
- Line 26: `    }`
  Explaination: Closes the current scope block.
- Line 27: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 28: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 29: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 30: `}`
  Explaination: Closes the current scope block.

## Block 17: Q16. Caesar Cipher Encryption

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 6: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 9: `    getline(cin, s);`
  Explaination: Executes a single statement that updates program state.
- Line 10: `    int k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    cin >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    k %= 26;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    for (char &c : s) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `        if (c >= 'a' && c <= 'z') {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `            c = (char)('a' + (c - 'a' + k) % 26);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: `        } else if (c >= 'A' && c <= 'Z') {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 19: `            c = (char)('A' + (c - 'A' + k) % 26);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `        }`
  Explaination: Closes the current scope block.
- Line 21: `    }`
  Explaination: Closes the current scope block.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    cout << s << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 24: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 25: `}`
  Explaination: Closes the current scope block.

## Block 18: Q17. Check if One String is Rotation of Another

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 6: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    string a, b;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 9: `    getline(cin, a);`
  Explaination: Executes a single statement that updates program state.
- Line 10: `    getline(cin, b);`
  Explaination: Executes a single statement that updates program state.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    if (a.size() != b.size()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: `        cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 14: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    string doubled = a + a;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 18: `    cout << (doubled.find(b) != string::npos ? "Yes" : "No") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 19: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 20: `}`
  Explaination: Closes the current scope block.

## Block 19: Q18. Remove Duplicate Characters (Keep First Occurrence)

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 6: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 9: `    getline(cin, s);`
  Explaination: Executes a single statement that updates program state.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    vector<int> seen(256, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 12: `    string out;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    for (char c : s) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        unsigned char uc = (unsigned char)c;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `        if (!seen[uc]) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `            seen[uc] = 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: `            out.push_back(c);`
  Explaination: Appends a new element to the end of the container.
- Line 19: `        }`
  Explaination: Closes the current scope block.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    cout << out << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 23: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 24: `}`
  Explaination: Closes the current scope block.

## Block 20: Q19. String Compression (Run-Length Encoding)

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 6: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 9: `    getline(cin, s);`
  Explaination: Executes a single statement that updates program state.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    if (s.empty()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 12: `        cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 13: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 14: `    }`
  Explaination: Closes the current scope block.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    string out;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 17: `    int cnt = 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    for (int i = 1; i <= (int)s.size(); i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 20: `        if (i < (int)s.size() && s[i] == s[i - 1]) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: `            cnt++;`
  Explaination: Executes a single statement that updates program state.
- Line 22: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 23: `            out.push_back(s[i - 1]);`
  Explaination: Appends a new element to the end of the container.
- Line 24: `            out += to_string(cnt);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 25: `            cnt = 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 26: `        }`
  Explaination: Closes the current scope block.
- Line 27: `    }`
  Explaination: Closes the current scope block.
- Line 28: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 29: `    cout << out << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 30: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 31: `}`
  Explaination: Closes the current scope block.

## Block 21: Q20. Decode Run-Length Encoded String

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 6: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 9: `    getline(cin, s);`
  Explaination: Executes a single statement that updates program state.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    string out;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 12: `    int n = (int)s.size();`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    for (int i = 0; i < n; ) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        char ch = s[i++];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `        long long count = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `        while (i < n && isdigit((unsigned char)s[i])) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 19: `            count = count * 10 + (s[i] - '0');`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `            i++;`
  Explaination: Executes a single statement that updates program state.
- Line 21: `        }`
  Explaination: Closes the current scope block.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `        if (count <= 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 24: `            cout << "Invalid\n";`
  Explaination: Prints formatted output to standard output.
- Line 25: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 26: `        }`
  Explaination: Closes the current scope block.
- Line 27: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 28: `        out.append((size_t)count, ch);`
  Explaination: Executes a single statement that updates program state.
- Line 29: `    }`
  Explaination: Closes the current scope block.
- Line 30: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 31: `    cout << out << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 32: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 33: `}`
  Explaination: Closes the current scope block.

## Block 22: Q21. Story-Based: Word is the Key (Check if a word is C/C++ keyword)

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 6: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    string w;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 9: `    cin >> w;`
  Explaination: Reads input values from standard input into variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    static const unordered_set<string> kw = {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 12: `        "alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit",`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 13: `        "atomic_noexcept","auto","bitand","bitor","bool","break","case","catch",`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 14: `        "char","char8_t","char16_t","char32_t","class","compl","concept","const",`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 15: `        "consteval","constexpr","constinit","const_cast","continue","co_await",`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 16: `        "co_return","co_yield","decltype","default","delete","do","double","dynamic_cast",`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 17: `        "else","enum","explicit","export","extern","false","float","for","friend",`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 18: `        "goto","if","inline","int","long","mutable","namespace","new","noexcept",`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 19: `        "not","not_eq","nullptr","operator","or","or_eq","private","protected","public",`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 20: `        "register","reinterpret_cast","requires","return","short","signed","sizeof","static",`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 21: `        "static_assert","static_cast","struct","switch","template","this","thread_local",`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 22: `        "throw","true","try","typedef","typeid","typename","union","unsigned","using",`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 23: `        "virtual","void","volatile","wchar_t","while","xor","xor_eq"`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 24: `    };`
  Explaination: Closes the current class/struct/initializer block.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    cout << (kw.count(w) ? "Keyword" : "Not Keyword") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 27: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 28: `}`
  Explaination: Closes the current scope block.

## Block 23: Q22. Count Words in a Sentence

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 6: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 9: `    getline(cin, s);`
  Explaination: Executes a single statement that updates program state.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    int words = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    bool inWord = false;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    for (char c : s) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        if (c == ' ') {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `            inWord = false;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 18: `            if (!inWord) words++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 19: `            inWord = true;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `        }`
  Explaination: Closes the current scope block.
- Line 21: `    }`
  Explaination: Closes the current scope block.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    cout << words << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 24: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 25: `}`
  Explaination: Closes the current scope block.

## Block 24: Q23. Largest Word in a Sentence

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 6: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 9: `    getline(cin, s);`
  Explaination: Executes a single statement that updates program state.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    string best = "", cur = "";`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 12: `    for (int i = 0; i <= (int)s.size(); i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        if (i < (int)s.size() && s[i] != ' ') {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `            cur.push_back(s[i]);`
  Explaination: Appends a new element to the end of the container.
- Line 15: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 16: `            if ((int)cur.size() > (int)best.size()) best = cur;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `            cur.clear();`
  Explaination: Executes a single statement that updates program state.
- Line 18: `        }`
  Explaination: Closes the current scope block.
- Line 19: `    }`
  Explaination: Closes the current scope block.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    cout << best << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 22: `    cout << best.size() << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 23: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 24: `}`
  Explaination: Closes the current scope block.

## Block 25: Q24. Find All Start Indices of Anagrams of Pattern in Text

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 6: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    string s, p;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 9: `    getline(cin, s);`
  Explaination: Executes a single statement that updates program state.
- Line 10: `    getline(cin, p);`
  Explaination: Executes a single statement that updates program state.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    int n = (int)s.size(), m = (int)p.size();`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    if (m == 0 || m > n) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `        cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 15: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    vector<int> need(256, 0), have(256, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 19: `    for (char c : p) need[(unsigned char)c]++;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    for (int i = 0; i < m; i++) have[(unsigned char)s[i]]++;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    vector<int> ans;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 24: `    if (have == need) ans.push_back(0);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    for (int r = m; r < n; r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 27: `        have[(unsigned char)s[r]]++;`
  Explaination: Executes a single statement that updates program state.
- Line 28: `        have[(unsigned char)s[r - m]]--;`
  Explaination: Executes a single statement that updates program state.
- Line 29: `        if (have == need) ans.push_back(r - m + 1);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 30: `    }`
  Explaination: Closes the current scope block.
- Line 31: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 32: `    if (ans.empty()) cout << -1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 33: `    else {`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 34: `        for (int i = 0; i < (int)ans.size(); i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 35: `            if (i) cout << ' ';`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 36: `            cout << ans[i];`
  Explaination: Prints formatted output to standard output.
- Line 37: `        }`
  Explaination: Closes the current scope block.
- Line 38: `    }`
  Explaination: Closes the current scope block.
- Line 39: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 40: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 41: `}`
  Explaination: Closes the current scope block.

## Block 26: Q25. Custom ATOI (String to Integer)

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 6: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 9: `    getline(cin, s);`
  Explaination: Executes a single statement that updates program state.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    int i = 0, n = (int)s.size();`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    while (i < n && s[i] == ' ') i++;`
  Explaination: Loop that repeats while the given condition remains true.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    int sign = 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: `    if (i < n && (s[i] == '+' || s[i] == '-')) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `        if (s[i] == '-') sign = -1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `        i++;`
  Explaination: Executes a single statement that updates program state.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    long long val = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: `    while (i < n && isdigit((unsigned char)s[i])) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 22: `        int d = s[i] - '0';`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 23: `        val = val * 10 + d;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `        long long signedVal = sign * val;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 26: `        if (signedVal > INT_MAX) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 27: `            cout << INT_MAX << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 28: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 29: `        }`
  Explaination: Closes the current scope block.
- Line 30: `        if (signedVal < INT_MIN) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 31: `            cout << INT_MIN << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 32: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 33: `        }`
  Explaination: Closes the current scope block.
- Line 34: `        i++;`
  Explaination: Executes a single statement that updates program state.
- Line 35: `    }`
  Explaination: Closes the current scope block.
- Line 36: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 37: `    cout << (int)(sign * val) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 38: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 39: `}`
  Explaination: Closes the current scope block.

## Block 27: Q26. Minimum Window Substring (Advanced but important pattern)

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 6: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    string s, t;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 9: `    getline(cin, s);`
  Explaination: Executes a single statement that updates program state.
- Line 10: `    getline(cin, t);`
  Explaination: Executes a single statement that updates program state.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    if (t.empty() || s.empty() || t.size() > s.size()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: `        cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 14: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    vector<int> need(256, 0), have(256, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 18: `    int requiredKinds = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    for (char c : t) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 21: `        if (need[(unsigned char)c] == 0) requiredKinds++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 22: `        need[(unsigned char)c]++;`
  Explaination: Executes a single statement that updates program state.
- Line 23: `    }`
  Explaination: Closes the current scope block.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    int formed = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 26: `    int left = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 27: `    int bestLen = INT_MAX, bestL = -1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 28: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 29: `    for (int right = 0; right < (int)s.size(); right++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 30: `        unsigned char rc = (unsigned char)s[right];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 31: `        have[rc]++;`
  Explaination: Executes a single statement that updates program state.
- Line 32: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 33: `        if (need[rc] > 0 && have[rc] == need[rc]) formed++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 34: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 35: `        while (left <= right && formed == requiredKinds) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 36: `            if (right - left + 1 < bestLen) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 37: `                bestLen = right - left + 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 38: `                bestL = left;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 39: `            }`
  Explaination: Closes the current scope block.
- Line 40: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 41: `            unsigned char lc = (unsigned char)s[left];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 42: `            have[lc]--;`
  Explaination: Executes a single statement that updates program state.
- Line 43: `            if (need[lc] > 0 && have[lc] < need[lc]) formed--;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 44: `            left++;`
  Explaination: Executes a single statement that updates program state.
- Line 45: `        }`
  Explaination: Closes the current scope block.
- Line 46: `    }`
  Explaination: Closes the current scope block.
- Line 47: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 48: `    if (bestL == -1) cout << -1 << "\n";`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 49: `    else cout << s.substr(bestL, bestLen) << "\n";`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 50: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 51: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 52: `}`
  Explaination: Closes the current scope block.

## Block 28: Q27. Group Anagrams (Advanced organization pattern)

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 6: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 10: `    vector<string> arr(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 11: `    for (int i = 0; i < n; i++) cin >> arr[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    unordered_map<string, vector<string>> groups;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 14: `    vector<string> order;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    for (const string &s : arr) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 17: `        string key = s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 18: `        sort(key.begin(), key.end());`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 19: `        if (!groups.count(key)) order.push_back(key);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 20: `        groups[key].push_back(s);`
  Explaination: Appends a new element to the end of the container.
- Line 21: `    }`
  Explaination: Closes the current scope block.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    for (const string &key : order) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 24: `        for (int i = 0; i < (int)groups[key].size(); i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 25: `            if (i) cout << ' ';`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 26: `            cout << groups[key][i];`
  Explaination: Prints formatted output to standard output.
- Line 27: `        }`
  Explaination: Closes the current scope block.
- Line 28: `        cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 29: `    }`
  Explaination: Closes the current scope block.
- Line 30: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 31: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 32: `}`
  Explaination: Closes the current scope block.

## Block 29: Q28. Sort Characters by Frequency

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 6: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 9: `    getline(cin, s);`
  Explaination: Executes a single statement that updates program state.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    unordered_map<char, int> freq;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 12: `    for (char c : s) freq[c]++;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    vector<pair<char, int>> arr(freq.begin(), freq.end());`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 15: `    sort(arr.begin(), arr.end(), [](const auto &a, const auto &b) {`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 16: `        if (a.second != b.second) return a.second > b.second;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `        return a.first < b.first;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 18: `    });`
  Explaination: Executes a single statement that updates program state.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    string out;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 21: `    out.reserve(s.size());`
  Explaination: Executes a single statement that updates program state.
- Line 22: `    for (auto &p : arr) out.append(p.second, p.first);`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    cout << out << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 25: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 26: `}`
  Explaination: Closes the current scope block.

## Block 30: Q29. Sort Words by Length

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 6: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 9: `    getline(cin, s);`
  Explaination: Executes a single statement that updates program state.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    vector<string> words;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 12: `    string cur;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 13: `    for (char c : s) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        if (c == ' ') {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: `            if (!cur.empty()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `                words.push_back(cur);`
  Explaination: Appends a new element to the end of the container.
- Line 17: `                cur.clear();`
  Explaination: Executes a single statement that updates program state.
- Line 18: `            }`
  Explaination: Closes the current scope block.
- Line 19: `        } else cur.push_back(c);`
  Explaination: Appends a new element to the end of the container.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: `    if (!cur.empty()) words.push_back(cur);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    stable_sort(words.begin(), words.end(), [](const string &a, const string &b) {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 24: `        return a.size() < b.size();`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 25: `    });`
  Explaination: Executes a single statement that updates program state.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `    for (int i = 0; i < (int)words.size(); i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 28: `        if (i) cout << ' ';`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 29: `        cout << words[i];`
  Explaination: Prints formatted output to standard output.
- Line 30: `    }`
  Explaination: Closes the current scope block.
- Line 31: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 32: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 33: `}`
  Explaination: Closes the current scope block.

## Block 31: Q30. Lexicographic Sort Ignoring Case

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `string lowerCopy(string s) {`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 5: `    for (char &c : s) c = (char)tolower((unsigned char)c);`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 6: `    return s;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 7: `}`
  Explaination: Closes the current scope block.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 10: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 11: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 15: `    cin.ignore(numeric_limits<streamsize>::max(), '\n');`
  Explaination: Executes a single statement that updates program state.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    vector<string> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 18: `    for (int i = 0; i < n; i++) getline(cin, a[i]);`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    stable_sort(a.begin(), a.end(), [](const string &x, const string &y) {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 21: `        return lowerCopy(x) < lowerCopy(y);`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 22: `    });`
  Explaination: Executes a single statement that updates program state.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    for (const string &s : a) cout << s << "\n";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 25: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 26: `}`
  Explaination: Closes the current scope block.

## Block 32: Q31. Valid Parentheses ((), {}, [])

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `bool matches(char open, char close) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    return (open == '(' && close == ')') ||`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 6: `           (open == '{' && close == '}') ||`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 7: `           (open == '[' && close == ']');`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 8: `}`
  Explaination: Closes the current scope block.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 11: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 12: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 15: `    getline(cin, s);`
  Explaination: Executes a single statement that updates program state.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    stack<char> st;`
  Explaination: Declares a stack (LIFO structure).
- Line 18: `    for (char c : s) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 19: `        if (c == '(' || c == '{' || c == '[') st.push(c);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 20: `        else if (c == ')' || c == '}' || c == ']') {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: `            if (st.empty() || !matches(st.top(), c)) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 22: `                cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 23: `                return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 24: `            }`
  Explaination: Closes the current scope block.
- Line 25: `            st.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 26: `        }`
  Explaination: Closes the current scope block.
- Line 27: `    }`
  Explaination: Closes the current scope block.
- Line 28: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 29: `    cout << (st.empty() ? "Yes" : "No") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 30: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 31: `}`
  Explaination: Closes the current scope block.

## Block 33: Q32. Minimum Additions to Make Parentheses Valid

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 6: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 9: `    getline(cin, s);`
  Explaination: Executes a single statement that updates program state.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    int openNeeded = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    int balance = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    for (char c : s) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        if (c == '(') balance++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `        else if (c == ')') {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `            if (balance > 0) balance--;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 18: `            else openNeeded++;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 19: `        }`
  Explaination: Closes the current scope block.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    cout << openNeeded + balance << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 23: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 24: `}`
  Explaination: Closes the current scope block.

## Block 34: Q33. Rotation Count (Left Rotations Needed)

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 6: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    string a, b;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 9: `    getline(cin, a);`
  Explaination: Executes a single statement that updates program state.
- Line 10: `    getline(cin, b);`
  Explaination: Executes a single statement that updates program state.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    if (a.size() != b.size()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: `        cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 14: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    string doubled = a + a;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 18: `    size_t pos = doubled.find(b);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    if (pos == string::npos || pos >= a.size()) cout << -1 << "\n";`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: `    else cout << pos << "\n";`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 24: `}`
  Explaination: Closes the current scope block.

## Block 35: Q34. Minimum Circular Shift Distance (Left or Right)

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 6: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    string a, b;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 9: `    getline(cin, a);`
  Explaination: Executes a single statement that updates program state.
- Line 10: `    getline(cin, b);`
  Explaination: Executes a single statement that updates program state.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    int n = (int)a.size();`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    if (n != (int)b.size()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `        cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 15: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    string doubled = a + a;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 19: `    size_t pos = doubled.find(b);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `    if (pos == string::npos || pos >= (size_t)n) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: `        cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 22: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 23: `    }`
  Explaination: Closes the current scope block.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    int leftShifts = (int)pos;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 26: `    int rightShifts = n - leftShifts;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 27: `    cout << min(leftShifts, rightShifts) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 28: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 29: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 30: `}`
  Explaination: Closes the current scope block.

## Block 36: Q35. Replace All Vowels with '*'

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `bool isVowel(char c) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    c = (char)tolower((unsigned char)c);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 6: `    return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 7: `}`
  Explaination: Closes the current scope block.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 10: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 11: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 14: `    getline(cin, s);`
  Explaination: Executes a single statement that updates program state.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    for (char &c : s) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 17: `        if (isVowel(c)) c = '*';`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    cout << s << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 21: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 22: `}`
  Explaination: Closes the current scope block.

## Block 37: Q36. Mask Digits Except Last 4

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 6: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 9: `    getline(cin, s);`
  Explaination: Executes a single statement that updates program state.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    int digitCount = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    for (char c : s) if (isdigit((unsigned char)c)) digitCount++;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    int keepFrom = max(0, digitCount - 4);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: `    int seen = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    for (char &c : s) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: `        if (isdigit((unsigned char)c)) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 19: `            if (seen < keepFrom) c = 'X';`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 20: `            seen++;`
  Explaination: Executes a single statement that updates program state.
- Line 21: `        }`
  Explaination: Closes the current scope block.
- Line 22: `    }`
  Explaination: Closes the current scope block.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    cout << s << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 25: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 26: `}`
  Explaination: Closes the current scope block.

## Block 38: Q37. Character Substitution Using Mapping

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 6: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    string s, from, to;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 9: `    getline(cin, s);`
  Explaination: Executes a single statement that updates program state.
- Line 10: `    getline(cin, from);`
  Explaination: Executes a single statement that updates program state.
- Line 11: `    getline(cin, to);`
  Explaination: Executes a single statement that updates program state.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    if (from.size() != to.size()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `        cout << "Invalid\n";`
  Explaination: Prints formatted output to standard output.
- Line 15: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    vector<char> mp(256, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 19: `    vector<int> has(256, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    for (int i = 0; i < (int)from.size(); i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 22: `        unsigned char f = (unsigned char)from[i];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: `        unsigned char t = (unsigned char)to[i];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 24: `        mp[f] = (char)t;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 25: `        has[f] = 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 26: `    }`
  Explaination: Closes the current scope block.
- Line 27: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 28: `    for (char &c : s) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 29: `        unsigned char uc = (unsigned char)c;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 30: `        if (has[uc]) c = mp[uc];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 31: `    }`
  Explaination: Closes the current scope block.
- Line 32: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 33: `    cout << s << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 34: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 35: `}`
  Explaination: Closes the current scope block.

## Block 39: Q38. Count Tokens with Multiple Delimiters

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 6: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    string s, d;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 9: `    getline(cin, s);`
  Explaination: Executes a single statement that updates program state.
- Line 10: `    getline(cin, d);`
  Explaination: Executes a single statement that updates program state.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    vector<int> isDel(256, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 13: `    for (char c : d) isDel[(unsigned char)c] = 1;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    int tokens = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `    bool inToken = false;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    for (char c : s) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 19: `        if (isDel[(unsigned char)c]) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 20: `            inToken = false;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 22: `            if (!inToken) tokens++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 23: `            inToken = true;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 24: `        }`
  Explaination: Closes the current scope block.
- Line 25: `    }`
  Explaination: Closes the current scope block.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `    cout << tokens << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 28: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 29: `}`
  Explaination: Closes the current scope block.

## Block 40: Q39. Tokenize and Print Tokens (Multiple Delimiters)

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 6: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    string s, d;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 9: `    getline(cin, s);`
  Explaination: Executes a single statement that updates program state.
- Line 10: `    getline(cin, d);`
  Explaination: Executes a single statement that updates program state.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    vector<int> isDel(256, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 13: `    for (char c : d) isDel[(unsigned char)c] = 1;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    vector<string> tokens;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 16: `    string cur;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    for (char c : s) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 19: `        if (isDel[(unsigned char)c]) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 20: `            if (!cur.empty()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: `                tokens.push_back(cur);`
  Explaination: Appends a new element to the end of the container.
- Line 22: `                cur.clear();`
  Explaination: Executes a single statement that updates program state.
- Line 23: `            }`
  Explaination: Closes the current scope block.
- Line 24: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 25: `            cur.push_back(c);`
  Explaination: Appends a new element to the end of the container.
- Line 26: `        }`
  Explaination: Closes the current scope block.
- Line 27: `    }`
  Explaination: Closes the current scope block.
- Line 28: `    if (!cur.empty()) tokens.push_back(cur);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    if (tokens.empty()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 31: `        cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 32: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 33: `    }`
  Explaination: Closes the current scope block.
- Line 34: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 35: `    for (const string &t : tokens) cout << t << "\n";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 36: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 37: `}`
  Explaination: Closes the current scope block.

## Block 41: Q40. Sum of Numeric Tokens from Mixed Delimiter String

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 6: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 9: `    getline(cin, s);`
  Explaination: Executes a single statement that updates program state.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    long long sum = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    long long cur = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    bool inNumber = false;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    for (char c : s) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `        if (isdigit((unsigned char)c)) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `            cur = cur * 10 + (c - '0');`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: `            inNumber = true;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 20: `            if (inNumber) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: `                sum += cur;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: `                cur = 0;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: `                inNumber = false;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 24: `            }`
  Explaination: Closes the current scope block.
- Line 25: `        }`
  Explaination: Closes the current scope block.
- Line 26: `    }`
  Explaination: Closes the current scope block.
- Line 27: `    if (inNumber) sum += cur;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 28: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 29: `    cout << sum << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 30: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 31: `}`
  Explaination: Closes the current scope block.
