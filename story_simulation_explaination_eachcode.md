# TCS_NQT_Story_Simulation_Master_CPP.md: Line-by-Line Code Explaination

This file explains each C++ code block line-by-line from the source topic file.

## Block 1: Q1. Odd-Even Vehicle Rule

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, d;
    cin >> n >> d;
    int need = d % 2;
    int ans = 0;

    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        if ((x % 2 + 2) % 2 == need) ans++;
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
- Line 5: `    int n, d;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> d;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    int need = d % 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 8: `    int ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: `        int x; cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 12: `        if ((x % 2 + 2) % 2 == need) ans++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: `    }`
  Explaination: Closes the current scope block.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 16: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 17: `}`
  Explaination: Closes the current scope block.

## Block 2: Q2. Rearrange Multiples of 10 to End (Stable)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<long long> a(n), out;
    for (auto &x : a) cin >> x;

    out.reserve(n);
    for (auto x : a) if (x % 10 != 0) out.push_back(x);
    for (auto x : a) if (x % 10 == 0) out.push_back(x);

    for (auto x : out) cout << x << " ";
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
- Line 7: `    vector<long long> a(n), out;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    out.reserve(n);`
  Explaination: Executes a single statement that updates program state.
- Line 11: `    for (auto x : a) if (x % 10 != 0) out.push_back(x);`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `    for (auto x : a) if (x % 10 == 0) out.push_back(x);`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    for (auto x : out) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 16: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 17: `}`
  Explaination: Closes the current scope block.

