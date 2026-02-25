# TCS_NQT_Hashing_Full_Questions_Answers_CPP.md: Line-by-Line Code Explaination

This file explains each C++ code block line-by-line from the source topic file.

## Block 1: General

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `using ll = long long;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 5: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 6: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 7: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 8: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 9: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 10: `}`
  Explaination: Closes the current scope block.

## Block 2: Q1. Count Frequency of Each Element

### Original Code
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
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    map<long long, int> freq;`
  Explaination: Declares an ordered map with sorted keys.
- Line 12: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        long long x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `        cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 15: `        freq[x]++;`
  Explaination: Executes a single statement that updates program state.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    for (auto &p : freq) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 19: `        cout << p.first << " " << p.second << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 23: `}`
  Explaination: Closes the current scope block.

## Block 3: Q2. Element with Maximum Frequency

### Original Code
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
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    unordered_map<long long, int> freq;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 12: `    freq.reserve(2 * n + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        long long x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `        cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 17: `        freq[x]++;`
  Explaination: Executes a single statement that updates program state.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    long long bestVal = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: `    int bestFreq = -1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    for (auto &p : freq) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 24: `        if (p.second > bestFreq || (p.second == bestFreq && p.first < bestVal)) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 25: `            bestFreq = p.second;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 26: `            bestVal = p.first;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 27: `        }`
  Explaination: Closes the current scope block.
- Line 28: `    }`
  Explaination: Closes the current scope block.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    cout << bestVal << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 31: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 32: `}`
  Explaination: Closes the current scope block.

## Block 4: Q3. First Non-Repeating Element in Array

### Original Code
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
- Line 10: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    unordered_map<long long, int> freq;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 13: `    freq.reserve(2 * n + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `        cin >> a[i];`
  Explaination: Reads input values from standard input into variables.
- Line 17: `        freq[a[i]]++;`
  Explaination: Executes a single statement that updates program state.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    for (long long x : a) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 21: `        if (freq[x] == 1) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 22: `            cout << x << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 23: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 24: `        }`
  Explaination: Closes the current scope block.
- Line 25: `    }`
  Explaination: Closes the current scope block.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `    cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 28: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 29: `}`
  Explaination: Closes the current scope block.

## Block 5: Q4. First Repeating Element (By First Occurrence)

### Original Code
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
        if (freq[x] > 1) {
            cout << x << "\n";
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
- Line 8: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 10: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    unordered_map<long long, int> freq;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 13: `    freq.reserve(2 * n + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `        cin >> a[i];`
  Explaination: Reads input values from standard input into variables.
- Line 17: `        freq[a[i]]++;`
  Explaination: Executes a single statement that updates program state.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    for (long long x : a) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 21: `        if (freq[x] > 1) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 22: `            cout << x << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 23: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 24: `        }`
  Explaination: Closes the current scope block.
- Line 25: `    }`
  Explaination: Closes the current scope block.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `    cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 28: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 29: `}`
  Explaination: Closes the current scope block.

## Block 6: Q5. Print Elements Occurring Exactly K Times

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, k;
    cin >> n >> k;

    map<long long, int> freq;
    for (int i = 0; i < n; i++) {
        long long x;
        cin >> x;
        freq[x]++;
    }

    vector<long long> out;
    for (auto &p : freq) {
        if (p.second == k) out.push_back(p.first);
    }

    if (out.empty()) cout << -1 << "\n";
    else {
        for (long long x : out) cout << x << " ";
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
- Line 8: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    map<long long, int> freq;`
  Explaination: Declares an ordered map with sorted keys.
- Line 12: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        long long x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `        cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 15: `        freq[x]++;`
  Explaination: Executes a single statement that updates program state.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    vector<long long> out;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 19: `    for (auto &p : freq) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 20: `        if (p.second == k) out.push_back(p.first);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: `    }`
  Explaination: Closes the current scope block.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    if (out.empty()) cout << -1 << "\n";`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 24: `    else {`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 25: `        for (long long x : out) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 26: `        cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 27: `    }`
  Explaination: Closes the current scope block.
- Line 28: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 29: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 30: `}`
  Explaination: Closes the current scope block.

## Block 7: Q6. Contains Duplicate

### Original Code
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
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    unordered_set<long long> st;`
  Explaination: Declares a hash set for fast membership checks.
- Line 12: `    st.reserve(2 * n + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        long long x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `        cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 17: `        if (st.count(x)) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 18: `            cout << "Yes\n";`
  Explaination: Prints formatted output to standard output.
- Line 19: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 20: `        }`
  Explaination: Closes the current scope block.
- Line 21: `        st.insert(x);`
  Explaination: Inserts element(s) at a specified position in a container.
- Line 22: `    }`
  Explaination: Closes the current scope block.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 25: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 26: `}`
  Explaination: Closes the current scope block.

## Block 8: Q7. Count Distinct Elements

### Original Code
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
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    unordered_set<long long> st;`
  Explaination: Declares a hash set for fast membership checks.
