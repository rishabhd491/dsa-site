# TCS_NQT_Two_Pointers_Full_Questions_Answers_CPP.md: Line-by-Line Code Explaination

This file explains each C++ code block line-by-line from the source topic file.

## Block 1: General

### Original Code
```cpp
int l = 0, r = n - 1;
while (l < r) {
    // use a[l], a[r]
    if (condition) l++;
    else r--;
}
```

### Line-by-Line Explaination
- Line 1: `int l = 0, r = n - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 2: `while (l < r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 3: `    // use a[l], a[r]`
  Explaination: Comment line documenting intent for the next statement(s).
- Line 4: `    if (condition) l++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 5: `    else r--;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 6: `}`
  Explaination: Closes the current scope block.

## Block 2: General

### Original Code
```cpp
int slow = 0;
for (int fast = 0; fast < n; fast++) {
    if (keep(a[fast])) a[slow++] = a[fast];
}
// valid length = slow
```

### Line-by-Line Explaination
- Line 1: `int slow = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 2: `for (int fast = 0; fast < n; fast++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 3: `    if (keep(a[fast])) a[slow++] = a[fast];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 4: `}`
  Explaination: Closes the current scope block.
- Line 5: `// valid length = slow`
  Explaination: Comment line documenting intent for the next statement(s).

## Block 3: General

### Original Code
```cpp
slow = head; fast = head;
while (fast && fast->next) {
    slow = slow->next;
    fast = fast->next->next;
    if (slow == fast) { /* cycle */ }
}
```

### Line-by-Line Explaination
- Line 1: `slow = head; fast = head;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 2: `while (fast && fast->next) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 3: `    slow = slow->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 4: `    fast = fast->next->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 5: `    if (slow == fast) { /* cycle */ }`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `}`
  Explaination: Closes the current scope block.

## Block 4: Q1. Two Sum in Sorted Array (Indices)

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
- Line 8: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    int l = 0, r = n - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    while (l < r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 13: `        long long s = a[l] + a[r];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `        if (s == t) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: `            cout << (l + 1) << " " << (r + 1) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 16: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 17: `        }`
  Explaination: Closes the current scope block.
- Line 18: `        if (s < t) l++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 19: `        else r--;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 23: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 24: `}`
  Explaination: Closes the current scope block.

## Block 5: Q2. Count Pairs with Given Sum in Sorted Array

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
- Line 8: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    long long ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    int l = 0, r = n - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    while (l < r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 15: `        long long s = a[l] + a[r];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `        if (s < k) l++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `        else if (s > k) r--;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 18: `        else {`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 19: `            if (a[l] == a[r]) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 20: `                long long m = r - l + 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: `                ans += m * (m - 1) / 2;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: `                break;`
  Explaination: Exits the nearest loop or switch block immediately.
- Line 23: `            }`
  Explaination: Closes the current scope block.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `            long long leftVal = a[l], rightVal = a[r];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 26: `            long long c1 = 0, c2 = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 27: `            while (l <= r && a[l] == leftVal) { c1++; l++; }`
  Explaination: Loop that repeats while the given condition remains true.
- Line 28: `            while (r >= l && a[r] == rightVal) { c2++; r--; }`
  Explaination: Loop that repeats while the given condition remains true.
- Line 29: `            ans += c1 * c2;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 30: `        }`
  Explaination: Closes the current scope block.
- Line 31: `    }`
  Explaination: Closes the current scope block.
- Line 32: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 33: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 34: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 35: `}`
  Explaination: Closes the current scope block.

