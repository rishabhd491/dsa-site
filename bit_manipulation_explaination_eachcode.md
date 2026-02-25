# TCS_NQT_Bit_Manipulation_Full_Questions_Answers_CPP.md: Line-by-Line Code Explaination

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

## Block 2: Q1. Check i-th Bit

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n;
    int i;
    cin >> n >> i;

    cout << ((n >> i) & 1LL) << "\n";
    return 0;
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
- Line 6: `    int i;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    cin >> n >> i;`
  Explaination: Reads input values from standard input into variables.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    cout << ((n >> i) & 1LL) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 10: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 11: `}`
  Explaination: Closes the current scope block.

## Block 3: Q2. Set i-th Bit

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n;
    int i;
    cin >> n >> i;

    n = n | (1LL << i);
    cout << n << "\n";
    return 0;
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
- Line 6: `    int i;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    cin >> n >> i;`
  Explaination: Reads input values from standard input into variables.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    n = n | (1LL << i);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 10: `    cout << n << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 11: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 12: `}`
  Explaination: Closes the current scope block.

## Block 4: Q3. Clear i-th Bit

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n;
    int i;
    cin >> n >> i;

    n = n & ~(1LL << i);
    cout << n << "\n";
    return 0;
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
- Line 6: `    int i;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    cin >> n >> i;`
  Explaination: Reads input values from standard input into variables.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    n = n & ~(1LL << i);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 10: `    cout << n << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 11: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 12: `}`
  Explaination: Closes the current scope block.

## Block 5: Q4. Toggle i-th Bit

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n;
    int i;
    cin >> n >> i;

    n ^= (1LL << i);
    cout << n << "\n";
    return 0;
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
- Line 6: `    int i;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    cin >> n >> i;`
  Explaination: Reads input values from standard input into variables.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    n ^= (1LL << i);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 10: `    cout << n << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 11: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 12: `}`
  Explaination: Closes the current scope block.

## Block 6: Q5. Check Odd or Even Using Bit

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n;
    cin >> n;

    cout << ((n & 1LL) ? "Odd" : "Even") << "\n";
    return 0;
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
- Line 8: `    cout << ((n & 1LL) ? "Odd" : "Even") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 9: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 10: `}`
  Explaination: Closes the current scope block.

## Block 7: Q6. Check Power of 2

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

## Block 8: Q7. Check Power of 4

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n;
    cin >> n;

    bool power2 = (n > 0) && ((n & (n - 1)) == 0);
    bool power4 = power2 && (n & 0x5555555555555555LL);

    cout << (power4 ? "Yes" : "No") << "\n";
    return 0;
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
- Line 8: `    bool power2 = (n > 0) && ((n & (n - 1)) == 0);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    bool power4 = power2 && (n & 0x5555555555555555LL);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    cout << (power4 ? "Yes" : "No") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 12: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 13: `}`
  Explaination: Closes the current scope block.

## Block 9: Q8. Count Set Bits (Simple)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    unsigned long long n;
    cin >> n;

    int cnt = 0;
    while (n > 0) {
        cnt += (int)(n & 1ULL);
        n >>= 1;
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
- Line 5: `    unsigned long long n;`
  Explaination: Executes a single statement that updates program state.
- Line 6: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    int cnt = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    while (n > 0) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 10: `        cnt += (int)(n & 1ULL);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 11: `        n >>= 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: `    }`
  Explaination: Closes the current scope block.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    cout << cnt << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 15: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 16: `}`
  Explaination: Closes the current scope block.

## Block 10: Q9. Count Set Bits (Brian Kernighan)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    unsigned long long n;
    cin >> n;

    int cnt = 0;
    while (n) {
        n &= (n - 1);
        cnt++;
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
- Line 5: `    unsigned long long n;`
  Explaination: Executes a single statement that updates program state.
- Line 6: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    int cnt = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    while (n) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 10: `        n &= (n - 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 11: `        cnt++;`
  Explaination: Executes a single statement that updates program state.
- Line 12: `    }`
  Explaination: Closes the current scope block.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    cout << cnt << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 15: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 16: `}`
  Explaination: Closes the current scope block.

## Block 11: Q10. Rightmost Set Bit Value

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n;
    cin >> n;

    if (n == 0) cout << 0 << "\n";
    else cout << (n & -n) << "\n";

    return 0;
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
- Line 8: `    if (n == 0) cout << 0 << "\n";`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 9: `    else cout << (n & -n) << "\n";`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 12: `}`
  Explaination: Closes the current scope block.

## Block 12: Q11. Position of Rightmost Set Bit

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    unsigned long long n;
    cin >> n;

    if (n == 0) {
        cout << -1 << "\n";
        return 0;
    }

    int pos = 1;
    while ((n & 1ULL) == 0) {
        n >>= 1;
        pos++;
    }

    cout << pos << "\n";
    return 0;
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
- Line 5: `    unsigned long long n;`
  Explaination: Executes a single statement that updates program state.
- Line 6: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    if (n == 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 9: `        cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 10: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 11: `    }`
  Explaination: Closes the current scope block.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    int pos = 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `    while ((n & 1ULL) == 0) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 15: `        n >>= 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `        pos++;`
  Explaination: Executes a single statement that updates program state.
- Line 17: `    }`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    cout << pos << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 20: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 21: `}`
  Explaination: Closes the current scope block.

## Block 13: Q12. Clear Rightmost Set Bit

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n;
    cin >> n;

    cout << (n & (n - 1)) << "\n";
    return 0;
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
- Line 8: `    cout << (n & (n - 1)) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 9: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 10: `}`
  Explaination: Closes the current scope block.

