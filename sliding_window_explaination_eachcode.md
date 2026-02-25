# TCS_NQT_Sliding_Window_Full_Questions_Answers_CPP.md: Line-by-Line Code Explaination

This file explains each C++ code block line-by-line from the source topic file.

## Block 1: General

### Original Code
```cpp
window += a[r];
if (r - l + 1 == k) {
    // process window
    window -= a[l++];
}
```

### Line-by-Line Explaination
- Line 1: `window += a[r];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 2: `if (r - l + 1 == k) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 3: `    // process window`
  Explaination: Comment line documenting intent for the next statement(s).
- Line 4: `    window -= a[l++];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 5: `}`
  Explaination: Closes the current scope block.

## Block 2: General

### Original Code
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

### Line-by-Line Explaination
- Line 1: `for (int r = 0; r < n; r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 2: `    // add a[r]`
  Explaination: Comment line documenting intent for the next statement(s).
- Line 3: `    while (invalid) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 4: `        // remove a[l]`
  Explaination: Comment line documenting intent for the next statement(s).
- Line 5: `        l++;`
  Explaination: Executes a single statement that updates program state.
- Line 6: `    }`
  Explaination: Closes the current scope block.
- Line 7: `    // process valid window [l..r]`
  Explaination: Comment line documenting intent for the next statement(s).
- Line 8: `}`
  Explaination: Closes the current scope block.

## Block 3: General

### Original Code
```cpp
exactlyK = atMostK(k) - atMostK(k - 1);
```

### Line-by-Line Explaination
- Line 1: `exactlyK = atMostK(k) - atMostK(k - 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.

## Block 4: Q1. Maximum Sum Subarray of Size K

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    if (k <= 0 || k > n) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 11: `        cout << 0 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 12: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 13: `    }`
  Explaination: Closes the current scope block.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    long long window = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `    for (int i = 0; i < k; i++) window += a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    long long best = window;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `    for (int r = k; r < n; r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 20: `        window += a[r] - a[r - k];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: `        best = max(best, window);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: `    }`
  Explaination: Closes the current scope block.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    cout << best << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 25: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 26: `}`
  Explaination: Closes the current scope block.

## Block 5: Q2. Minimum Sum Subarray of Size K

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    if (k <= 0 || k > n) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 11: `        cout << 0 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 12: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 13: `    }`
  Explaination: Closes the current scope block.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    long long window = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `    for (int i = 0; i < k; i++) window += a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    long long best = window;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `    for (int r = k; r < n; r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 20: `        window += a[r] - a[r - k];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: `        best = min(best, window);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: `    }`
  Explaination: Closes the current scope block.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    cout << best << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 25: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 26: `}`
  Explaination: Closes the current scope block.

## Block 6: Q3. First Negative Integer in Every Window of Size K

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    deque<int> dq;`
  Explaination: Declares a double-ended queue.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    for (int r = 0; r < n; r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        if (a[r] < 0) dq.push_back(r);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `        if (r >= k - 1) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `            int l = r - k + 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: `            while (!dq.empty() && dq.front() < l) dq.pop_front();`
  Explaination: Loop that repeats while the given condition remains true.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `            if (dq.empty()) cout << 0;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 20: `            else cout << a[dq.front()];`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `            if (r != n - 1) cout << " ";`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 23: `        }`
  Explaination: Closes the current scope block.
- Line 24: `    }`
  Explaination: Closes the current scope block.
- Line 25: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 28: `}`
  Explaination: Closes the current scope block.

## Block 7: Q4. Count Distinct Elements in Every Window of Size K

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    if (k <= 0 || k > n) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 11: `        cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 12: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 13: `    }`
  Explaination: Closes the current scope block.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    unordered_map<long long, int> freq;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 16: `    freq.reserve(2 * k + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    for (int i = 0; i < k; i++) freq[a[i]]++;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 19: `    cout << freq.size();`
  Explaination: Prints formatted output to standard output.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    for (int r = k; r < n; r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 22: `        long long out = a[r - k];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 23: `        if (--freq[out] == 0) freq.erase(out);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 24: `        freq[a[r]]++;`
  Explaination: Executes a single statement that updates program state.
- Line 25: `        cout << " " << freq.size();`
  Explaination: Prints formatted output to standard output.
- Line 26: `    }`
  Explaination: Closes the current scope block.
- Line 27: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 28: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 29: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 30: `}`
  Explaination: Closes the current scope block.

## Block 8: Q5. Maximum of All Subarrays of Size K

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    deque<int> dq; // indices with decreasing values`
  Explaination: Declares a double-ended queue.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    for (int r = 0; r < n; r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        while (!dq.empty() && a[dq.back()] <= a[r]) dq.pop_back();`
  Explaination: Loop that repeats while the given condition remains true.
- Line 14: `        dq.push_back(r);`
  Explaination: Appends a new element to the end of the container.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `        int l = r - k + 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: `        if (l >= 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 18: `            while (!dq.empty() && dq.front() < l) dq.pop_front();`
  Explaination: Loop that repeats while the given condition remains true.
- Line 19: `            cout << a[dq.front()];`
  Explaination: Prints formatted output to standard output.
- Line 20: `            if (r != n - 1) cout << " ";`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: `        }`
  Explaination: Closes the current scope block.
- Line 22: `    }`
  Explaination: Closes the current scope block.
- Line 23: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 26: `}`
  Explaination: Closes the current scope block.

## Block 9: Q6. Minimum of All Subarrays of Size K

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    deque<int> dq; // increasing values`
  Explaination: Declares a double-ended queue.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    for (int r = 0; r < n; r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        while (!dq.empty() && a[dq.back()] >= a[r]) dq.pop_back();`
  Explaination: Loop that repeats while the given condition remains true.
- Line 14: `        dq.push_back(r);`
  Explaination: Appends a new element to the end of the container.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `        int l = r - k + 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: `        if (l >= 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 18: `            while (!dq.empty() && dq.front() < l) dq.pop_front();`
  Explaination: Loop that repeats while the given condition remains true.
- Line 19: `            cout << a[dq.front()];`
  Explaination: Prints formatted output to standard output.
- Line 20: `            if (r != n - 1) cout << " ";`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: `        }`
  Explaination: Closes the current scope block.
- Line 22: `    }`
  Explaination: Closes the current scope block.
- Line 23: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 26: `}`
  Explaination: Closes the current scope block.

## Block 10: Q7. Average of Every Window of Size K

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<double> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    if (k <= 0 || k > n) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 11: `        cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 12: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 13: `    }`
  Explaination: Closes the current scope block.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    double sum = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `    for (int i = 0; i < k; i++) sum += a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    cout << fixed << setprecision(2);`
  Explaination: Prints formatted output to standard output.
