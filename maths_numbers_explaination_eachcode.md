# TCS_NQT_Maths_Numbers_Full_Questions_Answers_CPP.md: Line-by-Line Code Explaination

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
- Line 3: `using ll = long long;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 4: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 5: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 6: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 7: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 8: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 9: `}`
  Explaination: Closes the current scope block.

## Block 2: Q1. Count Digits of a Number

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n;
    cin >> n;

    n = llabs(n);
    if (n == 0) {
        cout << 1 << "\n";
        return 0;
    }

    int cnt = 0;
    while (n > 0) {
        cnt++;
        n /= 10;
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
- Line 5: `    long long n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    n = llabs(n);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 9: `    if (n == 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 10: `        cout << 1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 11: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 12: `    }`
  Explaination: Closes the current scope block.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    int cnt = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: `    while (n > 0) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 16: `        cnt++;`
  Explaination: Executes a single statement that updates program state.
- Line 17: `        n /= 10;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    cout << cnt << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 21: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 22: `}`
  Explaination: Closes the current scope block.

## Block 3: Q2. Sum of Digits

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n;
    cin >> n;

    n = llabs(n);
    long long sum = 0;

    while (n > 0) {
        sum += n % 10;
        n /= 10;
    }

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
- Line 5: `    long long n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    n = llabs(n);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 9: `    long long sum = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    while (n > 0) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 12: `        sum += n % 10;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 13: `        n /= 10;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: `    }`
  Explaination: Closes the current scope block.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    cout << sum << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 17: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 18: `}`
  Explaination: Closes the current scope block.

## Block 4: Q3. Reverse a Number

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n;
    cin >> n;

    bool neg = (n < 0);
    n = llabs(n);

    long long rev = 0;
    while (n > 0) {
        rev = rev * 10 + (n % 10);
        n /= 10;
    }

    if (neg) rev = -rev;
    cout << rev << "\n";
    return 0;
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
- Line 8: `    bool neg = (n < 0);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    n = llabs(n);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    long long rev = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    while (n > 0) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 13: `        rev = rev * 10 + (n % 10);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: `        n /= 10;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    if (neg) rev = -rev;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 18: `    cout << rev << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 19: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 20: `}`
  Explaination: Closes the current scope block.

## Block 5: Q4. Check Palindrome Number

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

long long reverseNum(long long n) {
    long long rev = 0;
    while (n > 0) {
        rev = rev * 10 + (n % 10);
        n /= 10;
    }
    return rev;
}

int main() {
    long long n;
    cin >> n;

    if (n < 0) {
        cout << "No\n";
        return 0;
    }

    cout << (n == reverseNum(n) ? "Yes" : "No") << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `long long reverseNum(long long n) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    long long rev = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    while (n > 0) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 7: `        rev = rev * 10 + (n % 10);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 8: `        n /= 10;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 9: `    }`
  Explaination: Closes the current scope block.
- Line 10: `    return rev;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 11: `}`
  Explaination: Closes the current scope block.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 14: `    long long n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    if (n < 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 18: `        cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 19: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    cout << (n == reverseNum(n) ? "Yes" : "No") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 23: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 24: `}`
  Explaination: Closes the current scope block.