## Block 14: Q13. Set Rightmost Unset Bit

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n;
    cin >> n;

    cout << (n | (n + 1)) << "\n";
    return 0;
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
- Line 8: `    cout << (n | (n + 1)) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 9: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 10: `}`
  Explaination: Closes the current scope block.

## Block 15: Q14. Toggle Bits in Range [L, R]

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n;
    int l, r;
    cin >> n >> l >> r;

    long long mask = ((1LL << (r - l + 1)) - 1) << l;
    cout << (n ^ mask) << "\n";

    return 0;
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
- Line 6: `    int l, r;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    cin >> n >> l >> r;`
  Explaination: Reads input values from standard input into variables.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    long long mask = ((1LL << (r - l + 1)) - 1) << l;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: `    cout << (n ^ mask) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 13: `}`
  Explaination: Closes the current scope block.

## Block 16: Q15. Swap Two Numbers Without Temp (XOR)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long a, b;
    cin >> a >> b;

    if (&a != &b) {
        a ^= b;
        b ^= a;
        a ^= b;
    }

    cout << a << " " << b << "\n";
    return 0;
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
- Line 8: `    if (&a != &b) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 9: `        a ^= b;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 10: `        b ^= a;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 11: `        a ^= b;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: `    }`
  Explaination: Closes the current scope block.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    cout << a << " " << b << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 15: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 16: `}`
  Explaination: Closes the current scope block.

## Block 17: Q16. Single Number (Others Appear Twice)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    long long xr = 0;
    for (int i = 0; i < n; i++) {
        long long x;
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
- Line 5: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    long long xr = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        long long x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `        cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 12: `        xr ^= x;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 13: `    }`
  Explaination: Closes the current scope block.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    cout << xr << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 16: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 17: `}`
  Explaination: Closes the current scope block.

## Block 18: Q17. Two Unique Numbers (Others Appear Twice)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    vector<long long> a(n);
    long long xr = 0;

    for (int i = 0; i < n; i++) {
        cin >> a[i];
        xr ^= a[i];
    }

    long long diffBit = xr & -xr;
    long long x = 0, y = 0;

    for (long long v : a) {
        if (v & diffBit) x ^= v;
        else y ^= v;
    }

    if (x > y) swap(x, y);
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
- Line 5: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    long long xr = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        cin >> a[i];`
  Explaination: Reads input values from standard input into variables.
- Line 13: `        xr ^= a[i];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: `    }`
  Explaination: Closes the current scope block.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    long long diffBit = xr & -xr;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: `    long long x = 0, y = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    for (long long v : a) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 20: `        if (v & diffBit) x ^= v;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: `        else y ^= v;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 22: `    }`
  Explaination: Closes the current scope block.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    if (x > y) swap(x, y);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 25: `    cout << x << " " << y << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 26: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 27: `}`
  Explaination: Closes the current scope block.