## Block 6: Q3. Pair with Sum Closest to Target

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
- Line 8: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    int l = 0, r = n - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    long long bestDiff = LLONG_MAX;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    long long ansL = a[0], ansR = a[n - 1];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    while (l < r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 16: `        long long s = a[l] + a[r];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: `        long long d = llabs(s - t);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `        if (d < bestDiff) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 20: `            bestDiff = d;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: `            ansL = a[l];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: `            ansR = a[r];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: `        }`
  Explaination: Closes the current scope block.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `        if (s < t) l++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 26: `        else r--;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 27: `    }`
  Explaination: Closes the current scope block.
- Line 28: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 29: `    cout << ansL << " " << ansR << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 30: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 31: `}`
  Explaination: Closes the current scope block.

## Block 7: Q4. Remove Duplicates from Sorted Array

### Original Code
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
- Line 10: `    if (n == 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 11: `        cout << 0 << "\n\n";`
  Explaination: Prints formatted output to standard output.
- Line 12: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 13: `    }`
  Explaination: Closes the current scope block.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    int slow = 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `    for (int fast = 1; fast < n; fast++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 17: `        if (a[fast] != a[slow - 1]) a[slow++] = a[fast];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    cout << slow << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 21: `    for (int i = 0; i < slow; i++) cout << a[i] << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 22: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 25: `}`
  Explaination: Closes the current scope block.

## Block 8: Q5. Remove Duplicates Allowing At Most 2 Occurrences

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (auto &x : a) cin >> x;

    if (n <= 2) {
        cout << n << "\n";
        for (int x : a) cout << x << " ";
        cout << "\n";
        return 0;
    }

    int slow = 2;
    for (int fast = 2; fast < n; fast++) {
        if (a[fast] != a[slow - 2]) a[slow++] = a[fast];
    }

    cout << slow << "\n";
    for (int i = 0; i < slow; i++) cout << a[i] << " ";
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
- Line 10: `    if (n <= 2) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 11: `        cout << n << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 12: `        for (int x : a) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 14: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    int slow = 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: `    for (int fast = 2; fast < n; fast++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 19: `        if (a[fast] != a[slow - 2]) a[slow++] = a[fast];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    cout << slow << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 23: `    for (int i = 0; i < slow; i++) cout << a[i] << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 24: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 27: `}`
  Explaination: Closes the current scope block.

## Block 9: Q6. Move All Zeros to End (Stable)

### Original Code
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
- Line 10: `    int slow = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    for (int fast = 0; fast < n; fast++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        if (a[fast] != 0) swap(a[slow++], a[fast]);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: `    }`
  Explaination: Closes the current scope block.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    for (int x : a) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 17: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 18: `}`
  Explaination: Closes the current scope block.

## Block 10: Q7. Partition Negatives and Non-Negatives

### Original Code
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
- Line 10: `    int l = 0, r = n - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    while (l < r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 12: `        while (l < n && a[l] < 0) l++;`
  Explaination: Loop that repeats while the given condition remains true.
- Line 13: `        while (r >= 0 && a[r] >= 0) r--;`
  Explaination: Loop that repeats while the given condition remains true.
- Line 14: `        if (l < r) swap(a[l], a[r]);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    for (int x : a) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 19: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 20: `}`
  Explaination: Closes the current scope block.

## Block 11: Q8. Sort Colors (0,1,2)

### Original Code
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
- Line 10: `    int low = 0, mid = 0, high = n - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    while (mid <= high) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 12: `        if (a[mid] == 0) swap(a[low++], a[mid++]);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: `        else if (a[mid] == 1) mid++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `        else swap(a[mid], a[high--]);`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    for (int x : a) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 19: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 20: `}`
  Explaination: Closes the current scope block.

## Block 12: Q9. Squares of Sorted Array

### Original Code
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
- Line 7: `    vector<long long> a(n), ans(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    int l = 0, r = n - 1, p = n - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    while (l <= r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 12: `        long long x = a[l] * a[l], y = a[r] * a[r];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `        if (x > y) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `            ans[p--] = x;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `            l++;`
  Explaination: Executes a single statement that updates program state.
- Line 16: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 17: `            ans[p--] = y;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: `            r--;`
  Explaination: Executes a single statement that updates program state.
- Line 19: `        }`
  Explaination: Closes the current scope block.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    for (auto x : ans) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 23: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 24: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 25: `}`
  Explaination: Closes the current scope block.

## Block 13: Q10. Reverse a String In-Place

### Original Code
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
- Line 8: `    int l = 0, r = (int)s.size() - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    while (l < r) swap(s[l++], s[r--]);`
  Explaination: Loop that repeats while the given condition remains true.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    cout << s << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 12: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 13: `}`
  Explaination: Closes the current scope block.

## Block 14: Q11. Reverse Only Vowels in String

### Original Code
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
- Line 6: `    return c=='a'||c=='e'||c=='i'||c=='o'||c=='u';`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 7: `}`
  Explaination: Closes the current scope block.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 10: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 11: `    cin >> s;`
  Explaination: Reads input values from standard input into variables.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    int l = 0, r = (int)s.size() - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `    while (l < r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 15: `        while (l < r && !isVowel(s[l])) l++;`
  Explaination: Loop that repeats while the given condition remains true.
- Line 16: `        while (l < r && !isVowel(s[r])) r--;`
  Explaination: Loop that repeats while the given condition remains true.
- Line 17: `        if (l < r) swap(s[l++], s[r--]);`
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

## Block 15: Q12. Valid Palindrome (Ignore Non-Alphanumeric)

### Original Code
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
- Line 6: `    getline(cin, s);`
  Explaination: Executes a single statement that updates program state.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    int l = 0, r = (int)s.size() - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    while (l < r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 10: `        while (l < r && !isalnum((unsigned char)s[l])) l++;`
  Explaination: Loop that repeats while the given condition remains true.
- Line 11: `        while (l < r && !isalnum((unsigned char)s[r])) r--;`
  Explaination: Loop that repeats while the given condition remains true.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `        if (tolower((unsigned char)s[l]) != tolower((unsigned char)s[r])) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `            cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 15: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 16: `        }`
  Explaination: Closes the current scope block.
- Line 17: `        l++, r--;`
  Explaination: Executes a single statement that updates program state.
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

## Block 16: Q13. Valid Palindrome II (Delete At Most One Character)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

bool isPal(const string &s, int l, int r) {
    while (l < r) {
        if (s[l++] != s[r--]) return false;
    }
    return true;
}

int main() {
    string s;
    cin >> s;

    int l = 0, r = (int)s.size() - 1;
    while (l < r && s[l] == s[r]) {
        l++, r--;
    }

    if (l >= r) {
        cout << "Yes\n";
        return 0;
    }

    cout << ((isPal(s, l + 1, r) || isPal(s, l, r - 1)) ? "Yes" : "No") << "\n";
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
- Line 4: `bool isPal(const string &s, int l, int r) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    while (l < r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 6: `        if (s[l++] != s[r--]) return false;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 7: `    }`
  Explaination: Closes the current scope block.
- Line 8: `    return true;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 9: `}`
  Explaination: Closes the current scope block.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 12: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 13: `    cin >> s;`
  Explaination: Reads input values from standard input into variables.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    int l = 0, r = (int)s.size() - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `    while (l < r && s[l] == s[r]) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 17: `        l++, r--;`
  Explaination: Executes a single statement that updates program state.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    if (l >= r) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: `        cout << "Yes\n";`
  Explaination: Prints formatted output to standard output.
- Line 22: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 23: `    }`
  Explaination: Closes the current scope block.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    cout << ((isPal(s, l + 1, r) || isPal(s, l, r - 1)) ? "Yes" : "No") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 26: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 27: `}`
  Explaination: Closes the current scope block.

## Block 17: Q14. Merge Two Sorted Arrays (Classic)

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
- Line 11: `    int i = 0, j = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    vector<int> out;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 13: `    out.reserve(n + m);`
  Explaination: Executes a single statement that updates program state.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    while (i < n && j < m) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 16: `        if (a[i] <= b[j]) out.push_back(a[i++]);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `        else out.push_back(b[j++]);`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: `    while (i < n) out.push_back(a[i++]);`
  Explaination: Loop that repeats while the given condition remains true.
- Line 20: `    while (j < m) out.push_back(b[j++]);`
  Explaination: Loop that repeats while the given condition remains true.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    for (int x : out) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 23: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 24: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 25: `}`
  Explaination: Closes the current scope block.

## Block 18: Q15. Merge Sorted Array In-Place (A has extra space)

### Original Code
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
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    vector<int> a(n + m), b(m);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `    for (int i = 0; i < m; i++) cin >> b[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    int i = n - 1, j = m - 1, k = n + m - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    while (i >= 0 && j >= 0) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 14: `        if (a[i] > b[j]) a[k--] = a[i--];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: `        else a[k--] = b[j--];`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: `    while (j >= 0) a[k--] = b[j--];`
  Explaination: Loop that repeats while the given condition remains true.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    for (int x : a) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 20: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 21: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 22: `}`
  Explaination: Closes the current scope block.

## Block 19: Q16. Intersection of Two Sorted Arrays with Multiplicity

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
- Line 11: `    int i = 0, j = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    vector<int> out;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    while (i < n && j < m) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 15: `        if (a[i] == b[j]) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `            out.push_back(a[i]);`
  Explaination: Appends a new element to the end of the container.
- Line 17: `            i++, j++;`
  Explaination: Executes a single statement that updates program state.
- Line 18: `        } else if (a[i] < b[j]) i++;`
  Explaination: Executes a single statement that updates program state.
- Line 19: `        else j++;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    if (out.empty()) cout << -1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 23: `    else for (int x : out) cout << x << " ";`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 24: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 27: `}`
  Explaination: Closes the current scope block.