## Block 6: Q5. Maximum and Minimum Digit in a Number

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n;
    cin >> n;
    n = llabs(n);

    if (n == 0) {
        cout << 0 << " " << 0 << "\n";
        return 0;
    }

    int mn = 9, mx = 0;
    while (n > 0) {
        int d = (int)(n % 10);
        mn = min(mn, d);
        mx = max(mx, d);
        n /= 10;
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
- Line 5: `    long long n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    n = llabs(n);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    if (n == 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 10: `        cout << 0 << " " << 0 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 11: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 12: `    }`
  Explaination: Closes the current scope block.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    int mn = 9, mx = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: `    while (n > 0) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 16: `        int d = (int)(n % 10);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: `        mn = min(mn, d);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: `        mx = max(mx, d);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `        n /= 10;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    cout << mn << " " << mx << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 23: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 24: `}`
  Explaination: Closes the current scope block.

## Block 7: Q6. Check Armstrong Number

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n;
    cin >> n;

    if (n < 0) {
        cout << "No\n";
        return 0;
    }

    string s = to_string(n);
    int p = (int)s.size();

    long long temp = n, sum = 0;
    while (temp > 0) {
        int d = temp % 10;
        long long val = 1;
        for (int i = 0; i < p; i++) val *= d;
        sum += val;
        temp /= 10;
    }

    if (n == 0) sum = 0;

    cout << (sum == n ? "Yes" : "No") << "\n";
    return 0;
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
- Line 8: `    if (n < 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 9: `        cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 10: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 11: `    }`
  Explaination: Closes the current scope block.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    string s = to_string(n);`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 14: `    int p = (int)s.size();`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    long long temp = n, sum = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: `    while (temp > 0) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 18: `        int d = temp % 10;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `        long long val = 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 20: `        for (int i = 0; i < p; i++) val *= d;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 21: `        sum += val;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: `        temp /= 10;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: `    }`
  Explaination: Closes the current scope block.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    if (n == 0) sum = 0;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `    cout << (sum == n ? "Yes" : "No") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 28: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 29: `}`
  Explaination: Closes the current scope block.

## Block 8: Q7. Check Perfect Number

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n;
    cin >> n;

    if (n <= 1) {
        cout << "No\n";
        return 0;
    }

    long long sum = 1;
    for (long long i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            sum += i;
            if (i != n / i) sum += n / i;
        }
    }

    cout << (sum == n ? "Yes" : "No") << "\n";
    return 0;
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
- Line 8: `    if (n <= 1) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 9: `        cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 10: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 11: `    }`
  Explaination: Closes the current scope block.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    long long sum = 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `    for (long long i = 2; i * i <= n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        if (n % i == 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `            sum += i;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `            if (i != n / i) sum += n / i;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 18: `        }`
  Explaination: Closes the current scope block.
- Line 19: `    }`
  Explaination: Closes the current scope block.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    cout << (sum == n ? "Yes" : "No") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 22: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 23: `}`
  Explaination: Closes the current scope block.

## Block 9: Q8. Check Strong Number

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

long long factDigit(int d) {
    static long long f[10] = {1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880};
    return f[d];
}

int main() {
    long long n;
    cin >> n;

    if (n < 0) {
        cout << "No\n";
        return 0;
    }

    long long temp = n, sum = 0;
    if (temp == 0) sum = 1;

    while (temp > 0) {
        int d = temp % 10;
        sum += factDigit(d);
        temp /= 10;
    }

    cout << (sum == n ? "Yes" : "No") << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `long long factDigit(int d) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    static long long f[10] = {1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880};`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 6: `    return f[d];`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 7: `}`
  Explaination: Closes the current scope block.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 10: `    long long n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    if (n < 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `        cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 15: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    long long temp = n, sum = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `    if (temp == 0) sum = 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    while (temp > 0) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 22: `        int d = temp % 10;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 23: `        sum += factDigit(d);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 24: `        temp /= 10;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 25: `    }`
  Explaination: Closes the current scope block.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `    cout << (sum == n ? "Yes" : "No") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 28: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 29: `}`
  Explaination: Closes the current scope block.

## Block 10: Q9. Check Prime Number

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

bool isPrime(long long n) {
    if (n < 2) return false;
    if (n % 2 == 0) return n == 2;
    for (long long i = 3; i * i <= n; i += 2) {
        if (n % i == 0) return false;
    }
    return true;
}

int main() {
    long long n;
    cin >> n;
    cout << (isPrime(n) ? "Yes" : "No") << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `bool isPrime(long long n) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    if (n < 2) return false;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    if (n % 2 == 0) return n == 2;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 7: `    for (long long i = 3; i * i <= n; i += 2) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 8: `        if (n % i == 0) return false;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 9: `    }`
  Explaination: Closes the current scope block.
- Line 10: `    return true;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 11: `}`
  Explaination: Closes the current scope block.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 14: `    long long n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 16: `    cout << (isPrime(n) ? "Yes" : "No") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 17: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 18: `}`
  Explaination: Closes the current scope block.

## Block 11: Q10. Print All Primes in Range [L, R]

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int L, R;
    cin >> L >> R;

    if (R < 2 || L > R) {
        cout << -1 << "\n";
        return 0;
    }

    vector<bool> prime(R + 1, true);
    prime[0] = false;
    if (R >= 1) prime[1] = false;

    for (int p = 2; 1LL * p * p <= R; p++) {
        if (prime[p]) {
            for (int x = p * p; x <= R; x += p) prime[x] = false;
        }
    }

    bool found = false;
    for (int x = max(2, L); x <= R; x++) {
        if (prime[x]) {
            found = true;
            cout << x << " ";
        }
    }

    if (!found) cout << -1;
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
- Line 5: `    int L, R;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> L >> R;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    if (R < 2 || L > R) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 9: `        cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 10: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 11: `    }`
  Explaination: Closes the current scope block.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    vector<bool> prime(R + 1, true);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 14: `    prime[0] = false;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `    if (R >= 1) prime[1] = false;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    for (int p = 2; 1LL * p * p <= R; p++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: `        if (prime[p]) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 19: `            for (int x = p * p; x <= R; x += p) prime[x] = false;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 20: `        }`
  Explaination: Closes the current scope block.
- Line 21: `    }`
  Explaination: Closes the current scope block.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    bool found = false;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 24: `    for (int x = max(2, L); x <= R; x++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 25: `        if (prime[x]) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 26: `            found = true;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 27: `            cout << x << " ";`
  Explaination: Prints formatted output to standard output.
- Line 28: `        }`
  Explaination: Closes the current scope block.
- Line 29: `    }`
  Explaination: Closes the current scope block.
- Line 30: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 31: `    if (!found) cout << -1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 32: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 33: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 34: `}`
  Explaination: Closes the current scope block.

## Block 12: Q11. Prime Factorization

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n;
    cin >> n;

    if (n <= 1) {
        cout << -1 << "\n";
        return 0;
    }

    for (long long p = 2; p * p <= n; p++) {
        while (n % p == 0) {
            cout << p << " ";
            n /= p;
        }
    }

    if (n > 1) cout << n;
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
- Line 5: `    long long n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    if (n <= 1) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 9: `        cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 10: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 11: `    }`
  Explaination: Closes the current scope block.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    for (long long p = 2; p * p <= n; p++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        while (n % p == 0) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 15: `            cout << p << " ";`
  Explaination: Prints formatted output to standard output.
- Line 16: `            n /= p;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `        }`
  Explaination: Closes the current scope block.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    if (n > 1) cout << n;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 22: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 23: `}`
  Explaination: Closes the current scope block.