- Line 12: `    st.reserve(2 * n + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        long long x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `        cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 17: `        st.insert(x);`
  Explaination: Inserts element(s) at a specified position in a container.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    cout << st.size() << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 21: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 22: `}`
  Explaination: Closes the current scope block.

## Block 9: Q8. Two Sum (Return 0-based Indices)

### Original Code
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
- Line 9: `    long long target;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: `    cin >> n >> target;`
  Explaination: Reads input values from standard input into variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 13: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    unordered_map<long long, int> pos;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 16: `    pos.reserve(2 * n + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 19: `        long long need = target - a[i];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 20: `        if (pos.count(need)) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: `            cout << pos[need] << " " << i << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 22: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 23: `        }`
  Explaination: Closes the current scope block.
- Line 24: `        if (!pos.count(a[i])) pos[a[i]] = i;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 25: `    }`
  Explaination: Closes the current scope block.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `    cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 28: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 29: `}`
  Explaination: Closes the current scope block.

## Block 10: Q9. Count Pairs with Given Sum

### Original Code
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
- Line 9: `    long long k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 13: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    unordered_map<long long, long long> freq;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 16: `    freq.reserve(2 * n + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    long long ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `    for (long long x : a) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 20: `        long long need = k - x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: `        if (freq.count(need)) ans += freq[need];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 22: `        freq[x]++;`
  Explaination: Executes a single statement that updates program state.
- Line 23: `    }`
  Explaination: Closes the current scope block.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 26: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 27: `}`
  Explaination: Closes the current scope block.

## Block 11: Q10. Count Pairs with Absolute Difference K

### Original Code
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
- Line 9: `    long long k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    unordered_map<long long, long long> freq;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 13: `    freq.reserve(2 * n + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `        long long x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: `        cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 18: `        freq[x]++;`
  Explaination: Executes a single statement that updates program state.
- Line 19: `    }`
  Explaination: Closes the current scope block.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    long long ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    if (k == 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 24: `        for (auto &p : freq) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 25: `            long long f = p.second;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 26: `            ans += f * (f - 1) / 2;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 27: `        }`
  Explaination: Closes the current scope block.
- Line 28: `    } else if (k > 0) {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 29: `        for (auto &p : freq) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 30: `            long long x = p.first;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 31: `            if (freq.count(x + k)) ans += p.second * freq[x + k];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 32: `        }`
  Explaination: Closes the current scope block.
- Line 33: `    }`
  Explaination: Closes the current scope block.
- Line 34: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 35: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 36: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 37: `}`
  Explaination: Closes the current scope block.

## Block 12: Q11. Count Triplets with Sum K (Hash-assisted O(n^2))

### Original Code
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

    long long ans = 0;

    for (int i = 0; i < n; i++) {
        unordered_map<long long, int> seen;
        seen.reserve(2 * (n - i) + 1);

        for (int j = i + 1; j < n; j++) {
            long long need = target - a[i] - a[j];
            if (seen.count(need)) ans += seen[need];
            seen[a[j]]++;
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
- Line 8: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    long long target;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: `    cin >> n >> target;`
  Explaination: Reads input values from standard input into variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 13: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    long long ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: `        unordered_map<long long, int> seen;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 19: `        seen.reserve(2 * (n - i) + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `        for (int j = i + 1; j < n; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 22: `            long long need = target - a[i] - a[j];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 23: `            if (seen.count(need)) ans += seen[need];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 24: `            seen[a[j]]++;`
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

## Block 13: Q12. Four Sum Existence (Distinct Indices)

### Original Code
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

    unordered_set<long long> pairSums;
    pairSums.reserve((size_t)n * (size_t)n / 2 + 1);

    for (int i = 1; i < n - 1; i++) {
        for (int j = i + 1; j < n; j++) {
            long long need = target - a[i] - a[j];
            if (pairSums.count(need)) {
                cout << "Yes\n";
                return 0;
            }
        }

        for (int k = 0; k < i; k++) {
            pairSums.insert(a[k] + a[i]);
        }
    }

    cout << "No\n";
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
- Line 9: `    long long target;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: `    cin >> n >> target;`
  Explaination: Reads input values from standard input into variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 13: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    unordered_set<long long> pairSums;`
  Explaination: Declares a hash set for fast membership checks.
- Line 16: `    pairSums.reserve((size_t)n * (size_t)n / 2 + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    for (int i = 1; i < n - 1; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 19: `        for (int j = i + 1; j < n; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 20: `            long long need = target - a[i] - a[j];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: `            if (pairSums.count(need)) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 22: `                cout << "Yes\n";`
  Explaination: Prints formatted output to standard output.
- Line 23: `                return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 24: `            }`
  Explaination: Closes the current scope block.
- Line 25: `        }`
  Explaination: Closes the current scope block.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `        for (int k = 0; k < i; k++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 28: `            pairSums.insert(a[k] + a[i]);`
  Explaination: Inserts element(s) at a specified position in a container.
- Line 29: `        }`
  Explaination: Closes the current scope block.
- Line 30: `    }`
  Explaination: Closes the current scope block.
- Line 31: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 32: `    cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 33: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 34: `}`
  Explaination: Closes the current scope block.

## Block 14: Q13. Count Subarrays with Sum K

### Original Code
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
- Line 9: `    long long k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 13: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    unordered_map<long long, long long> freq;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 16: `    freq.reserve(2 * n + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 17: `    freq[0] = 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    long long pref = 0, ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 20: `    for (long long x : a) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 21: `        pref += x;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: `        if (freq.count(pref - k)) ans += freq[pref - k];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 23: `        freq[pref]++;`
  Explaination: Executes a single statement that updates program state.
- Line 24: `    }`
  Explaination: Closes the current scope block.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 27: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 28: `}`
  Explaination: Closes the current scope block.

## Block 15: Q14. Longest Subarray with Sum K

### Original Code
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
- Line 9: `    long long k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 13: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    unordered_map<long long, int> first;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 16: `    first.reserve(2 * n + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 17: `    first[0] = -1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    long long pref = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 20: `    int best = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 23: `        pref += a[i];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `        if (!first.count(pref)) first[pref] = i;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 26: `        if (first.count(pref - k)) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 27: `            best = max(best, i - first[pref - k]);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 28: `        }`
  Explaination: Closes the current scope block.
- Line 29: `    }`
  Explaination: Closes the current scope block.
- Line 30: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 31: `    cout << best << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 32: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 33: `}`
  Explaination: Closes the current scope block.

