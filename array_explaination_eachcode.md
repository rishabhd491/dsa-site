# TCS_NQT_Arrays_Full_Questions_Answers_CPP.md: Line-by-Line Code Explaination

This file explains each C++ code block line-by-line from the source topic file.

## Block 1: Q1. Largest and Smallest Element in an Array

### Original Code
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
- Line 10: `    long long mn = LLONG_MAX, mx = LLONG_MIN;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        long long x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `        cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 15: `        mn = min(mn, x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `        mx = max(mx, x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `    }`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    cout << mn << " " << mx << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 20: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 21: `}`
  Explaination: Closes the current scope block.

## Block 2: Q2. Second Largest and Second Smallest (Distinct)

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
- Line 11: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    long long mn1 = LLONG_MAX, mn2 = LLONG_MAX;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `    long long mx1 = LLONG_MIN, mx2 = LLONG_MIN;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    for (long long x : a) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 17: `        if (x < mn1) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 18: `            mn2 = mn1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `            mn1 = x;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `        } else if (x > mn1 && x < mn2) {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 21: `            mn2 = x;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: `        }`
  Explaination: Closes the current scope block.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `        if (x > mx1) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 25: `            mx2 = mx1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 26: `            mx1 = x;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 27: `        } else if (x < mx1 && x > mx2) {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 28: `            mx2 = x;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 29: `        }`
  Explaination: Closes the current scope block.
- Line 30: `    }`
  Explaination: Closes the current scope block.
- Line 31: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 32: `    if (mn2 == LLONG_MAX || mx2 == LLONG_MIN) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 33: `        cout << -1 << " " << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 34: `    } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 35: `        cout << mn2 << " " << mx2 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 36: `    }`
  Explaination: Closes the current scope block.
- Line 37: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 38: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 39: `}`
  Explaination: Closes the current scope block.

## Block 3: Q3. Check if Array is Sorted (Non-Decreasing)

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
- Line 11: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    for (int i = 1; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        if (a[i] < a[i - 1]) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: `            cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 16: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 17: `        }`
  Explaination: Closes the current scope block.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    cout << "Yes\n";`
  Explaination: Prints formatted output to standard output.
- Line 21: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 22: `}`
  Explaination: Closes the current scope block.

## Block 4: Q4. Left Rotate an Array by K Places

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
- Line 11: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 12: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    if (n > 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: `        k %= n;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `        reverse(a.begin(), a.begin() + k);`
  Explaination: Reverses elements in the specified range.
- Line 17: `        reverse(a.begin() + k, a.end());`
  Explaination: Reverses elements in the specified range.
- Line 18: `        reverse(a.begin(), a.end());`
  Explaination: Reverses elements in the specified range.
- Line 19: `    }`
  Explaination: Closes the current scope block.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    for (int x : a) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 22: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 23: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 24: `}`
  Explaination: Closes the current scope block.

## Block 5: Q5. Right Rotate an Array by K Places

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
- Line 11: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 12: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    if (n > 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: `        k %= n;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `        reverse(a.begin(), a.end());`
  Explaination: Reverses elements in the specified range.
- Line 17: `        reverse(a.begin(), a.begin() + k);`
  Explaination: Reverses elements in the specified range.
- Line 18: `        reverse(a.begin() + k, a.end());`
  Explaination: Reverses elements in the specified range.
- Line 19: `    }`
  Explaination: Closes the current scope block.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    for (int x : a) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 22: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 23: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 24: `}`
  Explaination: Closes the current scope block.

## Block 6: Q6. Reverse an Array

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
    for (auto &x : a) cin >> x;

    reverse(a.begin(), a.end());

    for (long long x : a) cout << x << " ";
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
- Line 8: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 10: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 11: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    reverse(a.begin(), a.end());`
  Explaination: Reverses elements in the specified range.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    for (long long x : a) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 17: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 18: `}`
  Explaination: Closes the current scope block.

## Block 7: Q7. Missing Number from 1 to N