## Block 13: Q12. Count Number of Divisors

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n;
    cin >> n;

    if (n <= 0) {
        cout << 0 << "\n";
        return 0;
    }

    long long cnt = 0;
    for (long long i = 1; i * i <= n; i++) {
        if (n % i == 0) {
            cnt += (i == n / i ? 1 : 2);
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
- Line 5: `    long long n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    if (n <= 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 9: `        cout << 0 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 10: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 11: `    }`
  Explaination: Closes the current scope block.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    long long cnt = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `    for (long long i = 1; i * i <= n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        if (n % i == 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `            cnt += (i == n / i ? 1 : 2);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `        }`
  Explaination: Closes the current scope block.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    cout << cnt << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 21: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 22: `}`
  Explaination: Closes the current scope block.

## Block 14: Q13. Sum of Divisors

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n;
    cin >> n;

    if (n <= 0) {
        cout << 0 << "\n";
        return 0;
    }

    long long sum = 0;
    for (long long i = 1; i * i <= n; i++) {
        if (n % i == 0) {
            sum += i;
            if (i != n / i) sum += n / i;
        }
    }

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
- Line 5: `    long long n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    if (n <= 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 9: `        cout << 0 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 10: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 11: `    }`
  Explaination: Closes the current scope block.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    long long sum = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `    for (long long i = 1; i * i <= n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        if (n % i == 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `            sum += i;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `            if (i != n / i) sum += n / i;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 18: `        }`
  Explaination: Closes the current scope block.
- Line 19: `    }`
  Explaination: Closes the current scope block.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    cout << sum << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 22: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 23: `}`
  Explaination: Closes the current scope block.

## Block 15: Q14. Check if Number is Sum of Two Primes

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    if (n < 4) {
        cout << "No\n";
        return 0;
    }

    vector<bool> prime(n + 1, true);
    prime[0] = prime[1] = false;
    for (int p = 2; 1LL * p * p <= n; p++) {
        if (prime[p]) {
            for (int x = p * p; x <= n; x += p) prime[x] = false;
        }
    }

    for (int p = 2; p <= n; p++) {
        if (prime[p] && prime[n - p]) {
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
- Line 5: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    if (n < 4) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 9: `        cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 10: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 11: `    }`
  Explaination: Closes the current scope block.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    vector<bool> prime(n + 1, true);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 14: `    prime[0] = prime[1] = false;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `    for (int p = 2; 1LL * p * p <= n; p++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `        if (prime[p]) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `            for (int x = p * p; x <= n; x += p) prime[x] = false;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: `        }`
  Explaination: Closes the current scope block.
- Line 19: `    }`
  Explaination: Closes the current scope block.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    for (int p = 2; p <= n; p++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 22: `        if (prime[p] && prime[n - p]) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 23: `            cout << "Yes\n";`
  Explaination: Prints formatted output to standard output.
- Line 24: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 25: `        }`
  Explaination: Closes the current scope block.
- Line 26: `    }`
  Explaination: Closes the current scope block.
- Line 27: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 28: `    cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 29: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 30: `}`
  Explaination: Closes the current scope block.