## Block 3: Q3. Push Empty Packets (0) to End

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (auto &x : a) cin >> x;

    int j = 0;
    for (int i = 0; i < n; i++) {
        if (a[i] != 0) swap(a[i], a[j++]);
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
- Line 10: `    int j = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        if (a[i] != 0) swap(a[i], a[j++]);`
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

## Block 4: Q4. Product Codes with No Repeated Digits in [L, R]

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

bool uniqueDigits(long long x) {
    vector<int> seen(10, 0);
    if (x == 0) return true;
    while (x > 0) {
        int d = x % 10;
        if (seen[d]) return false;
        seen[d] = 1;
        x /= 10;
    }
    return true;
}

int main() {
    long long l, r;
    cin >> l >> r;

    long long ans = 0;
    for (long long x = l; x <= r; x++) {
        if (uniqueDigits(x)) ans++;
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
- Line 4: `bool uniqueDigits(long long x) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    vector<int> seen(10, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 6: `    if (x == 0) return true;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 7: `    while (x > 0) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 8: `        int d = x % 10;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `        if (seen[d]) return false;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 10: `        seen[d] = 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 11: `        x /= 10;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: `    }`
  Explaination: Closes the current scope block.
- Line 13: `    return true;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 14: `}`
  Explaination: Closes the current scope block.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 17: `    long long l, r;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: `    cin >> l >> r;`
  Explaination: Reads input values from standard input into variables.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    long long ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: `    for (long long x = l; x <= r; x++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 22: `        if (uniqueDigits(x)) ans++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
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

## Block 5: Q5. Minimum Left Rotations to Match String

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string a, b;
    cin >> a >> b;

    if (a.size() != b.size()) {
        cout << -1 << "\n";
        return 0;
    }

    string s = a + a;
    size_t pos = s.find(b);
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
- Line 5: `    string a, b;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 6: `    cin >> a >> b;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    if (a.size() != b.size()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 9: `        cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 10: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 11: `    }`
  Explaination: Closes the current scope block.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    string s = a + a;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 14: `    size_t pos = s.find(b);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `    if (pos == string::npos || pos >= a.size()) cout << -1 << "\n";`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `    else cout << pos << "\n";`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 19: `}`
  Explaination: Closes the current scope block.

## Block 6: Q6. Sort Risk Levels (0,1,2)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (auto &x : a) cin >> x;

    int l = 0, m = 0, h = n - 1;
    while (m <= h) {
        if (a[m] == 0) swap(a[l++], a[m++]);
        else if (a[m] == 1) m++;
        else swap(a[m], a[h--]);
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
- Line 10: `    int l = 0, m = 0, h = n - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    while (m <= h) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 12: `        if (a[m] == 0) swap(a[l++], a[m++]);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: `        else if (a[m] == 1) m++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `        else swap(a[m], a[h--]);`
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

## Block 7: Q7. Maximum Profit from Stock Prices

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> p(n);
    for (auto &x : p) cin >> x;

    int mn = INT_MAX, ans = 0;
    for (int x : p) {
        mn = min(mn, x);
        ans = max(ans, x - mn);
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
- Line 6: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<int> p(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &x : p) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    int mn = INT_MAX, ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    for (int x : p) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        mn = min(mn, x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 13: `        ans = max(ans, x - mn);`
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

## Block 8: Q8. Transaction Burst Count (Subarrays with Target Sum)

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

    unordered_map<long long, long long> freq;
    freq[0] = 1;

    long long pref = 0, ans = 0;
    for (auto x : a) {
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
- Line 12: `    unordered_map<long long, long long> freq;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 13: `    freq[0] = 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    long long pref = 0, ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `    for (auto x : a) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 17: `        pref += x;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: `        if (freq.count(pref - k)) ans += freq[pref - k];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 19: `        freq[pref]++;`
  Explaination: Executes a single statement that updates program state.
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

## Block 9: Q9. ATM Cash Dispense Simulation

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long amt;
    cin >> amt;
    vector<int> den = {2000, 500, 200, 100};
    vector<long long> stock(4), use(4, 0);
    for (auto &x : stock) cin >> x;

    for (int i = 0; i < 4; i++) {
        long long take = min(stock[i], amt / den[i]);
        use[i] = take;
        amt -= take * den[i];
    }

    if (amt != 0) {
        cout << -1 << "\n";
        return 0;
    }

    for (auto x : use) cout << x << " ";
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
- Line 5: `    long long amt;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> amt;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<int> den = {2000, 500, 200, 100};`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    vector<long long> stock(4), use(4, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (auto &x : stock) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    for (int i = 0; i < 4; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        long long take = min(stock[i], amt / den[i]);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `        use[i] = take;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: `        amt -= take * den[i];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    if (amt != 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 18: `        cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 19: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    for (auto x : use) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 23: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 24: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 25: `}`
  Explaination: Closes the current scope block.

## Block 10: Q10. Vending Machine Change Feasibility

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    int c5 = 0, c10 = 0;
    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        if (x == 5) c5++;
        else if (x == 10) {
            if (c5 == 0) {
                cout << "No\n";
                return 0;
            }
            c5--;
            c10++;
        } else {
            if (c10 > 0 && c5 > 0) {
                c10--;
                c5--;
            } else if (c5 >= 3) c5 -= 3;
            else {
                cout << "No\n";
                return 0;
            }
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
- Line 5: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    int c5 = 0, c10 = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        int x; cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 11: `        if (x == 5) c5++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 12: `        else if (x == 10) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: `            if (c5 == 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `                cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 15: `                return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 16: `            }`
  Explaination: Closes the current scope block.
- Line 17: `            c5--;`
  Explaination: Executes a single statement that updates program state.
- Line 18: `            c10++;`
  Explaination: Executes a single statement that updates program state.
- Line 19: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 20: `            if (c10 > 0 && c5 > 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: `                c10--;`
  Explaination: Executes a single statement that updates program state.
- Line 22: `                c5--;`
  Explaination: Executes a single statement that updates program state.
- Line 23: `            } else if (c5 >= 3) c5 -= 3;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 24: `            else {`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 25: `                cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 26: `                return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 27: `            }`
  Explaination: Closes the current scope block.
- Line 28: `        }`
  Explaination: Closes the current scope block.
- Line 29: `    }`
  Explaination: Closes the current scope block.
- Line 30: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 31: `    cout << "Yes\n";`
  Explaination: Prints formatted output to standard output.
- Line 32: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 33: `}`
  Explaination: Closes the current scope block.

## Block 11: Q11. Time Needed for K-th Ticket Buyer

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;
    vector<int> t(n);
    for (auto &x : t) cin >> x;

    int ans = 0;
    for (int i = 0; i < n; i++) {
        if (i <= k) ans += min(t[i], t[k]);
        else ans += min(t[i], t[k] - 1);
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
- Line 6: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<int> t(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &x : t) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    int ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        if (i <= k) ans += min(t[i], t[k]);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: `        else ans += min(t[i], t[k] - 1);`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
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

## Block 12: Q12. Print Queue Priority (When Target Prints)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, idx;
    cin >> n >> idx;

    queue<pair<int,int>> q;
    priority_queue<int> pq;

    for (int i = 0; i < n; i++) {
        int p; cin >> p;
        q.push({p, i});
        pq.push(p);
    }

    int time = 0;
    while (!q.empty()) {
        auto cur = q.front(); q.pop();
        if (cur.first == pq.top()) {
            pq.pop();
            time++;
            if (cur.second == idx) {
                cout << time << "\n";
                return 0;
            }
        } else q.push(cur);
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
- Line 5: `    int n, idx;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> idx;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    queue<pair<int,int>> q;`
  Explaination: Declares a queue (FIFO structure).
- Line 9: `    priority_queue<int> pq;`
  Explaination: Declares a heap-based priority queue.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        int p; cin >> p;`
  Explaination: Reads input values from standard input into variables.
- Line 13: `        q.push({p, i});`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 14: `        pq.push(p);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    int time = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: `    while (!q.empty()) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 19: `        auto cur = q.front(); q.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 20: `        if (cur.first == pq.top()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: `            pq.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 22: `            time++;`
  Explaination: Executes a single statement that updates program state.
- Line 23: `            if (cur.second == idx) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 24: `                cout << time << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 25: `                return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 26: `            }`
  Explaination: Closes the current scope block.
- Line 27: `        } else q.push(cur);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 28: `    }`
  Explaination: Closes the current scope block.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 31: `}`
  Explaination: Closes the current scope block.

## Block 13: Q13. Round Robin Completion Time Simulation

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, q;
    cin >> n >> q;

    vector<int> bt(n), rem(n), ct(n, 0);
    for (int i = 0; i < n; i++) cin >> bt[i], rem[i] = bt[i];

    queue<int> qu;
    for (int i = 0; i < n; i++) qu.push(i);

    int time = 0;
    while (!qu.empty()) {
        int i = qu.front(); qu.pop();
        int run = min(q, rem[i]);
        rem[i] -= run;
        time += run;

        if (rem[i] == 0) ct[i] = time;
        else qu.push(i);
    }

    for (int x : ct) cout << x << " ";
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
- Line 5: `    int n, q;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> q;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    vector<int> bt(n), rem(n), ct(n, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (int i = 0; i < n; i++) cin >> bt[i], rem[i] = bt[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    queue<int> qu;`
  Explaination: Declares a queue (FIFO structure).
- Line 12: `    for (int i = 0; i < n; i++) qu.push(i);`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    int time = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: `    while (!qu.empty()) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 16: `        int i = qu.front(); qu.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 17: `        int run = min(q, rem[i]);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: `        rem[i] -= run;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `        time += run;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `        if (rem[i] == 0) ct[i] = time;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 22: `        else qu.push(i);`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 23: `    }`
  Explaination: Closes the current scope block.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    for (int x : ct) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 26: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 27: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 28: `}`
  Explaination: Closes the current scope block.

## Block 14: Q14. Single-Agent Call Center Waiting Time

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    vector<long long> arr(n), srv(n), wait(n);
    for (auto &x : arr) cin >> x;
    for (auto &x : srv) cin >> x;

    long long finish = 0;
    for (int i = 0; i < n; i++) {
        if (finish <= arr[i]) {
            wait[i] = 0;
            finish = arr[i] + srv[i];
        } else {
            wait[i] = finish - arr[i];
            finish += srv[i];
        }
    }

    for (auto x : wait) cout << x << " ";
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
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    vector<long long> arr(n), srv(n), wait(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (auto &x : arr) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `    for (auto &x : srv) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    long long finish = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        if (finish <= arr[i]) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: `            wait[i] = 0;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `            finish = arr[i] + srv[i];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 18: `            wait[i] = finish - arr[i];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `            finish += srv[i];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `        }`
  Explaination: Closes the current scope block.
- Line 21: `    }`
  Explaination: Closes the current scope block.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    for (auto x : wait) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 24: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 25: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 26: `}`
  Explaination: Closes the current scope block.

## Block 15: Q15. LRU Page Fault Simulation

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int cap, n;
    cin >> cap >> n;

    list<int> dq;
    unordered_map<int, list<int>::iterator> pos;
    int faults = 0;

    for (int i = 0; i < n; i++) {
        int page;
        cin >> page;

        if (!pos.count(page)) {
            faults++;
            if ((int)dq.size() == cap) {
                int old = dq.back();
                dq.pop_back();
                pos.erase(old);
            }
            dq.push_front(page);
            pos[page] = dq.begin();
        } else {
            dq.erase(pos[page]);
            dq.push_front(page);
            pos[page] = dq.begin();
        }
    }

    cout << faults << "\n";
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
- Line 5: `    int cap, n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> cap >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    list<int> dq;`
  Explaination: Executes a single statement that updates program state.
- Line 9: `    unordered_map<int, list<int>::iterator> pos;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 10: `    int faults = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        int page;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `        cin >> page;`
  Explaination: Reads input values from standard input into variables.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `        if (!pos.count(page)) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `            faults++;`
  Explaination: Executes a single statement that updates program state.
- Line 18: `            if ((int)dq.size() == cap) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 19: `                int old = dq.back();`
  Explaination: Accesses the last element of a sequence container.
- Line 20: `                dq.pop_back();`
  Explaination: Removes the last element from the container.
- Line 21: `                pos.erase(old);`
  Explaination: Removes selected element(s) from a container.
- Line 22: `            }`
  Explaination: Closes the current scope block.
- Line 23: `            dq.push_front(page);`
  Explaination: Executes a single statement that updates program state.
- Line 24: `            pos[page] = dq.begin();`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 25: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 26: `            dq.erase(pos[page]);`
  Explaination: Removes selected element(s) from a container.
- Line 27: `            dq.push_front(page);`
  Explaination: Executes a single statement that updates program state.
- Line 28: `            pos[page] = dq.begin();`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 29: `        }`
  Explaination: Closes the current scope block.
- Line 30: `    }`
  Explaination: Closes the current scope block.
- Line 31: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 32: `    cout << faults << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 33: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 34: `}`
  Explaination: Closes the current scope block.

## Block 16: Q16. Browser Back/Forward Simulation

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int q;
    cin >> q;

    stack<string> backSt, fwdSt;
    string cur = "home";

    while (q--) {
        string op;
        cin >> op;

        if (op == "VISIT") {
            string url; cin >> url;
            backSt.push(cur);
            cur = url;
            while (!fwdSt.empty()) fwdSt.pop();
        } else if (op == "BACK") {
            if (!backSt.empty()) {
                fwdSt.push(cur);
                cur = backSt.top(); backSt.pop();
            }
            cout << cur << "\n";
        } else if (op == "FORWARD") {
            if (!fwdSt.empty()) {
                backSt.push(cur);
                cur = fwdSt.top(); fwdSt.pop();
            }
            cout << cur << "\n";
        } else {
            cout << cur << "\n";
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
- Line 5: `    int q;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> q;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    stack<string> backSt, fwdSt;`
  Explaination: Declares a stack (LIFO structure).
- Line 9: `    string cur = "home";`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    while (q--) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 12: `        string op;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 13: `        cin >> op;`
  Explaination: Reads input values from standard input into variables.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `        if (op == "VISIT") {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `            string url; cin >> url;`
  Explaination: Reads input values from standard input into variables.
- Line 17: `            backSt.push(cur);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 18: `            cur = url;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `            while (!fwdSt.empty()) fwdSt.pop();`
  Explaination: Loop that repeats while the given condition remains true.
- Line 20: `        } else if (op == "BACK") {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 21: `            if (!backSt.empty()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 22: `                fwdSt.push(cur);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 23: `                cur = backSt.top(); backSt.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 24: `            }`
  Explaination: Closes the current scope block.
- Line 25: `            cout << cur << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 26: `        } else if (op == "FORWARD") {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 27: `            if (!fwdSt.empty()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 28: `                backSt.push(cur);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 29: `                cur = fwdSt.top(); fwdSt.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 30: `            }`
  Explaination: Closes the current scope block.
- Line 31: `            cout << cur << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 32: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 33: `            cout << cur << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 34: `        }`
  Explaination: Closes the current scope block.
- Line 35: `    }`
  Explaination: Closes the current scope block.
- Line 36: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 37: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 38: `}`
  Explaination: Closes the current scope block.

## Block 17: Q17. Caesar Cipher Encryption (Story)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    int k;
    cin.ignore(numeric_limits<streamsize>::max(), '\n');
    getline(cin, s);
    cin >> k;
    k %= 26;

    for (char &c : s) {
        if (c >= 'a' && c <= 'z') c = char('a' + (c - 'a' + k) % 26);
        else if (c >= 'A' && c <= 'Z') c = char('A' + (c - 'A' + k) % 26);
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
- Line 5: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 6: `    int k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    cin.ignore(numeric_limits<streamsize>::max(), '\n');`
  Explaination: Executes a single statement that updates program state.
- Line 8: `    getline(cin, s);`
  Explaination: Executes a single statement that updates program state.
- Line 9: `    cin >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 10: `    k %= 26;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    for (char &c : s) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        if (c >= 'a' && c <= 'z') c = char('a' + (c - 'a' + k) % 26);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `        else if (c >= 'A' && c <= 'Z') c = char('A' + (c - 'A' + k) % 26);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    cout << s << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 18: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 19: `}`
  Explaination: Closes the current scope block.

## Block 18: Q18. Keyword Checker (Compiler Story)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string w;
    cin >> w;

    static const unordered_set<string> kw = {
        "auto","break","case","char","const","continue","default","do","double","else","enum",
        "extern","float","for","goto","if","int","long","register","return","short","signed",
        "sizeof","static","struct","switch","typedef","union","unsigned","void","volatile","while",
        "bool","class","namespace","new","delete","public","private","protected","template","this",
        "throw","try","catch","using","virtual","friend","inline","operator","true","false","nullptr"
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
- Line 5: `    string w;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 6: `    cin >> w;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    static const unordered_set<string> kw = {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 9: `        "auto","break","case","char","const","continue","default","do","double","else","enum",`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 10: `        "extern","float","for","goto","if","int","long","register","return","short","signed",`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 11: `        "sizeof","static","struct","switch","typedef","union","unsigned","void","volatile","while",`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 12: `        "bool","class","namespace","new","delete","public","private","protected","template","this",`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 13: `        "throw","try","catch","using","virtual","friend","inline","operator","true","false","nullptr"`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 14: `    };`
  Explaination: Closes the current class/struct/initializer block.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    cout << (kw.count(w) ? "Keyword" : "Not Keyword") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 17: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 18: `}`
  Explaination: Closes the current scope block.

## Block 19: Q19. Mask Digits Except Last 4

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin.ignore(numeric_limits<streamsize>::max(), '\n');
    getline(cin, s);

    int digits = 0;
    for (char c : s) if (isdigit((unsigned char)c)) digits++;

    int keepFrom = max(0, digits - 4), seen = 0;

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
- Line 5: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 6: `    cin.ignore(numeric_limits<streamsize>::max(), '\n');`
  Explaination: Executes a single statement that updates program state.
- Line 7: `    getline(cin, s);`
  Explaination: Executes a single statement that updates program state.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    int digits = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: `    for (char c : s) if (isdigit((unsigned char)c)) digits++;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    int keepFrom = max(0, digits - 4), seen = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    for (char &c : s) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        if (isdigit((unsigned char)c)) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `            if (seen < keepFrom) c = 'X';`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `            seen++;`
  Explaination: Executes a single statement that updates program state.
