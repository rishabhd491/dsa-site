# TCS_NQT_Recursion_Full_Questions_Answers_CPP.md: Line-by-Line Code Explaination

This file explains each C++ code block line-by-line from the source topic file.

## Block 1: Q1. Print Numbers from 1 to N

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

void print1toN(int cur, int n) {
    if (cur > n) return;
    cout << cur << " ";
    print1toN(cur + 1, n);
}

int main() {
    int n;
    cin >> n;
    print1toN(1, n);
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
- Line 4: `void print1toN(int cur, int n) {`
  Explaination: Function declaration/definition header specifying return type, name, and parameters.
- Line 5: `    if (cur > n) return;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    cout << cur << " ";`
  Explaination: Prints formatted output to standard output.
- Line 7: `    print1toN(cur + 1, n);`
  Explaination: Executes a single statement that updates program state.
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
- Line 13: `    print1toN(1, n);`
  Explaination: Executes a single statement that updates program state.
- Line 14: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 15: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 16: `}`
  Explaination: Closes the current scope block.

## Block 2: Q2. Print Numbers from N to 1

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

void printNto1(int n) {
    if (n == 0) return;
    cout << n << " ";
    printNto1(n - 1);
}

int main() {
    int n;
    cin >> n;
    printNto1(n);
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
- Line 4: `void printNto1(int n) {`
  Explaination: Function declaration/definition header specifying return type, name, and parameters.
- Line 5: `    if (n == 0) return;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    cout << n << " ";`
  Explaination: Prints formatted output to standard output.
- Line 7: `    printNto1(n - 1);`
  Explaination: Executes a single statement that updates program state.
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
- Line 13: `    printNto1(n);`
  Explaination: Executes a single statement that updates program state.
- Line 14: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 15: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 16: `}`
  Explaination: Closes the current scope block.

## Block 3: Q3. Sum of First N Natural Numbers

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

long long sumN(long long n) {
    if (n <= 0) return 0;
    return n + sumN(n - 1);
}

int main() {
    long long n;
    cin >> n;
    cout << sumN(n) << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `long long sumN(long long n) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    if (n <= 0) return 0;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    return n + sumN(n - 1);`
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
- Line 12: `    cout << sumN(n) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 13: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 14: `}`
  Explaination: Closes the current scope block.

## Block 4: Q4. Factorial of N

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

long long fact(long long n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
}

int main() {
    long long n;
    cin >> n;
    cout << fact(n) << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `long long fact(long long n) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    if (n <= 1) return 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    return n * fact(n - 1);`
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
- Line 12: `    cout << fact(n) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 13: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 14: `}`
  Explaination: Closes the current scope block.

## Block 5: Q5. Fast Power (a^b)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

long long fastPow(long long a, long long b) {
    if (b == 0) return 1;
    long long half = fastPow(a, b / 2);
    long long ans = half * half;
    if (b % 2) ans *= a;
    return ans;
}

int main() {
    long long a, b;
    cin >> a >> b;
    cout << fastPow(a, b) << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `long long fastPow(long long a, long long b) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    if (b == 0) return 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    long long half = fastPow(a, b / 2);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    long long ans = half * half;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 8: `    if (b % 2) ans *= a;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 9: `    return ans;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 10: `}`
  Explaination: Closes the current scope block.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 13: `    long long a, b;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `    cin >> a >> b;`
  Explaination: Reads input values from standard input into variables.
- Line 15: `    cout << fastPow(a, b) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 16: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 17: `}`
  Explaination: Closes the current scope block.

## Block 6: Q6. Fibonacci Number (Memoized Recursion)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

long long fib(int n, vector<long long>& dp) {
    if (n <= 1) return n;
    if (dp[n] != -1) return dp[n];
    return dp[n] = fib(n - 1, dp) + fib(n - 2, dp);
}

int main() {
    int n;
    cin >> n;
    vector<long long> dp(n + 1, -1);
    cout << fib(n, dp) << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `long long fib(int n, vector<long long>& dp) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    if (n <= 1) return n;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    if (dp[n] != -1) return dp[n];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 7: `    return dp[n] = fib(n - 1, dp) + fib(n - 2, dp);`
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
- Line 13: `    vector<long long> dp(n + 1, -1);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 14: `    cout << fib(n, dp) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 15: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 16: `}`
  Explaination: Closes the current scope block.

## Block 7: Q7. GCD of Two Numbers (Euclid Recursion)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

long long gcdRec(long long a, long long b) {
    if (b == 0) return a;
    return gcdRec(b, a % b);
}

int main() {
    long long a, b;
    cin >> a >> b;
    cout << gcdRec(a, b) << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `long long gcdRec(long long a, long long b) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    if (b == 0) return a;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    return gcdRec(b, a % b);`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 7: `}`
  Explaination: Closes the current scope block.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 10: `    long long a, b;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    cin >> a >> b;`
  Explaination: Reads input values from standard input into variables.
- Line 12: `    cout << gcdRec(a, b) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 13: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 14: `}`
  Explaination: Closes the current scope block.

## Block 8: Q8. Sum of Digits

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

long long sumDigits(long long n) {
    n = llabs(n);
    if (n == 0) return 0;
    return (n % 10) + sumDigits(n / 10);
}

int main() {
    long long n;
    cin >> n;
    cout << sumDigits(n) << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `long long sumDigits(long long n) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    n = llabs(n);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 6: `    if (n == 0) return 0;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 7: `    return (n % 10) + sumDigits(n / 10);`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 8: `}`
  Explaination: Closes the current scope block.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 11: `    long long n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 13: `    cout << sumDigits(n) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 14: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 15: `}`
  Explaination: Closes the current scope block.

## Block 9: Q9. Reverse a Number

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

long long reverseRec(long long n, long long res) {
    if (n == 0) return res;
    return reverseRec(n / 10, res * 10 + (n % 10));
}

int main() {
    long long n;
    cin >> n;
    long long sign = (n < 0 ? -1 : 1);
    n = llabs(n);
    cout << sign * reverseRec(n, 0) << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `long long reverseRec(long long n, long long res) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    if (n == 0) return res;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    return reverseRec(n / 10, res * 10 + (n % 10));`
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
- Line 12: `    long long sign = (n < 0 ? -1 : 1);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    n = llabs(n);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: `    cout << sign * reverseRec(n, 0) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 15: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 16: `}`
  Explaination: Closes the current scope block.

## Block 10: Q10. Check Palindrome String

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

bool isPal(const string& s, int l, int r) {
    if (l >= r) return true;
    if (s[l] != s[r]) return false;
    return isPal(s, l + 1, r - 1);
}

int main() {
    string s;
    cin >> s;
    cout << (isPal(s, 0, (int)s.size() - 1) ? "Yes" : "No") << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `bool isPal(const string& s, int l, int r) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    if (l >= r) return true;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    if (s[l] != s[r]) return false;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 7: `    return isPal(s, l + 1, r - 1);`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 8: `}`
  Explaination: Closes the current scope block.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 11: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 12: `    cin >> s;`
  Explaination: Reads input values from standard input into variables.