## Block 16: Q15. GCD and LCM of Two Numbers

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long a, b;
    cin >> a >> b;

    long long g = std::gcd(a, b);
    long long l = (a / g) * b;

    if (l < 0) l = -l;
    cout << llabs(g) << " " << l << "\n";
    return 0;
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
- Line 5: `    long long a, b;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> a >> b;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    long long g = std::gcd(a, b);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    long long l = (a / g) * b;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    if (l < 0) l = -l;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 12: `    cout << llabs(g) << " " << l << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 13: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 14: `}`
  Explaination: Closes the current scope block.

## Block 17: Q16. GCD of an Array

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    long long g = 0;
    for (int i = 0; i < n; i++) {
        long long x;
        cin >> x;
        g = std::gcd(g, x);
    }

    cout << llabs(g) << "\n";
    return 0;
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
- Line 8: `    long long g = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        long long x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `        cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 12: `        g = std::gcd(g, x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 13: `    }`
  Explaination: Closes the current scope block.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    cout << llabs(g) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 16: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 17: `}`
  Explaination: Closes the current scope block.

## Block 18: Q17. LCM of an Array

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

bool willOverflow(long long a, long long b) {
    if (a == 0 || b == 0) return false;
    __int128 prod = (__int128)a * (__int128)b;
    return prod > LLONG_MAX;
}

int main() {
    int n;
    cin >> n;

    long long l = 1;
    for (int i = 0; i < n; i++) {
        long long x;
        cin >> x;
        if (x == 0) {
            cout << 0 << "\n";
            return 0;
        }

        long long g = std::gcd(l, x);
        long long part = l / g;

        if (willOverflow(part, x)) {
            cout << -1 << "\n";
            return 0;
        }

        l = part * x;
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
- Line 4: `bool willOverflow(long long a, long long b) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    if (a == 0 || b == 0) return false;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    __int128 prod = (__int128)a * (__int128)b;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 7: `    return prod > LLONG_MAX;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 8: `}`
  Explaination: Closes the current scope block.
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
- Line 14: `    long long l = 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `        long long x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: `        cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 18: `        if (x == 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 19: `            cout << 0 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 20: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 21: `        }`
  Explaination: Closes the current scope block.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `        long long g = std::gcd(l, x);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 24: `        long long part = l / g;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `        if (willOverflow(part, x)) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 27: `            cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 28: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 29: `        }`
  Explaination: Closes the current scope block.
- Line 30: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 31: `        l = part * x;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 32: `    }`
  Explaination: Closes the current scope block.
- Line 33: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 34: `    cout << l << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 35: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 36: `}`
  Explaination: Closes the current scope block.

## Block 19: Q18. Modular Exponentiation (a^b mod m)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

long long modPow(long long a, long long b, long long m) {
    a %= m;
    long long res = 1 % m;

    while (b > 0) {
        if (b & 1) res = (__int128)res * a % m;
        a = (__int128)a * a % m;
        b >>= 1;
    }
    return res;
}

int main() {
    long long a, b, m;
    cin >> a >> b >> m;
    cout << modPow(a, b, m) << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `long long modPow(long long a, long long b, long long m) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    a %= m;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 6: `    long long res = 1 % m;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    while (b > 0) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 9: `        if (b & 1) res = (__int128)res * a % m;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 10: `        a = (__int128)a * a % m;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 11: `        b >>= 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: `    }`
  Explaination: Closes the current scope block.
- Line 13: `    return res;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 14: `}`
  Explaination: Closes the current scope block.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 17: `    long long a, b, m;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: `    cin >> a >> b >> m;`
  Explaination: Reads input values from standard input into variables.
- Line 19: `    cout << modPow(a, b, m) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 20: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 21: `}`
  Explaination: Closes the current scope block.

## Block 20: Q19. Decimal to Binary Conversion

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n;
    cin >> n;

    if (n == 0) {
        cout << "0\n";
        return 0;
    }

    string s;
    while (n > 0) {
        s.push_back(char('0' + (n % 2)));
        n /= 2;
    }
    reverse(s.begin(), s.end());

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
- Line 5: `    long long n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    if (n == 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 9: `        cout << "0\n";`
  Explaination: Prints formatted output to standard output.
- Line 10: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 11: `    }`
  Explaination: Closes the current scope block.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 14: `    while (n > 0) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 15: `        s.push_back(char('0' + (n % 2)));`
  Explaination: Appends a new element to the end of the container.
