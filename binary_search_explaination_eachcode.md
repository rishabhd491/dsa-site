# TCS_NQT_Binary_Search_Full_Questions_Answers_CPP.md: Line-by-Line Code Explaination

This file explains each C++ code block line-by-line from the source topic file.

## Block 1: General

### Original Code
```cpp
int l = low, r = high;
while (l <= r) {
    int mid = l + (r - l) / 2;
    if (condition(mid)) {
        // move one side
    } else {
        // move other side
    }
}
```

### Line-by-Line Explaination
- Line 1: `int l = low, r = high;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 2: `while (l <= r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 3: `    int mid = l + (r - l) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 4: `    if (condition(mid)) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 5: `        // move one side`
  Explaination: Comment line documenting intent for the next statement(s).
- Line 6: `    } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 7: `        // move other side`
  Explaination: Comment line documenting intent for the next statement(s).
- Line 8: `    }`
  Explaination: Closes the current scope block.
- Line 9: `}`
  Explaination: Closes the current scope block.

## Block 2: Q1. Iterative Binary Search

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, x;
    cin >> n >> x;
    vector<int> a(n);
    for (auto &v : a) cin >> v;

    int l = 0, r = n - 1;
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (a[m] == x) {
            cout << m << "\n";
            return 0;
        }
        if (a[m] < x) l = m + 1;
        else r = m - 1;
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
- Line 5: `    int n, x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &v : a) cin >> v;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    int l = 0, r = n - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    while (l <= r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 12: `        int m = l + (r - l) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `        if (a[m] == x) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `            cout << m << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 15: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 16: `        }`
  Explaination: Closes the current scope block.
- Line 17: `        if (a[m] < x) l = m + 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 18: `        else r = m - 1;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
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

## Block 3: Q2. Recursive Binary Search

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int bs(const vector<int>& a, int l, int r, int x) {
    if (l > r) return -1;
    int m = l + (r - l) / 2;
    if (a[m] == x) return m;
    if (a[m] < x) return bs(a, m + 1, r, x);
    return bs(a, l, m - 1, x);
}

int main() {
    int n, x;
    cin >> n >> x;
    vector<int> a(n);
    for (auto &v : a) cin >> v;

    cout << bs(a, 0, n - 1, x) << "\n";
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
- Line 4: `int bs(const vector<int>& a, int l, int r, int x) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    if (l > r) return -1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    int m = l + (r - l) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    if (a[m] == x) return m;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 8: `    if (a[m] < x) return bs(a, m + 1, r, x);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 9: `    return bs(a, l, m - 1, x);`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 10: `}`
  Explaination: Closes the current scope block.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 13: `    int n, x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `    cin >> n >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 15: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 16: `    for (auto &v : a) cin >> v;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    cout << bs(a, 0, n - 1, x) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 19: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 20: `}`
  Explaination: Closes the current scope block.

## Block 4: Q3. Lower Bound

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, x;
    cin >> n >> x;
    vector<int> a(n);
    for (auto &v : a) cin >> v;

    int l = 0, r = n;
    while (l < r) {
        int m = l + (r - l) / 2;
        if (a[m] >= x) r = m;
        else l = m + 1;
    }

    cout << l << "\n";
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
- Line 5: `    int n, x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &v : a) cin >> v;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    int l = 0, r = n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    while (l < r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 12: `        int m = l + (r - l) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `        if (a[m] >= x) r = m;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `        else l = m + 1;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    cout << l << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 18: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 19: `}`
  Explaination: Closes the current scope block.

## Block 5: Q4. Upper Bound

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, x;
    cin >> n >> x;
    vector<int> a(n);
    for (auto &v : a) cin >> v;

    int l = 0, r = n;
    while (l < r) {
        int m = l + (r - l) / 2;
        if (a[m] > x) r = m;
        else l = m + 1;
    }

    cout << l << "\n";
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
- Line 5: `    int n, x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &v : a) cin >> v;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    int l = 0, r = n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    while (l < r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 12: `        int m = l + (r - l) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `        if (a[m] > x) r = m;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `        else l = m + 1;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    cout << l << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 18: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 19: `}`
  Explaination: Closes the current scope block.

## Block 6: Q5. First Occurrence of X

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, x;
    cin >> n >> x;
    vector<int> a(n);
    for (auto &v : a) cin >> v;

    int l = 0, r = n - 1, ans = -1;
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (a[m] >= x) {
            if (a[m] == x) ans = m;
            r = m - 1;
        } else l = m + 1;
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
- Line 5: `    int n, x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &v : a) cin >> v;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    int l = 0, r = n - 1, ans = -1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    while (l <= r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 12: `        int m = l + (r - l) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `        if (a[m] >= x) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `            if (a[m] == x) ans = m;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: `            r = m - 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `        } else l = m + 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `    }`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 20: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 21: `}`
  Explaination: Closes the current scope block.

## Block 7: Q6. Last Occurrence of X

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, x;
    cin >> n >> x;
    vector<int> a(n);
    for (auto &v : a) cin >> v;

    int l = 0, r = n - 1, ans = -1;
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (a[m] <= x) {
            if (a[m] == x) ans = m;
            l = m + 1;
        } else r = m - 1;
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
- Line 5: `    int n, x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &v : a) cin >> v;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    int l = 0, r = n - 1, ans = -1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    while (l <= r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 12: `        int m = l + (r - l) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `        if (a[m] <= x) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `            if (a[m] == x) ans = m;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: `            l = m + 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `        } else r = m - 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `    }`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 20: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 21: `}`
  Explaination: Closes the current scope block.

## Block 8: Q7. Count Occurrences of X

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int firstOcc(const vector<int>& a, int x) {
    int l = 0, r = (int)a.size() - 1, ans = -1;
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (a[m] >= x) {
            if (a[m] == x) ans = m;
            r = m - 1;
        } else l = m + 1;
    }
    return ans;
}

int lastOcc(const vector<int>& a, int x) {
    int l = 0, r = (int)a.size() - 1, ans = -1;
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (a[m] <= x) {
            if (a[m] == x) ans = m;
            l = m + 1;
        } else r = m - 1;
    }
    return ans;
}

int main() {
    int n, x;
    cin >> n >> x;
    vector<int> a(n);
    for (auto &v : a) cin >> v;

    int f = firstOcc(a, x), l = lastOcc(a, x);
    cout << (f == -1 ? 0 : l - f + 1) << "\n";
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
- Line 4: `int firstOcc(const vector<int>& a, int x) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    int l = 0, r = (int)a.size() - 1, ans = -1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    while (l <= r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 7: `        int m = l + (r - l) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 8: `        if (a[m] >= x) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 9: `            if (a[m] == x) ans = m;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 10: `            r = m - 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 11: `        } else l = m + 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: `    }`
  Explaination: Closes the current scope block.
- Line 13: `    return ans;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 14: `}`
  Explaination: Closes the current scope block.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `int lastOcc(const vector<int>& a, int x) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: `    int l = 0, r = (int)a.size() - 1, ans = -1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: `    while (l <= r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 19: `        int m = l + (r - l) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 20: `        if (a[m] <= x) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: `            if (a[m] == x) ans = m;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 22: `            l = m + 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: `        } else r = m - 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 24: `    }`
  Explaination: Closes the current scope block.