- Line 13: `    cout << (isPal(s, 0, (int)s.size() - 1) ? "Yes" : "No") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 14: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 15: `}`
  Explaination: Closes the current scope block.

## Block 11: Q11. Count Zeros in a Number

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int countZero(long long n) {
    if (n == 0) return 1;
    if (n < 10) return (n == 0 ? 1 : 0);
    return (n % 10 == 0) + countZero(n / 10);
}

int main() {
    long long n;
    cin >> n;
    n = llabs(n);
    cout << countZero(n) << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int countZero(long long n) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    if (n == 0) return 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    if (n < 10) return (n == 0 ? 1 : 0);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 7: `    return (n % 10 == 0) + countZero(n / 10);`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 8: `}`
  Explaination: Closes the current scope block.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 11: `    long long n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 13: `    n = llabs(n);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: `    cout << countZero(n) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 15: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 16: `}`
  Explaination: Closes the current scope block.

## Block 12: Q12. Decimal to Binary (Recursive)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

void toBinary(long long n, string& out) {
    if (n == 0) return;
    toBinary(n / 2, out);
    out.push_back(char('0' + (n % 2)));
}

int main() {
    long long n;
    cin >> n;
    if (n == 0) {
        cout << "0\n";
        return 0;
    }

    string out;
    toBinary(n, out);
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
- Line 4: `void toBinary(long long n, string& out) {`
  Explaination: Function declaration/definition header specifying return type, name, and parameters.
- Line 5: `    if (n == 0) return;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    toBinary(n / 2, out);`
  Explaination: Executes a single statement that updates program state.
- Line 7: `    out.push_back(char('0' + (n % 2)));`
  Explaination: Appends a new element to the end of the container.
- Line 8: `}`
  Explaination: Closes the current scope block.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 11: `    long long n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 13: `    if (n == 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `        cout << "0\n";`
  Explaination: Prints formatted output to standard output.
- Line 15: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    string out;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 19: `    toBinary(n, out);`
  Explaination: Executes a single statement that updates program state.
- Line 20: `    cout << out << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 21: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 22: `}`
  Explaination: Closes the current scope block.

## Block 13: Q13. Check if Array is Sorted

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

bool sortedRec(const vector<int>& a, int i) {
    if (i == (int)a.size() - 1) return true;
    if (a[i] > a[i + 1]) return false;
    return sortedRec(a, i + 1);
}

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    if (n <= 1) {
        cout << "Yes\n";
    } else {
        cout << (sortedRec(a, 0) ? "Yes" : "No") << "\n";
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
- Line 4: `bool sortedRec(const vector<int>& a, int i) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    if (i == (int)a.size() - 1) return true;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    if (a[i] > a[i + 1]) return false;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 7: `    return sortedRec(a, i + 1);`
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
- Line 13: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 14: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    if (n <= 1) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `        cout << "Yes\n";`
  Explaination: Prints formatted output to standard output.
- Line 18: `    } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 19: `        cout << (sortedRec(a, 0) ? "Yes" : "No") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 22: `}`
  Explaination: Closes the current scope block.

## Block 14: Q14. Linear Search Recursively

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

bool findRec(const vector<int>& a, int i, int x) {
    if (i == (int)a.size()) return false;
    if (a[i] == x) return true;
    return findRec(a, i + 1, x);
}

int main() {
    int n, x;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];
    cin >> x;

    cout << (findRec(a, 0, x) ? "Yes" : "No") << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `bool findRec(const vector<int>& a, int i, int x) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    if (i == (int)a.size()) return false;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    if (a[i] == x) return true;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 7: `    return findRec(a, i + 1, x);`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 8: `}`
  Explaination: Closes the current scope block.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 11: `    int n, x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 13: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 14: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `    cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    cout << (findRec(a, 0, x) ? "Yes" : "No") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 18: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 19: `}`
  Explaination: Closes the current scope block.

## Block 15: Q15. First Occurrence Index

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int firstOcc(const vector<int>& a, int i, int x) {
    if (i == (int)a.size()) return -1;
    if (a[i] == x) return i;
    return firstOcc(a, i + 1, x);
}

int main() {
    int n, x;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];
    cin >> x;

    cout << firstOcc(a, 0, x) << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int firstOcc(const vector<int>& a, int i, int x) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    if (i == (int)a.size()) return -1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    if (a[i] == x) return i;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 7: `    return firstOcc(a, i + 1, x);`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 8: `}`
  Explaination: Closes the current scope block.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 11: `    int n, x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 13: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 14: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `    cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    cout << firstOcc(a, 0, x) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 18: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 19: `}`
  Explaination: Closes the current scope block.

## Block 16: Q16. Last Occurrence Index

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int lastOcc(const vector<int>& a, int i, int x) {
    if (i == (int)a.size()) return -1;
    int ans = lastOcc(a, i + 1, x);
    if (ans != -1) return ans;
    return (a[i] == x ? i : -1);
}

int main() {
    int n, x;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];
    cin >> x;

    cout << lastOcc(a, 0, x) << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int lastOcc(const vector<int>& a, int i, int x) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    if (i == (int)a.size()) return -1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    int ans = lastOcc(a, i + 1, x);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    if (ans != -1) return ans;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 8: `    return (a[i] == x ? i : -1);`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 9: `}`
  Explaination: Closes the current scope block.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 12: `    int n, x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 14: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 15: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `    cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    cout << lastOcc(a, 0, x) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 19: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 20: `}`
  Explaination: Closes the current scope block.

## Block 17: Q17. Recursive Binary Search

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int bsearchRec(const vector<int>& a, int l, int r, int x) {
    if (l > r) return -1;
    int m = l + (r - l) / 2;
    if (a[m] == x) return m;
    if (a[m] > x) return bsearchRec(a, l, m - 1, x);
    return bsearchRec(a, m + 1, r, x);
}

int main() {
    int n, x;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];
    cin >> x;

    cout << bsearchRec(a, 0, n - 1, x) << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int bsearchRec(const vector<int>& a, int l, int r, int x) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    if (l > r) return -1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    int m = l + (r - l) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    if (a[m] == x) return m;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 8: `    if (a[m] > x) return bsearchRec(a, l, m - 1, x);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 9: `    return bsearchRec(a, m + 1, r, x);`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 10: `}`
  Explaination: Closes the current scope block.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 13: `    int n, x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 15: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 16: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 17: `    cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    cout << bsearchRec(a, 0, n - 1, x) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 20: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 21: `}`
  Explaination: Closes the current scope block.

## Block 18: Q18. Reverse a String Recursively

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

void revRec(string& s, int l, int r) {
    if (l >= r) return;
    swap(s[l], s[r]);
    revRec(s, l + 1, r - 1);
}