- Line 18: `        }`
  Explaination: Closes the current scope block.
- Line 19: `    }`
  Explaination: Closes the current scope block.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    cout << s << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 22: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 23: `}`
  Explaination: Closes the current scope block.

## Block 20: Q20. Multi-Delimiter Token Counter

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string s, d;
    cin.ignore(numeric_limits<streamsize>::max(), '\n');
    getline(cin, s);
    getline(cin, d);

    vector<int> isDel(256, 0);
    for (char c : d) isDel[(unsigned char)c] = 1;

    int cnt = 0;
    bool inToken = false;

    for (char c : s) {
        if (isDel[(unsigned char)c]) inToken = false;
        else {
            if (!inToken) cnt++;
            inToken = true;
        }
    }

    cout << cnt << "\n";
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
- Line 5: `    string s, d;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 6: `    cin.ignore(numeric_limits<streamsize>::max(), '\n');`
  Explaination: Executes a single statement that updates program state.
- Line 7: `    getline(cin, s);`
  Explaination: Executes a single statement that updates program state.
- Line 8: `    getline(cin, d);`
  Explaination: Executes a single statement that updates program state.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    vector<int> isDel(256, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 11: `    for (char c : d) isDel[(unsigned char)c] = 1;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    int cnt = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `    bool inToken = false;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    for (char c : s) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 17: `        if (isDel[(unsigned char)c]) inToken = false;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 18: `        else {`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 19: `            if (!inToken) cnt++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 20: `            inToken = true;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: `        }`
  Explaination: Closes the current scope block.