- Line 25: `    return ans;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 26: `}`
  Explaination: Closes the current scope block.
- Line 27: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 28: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 29: `    int n, x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 30: `    cin >> n >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 31: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 32: `    for (auto &v : a) cin >> v;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 33: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 34: `    int f = firstOcc(a, x), l = lastOcc(a, x);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 35: `    cout << (f == -1 ? 0 : l - f + 1) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 36: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 37: `}`
  Explaination: Closes the current scope block.

## Block 9: Q8. Search Insert Position

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, x;
    cin >> n >> x;
    vector<int> a(n);
    for (auto &v : a) cin >> v;

    int l = 0, r = n;
    while (l < r) {
        int m = l + (r - l) / 2;
        if (a[m] >= x) r = m;
        else l = m + 1;
    }

    cout << l << "\n";
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
- Line 5: `    int n, x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &v : a) cin >> v;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    int l = 0, r = n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    while (l < r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 12: `        int m = l + (r - l) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `        if (a[m] >= x) r = m;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `        else l = m + 1;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    cout << l << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 18: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 19: `}`
  Explaination: Closes the current scope block.

## Block 10: Q9. Floor and Ceil in Sorted Array

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, x;
    cin >> n >> x;
    vector<int> a(n);
    for (auto &v : a) cin >> v;

    int floorVal = -1, ceilVal = -1;

    int l = 0, r = n - 1;
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (a[m] <= x) floorVal = a[m], l = m + 1;
        else r = m - 1;
    }

    l = 0, r = n - 1;
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (a[m] >= x) ceilVal = a[m], r = m - 1;
        else l = m + 1;
    }

    cout << floorVal << " " << ceilVal << "\n";
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
- Line 5: `    int n, x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &v : a) cin >> v;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    int floorVal = -1, ceilVal = -1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    int l = 0, r = n - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    while (l <= r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 14: `        int m = l + (r - l) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: `        if (a[m] <= x) floorVal = a[m], l = m + 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `        else r = m - 1;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 17: `    }`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    l = 0, r = n - 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `    while (l <= r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 21: `        int m = l + (r - l) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 22: `        if (a[m] >= x) ceilVal = a[m], r = m - 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 23: `        else l = m + 1;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 24: `    }`
  Explaination: Closes the current scope block.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    cout << floorVal << " " << ceilVal << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 27: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 28: `}`
  Explaination: Closes the current scope block.