## Block 16: Q15. Zero-Sum Subarray Exists?

### Original Code
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
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 12: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    unordered_set<long long> seen;`
  Explaination: Declares a hash set for fast membership checks.
- Line 15: `    seen.reserve(2 * n + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    long long pref = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: `    seen.insert(0);`
  Explaination: Inserts element(s) at a specified position in a container.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    for (long long x : a) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 21: `        pref += x;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: `        if (seen.count(pref)) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 23: `            cout << "Yes\n";`
  Explaination: Prints formatted output to standard output.
- Line 24: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 25: `        }`
  Explaination: Closes the current scope block.
- Line 26: `        seen.insert(pref);`
  Explaination: Inserts element(s) at a specified position in a container.
- Line 27: `    }`
  Explaination: Closes the current scope block.
- Line 28: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 29: `    cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 30: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 31: `}`
  Explaination: Closes the current scope block.

## Block 17: Q16. Count Zero-Sum Subarrays

### Original Code
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
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 12: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    unordered_map<long long, long long> freq;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 15: `    freq.reserve(2 * n + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    long long pref = 0, ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: `    freq[0] = 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    for (long long x : a) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 21: `        pref += x;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: `        ans += freq[pref];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: `        freq[pref]++;`
  Explaination: Executes a single statement that updates program state.
- Line 24: `    }`
  Explaination: Closes the current scope block.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 27: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 28: `}`
  Explaination: Closes the current scope block.

## Block 18: Q17. Longest Zero-Sum Subarray

### Original Code
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
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 12: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    unordered_map<long long, int> first;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 15: `    first.reserve(2 * n + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 16: `    first[0] = -1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    long long pref = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `    int best = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 22: `        pref += a[i];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: `        if (first.count(pref)) best = max(best, i - first[pref]);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 24: `        else first[pref] = i;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 25: `    }`
  Explaination: Closes the current scope block.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `    cout << best << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 28: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 29: `}`
  Explaination: Closes the current scope block.

## Block 19: Q18. Longest Subarray with Equal 0 and 1

### Original Code
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
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 12: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    unordered_map<int, int> first;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 15: `    first.reserve(2 * n + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 16: `    first[0] = -1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    int pref = 0, best = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 20: `        pref += (a[i] == 0 ? -1 : 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: `        if (first.count(pref)) best = max(best, i - first[pref]);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 22: `        else first[pref] = i;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 23: `    }`
  Explaination: Closes the current scope block.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    cout << best << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 26: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 27: `}`
  Explaination: Closes the current scope block.

## Block 20: Q19. Count Subarrays with Equal 0 and 1

### Original Code
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
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 12: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    unordered_map<int, long long> freq;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 15: `    freq.reserve(2 * n + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 16: `    freq[0] = 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    int pref = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `    long long ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    for (int x : a) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 22: `        pref += (x == 0 ? -1 : 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: `        ans += freq[pref];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 24: `        freq[pref]++;`
  Explaination: Executes a single statement that updates program state.
- Line 25: `    }`
  Explaination: Closes the current scope block.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 28: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 29: `}`
  Explaination: Closes the current scope block.

## Block 21: Q20. Count Subarrays with Sum Divisible by K

### Original Code
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
- Line 8: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 12: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    unordered_map<int, long long> freq;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 15: `    freq.reserve(2 * k + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 16: `    freq[0] = 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    long long pref = 0, ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    for (long long x : a) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 21: `        pref += x;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: `        int rem = (int)((pref % k + k) % k);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 23: `        ans += freq[rem];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 24: `        freq[rem]++;`
  Explaination: Executes a single statement that updates program state.
- Line 25: `    }`
  Explaination: Closes the current scope block.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 28: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 29: `}`
  Explaination: Closes the current scope block.

## Block 22: Q21. Longest Subarray with Sum Divisible by K

### Original Code
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
- Line 8: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 12: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    unordered_map<int, int> first;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 15: `    first.reserve(2 * k + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 16: `    first[0] = -1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    long long pref = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `    int best = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 22: `        pref += a[i];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: `        int rem = (int)((pref % k + k) % k);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `        if (first.count(rem)) best = max(best, i - first[rem]);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 26: `        else first[rem] = i;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 27: `    }`
  Explaination: Closes the current scope block.
- Line 28: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 29: `    cout << best << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 30: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 31: `}`
  Explaination: Closes the current scope block.

## Block 23: Q22. Longest Consecutive Sequence

### Original Code
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
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 12: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    unordered_set<long long> st(a.begin(), a.end());`
  Explaination: Declares a hash set for fast membership checks.