## Block 20: Q17. Check if S is Subsequence of T

### Original Code
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
- Line 8: `    int i = 0, j = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    while (i < (int)s.size() && j < (int)t.size()) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 10: `        if (s[i] == t[j]) i++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 11: `        j++;`
  Explaination: Executes a single statement that updates program state.
- Line 12: `    }`
  Explaination: Closes the current scope block.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    cout << (i == (int)s.size() ? "Yes" : "No") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 15: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 16: `}`
  Explaination: Closes the current scope block.

## Block 21: Q18. Backspace String Compare

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int nextValid(const string &s, int i) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    int skip = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    while (i >= 0) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 7: `        if (s[i] == '#') { skip++; i--; }`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 8: `        else if (skip > 0) { skip--; i--; }`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 9: `        else return i;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 10: `    }`
  Explaination: Closes the current scope block.
- Line 11: `    return -1;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 12: `}`
  Explaination: Closes the current scope block.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 15: `    string a, b;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 16: `    cin >> a >> b;`
  Explaination: Reads input values from standard input into variables.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    int i = (int)a.size() - 1, j = (int)b.size() - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `    while (i >= 0 || j >= 0) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 20: `        i = nextValid(a, i);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: `        j = nextValid(b, j);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `        if (i < 0 || j < 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 24: `            cout << (i == j ? "Yes" : "No") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 25: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 26: `        }`
  Explaination: Closes the current scope block.
- Line 27: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 28: `        if (a[i] != b[j]) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 29: `            cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 30: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 31: `        }`
  Explaination: Closes the current scope block.
- Line 32: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 33: `        i--, j--;`
  Explaination: Executes a single statement that updates program state.
- Line 34: `    }`
  Explaination: Closes the current scope block.
- Line 35: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 36: `    cout << "Yes\n";`
  Explaination: Prints formatted output to standard output.
- Line 37: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 38: `}`
  Explaination: Closes the current scope block.

## Block 22: Q19. Container With Most Water

### Original Code
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
- Line 7: `    vector<long long> h(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &x : h) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    int l = 0, r = n - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    long long best = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    while (l < r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 14: `        best = max(best, (long long)(r - l) * min(h[l], h[r]));`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `        if (h[l] < h[r]) l++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `        else r--;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
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

## Block 23: Q20. Trapping Rain Water

### Original Code
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
- Line 7: `    vector<int> h(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &x : h) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    int l = 0, r = n - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    int leftMax = 0, rightMax = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    long long water = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    while (l <= r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 15: `        if (h[l] <= h[r]) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `            if (h[l] >= leftMax) leftMax = h[l];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `            else water += leftMax - h[l];`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 18: `            l++;`
  Explaination: Executes a single statement that updates program state.
- Line 19: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 20: `            if (h[r] >= rightMax) rightMax = h[r];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: `            else water += rightMax - h[r];`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 22: `            r--;`
  Explaination: Executes a single statement that updates program state.
- Line 23: `        }`
  Explaination: Closes the current scope block.
- Line 24: `    }`
  Explaination: Closes the current scope block.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    cout << water << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 27: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 28: `}`
  Explaination: Closes the current scope block.

## Block 24: Q21. 3Sum (Unique Triplets Summing to 0)

### Original Code
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
- Line 10: `    sort(a.begin(), a.end());`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 11: `    vector<array<int,3>> out;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        if (i > 0 && a[i] == a[i - 1]) continue;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `        int l = i + 1, r = n - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: `        while (l < r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 18: `            long long s = 1LL * a[i] + a[l] + a[r];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `            if (s < 0) l++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 20: `            else if (s > 0) r--;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: `            else {`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 22: `                out.push_back({a[i], a[l], a[r]});`
  Explaination: Appends a new element to the end of the container.
- Line 23: `                l++, r--;`
  Explaination: Executes a single statement that updates program state.
- Line 24: `                while (l < r && a[l] == a[l - 1]) l++;`
  Explaination: Loop that repeats while the given condition remains true.
- Line 25: `                while (l < r && a[r] == a[r + 1]) r--;`
  Explaination: Loop that repeats while the given condition remains true.
- Line 26: `            }`
  Explaination: Closes the current scope block.
- Line 27: `        }`
  Explaination: Closes the current scope block.
- Line 28: `    }`
  Explaination: Closes the current scope block.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    if (out.empty()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 31: `        cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 32: `    } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 33: `        for (auto &t : out) cout << t[0] << " " << t[1] << " " << t[2] << "\n";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 34: `    }`
  Explaination: Closes the current scope block.