- Line 19: `    cout << sum / k;`
  Explaination: Prints formatted output to standard output.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    for (int r = k; r < n; r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 22: `        sum += a[r] - a[r - k];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: `        cout << " " << sum / k;`
  Explaination: Prints formatted output to standard output.
- Line 24: `    }`
  Explaination: Closes the current scope block.
- Line 25: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 28: `}`
  Explaination: Closes the current scope block.

## Block 11: Q8. Count Windows of Size K with Sum >= X

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    long long x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    cin >> n >> k >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 10: `    for (auto &v : a) cin >> v;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    if (k <= 0 || k > n) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: `        cout << 0 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 14: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    long long sum = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: `    for (int i = 0; i < k; i++) sum += a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    long long ans = (sum >= x);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: `    for (int r = k; r < n; r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 22: `        sum += a[r] - a[r - k];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: `        if (sum >= x) ans++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
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

## Block 12: Q9. Maximum Number of Vowels in Any Substring of Length K

### Original Code
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
- Line 10: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 11: `    int k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    cin >> s >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    int n = (int)s.size();`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: `    if (k <= 0 || k > n) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `        cout << 0 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 17: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    int cnt = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: `    for (int i = 0; i < k; i++) if (isVowel(s[i])) cnt++;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    int best = cnt;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 24: `    for (int r = k; r < n; r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 25: `        if (isVowel(s[r])) cnt++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 26: `        if (isVowel(s[r - k])) cnt--;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 27: `        best = max(best, cnt);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
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