- Line 16: `        n /= 2;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `    }`
  Explaination: Closes the current scope block.
- Line 18: `    reverse(s.begin(), s.end());`
  Explaination: Reverses elements in the specified range.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    cout << s << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 21: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 22: `}`
  Explaination: Closes the current scope block.

## Block 21: Q20. Binary to Decimal Conversion

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin >> s;

    long long val = 0;
    for (char c : s) {
        if (c != '0' && c != '1') {
            cout << "Invalid\n";
            return 0;
        }
        val = val * 2 + (c - '0');
    }

    cout << val << "\n";
    return 0;
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
- Line 8: `    long long val = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    for (char c : s) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        if (c != '0' && c != '1') {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 11: `            cout << "Invalid\n";`
  Explaination: Prints formatted output to standard output.
- Line 12: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 13: `        }`
  Explaination: Closes the current scope block.
- Line 14: `        val = val * 2 + (c - '0');`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    cout << val << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 18: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 19: `}`
  Explaination: Closes the current scope block.

## Block 22: Q21. Check Power of Two

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n;
    cin >> n;

    bool ok = (n > 0) && ((n & (n - 1)) == 0);
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
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    long long n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    bool ok = (n > 0) && ((n & (n - 1)) == 0);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    cout << (ok ? "Yes" : "No") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 10: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 11: `}`
  Explaination: Closes the current scope block.

## Block 23: Q22. AP: Nth Term and Sum of First N Terms

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long a, d, n;
    cin >> a >> d >> n;

    long long nth = a + (n - 1) * d;
    long long sum = n * (2 * a + (n - 1) * d) / 2;

    cout << nth << " " << sum << "\n";
    return 0;
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
- Line 5: `    long long a, d, n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> a >> d >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    long long nth = a + (n - 1) * d;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    long long sum = n * (2 * a + (n - 1) * d) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    cout << nth << " " << sum << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 12: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 13: `}`
  Explaination: Closes the current scope block.

## Block 24: Q23. GP: Nth Term and Sum of First N Terms

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

long double pwr(long double base, long long exp) {
    long double res = 1.0;
    while (exp > 0) {
        if (exp & 1) res *= base;
        base *= base;
        exp >>= 1;
    }
    return res;
}

int main() {
    long double a, r;
    long long n;
    cin >> a >> r >> n;

    long double nth = a * pwr(r, n - 1);
    long double sum;

    if (fabsl(r - 1.0L) < 1e-12L) sum = a * n;
    else sum = a * (pwr(r, n) - 1.0L) / (r - 1.0L);

    cout << fixed << setprecision(6) << nth << " " << sum << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `long double pwr(long double base, long long exp) {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 5: `    long double res = 1.0;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 6: `    while (exp > 0) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 7: `        if (exp & 1) res *= base;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 8: `        base *= base;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 9: `        exp >>= 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 10: `    }`
  Explaination: Closes the current scope block.
- Line 11: `    return res;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 12: `}`
  Explaination: Closes the current scope block.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 15: `    long double a, r;`
  Explaination: Executes a single statement that updates program state.
- Line 16: `    long long n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: `    cin >> a >> r >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    long double nth = a * pwr(r, n - 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `    long double sum;`
  Explaination: Executes a single statement that updates program state.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    if (fabsl(r - 1.0L) < 1e-12L) sum = a * n;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 23: `    else sum = a * (pwr(r, n) - 1.0L) / (r - 1.0L);`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    cout << fixed << setprecision(6) << nth << " " << sum << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 26: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 27: `}`
  Explaination: Closes the current scope block.

## Block 25: Q24. Fibonacci Nth Term (Iterative)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    if (n == 0) {
        cout << 0 << "\n";
        return 0;
    }
    if (n == 1) {
        cout << 1 << "\n";
        return 0;
    }

    long long a = 0, b = 1;
    for (int i = 2; i <= n; i++) {
        long long c = a + b;
        a = b;
        b = c;
    }

    cout << b << "\n";
    return 0;
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
- Line 8: `    if (n == 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 9: `        cout << 0 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 10: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 11: `    }`
  Explaination: Closes the current scope block.
- Line 12: `    if (n == 1) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: `        cout << 1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 14: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    long long a = 0, b = 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: `    for (int i = 2; i <= n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 19: `        long long c = a + b;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 20: `        a = b;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: `        b = c;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: `    }`
  Explaination: Closes the current scope block.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    cout << b << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 25: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 26: `}`
  Explaination: Closes the current scope block.

## Block 26: Q25. Fibonacci Nth Term Mod 1e9+7 (Fast Doubling)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

const long long MOD = 1000000007LL;

pair<long long, long long> fib(long long n) {
    if (n == 0) return {0, 1};

    auto p = fib(n >> 1);
    long long a = p.first;
    long long b = p.second;

    long long c = (a * ((2 * b % MOD - a + MOD) % MOD)) % MOD;
    long long d = (a * a % MOD + b * b % MOD) % MOD;

    if (n & 1) return {d, (c + d) % MOD};
    return {c, d};
}