- Line 35: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 36: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 37: `}`
  Explaination: Closes the current scope block.

## Block 25: Q22. 3Sum Closest

### Original Code
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
    long long best = 1LL * a[0] + a[1] + a[2];

    for (int i = 0; i < n - 2; i++) {
        int l = i + 1, r = n - 1;
        while (l < r) {
            long long s = 1LL * a[i] + a[l] + a[r];
            if (llabs(s - target) < llabs(best - target)) best = s;

            if (s < target) l++;
            else if (s > target) r--;
            else {
                cout << s << "\n";
                return 0;
            }
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
- Line 5: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    long long target;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    cin >> n >> target;`
  Explaination: Reads input values from standard input into variables.
- Line 8: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    sort(a.begin(), a.end());`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 12: `    long long best = 1LL * a[0] + a[1] + a[2];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    for (int i = 0; i < n - 2; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        int l = i + 1, r = n - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `        while (l < r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 17: `            long long s = 1LL * a[i] + a[l] + a[r];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: `            if (llabs(s - target) < llabs(best - target)) best = s;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `            if (s < target) l++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: `            else if (s > target) r--;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 22: `            else {`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 23: `                cout << s << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 24: `                return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 25: `            }`
  Explaination: Closes the current scope block.
- Line 26: `        }`
  Explaination: Closes the current scope block.
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

## Block 26: Q23. 4Sum (Unique Quadruplets)

### Original Code
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
- Line 6: `    long long target;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    cin >> n >> target;`
  Explaination: Reads input values from standard input into variables.
- Line 8: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    sort(a.begin(), a.end());`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 12: `    vector<array<int,4>> out;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        if (i > 0 && a[i] == a[i - 1]) continue;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `        for (int j = i + 1; j < n; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 17: `            if (j > i + 1 && a[j] == a[j - 1]) continue;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `            int l = j + 1, r = n - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 20: `            while (l < r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 21: `                long long s = 1LL * a[i] + a[j] + a[l] + a[r];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 22: `                if (s < target) l++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 23: `                else if (s > target) r--;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 24: `                else {`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 25: `                    out.push_back({a[i], a[j], a[l], a[r]});`
  Explaination: Appends a new element to the end of the container.
- Line 26: `                    l++, r--;`
  Explaination: Executes a single statement that updates program state.
- Line 27: `                    while (l < r && a[l] == a[l - 1]) l++;`
  Explaination: Loop that repeats while the given condition remains true.
- Line 28: `                    while (l < r && a[r] == a[r + 1]) r--;`
  Explaination: Loop that repeats while the given condition remains true.
- Line 29: `                }`
  Explaination: Closes the current scope block.
- Line 30: `            }`
  Explaination: Closes the current scope block.
- Line 31: `        }`
  Explaination: Closes the current scope block.
- Line 32: `    }`
  Explaination: Closes the current scope block.
- Line 33: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 34: `    if (out.empty()) cout << -1 << "\n";`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 35: `    else {`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 36: `        for (auto &q : out) cout << q[0] << " " << q[1] << " " << q[2] << " " << q[3] << "\n";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 37: `    }`
  Explaination: Closes the current scope block.
- Line 38: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 39: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 40: `}`
  Explaination: Closes the current scope block.

## Block 27: Q24. Count Triplets with Sum Less Than Target

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    long long t;
    cin >> n >> t;
    vector<int> a(n);
    for (auto &x : a) cin >> x;

    sort(a.begin(), a.end());
    long long ans = 0;

    for (int i = 0; i < n - 2; i++) {
        int l = i + 1, r = n - 1;
        while (l < r) {
            long long s = 1LL * a[i] + a[l] + a[r];
            if (s < t) {
                ans += (r - l);
                l++;
            } else {
                r--;
            }
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
- Line 5: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    long long t;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    cin >> n >> t;`
  Explaination: Reads input values from standard input into variables.
- Line 8: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    sort(a.begin(), a.end());`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 12: `    long long ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    for (int i = 0; i < n - 2; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        int l = i + 1, r = n - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `        while (l < r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 17: `            long long s = 1LL * a[i] + a[l] + a[r];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: `            if (s < t) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 19: `                ans += (r - l);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `                l++;`
  Explaination: Executes a single statement that updates program state.
- Line 21: `            } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 22: `                r--;`
  Explaination: Executes a single statement that updates program state.
- Line 23: `            }`
  Explaination: Closes the current scope block.
- Line 24: `        }`
  Explaination: Closes the current scope block.
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

## Block 28: Q25. Pair with Given Difference in Sorted Array

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
- Line 8: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    int i = 0, j = 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    while (i < n && j < n) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 13: `        if (i == j) { j++; continue; }`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `        long long d = a[j] - a[i];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `        if (d == k) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `            cout << "Yes\n";`
  Explaination: Prints formatted output to standard output.
- Line 18: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 19: `        }`
  Explaination: Closes the current scope block.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `        if (d < k) j++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 22: `        else i++;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 23: `    }`
  Explaination: Closes the current scope block.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 26: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 27: `}`
  Explaination: Closes the current scope block.

## Block 29: Q26. Minimum Difference Pair from Two Sorted Arrays

### Original Code
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
- Line 7: `    vector<long long> a(n), b(m);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: `    for (auto &x : b) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    int i = 0, j = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    long long best = LLONG_MAX;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    while (i < n && j < m) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 15: `        best = min(best, llabs(a[i] - b[j]));`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `        if (a[i] < b[j]) i++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `        else j++;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    cout << best << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 21: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 22: `}`
  Explaination: Closes the current scope block.

## Block 30: Q27. Longest Palindromic Substring (Expand Centers)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

pair<int,int> expand(const string& s, int l, int r) {
    while (l >= 0 && r < (int)s.size() && s[l] == s[r]) {
        l--, r++;
    }
    return {l + 1, r - 1};
}

int main() {
    string s;
    cin >> s;

    int bestL = 0, bestR = 0;
    for (int i = 0; i < (int)s.size(); i++) {
        auto p1 = expand(s, i, i);
        auto p2 = expand(s, i, i + 1);

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
- Line 4: `pair<int,int> expand(const string& s, int l, int r) {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 5: `    while (l >= 0 && r < (int)s.size() && s[l] == s[r]) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 6: `        l--, r++;`
  Explaination: Executes a single statement that updates program state.
- Line 7: `    }`
  Explaination: Closes the current scope block.
- Line 8: `    return {l + 1, r - 1};`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 9: `}`
  Explaination: Closes the current scope block.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 12: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 13: `    cin >> s;`
  Explaination: Reads input values from standard input into variables.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    int bestL = 0, bestR = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `    for (int i = 0; i < (int)s.size(); i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 17: `        auto p1 = expand(s, i, i);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: `        auto p2 = expand(s, i, i + 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `        if (p1.second - p1.first > bestR - bestL) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: `            bestL = p1.first;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: `            bestR = p1.second;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: `        }`
  Explaination: Closes the current scope block.
- Line 24: `        if (p2.second - p2.first > bestR - bestL) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 25: `            bestL = p2.first;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 26: `            bestR = p2.second;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 27: `        }`
  Explaination: Closes the current scope block.
- Line 28: `    }`
  Explaination: Closes the current scope block.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    cout << s.substr(bestL, bestR - bestL + 1) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 31: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 32: `}`
  Explaination: Closes the current scope block.

## Block 31: Q28. Shortest Unsorted Continuous Subarray

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (auto &x : a) cin >> x;

    int l = 0, r = n - 1;
    while (l + 1 < n && a[l] <= a[l + 1]) l++;
    if (l == n - 1) {
        cout << 0 << "\n";
        return 0;
    }

    while (r - 1 >= 0 && a[r - 1] <= a[r]) r--;

    int subMin = INT_MAX, subMax = INT_MIN;
    for (int i = l; i <= r; i++) {
        subMin = min(subMin, a[i]);
        subMax = max(subMax, a[i]);
    }

    while (l - 1 >= 0 && a[l - 1] > subMin) l--;
    while (r + 1 < n && a[r + 1] < subMax) r++;

    cout << (r - l + 1) << "\n";
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
- Line 10: `    int l = 0, r = n - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    while (l + 1 < n && a[l] <= a[l + 1]) l++;`
  Explaination: Loop that repeats while the given condition remains true.
- Line 12: `    if (l == n - 1) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: `        cout << 0 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 14: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    while (r - 1 >= 0 && a[r - 1] <= a[r]) r--;`
  Explaination: Loop that repeats while the given condition remains true.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    int subMin = INT_MAX, subMax = INT_MIN;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 20: `    for (int i = l; i <= r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 21: `        subMin = min(subMin, a[i]);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: `        subMax = max(subMax, a[i]);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: `    }`
  Explaination: Closes the current scope block.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    while (l - 1 >= 0 && a[l - 1] > subMin) l--;`
  Explaination: Loop that repeats while the given condition remains true.
- Line 26: `    while (r + 1 < n && a[r + 1] < subMax) r++;`
  Explaination: Loop that repeats while the given condition remains true.
- Line 27: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 28: `    cout << (r - l + 1) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 29: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 30: `}`
  Explaination: Closes the current scope block.

## Block 32: Q29. Remove Element In-Place

### Original Code
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
- Line 10: `    int slow = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    for (int fast = 0; fast < n; fast++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        if (a[fast] != x) a[slow++] = a[fast];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: `    }`
  Explaination: Closes the current scope block.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    cout << slow << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 16: `    for (int i = 0; i < slow; i++) cout << a[i] << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 17: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 20: `}`
  Explaination: Closes the current scope block.

## Block 33: Q30. Remove Adjacent Duplicates in String

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin >> s;

    int slow = 0;
    for (int fast = 0; fast < (int)s.size(); fast++) {
        s[slow++] = s[fast];
        if (slow >= 2 && s[slow - 1] == s[slow - 2]) slow -= 2;
    }

    cout << s.substr(0, slow) << "\n";
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
- Line 8: `    int slow = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    for (int fast = 0; fast < (int)s.size(); fast++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        s[slow++] = s[fast];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 11: `        if (slow >= 2 && s[slow - 1] == s[slow - 2]) slow -= 2;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 12: `    }`
  Explaination: Closes the current scope block.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    cout << s.substr(0, slow) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 15: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 16: `}`
  Explaination: Closes the current scope block.

## Block 34: Q31. Reverse Words in a Sentence

### Original Code
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
- Line 6: `    getline(cin, s);`
  Explaination: Executes a single statement that updates program state.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    vector<string> words;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    int i = 0, n = (int)s.size();`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    while (i < n) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 12: `        while (i < n && s[i] == ' ') i++;`
  Explaination: Loop that repeats while the given condition remains true.