## Block 11: Q10. Square Root (Floor)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n;
    cin >> n;

    long long l = 0, r = n, ans = 0;
    while (l <= r) {
        long long m = l + (r - l) / 2;
        if (m <= n / max(1LL, m)) {
            ans = m;
            l = m + 1;
        } else r = m - 1;
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
- Line 5: `    long long n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    long long l = 0, r = n, ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    while (l <= r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 10: `        long long m = l + (r - l) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `        if (m <= n / max(1LL, m)) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 12: `            ans = m;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 13: `            l = m + 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: `        } else r = m - 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 18: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 19: `}`
  Explaination: Closes the current scope block.

## Block 12: Q11. N-th Root of Integer

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

long long powerLimit(long long a, int n, long long lim) {
    __int128 p = 1;
    for (int i = 0; i < n; i++) {
        p *= a;
        if (p > lim) return lim + 1;
    }
    return (long long)p;
}

int main() {
    int n;
    long long m;
    cin >> n >> m;

    long long l = 1, r = m;
    while (l <= r) {
        long long mid = l + (r - l) / 2;
        long long p = powerLimit(mid, n, m);
        if (p == m) {
            cout << mid << "\n";
            return 0;
        }
        if (p < m) l = mid + 1;
        else r = mid - 1;
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
- Line 4: `long long powerLimit(long long a, int n, long long lim) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    __int128 p = 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 6: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 7: `        p *= a;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 8: `        if (p > lim) return lim + 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 9: `    }`
  Explaination: Closes the current scope block.
- Line 10: `    return (long long)p;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 11: `}`
  Explaination: Closes the current scope block.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 14: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: `    long long m;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `    cin >> n >> m;`
  Explaination: Reads input values from standard input into variables.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    long long l = 1, r = m;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `    while (l <= r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 20: `        long long mid = l + (r - l) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: `        long long p = powerLimit(mid, n, m);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 22: `        if (p == m) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 23: `            cout << mid << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 24: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 25: `        }`
  Explaination: Closes the current scope block.
- Line 26: `        if (p < m) l = mid + 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 27: `        else r = mid - 1;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 28: `    }`
  Explaination: Closes the current scope block.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 31: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 32: `}`
  Explaination: Closes the current scope block.

## Block 13: Q12. Find Peak Element

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (auto &v : a) cin >> v;

    int l = 0, r = n - 1;
    while (l < r) {
        int m = l + (r - l) / 2;
        if (a[m] < a[m + 1]) l = m + 1;
        else r = m;
    }

    cout << l << "\n";
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
- Line 8: `    for (auto &v : a) cin >> v;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    int l = 0, r = n - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    while (l < r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 12: `        int m = l + (r - l) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `        if (a[m] < a[m + 1]) l = m + 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `        else r = m;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    cout << l << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 18: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 19: `}`
  Explaination: Closes the current scope block.

## Block 14: Q13. Search in Rotated Sorted Array

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, x;
    cin >> n >> x;
    vector<int> a(n);
    for (auto &v : a) cin >> v;

    int l = 0, r = n - 1;
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (a[m] == x) {
            cout << m << "\n";
            return 0;
        }

        if (a[l] <= a[m]) {
            if (a[l] <= x && x < a[m]) r = m - 1;
            else l = m + 1;
        } else {
            if (a[m] < x && x <= a[r]) l = m + 1;
            else r = m - 1;
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
- Line 5: `    int n, x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &v : a) cin >> v;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    int l = 0, r = n - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    while (l <= r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 12: `        int m = l + (r - l) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `        if (a[m] == x) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `            cout << m << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 15: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 16: `        }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `        if (a[l] <= a[m]) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 19: `            if (a[l] <= x && x < a[m]) r = m - 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 20: `            else l = m + 1;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 21: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 22: `            if (a[m] < x && x <= a[r]) l = m + 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 23: `            else r = m - 1;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
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

## Block 15: Q14. Search in Rotated Sorted Array (With Duplicates)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, x;
    cin >> n >> x;
    vector<int> a(n);
    for (auto &v : a) cin >> v;

    int l = 0, r = n - 1;
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (a[m] == x) {
            cout << "Yes\n";
            return 0;
        }

        if (a[l] == a[m] && a[m] == a[r]) {
            l++, r--;
            continue;
        }

        if (a[l] <= a[m]) {
            if (a[l] <= x && x < a[m]) r = m - 1;
            else l = m + 1;
        } else {
            if (a[m] < x && x <= a[r]) l = m + 1;
            else r = m - 1;
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
- Line 5: `    int n, x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &v : a) cin >> v;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    int l = 0, r = n - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    while (l <= r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 12: `        int m = l + (r - l) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `        if (a[m] == x) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `            cout << "Yes\n";`
  Explaination: Prints formatted output to standard output.
- Line 15: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 16: `        }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `        if (a[l] == a[m] && a[m] == a[r]) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 19: `            l++, r--;`
  Explaination: Executes a single statement that updates program state.
- Line 20: `            continue;`
  Explaination: Skips remaining statements in the current loop iteration.
- Line 21: `        }`
  Explaination: Closes the current scope block.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `        if (a[l] <= a[m]) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 24: `            if (a[l] <= x && x < a[m]) r = m - 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 25: `            else l = m + 1;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 26: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 27: `            if (a[m] < x && x <= a[r]) l = m + 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 28: `            else r = m - 1;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
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

## Block 16: Q15. Minimum in Rotated Sorted Array

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (auto &v : a) cin >> v;

    int l = 0, r = n - 1;
    while (l < r) {
        int m = l + (r - l) / 2;
        if (a[m] > a[r]) l = m + 1;
        else r = m;
    }

    cout << a[l] << "\n";
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
- Line 8: `    for (auto &v : a) cin >> v;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    int l = 0, r = n - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    while (l < r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 12: `        int m = l + (r - l) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `        if (a[m] > a[r]) l = m + 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `        else r = m;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    cout << a[l] << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 18: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 19: `}`
  Explaination: Closes the current scope block.

## Block 17: Q16. Rotation Count in Rotated Sorted Array

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (auto &v : a) cin >> v;

    int l = 0, r = n - 1;
    while (l < r) {
        int m = l + (r - l) / 2;
        if (a[m] > a[r]) l = m + 1;
        else r = m;
    }

    cout << l << "\n";
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
- Line 8: `    for (auto &v : a) cin >> v;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    int l = 0, r = n - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    while (l < r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 12: `        int m = l + (r - l) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `        if (a[m] > a[r]) l = m + 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `        else r = m;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    cout << l << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 18: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 19: `}`
  Explaination: Closes the current scope block.

## Block 18: Q17. Single Element in Sorted Array

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (auto &v : a) cin >> v;

    int l = 0, r = n - 1;
    while (l < r) {
        int m = l + (r - l) / 2;
        if (m & 1) m--;

        if (a[m] == a[m + 1]) l = m + 2;
        else r = m;
    }

    cout << a[l] << "\n";
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
- Line 8: `    for (auto &v : a) cin >> v;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    int l = 0, r = n - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    while (l < r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 12: `        int m = l + (r - l) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `        if (m & 1) m--;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `        if (a[m] == a[m + 1]) l = m + 2;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `        else r = m;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 17: `    }`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    cout << a[l] << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 20: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 21: `}`
  Explaination: Closes the current scope block.

## Block 19: Q18. K-th Missing Positive Number

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;
    vector<int> a(n);
    for (auto &v : a) cin >> v;

    int l = 0, r = n;
    while (l < r) {
        int m = l + (r - l) / 2;
        int miss = a[m] - (m + 1);
        if (miss < k) l = m + 1;
        else r = m;
    }

    cout << (l + k) << "\n";
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
- Line 8: `    for (auto &v : a) cin >> v;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    int l = 0, r = n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    while (l < r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 12: `        int m = l + (r - l) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `        int miss = a[m] - (m + 1);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `        if (miss < k) l = m + 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: `        else r = m;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    cout << (l + k) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 19: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 20: `}`
  Explaination: Closes the current scope block.

## Block 20: Q19. Median of Two Sorted Arrays

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, m;
    cin >> n >> m;
    vector<int> a(n), b(m);
    for (auto &x : a) cin >> x;
    for (auto &x : b) cin >> x;

    if (n > m) { swap(a, b); swap(n, m); }

    int totalLeft = (n + m + 1) / 2;
    int l = 0, r = n;

    while (l <= r) {
        int cutA = l + (r - l) / 2;
        int cutB = totalLeft - cutA;

        int lA = (cutA == 0 ? INT_MIN : a[cutA - 1]);
        int rA = (cutA == n ? INT_MAX : a[cutA]);
        int lB = (cutB == 0 ? INT_MIN : b[cutB - 1]);
        int rB = (cutB == m ? INT_MAX : b[cutB]);

        if (lA <= rB && lB <= rA) {
            if ((n + m) % 2) {
                cout << max(lA, lB) << "\n";
            } else {
                double ans = (max(lA, lB) + min(rA, rB)) / 2.0;
                cout << fixed << setprecision(5) << ans << "\n";
            }
            return 0;
        }

        if (lA > rB) r = cutA - 1;
        else l = cutA + 1;
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
- Line 5: `    int n, m;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> m;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<int> a(n), b(m);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: `    for (auto &x : b) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    if (n > m) { swap(a, b); swap(n, m); }`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    int totalLeft = (n + m + 1) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `    int l = 0, r = n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    while (l <= r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 17: `        int cutA = l + (r - l) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: `        int cutB = totalLeft - cutA;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `        int lA = (cutA == 0 ? INT_MIN : a[cutA - 1]);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: `        int rA = (cutA == n ? INT_MAX : a[cutA]);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 22: `        int lB = (cutB == 0 ? INT_MIN : b[cutB - 1]);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 23: `        int rB = (cutB == m ? INT_MAX : b[cutB]);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `        if (lA <= rB && lB <= rA) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 26: `            if ((n + m) % 2) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 27: `                cout << max(lA, lB) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 28: `            } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 29: `                double ans = (max(lA, lB) + min(rA, rB)) / 2.0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 30: `                cout << fixed << setprecision(5) << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 31: `            }`
  Explaination: Closes the current scope block.
- Line 32: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 33: `        }`
  Explaination: Closes the current scope block.
- Line 34: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 35: `        if (lA > rB) r = cutA - 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 36: `        else l = cutA + 1;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 37: `    }`
  Explaination: Closes the current scope block.
- Line 38: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 39: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 40: `}`
  Explaination: Closes the current scope block.

## Block 21: Q20. K-th Element of Two Sorted Arrays

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, m, k;
    cin >> n >> m >> k;
    vector<int> a(n), b(m);
    for (auto &x : a) cin >> x;
    for (auto &x : b) cin >> x;

    if (n > m) { swap(a, b); swap(n, m); }

    int l = max(0, k - m), r = min(k, n);

    while (l <= r) {
        int cutA = l + (r - l) / 2;
        int cutB = k - cutA;

        int lA = (cutA == 0 ? INT_MIN : a[cutA - 1]);
        int rA = (cutA == n ? INT_MAX : a[cutA]);
        int lB = (cutB == 0 ? INT_MIN : b[cutB - 1]);
        int rB = (cutB == m ? INT_MAX : b[cutB]);

        if (lA <= rB && lB <= rA) {
            cout << max(lA, lB) << "\n";
            return 0;
        }

        if (lA > rB) r = cutA - 1;
        else l = cutA + 1;
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
- Line 5: `    int n, m, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> m >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<int> a(n), b(m);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: `    for (auto &x : b) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    if (n > m) { swap(a, b); swap(n, m); }`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    int l = max(0, k - m), r = min(k, n);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    while (l <= r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 16: `        int cutA = l + (r - l) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: `        int cutB = k - cutA;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `        int lA = (cutA == 0 ? INT_MIN : a[cutA - 1]);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 20: `        int rA = (cutA == n ? INT_MAX : a[cutA]);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: `        int lB = (cutB == 0 ? INT_MIN : b[cutB - 1]);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 22: `        int rB = (cutB == m ? INT_MAX : b[cutB]);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `        if (lA <= rB && lB <= rA) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 25: `            cout << max(lA, lB) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 26: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 27: `        }`
  Explaination: Closes the current scope block.
- Line 28: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 29: `        if (lA > rB) r = cutA - 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 30: `        else l = cutA + 1;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 31: `    }`
  Explaination: Closes the current scope block.
- Line 32: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 33: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 34: `}`
  Explaination: Closes the current scope block.

## Block 22: Q21. Koko Eating Bananas (Min Speed)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

bool can(const vector<int>& p, int h, int k) {
    long long t = 0;
    for (int x : p) t += (x + k - 1) / k;
    return t <= h;
}

int main() {
    int n, h;
    cin >> n >> h;
    vector<int> p(n);
    for (auto &x : p) cin >> x;

    int l = 1, r = *max_element(p.begin(), p.end()), ans = r;
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (can(p, h, m)) ans = m, r = m - 1;
        else l = m + 1;
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
- Line 4: `bool can(const vector<int>& p, int h, int k) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    long long t = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    for (int x : p) t += (x + k - 1) / k;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 7: `    return t <= h;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 8: `}`
  Explaination: Closes the current scope block.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 11: `    int n, h;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    cin >> n >> h;`
  Explaination: Reads input values from standard input into variables.
- Line 13: `    vector<int> p(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 14: `    for (auto &x : p) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    int l = 1, r = *max_element(p.begin(), p.end()), ans = r;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: `    while (l <= r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 18: `        int m = l + (r - l) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `        if (can(p, h, m)) ans = m, r = m - 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 20: `        else l = m + 1;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 21: `    }`
  Explaination: Closes the current scope block.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 24: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 25: `}`
  Explaination: Closes the current scope block.

## Block 23: Q22. Ship Packages Within D Days

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

bool can(const vector<int>& w, int d, int cap) {
    int days = 1;
    long long cur = 0;
    for (int x : w) {
        if (cur + x > cap) {
            days++;
            cur = x;
        } else cur += x;
    }
    return days <= d;
}

int main() {
    int n, d;
    cin >> n >> d;
    vector<int> w(n);
    for (auto &x : w) cin >> x;

    int l = *max_element(w.begin(), w.end());
    int r = accumulate(w.begin(), w.end(), 0);
    int ans = r;

    while (l <= r) {
        int m = l + (r - l) / 2;
        if (can(w, d, m)) ans = m, r = m - 1;
        else l = m + 1;
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
- Line 4: `bool can(const vector<int>& w, int d, int cap) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    int days = 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    long long cur = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    for (int x : w) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 8: `        if (cur + x > cap) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 9: `            days++;`
  Explaination: Executes a single statement that updates program state.
- Line 10: `            cur = x;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 11: `        } else cur += x;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: `    }`
  Explaination: Closes the current scope block.
- Line 13: `    return days <= d;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 14: `}`
  Explaination: Closes the current scope block.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 17: `    int n, d;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: `    cin >> n >> d;`
  Explaination: Reads input values from standard input into variables.
- Line 19: `    vector<int> w(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 20: `    for (auto &x : w) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    int l = *max_element(w.begin(), w.end());`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 23: `    int r = accumulate(w.begin(), w.end(), 0);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 24: `    int ans = r;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    while (l <= r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 27: `        int m = l + (r - l) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 28: `        if (can(w, d, m)) ans = m, r = m - 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 29: `        else l = m + 1;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 30: `    }`
  Explaination: Closes the current scope block.
- Line 31: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 32: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 33: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 34: `}`
  Explaination: Closes the current scope block.

## Block 24: Q23. Minimum Days to Make M Bouquets

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

bool can(const vector<int>& a, int m, int k, int day) {
    int flowers = 0, bouq = 0;
    for (int x : a) {
        if (x <= day) {
            flowers++;
            if (flowers == k) {
                bouq++;
                flowers = 0;
            }
        } else flowers = 0;
    }
    return bouq >= m;
}

int main() {
    int n, m, k;
    cin >> n >> m >> k;
    vector<int> a(n);
    for (auto &x : a) cin >> x;

    if (1LL * m * k > n) {
        cout << -1 << "\n";
        return 0;
    }

    int l = *min_element(a.begin(), a.end());
    int r = *max_element(a.begin(), a.end());
    int ans = r;

    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (can(a, m, k, mid)) ans = mid, r = mid - 1;
        else l = mid + 1;
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
- Line 4: `bool can(const vector<int>& a, int m, int k, int day) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    int flowers = 0, bouq = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    for (int x : a) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 7: `        if (x <= day) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 8: `            flowers++;`
  Explaination: Executes a single statement that updates program state.
- Line 9: `            if (flowers == k) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 10: `                bouq++;`
  Explaination: Executes a single statement that updates program state.