### Original Code
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
- Line 10: `    int xr = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    for (int i = 1; i <= n; i++) xr ^= i;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `    for (int i = 0; i < n - 1; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        int x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: `        cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 16: `        xr ^= x;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `    }`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    cout << xr << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 20: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 21: `}`
  Explaination: Closes the current scope block.

## Block 8: Q8. Single Number (All Others Appear Twice)

### Original Code
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
- Line 10: `    int x, ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 13: `        ans ^= x;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: `    }`
  Explaination: Closes the current scope block.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 17: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 18: `}`
  Explaination: Closes the current scope block.

## Block 9: Q9. Story-Based: Push Empty Packets (0) to End

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
- Line 10: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 11: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    int j = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        if (a[i] != 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `            swap(a[i], a[j]);`
  Explaination: Executes a single statement that updates program state.
- Line 17: `            j++;`
  Explaination: Executes a single statement that updates program state.
- Line 18: `        }`
  Explaination: Closes the current scope block.
- Line 19: `    }`
  Explaination: Closes the current scope block.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    for (int x : a) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 22: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 23: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 24: `}`
  Explaination: Closes the current scope block.

## Block 10: Q10. Longest Subarray with Sum K (Handles Negatives)

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
- Line 11: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 12: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    unordered_map<long long, int> first;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 15: `    first[0] = -1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    long long pref = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: `    int best = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 21: `        pref += a[i];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `        if (!first.count(pref)) first[pref] = i;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `        if (first.count(pref - k)) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 26: `            best = max(best, i - first[pref - k]);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 27: `        }`
  Explaination: Closes the current scope block.
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

## Block 11: Q11. Count Subarrays with Given Sum K

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
- Line 11: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 12: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    unordered_map<long long, long long> freq;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 15: `    freq[0] = 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    long long pref = 0, ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 19: `        pref += a[i];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `        if (freq.count(pref - k)) ans += freq[pref - k];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: `        freq[pref]++;`
  Explaination: Executes a single statement that updates program state.
- Line 22: `    }`
  Explaination: Closes the current scope block.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 25: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 26: `}`
  Explaination: Closes the current scope block.

## Block 12: Q12. Maximum Subarray Sum (Kadane)

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
- Line 11: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    long long cur = a[0], best = a[0];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `    for (int i = 1; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        cur = max(a[i], cur + a[i]);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `        best = max(best, cur);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `    }`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    cout << best << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 20: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 21: `}`
  Explaination: Closes the current scope block.

## Block 13: Q13. Two Sum Problem

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
- Line 11: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 12: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    unordered_map<long long, int> pos;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 15: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `        long long need = target - a[i];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: `        if (pos.count(need)) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 18: `            cout << pos[need] << " " << i << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 19: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 20: `        }`
  Explaination: Closes the current scope block.
- Line 21: `        if (!pos.count(a[i])) pos[a[i]] = i;`
  Explaination: Checks a condition and executes this branch when the condition is true.
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

## Block 14: Q14. Sort an Array of 0s, 1s and 2s

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
- Line 10: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 11: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    int low = 0, mid = 0, high = n - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `    while (mid <= high) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 15: `        if (a[mid] == 0) swap(a[low++], a[mid++]);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `        else if (a[mid] == 1) mid++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `        else swap(a[mid], a[high--]);`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    for (int x : a) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 21: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 22: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 23: `}`
  Explaination: Closes the current scope block.

## Block 15: Q15. Majority Element (> N/2 occurrences)

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
- Line 10: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 11: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    int cand = 0, cnt = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `    for (int x : a) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        if (cnt == 0) cand = x;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `        cnt += (x == cand) ? 1 : -1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `    }`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    int freq = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 20: `    for (int x : a) if (x == cand) freq++;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    if (freq > n / 2) cout << cand << "\n";`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 23: `    else cout << -1 << "\n";`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 26: `}`
  Explaination: Closes the current scope block.

## Block 16: Q16. Leaders in an Array

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
- Line 10: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 11: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    vector<int> ans;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 14: `    int mx = INT_MIN;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: `    for (int i = n - 1; i >= 0; i--) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `        if (a[i] >= mx) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `            ans.push_back(a[i]);`
  Explaination: Appends a new element to the end of the container.
- Line 18: `            mx = a[i];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `        }`
  Explaination: Closes the current scope block.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    reverse(ans.begin(), ans.end());`
  Explaination: Reverses elements in the specified range.