- Line 13: `        if (i >= n) break;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `        int j = i;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `        while (j < n && s[j] != ' ') j++;`
  Explaination: Loop that repeats while the given condition remains true.
- Line 17: `        words.push_back(s.substr(i, j - i));`
  Explaination: Appends a new element to the end of the container.
- Line 18: `        i = j;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `    }`
  Explaination: Closes the current scope block.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    for (int k = (int)words.size() - 1; k >= 0; k--) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 22: `        cout << words[k];`
  Explaination: Prints formatted output to standard output.
- Line 23: `        if (k) cout << " ";`
  Explaination: Checks a condition and executes this branch when the condition is true.
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

## Block 35: Q32. Middle of Linked List (Fast-Slow)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Node {
    int val;
    Node* next;
    Node(int v): val(v), next(nullptr) {}
};

int main() {
    int n;
    cin >> n;
    if (n == 0) {
        cout << -1 << "\n";
        return 0;
    }

    Node* head = nullptr;
    Node* tail = nullptr;

    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        Node* cur = new Node(x);
        if (!head) head = tail = cur;
        else {
            tail->next = cur;
            tail = cur;
        }
    }

    Node* slow = head;
    Node* fast = head;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
    }

    cout << slow->val << "\n";
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
- Line 4: `struct Node {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 5: `    int val;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    Node* next;`
  Explaination: Executes a single statement that updates program state.
- Line 7: `    Node(int v): val(v), next(nullptr) {}`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 8: `};`
  Explaination: Closes the current class/struct/initializer block.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 11: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
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
- Line 18: `    Node* head = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `    Node* tail = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 22: `        int x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 23: `        cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 24: `        Node* cur = new Node(x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 25: `        if (!head) head = tail = cur;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 26: `        else {`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 27: `            tail->next = cur;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 28: `            tail = cur;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 29: `        }`
  Explaination: Closes the current scope block.
- Line 30: `    }`
  Explaination: Closes the current scope block.
- Line 31: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 32: `    Node* slow = head;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 33: `    Node* fast = head;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 34: `    while (fast && fast->next) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 35: `        slow = slow->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 36: `        fast = fast->next->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 37: `    }`
  Explaination: Closes the current scope block.
- Line 38: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 39: `    cout << slow->val << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 40: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 41: `}`
  Explaination: Closes the current scope block.