- Line 11: `                flowers = 0;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: `            }`
  Explaination: Closes the current scope block.
- Line 13: `        } else flowers = 0;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: `    }`
  Explaination: Closes the current scope block.
- Line 15: `    return bouq >= m;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 16: `}`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 19: `    int n, m, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 20: `    cin >> n >> m >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 21: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 22: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    if (1LL * m * k > n) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 25: `        cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 26: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 27: `    }`
  Explaination: Closes the current scope block.
- Line 28: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 29: `    int l = *min_element(a.begin(), a.end());`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 30: `    int r = *max_element(a.begin(), a.end());`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 31: `    int ans = r;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 32: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 33: `    while (l <= r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 34: `        int mid = l + (r - l) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 35: `        if (can(a, m, k, mid)) ans = mid, r = mid - 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 36: `        else l = mid + 1;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 37: `    }`
  Explaination: Closes the current scope block.
- Line 38: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 39: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 40: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 41: `}`
  Explaination: Closes the current scope block.

## Block 25: Q24. Smallest Divisor Given Threshold

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

bool ok(const vector<int>& a, int th, int d) {
    long long s = 0;
    for (int x : a) s += (x + d - 1) / d;
    return s <= th;
}

int main() {
    int n, th;
    cin >> n >> th;
    vector<int> a(n);
    for (auto &x : a) cin >> x;

    int l = 1, r = *max_element(a.begin(), a.end()), ans = r;
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (ok(a, th, m)) ans = m, r = m - 1;
        else l = m + 1;
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
- Line 4: `bool ok(const vector<int>& a, int th, int d) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    long long s = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    for (int x : a) s += (x + d - 1) / d;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 7: `    return s <= th;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 8: `}`
  Explaination: Closes the current scope block.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 11: `    int n, th;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    cin >> n >> th;`
  Explaination: Reads input values from standard input into variables.
- Line 13: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 14: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    int l = 1, r = *max_element(a.begin(), a.end()), ans = r;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: `    while (l <= r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 18: `        int m = l + (r - l) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `        if (ok(a, th, m)) ans = m, r = m - 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 20: `        else l = m + 1;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 21: `    }`
  Explaination: Closes the current scope block.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 24: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 25: `}`
  Explaination: Closes the current scope block.

## Block 26: Q25. Aggressive Cows

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

bool canPlace(const vector<int>& s, int c, int dist) {
    int cnt = 1, last = s[0];
    for (int i = 1; i < (int)s.size(); i++) {
        if (s[i] - last >= dist) {
            cnt++;
            last = s[i];
            if (cnt >= c) return true;
        }
    }
    return false;
}

int main() {
    int n, c;
    cin >> n >> c;
    vector<int> s(n);
    for (auto &x : s) cin >> x;
    sort(s.begin(), s.end());

    int l = 1, r = s.back() - s.front(), ans = 0;
    while (l <= r) {
        int m = l + (r - l) / 2;
        if (canPlace(s, c, m)) ans = m, l = m + 1;
        else r = m - 1;
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
- Line 4: `bool canPlace(const vector<int>& s, int c, int dist) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    int cnt = 1, last = s[0];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    for (int i = 1; i < (int)s.size(); i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 7: `        if (s[i] - last >= dist) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 8: `            cnt++;`
  Explaination: Executes a single statement that updates program state.
- Line 9: `            last = s[i];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 10: `            if (cnt >= c) return true;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 11: `        }`
  Explaination: Closes the current scope block.
- Line 12: `    }`
  Explaination: Closes the current scope block.
- Line 13: `    return false;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 14: `}`
  Explaination: Closes the current scope block.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 17: `    int n, c;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: `    cin >> n >> c;`
  Explaination: Reads input values from standard input into variables.
- Line 19: `    vector<int> s(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 20: `    for (auto &x : s) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 21: `    sort(s.begin(), s.end());`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    int l = 1, r = s.back() - s.front(), ans = 0;`
  Explaination: Accesses the front element of a queue/deque.
- Line 24: `    while (l <= r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 25: `        int m = l + (r - l) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 26: `        if (canPlace(s, c, m)) ans = m, l = m + 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 27: `        else r = m - 1;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 28: `    }`
  Explaination: Closes the current scope block.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 31: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 32: `}`
  Explaination: Closes the current scope block.

## Block 27: Q26. Allocate Minimum Pages

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

bool can(const vector<int>& a, int m, int cap) {
    int stu = 1;
    long long pages = 0;

    for (int x : a) {
        if (x > cap) return false;
        if (pages + x > cap) {
            stu++;
            pages = x;
        } else pages += x;
    }

    return stu <= m;
}

int main() {
    int n, m;
    cin >> n >> m;
    vector<int> a(n);
    for (auto &x : a) cin >> x;

    if (m > n) {
        cout << -1 << "\n";
        return 0;
    }

    int l = *max_element(a.begin(), a.end());
    int r = accumulate(a.begin(), a.end(), 0);
    int ans = r;

    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (can(a, m, mid)) ans = mid, r = mid - 1;
        else l = mid + 1;
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
- Line 4: `bool can(const vector<int>& a, int m, int cap) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    int stu = 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    long long pages = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    for (int x : a) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: `        if (x > cap) return false;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 10: `        if (pages + x > cap) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 11: `            stu++;`
  Explaination: Executes a single statement that updates program state.
- Line 12: `            pages = x;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 13: `        } else pages += x;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: `    }`
  Explaination: Closes the current scope block.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    return stu <= m;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 17: `}`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 20: `    int n, m;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: `    cin >> n >> m;`
  Explaination: Reads input values from standard input into variables.