## Block 19: Q18. Single Number (Others Appear Thrice)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<long long> a(n);
    for (auto &x : a) cin >> x;

    long long ans = 0;
    for (int bit = 0; bit < 63; bit++) {
        long long cnt = 0;
        for (long long x : a) {
            if ((x >> bit) & 1LL) cnt++;
        }
        if (cnt % 3 != 0) ans |= (1LL << bit);
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
- Line 7: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    long long ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    for (int bit = 0; bit < 63; bit++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        long long cnt = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `        for (long long x : a) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `            if ((x >> bit) & 1LL) cnt++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: `        }`
  Explaination: Closes the current scope block.
- Line 16: `        if (cnt % 3 != 0) ans |= (1LL << bit);`
  Explaination: Checks a condition and executes this branch when the condition is true.
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

## Block 20: Q19. Missing Number from 0..N

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    int xr = 0;
    for (int i = 0; i <= n; i++) xr ^= i;

    for (int i = 0; i < n; i++) {
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
- Line 5: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    int xr = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    for (int i = 0; i <= n; i++) xr ^= i;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        int x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `        cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 14: `        xr ^= x;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    cout << xr << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 18: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 19: `}`
  Explaination: Closes the current scope block.

## Block 21: Q20. XOR from 1 to N

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

long long xor1ToN(long long n) {
    if (n % 4 == 0) return n;
    if (n % 4 == 1) return 1;
    if (n % 4 == 2) return n + 1;
    return 0;
}

int main() {
    long long n;
    cin >> n;
    cout << xor1ToN(n) << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `long long xor1ToN(long long n) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    if (n % 4 == 0) return n;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    if (n % 4 == 1) return 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 7: `    if (n % 4 == 2) return n + 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 8: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 9: `}`
  Explaination: Closes the current scope block.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 12: `    long long n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 14: `    cout << xor1ToN(n) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 15: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 16: `}`
  Explaination: Closes the current scope block.

## Block 22: Q21. XOR in Range [L, R]

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

long long xor1ToN(long long n) {
    if (n % 4 == 0) return n;
    if (n % 4 == 1) return 1;
    if (n % 4 == 2) return n + 1;
    return 0;
}

int main() {
    long long l, r;
    cin >> l >> r;

    cout << (xor1ToN(r) ^ xor1ToN(l - 1)) << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `long long xor1ToN(long long n) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    if (n % 4 == 0) return n;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    if (n % 4 == 1) return 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 7: `    if (n % 4 == 2) return n + 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 8: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 9: `}`
  Explaination: Closes the current scope block.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 12: `    long long l, r;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    cin >> l >> r;`
  Explaination: Reads input values from standard input into variables.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    cout << (xor1ToN(r) ^ xor1ToN(l - 1)) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 16: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 17: `}`
  Explaination: Closes the current scope block.

## Block 23: Q22. Bitwise AND of Range [L, R]

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long l, r;
    cin >> l >> r;

    int shift = 0;
    while (l < r) {
        l >>= 1;
        r >>= 1;
        shift++;
    }

    cout << (l << shift) << "\n";
    return 0;
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
- Line 5: `    long long l, r;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> l >> r;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    int shift = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    while (l < r) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 10: `        l >>= 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 11: `        r >>= 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: `        shift++;`
  Explaination: Executes a single statement that updates program state.
- Line 13: `    }`
  Explaination: Closes the current scope block.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    cout << (l << shift) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 16: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 17: `}`
  Explaination: Closes the current scope block.

## Block 24: Q23. Add Two Integers Without '+'

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long a, b;
    cin >> a >> b;

    while (b != 0) {
        long long carry = (a & b) << 1;
        a = a ^ b;
        b = carry;
    }

    cout << a << "\n";
    return 0;
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
- Line 8: `    while (b != 0) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 9: `        long long carry = (a & b) << 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: `        a = a ^ b;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 11: `        b = carry;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: `    }`
  Explaination: Closes the current scope block.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    cout << a << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 15: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 16: `}`
  Explaination: Closes the current scope block.

## Block 25: Q24. Subtract Two Integers Without '-'

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

long long addNoPlus(long long a, long long b) {
    while (b != 0) {
        long long carry = (a & b) << 1;
        a ^= b;
        b = carry;
    }
    return a;
}

int main() {
    long long a, b;
    cin >> a >> b;

    // a - b = a + (~b + 1)
    long long negB = addNoPlus(~b, 1);
    cout << addNoPlus(a, negB) << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `long long addNoPlus(long long a, long long b) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    while (b != 0) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 6: `        long long carry = (a & b) << 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `        a ^= b;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 8: `        b = carry;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 9: `    }`
  Explaination: Closes the current scope block.
- Line 10: `    return a;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 11: `}`
  Explaination: Closes the current scope block.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 14: `    long long a, b;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: `    cin >> a >> b;`
  Explaination: Reads input values from standard input into variables.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    // a - b = a + (~b + 1)`
  Explaination: Comment line documenting intent for the next statement(s).