- Line 23: `    for (int x : ans) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 24: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 25: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 26: `}`
  Explaination: Closes the current scope block.

## Block 17: Q17. Maximum Sum Subarray of Size K (Sliding Window)

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
- Line 10: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 11: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    if (k > n || k <= 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `        cout << 0 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 15: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    long long window = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `    for (int i = 0; i < k; i++) window += a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 20: `    long long ans = window;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    for (int r = k; r < n; r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 23: `        window += a[r] - a[r - k];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 24: `        ans = max(ans, window);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
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

## Block 18: Q18. Longest Subarray with Equal Number of 0s and 1s

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
- Line 10: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 11: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    unordered_map<int, int> first;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 14: `    first[0] = -1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    int pref = 0, best = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: `        pref += (a[i] == 0 ? -1 : 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `        if (first.count(pref)) best = max(best, i - first[pref]);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 20: `        else first[pref] = i;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
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

## Block 19: Q19. Story-Based: Rearrange Multiples of 10 to End (Stable)

### Original Code
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
- Line 10: `    vector<int> a(n), out;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 11: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    out.reserve(n);`
  Explaination: Executes a single statement that updates program state.
- Line 14: `    for (int x : a) if (x % 10 != 0) out.push_back(x);`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `    for (int x : a) if (x % 10 == 0) out.push_back(x);`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    for (int x : out) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 19: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 20: `}`
  Explaination: Closes the current scope block.

## Block 20: Q20. Story-Based: Maximum Profit from Stock Prices

### Original Code
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
- Line 10: `    vector<int> p(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 11: `    for (int i = 0; i < n; i++) cin >> p[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    int mn = INT_MAX, best = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `    for (int x : p) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        mn = min(mn, x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `        best = max(best, x - mn);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `    }`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    cout << best << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 20: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 21: `}`
  Explaination: Closes the current scope block.

## Block 21: Q21. Count Elements Greater Than All Previous Elements

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
- Line 11: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    long long mx = LLONG_MIN;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `    int count = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: `    for (long long x : a) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `        if (x > mx) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `            count++;`
  Explaination: Executes a single statement that updates program state.
- Line 18: `            mx = x;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `        }`
  Explaination: Closes the current scope block.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    cout << count << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 23: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 24: `}`
  Explaination: Closes the current scope block.

## Block 22: Q22. Count Frequency of Each Element

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

## Block 23: Q23. Element with Maximum Frequency

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
- Line 10: `    unordered_map<long long, int> freq;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
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
- Line 18: `    long long bestVal = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `    int bestFreq = -1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    for (auto &p : freq) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 22: `        long long val = p.first;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 23: `        int f = p.second;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `        if (f > bestFreq || (f == bestFreq && val < bestVal)) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 26: `            bestFreq = f;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 27: `            bestVal = val;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 28: `        }`
  Explaination: Closes the current scope block.
- Line 29: `    }`
  Explaination: Closes the current scope block.
- Line 30: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 31: `    cout << bestVal << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 32: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 33: `}`
  Explaination: Closes the current scope block.

## Block 24: Q24. Print Elements Occurring Odd and Even Number of Times

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
- Line 18: `    vector<long long> oddVals, evenVals;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 19: `    for (auto &p : freq) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 20: `        if (p.second % 2) oddVals.push_back(p.first);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: `        else evenVals.push_back(p.first);`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 22: `    }`
  Explaination: Closes the current scope block.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    if (oddVals.empty()) cout << -1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 25: `    else {`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 26: `        for (long long x : oddVals) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 27: `    }`
  Explaination: Closes the current scope block.
- Line 28: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    if (evenVals.empty()) cout << -1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 31: `    else {`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 32: `        for (long long x : evenVals) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 33: `    }`
  Explaination: Closes the current scope block.
- Line 34: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 35: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 36: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 37: `}`
  Explaination: Closes the current scope block.

## Block 25: Q25. Remove Duplicates from Sorted Array (In-place style)

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
- Line 11: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    if (n == 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `        cout << 0 << "\n\n";`
  Explaination: Prints formatted output to standard output.
- Line 15: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    int k = 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `    for (int i = 1; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 20: `        if (a[i] != a[k - 1]) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: `            a[k++] = a[i];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: `        }`
  Explaination: Closes the current scope block.
- Line 23: `    }`
  Explaination: Closes the current scope block.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    cout << k << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 26: `    for (int i = 0; i < k; i++) cout << a[i] << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 27: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 28: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 29: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 30: `}`
  Explaination: Closes the current scope block.

## Block 26: Q26. Remove Duplicates from Unsorted Array (Preserve First Occurrence)

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
- Line 11: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    unordered_set<long long> seen;`
  Explaination: Declares a hash set for fast membership checks.
- Line 14: `    vector<long long> out;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 15: `    out.reserve(n);`
  Explaination: Executes a single statement that updates program state.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    for (long long x : a) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: `        if (!seen.count(x)) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 19: `            seen.insert(x);`
  Explaination: Inserts element(s) at a specified position in a container.
- Line 20: `            out.push_back(x);`
  Explaination: Appends a new element to the end of the container.
- Line 21: `        }`
  Explaination: Closes the current scope block.
- Line 22: `    }`
  Explaination: Closes the current scope block.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    for (long long x : out) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 25: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 28: `}`
  Explaination: Closes the current scope block.

## Block 27: Q27. Count Unique Elements

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
- Line 12: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        long long x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `        cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 15: `        st.insert(x);`
  Explaination: Inserts element(s) at a specified position in a container.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    cout << st.size() << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 19: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 20: `}`
  Explaination: Closes the current scope block.