## Block 36: Q33. Detect Cycle in Linked List

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Node {
    int val;
    Node* next;
    Node(int v): val(v), next(nullptr) {}
};

int main() {
    int n;
    cin >> n;

    vector<Node*> nodes;
    nodes.reserve(n);

    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        nodes.push_back(new Node(x));
    }

    for (int i = 0; i + 1 < n; i++) nodes[i]->next = nodes[i + 1];

    int pos;
    cin >> pos;
    if (pos >= 0 && pos < n) nodes[n - 1]->next = nodes[pos];

    Node* head = (n ? nodes[0] : nullptr);
    Node* slow = head;
    Node* fast = head;

    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) {
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
- Line 4: `struct Node {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 5: `    int val;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    Node* next;`
  Explaination: Executes a single statement that updates program state.
- Line 7: `    Node(int v): val(v), next(nullptr) {}`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 8: `};`
  Explaination: Closes the current class/struct/initializer block.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 11: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    vector<Node*> nodes;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 15: `    nodes.reserve(n);`
  Explaination: Executes a single statement that updates program state.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: `        int x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `        cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 20: `        nodes.push_back(new Node(x));`
  Explaination: Appends a new element to the end of the container.
- Line 21: `    }`
  Explaination: Closes the current scope block.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    for (int i = 0; i + 1 < n; i++) nodes[i]->next = nodes[i + 1];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    int pos;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 26: `    cin >> pos;`
  Explaination: Reads input values from standard input into variables.
- Line 27: `    if (pos >= 0 && pos < n) nodes[n - 1]->next = nodes[pos];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 28: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 29: `    Node* head = (n ? nodes[0] : nullptr);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 30: `    Node* slow = head;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 31: `    Node* fast = head;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 32: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 33: `    while (fast && fast->next) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 34: `        slow = slow->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 35: `        fast = fast->next->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 36: `        if (slow == fast) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 37: `            cout << "Yes\n";`
  Explaination: Prints formatted output to standard output.
- Line 38: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 39: `        }`
  Explaination: Closes the current scope block.
- Line 40: `    }`
  Explaination: Closes the current scope block.
- Line 41: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 42: `    cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 43: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 44: `}`
  Explaination: Closes the current scope block.

## Block 37: Q34. Start Node of Cycle in Linked List

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Node {
    int val;
    Node* next;
    Node(int v): val(v), next(nullptr) {}
};