- Line 18: `    long long negB = addNoPlus(~b, 1);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `    cout << addNoPlus(a, negB) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 20: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 21: `}`
  Explaination: Closes the current scope block.

## Block 26: Q25. Multiply Using Bit Shifts

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long a, b;
    cin >> a >> b;

    bool neg = (a < 0) ^ (b < 0);
    unsigned long long x = llabs(a), y = llabs(b);

    unsigned long long res = 0;
    while (y > 0) {
        if (y & 1ULL) res += x;
        x <<= 1;
        y >>= 1;
    }

    long long ans = (long long)res;
    if (neg) ans = -ans;

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
- Line 5: `    long long a, b;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> a >> b;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    bool neg = (a < 0) ^ (b < 0);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    unsigned long long x = llabs(a), y = llabs(b);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    unsigned long long res = 0;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: `    while (y > 0) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 13: `        if (y & 1ULL) res += x;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `        x <<= 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `        y >>= 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    long long ans = (long long)res;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `    if (neg) ans = -ans;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 22: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 23: `}`
  Explaination: Closes the current scope block.

## Block 27: Q26. Integer Division Using Bits

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long a, b;
    cin >> a >> b;

    if (b == 0) {
        cout << "Invalid\n";
        return 0;
    }

    bool neg = (a < 0) ^ (b < 0);
    unsigned long long x = llabs(a), y = llabs(b);

    unsigned long long q = 0;
    for (int bit = 63; bit >= 0; bit--) {
        if ((y << bit) >> bit != y) continue; // overflow guard for shift
        if ((y << bit) <= x) {
            x -= (y << bit);
            q |= (1ULL << bit);
        }
    }

    long long ans = (long long)q;
    if (neg) ans = -ans;

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
- Line 5: `    long long a, b;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> a >> b;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    if (b == 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 9: `        cout << "Invalid\n";`
  Explaination: Prints formatted output to standard output.
- Line 10: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 11: `    }`
  Explaination: Closes the current scope block.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    bool neg = (a < 0) ^ (b < 0);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `    unsigned long long x = llabs(a), y = llabs(b);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    unsigned long long q = 0;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `    for (int bit = 63; bit >= 0; bit--) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: `        if ((y << bit) >> bit != y) continue; // overflow guard for shift`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 19: `        if ((y << bit) <= x) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 20: `            x -= (y << bit);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: `            q |= (1ULL << bit);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: `        }`
  Explaination: Closes the current scope block.
- Line 23: `    }`
  Explaination: Closes the current scope block.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    long long ans = (long long)q;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 26: `    if (neg) ans = -ans;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 27: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 28: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 29: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 30: `}`
  Explaination: Closes the current scope block.

## Block 28: Q27. Count Total Set Bits from 1 to N (Optimized)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

long long countBits1ToN(long long n) {
    if (n <= 0) return 0;

    long long x = 0;
    while ((1LL << (x + 1)) <= n) x++;

    long long bitsUpto2x = x * (1LL << (x - 1));
    if (x == 0) bitsUpto2x = 0;

    long long msb2xToN = n - (1LL << x) + 1;
    long long rest = n - (1LL << x);

    return bitsUpto2x + msb2xToN + countBits1ToN(rest);
}

int main() {
    long long n;
    cin >> n;

    cout << countBits1ToN(n) << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `long long countBits1ToN(long long n) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    if (n <= 0) return 0;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 7: `    long long x = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 8: `    while ((1LL << (x + 1)) <= n) x++;`
  Explaination: Loop that repeats while the given condition remains true.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    long long bitsUpto2x = x * (1LL << (x - 1));`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    if (x == 0) bitsUpto2x = 0;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    long long msb2xToN = n - (1LL << x) + 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `    long long rest = n - (1LL << x);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    return bitsUpto2x + msb2xToN + countBits1ToN(rest);`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 17: `}`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 20: `    long long n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    cout << countBits1ToN(n) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 24: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 25: `}`
  Explaination: Closes the current scope block.

## Block 29: Q28. Count Bits for Every Number 0..N

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> bits(n + 1, 0);
    for (int i = 1; i <= n; i++) bits[i] = bits[i >> 1] + (i & 1);

    for (int x : bits) cout << x << " ";
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
- Line 8: `    vector<int> bits(n + 1, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (int i = 1; i <= n; i++) bits[i] = bits[i >> 1] + (i & 1);`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    for (int x : bits) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 13: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 14: `}`
  Explaination: Closes the current scope block.

## Block 30: Q29. Most Significant Set Bit Position

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    unsigned long long n;
    cin >> n;

    if (n == 0) {
        cout << -1 << "\n";
        return 0;
    }

    int pos = 0;
    while (n > 0) {
        pos++;
        n >>= 1;
    }

    cout << pos << "\n";
    return 0;
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
- Line 5: `    unsigned long long n;`
  Explaination: Executes a single statement that updates program state.
- Line 6: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    if (n == 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 9: `        cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 10: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 11: `    }`
  Explaination: Closes the current scope block.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    int pos = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `    while (n > 0) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 15: `        pos++;`
  Explaination: Executes a single statement that updates program state.
- Line 16: `        n >>= 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `    }`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    cout << pos << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 20: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 21: `}`
  Explaination: Closes the current scope block.