- Line 15: `    st.reserve(2 * n + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    int best = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    for (long long x : st) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 20: `        if (!st.count(x - 1)) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: `            int len = 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 22: `            long long cur = x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 23: `            while (st.count(cur + 1)) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 24: `                cur++;`
  Explaination: Executes a single statement that updates program state.
- Line 25: `                len++;`
  Explaination: Executes a single statement that updates program state.
- Line 26: `            }`
  Explaination: Closes the current scope block.
- Line 27: `            best = max(best, len);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 28: `        }`
  Explaination: Closes the current scope block.
- Line 29: `    }`
  Explaination: Closes the current scope block.
- Line 30: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 31: `    cout << best << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 32: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 33: `}`
  Explaination: Closes the current scope block.

## Block 24: Q23. Intersection of Two Arrays (Unique)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, m;
    cin >> n >> m;

    unordered_set<long long> s1;
    s1.reserve(2 * n + 1);

    for (int i = 0; i < n; i++) {
        long long x;
        cin >> x;
        s1.insert(x);
    }

    set<long long> ans;
    for (int i = 0; i < m; i++) {
        long long x;
        cin >> x;
        if (s1.count(x)) ans.insert(x);
    }

    if (ans.empty()) cout << -1 << "\n";
    else {
        for (long long x : ans) cout << x << " ";
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
- Line 8: `    int n, m;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    cin >> n >> m;`
  Explaination: Reads input values from standard input into variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    unordered_set<long long> s1;`
  Explaination: Declares a hash set for fast membership checks.