int main() {
    string s;
    cin >> s;
    revRec(s, 0, (int)s.size() - 1);
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
- Line 4: `void revRec(string& s, int l, int r) {`
  Explaination: Function declaration/definition header specifying return type, name, and parameters.
- Line 5: `    if (l >= r) return;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    swap(s[l], s[r]);`
  Explaination: Executes a single statement that updates program state.
- Line 7: `    revRec(s, l + 1, r - 1);`
  Explaination: Executes a single statement that updates program state.
- Line 8: `}`
  Explaination: Closes the current scope block.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 11: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 12: `    cin >> s;`
  Explaination: Reads input values from standard input into variables.
- Line 13: `    revRec(s, 0, (int)s.size() - 1);`
  Explaination: Executes a single statement that updates program state.
- Line 14: `    cout << s << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 15: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 16: `}`
  Explaination: Closes the current scope block.

## Block 19: Q19. Remove Consecutive Duplicates in String

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

void compressRec(const string& s, int i, string& out) {
    if (i == (int)s.size()) return;
    if (out.empty() || out.back() != s[i]) out.push_back(s[i]);
    compressRec(s, i + 1, out);
}

int main() {
    string s;
    cin >> s;
    string out;
    compressRec(s, 0, out);
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
- Line 4: `void compressRec(const string& s, int i, string& out) {`
  Explaination: Function declaration/definition header specifying return type, name, and parameters.
- Line 5: `    if (i == (int)s.size()) return;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    if (out.empty() || out.back() != s[i]) out.push_back(s[i]);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 7: `    compressRec(s, i + 1, out);`
  Explaination: Executes a single statement that updates program state.
- Line 8: `}`
  Explaination: Closes the current scope block.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 11: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 12: `    cin >> s;`
  Explaination: Reads input values from standard input into variables.
- Line 13: `    string out;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 14: `    compressRec(s, 0, out);`
  Explaination: Executes a single statement that updates program state.
- Line 15: `    cout << out << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 16: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 17: `}`
  Explaination: Closes the current scope block.

## Block 20: Q20. Move All 'x' to End

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

void moveXRec(const string& s, int i, string& left, int& cntX) {
    if (i == (int)s.size()) return;
    if (s[i] == 'x') cntX++;
    else left.push_back(s[i]);
    moveXRec(s, i + 1, left, cntX);
}

int main() {
    string s;
    cin >> s;

    string left;
    int cntX = 0;
    moveXRec(s, 0, left, cntX);

    left += string(cntX, 'x');
    cout << left << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `void moveXRec(const string& s, int i, string& left, int& cntX) {`
  Explaination: Function declaration/definition header specifying return type, name, and parameters.
- Line 5: `    if (i == (int)s.size()) return;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    if (s[i] == 'x') cntX++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 7: `    else left.push_back(s[i]);`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 8: `    moveXRec(s, i + 1, left, cntX);`
  Explaination: Executes a single statement that updates program state.
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
- Line 15: `    string left;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 16: `    int cntX = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: `    moveXRec(s, 0, left, cntX);`
  Explaination: Executes a single statement that updates program state.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    left += string(cntX, 'x');`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `    cout << left << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 21: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 22: `}`
  Explaination: Closes the current scope block.

## Block 21: Q21. Generate All Subsequences of a String

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

void genSubs(const string& s, int i, string& cur) {
    if (i == (int)s.size()) {
        cout << (cur.empty() ? "<empty>" : cur) << "\n";
        return;
    }

    cur.push_back(s[i]);
    genSubs(s, i + 1, cur);
    cur.pop_back();

    genSubs(s, i + 1, cur);
}

int main() {
    string s;
    cin >> s;
    string cur;
    genSubs(s, 0, cur);
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `void genSubs(const string& s, int i, string& cur) {`
  Explaination: Function declaration/definition header specifying return type, name, and parameters.
- Line 5: `    if (i == (int)s.size()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `        cout << (cur.empty() ? "<empty>" : cur) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 7: `        return;`
  Explaination: Executes a single statement that updates program state.
- Line 8: `    }`
  Explaination: Closes the current scope block.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    cur.push_back(s[i]);`
  Explaination: Appends a new element to the end of the container.
- Line 11: `    genSubs(s, i + 1, cur);`
  Explaination: Executes a single statement that updates program state.
- Line 12: `    cur.pop_back();`
  Explaination: Removes the last element from the container.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    genSubs(s, i + 1, cur);`
  Explaination: Executes a single statement that updates program state.
- Line 15: `}`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 18: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 19: `    cin >> s;`
  Explaination: Reads input values from standard input into variables.
- Line 20: `    string cur;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 21: `    genSubs(s, 0, cur);`
  Explaination: Executes a single statement that updates program state.
- Line 22: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 23: `}`
  Explaination: Closes the current scope block.

## Block 22: Q22. Count Subsequences with Sum K

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

long long countSubseq(const vector<int>& a, int i, int sum, int k) {
    if (i == (int)a.size()) return (sum == k ? 1 : 0);
    long long take = countSubseq(a, i + 1, sum + a[i], k);
    long long notTake = countSubseq(a, i + 1, sum, k);
    return take + notTake;
}

int main() {
    int n, k;
    cin >> n >> k;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    cout << countSubseq(a, 0, 0, k) << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `long long countSubseq(const vector<int>& a, int i, int sum, int k) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    if (i == (int)a.size()) return (sum == k ? 1 : 0);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    long long take = countSubseq(a, i + 1, sum + a[i], k);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    long long notTake = countSubseq(a, i + 1, sum, k);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 8: `    return take + notTake;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 9: `}`
  Explaination: Closes the current scope block.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 12: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 14: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 15: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    cout << countSubseq(a, 0, 0, k) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 18: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 19: `}`
  Explaination: Closes the current scope block.

## Block 23: Q23. Print One Subsequence with Sum K

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

bool oneSubseq(const vector<int>& a, int i, int sum, int k, vector<int>& cur) {
    if (i == (int)a.size()) return sum == k;

    cur.push_back(a[i]);
    if (oneSubseq(a, i + 1, sum + a[i], k, cur)) return true;
    cur.pop_back();

    if (oneSubseq(a, i + 1, sum, k, cur)) return true;

    return false;
}

int main() {
    int n, k;
    cin >> n >> k;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    vector<int> cur;
    if (oneSubseq(a, 0, 0, k, cur)) {
        for (int x : cur) cout << x << " ";
        cout << "\n";
    } else {
        cout << -1 << "\n";
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
- Line 4: `bool oneSubseq(const vector<int>& a, int i, int sum, int k, vector<int>& cur) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    if (i == (int)a.size()) return sum == k;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 7: `    cur.push_back(a[i]);`
  Explaination: Appends a new element to the end of the container.
- Line 8: `    if (oneSubseq(a, i + 1, sum + a[i], k, cur)) return true;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 9: `    cur.pop_back();`
  Explaination: Removes the last element from the container.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    if (oneSubseq(a, i + 1, sum, k, cur)) return true;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    return false;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 14: `}`
  Explaination: Closes the current scope block.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 17: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 19: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 20: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    vector<int> cur;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 23: `    if (oneSubseq(a, 0, 0, k, cur)) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 24: `        for (int x : cur) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 25: `        cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 26: `    } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 27: `        cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 28: `    }`
  Explaination: Closes the current scope block.
- Line 29: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 30: `}`
  Explaination: Closes the current scope block.

## Block 24: Q24. Combination Sum I

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

void dfs(int idx, int target, const vector<int>& a, vector<int>& cur, vector<vector<int>>& ans) {
    if (target == 0) {
        ans.push_back(cur);
        return;
    }
    if (idx == (int)a.size() || target < 0) return;

    cur.push_back(a[idx]);
    dfs(idx, target - a[idx], a, cur, ans);
    cur.pop_back();

    dfs(idx + 1, target, a, cur, ans);
}

int main() {
    int n, target;
    cin >> n >> target;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    vector<int> cur;
    vector<vector<int>> ans;
    dfs(0, target, a, cur, ans);

    if (ans.empty()) {
        cout << -1 << "\n";
        return 0;
    }

    for (auto &v : ans) {
        for (int x : v) cout << x << " ";
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
- Line 4: `void dfs(int idx, int target, const vector<int>& a, vector<int>& cur, vector<vector<int>>& ans) {`
  Explaination: Function declaration/definition header specifying return type, name, and parameters.
- Line 5: `    if (target == 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `        ans.push_back(cur);`
  Explaination: Appends a new element to the end of the container.
- Line 7: `        return;`
  Explaination: Executes a single statement that updates program state.
- Line 8: `    }`
  Explaination: Closes the current scope block.
- Line 9: `    if (idx == (int)a.size() || target < 0) return;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    cur.push_back(a[idx]);`
  Explaination: Appends a new element to the end of the container.
- Line 12: `    dfs(idx, target - a[idx], a, cur, ans);`
  Explaination: Executes a single statement that updates program state.
- Line 13: `    cur.pop_back();`
  Explaination: Removes the last element from the container.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    dfs(idx + 1, target, a, cur, ans);`
  Explaination: Executes a single statement that updates program state.
- Line 16: `}`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 19: `    int n, target;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 20: `    cin >> n >> target;`
  Explaination: Reads input values from standard input into variables.
- Line 21: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 22: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    vector<int> cur;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 25: `    vector<vector<int>> ans;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 26: `    dfs(0, target, a, cur, ans);`
  Explaination: Executes a single statement that updates program state.
- Line 27: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 28: `    if (ans.empty()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 29: `        cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 30: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 31: `    }`
  Explaination: Closes the current scope block.
- Line 32: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 33: `    for (auto &v : ans) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 34: `        for (int x : v) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 35: `        cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 36: `    }`
  Explaination: Closes the current scope block.
- Line 37: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 38: `}`
  Explaination: Closes the current scope block.

## Block 25: Q25. Combination Sum II (Each Element Once, Duplicates in Input)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

void dfs(int start, int target, const vector<int>& a, vector<int>& cur, vector<vector<int>>& ans) {
    if (target == 0) {
        ans.push_back(cur);
        return;
    }

    for (int i = start; i < (int)a.size(); i++) {
        if (i > start && a[i] == a[i - 1]) continue;
        if (a[i] > target) break;

        cur.push_back(a[i]);
        dfs(i + 1, target - a[i], a, cur, ans);
        cur.pop_back();
    }
}

int main() {
    int n, target;
    cin >> n >> target;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    sort(a.begin(), a.end());

    vector<int> cur;
    vector<vector<int>> ans;
    dfs(0, target, a, cur, ans);

    if (ans.empty()) {
        cout << -1 << "\n";
        return 0;
    }

    for (auto &v : ans) {
        for (int x : v) cout << x << " ";
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
- Line 4: `void dfs(int start, int target, const vector<int>& a, vector<int>& cur, vector<vector<int>>& ans) {`
  Explaination: Function declaration/definition header specifying return type, name, and parameters.
- Line 5: `    if (target == 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `        ans.push_back(cur);`
  Explaination: Appends a new element to the end of the container.
- Line 7: `        return;`
  Explaination: Executes a single statement that updates program state.
- Line 8: `    }`
  Explaination: Closes the current scope block.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    for (int i = start; i < (int)a.size(); i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: `        if (i > start && a[i] == a[i - 1]) continue;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 12: `        if (a[i] > target) break;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `        cur.push_back(a[i]);`
  Explaination: Appends a new element to the end of the container.
- Line 15: `        dfs(i + 1, target - a[i], a, cur, ans);`
  Explaination: Executes a single statement that updates program state.
- Line 16: `        cur.pop_back();`
  Explaination: Removes the last element from the container.
- Line 17: `    }`
  Explaination: Closes the current scope block.
- Line 18: `}`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 21: `    int n, target;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 22: `    cin >> n >> target;`
  Explaination: Reads input values from standard input into variables.
- Line 23: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 24: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    sort(a.begin(), a.end());`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 27: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 28: `    vector<int> cur;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 29: `    vector<vector<int>> ans;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 30: `    dfs(0, target, a, cur, ans);`
  Explaination: Executes a single statement that updates program state.
- Line 31: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 32: `    if (ans.empty()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 33: `        cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 34: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 35: `    }`
  Explaination: Closes the current scope block.
- Line 36: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 37: `    for (auto &v : ans) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 38: `        for (int x : v) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 39: `        cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 40: `    }`
  Explaination: Closes the current scope block.
- Line 41: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 42: `}`
  Explaination: Closes the current scope block.

## Block 26: Q26. Subset Sum List

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

void subsetSums(const vector<int>& a, int i, int curSum, vector<int>& ans) {
    if (i == (int)a.size()) {
        ans.push_back(curSum);
        return;
    }
    subsetSums(a, i + 1, curSum + a[i], ans);
    subsetSums(a, i + 1, curSum, ans);
}

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    vector<int> sums;
    subsetSums(a, 0, 0, sums);
    sort(sums.begin(), sums.end());

    for (int x : sums) cout << x << " ";
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
- Line 4: `void subsetSums(const vector<int>& a, int i, int curSum, vector<int>& ans) {`
  Explaination: Function declaration/definition header specifying return type, name, and parameters.
- Line 5: `    if (i == (int)a.size()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `        ans.push_back(curSum);`
  Explaination: Appends a new element to the end of the container.
- Line 7: `        return;`
  Explaination: Executes a single statement that updates program state.
- Line 8: `    }`
  Explaination: Closes the current scope block.
- Line 9: `    subsetSums(a, i + 1, curSum + a[i], ans);`
  Explaination: Executes a single statement that updates program state.
- Line 10: `    subsetSums(a, i + 1, curSum, ans);`
  Explaination: Executes a single statement that updates program state.
- Line 11: `}`
  Explaination: Closes the current scope block.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 14: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 16: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 17: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    vector<int> sums;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 20: `    subsetSums(a, 0, 0, sums);`
  Explaination: Executes a single statement that updates program state.
- Line 21: `    sort(sums.begin(), sums.end());`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    for (int x : sums) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 24: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 25: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 26: `}`
  Explaination: Closes the current scope block.

## Block 27: Q27. Permutations of an Array

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

void permute(vector<int>& a, int idx) {
    if (idx == (int)a.size()) {
        for (int x : a) cout << x << " ";
        cout << "\n";
        return;
    }

    for (int i = idx; i < (int)a.size(); i++) {
        swap(a[idx], a[i]);
        permute(a, idx + 1);
        swap(a[idx], a[i]);
    }
}

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    permute(a, 0);
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `void permute(vector<int>& a, int idx) {`
  Explaination: Function declaration/definition header specifying return type, name, and parameters.
- Line 5: `    if (idx == (int)a.size()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `        for (int x : a) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 7: `        cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 8: `        return;`
  Explaination: Executes a single statement that updates program state.
- Line 9: `    }`
  Explaination: Closes the current scope block.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    for (int i = idx; i < (int)a.size(); i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        swap(a[idx], a[i]);`
  Explaination: Executes a single statement that updates program state.
- Line 13: `        permute(a, idx + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 14: `        swap(a[idx], a[i]);`
  Explaination: Executes a single statement that updates program state.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: `}`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 19: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 20: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 21: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 22: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    permute(a, 0);`
  Explaination: Executes a single statement that updates program state.
- Line 25: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 26: `}`
  Explaination: Closes the current scope block.

## Block 28: Q28. Unique Permutations of a String

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

void dfs(string& s, int idx) {
    if (idx == (int)s.size()) {
        cout << s << "\n";
        return;
    }

    unordered_set<char> used;
    for (int i = idx; i < (int)s.size(); i++) {
        if (used.count(s[i])) continue;
        used.insert(s[i]);
        swap(s[idx], s[i]);
        dfs(s, idx + 1);
        swap(s[idx], s[i]);
    }
}

int main() {
    string s;
    cin >> s;
    dfs(s, 0);
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `void dfs(string& s, int idx) {`
  Explaination: Function declaration/definition header specifying return type, name, and parameters.
- Line 5: `    if (idx == (int)s.size()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `        cout << s << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 7: `        return;`
  Explaination: Executes a single statement that updates program state.
- Line 8: `    }`
  Explaination: Closes the current scope block.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    unordered_set<char> used;`
  Explaination: Declares a hash set for fast membership checks.
- Line 11: `    for (int i = idx; i < (int)s.size(); i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        if (used.count(s[i])) continue;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: `        used.insert(s[i]);`
  Explaination: Inserts element(s) at a specified position in a container.
- Line 14: `        swap(s[idx], s[i]);`
  Explaination: Executes a single statement that updates program state.
- Line 15: `        dfs(s, idx + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 16: `        swap(s[idx], s[i]);`
  Explaination: Executes a single statement that updates program state.
- Line 17: `    }`
  Explaination: Closes the current scope block.
- Line 18: `}`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 21: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 22: `    cin >> s;`
  Explaination: Reads input values from standard input into variables.
- Line 23: `    dfs(s, 0);`
  Explaination: Executes a single statement that updates program state.
- Line 24: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 25: `}`
  Explaination: Closes the current scope block.

## Block 29: Q29. Generate Parentheses

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

void gen(int n, int open, int close, string& cur, vector<string>& ans) {
    if ((int)cur.size() == 2 * n) {
        ans.push_back(cur);
        return;
    }

    if (open < n) {
        cur.push_back('(');
        gen(n, open + 1, close, cur, ans);
        cur.pop_back();
    }
    if (close < open) {
        cur.push_back(')');
        gen(n, open, close + 1, cur, ans);
        cur.pop_back();
    }
}

int main() {
    int n;
    cin >> n;

    string cur;
    vector<string> ans;
    gen(n, 0, 0, cur, ans);

    for (auto &x : ans) cout << x << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `void gen(int n, int open, int close, string& cur, vector<string>& ans) {`
  Explaination: Function declaration/definition header specifying return type, name, and parameters.
- Line 5: `    if ((int)cur.size() == 2 * n) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `        ans.push_back(cur);`
  Explaination: Appends a new element to the end of the container.
- Line 7: `        return;`
  Explaination: Executes a single statement that updates program state.
- Line 8: `    }`
  Explaination: Closes the current scope block.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    if (open < n) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 11: `        cur.push_back('(');`
  Explaination: Appends a new element to the end of the container.
- Line 12: `        gen(n, open + 1, close, cur, ans);`
  Explaination: Executes a single statement that updates program state.
- Line 13: `        cur.pop_back();`
  Explaination: Removes the last element from the container.
- Line 14: `    }`
  Explaination: Closes the current scope block.
- Line 15: `    if (close < open) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `        cur.push_back(')');`
  Explaination: Appends a new element to the end of the container.
- Line 17: `        gen(n, open, close + 1, cur, ans);`
  Explaination: Executes a single statement that updates program state.
- Line 18: `        cur.pop_back();`
  Explaination: Removes the last element from the container.
- Line 19: `    }`
  Explaination: Closes the current scope block.
- Line 20: `}`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 23: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 24: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    string cur;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 27: `    vector<string> ans;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 28: `    gen(n, 0, 0, cur, ans);`
  Explaination: Executes a single statement that updates program state.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    for (auto &x : ans) cout << x << "\n";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 31: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 32: `}`
  Explaination: Closes the current scope block.

## Block 30: Q30. Letter Combinations of Phone Number

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

vector<string> mp = {
    "", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"
};

void solve(const string& d, int i, string& cur, vector<string>& ans) {
    if (i == (int)d.size()) {
        ans.push_back(cur);
        return;
    }

    for (char ch : mp[d[i] - '0']) {
        cur.push_back(ch);
        solve(d, i + 1, cur, ans);
        cur.pop_back();
    }
}

int main() {
    string d;
    cin >> d;

    if (d.empty()) {
        cout << "\n";
        return 0;
    }

    string cur;
    vector<string> ans;
    solve(d, 0, cur, ans);

    for (auto &s : ans) cout << s << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `vector<string> mp = {`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 5: `    "", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 6: `};`
  Explaination: Closes the current class/struct/initializer block.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `void solve(const string& d, int i, string& cur, vector<string>& ans) {`
  Explaination: Function declaration/definition header specifying return type, name, and parameters.
- Line 9: `    if (i == (int)d.size()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 10: `        ans.push_back(cur);`
  Explaination: Appends a new element to the end of the container.
- Line 11: `        return;`
  Explaination: Executes a single statement that updates program state.
- Line 12: `    }`
  Explaination: Closes the current scope block.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    for (char ch : mp[d[i] - '0']) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        cur.push_back(ch);`
  Explaination: Appends a new element to the end of the container.
- Line 16: `        solve(d, i + 1, cur, ans);`
  Explaination: Executes a single statement that updates program state.
- Line 17: `        cur.pop_back();`
  Explaination: Removes the last element from the container.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: `}`
  Explaination: Closes the current scope block.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 22: `    string d;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 23: `    cin >> d;`
  Explaination: Reads input values from standard input into variables.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    if (d.empty()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 26: `        cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 27: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 28: `    }`
  Explaination: Closes the current scope block.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    string cur;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 31: `    vector<string> ans;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 32: `    solve(d, 0, cur, ans);`
  Explaination: Executes a single statement that updates program state.
- Line 33: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 34: `    for (auto &s : ans) cout << s << "\n";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 35: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 36: `}`
  Explaination: Closes the current scope block.

## Block 31: Q31. Palindrome Partitioning

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

bool isPal(const string& s, int l, int r) {
    while (l < r) {
        if (s[l++] != s[r--]) return false;
    }
    return true;
}

void dfs(const string& s, int idx, vector<string>& cur, vector<vector<string>>& ans) {
    if (idx == (int)s.size()) {
        ans.push_back(cur);
        return;
    }

    for (int end = idx; end < (int)s.size(); end++) {
        if (!isPal(s, idx, end)) continue;
        cur.push_back(s.substr(idx, end - idx + 1));
        dfs(s, end + 1, cur, ans);
        cur.pop_back();
    }
}

int main() {
    string s;
    cin >> s;

    vector<string> cur;
    vector<vector<string>> ans;
    dfs(s, 0, cur, ans);

    for (auto &part : ans) {
        for (auto &x : part) cout << x << " ";
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
- Line 4: `bool isPal(const string& s, int l, int r) {`
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
- Line 11: `void dfs(const string& s, int idx, vector<string>& cur, vector<vector<string>>& ans) {`
  Explaination: Function declaration/definition header specifying return type, name, and parameters.
- Line 12: `    if (idx == (int)s.size()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: `        ans.push_back(cur);`
  Explaination: Appends a new element to the end of the container.
- Line 14: `        return;`
  Explaination: Executes a single statement that updates program state.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    for (int end = idx; end < (int)s.size(); end++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: `        if (!isPal(s, idx, end)) continue;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 19: `        cur.push_back(s.substr(idx, end - idx + 1));`
  Explaination: Appends a new element to the end of the container.
- Line 20: `        dfs(s, end + 1, cur, ans);`
  Explaination: Executes a single statement that updates program state.
- Line 21: `        cur.pop_back();`
  Explaination: Removes the last element from the container.
- Line 22: `    }`
  Explaination: Closes the current scope block.
- Line 23: `}`
  Explaination: Closes the current scope block.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 26: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 27: `    cin >> s;`
  Explaination: Reads input values from standard input into variables.
- Line 28: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 29: `    vector<string> cur;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 30: `    vector<vector<string>> ans;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 31: `    dfs(s, 0, cur, ans);`
  Explaination: Executes a single statement that updates program state.
- Line 32: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 33: `    for (auto &part : ans) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 34: `        for (auto &x : part) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 35: `        cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 36: `    }`
  Explaination: Closes the current scope block.
- Line 37: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 38: `}`
  Explaination: Closes the current scope block.

## Block 32: Q32. N-Queens (Count Solutions)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

void solve(int row, int n, vector<int>& colUsed, vector<int>& diag1, vector<int>& diag2, long long& cnt) {
    if (row == n) {
        cnt++;
        return;
    }

    for (int c = 0; c < n; c++) {
        int d1 = row + c;
        int d2 = row - c + (n - 1);
        if (colUsed[c] || diag1[d1] || diag2[d2]) continue;

        colUsed[c] = diag1[d1] = diag2[d2] = 1;
        solve(row + 1, n, colUsed, diag1, diag2, cnt);
        colUsed[c] = diag1[d1] = diag2[d2] = 0;
    }
}

int main() {
    int n;
    cin >> n;

    vector<int> colUsed(n, 0), diag1(2 * n, 0), diag2(2 * n, 0);
    long long cnt = 0;
    solve(0, n, colUsed, diag1, diag2, cnt);

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
- Line 4: `void solve(int row, int n, vector<int>& colUsed, vector<int>& diag1, vector<int>& diag2, long long& cnt) {`
  Explaination: Function declaration/definition header specifying return type, name, and parameters.
- Line 5: `    if (row == n) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `        cnt++;`
  Explaination: Executes a single statement that updates program state.
- Line 7: `        return;`
  Explaination: Executes a single statement that updates program state.
- Line 8: `    }`
  Explaination: Closes the current scope block.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    for (int c = 0; c < n; c++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: `        int d1 = row + c;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `        int d2 = row - c + (n - 1);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `        if (colUsed[c] || diag1[d1] || diag2[d2]) continue;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `        colUsed[c] = diag1[d1] = diag2[d2] = 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `        solve(row + 1, n, colUsed, diag1, diag2, cnt);`
  Explaination: Executes a single statement that updates program state.
- Line 17: `        colUsed[c] = diag1[d1] = diag2[d2] = 0;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: `    }`
  Explaination: Closes the current scope block.
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
- Line 25: `    vector<int> colUsed(n, 0), diag1(2 * n, 0), diag2(2 * n, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 26: `    long long cnt = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 27: `    solve(0, n, colUsed, diag1, diag2, cnt);`
  Explaination: Executes a single statement that updates program state.
- Line 28: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 29: `    cout << cnt << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 30: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 31: `}`
  Explaination: Closes the current scope block.

## Block 33: Q33. Rat in a Maze (All Paths)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int n;
vector<vector<int>> a;
vector<string> ans;

void dfs(int r, int c, string& path) {
    if (r == n - 1 && c == n - 1) {
        ans.push_back(path);
        return;
    }

    a[r][c] = 0;

    int dr[4] = {1, 0, 0, -1};
    int dc[4] = {0, -1, 1, 0};
    char mv[4] = {'D', 'L', 'R', 'U'};

    for (int k = 0; k < 4; k++) {
        int nr = r + dr[k], nc = c + dc[k];
        if (nr >= 0 && nr < n && nc >= 0 && nc < n && a[nr][nc] == 1) {
            path.push_back(mv[k]);
            dfs(nr, nc, path);
            path.pop_back();
        }
    }

    a[r][c] = 1;
}

int main() {
    cin >> n;
    a.assign(n, vector<int>(n));
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            cin >> a[i][j];

    if (a[0][0] == 0 || a[n - 1][n - 1] == 0) {
        cout << -1 << "\n";
        return 0;
    }

    string path;
    dfs(0, 0, path);
    sort(ans.begin(), ans.end());

    if (ans.empty()) cout << -1 << "\n";
    else {
        for (auto &p : ans) cout << p << "\n";
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
- Line 4: `int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `vector<vector<int>> a;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 6: `vector<string> ans;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `void dfs(int r, int c, string& path) {`
  Explaination: Function declaration/definition header specifying return type, name, and parameters.
- Line 9: `    if (r == n - 1 && c == n - 1) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 10: `        ans.push_back(path);`
  Explaination: Appends a new element to the end of the container.
- Line 11: `        return;`
  Explaination: Executes a single statement that updates program state.
- Line 12: `    }`
  Explaination: Closes the current scope block.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    a[r][c] = 0;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    int dr[4] = {1, 0, 0, -1};`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: `    int dc[4] = {0, -1, 1, 0};`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: `    char mv[4] = {'D', 'L', 'R', 'U'};`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    for (int k = 0; k < 4; k++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 21: `        int nr = r + dr[k], nc = c + dc[k];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 22: `        if (nr >= 0 && nr < n && nc >= 0 && nc < n && a[nr][nc] == 1) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 23: `            path.push_back(mv[k]);`
  Explaination: Appends a new element to the end of the container.
- Line 24: `            dfs(nr, nc, path);`
  Explaination: Executes a single statement that updates program state.
- Line 25: `            path.pop_back();`
  Explaination: Removes the last element from the container.
- Line 26: `        }`
  Explaination: Closes the current scope block.
- Line 27: `    }`
  Explaination: Closes the current scope block.
- Line 28: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 29: `    a[r][c] = 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 30: `}`
  Explaination: Closes the current scope block.
- Line 31: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 32: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 33: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 34: `    a.assign(n, vector<int>(n));`
  Explaination: Executes a single statement that updates program state.
- Line 35: `    for (int i = 0; i < n; i++)`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 36: `        for (int j = 0; j < n; j++)`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 37: `            cin >> a[i][j];`
  Explaination: Reads input values from standard input into variables.
- Line 38: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 39: `    if (a[0][0] == 0 || a[n - 1][n - 1] == 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 40: `        cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 41: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 42: `    }`
  Explaination: Closes the current scope block.
- Line 43: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 44: `    string path;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 45: `    dfs(0, 0, path);`
  Explaination: Executes a single statement that updates program state.
- Line 46: `    sort(ans.begin(), ans.end());`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 47: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 48: `    if (ans.empty()) cout << -1 << "\n";`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 49: `    else {`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 50: `        for (auto &p : ans) cout << p << "\n";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 51: `    }`
  Explaination: Closes the current scope block.
- Line 52: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 53: `}`
  Explaination: Closes the current scope block.

## Block 34: Q34. Word Search in Grid

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

bool dfs(vector<string>& b, int r, int c, const string& w, int idx) {
    if (idx == (int)w.size()) return true;
    if (r < 0 || c < 0 || r >= (int)b.size() || c >= (int)b[0].size()) return false;
    if (b[r][c] != w[idx]) return false;

    char temp = b[r][c];
    b[r][c] = '#';

    bool ok = dfs(b, r + 1, c, w, idx + 1) ||
              dfs(b, r - 1, c, w, idx + 1) ||
              dfs(b, r, c + 1, w, idx + 1) ||
              dfs(b, r, c - 1, w, idx + 1);

    b[r][c] = temp;
    return ok;
}

int main() {
    int n, m;
    cin >> n >> m;
    vector<string> board(n);
    for (int i = 0; i < n; i++) cin >> board[i];
    string word;
    cin >> word;

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            if (dfs(board, i, j, word, 0)) {
                cout << "Yes\n";
                return 0;
            }
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
- Line 4: `bool dfs(vector<string>& b, int r, int c, const string& w, int idx) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    if (idx == (int)w.size()) return true;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    if (r < 0 || c < 0 || r >= (int)b.size() || c >= (int)b[0].size()) return false;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 7: `    if (b[r][c] != w[idx]) return false;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    char temp = b[r][c];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: `    b[r][c] = '#';`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    bool ok = dfs(b, r + 1, c, w, idx + 1) ||`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `              dfs(b, r - 1, c, w, idx + 1) ||`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 14: `              dfs(b, r, c + 1, w, idx + 1) ||`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 15: `              dfs(b, r, c - 1, w, idx + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    b[r][c] = temp;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: `    return ok;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 19: `}`
  Explaination: Closes the current scope block.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 22: `    int n, m;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 23: `    cin >> n >> m;`
  Explaination: Reads input values from standard input into variables.
- Line 24: `    vector<string> board(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 25: `    for (int i = 0; i < n; i++) cin >> board[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 26: `    string word;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 27: `    cin >> word;`
  Explaination: Reads input values from standard input into variables.
- Line 28: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 29: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 30: `        for (int j = 0; j < m; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 31: `            if (dfs(board, i, j, word, 0)) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 32: `                cout << "Yes\n";`
  Explaination: Prints formatted output to standard output.
- Line 33: `                return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 34: `            }`
  Explaination: Closes the current scope block.
- Line 35: `        }`
  Explaination: Closes the current scope block.
- Line 36: `    }`
  Explaination: Closes the current scope block.
- Line 37: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 38: `    cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 39: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 40: `}`
  Explaination: Closes the current scope block.

## Block 35: Q35. Sudoku Solver

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

bool valid(vector<vector<int>>& g, int r, int c, int val) {
    for (int i = 0; i < 9; i++) {
        if (g[r][i] == val) return false;
        if (g[i][c] == val) return false;
    }

    int sr = (r / 3) * 3, sc = (c / 3) * 3;
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            if (g[sr + i][sc + j] == val) return false;
        }
    }
    return true;
}

bool solve(vector<vector<int>>& g) {
    for (int r = 0; r < 9; r++) {
        for (int c = 0; c < 9; c++) {
            if (g[r][c] == 0) {
                for (int v = 1; v <= 9; v++) {
                    if (valid(g, r, c, v)) {
                        g[r][c] = v;
                        if (solve(g)) return true;
                        g[r][c] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
}

int main() {
    vector<vector<int>> g(9, vector<int>(9));
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) cin >> g[i][j];
    }

    if (!solve(g)) {
        cout << "No solution\n";
        return 0;
    }

    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) cout << g[i][j] << " ";
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
- Line 4: `bool valid(vector<vector<int>>& g, int r, int c, int val) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    for (int i = 0; i < 9; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 6: `        if (g[r][i] == val) return false;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 7: `        if (g[i][c] == val) return false;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 8: `    }`
  Explaination: Closes the current scope block.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    int sr = (r / 3) * 3, sc = (c / 3) * 3;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    for (int i = 0; i < 3; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        for (int j = 0; j < 3; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `            if (g[sr + i][sc + j] == val) return false;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `        }`
  Explaination: Closes the current scope block.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: `    return true;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 17: `}`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `bool solve(vector<vector<int>>& g) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 20: `    for (int r = 0; r < 9; r++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 21: `        for (int c = 0; c < 9; c++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 22: `            if (g[r][c] == 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 23: `                for (int v = 1; v <= 9; v++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 24: `                    if (valid(g, r, c, v)) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 25: `                        g[r][c] = v;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 26: `                        if (solve(g)) return true;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 27: `                        g[r][c] = 0;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 28: `                    }`
  Explaination: Closes the current scope block.
- Line 29: `                }`
  Explaination: Closes the current scope block.
- Line 30: `                return false;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 31: `            }`
  Explaination: Closes the current scope block.
- Line 32: `        }`
  Explaination: Closes the current scope block.
- Line 33: `    }`
  Explaination: Closes the current scope block.
- Line 34: `    return true;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 35: `}`
  Explaination: Closes the current scope block.
- Line 36: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 37: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 38: `    vector<vector<int>> g(9, vector<int>(9));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 39: `    for (int i = 0; i < 9; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 40: `        for (int j = 0; j < 9; j++) cin >> g[i][j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 41: `    }`
  Explaination: Closes the current scope block.
- Line 42: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 43: `    if (!solve(g)) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 44: `        cout << "No solution\n";`
  Explaination: Prints formatted output to standard output.
- Line 45: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 46: `    }`
  Explaination: Closes the current scope block.
- Line 47: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 48: `    for (int i = 0; i < 9; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 49: `        for (int j = 0; j < 9; j++) cout << g[i][j] << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 50: `        cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 51: `    }`
  Explaination: Closes the current scope block.
- Line 52: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 53: `}`
  Explaination: Closes the current scope block.

## Block 36: Q36. Tower of Hanoi

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

void hanoi(int n, char src, char aux, char dst, vector<string>& moves) {
    if (n == 0) return;
    hanoi(n - 1, src, dst, aux, moves);
    moves.push_back(string("Move disk ") + to_string(n) + " from " + src + " to " + dst);
    hanoi(n - 1, aux, src, dst, moves);
}

int main() {
    int n;
    cin >> n;

    vector<string> moves;
    hanoi(n, 'A', 'B', 'C', moves);

    cout << moves.size() << "\n";
    for (auto &m : moves) cout << m << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `void hanoi(int n, char src, char aux, char dst, vector<string>& moves) {`
  Explaination: Function declaration/definition header specifying return type, name, and parameters.
- Line 5: `    if (n == 0) return;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    hanoi(n - 1, src, dst, aux, moves);`
  Explaination: Executes a single statement that updates program state.
- Line 7: `    moves.push_back(string("Move disk ") + to_string(n) + " from " + src + " to " + dst);`
  Explaination: Appends a new element to the end of the container.
- Line 8: `    hanoi(n - 1, aux, src, dst, moves);`
  Explaination: Executes a single statement that updates program state.
- Line 9: `}`
  Explaination: Closes the current scope block.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 12: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    vector<string> moves;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 16: `    hanoi(n, 'A', 'B', 'C', moves);`
  Explaination: Executes a single statement that updates program state.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    cout << moves.size() << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 19: `    for (auto &m : moves) cout << m << "\n";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 20: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 21: `}`
  Explaination: Closes the current scope block.

## Block 37: Q37. Josephus Problem

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int josephus(int n, int k) {
    if (n == 1) return 0;
    return (josephus(n - 1, k) + k) % n;
}

int main() {
    int n, k;
    cin >> n >> k;
    cout << josephus(n, k) + 1 << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int josephus(int n, int k) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    if (n == 1) return 0;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    return (josephus(n - 1, k) + k) % n;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 7: `}`
  Explaination: Closes the current scope block.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 10: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 12: `    cout << josephus(n, k) + 1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 13: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 14: `}`
  Explaination: Closes the current scope block.

## Block 38: Q38. K-th Symbol in Grammar

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int kthSymbol(int n, int k) {
    if (n == 1) return 0;
    int parent = kthSymbol(n - 1, (k + 1) / 2);
    if (k % 2 == 1) return parent;
    return 1 - parent;
}

int main() {
    int n, k;
    cin >> n >> k;
    cout << kthSymbol(n, k) << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int kthSymbol(int n, int k) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    if (n == 1) return 0;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    int parent = kthSymbol(n - 1, (k + 1) / 2);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    if (k % 2 == 1) return parent;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 8: `    return 1 - parent;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 9: `}`
  Explaination: Closes the current scope block.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 12: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 14: `    cout << kthSymbol(n, k) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 15: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 16: `}`
  Explaination: Closes the current scope block.

## Block 39: Q39. Sort a Stack Using Recursion

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

void insertSorted(stack<int>& st, int x) {
    if (st.empty() || st.top() <= x) {
        st.push(x);
        return;
    }

    int t = st.top();
    st.pop();
    insertSorted(st, x);
    st.push(t);
}

void sortStack(stack<int>& st) {
    if (st.empty()) return;

    int x = st.top();
    st.pop();
    sortStack(st);
    insertSorted(st, x);
}

int main() {
    int n;
    cin >> n;
    stack<int> st;

    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        st.push(x);
    }

    sortStack(st);

    vector<int> out;
    while (!st.empty()) {
        out.push_back(st.top());
        st.pop();
    }

    for (int i = (int)out.size() - 1; i >= 0; i--) cout << out[i] << " ";
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
- Line 4: `void insertSorted(stack<int>& st, int x) {`
  Explaination: Function declaration/definition header specifying return type, name, and parameters.
- Line 5: `    if (st.empty() || st.top() <= x) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `        st.push(x);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 7: `        return;`
  Explaination: Executes a single statement that updates program state.
- Line 8: `    }`
  Explaination: Closes the current scope block.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    int t = st.top();`
  Explaination: Accesses the top element of a stack/priority-queue.
- Line 11: `    st.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 12: `    insertSorted(st, x);`
  Explaination: Executes a single statement that updates program state.
- Line 13: `    st.push(t);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 14: `}`
  Explaination: Closes the current scope block.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `void sortStack(stack<int>& st) {`
  Explaination: Function declaration/definition header specifying return type, name, and parameters.
- Line 17: `    if (st.empty()) return;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    int x = st.top();`
  Explaination: Accesses the top element of a stack/priority-queue.
- Line 20: `    st.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 21: `    sortStack(st);`
  Explaination: Executes a single statement that updates program state.
- Line 22: `    insertSorted(st, x);`
  Explaination: Executes a single statement that updates program state.
- Line 23: `}`
  Explaination: Closes the current scope block.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 26: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 27: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 28: `    stack<int> st;`
  Explaination: Declares a stack (LIFO structure).
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 31: `        int x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 32: `        cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 33: `        st.push(x);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 34: `    }`
  Explaination: Closes the current scope block.
- Line 35: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 36: `    sortStack(st);`
  Explaination: Executes a single statement that updates program state.
- Line 37: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 38: `    vector<int> out;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 39: `    while (!st.empty()) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 40: `        out.push_back(st.top());`
  Explaination: Appends a new element to the end of the container.
- Line 41: `        st.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 42: `    }`
  Explaination: Closes the current scope block.
- Line 43: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 44: `    for (int i = (int)out.size() - 1; i >= 0; i--) cout << out[i] << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 45: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 46: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 47: `}`
  Explaination: Closes the current scope block.

## Block 40: Q40. Reverse a Stack Using Recursion

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

void insertBottom(stack<int>& st, int x) {
    if (st.empty()) {
        st.push(x);
        return;
    }
    int t = st.top();
    st.pop();
    insertBottom(st, x);
    st.push(t);
}

void reverseStack(stack<int>& st) {
    if (st.empty()) return;
    int x = st.top();
    st.pop();
    reverseStack(st);
    insertBottom(st, x);
}

int main() {
    int n;
    cin >> n;
    stack<int> st;

    for (int i = 0; i < n; i++) {
        int x;
        cin >> x;
        st.push(x);
    }

    reverseStack(st);

    while (!st.empty()) {
        cout << st.top() << " ";
        st.pop();
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
- Line 4: `void insertBottom(stack<int>& st, int x) {`
  Explaination: Function declaration/definition header specifying return type, name, and parameters.
- Line 5: `    if (st.empty()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `        st.push(x);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 7: `        return;`
  Explaination: Executes a single statement that updates program state.
- Line 8: `    }`
  Explaination: Closes the current scope block.
- Line 9: `    int t = st.top();`
  Explaination: Accesses the top element of a stack/priority-queue.
- Line 10: `    st.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 11: `    insertBottom(st, x);`
  Explaination: Executes a single statement that updates program state.
- Line 12: `    st.push(t);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 13: `}`
  Explaination: Closes the current scope block.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `void reverseStack(stack<int>& st) {`
  Explaination: Function declaration/definition header specifying return type, name, and parameters.
- Line 16: `    if (st.empty()) return;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `    int x = st.top();`
  Explaination: Accesses the top element of a stack/priority-queue.
- Line 18: `    st.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 19: `    reverseStack(st);`
  Explaination: Executes a single statement that updates program state.
- Line 20: `    insertBottom(st, x);`
  Explaination: Executes a single statement that updates program state.
- Line 21: `}`
  Explaination: Closes the current scope block.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 24: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 25: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 26: `    stack<int> st;`
  Explaination: Declares a stack (LIFO structure).
- Line 27: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 28: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 29: `        int x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 30: `        cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 31: `        st.push(x);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 32: `    }`
  Explaination: Closes the current scope block.
- Line 33: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 34: `    reverseStack(st);`
  Explaination: Executes a single statement that updates program state.
- Line 35: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 36: `    while (!st.empty()) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 37: `        cout << st.top() << " ";`
  Explaination: Prints formatted output to standard output.
- Line 38: `        st.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 39: `    }`
  Explaination: Closes the current scope block.
- Line 40: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 41: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 42: `}`
  Explaination: Closes the current scope block.