int main() {
    long long n;
    cin >> n;
    cout << fib(n).first << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `const long long MOD = 1000000007LL;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 5: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 6: `pair<long long, long long> fib(long long n) {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 7: `    if (n == 0) return {0, 1};`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    auto p = fib(n >> 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 10: `    long long a = p.first;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    long long b = p.second;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    long long c = (a * ((2 * b % MOD - a + MOD) % MOD)) % MOD;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `    long long d = (a * a % MOD + b * b % MOD) % MOD;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    if (n & 1) return {d, (c + d) % MOD};`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `    return {c, d};`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 18: `}`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 21: `    long long n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 22: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 23: `    cout << fib(n).first << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 24: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 25: `}`
  Explaination: Closes the current scope block.

## Block 27: Q26. Factorial of Large Number

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> digits;
    digits.push_back(1); // stores number in reverse

    for (int x = 2; x <= n; x++) {
        int carry = 0;
        for (int i = 0; i < (int)digits.size(); i++) {
            long long cur = 1LL * digits[i] * x + carry;
            digits[i] = cur % 10;
            carry = cur / 10;
        }
        while (carry > 0) {
            digits.push_back(carry % 10);
            carry /= 10;
        }
    }

    for (int i = (int)digits.size() - 1; i >= 0; i--) cout << digits[i];
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
- Line 8: `    vector<int> digits;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    digits.push_back(1); // stores number in reverse`
  Explaination: Appends a new element to the end of the container.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    for (int x = 2; x <= n; x++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        int carry = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `        for (int i = 0; i < (int)digits.size(); i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `            long long cur = 1LL * digits[i] * x + carry;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: `            digits[i] = cur % 10;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `            carry = cur / 10;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `        }`
  Explaination: Closes the current scope block.
- Line 18: `        while (carry > 0) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 19: `            digits.push_back(carry % 10);`
  Explaination: Appends a new element to the end of the container.
- Line 20: `            carry /= 10;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: `        }`
  Explaination: Closes the current scope block.
- Line 22: `    }`
  Explaination: Closes the current scope block.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    for (int i = (int)digits.size() - 1; i >= 0; i--) cout << digits[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 25: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 26: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 27: `}`
  Explaination: Closes the current scope block.

## Block 28: Q27. Trailing Zeros in Factorial

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n;
    cin >> n;

    long long ans = 0;
    for (long long p = 5; p <= n; p *= 5) {
        ans += n / p;
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
- Line 8: `    long long ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    for (long long p = 5; p <= n; p *= 5) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        ans += n / p;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 11: `    }`
  Explaination: Closes the current scope block.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 14: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 15: `}`
  Explaination: Closes the current scope block.

## Block 29: Q28. Compute nCr mod 1e9+7

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

const long long MOD = 1000000007LL;

long long modPow(long long a, long long b) {
    long long res = 1;
    a %= MOD;
    while (b > 0) {
        if (b & 1) res = (__int128)res * a % MOD;
        a = (__int128)a * a % MOD;
        b >>= 1;
    }
    return res;
}

int main() {
    int n, r;
    cin >> n >> r;

    if (r < 0 || r > n) {
        cout << 0 << "\n";
        return 0;
    }

    vector<long long> fact(n + 1), invFact(n + 1);
    fact[0] = 1;
    for (int i = 1; i <= n; i++) fact[i] = fact[i - 1] * i % MOD;

    invFact[n] = modPow(fact[n], MOD - 2);
    for (int i = n; i >= 1; i--) invFact[i - 1] = invFact[i] * i % MOD;

    long long ans = fact[n] * invFact[r] % MOD * invFact[n - r] % MOD;
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
- Line 4: `const long long MOD = 1000000007LL;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 5: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 6: `long long modPow(long long a, long long b) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    long long res = 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 8: `    a %= MOD;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 9: `    while (b > 0) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 10: `        if (b & 1) res = (__int128)res * a % MOD;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 11: `        a = (__int128)a * a % MOD;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: `        b >>= 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 13: `    }`
  Explaination: Closes the current scope block.
- Line 14: `    return res;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 15: `}`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 18: `    int n, r;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `    cin >> n >> r;`
  Explaination: Reads input values from standard input into variables.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    if (r < 0 || r > n) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 22: `        cout << 0 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 23: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 24: `    }`
  Explaination: Closes the current scope block.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    vector<long long> fact(n + 1), invFact(n + 1);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 27: `    fact[0] = 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 28: `    for (int i = 1; i <= n; i++) fact[i] = fact[i - 1] * i % MOD;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    invFact[n] = modPow(fact[n], MOD - 2);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 31: `    for (int i = n; i >= 1; i--) invFact[i - 1] = invFact[i] * i % MOD;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 32: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 33: `    long long ans = fact[n] * invFact[r] % MOD * invFact[n - r] % MOD;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 34: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 35: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 36: `}`
  Explaination: Closes the current scope block.

## Block 30: Q29. Story-Based: Count Product Codes with No Repeated Digits in [L, R]

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
    long long L, R;
    cin >> L >> R;

    long long ans = 0;
    for (long long x = L; x <= R; x++) {
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
- Line 17: `    long long L, R;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: `    cin >> L >> R;`
  Explaination: Reads input values from standard input into variables.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    long long ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: `    for (long long x = L; x <= R; x++) {`
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