## Block 13: Q10. Permutation in String (Fixed Window Frequency)

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    string s, p;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 6: `    cin >> s >> p;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    int n = (int)s.size(), m = (int)p.size();`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    if (m > n) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 10: `        cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 11: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 12: `    }`
  Explaination: Closes the current scope block.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    vector<int> need(26, 0), have(26, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 15: `    for (char c : p) need[c - 'a']++;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    for (int i = 0; i < m; i++) have[s[i] - 'a']++;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: `    if (have == need) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 19: `        cout << "Yes\n";`
  Explaination: Prints formatted output to standard output.
- Line 20: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 21: `    }`
  Explaination: Closes the current scope block.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    for (int r = m; r < n; r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 24: `        have[s[r] - 'a']++;`
  Explaination: Executes a single statement that updates program state.
- Line 25: `        have[s[r - m] - 'a']--;`
  Explaination: Executes a single statement that updates program state.
- Line 26: `        if (have == need) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 27: `            cout << "Yes\n";`
  Explaination: Prints formatted output to standard output.
- Line 28: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
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

## Block 14: Q11. Smallest Subarray with Sum >= S (Positive Numbers)

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    long long s;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    cin >> n >> s;`
  Explaination: Reads input values from standard input into variables.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 10: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    int l = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    long long sum = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `    int best = INT_MAX;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    for (int r = 0; r < n; r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 17: `        sum += a[r];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: `        while (sum >= s) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 19: `            best = min(best, r - l + 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `            sum -= a[l++];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: `        }`
  Explaination: Closes the current scope block.
- Line 22: `    }`
  Explaination: Closes the current scope block.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    cout << (best == INT_MAX ? 0 : best) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 25: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 26: `}`
  Explaination: Closes the current scope block.

## Block 15: Q12. Longest Subarray with Sum <= K (Positive Numbers)

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    long long k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 10: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    int l = 0, best = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    long long sum = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    for (int r = 0; r < n; r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `        sum += a[r];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `        while (sum > k && l <= r) sum -= a[l++];`
  Explaination: Loop that repeats while the given condition remains true.
- Line 18: `        best = max(best, r - l + 1);`
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

## Block 16: Q13. Longest Substring Without Repeating Characters

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 6: `    cin >> s;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    vector<int> last(256, -1);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    int l = 0, best = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    for (int r = 0; r < (int)s.size(); r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        unsigned char c = (unsigned char)s[r];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 13: `        l = max(l, last[c] + 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: `        last[c] = r;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `        best = max(best, r - l + 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    cout << best << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 19: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 20: `}`
  Explaination: Closes the current scope block.

## Block 17: Q14. Longest Substring with At Most K Distinct Characters

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 6: `    int k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    cin >> s >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    if (k <= 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 10: `        cout << 0 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 11: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 12: `    }`
  Explaination: Closes the current scope block.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    vector<int> freq(256, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 15: `    int distinct = 0, l = 0, best = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    for (int r = 0; r < (int)s.size(); r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: `        unsigned char c = (unsigned char)s[r];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `        if (freq[c]++ == 0) distinct++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `        while (distinct > k) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 22: `            unsigned char cl = (unsigned char)s[l++];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: `            if (--freq[cl] == 0) distinct--;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 24: `        }`
  Explaination: Closes the current scope block.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `        best = max(best, r - l + 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
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

## Block 18: Q15. Longest Substring with Exactly K Distinct Characters

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int atMostK(const string& s, int k) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    if (k < 0) return 0;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    vector<int> freq(256, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 7: `    int l = 0, distinct = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 8: `    int best = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    for (int r = 0; r < (int)s.size(); r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: `        unsigned char c = (unsigned char)s[r];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: `        if (freq[c]++ == 0) distinct++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `        while (distinct > k) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 15: `            unsigned char cl = (unsigned char)s[l++];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `            if (--freq[cl] == 0) distinct--;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `        }`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `        best = max(best, r - l + 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: `    return best;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 22: `}`
  Explaination: Closes the current scope block.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 25: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 26: `    int k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 27: `    cin >> s >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 28: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 29: `    // longest exactly-K needs explicit check`
  Explaination: Comment line documenting intent for the next statement(s).
- Line 30: `    vector<int> freq(256, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 31: `    int l = 0, distinct = 0, best = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 32: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 33: `    for (int r = 0; r < (int)s.size(); r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 34: `        unsigned char c = (unsigned char)s[r];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 35: `        if (freq[c]++ == 0) distinct++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 36: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 37: `        while (distinct > k) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 38: `            unsigned char cl = (unsigned char)s[l++];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 39: `            if (--freq[cl] == 0) distinct--;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 40: `        }`
  Explaination: Closes the current scope block.
- Line 41: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 42: `        if (distinct == k) best = max(best, r - l + 1);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 43: `    }`
  Explaination: Closes the current scope block.
- Line 44: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 45: `    cout << best << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 46: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 47: `}`
  Explaination: Closes the current scope block.

## Block 19: Q16. Count Substrings with At Most K Distinct Characters

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `long long atMostK(const string& s, int k) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    if (k < 0) return 0;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    vector<int> freq(256, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 7: `    int l = 0, distinct = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 8: `    long long ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    for (int r = 0; r < (int)s.size(); r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: `        unsigned char c = (unsigned char)s[r];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: `        if (freq[c]++ == 0) distinct++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `        while (distinct > k) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 15: `            unsigned char cl = (unsigned char)s[l++];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `            if (--freq[cl] == 0) distinct--;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `        }`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `        ans += (r - l + 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: `    return ans;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 22: `}`
  Explaination: Closes the current scope block.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 25: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 26: `    int k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 27: `    cin >> s >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 28: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 29: `    cout << atMostK(s, k) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 30: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 31: `}`
  Explaination: Closes the current scope block.

## Block 20: Q17. Count Substrings with Exactly K Distinct Characters

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `long long atMostK(const string& s, int k) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    if (k < 0) return 0;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    vector<int> freq(256, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 7: `    int l = 0, distinct = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 8: `    long long ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    for (int r = 0; r < (int)s.size(); r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: `        unsigned char c = (unsigned char)s[r];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: `        if (freq[c]++ == 0) distinct++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `        while (distinct > k) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 15: `            unsigned char cl = (unsigned char)s[l++];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `            if (--freq[cl] == 0) distinct--;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `        }`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `        ans += (r - l + 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    return ans;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 23: `}`
  Explaination: Closes the current scope block.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 26: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 27: `    int k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 28: `    cin >> s >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    cout << atMostK(s, k) - atMostK(s, k - 1) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 31: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 32: `}`
  Explaination: Closes the current scope block.

## Block 21: Q18. Longest Repeating Character Replacement

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 6: `    int k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    cin >> s >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    vector<int> freq(26, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 10: `    int l = 0, best = 0, maxCount = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    for (int r = 0; r < (int)s.size(); r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        maxCount = max(maxCount, ++freq[s[r] - 'A']);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `        while ((r - l + 1) - maxCount > k) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 16: `            freq[s[l] - 'A']--;`
  Explaination: Executes a single statement that updates program state.
- Line 17: `            l++;`
  Explaination: Executes a single statement that updates program state.
- Line 18: `        }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `        best = max(best, r - l + 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: `    }`
  Explaination: Closes the current scope block.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    cout << best << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 24: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 25: `}`
  Explaination: Closes the current scope block.

## Block 22: Q19. Minimum Window Substring

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    string s, t;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 6: `    cin >> s >> t;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    vector<int> need(256, 0), have(256, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    int requiredKinds = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    for (char c : t) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        if (need[(unsigned char)c] == 0) requiredKinds++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: `        need[(unsigned char)c]++;`
  Explaination: Executes a single statement that updates program state.
- Line 14: `    }`
  Explaination: Closes the current scope block.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    int formed = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: `    int l = 0, bestLen = INT_MAX, bestL = -1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    for (int r = 0; r < (int)s.size(); r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 20: `        unsigned char rc = (unsigned char)s[r];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: `        have[rc]++;`
  Explaination: Executes a single statement that updates program state.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `        if (need[rc] > 0 && have[rc] == need[rc]) formed++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `        while (l <= r && formed == requiredKinds) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 26: `            if (r - l + 1 < bestLen) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 27: `                bestLen = r - l + 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 28: `                bestL = l;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 29: `            }`
  Explaination: Closes the current scope block.
- Line 30: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 31: `            unsigned char lc = (unsigned char)s[l++];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 32: `            have[lc]--;`
  Explaination: Executes a single statement that updates program state.
- Line 33: `            if (need[lc] > 0 && have[lc] < need[lc]) formed--;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 34: `        }`
  Explaination: Closes the current scope block.
- Line 35: `    }`
  Explaination: Closes the current scope block.
- Line 36: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 37: `    if (bestL == -1) cout << -1 << "\n";`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 38: `    else cout << s.substr(bestL, bestLen) << "\n";`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 39: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 40: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 41: `}`
  Explaination: Closes the current scope block.

## Block 23: Q20. Fruits Into Baskets (At Most 2 Distinct)

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    unordered_map<int, int> freq;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 11: `    int l = 0, best = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    for (int r = 0; r < n; r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        freq[a[r]]++;`
  Explaination: Executes a single statement that updates program state.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `        while ((int)freq.size() > 2) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 17: `            if (--freq[a[l]] == 0) freq.erase(a[l]);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 18: `            l++;`
  Explaination: Executes a single statement that updates program state.
- Line 19: `        }`
  Explaination: Closes the current scope block.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `        best = max(best, r - l + 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: `    }`
  Explaination: Closes the current scope block.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    cout << best << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 25: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 26: `}`
  Explaination: Closes the current scope block.

## Block 24: Q21. Max Consecutive Ones III (Flip at Most K Zeros)

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    int l = 0, zeros = 0, best = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    for (int r = 0; r < n; r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        if (a[r] == 0) zeros++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `        while (zeros > k) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 16: `            if (a[l] == 0) zeros--;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `            l++;`
  Explaination: Executes a single statement that updates program state.
- Line 18: `        }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `        best = max(best, r - l + 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: `    }`
  Explaination: Closes the current scope block.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    cout << best << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 24: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 25: `}`
  Explaination: Closes the current scope block.

## Block 25: Q22. Longest Subarray with At Most K Zeroes

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    int l = 0, zeros = 0, best = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    for (int r = 0; r < n; r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        zeros += (a[r] == 0);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: `        while (zeros > k) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 15: `            zeros -= (a[l] == 0);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `            l++;`
  Explaination: Executes a single statement that updates program state.
- Line 17: `        }`
  Explaination: Closes the current scope block.
- Line 18: `        best = max(best, r - l + 1);`
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

## Block 26: Q23. Count Nice Subarrays (Exactly K Odd Numbers)

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `long long atMostKOdd(const vector<int>& a, int k) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    if (k < 0) return 0;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    int l = 0, odd = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    long long ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    for (int r = 0; r < (int)a.size(); r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        odd += (a[r] & 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `        while (odd > k) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 13: `            odd -= (a[l] & 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: `            l++;`
  Explaination: Executes a single statement that updates program state.
- Line 15: `        }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `        ans += (r - l + 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    return ans;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 21: `}`
  Explaination: Closes the current scope block.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 24: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 25: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 28: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    cout << atMostKOdd(a, k) - atMostKOdd(a, k - 1) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 31: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 32: `}`
  Explaination: Closes the current scope block.

## Block 27: Q24. Binary Subarrays with Sum = Goal

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `long long atMostSum(const vector<int>& a, int goal) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    if (goal < 0) return 0;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 7: `    int l = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 8: `    long long sum = 0, ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    for (int r = 0; r < (int)a.size(); r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: `        sum += a[r];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `        while (sum > goal) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 14: `            sum -= a[l++];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `        }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `        ans += (r - l + 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    return ans;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 21: `}`
  Explaination: Closes the current scope block.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 24: `    int n, goal;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 25: `    cin >> n >> goal;`
  Explaination: Reads input values from standard input into variables.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 28: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    cout << atMostSum(a, goal) - atMostSum(a, goal - 1) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 31: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 32: `}`
  Explaination: Closes the current scope block.