- Line 22: `    }`
  Explaination: Closes the current scope block.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    cout << cnt << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 25: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 26: `}`
  Explaination: Closes the current scope block.

## Block 21: Q21. Robot Navigation with Obstacles

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;

    vector<vector<int>> g(r, vector<int>(c));
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++) cin >> g[i][j];

    int x, y;
    cin >> x >> y;
    string cmd;
    cin >> cmd;

    for (char ch : cmd) {
        int nx = x, ny = y;
        if (ch == 'L') ny--;
        else if (ch == 'R') ny++;
        else if (ch == 'U') nx--;
        else if (ch == 'D') nx++;

        if (nx >= 0 && nx < r && ny >= 0 && ny < c && g[nx][ny] == 0) {
            x = nx;
            y = ny;
        }
    }

    cout << x << " " << y << "\n";
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
- Line 5: `    int r, c;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> r >> c;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    vector<vector<int>> g(r, vector<int>(c));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (int i = 0; i < r; i++)`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        for (int j = 0; j < c; j++) cin >> g[i][j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    int x, y;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    cin >> x >> y;`
  Explaination: Reads input values from standard input into variables.
- Line 14: `    string cmd;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 15: `    cin >> cmd;`
  Explaination: Reads input values from standard input into variables.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    for (char ch : cmd) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: `        int nx = x, ny = y;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `        if (ch == 'L') ny--;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 20: `        else if (ch == 'R') ny++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: `        else if (ch == 'U') nx--;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 22: `        else if (ch == 'D') nx++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `        if (nx >= 0 && nx < r && ny >= 0 && ny < c && g[nx][ny] == 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 25: `            x = nx;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 26: `            y = ny;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 27: `        }`
  Explaination: Closes the current scope block.
- Line 28: `    }`
  Explaination: Closes the current scope block.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    cout << x << " " << y << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 31: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 32: `}`
  Explaination: Closes the current scope block.

## Block 22: Q22. Parking Lot Occupancy Updates

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;

    vector<vector<int>> g(r, vector<int>(c));
    int occ = 0;

    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            cin >> g[i][j];
            occ += g[i][j];
        }
    }

    int q;
    cin >> q;

    while (q--) {
        string op;
        int x, y;
        cin >> op >> x >> y;
        if (x < 0 || x >= r || y < 0 || y >= c) continue;

        if (op == "PARK") {
            if (g[x][y] == 0) g[x][y] = 1, occ++;
        } else {
            if (g[x][y] == 1) g[x][y] = 0, occ--;
        }
    }

    cout << occ << "\n";
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
- Line 5: `    int r, c;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> r >> c;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    vector<vector<int>> g(r, vector<int>(c));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    int occ = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    for (int i = 0; i < r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        for (int j = 0; j < c; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `            cin >> g[i][j];`
  Explaination: Reads input values from standard input into variables.
- Line 14: `            occ += g[i][j];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `        }`
  Explaination: Closes the current scope block.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    int q;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `    cin >> q;`
  Explaination: Reads input values from standard input into variables.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    while (q--) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 22: `        string op;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 23: `        int x, y;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 24: `        cin >> op >> x >> y;`
  Explaination: Reads input values from standard input into variables.