int main() {
    int n;
    cin >> n;

    vector<Node*> nodes;
    nodes.reserve(n);

    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        nodes.push_back(new Node(x));
    }

    for (int i = 0; i + 1 < n; i++) nodes[i]->next = nodes[i + 1];

    int pos;
    cin >> pos;
    if (n && pos >= 0 && pos < n) nodes[n - 1]->next = nodes[pos];

    Node* head = (n ? nodes[0] : nullptr);
    Node* slow = head;
    Node* fast = head;
    bool has = false;

    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) {
            has = true;
            break;
        }
    }

    if (!has) {
        cout << -1 << "\n";
        return 0;
    }

    slow = head;
    while (slow != fast) {
        slow = slow->next;
        fast = fast->next;
    }

    cout << slow->val << "\n";
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
- Line 4: `struct Node {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 5: `    int val;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    Node* next;`
  Explaination: Executes a single statement that updates program state.
- Line 7: `    Node(int v): val(v), next(nullptr) {}`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 8: `};`
  Explaination: Closes the current class/struct/initializer block.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 11: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    vector<Node*> nodes;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 15: `    nodes.reserve(n);`
  Explaination: Executes a single statement that updates program state.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: `        int x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `        cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 20: `        nodes.push_back(new Node(x));`
  Explaination: Appends a new element to the end of the container.
- Line 21: `    }`
  Explaination: Closes the current scope block.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    for (int i = 0; i + 1 < n; i++) nodes[i]->next = nodes[i + 1];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    int pos;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 26: `    cin >> pos;`
  Explaination: Reads input values from standard input into variables.
- Line 27: `    if (n && pos >= 0 && pos < n) nodes[n - 1]->next = nodes[pos];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 28: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 29: `    Node* head = (n ? nodes[0] : nullptr);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 30: `    Node* slow = head;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 31: `    Node* fast = head;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 32: `    bool has = false;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 33: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 34: `    while (fast && fast->next) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 35: `        slow = slow->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 36: `        fast = fast->next->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 37: `        if (slow == fast) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 38: `            has = true;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 39: `            break;`
  Explaination: Exits the nearest loop or switch block immediately.
- Line 40: `        }`
  Explaination: Closes the current scope block.
- Line 41: `    }`
  Explaination: Closes the current scope block.
- Line 42: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 43: `    if (!has) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 44: `        cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 45: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 46: `    }`
  Explaination: Closes the current scope block.
- Line 47: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 48: `    slow = head;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 49: `    while (slow != fast) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 50: `        slow = slow->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 51: `        fast = fast->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 52: `    }`
  Explaination: Closes the current scope block.
- Line 53: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 54: `    cout << slow->val << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 55: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 56: `}`
  Explaination: Closes the current scope block.

## Block 38: Q35. Happy Number (Fast-Slow)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int nextVal(int n) {
    int s = 0;
    while (n > 0) {
        int d = n % 10;
        s += d * d;
        n /= 10;
    }
    return s;
}

int main() {
    int n;
    cin >> n;

    int slow = n, fast = n;
    do {
        slow = nextVal(slow);
        fast = nextVal(nextVal(fast));
    } while (slow != fast);

    cout << (slow == 1 ? "Yes" : "No") << "\n";
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
- Line 4: `int nextVal(int n) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    int s = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    while (n > 0) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 7: `        int d = n % 10;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 8: `        s += d * d;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 9: `        n /= 10;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 10: `    }`
  Explaination: Closes the current scope block.
- Line 11: `    return s;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 12: `}`
  Explaination: Closes the current scope block.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 15: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    int slow = n, fast = n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `    do {`
  Explaination: Starts a do-while loop body that runs at least once.
- Line 20: `        slow = nextVal(slow);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: `        fast = nextVal(nextVal(fast));`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: `    } while (slow != fast);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    cout << (slow == 1 ? "Yes" : "No") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 25: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 26: `}`
  Explaination: Closes the current scope block.

## Block 39: Q36. Find Duplicate Number (Floyd in Array)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> a(n + 1);
    for (int i = 0; i <= n; i++) cin >> a[i];

    int slow = a[0], fast = a[0];
    do {
        slow = a[slow];
        fast = a[a[fast]];
    } while (slow != fast);

    slow = a[0];
    while (slow != fast) {
        slow = a[slow];
        fast = a[fast];
    }

    cout << slow << "\n";
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
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    vector<int> a(n + 1);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (int i = 0; i <= n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    int slow = a[0], fast = a[0];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    do {`
  Explaination: Starts a do-while loop body that runs at least once.
- Line 13: `        slow = a[slow];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: `        fast = a[a[fast]];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `    } while (slow != fast);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    slow = a[0];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: `    while (slow != fast) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 19: `        slow = a[slow];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `        fast = a[fast];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: `    }`
  Explaination: Closes the current scope block.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    cout << slow << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 24: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 25: `}`
  Explaination: Closes the current scope block.

## Block 40: Q37. Remove N-th Node from End of Linked List

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Node {
    int val;
    Node* next;
    Node(int v): val(v), next(nullptr) {}
};

int main() {
    int l;
    cin >> l;

    Node dummy(0);
    Node* tail = &dummy;

    for (int i = 0; i < l; i++) {
        int x;
        cin >> x;
        tail->next = new Node(x);
        tail = tail->next;
    }

    int n;
    cin >> n;

    Node* fast = &dummy;
    for (int i = 0; i < n && fast; i++) fast = fast->next;

    if (!fast) {
        // remove head when n == length
        if (dummy.next) dummy.next = dummy.next->next;
    } else {
        Node* slow = &dummy;
        while (fast->next) {
            fast = fast->next;
            slow = slow->next;
        }
        if (slow->next) slow->next = slow->next->next;
    }

    Node* cur = dummy.next;
    while (cur) {
        cout << cur->val;
        if (cur->next) cout << " ";
        cur = cur->next;
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
- Line 4: `struct Node {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 5: `    int val;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    Node* next;`
  Explaination: Executes a single statement that updates program state.
- Line 7: `    Node(int v): val(v), next(nullptr) {}`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 8: `};`
  Explaination: Closes the current class/struct/initializer block.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 11: `    int l;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    cin >> l;`
  Explaination: Reads input values from standard input into variables.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    Node dummy(0);`
  Explaination: Executes a single statement that updates program state.
- Line 15: `    Node* tail = &dummy;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    for (int i = 0; i < l; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: `        int x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `        cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 20: `        tail->next = new Node(x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: `        tail = tail->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: `    }`
  Explaination: Closes the current scope block.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 25: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `    Node* fast = &dummy;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 28: `    for (int i = 0; i < n && fast; i++) fast = fast->next;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    if (!fast) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 31: `        // remove head when n == length`
  Explaination: Comment line documenting intent for the next statement(s).
- Line 32: `        if (dummy.next) dummy.next = dummy.next->next;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 33: `    } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 34: `        Node* slow = &dummy;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 35: `        while (fast->next) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 36: `            fast = fast->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 37: `            slow = slow->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 38: `        }`
  Explaination: Closes the current scope block.