## Block 28: Q25. Subarray Product Less Than K

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    long long k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 10: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    if (k <= 1) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: `        cout << 0 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 14: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    long long prod = 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: `    int l = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `    long long ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    for (int r = 0; r < n; r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 22: `        prod *= a[r];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `        while (prod >= k && l <= r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 25: `            prod /= a[l++];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 26: `        }`
  Explaination: Closes the current scope block.
- Line 27: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 28: `        ans += (r - l + 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 29: `    }`
  Explaination: Closes the current scope block.
- Line 30: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 31: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 32: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 33: `}`
  Explaination: Closes the current scope block.

## Block 29: Q26. Longest Subarray with Absolute Difference <= Limit

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    long long limit;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    cin >> n >> limit;`
  Explaination: Reads input values from standard input into variables.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 10: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    deque<int> maxDq, minDq;`
  Explaination: Declares a double-ended queue.
- Line 13: `    int l = 0, best = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    for (int r = 0; r < n; r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `        while (!maxDq.empty() && a[maxDq.back()] <= a[r]) maxDq.pop_back();`
  Explaination: Loop that repeats while the given condition remains true.
- Line 17: `        while (!minDq.empty() && a[minDq.back()] >= a[r]) minDq.pop_back();`
  Explaination: Loop that repeats while the given condition remains true.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `        maxDq.push_back(r);`
  Explaination: Appends a new element to the end of the container.
- Line 20: `        minDq.push_back(r);`
  Explaination: Appends a new element to the end of the container.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `        while (!maxDq.empty() && !minDq.empty() && a[maxDq.front()] - a[minDq.front()] > limit) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 23: `            if (maxDq.front() == l) maxDq.pop_front();`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 24: `            if (minDq.front() == l) minDq.pop_front();`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 25: `            l++;`
  Explaination: Executes a single statement that updates program state.
- Line 26: `        }`
  Explaination: Closes the current scope block.
- Line 27: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 28: `        best = max(best, r - l + 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
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

## Block 30: Q27. Shortest Subarray with Sum at Least K (With Negatives)

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    long long k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    vector<long long> a(n), pref(n + 1, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 10: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: `        cin >> a[i];`
  Explaination: Reads input values from standard input into variables.
- Line 12: `        pref[i + 1] = pref[i] + a[i];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 13: `    }`
  Explaination: Closes the current scope block.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    deque<int> dq;`
  Explaination: Declares a double-ended queue.
- Line 16: `    int best = n + 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    for (int i = 0; i <= n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 19: `        while (!dq.empty() && pref[i] - pref[dq.front()] >= k) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 20: `            best = min(best, i - dq.front());`
  Explaination: Accesses the front element of a queue/deque.
- Line 21: `            dq.pop_front();`
  Explaination: Executes a single statement that updates program state.
- Line 22: `        }`
  Explaination: Closes the current scope block.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `        while (!dq.empty() && pref[i] <= pref[dq.back()]) dq.pop_back();`
  Explaination: Loop that repeats while the given condition remains true.
- Line 25: `        dq.push_back(i);`
  Explaination: Appends a new element to the end of the container.
- Line 26: `    }`
  Explaination: Closes the current scope block.
- Line 27: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 28: `    cout << (best == n + 1 ? -1 : best) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 29: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 30: `}`
  Explaination: Closes the current scope block.

## Block 31: Q28. Find All Start Indices of Anagrams of Pattern

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    string s, p;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 6: `    cin >> s >> p;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    int n = (int)s.size(), m = (int)p.size();`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    if (m > n) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 10: `        cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 11: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 12: `    }`
  Explaination: Closes the current scope block.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    vector<int> need(26, 0), have(26, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 15: `    for (char c : p) need[c - 'a']++;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    for (int i = 0; i < m; i++) have[s[i] - 'a']++;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    vector<int> ans;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 20: `    if (have == need) ans.push_back(0);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    for (int r = m; r < n; r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 23: `        have[s[r] - 'a']++;`
  Explaination: Executes a single statement that updates program state.
- Line 24: `        have[s[r - m] - 'a']--;`
  Explaination: Executes a single statement that updates program state.
- Line 25: `        if (have == need) ans.push_back(r - m + 1);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 26: `    }`
  Explaination: Closes the current scope block.
- Line 27: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 28: `    if (ans.empty()) cout << -1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 29: `    else {`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 30: `        for (int x : ans) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 31: `    }`
  Explaination: Closes the current scope block.
- Line 32: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 33: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 34: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 35: `}`
  Explaination: Closes the current scope block.

## Block 32: Q29. Count Substrings Containing All Three Characters (a,b,c)

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 6: `    cin >> s;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    vector<int> freq(3, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    int l = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: `    long long ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    for (int r = 0; r < (int)s.size(); r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        freq[s[r] - 'a']++;`
  Explaination: Executes a single statement that updates program state.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `        while (freq[0] > 0 && freq[1] > 0 && freq[2] > 0) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 16: `            ans += (long long)s.size() - r;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `            freq[s[l] - 'a']--;`
  Explaination: Executes a single statement that updates program state.
- Line 18: `            l++;`
  Explaination: Executes a single statement that updates program state.
- Line 19: `        }`
  Explaination: Closes the current scope block.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 23: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 24: `}`
  Explaination: Closes the current scope block.

## Block 33: Q30. Longest Substring with At Most Two Distinct Characters

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 6: `    cin >> s;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    vector<int> freq(256, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    int l = 0, distinct = 0, best = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    for (int r = 0; r < (int)s.size(); r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        unsigned char c = (unsigned char)s[r];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 13: `        if (freq[c]++ == 0) distinct++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `        while (distinct > 2) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 16: `            unsigned char cl = (unsigned char)s[l++];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `            if (--freq[cl] == 0) distinct--;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 18: `        }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `        best = max(best, r - l + 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: `    }`
  Explaination: Closes the current scope block.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    cout << best << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 24: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 25: `}`
  Explaination: Closes the current scope block.

## Block 34: Q31. Contains Nearby Duplicate (Distance <= K)

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    unordered_set<int> win;`
  Explaination: Declares a hash set for fast membership checks.