## Block 31: Q30. Floor Square Root

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n;
    cin >> n;

    long long lo = 0, hi = n, ans = 0;
    while (lo <= hi) {
        long long mid = lo + (hi - lo) / 2;

        if (mid <= n / max(1LL, mid)) {
            ans = mid;
            lo = mid + 1;
        } else {
            hi = mid - 1;
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
- Line 5: `    long long n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    long long lo = 0, hi = n, ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    while (lo <= hi) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 10: `        long long mid = lo + (hi - lo) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `        if (mid <= n / max(1LL, mid)) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: `            ans = mid;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: `            lo = mid + 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 16: `            hi = mid - 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `        }`
  Explaination: Closes the current scope block.
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

## Block 32: Q31. Count Numbers Divisible by A or B in [L, R]

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

long long countUpTo(long long x, long long a, long long b) {
    if (x <= 0) return 0;
    long long l = std::lcm(a, b);
    return x / a + x / b - x / l;
}

int main() {
    long long L, R, A, B;
    cin >> L >> R >> A >> B;

    long long ans = countUpTo(R, A, B) - countUpTo(L - 1, A, B);
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
- Line 4: `long long countUpTo(long long x, long long a, long long b) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    if (x <= 0) return 0;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    long long l = std::lcm(a, b);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    return x / a + x / b - x / l;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 8: `}`
  Explaination: Closes the current scope block.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 11: `    long long L, R, A, B;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    cin >> L >> R >> A >> B;`
  Explaination: Reads input values from standard input into variables.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    long long ans = countUpTo(R, A, B) - countUpTo(L - 1, A, B);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 16: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 17: `}`
  Explaination: Closes the current scope block.

## Block 33: Q32. Digital Root (Single Digit Sum)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n;
    cin >> n;

    if (n == 0) {
        cout << 0 << "\n";
        return 0;
    }

    cout << (1 + (n - 1) % 9) << "\n";
    return 0;
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
- Line 8: `    if (n == 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 9: `        cout << 0 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 10: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 11: `    }`
  Explaination: Closes the current scope block.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    cout << (1 + (n - 1) % 9) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 14: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 15: `}`
  Explaination: Closes the current scope block.

## Block 34: Q33. Check Leap Year

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

bool isLeap(int y) {
    return (y % 400 == 0) || (y % 4 == 0 && y % 100 != 0);
}

int main() {
    int y;
    cin >> y;
    cout << (isLeap(y) ? "Yes" : "No") << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `bool isLeap(int y) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    return (y % 400 == 0) || (y % 4 == 0 && y % 100 != 0);`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 6: `}`
  Explaination: Closes the current scope block.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 9: `    int y;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: `    cin >> y;`
  Explaination: Reads input values from standard input into variables.