- Line 25: `        if (x < 0 || x >= r || y < 0 || y >= c) continue;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `        if (op == "PARK") {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 28: `            if (g[x][y] == 0) g[x][y] = 1, occ++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 29: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 30: `            if (g[x][y] == 1) g[x][y] = 0, occ--;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 31: `        }`
  Explaination: Closes the current scope block.
- Line 32: `    }`
  Explaination: Closes the current scope block.
- Line 33: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 34: `    cout << occ << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 35: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 36: `}`
  Explaination: Closes the current scope block.

## Block 23: Q23. Rotting Oranges Simulation

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;

    vector<vector<int>> g(r, vector<int>(c));
    queue<pair<int,int>> q;
    int fresh = 0;

    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            cin >> g[i][j];
            if (g[i][j] == 2) q.push({i,j});
            else if (g[i][j] == 1) fresh++;
        }
    }

    int mins = 0;
    int dr[4] = {1,-1,0,0};
    int dc[4] = {0,0,1,-1};

    while (!q.empty() && fresh > 0) {
        int sz = q.size();
        mins++;
        while (sz--) {
            auto [x,y] = q.front(); q.pop();
            for (int k = 0; k < 4; k++) {
                int nx = x + dr[k], ny = y + dc[k];
                if (nx>=0 && nx<r && ny>=0 && ny<c && g[nx][ny]==1) {
                    g[nx][ny] = 2;
                    fresh--;
                    q.push({nx,ny});
                }
            }
        }
    }

    cout << (fresh == 0 ? mins : -1) << "\n";
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
- Line 5: `    int r, c;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> r >> c;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    vector<vector<int>> g(r, vector<int>(c));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    queue<pair<int,int>> q;`
  Explaination: Declares a queue (FIFO structure).
- Line 10: `    int fresh = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    for (int i = 0; i < r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        for (int j = 0; j < c; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `            cin >> g[i][j];`
  Explaination: Reads input values from standard input into variables.
- Line 15: `            if (g[i][j] == 2) q.push({i,j});`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `            else if (g[i][j] == 1) fresh++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `        }`
  Explaination: Closes the current scope block.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    int mins = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: `    int dr[4] = {1,-1,0,0};`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 22: `    int dc[4] = {0,0,1,-1};`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    while (!q.empty() && fresh > 0) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 25: `        int sz = q.size();`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 26: `        mins++;`
  Explaination: Executes a single statement that updates program state.
- Line 27: `        while (sz--) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 28: `            auto [x,y] = q.front(); q.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 29: `            for (int k = 0; k < 4; k++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 30: `                int nx = x + dr[k], ny = y + dc[k];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 31: `                if (nx>=0 && nx<r && ny>=0 && ny<c && g[nx][ny]==1) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 32: `                    g[nx][ny] = 2;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 33: `                    fresh--;`
  Explaination: Executes a single statement that updates program state.
- Line 34: `                    q.push({nx,ny});`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 35: `                }`
  Explaination: Closes the current scope block.
- Line 36: `            }`
  Explaination: Closes the current scope block.
- Line 37: `        }`
  Explaination: Closes the current scope block.
- Line 38: `    }`
  Explaination: Closes the current scope block.
- Line 39: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 40: `    cout << (fresh == 0 ? mins : -1) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 41: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 42: `}`
  Explaination: Closes the current scope block.