## Block 31: Q30. Smallest Power of 2 Greater Than or Equal to N

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    unsigned long long n;
    cin >> n;

    if (n == 0) {
        cout << 1 << "\n";
        return 0;
    }

    n--;
    n |= n >> 1;
    n |= n >> 2;
    n |= n >> 4;
    n |= n >> 8;
    n |= n >> 16;
    n |= n >> 32;
    n++;

    cout << n << "\n";
    return 0;
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
- Line 5: `    unsigned long long n;`
  Explaination: Executes a single statement that updates program state.
- Line 6: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    if (n == 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 9: `        cout << 1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 10: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 11: `    }`
  Explaination: Closes the current scope block.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    n--;`
  Explaination: Executes a single statement that updates program state.
- Line 14: `    n |= n >> 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `    n |= n >> 2;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `    n |= n >> 4;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `    n |= n >> 8;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: `    n |= n >> 16;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `    n |= n >> 32;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `    n++;`
  Explaination: Executes a single statement that updates program state.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    cout << n << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 23: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 24: `}`
  Explaination: Closes the current scope block.

## Block 32: Q31. Check Opposite Signs

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long a, b;
    cin >> a >> b;

    cout << (((a ^ b) < 0) ? "Yes" : "No") << "\n";
    return 0;
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
- Line 8: `    cout << (((a ^ b) < 0) ? "Yes" : "No") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 9: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 10: `}`
  Explaination: Closes the current scope block.

## Block 33: Q32. Hamming Distance Between Two Integers

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    unsigned long long a, b;
    cin >> a >> b;

    unsigned long long x = a ^ b;
    int dist = 0;
    while (x) {
        x &= (x - 1);
        dist++;
    }

    cout << dist << "\n";
    return 0;
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
- Line 5: `    unsigned long long a, b;`
  Explaination: Executes a single statement that updates program state.
- Line 6: `    cin >> a >> b;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    unsigned long long x = a ^ b;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 9: `    int dist = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: `    while (x) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 11: `        x &= (x - 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: `        dist++;`
  Explaination: Executes a single statement that updates program state.
- Line 13: `    }`
  Explaination: Closes the current scope block.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    cout << dist << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 16: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 17: `}`
  Explaination: Closes the current scope block.

## Block 34: Q33. Total Hamming Distance in Array

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    long long ans = 0;
    for (int bit = 0; bit < 31; bit++) {
        long long ones = 0;
        for (int x : a) {
            if ((x >> bit) & 1) ones++;
        }
        long long zeros = n - ones;
        ans += ones * zeros;
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
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    long long ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    for (int bit = 0; bit < 31; bit++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        long long ones = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `        for (int x : a) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `            if ((x >> bit) & 1) ones++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `        }`
  Explaination: Closes the current scope block.
- Line 17: `        long long zeros = n - ones;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: `        ans += ones * zeros;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `    }`
  Explaination: Closes the current scope block.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 22: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 23: `}`
  Explaination: Closes the current scope block.

## Block 35: Q34. Generate All Subsets (Bitmask)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    int total = 1 << n;

    for (int mask = 0; mask < total; mask++) {
        for (int i = 0; i < n; i++) {
            if (mask & (1 << i)) cout << a[i] << " ";
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
- Line 5: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    int total = 1 << n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    for (int mask = 0; mask < total; mask++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `            if (mask & (1 << i)) cout << a[i] << " ";`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `        }`
  Explaination: Closes the current scope block.
- Line 17: `        cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 21: `}`
  Explaination: Closes the current scope block.