- Line 11: `    cout << (isLeap(y) ? "Yes" : "No") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 12: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 13: `}`
  Explaination: Closes the current scope block.

## Block 35: Q34. Days in a Month

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

bool isLeap(int y) {
    return (y % 400 == 0) || (y % 4 == 0 && y % 100 != 0);
}

int main() {
    int m, y;
    cin >> m >> y;

    vector<int> d = {0,31,28,31,30,31,30,31,31,30,31,30,31};
    if (m == 2 && isLeap(y)) cout << 29 << "\n";
    else if (m >= 1 && m <= 12) cout << d[m] << "\n";
    else cout << "Invalid\n";

    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `bool isLeap(int y) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    return (y % 400 == 0) || (y % 4 == 0 && y % 100 != 0);`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 6: `}`
  Explaination: Closes the current scope block.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 9: `    int m, y;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: `    cin >> m >> y;`
  Explaination: Reads input values from standard input into variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    vector<int> d = {0,31,28,31,30,31,30,31,31,30,31,30,31};`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 13: `    if (m == 2 && isLeap(y)) cout << 29 << "\n";`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `    else if (m >= 1 && m <= 12) cout << d[m] << "\n";`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: `    else cout << "Invalid\n";`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 18: `}`
  Explaination: Closes the current scope block.

## Block 36: Q35. Euler Totient Function phi(N)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n;
    cin >> n;

    long long result = n;
    long long x = n;

    for (long long p = 2; p * p <= x; p++) {
        if (x % p == 0) {
            while (x % p == 0) x /= p;
            result -= result / p;
        }
    }

    if (x > 1) result -= result / x;

    cout << result << "\n";
    return 0;
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
- Line 8: `    long long result = n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    long long x = n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    for (long long p = 2; p * p <= x; p++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        if (x % p == 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: `            while (x % p == 0) x /= p;`
  Explaination: Loop that repeats while the given condition remains true.
- Line 14: `            result -= result / p;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `        }`
  Explaination: Closes the current scope block.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    if (x > 1) result -= result / x;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    cout << result << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 21: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 22: `}`
  Explaination: Closes the current scope block.

## Block 37: Q36. Number of Digits in N! (Without Computing N!)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    if (n <= 1) {
        cout << 1 << "\n";
        return 0;
    }

    long double sum = 0.0;
    for (int i = 2; i <= n; i++) sum += log10((long double)i);

    cout << (long long)floor(sum) + 1 << "\n";
    return 0;
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
- Line 8: `    if (n <= 1) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 9: `        cout << 1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 10: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 11: `    }`
  Explaination: Closes the current scope block.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    long double sum = 0.0;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: `    for (int i = 2; i <= n; i++) sum += log10((long double)i);`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    cout << (long long)floor(sum) + 1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 17: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 18: `}`
  Explaination: Closes the current scope block.

## Block 38: Q37. Check Happy Number

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

long long nextVal(long long n) {
    long long s = 0;
    while (n > 0) {
        long long d = n % 10;
        s += d * d;
        n /= 10;
    }
    return s;
}

int main() {
    long long n;
    cin >> n;

    unordered_set<long long> seen;

    while (n != 1 && !seen.count(n)) {
        seen.insert(n);
        n = nextVal(n);
    }

    cout << (n == 1 ? "Yes" : "No") << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `long long nextVal(long long n) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    long long s = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    while (n > 0) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 7: `        long long d = n % 10;`
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
- Line 15: `    long long n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    unordered_set<long long> seen;`
  Explaination: Declares a hash set for fast membership checks.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    while (n != 1 && !seen.count(n)) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 21: `        seen.insert(n);`
  Explaination: Inserts element(s) at a specified position in a container.
- Line 22: `        n = nextVal(n);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: `    }`
  Explaination: Closes the current scope block.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    cout << (n == 1 ? "Yes" : "No") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 26: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 27: `}`
  Explaination: Closes the current scope block.

## Block 39: Q38. Check Automorphic Number

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int digitsCount(long long n) {
    if (n == 0) return 1;
    int d = 0;
    while (n > 0) {
        d++;
        n /= 10;
    }
    return d;
}

int main() {
    long long n;
    cin >> n;

    if (n < 0) {
        cout << "No\n";
        return 0;
    }

    long long sq = n * n;
    int d = digitsCount(n);

    long long mod = 1;
    for (int i = 0; i < d; i++) mod *= 10;

    cout << ((sq % mod) == n ? "Yes" : "No") << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int digitsCount(long long n) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    if (n == 0) return 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    int d = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    while (n > 0) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 8: `        d++;`
  Explaination: Executes a single statement that updates program state.
- Line 9: `        n /= 10;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 10: `    }`
  Explaination: Closes the current scope block.
- Line 11: `    return d;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 12: `}`
  Explaination: Closes the current scope block.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 15: `    long long n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    if (n < 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 19: `        cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 20: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 21: `    }`
  Explaination: Closes the current scope block.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    long long sq = n * n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 24: `    int d = digitsCount(n);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    long long mod = 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 27: `    for (int i = 0; i < d; i++) mod *= 10;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 28: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 29: `    cout << ((sq % mod) == n ? "Yes" : "No") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 30: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 31: `}`
  Explaination: Closes the current scope block.

## Block 40: Q39. Story-Based: Minimum Time Slot that Fits Cyclic Schedule (LCM use)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long a, b;
    cin >> a >> b;

    long long g = std::gcd(a, b);
    long long l = (a / g) * b;

    if (l < 0) l = -l;
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
- Line 5: `    long long a, b;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> a >> b;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    long long g = std::gcd(a, b);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    long long l = (a / g) * b;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    if (l < 0) l = -l;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 12: `    cout << l << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 13: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 14: `}`
  Explaination: Closes the current scope block.

## Block 41: Q40. Story-Based: Odd-Even Vehicle Rule

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, d;
    cin >> n >> d;

    int needParity = d % 2;
    int ans = 0;

    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        if ((x % 2 + 2) % 2 == needParity) ans++;
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
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    int needParity = d % 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    int ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        int x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `        cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 14: `        if ((x % 2 + 2) % 2 == needParity) ans++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
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