- Line 22: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 23: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    if (m > n) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 26: `        cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 27: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 28: `    }`
  Explaination: Closes the current scope block.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    int l = *max_element(a.begin(), a.end());`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 31: `    int r = accumulate(a.begin(), a.end(), 0);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 32: `    int ans = r;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 33: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 34: `    while (l <= r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 35: `        int mid = l + (r - l) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 36: `        if (can(a, m, mid)) ans = mid, r = mid - 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 37: `        else l = mid + 1;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 38: `    }`
  Explaination: Closes the current scope block.
- Line 39: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 40: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 41: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 42: `}`
  Explaination: Closes the current scope block.

## Block 28: Q27. Split Array Largest Sum

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

bool can(const vector<int>& a, int k, long long cap) {
    int parts = 1;
    long long sum = 0;

    for (int x : a) {
        if (x > cap) return false;
        if (sum + x > cap) {
            parts++;
            sum = x;
        } else sum += x;
    }

    return parts <= k;
}

int main() {
    int n, k;
    cin >> n >> k;
    vector<int> a(n);
    for (auto &x : a) cin >> x;

    long long l = *max_element(a.begin(), a.end());
    long long r = accumulate(a.begin(), a.end(), 0LL), ans = r;

    while (l <= r) {
        long long m = l + (r - l) / 2;
        if (can(a, k, m)) ans = m, r = m - 1;
        else l = m + 1;
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
- Line 4: `bool can(const vector<int>& a, int k, long long cap) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    int parts = 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    long long sum = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    for (int x : a) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: `        if (x > cap) return false;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 10: `        if (sum + x > cap) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 11: `            parts++;`
  Explaination: Executes a single statement that updates program state.
- Line 12: `            sum = x;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 13: `        } else sum += x;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: `    }`
  Explaination: Closes the current scope block.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    return parts <= k;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 17: `}`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 20: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 22: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 23: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    long long l = *max_element(a.begin(), a.end());`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 26: `    long long r = accumulate(a.begin(), a.end(), 0LL), ans = r;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 27: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 28: `    while (l <= r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 29: `        long long m = l + (r - l) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 30: `        if (can(a, k, m)) ans = m, r = m - 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 31: `        else l = m + 1;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 32: `    }`
  Explaination: Closes the current scope block.
- Line 33: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 34: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 35: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 36: `}`
  Explaination: Closes the current scope block.

## Block 29: Q28. Painters Partition Problem

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

bool ok(const vector<int>& b, int k, long long cap) {
    int painters = 1;
    long long cur = 0;

    for (int x : b) {
        if (x > cap) return false;
        if (cur + x > cap) {
            painters++;
            cur = x;
        } else cur += x;
    }

    return painters <= k;
}

int main() {
    int n, k;
    cin >> n >> k;
    vector<int> b(n);
    for (auto &x : b) cin >> x;

    long long l = *max_element(b.begin(), b.end());
    long long r = accumulate(b.begin(), b.end(), 0LL), ans = r;

    while (l <= r) {
        long long m = l + (r - l) / 2;
        if (ok(b, k, m)) ans = m, r = m - 1;
        else l = m + 1;
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
- Line 4: `bool ok(const vector<int>& b, int k, long long cap) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    int painters = 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    long long cur = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    for (int x : b) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: `        if (x > cap) return false;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 10: `        if (cur + x > cap) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 11: `            painters++;`
  Explaination: Executes a single statement that updates program state.