## Block 28: Q28. Maximum Difference A[j] - A[i] with j > i

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
- Line 11: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    long long minSoFar = a[0];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `    long long best = LLONG_MIN;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    for (int j = 1; j < n; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 17: `        best = max(best, a[j] - minSoFar);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: `        minSoFar = min(minSoFar, a[j]);`
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

## Block 29: Q29. Minimum Absolute Difference in an Array

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
- Line 11: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    sort(a.begin(), a.end());`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    long long ans = LLONG_MAX;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `    for (int i = 1; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 17: `        ans = min(ans, llabs(a[i] - a[i - 1]));`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 21: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 22: `}`
  Explaination: Closes the current scope block.

## Block 30: Q30. Closest Pair from Two Arrays (Minimum Absolute Difference)

### Original Code
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
- Line 10: `    vector<long long> a(n), b(m);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 11: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `    for (auto &x : b) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    sort(a.begin(), a.end());`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 15: `    sort(b.begin(), b.end());`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    int i = 0, j = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: `    long long bestDiff = LLONG_MAX;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `    long long bestA = 0, bestB = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    while (i < n && j < m) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 22: `        long long d = llabs(a[i] - b[j]);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 23: `        if (d < bestDiff) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 24: `            bestDiff = d;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 25: `            bestA = a[i];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 26: `            bestB = b[j];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 27: `        }`
  Explaination: Closes the current scope block.
- Line 28: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 29: `        if (a[i] < b[j]) i++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 30: `        else j++;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 31: `    }`
  Explaination: Closes the current scope block.
- Line 32: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 33: `    cout << bestA << " " << bestB << " " << bestDiff << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 34: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 35: `}`
  Explaination: Closes the current scope block.

## Block 31: Q31. Rearrange: Negatives Left, Non-Negatives Right

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
- Line 11: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    int l = 0, r = n - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `    while (l < r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 15: `        while (l < n && a[l] < 0) l++;`
  Explaination: Loop that repeats while the given condition remains true.
- Line 16: `        while (r >= 0 && a[r] >= 0) r--;`
  Explaination: Loop that repeats while the given condition remains true.
- Line 17: `        if (l < r) swap(a[l], a[r]);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    for (long long x : a) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 21: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 24: `}`
  Explaination: Closes the current scope block.

## Block 32: Q32. Rearrange: Even Numbers First, Then Odd (Stable)

### Original Code
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
- Line 10: `    vector<long long> a(n), out;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 11: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    out.reserve(n);`
  Explaination: Executes a single statement that updates program state.
- Line 14: `    for (long long x : a) if (x % 2 == 0) out.push_back(x);`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `    for (long long x : a) if (x % 2 != 0) out.push_back(x);`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    for (long long x : out) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 21: `}`
  Explaination: Closes the current scope block.

## Block 33: Q33. Rearrange Alternating Positive and Negative (Stable)

### Original Code
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
- Line 10: `    vector<long long> a(n), pos, neg, out;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 11: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    for (long long x : a) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        if (x >= 0) pos.push_back(x);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: `        else neg.push_back(x);`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    bool startPos = false;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `    for (long long x : a) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 20: `        if (x >= 0) { startPos = true; break; }`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: `        else { startPos = false; break; }`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 22: `    }`
  Explaination: Closes the current scope block.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    int i = 0, j = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 25: `    out.reserve(n);`
  Explaination: Executes a single statement that updates program state.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `    while (i < (int)pos.size() && j < (int)neg.size()) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 28: `        if (startPos) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 29: `            out.push_back(pos[i++]);`
  Explaination: Appends a new element to the end of the container.
- Line 30: `            out.push_back(neg[j++]);`
  Explaination: Appends a new element to the end of the container.
- Line 31: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 32: `            out.push_back(neg[j++]);`
  Explaination: Appends a new element to the end of the container.
- Line 33: `            out.push_back(pos[i++]);`
  Explaination: Appends a new element to the end of the container.
- Line 34: `        }`
  Explaination: Closes the current scope block.
- Line 35: `    }`
  Explaination: Closes the current scope block.
- Line 36: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 37: `    while (i < (int)pos.size()) out.push_back(pos[i++]);`
  Explaination: Loop that repeats while the given condition remains true.
- Line 38: `    while (j < (int)neg.size()) out.push_back(neg[j++]);`
  Explaination: Loop that repeats while the given condition remains true.
- Line 39: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 40: `    for (long long x : out) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 41: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 42: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 43: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 44: `}`
  Explaination: Closes the current scope block.