- Line 12: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        if (win.count(a[i])) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `            cout << "Yes\n";`
  Explaination: Prints formatted output to standard output.
- Line 15: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 16: `        }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `        win.insert(a[i]);`
  Explaination: Inserts element(s) at a specified position in a container.
- Line 19: `        if ((int)win.size() > k) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 20: `            win.erase(a[i - k]);`
  Explaination: Removes selected element(s) from a container.
- Line 21: `        }`
  Explaination: Closes the current scope block.
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

## Block 35: Q32. Maximum Points You Can Obtain from Cards

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    long long total = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: `        cin >> a[i];`
  Explaination: Reads input values from standard input into variables.
- Line 12: `        total += a[i];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 13: `    }`
  Explaination: Closes the current scope block.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    if (k >= n) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `        cout << total << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 17: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    int windowLen = n - k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: `    long long window = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 22: `    for (int i = 0; i < windowLen; i++) window += a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    long long minWindow = window;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 25: `    for (int r = windowLen; r < n; r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 26: `        window += a[r] - a[r - windowLen];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 27: `        minWindow = min(minWindow, window);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 28: `    }`
  Explaination: Closes the current scope block.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    cout << total - minWindow << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 31: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 32: `}`
  Explaination: Closes the current scope block.

## Block 36: Q33. Minimum Operations to Reduce X to Zero

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    long long x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    cin >> n >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 10: `    long long total = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        cin >> a[i];`
  Explaination: Reads input values from standard input into variables.
- Line 13: `        total += a[i];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: `    }`
  Explaination: Closes the current scope block.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    long long target = total - x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: `    if (target < 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 18: `        cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 19: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: `    if (target == 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 22: `        cout << n << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 23: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 24: `    }`
  Explaination: Closes the current scope block.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    int l = 0, best = -1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 27: `    long long sum = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 28: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 29: `    for (int r = 0; r < n; r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 30: `        sum += a[r];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 31: `        while (sum > target && l <= r) sum -= a[l++];`
  Explaination: Loop that repeats while the given condition remains true.
- Line 32: `        if (sum == target) best = max(best, r - l + 1);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 33: `    }`
  Explaination: Closes the current scope block.
- Line 34: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 35: `    if (best == -1) cout << -1 << "\n";`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 36: `    else cout << (n - best) << "\n";`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 37: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 38: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 39: `}`
  Explaination: Closes the current scope block.

## Block 37: Q34. Grumpy Bookstore Owner (Story-Based)

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    vector<int> cust(n), gr(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (auto &x : cust) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `    for (auto &x : gr) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    long long base = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    for (int i = 0; i < n; i++) if (gr[i] == 0) base += cust[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    long long gain = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `    for (int i = 0; i < k && i < n; i++) if (gr[i]) gain += cust[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    long long bestGain = gain;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `    for (int r = k; r < n; r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 20: `        if (gr[r]) gain += cust[r];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: `        if (gr[r - k]) gain -= cust[r - k];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 22: `        bestGain = max(bestGain, gain);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: `    }`
  Explaination: Closes the current scope block.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    cout << base + bestGain << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 26: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 27: `}`
  Explaination: Closes the current scope block.

## Block 38: Q35. Diet Plan Performance (Story-Based)

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    long long lower, upper;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    cin >> n >> k >> lower >> upper;`
  Explaination: Reads input values from standard input into variables.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 10: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    long long sum = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    for (int i = 0; i < k; i++) sum += a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    long long score = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `    auto eval = [&](long long s) {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 17: `        if (s < lower) return -1LL;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 18: `        if (s > upper) return 1LL;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 19: `        return 0LL;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 20: `    };`
  Explaination: Closes the current class/struct/initializer block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    score += eval(sum);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    for (int r = k; r < n; r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 25: `        sum += a[r] - a[r - k];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 26: `        score += eval(sum);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 27: `    }`
  Explaination: Closes the current scope block.
- Line 28: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 29: `    cout << score << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 30: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 31: `}`
  Explaination: Closes the current scope block.

## Block 39: Q36. Maximum Erasure Value (Unique Subarray Sum)

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    unordered_map<int, int> last;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 11: `    long long sum = 0, best = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    int l = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    for (int r = 0; r < n; r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        if (last.count(a[r]) && last[a[r]] >= l) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `            int newL = last[a[r]] + 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: `            while (l < newL) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 18: `                sum -= a[l];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `                l++;`
  Explaination: Executes a single statement that updates program state.
- Line 20: `            }`
  Explaination: Closes the current scope block.
- Line 21: `        }`
  Explaination: Closes the current scope block.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `        sum += a[r];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 24: `        last[a[r]] = r;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 25: `        best = max(best, sum);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 26: `    }`
  Explaination: Closes the current scope block.
- Line 27: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 28: `    cout << best << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 29: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 30: `}`
  Explaination: Closes the current scope block.

## Block 40: Q37. Longest Repeating Digit Replacement in Numeric String

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 6: `    int k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    cin >> s >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    vector<int> freq(10, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 10: `    int l = 0, best = 0, mx = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    for (int r = 0; r < (int)s.size(); r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        int d = s[r] - '0';`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `        mx = max(mx, ++freq[d]);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `        while ((r - l + 1) - mx > k) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 17: `            freq[s[l] - '0']--;`
  Explaination: Executes a single statement that updates program state.
- Line 18: `            l++;`
  Explaination: Executes a single statement that updates program state.
- Line 19: `        }`
  Explaination: Closes the current scope block.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `        best = max(best, r - l + 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: `    }`
  Explaination: Closes the current scope block.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    cout << best << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 25: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 26: `}`
  Explaination: Closes the current scope block.

## Block 41: Q38. Count Subarrays with At Most K Distinct Integers

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `long long atMostK(const vector<int>& a, int k) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    if (k < 0) return 0;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    unordered_map<int, int> freq;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 7: `    int l = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 8: `    long long ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    for (int r = 0; r < (int)a.size(); r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: `        freq[a[r]]++;`
  Explaination: Executes a single statement that updates program state.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `        while ((int)freq.size() > k) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 14: `            if (--freq[a[l]] == 0) freq.erase(a[l]);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: `            l++;`
  Explaination: Executes a single statement that updates program state.
- Line 16: `        }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `        ans += (r - l + 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `    }`
  Explaination: Closes the current scope block.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    return ans;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 22: `}`
  Explaination: Closes the current scope block.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 25: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 26: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 27: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 28: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 29: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 30: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 31: `    cout << atMostK(a, k) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 32: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 33: `}`
  Explaination: Closes the current scope block.