## Block 36: Q35. Subset Sum Existence (Bitmask, Small N)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    long long k;
    cin >> n >> k;

    vector<long long> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    int total = 1 << n;
    for (int mask = 0; mask < total; mask++) {
        long long sum = 0;
        for (int i = 0; i < n; i++) {
            if (mask & (1 << i)) sum += a[i];
        }
        if (sum == k) {
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
- Line 6: `    long long k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 10: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    int total = 1 << n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    for (int mask = 0; mask < total; mask++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        long long sum = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: `        for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `            if (mask & (1 << i)) sum += a[i];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `        }`
  Explaination: Closes the current scope block.
- Line 18: `        if (sum == k) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 19: `            cout << "Yes\n";`
  Explaination: Prints formatted output to standard output.
- Line 20: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
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

## Block 37: Q36. Gray Code Generation (n bits)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    int total = 1 << n;
    for (int i = 0; i < total; i++) {
        int g = i ^ (i >> 1);
        cout << g << " ";
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
- Line 5: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    int total = 1 << n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    for (int i = 0; i < total; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        int g = i ^ (i >> 1);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `        cout << g << " ";`
  Explaination: Prints formatted output to standard output.
- Line 12: `    }`
  Explaination: Closes the current scope block.
- Line 13: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 16: `}`
  Explaination: Closes the current scope block.

## Block 38: Q37. Check if Binary String Has Alternate Bits

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    unsigned long long n;
    cin >> n;

    unsigned long long x = n ^ (n >> 1);
    bool ok = (x & (x + 1)) == 0;

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
- Line 5: `    unsigned long long n;`
  Explaination: Executes a single statement that updates program state.
- Line 6: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    unsigned long long x = n ^ (n >> 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 9: `    bool ok = (x & (x + 1)) == 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    cout << (ok ? "Yes" : "No") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 12: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 13: `}`
  Explaination: Closes the current scope block.

## Block 39: Q38. Find Missing and Repeating Number (XOR Method)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> a(n);
    int xr = 0;

    for (int i = 0; i < n; i++) {
        cin >> a[i];
        xr ^= a[i];
    }
    for (int i = 1; i <= n; i++) xr ^= i;

    int diffBit = xr & -xr;
    int g1 = 0, g2 = 0;

    for (int x : a) {
        if (x & diffBit) g1 ^= x;
        else g2 ^= x;
    }
    for (int i = 1; i <= n; i++) {
        if (i & diffBit) g1 ^= i;
        else g2 ^= i;
    }

    int repeating = -1, missing = -1;
    for (int x : a) {
        if (x == g1) {
            repeating = g1;
            missing = g2;
            break;
        }
        if (x == g2) {
            repeating = g2;
            missing = g1;
            break;
        }
    }

    cout << missing << " " << repeating << "\n";
    return 0;
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
- Line 8: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    int xr = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        cin >> a[i];`
  Explaination: Reads input values from standard input into variables.
- Line 13: `        xr ^= a[i];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: `    }`
  Explaination: Closes the current scope block.
- Line 15: `    for (int i = 1; i <= n; i++) xr ^= i;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    int diffBit = xr & -xr;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: `    int g1 = 0, g2 = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    for (int x : a) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 21: `        if (x & diffBit) g1 ^= x;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 22: `        else g2 ^= x;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 23: `    }`
  Explaination: Closes the current scope block.
- Line 24: `    for (int i = 1; i <= n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 25: `        if (i & diffBit) g1 ^= i;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 26: `        else g2 ^= i;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 27: `    }`
  Explaination: Closes the current scope block.
- Line 28: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 29: `    int repeating = -1, missing = -1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 30: `    for (int x : a) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 31: `        if (x == g1) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 32: `            repeating = g1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 33: `            missing = g2;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 34: `            break;`
  Explaination: Exits the nearest loop or switch block immediately.
- Line 35: `        }`
  Explaination: Closes the current scope block.
- Line 36: `        if (x == g2) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 37: `            repeating = g2;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 38: `            missing = g1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 39: `            break;`
  Explaination: Exits the nearest loop or switch block immediately.
- Line 40: `        }`
  Explaination: Closes the current scope block.
- Line 41: `    }`
  Explaination: Closes the current scope block.
- Line 42: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 43: `    cout << missing << " " << repeating << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 44: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 45: `}`
  Explaination: Closes the current scope block.

## Block 40: Q39. Unique Lowercase Characters in String (Bitmask)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin >> s;

    int mask = 0;
    for (char c : s) {
        int bit = c - 'a';
        if (mask & (1 << bit)) {
            cout << "No\n";
            return 0;
        }
        mask |= (1 << bit);
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
- Line 6: `    cin >> s;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    int mask = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    for (char c : s) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        int bit = c - 'a';`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `        if (mask & (1 << bit)) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 12: `            cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 13: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 14: `        }`
  Explaination: Closes the current scope block.
- Line 15: `        mask |= (1 << bit);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    cout << "Yes\n";`
  Explaination: Prints formatted output to standard output.
- Line 19: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 20: `}`
  Explaination: Closes the current scope block.

## Block 41: Q40. Story-Based: Access Permission Bitmask

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int mask, q;
    cin >> mask >> q;

    while (q--) {
        string op;
        int x;
        cin >> op >> x;

        if (op == "GRANT") {
            mask |= (1 << x);
        } else if (op == "REVOKE") {
            mask &= ~(1 << x);
        } else {
            cout << ((mask & (1 << x)) ? "Yes" : "No") << "\n";
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
- Line 5: `    int mask, q;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> mask >> q;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    while (q--) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 9: `        string op;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 10: `        int x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `        cin >> op >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `        if (op == "GRANT") {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `            mask |= (1 << x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `        } else if (op == "REVOKE") {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 16: `            mask &= ~(1 << x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 18: `            cout << ((mask & (1 << x)) ? "Yes" : "No") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 19: `        }`
  Explaination: Closes the current scope block.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 23: `}`
  Explaination: Closes the current scope block.

## Block 42: Q41. Story-Based: Minimum Button Presses (XOR Distance)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    unsigned long long a, b;
    cin >> a >> b;

    unsigned long long x = a ^ b;
    int ans = 0;
    while (x) {
        x &= (x - 1);
        ans++;
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
- Line 5: `    unsigned long long a, b;`
  Explaination: Executes a single statement that updates program state.
- Line 6: `    cin >> a >> b;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    unsigned long long x = a ^ b;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 9: `    int ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: `    while (x) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 11: `        x &= (x - 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: `        ans++;`
  Explaination: Executes a single statement that updates program state.
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

## Block 43: Q42. Maximum XOR Pair (O(n^2) for NQT constraints)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    int best = 0;
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            best = max(best, a[i] ^ a[j]);
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
- Line 6: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    int best = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        for (int j = i + 1; j < n; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `            best = max(best, a[i] ^ a[j]);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `        }`
  Explaination: Closes the current scope block.
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

## Block 44: Q43. Count Subarrays with XOR = K

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
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
- Line 5: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    unordered_map<int, long long> freq;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 12: `    freq.reserve(2 * n + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 13: `    freq[0] = 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    int px = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `    long long ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    for (int x : a) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 19: `        px ^= x;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `        int need = px ^ k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: `        if (freq.count(need)) ans += freq[need];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 22: `        freq[px]++;`
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

## Block 45: Q44. Longest Subarray with XOR = K

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
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
        if (first.count(need)) {
            best = max(best, i - first[need]);
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
- Line 5: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    unordered_map<int, int> first;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 12: `    first.reserve(2 * n + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 13: `    first[0] = -1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    int px = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `    int best = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 19: `        px ^= a[i];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `        if (!first.count(px)) first[px] = i;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `        int need = px ^ k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 23: `        if (first.count(need)) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 24: `            best = max(best, i - first[need]);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 25: `        }`
  Explaination: Closes the current scope block.
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

## Block 46: Q45. Count Numbers in Array Having Exactly K Set Bits

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    int ans = 0;
    for (int i = 0; i < n; i++) {
        unsigned long long x;
        cin >> x;

        int bits = __builtin_popcountll(x);
        if (bits == k) ans++;
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
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    int ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        unsigned long long x;`
  Explaination: Executes a single statement that updates program state.
- Line 11: `        cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `        int bits = __builtin_popcountll(x);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `        if (bits == k) ans++;`
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