- Line 12: `    s1.reserve(2 * n + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        long long x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `        cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 17: `        s1.insert(x);`
  Explaination: Inserts element(s) at a specified position in a container.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    set<long long> ans;`
  Explaination: Declares an ordered set of unique values.
- Line 21: `    for (int i = 0; i < m; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 22: `        long long x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 23: `        cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 24: `        if (s1.count(x)) ans.insert(x);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 25: `    }`
  Explaination: Closes the current scope block.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `    if (ans.empty()) cout << -1 << "\n";`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 28: `    else {`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 29: `        for (long long x : ans) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 30: `        cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 31: `    }`
  Explaination: Closes the current scope block.
- Line 32: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 33: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 34: `}`
  Explaination: Closes the current scope block.

## Block 25: Q24. Intersection of Two Arrays (With Multiplicity)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, m;
    cin >> n >> m;

    unordered_map<long long, int> freq;
    freq.reserve(2 * n + 1);

    for (int i = 0; i < n; i++) {
        long long x;
        cin >> x;
        freq[x]++;
    }

    vector<long long> out;

    for (int i = 0; i < m; i++) {
        long long x;
        cin >> x;
        if (freq[x] > 0) {
            out.push_back(x);
            freq[x]--;
        }
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
- Line 8: `    int n, m;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    cin >> n >> m;`
  Explaination: Reads input values from standard input into variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    unordered_map<long long, int> freq;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 12: `    freq.reserve(2 * n + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        long long x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `        cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 17: `        freq[x]++;`
  Explaination: Executes a single statement that updates program state.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    vector<long long> out;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    for (int i = 0; i < m; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 23: `        long long x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 24: `        cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 25: `        if (freq[x] > 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 26: `            out.push_back(x);`
  Explaination: Appends a new element to the end of the container.
- Line 27: `            freq[x]--;`
  Explaination: Executes a single statement that updates program state.
- Line 28: `        }`
  Explaination: Closes the current scope block.
- Line 29: `    }`
  Explaination: Closes the current scope block.
- Line 30: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 31: `    if (out.empty()) cout << -1 << "\n";`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 32: `    else {`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 33: `        sort(out.begin(), out.end());`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 34: `        for (long long x : out) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 35: `        cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 36: `    }`
  Explaination: Closes the current scope block.
- Line 37: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 38: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 39: `}`
  Explaination: Closes the current scope block.

## Block 26: Q25. Count Elements in Union of Two Arrays

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, m;
    cin >> n >> m;

    unordered_set<long long> st;
    st.reserve(2 * (n + m) + 1);

    for (int i = 0; i < n; i++) {
        long long x;
        cin >> x;
        st.insert(x);
    }
    for (int i = 0; i < m; i++) {
        long long x;
        cin >> x;
        st.insert(x);
    }

    cout << st.size() << "\n";
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
- Line 8: `    int n, m;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    cin >> n >> m;`
  Explaination: Reads input values from standard input into variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    unordered_set<long long> st;`
  Explaination: Declares a hash set for fast membership checks.
- Line 12: `    st.reserve(2 * (n + m) + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        long long x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `        cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 17: `        st.insert(x);`
  Explaination: Inserts element(s) at a specified position in a container.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: `    for (int i = 0; i < m; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 20: `        long long x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: `        cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 22: `        st.insert(x);`
  Explaination: Inserts element(s) at a specified position in a container.
- Line 23: `    }`
  Explaination: Closes the current scope block.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    cout << st.size() << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 26: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 27: `}`
  Explaination: Closes the current scope block.

## Block 27: Q26. Valid Anagram

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
- Line 12: `    if (s.size() != t.size()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: `        cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 14: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    vector<int> f(256, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 18: `    for (char c : s) f[(unsigned char)c]++;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 19: `    for (char c : t) f[(unsigned char)c]--;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    for (int x : f) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 22: `        if (x != 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 23: `            cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 24: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 25: `        }`
  Explaination: Closes the current scope block.
- Line 26: `    }`
  Explaination: Closes the current scope block.
- Line 27: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 28: `    cout << "Yes\n";`
  Explaination: Prints formatted output to standard output.
- Line 29: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 30: `}`
  Explaination: Closes the current scope block.

## Block 28: Q27. Group Anagrams

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
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    vector<string> arr(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 12: `    for (int i = 0; i < n; i++) cin >> arr[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    unordered_map<string, vector<string>> mp;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 15: `    vector<string> order;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 16: `    mp.reserve(2 * n + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    for (string s : arr) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 19: `        string key = s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 20: `        sort(key.begin(), key.end());`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 21: `        if (!mp.count(key)) order.push_back(key);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 22: `        mp[key].push_back(s);`
  Explaination: Appends a new element to the end of the container.
- Line 23: `    }`
  Explaination: Closes the current scope block.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    for (const string &k : order) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 26: `        for (int i = 0; i < (int)mp[k].size(); i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 27: `            if (i) cout << ' ';`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 28: `            cout << mp[k][i];`
  Explaination: Prints formatted output to standard output.
- Line 29: `        }`
  Explaination: Closes the current scope block.
- Line 30: `        cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 31: `    }`
  Explaination: Closes the current scope block.
- Line 32: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 33: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 34: `}`
  Explaination: Closes the current scope block.

## Block 29: Q28. Isomorphic Strings

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
- Line 12: `    if (s.size() != t.size()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: `        cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 14: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    vector<int> m1(256, -1), m2(256, -1);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    for (int i = 0; i < (int)s.size(); i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 20: `        unsigned char a = (unsigned char)s[i];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: `        unsigned char b = (unsigned char)t[i];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `        if (m1[a] == -1 && m2[b] == -1) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 24: `            m1[a] = b;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 25: `            m2[b] = a;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 26: `        } else if (m1[a] != b || m2[b] != a) {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 27: `            cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 28: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 29: `        }`
  Explaination: Closes the current scope block.
- Line 30: `    }`
  Explaination: Closes the current scope block.
- Line 31: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 32: `    cout << "Yes\n";`
  Explaination: Prints formatted output to standard output.
- Line 33: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 34: `}`
  Explaination: Closes the current scope block.

## Block 30: Q29. Word Pattern Matching

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `vector<string> splitWords(const string& s) {`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 5: `    vector<string> out;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 6: `    string cur;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 7: `    for (char c : s) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 8: `        if (c == ' ') {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 9: `            if (!cur.empty()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 10: `                out.push_back(cur);`
  Explaination: Appends a new element to the end of the container.
- Line 11: `                cur.clear();`
  Explaination: Executes a single statement that updates program state.
- Line 12: `            }`
  Explaination: Closes the current scope block.
- Line 13: `        } else cur.push_back(c);`
  Explaination: Appends a new element to the end of the container.
- Line 14: `    }`
  Explaination: Closes the current scope block.
- Line 15: `    if (!cur.empty()) out.push_back(cur);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `    return out;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 17: `}`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 20: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 21: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    string pattern, line;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 24: `    getline(cin, pattern);`
  Explaination: Executes a single statement that updates program state.
- Line 25: `    getline(cin, line);`
  Explaination: Executes a single statement that updates program state.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `    vector<string> words = splitWords(line);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 28: `    if ((int)pattern.size() != (int)words.size()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 29: `        cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 30: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 31: `    }`
  Explaination: Closes the current scope block.
- Line 32: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 33: `    unordered_map<char, string> c2w;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 34: `    unordered_map<string, char> w2c;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 35: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 36: `    for (int i = 0; i < (int)pattern.size(); i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 37: `        char c = pattern[i];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 38: `        string w = words[i];`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 39: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 40: `        if (c2w.count(c) && c2w[c] != w) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 41: `            cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 42: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 43: `        }`
  Explaination: Closes the current scope block.
- Line 44: `        if (w2c.count(w) && w2c[w] != c) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 45: `            cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 46: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 47: `        }`
  Explaination: Closes the current scope block.
- Line 48: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 49: `        c2w[c] = w;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 50: `        w2c[w] = c;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 51: `    }`
  Explaination: Closes the current scope block.
- Line 52: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 53: `    cout << "Yes\n";`
  Explaination: Prints formatted output to standard output.
- Line 54: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 55: `}`
  Explaination: Closes the current scope block.

## Block 31: Q30. Top K Frequent Elements

### Original Code
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
- Line 8: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    unordered_map<long long, int> freq;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 12: `    freq.reserve(2 * n + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        long long x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `        cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 17: `        freq[x]++;`
  Explaination: Executes a single statement that updates program state.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    vector<pair<long long, int>> v(freq.begin(), freq.end());`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 21: `    sort(v.begin(), v.end(), [](auto &a, auto &b) {`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 22: `        if (a.second != b.second) return a.second > b.second;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 23: `        return a.first < b.first;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 24: `    });`
  Explaination: Executes a single statement that updates program state.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    k = min(k, (int)v.size());`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 27: `    for (int i = 0; i < k; i++) cout << v[i].first << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 28: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 31: `}`
  Explaination: Closes the current scope block.

## Block 32: Q31. Minimum Window Substring

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
- Line 12: `    if (t.empty() || s.size() < t.size()) {`
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

## Block 33: Q32. Find All Anagram Start Indices

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
        for (int x : ans) cout << x << " ";
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
- Line 34: `        for (int x : ans) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 35: `    }`
  Explaination: Closes the current scope block.
- Line 36: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 37: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 38: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 39: `}`
  Explaination: Closes the current scope block.

## Block 34: Q33. Distinct Elements in Every Window of Size K

### Original Code
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
- Line 8: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 12: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    if (k <= 0 || k > n) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: `        cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 16: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 17: `    }`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    unordered_map<long long, int> freq;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 20: `    freq.reserve(2 * k + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    for (int i = 0; i < k; i++) freq[a[i]]++;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 23: `    cout << freq.size();`
  Explaination: Prints formatted output to standard output.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    for (int i = k; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 26: `        long long out = a[i - k];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 27: `        freq[out]--;`
  Explaination: Executes a single statement that updates program state.
- Line 28: `        if (freq[out] == 0) freq.erase(out);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `        freq[a[i]]++;`
  Explaination: Executes a single statement that updates program state.
- Line 31: `        cout << " " << freq.size();`
  Explaination: Prints formatted output to standard output.
- Line 32: `    }`
  Explaination: Closes the current scope block.
- Line 33: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 34: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 35: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 36: `}`
  Explaination: Closes the current scope block.

## Block 35: Q34. Longest Substring Without Repeating Characters

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
- Line 14: `    for (int right = 0; right < (int)s.size(); right++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        unsigned char c = (unsigned char)s[right];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `        left = max(left, last[c] + 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `        last[c] = right;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: `        best = max(best, right - left + 1);`
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

## Block 36: Q35. Smallest Subarray Containing All Distinct Elements of Array

### Original Code
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
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 12: `    unordered_set<long long> all;`
  Explaination: Declares a hash set for fast membership checks.
- Line 13: `    all.reserve(2 * n + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `        cin >> a[i];`
  Explaination: Reads input values from standard input into variables.
- Line 17: `        all.insert(a[i]);`
  Explaination: Inserts element(s) at a specified position in a container.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    int need = (int)all.size();`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    unordered_map<long long, int> freq;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 23: `    freq.reserve(2 * need + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    int left = 0, formed = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 26: `    int best = n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 27: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 28: `    for (int right = 0; right < n; right++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 29: `        if (++freq[a[right]] == 1) formed++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 30: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 31: `        while (formed == need) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 32: `            best = min(best, right - left + 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 33: `            if (--freq[a[left]] == 0) formed--;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 34: `            left++;`
  Explaination: Executes a single statement that updates program state.
- Line 35: `        }`
  Explaination: Closes the current scope block.
- Line 36: `    }`
  Explaination: Closes the current scope block.
- Line 37: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 38: `    cout << best << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 39: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 40: `}`
  Explaination: Closes the current scope block.

## Block 37: Q36. Ransom Note Construction

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    string ransom, magazine;
    getline(cin, ransom);
    getline(cin, magazine);

    vector<int> freq(256, 0);
    for (char c : magazine) freq[(unsigned char)c]++;

    for (char c : ransom) {
        if (--freq[(unsigned char)c] < 0) {
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
- Line 8: `    string ransom, magazine;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 9: `    getline(cin, ransom);`
  Explaination: Executes a single statement that updates program state.
- Line 10: `    getline(cin, magazine);`
  Explaination: Executes a single statement that updates program state.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    vector<int> freq(256, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 13: `    for (char c : magazine) freq[(unsigned char)c]++;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    for (char c : ransom) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `        if (--freq[(unsigned char)c] < 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `            cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 18: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 19: `        }`
  Explaination: Closes the current scope block.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    cout << "Yes\n";`
  Explaination: Prints formatted output to standard output.
- Line 23: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 24: `}`
  Explaination: Closes the current scope block.

## Block 38: Q37. Majority Elements More Than n/3 (Hashing Approach)

### Original Code
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
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    unordered_map<long long, int> freq;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 12: `    freq.reserve(2 * n + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        long long x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `        cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 17: `        freq[x]++;`
  Explaination: Executes a single statement that updates program state.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    vector<long long> out;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 21: `    for (auto &p : freq) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 22: `        if (p.second > n / 3) out.push_back(p.first);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 23: `    }`
  Explaination: Closes the current scope block.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    if (out.empty()) cout << -1 << "\n";`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 26: `    else {`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 27: `        sort(out.begin(), out.end());`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 28: `        for (long long x : out) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 29: `        cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 30: `    }`
  Explaination: Closes the current scope block.
- Line 31: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 32: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 33: `}`
  Explaination: Closes the current scope block.

## Block 39: Q38. Count Subarrays with XOR = K

### Original Code
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
- Line 9: `    int k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 13: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    unordered_map<int, long long> freq;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 16: `    freq.reserve(2 * n + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 17: `    freq[0] = 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    int px = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 20: `    long long ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    for (int x : a) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 23: `        px ^= x;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 24: `        int need = px ^ k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 25: `        if (freq.count(need)) ans += freq[need];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 26: `        freq[px]++;`
  Explaination: Executes a single statement that updates program state.
- Line 27: `    }`
  Explaination: Closes the current scope block.
- Line 28: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 29: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 30: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 31: `}`
  Explaination: Closes the current scope block.

## Block 40: Q39. Longest Subarray with XOR = K

### Original Code
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
- Line 8: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 12: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    unordered_map<int, int> first;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 15: `    first.reserve(2 * n + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 16: `    first[0] = -1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    int px = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `    int best = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 22: `        px ^= a[i];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `        if (!first.count(px)) first[px] = i;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `        int need = px ^ k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 27: `        if (first.count(need)) best = max(best, i - first[need]);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 28: `    }`
  Explaination: Closes the current scope block.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    cout << best << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 31: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 32: `}`
  Explaination: Closes the current scope block.

## Block 41: Q40. Story-Based: Daily Transaction Anomaly (Pair Sum Alert)

### Original Code
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
- Line 9: `    long long s;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: `    cin >> n >> s;`
  Explaination: Reads input values from standard input into variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    unordered_set<long long> seen;`
  Explaination: Declares a hash set for fast membership checks.
- Line 13: `    seen.reserve(2 * n + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `        long long x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: `        cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 18: `        if (seen.count(s - x)) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 19: `            cout << "ALERT\n";`
  Explaination: Prints formatted output to standard output.
- Line 20: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 21: `        }`
  Explaination: Closes the current scope block.
- Line 22: `        seen.insert(x);`
  Explaination: Inserts element(s) at a specified position in a container.
- Line 23: `    }`
  Explaination: Closes the current scope block.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    cout << "SAFE\n";`
  Explaination: Prints formatted output to standard output.
- Line 26: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 27: `}`
  Explaination: Closes the current scope block.

## Block 42: Q41. Story-Based: Find Duplicate Employee ID in Log Stream

### Original Code
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
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    unordered_set<long long> seen;`
  Explaination: Declares a hash set for fast membership checks.
- Line 12: `    seen.reserve(2 * n + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        long long x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `        cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 17: `        if (seen.count(x)) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 18: `            cout << x << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 19: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 20: `        }`
  Explaination: Closes the current scope block.
- Line 21: `        seen.insert(x);`
  Explaination: Inserts element(s) at a specified position in a container.
- Line 22: `    }`
  Explaination: Closes the current scope block.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 25: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 26: `}`
  Explaination: Closes the current scope block.

## Block 43: Q42. Design: LRU Cache (HashMap + Doubly Linked List)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

class LRUCache {
    int cap;
    list<pair<int, int>> dq; // front = most recent
    unordered_map<int, list<pair<int, int>>::iterator> pos;

public:
    LRUCache(int capacity) : cap(capacity) {
        pos.reserve(2 * capacity + 1);
    }

    int get(int key) {
        if (!pos.count(key)) return -1;

        auto it = pos[key];
        int val = it->second;

        dq.splice(dq.begin(), dq, it);
        pos[key] = dq.begin();
        return val;
    }

    void put(int key, int value) {
        if (pos.count(key)) {
            auto it = pos[key];
            it->second = value;
            dq.splice(dq.begin(), dq, it);
            pos[key] = dq.begin();
            return;
        }

        if ((int)dq.size() == cap) {
            auto last = dq.back();
            pos.erase(last.first);
            dq.pop_back();
        }

        dq.push_front({key, value});
        pos[key] = dq.begin();
    }
};

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int capacity, q;
    cin >> capacity >> q;

    LRUCache cache(capacity);

    while (q--) {
        string op;
        cin >> op;

        if (op == "GET") {
            int key;
            cin >> key;
            cout << cache.get(key) << "\n";
        } else {
            int key, value;
            cin >> key >> value;
            cache.put(key, value);
        }
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
- Line 4: `class LRUCache {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 5: `    int cap;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    list<pair<int, int>> dq; // front = most recent`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 7: `    unordered_map<int, list<pair<int, int>>::iterator> pos;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `public:`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 10: `    LRUCache(int capacity) : cap(capacity) {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 11: `        pos.reserve(2 * capacity + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 12: `    }`
  Explaination: Closes the current scope block.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    int get(int key) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: `        if (!pos.count(key)) return -1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `        auto it = pos[key];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: `        int val = it->second;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `        dq.splice(dq.begin(), dq, it);`
  Explaination: Executes a single statement that updates program state.
- Line 21: `        pos[key] = dq.begin();`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: `        return val;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 23: `    }`
  Explaination: Closes the current scope block.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    void put(int key, int value) {`
  Explaination: Function declaration/definition header specifying return type, name, and parameters.
- Line 26: `        if (pos.count(key)) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 27: `            auto it = pos[key];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 28: `            it->second = value;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 29: `            dq.splice(dq.begin(), dq, it);`
  Explaination: Executes a single statement that updates program state.
- Line 30: `            pos[key] = dq.begin();`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 31: `            return;`
  Explaination: Executes a single statement that updates program state.
- Line 32: `        }`
  Explaination: Closes the current scope block.
- Line 33: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 34: `        if ((int)dq.size() == cap) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 35: `            auto last = dq.back();`
  Explaination: Accesses the last element of a sequence container.