## Block 42: Q39. Count Subarrays with Exactly K Distinct Integers

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `long long atMostK(const vector<int>& a, int k) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    if (k < 0) return 0;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    unordered_map<int, int> freq;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 7: `    int l = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 8: `    long long ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    for (int r = 0; r < (int)a.size(); r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: `        freq[a[r]]++;`
  Explaination: Executes a single statement that updates program state.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `        while ((int)freq.size() > k) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 14: `            if (--freq[a[l]] == 0) freq.erase(a[l]);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: `            l++;`
  Explaination: Executes a single statement that updates program state.
- Line 16: `        }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `        ans += (r - l + 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `    }`
  Explaination: Closes the current scope block.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    return ans;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 22: `}`
  Explaination: Closes the current scope block.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 25: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 26: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 27: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 28: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 29: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 30: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 31: `    cout << atMostK(a, k) - atMostK(a, k - 1) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 32: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 33: `}`
  Explaination: Closes the current scope block.

## Block 43: Q40. Story-Based: Suspicious Transaction Burst

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    long long t;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    cin >> n >> t;`
  Explaination: Reads input values from standard input into variables.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 10: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    int l = 0, best = INT_MAX;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    long long sum = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    for (int r = 0; r < n; r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `        sum += a[r];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `        while (sum >= t) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 18: `            best = min(best, r - l + 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `            sum -= a[l++];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `        }`
  Explaination: Closes the current scope block.
- Line 21: `    }`
  Explaination: Closes the current scope block.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    cout << (best == INT_MAX ? 0 : best) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 24: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 25: `}`
  Explaination: Closes the current scope block.