## Block 24: Q24. Nearest Exit Distance for Each Cell (Multi-source BFS)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;

    vector<vector<int>> g(r, vector<int>(c)), dist(r, vector<int>(c, -1));
    queue<pair<int,int>> q;

    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            cin >> g[i][j];
            if (g[i][j] == 1) {
                dist[i][j] = 0;
                q.push({i,j});
            }
        }
    }

    int dr[4] = {1,-1,0,0};
    int dc[4] = {0,0,1,-1};

    while (!q.empty()) {
        auto [x,y] = q.front(); q.pop();
        for (int k = 0; k < 4; k++) {
            int nx = x + dr[k], ny = y + dc[k];
            if (nx>=0 && nx<r && ny>=0 && ny<c && g[nx][ny] != -1 && dist[nx][ny] == -1) {
                dist[nx][ny] = dist[x][y] + 1;
                q.push({nx,ny});
            }
        }
    }

    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            if (g[i][j] == -1) cout << -1 << " ";
            else cout << dist[i][j] << " ";
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
- Line 5: `    int r, c;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> r >> c;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    vector<vector<int>> g(r, vector<int>(c)), dist(r, vector<int>(c, -1));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    queue<pair<int,int>> q;`
  Explaination: Declares a queue (FIFO structure).
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    for (int i = 0; i < r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        for (int j = 0; j < c; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `            cin >> g[i][j];`
  Explaination: Reads input values from standard input into variables.
- Line 14: `            if (g[i][j] == 1) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: `                dist[i][j] = 0;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `                q.push({i,j});`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 17: `            }`
  Explaination: Closes the current scope block.
- Line 18: `        }`
  Explaination: Closes the current scope block.
- Line 19: `    }`
  Explaination: Closes the current scope block.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    int dr[4] = {1,-1,0,0};`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 22: `    int dc[4] = {0,0,1,-1};`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    while (!q.empty()) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 25: `        auto [x,y] = q.front(); q.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 26: `        for (int k = 0; k < 4; k++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 27: `            int nx = x + dr[k], ny = y + dc[k];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 28: `            if (nx>=0 && nx<r && ny>=0 && ny<c && g[nx][ny] != -1 && dist[nx][ny] == -1) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 29: `                dist[nx][ny] = dist[x][y] + 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 30: `                q.push({nx,ny});`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 31: `            }`
  Explaination: Closes the current scope block.
- Line 32: `        }`
  Explaination: Closes the current scope block.
- Line 33: `    }`
  Explaination: Closes the current scope block.
- Line 34: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 35: `    for (int i = 0; i < r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 36: `        for (int j = 0; j < c; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 37: `            if (g[i][j] == -1) cout << -1 << " ";`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 38: `            else cout << dist[i][j] << " ";`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 39: `        }`
  Explaination: Closes the current scope block.
- Line 40: `        cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 41: `    }`
  Explaination: Closes the current scope block.
- Line 42: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 43: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 44: `}`
  Explaination: Closes the current scope block.

## Block 25: Q25. Flood Fill Paint Tool

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;

    vector<vector<int>> img(r, vector<int>(c));
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++) cin >> img[i][j];

    int sr, sc, color;
    cin >> sr >> sc >> color;

    int old = img[sr][sc];
    if (old == color) {
        for (int i = 0; i < r; i++) {
            for (int j = 0; j < c; j++) cout << img[i][j] << " ";
            cout << "\n";
        }
        return 0;
    }

    queue<pair<int,int>> q;
    q.push({sr,sc});
    img[sr][sc] = color;

    int dr[4] = {1,-1,0,0};
    int dc[4] = {0,0,1,-1};

    while (!q.empty()) {
        auto [x,y] = q.front(); q.pop();
        for (int k = 0; k < 4; k++) {
            int nx = x + dr[k], ny = y + dc[k];
            if (nx>=0 && nx<r && ny>=0 && ny<c && img[nx][ny]==old) {
                img[nx][ny] = color;
                q.push({nx,ny});
            }
        }
    }

    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) cout << img[i][j] << " ";
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
- Line 5: `    int r, c;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> r >> c;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    vector<vector<int>> img(r, vector<int>(c));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (int i = 0; i < r; i++)`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        for (int j = 0; j < c; j++) cin >> img[i][j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    int sr, sc, color;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    cin >> sr >> sc >> color;`
  Explaination: Reads input values from standard input into variables.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    int old = img[sr][sc];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `    if (old == color) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `        for (int i = 0; i < r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: `            for (int j = 0; j < c; j++) cout << img[i][j] << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 19: `            cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 20: `        }`
  Explaination: Closes the current scope block.
- Line 21: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 22: `    }`
  Explaination: Closes the current scope block.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    queue<pair<int,int>> q;`
  Explaination: Declares a queue (FIFO structure).
- Line 25: `    q.push({sr,sc});`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 26: `    img[sr][sc] = color;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 27: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 28: `    int dr[4] = {1,-1,0,0};`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 29: `    int dc[4] = {0,0,1,-1};`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 30: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 31: `    while (!q.empty()) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 32: `        auto [x,y] = q.front(); q.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 33: `        for (int k = 0; k < 4; k++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 34: `            int nx = x + dr[k], ny = y + dc[k];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 35: `            if (nx>=0 && nx<r && ny>=0 && ny<c && img[nx][ny]==old) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 36: `                img[nx][ny] = color;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 37: `                q.push({nx,ny});`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 38: `            }`
  Explaination: Closes the current scope block.
- Line 39: `        }`
  Explaination: Closes the current scope block.
- Line 40: `    }`
  Explaination: Closes the current scope block.
- Line 41: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 42: `    for (int i = 0; i < r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 43: `        for (int j = 0; j < c; j++) cout << img[i][j] << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 44: `        cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 45: `    }`
  Explaination: Closes the current scope block.
- Line 46: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 47: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 48: `}`
  Explaination: Closes the current scope block.

## Block 26: Q26. Island Count (Land-Water Map)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;

    vector<string> g(r);
    for (int i = 0; i < r; i++) cin >> g[i];

    int ans = 0;
    int dr[4] = {1,-1,0,0};
    int dc[4] = {0,0,1,-1};

    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            if (g[i][j] != '1') continue;
            ans++;

            queue<pair<int,int>> q;
            q.push({i,j});
            g[i][j] = '0';

            while (!q.empty()) {
                auto [x,y] = q.front(); q.pop();
                for (int k = 0; k < 4; k++) {
                    int nx = x + dr[k], ny = y + dc[k];
                    if (nx>=0 && nx<r && ny>=0 && ny<c && g[nx][ny]=='1') {
                        g[nx][ny] = '0';
                        q.push({nx,ny});
                    }
                }
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
- Line 5: `    int r, c;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> r >> c;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    vector<string> g(r);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (int i = 0; i < r; i++) cin >> g[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    int ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    int dr[4] = {1,-1,0,0};`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    int dc[4] = {0,0,1,-1};`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    for (int i = 0; i < r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `        for (int j = 0; j < c; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 17: `            if (g[i][j] != '1') continue;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 18: `            ans++;`
  Explaination: Executes a single statement that updates program state.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `            queue<pair<int,int>> q;`
  Explaination: Declares a queue (FIFO structure).
- Line 21: `            q.push({i,j});`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 22: `            g[i][j] = '0';`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `            while (!q.empty()) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 25: `                auto [x,y] = q.front(); q.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 26: `                for (int k = 0; k < 4; k++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 27: `                    int nx = x + dr[k], ny = y + dc[k];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 28: `                    if (nx>=0 && nx<r && ny>=0 && ny<c && g[nx][ny]=='1') {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 29: `                        g[nx][ny] = '0';`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 30: `                        q.push({nx,ny});`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 31: `                    }`
  Explaination: Closes the current scope block.
- Line 32: `                }`
  Explaination: Closes the current scope block.
- Line 33: `            }`
  Explaination: Closes the current scope block.
- Line 34: `        }`
  Explaination: Closes the current scope block.
- Line 35: `    }`
  Explaination: Closes the current scope block.
- Line 36: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 37: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 38: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 39: `}`
  Explaination: Closes the current scope block.

## Block 27: Q27. Electricity Bill Slab Simulation

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    double u;
    cin >> u;

    double bill = 0;
    double rem = u;

    double take = min(rem, 100.0); bill += take * 1.5; rem -= take;
    if (rem > 0) { take = min(rem, 100.0); bill += take * 2.5; rem -= take; }
    if (rem > 0) { take = min(rem, 300.0); bill += take * 4.0; rem -= take; }
    if (rem > 0) { bill += rem * 6.0; }

    bill += 50.0;
    cout << fixed << setprecision(2) << bill << "\n";
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
- Line 5: `    double u;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> u;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    double bill = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    double rem = u;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    double take = min(rem, 100.0); bill += take * 1.5; rem -= take;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    if (rem > 0) { take = min(rem, 100.0); bill += take * 2.5; rem -= take; }`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: `    if (rem > 0) { take = min(rem, 300.0); bill += take * 4.0; rem -= take; }`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `    if (rem > 0) { bill += rem * 6.0; }`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    bill += 50.0;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `    cout << fixed << setprecision(2) << bill << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 18: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 19: `}`
  Explaination: Closes the current scope block.