## Block 34: Q34. Build Prefix Maximum and Suffix Maximum Arrays

### Original Code
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
- Line 10: `    vector<long long> a(n), pref(n), suff(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 11: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    pref[0] = a[0];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: `    for (int i = 1; i < n; i++) pref[i] = max(pref[i - 1], a[i]);`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    suff[n - 1] = a[n - 1];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `    for (int i = n - 2; i >= 0; i--) suff[i] = max(suff[i + 1], a[i]);`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    for (long long x : pref) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 20: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 21: `    for (long long x : suff) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 22: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 25: `}`
  Explaination: Closes the current scope block.

## Block 35: Q35. Trapping Rain Water (Prefix/Suffix Max Method)

### Original Code
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
- Line 10: `    vector<long long> h(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 11: `    for (auto &x : h) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    if (n == 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `        cout << 0 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 15: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    vector<long long> pref(n), suff(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 19: `    pref[0] = h[0];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `    for (int i = 1; i < n; i++) pref[i] = max(pref[i - 1], h[i]);`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    suff[n - 1] = h[n - 1];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: `    for (int i = n - 2; i >= 0; i--) suff[i] = max(suff[i + 1], h[i]);`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    long long water = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 26: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 27: `        water += min(pref[i], suff[i]) - h[i];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 28: `    }`
  Explaination: Closes the current scope block.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    cout << water << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 31: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 32: `}`
  Explaination: Closes the current scope block.

## Block 36: Q36. Range Query Pattern: Maximum Element Outside [L, R]

### Original Code
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
- Line 8: `    int n, q;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    cin >> n >> q;`
  Explaination: Reads input values from standard input into variables.
- Line 10: `    vector<long long> a(n), pref(n), suff(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 11: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    pref[0] = a[0];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: `    for (int i = 1; i < n; i++) pref[i] = max(pref[i - 1], a[i]);`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    suff[n - 1] = a[n - 1];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `    for (int i = n - 2; i >= 0; i--) suff[i] = max(suff[i + 1], a[i]);`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    while (q--) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 20: `        int l, r;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: `        cin >> l >> r;`
  Explaination: Reads input values from standard input into variables.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `        long long leftMax = (l > 0) ? pref[l - 1] : LLONG_MIN;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 24: `        long long rightMax = (r + 1 < n) ? suff[r + 1] : LLONG_MIN;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `        long long ans = max(leftMax, rightMax);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 27: `        if (ans == LLONG_MIN) cout << -1 << "\n";`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 28: `        else cout << ans << "\n";`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 29: `    }`
  Explaination: Closes the current scope block.
- Line 30: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 31: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 32: `}`
  Explaination: Closes the current scope block.

## Block 37: Q37. Edge-Case Heavy: Maximum Subarray Sum with Indices

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
- Line 11: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    long long cur = a[0], best = a[0];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `    int curL = 0, bestL = 0, bestR = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    for (int i = 1; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 17: `        if (cur + a[i] < a[i]) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 18: `            cur = a[i];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `            curL = i;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 21: `            cur += a[i];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: `        }`
  Explaination: Closes the current scope block.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `        if (cur > best) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 25: `            best = cur;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 26: `            bestL = curL;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 27: `            bestR = i;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 28: `        }`
  Explaination: Closes the current scope block.
- Line 29: `    }`
  Explaination: Closes the current scope block.
- Line 30: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 31: `    cout << best << " " << bestL << " " << bestR << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 32: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 33: `}`
  Explaination: Closes the current scope block.