- Line 39: `        if (slow->next) slow->next = slow->next->next;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 40: `    }`
  Explaination: Closes the current scope block.
- Line 41: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 42: `    Node* cur = dummy.next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 43: `    while (cur) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 44: `        cout << cur->val;`
  Explaination: Prints formatted output to standard output.
- Line 45: `        if (cur->next) cout << " ";`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 46: `        cur = cur->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 47: `    }`
  Explaination: Closes the current scope block.
- Line 48: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 49: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 50: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 51: `}`
  Explaination: Closes the current scope block.

## Block 41: Q38. Palindrome Linked List

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Node {
    int val;
    Node* next;
    Node(int v): val(v), next(nullptr) {}
};

Node* reverseList(Node* head) {
    Node* prev = nullptr;
    while (head) {
        Node* nxt = head->next;
        head->next = prev;
        prev = head;
        head = nxt;
    }
    return prev;
}

int main() {
    int n;
    cin >> n;

    if (n == 0) {
        cout << "Yes\n";
        return 0;
    }

    Node* head = nullptr;
    Node* tail = nullptr;

    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        Node* cur = new Node(x);
        if (!head) head = tail = cur;
        else {
            tail->next = cur;
            tail = cur;
        }
    }

    Node* slow = head;
    Node* fast = head;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
    }

    Node* second = reverseList(slow);
    Node* p1 = head;
    Node* p2 = second;

    bool ok = true;
    while (p2) {
        if (p1->val != p2->val) {
            ok = false;
            break;
        }
        p1 = p1->next;
        p2 = p2->next;
    }

    cout << (ok ? "Yes" : "No") << "\n";
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
- Line 4: `struct Node {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 5: `    int val;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    Node* next;`
  Explaination: Executes a single statement that updates program state.
- Line 7: `    Node(int v): val(v), next(nullptr) {}`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 8: `};`
  Explaination: Closes the current class/struct/initializer block.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `Node* reverseList(Node* head) {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 11: `    Node* prev = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: `    while (head) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 13: `        Node* nxt = head->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: `        head->next = prev;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `        prev = head;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `        head = nxt;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `    }`
  Explaination: Closes the current scope block.
- Line 18: `    return prev;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 19: `}`
  Explaination: Closes the current scope block.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 22: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 23: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    if (n == 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 26: `        cout << "Yes\n";`
  Explaination: Prints formatted output to standard output.
- Line 27: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 28: `    }`
  Explaination: Closes the current scope block.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    Node* head = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 31: `    Node* tail = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 32: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 33: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 34: `        int x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 35: `        cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 36: `        Node* cur = new Node(x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 37: `        if (!head) head = tail = cur;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 38: `        else {`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 39: `            tail->next = cur;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 40: `            tail = cur;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 41: `        }`
  Explaination: Closes the current scope block.
- Line 42: `    }`
  Explaination: Closes the current scope block.
- Line 43: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 44: `    Node* slow = head;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 45: `    Node* fast = head;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 46: `    while (fast && fast->next) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 47: `        slow = slow->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 48: `        fast = fast->next->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 49: `    }`
  Explaination: Closes the current scope block.
- Line 50: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 51: `    Node* second = reverseList(slow);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 52: `    Node* p1 = head;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 53: `    Node* p2 = second;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 54: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 55: `    bool ok = true;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 56: `    while (p2) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 57: `        if (p1->val != p2->val) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 58: `            ok = false;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 59: `            break;`
  Explaination: Exits the nearest loop or switch block immediately.
- Line 60: `        }`
  Explaination: Closes the current scope block.
- Line 61: `        p1 = p1->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 62: `        p2 = p2->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 63: `    }`
  Explaination: Closes the current scope block.
- Line 64: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 65: `    cout << (ok ? "Yes" : "No") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 66: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 67: `}`
  Explaination: Closes the current scope block.

## Block 42: Q39. Story-Based: Rescue Boats (Min Boats)

### Original Code
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
- Line 9: `    vector<long long> w(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 10: `    for (auto &x : w) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: `    sort(w.begin(), w.end());`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    int l = 0, r = n - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `    int boats = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    while (l <= r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 17: `        if (w[l] + w[r] <= limit) l++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 18: `        r--;`
  Explaination: Executes a single statement that updates program state.
- Line 19: `        boats++;`
  Explaination: Executes a single statement that updates program state.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    cout << boats << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 23: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 24: `}`
  Explaination: Closes the current scope block.

## Block 43: Q40. Story-Based: Max Valid Pairings Under Capacity

### Original Code
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
- Line 6: `    long long d;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    cin >> n >> d;`
  Explaination: Reads input values from standard input into variables.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 10: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    int i = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    int pairs = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    while (i + 1 < n) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 16: `        if (a[i + 1] - a[i] <= d) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `            pairs++;`
  Explaination: Executes a single statement that updates program state.
- Line 18: `            i += 2;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 20: `            i++;`
  Explaination: Executes a single statement that updates program state.
- Line 21: `        }`
  Explaination: Closes the current scope block.
- Line 22: `    }`
  Explaination: Closes the current scope block.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    cout << pairs << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 25: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 26: `}`
  Explaination: Closes the current scope block.