## Block 28: Q28. Taxi Fare Simulation with Night Surcharge

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    double d;
    int hr;
    cin >> d >> hr;

    double fare = 0;
    if (d <= 2) fare = 50;
    else if (d <= 10) fare = 50 + (d - 2) * 12;
    else fare = 50 + 8 * 12 + (d - 10) * 10;

    bool night = (hr >= 22 || hr <= 5);
    if (night) fare *= 1.2;

    cout << fixed << setprecision(2) << fare << "\n";
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
- Line 5: `    double d;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    int hr;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    cin >> d >> hr;`
  Explaination: Reads input values from standard input into variables.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    double fare = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: `    if (d <= 2) fare = 50;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 11: `    else if (d <= 10) fare = 50 + (d - 2) * 12;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 12: `    else fare = 50 + 8 * 12 + (d - 10) * 10;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    bool night = (hr >= 22 || hr <= 5);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: `    if (night) fare *= 1.2;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    cout << fixed << setprecision(2) << fare << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 18: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 19: `}`
  Explaination: Closes the current scope block.

## Block 29: Q29. Monthly Savings with Interest + Deposit

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    double p, d, rate;
    int m;
    cin >> p >> d >> rate >> m;

    for (int i = 0; i < m; i++) {
        p += d;
        p += p * (rate / 100.0);
    }

    cout << fixed << setprecision(2) << p << "\n";
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
- Line 5: `    double p, d, rate;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    int m;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    cin >> p >> d >> rate >> m;`
  Explaination: Reads input values from standard input into variables.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    for (int i = 0; i < m; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        p += d;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 11: `        p += p * (rate / 100.0);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: `    }`
  Explaination: Closes the current scope block.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    cout << fixed << setprecision(2) << p << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 15: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 16: `}`
  Explaination: Closes the current scope block.

## Block 30: Q30. Inventory Reorder Simulation with Lead Time

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Order { int arriveDay; int qty; };

int main() {
    int n, s, t, q, l;
    cin >> n >> s >> t >> q >> l;
    vector<int> d(n);
    for (auto &x : d) cin >> x;

    queue<Order> pending;
    long long lost = 0;

    for (int day = 0; day < n; day++) {
        while (!pending.empty() && pending.front().arriveDay == day) {
            s += pending.front().qty;
            pending.pop();
        }

        int served = min(s, d[day]);
        s -= served;
        lost += (d[day] - served);

        if (s <= t && pending.empty()) {
            pending.push({day + l + 1, q});
        }
    }

    while (!pending.empty() && pending.front().arriveDay <= n) {
        s += pending.front().qty;
        pending.pop();
    }

    cout << lost << " " << s << "\n";
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
- Line 4: `struct Order { int arriveDay; int qty; };`
  Explaination: Executes a single statement that updates program state.
- Line 5: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 6: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 7: `    int n, s, t, q, l;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 8: `    cin >> n >> s >> t >> q >> l;`
  Explaination: Reads input values from standard input into variables.