- Line 12: `            cur = x;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 13: `        } else cur += x;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: `    }`
  Explaination: Closes the current scope block.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    return painters <= k;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 17: `}`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 20: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 22: `    vector<int> b(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 23: `    for (auto &x : b) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    long long l = *max_element(b.begin(), b.end());`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 26: `    long long r = accumulate(b.begin(), b.end(), 0LL), ans = r;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 27: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 28: `    while (l <= r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 29: `        long long m = l + (r - l) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 30: `        if (ok(b, k, m)) ans = m, r = m - 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 31: `        else l = m + 1;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 32: `    }`
  Explaination: Closes the current scope block.
- Line 33: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 34: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 35: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 36: `}`
  Explaination: Closes the current scope block.

## Block 30: Q29. Capacity to Run Machines (Story)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

bool can(const vector<long long>& r, long long u, long long t) {
    __int128 produced = 0;
    for (long long x : r) {
        produced += (__int128)x * t;
        if (produced >= u) return true;
    }
    return produced >= u;
}

int main() {
    int n;
    long long u;
    cin >> n >> u;

    vector<long long> r(n);
    for (auto &x : r) cin >> x;

    long long l = 0, h = 1;
    while (!can(r, u, h)) {
        if (h > (long long)2e18 / 2) break;
        h *= 2;
    }

    long long ans = h;
    while (l <= h) {
        long long m = l + (h - l) / 2;
        if (can(r, u, m)) ans = m, h = m - 1;
        else l = m + 1;
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
- Line 4: `bool can(const vector<long long>& r, long long u, long long t) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    __int128 produced = 0;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 6: `    for (long long x : r) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 7: `        produced += (__int128)x * t;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 8: `        if (produced >= u) return true;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 9: `    }`
  Explaination: Closes the current scope block.
- Line 10: `    return produced >= u;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 11: `}`
  Explaination: Closes the current scope block.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 14: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: `    long long u;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `    cin >> n >> u;`
  Explaination: Reads input values from standard input into variables.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    vector<long long> r(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 19: `    for (auto &x : r) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    long long l = 0, h = 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 22: `    while (!can(r, u, h)) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 23: `        if (h > (long long)2e18 / 2) break;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 24: `        h *= 2;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 25: `    }`
  Explaination: Closes the current scope block.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `    long long ans = h;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 28: `    while (l <= h) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 29: `        long long m = l + (h - l) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 30: `        if (can(r, u, m)) ans = m, h = m - 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 31: `        else l = m + 1;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 32: `    }`
  Explaination: Closes the current scope block.
- Line 33: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 34: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 35: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 36: `}`
  Explaination: Closes the current scope block.

## Block 31: Q30. First Bad Version (Monotonic Boolean)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n, firstBad;
    cin >> n >> firstBad;

    auto isBad = [&](long long v) { return v >= firstBad; };

    long long l = 1, r = n, ans = n;
    while (l <= r) {
        long long m = l + (r - l) / 2;
        if (isBad(m)) ans = m, r = m - 1;
        else l = m + 1;
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
- Line 5: `    long long n, firstBad;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> firstBad;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    auto isBad = [&](long long v) { return v >= firstBad; };`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    long long l = 1, r = n, ans = n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    while (l <= r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 12: `        long long m = l + (r - l) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `        if (isBad(m)) ans = m, r = m - 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `        else l = m + 1;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 18: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 19: `}`
  Explaination: Closes the current scope block.