- Line 36: `            pos.erase(last.first);`
  Explaination: Removes selected element(s) from a container.
- Line 37: `            dq.pop_back();`
  Explaination: Removes the last element from the container.
- Line 38: `        }`
  Explaination: Closes the current scope block.
- Line 39: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 40: `        dq.push_front({key, value});`
  Explaination: Executes a single statement that updates program state.
- Line 41: `        pos[key] = dq.begin();`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 42: `    }`
  Explaination: Closes the current scope block.
- Line 43: `};`
  Explaination: Closes the current class/struct/initializer block.
- Line 44: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 45: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 46: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 47: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 48: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 49: `    int capacity, q;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 50: `    cin >> capacity >> q;`
  Explaination: Reads input values from standard input into variables.
- Line 51: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 52: `    LRUCache cache(capacity);`
  Explaination: Executes a single statement that updates program state.
- Line 53: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 54: `    while (q--) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 55: `        string op;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 56: `        cin >> op;`
  Explaination: Reads input values from standard input into variables.
- Line 57: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 58: `        if (op == "GET") {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 59: `            int key;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 60: `            cin >> key;`
  Explaination: Reads input values from standard input into variables.
- Line 61: `            cout << cache.get(key) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 62: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 63: `            int key, value;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 64: `            cin >> key >> value;`
  Explaination: Reads input values from standard input into variables.
- Line 65: `            cache.put(key, value);`
  Explaination: Executes a single statement that updates program state.
- Line 66: `        }`
  Explaination: Closes the current scope block.
- Line 67: `    }`
  Explaination: Closes the current scope block.
- Line 68: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 69: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 70: `}`
  Explaination: Closes the current scope block.

## Block 44: Q43. Design: HashSet Operations

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int q;
    cin >> q;

    unordered_set<long long> st;
    st.reserve(2 * q + 1);

    while (q--) {
        string op;
        long long x;
        cin >> op >> x;

        if (op == "ADD") st.insert(x);
        else if (op == "REMOVE") st.erase(x);
        else {
            cout << (st.count(x) ? "Yes" : "No") << "\n";
        }
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
- Line 8: `    int q;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    cin >> q;`
  Explaination: Reads input values from standard input into variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    unordered_set<long long> st;`
  Explaination: Declares a hash set for fast membership checks.
- Line 12: `    st.reserve(2 * q + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    while (q--) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 15: `        string op;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 16: `        long long x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: `        cin >> op >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `        if (op == "ADD") st.insert(x);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 20: `        else if (op == "REMOVE") st.erase(x);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: `        else {`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 22: `            cout << (st.count(x) ? "Yes" : "No") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 23: `        }`
  Explaination: Closes the current scope block.
- Line 24: `    }`
  Explaination: Closes the current scope block.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 27: `}`
  Explaination: Closes the current scope block.