- Line 9: `    vector<int> d(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 10: `    for (auto &x : d) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    queue<Order> pending;`
  Explaination: Declares a queue (FIFO structure).
- Line 13: `    long long lost = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    for (int day = 0; day < n; day++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `        while (!pending.empty() && pending.front().arriveDay == day) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 17: `            s += pending.front().qty;`
  Explaination: Accesses the front element of a queue/deque.
- Line 18: `            pending.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 19: `        }`
  Explaination: Closes the current scope block.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `        int served = min(s, d[day]);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 22: `        s -= served;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: `        lost += (d[day] - served);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `        if (s <= t && pending.empty()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 26: `            pending.push({day + l + 1, q});`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 27: `        }`
  Explaination: Closes the current scope block.
- Line 28: `    }`
  Explaination: Closes the current scope block.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    while (!pending.empty() && pending.front().arriveDay <= n) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 31: `        s += pending.front().qty;`
  Explaination: Accesses the front element of a queue/deque.
- Line 32: `        pending.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 33: `    }`
  Explaination: Closes the current scope block.
- Line 34: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 35: `    cout << lost << " " << s << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 36: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 37: `}`
  Explaination: Closes the current scope block.

## Block 31: Q31. Minimum Train Platforms Required

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> arr(n), dep(n);
    for (auto &x : arr) cin >> x;
    for (auto &x : dep) cin >> x;

    sort(arr.begin(), arr.end());
    sort(dep.begin(), dep.end());

    int i = 0, j = 0;
    int cur = 0, ans = 0;

    while (i < n && j < n) {
        if (arr[i] <= dep[j]) {
            cur++;
            ans = max(ans, cur);
            i++;
        } else {
            cur--;
            j++;
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
- Line 6: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<int> arr(n), dep(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &x : arr) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: `    for (auto &x : dep) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    sort(arr.begin(), arr.end());`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 12: `    sort(dep.begin(), dep.end());`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    int i = 0, j = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: `    int cur = 0, ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    while (i < n && j < n) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 18: `        if (arr[i] <= dep[j]) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 19: `            cur++;`
  Explaination: Executes a single statement that updates program state.
- Line 20: `            ans = max(ans, cur);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: `            i++;`
  Explaination: Executes a single statement that updates program state.
- Line 22: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 23: `            cur--;`
  Explaination: Executes a single statement that updates program state.
- Line 24: `            j++;`
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

## Block 32: Q32. CPU Task Scheduler with Cooldown

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string tasks;
    int n;
    cin >> tasks >> n;

    vector<int> f(26, 0);
    for (char c : tasks) f[c - 'A']++;

    int mx = *max_element(f.begin(), f.end());
    int cntMx = 0;
    for (int x : f) if (x == mx) cntMx++;

    int part = (mx - 1) * (n + 1) + cntMx;
    cout << max((int)tasks.size(), part) << "\n";
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
- Line 5: `    string tasks;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 6: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    cin >> tasks >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    vector<int> f(26, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 10: `    for (char c : tasks) f[c - 'A']++;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    int mx = *max_element(f.begin(), f.end());`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    int cntMx = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `    for (int x : f) if (x == mx) cntMx++;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    int part = (mx - 1) * (n + 1) + cntMx;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: `    cout << max((int)tasks.size(), part) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 18: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 19: `}`
  Explaination: Closes the current scope block.
