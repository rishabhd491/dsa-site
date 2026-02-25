# TCS_NQT_2D_Array_Matrix_Full_Questions_Answers_CPP.md: Line-by-Line Code Explaination

This file explains each C++ code block line-by-line from the source topic file.

## Block 1: General

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

bool inBounds(int r, int c, int R, int C) {
    return r >= 0 && r < R && c >= 0 && c < C;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `bool inBounds(int r, int c, int R, int C) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    return r >= 0 && r < R && c >= 0 && c < C;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 6: `}`
  Explaination: Closes the current scope block.

## Block 2: Q1. Sum of All Elements in Matrix

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;

    long long sum = 0;
    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            long long x;
            cin >> x;
            sum += x;
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
- Line 5: `    int r, c;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> r >> c;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    long long sum = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    for (int i = 0; i < r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        for (int j = 0; j < c; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: `            long long x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `            cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 13: `            sum += x;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: `        }`
  Explaination: Closes the current scope block.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    cout << sum << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 18: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 19: `}`
  Explaination: Closes the current scope block.

## Block 3: Q2. Row-wise and Column-wise Sum

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;

    vector<vector<long long>> a(r, vector<long long>(c));
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++) cin >> a[i][j];

    for (int i = 0; i < r; i++) {
        long long s = 0;
        for (int j = 0; j < c; j++) s += a[i][j];
        cout << s << " ";
    }
    cout << "\n";

    for (int j = 0; j < c; j++) {
        long long s = 0;
        for (int i = 0; i < r; i++) s += a[i][j];
        cout << s << " ";
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
- Line 5: `    int r, c;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> r >> c;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    vector<vector<long long>> a(r, vector<long long>(c));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (int i = 0; i < r; i++)`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        for (int j = 0; j < c; j++) cin >> a[i][j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    for (int i = 0; i < r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        long long s = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `        for (int j = 0; j < c; j++) s += a[i][j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        cout << s << " ";`
  Explaination: Prints formatted output to standard output.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    for (int j = 0; j < c; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 20: `        long long s = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: `        for (int i = 0; i < r; i++) s += a[i][j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 22: `        cout << s << " ";`
  Explaination: Prints formatted output to standard output.
- Line 23: `    }`
  Explaination: Closes the current scope block.
- Line 24: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 27: `}`
  Explaination: Closes the current scope block.

## Block 4: Q3. Largest and Smallest Element in Matrix

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;

    long long mn = LLONG_MAX, mx = LLONG_MIN;
    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            long long x;
            cin >> x;
            mn = min(mn, x);
            mx = max(mx, x);
        }
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
- Line 5: `    int r, c;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> r >> c;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    long long mn = LLONG_MAX, mx = LLONG_MIN;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    for (int i = 0; i < r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        for (int j = 0; j < c; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: `            long long x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `            cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 13: `            mn = min(mn, x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: `            mx = max(mx, x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `        }`
  Explaination: Closes the current scope block.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    cout << mn << " " << mx << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 19: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 20: `}`
  Explaination: Closes the current scope block.

## Block 5: Q4. Matrix Transpose

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;

    vector<vector<long long>> a(r, vector<long long>(c));
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++) cin >> a[i][j];

    for (int j = 0; j < c; j++) {
        for (int i = 0; i < r; i++) cout << a[i][j] << " ";
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
- Line 8: `    vector<vector<long long>> a(r, vector<long long>(c));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (int i = 0; i < r; i++)`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        for (int j = 0; j < c; j++) cin >> a[i][j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    for (int j = 0; j < c; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        for (int i = 0; i < r; i++) cout << a[i][j] << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 18: `}`
  Explaination: Closes the current scope block.

## Block 6: Q5. In-Place Transpose of Square Matrix

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    vector<vector<long long>> a(n, vector<long long>(n));
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++) cin >> a[i][j];

    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            swap(a[i][j], a[j][i]);
        }
    }

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) cout << a[i][j] << " ";
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
- Line 8: `    vector<vector<long long>> a(n, vector<long long>(n));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (int i = 0; i < n; i++)`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        for (int j = 0; j < n; j++) cin >> a[i][j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        for (int j = i + 1; j < n; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `            swap(a[i][j], a[j][i]);`
  Explaination: Executes a single statement that updates program state.
- Line 15: `        }`
  Explaination: Closes the current scope block.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 19: `        for (int j = 0; j < n; j++) cout << a[i][j] << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 20: `        cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 21: `    }`
  Explaination: Closes the current scope block.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 24: `}`
  Explaination: Closes the current scope block.

## Block 7: Q6. Rotate Matrix 90 Degree Clockwise

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    vector<vector<int>> a(n, vector<int>(n));
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++) cin >> a[i][j];

    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) swap(a[i][j], a[j][i]);
    }

    for (int i = 0; i < n; i++) reverse(a[i].begin(), a[i].end());

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) cout << a[i][j] << " ";
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
- Line 8: `    vector<vector<int>> a(n, vector<int>(n));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (int i = 0; i < n; i++)`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        for (int j = 0; j < n; j++) cin >> a[i][j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        for (int j = i + 1; j < n; j++) swap(a[i][j], a[j][i]);`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `    }`
  Explaination: Closes the current scope block.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    for (int i = 0; i < n; i++) reverse(a[i].begin(), a[i].end());`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 19: `        for (int j = 0; j < n; j++) cout << a[i][j] << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 20: `        cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 21: `    }`
  Explaination: Closes the current scope block.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 24: `}`
  Explaination: Closes the current scope block.

## Block 8: Q7. Rotate Matrix 90 Degree Anti-Clockwise

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    vector<vector<int>> a(n, vector<int>(n));
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++) cin >> a[i][j];

    for (int i = 0; i < n; i++) reverse(a[i].begin(), a[i].end());
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) swap(a[i][j], a[j][i]);
    }

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) cout << a[i][j] << " ";
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
- Line 8: `    vector<vector<int>> a(n, vector<int>(n));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (int i = 0; i < n; i++)`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        for (int j = 0; j < n; j++) cin >> a[i][j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    for (int i = 0; i < n; i++) reverse(a[i].begin(), a[i].end());`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        for (int j = i + 1; j < n; j++) swap(a[i][j], a[j][i]);`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: `        for (int j = 0; j < n; j++) cout << a[i][j] << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 19: `        cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 23: `}`
  Explaination: Closes the current scope block.

## Block 9: Q8. Spiral Traversal

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;

    vector<vector<int>> a(r, vector<int>(c));
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++) cin >> a[i][j];

    int top = 0, bottom = r - 1, left = 0, right = c - 1;

    while (top <= bottom && left <= right) {
        for (int j = left; j <= right; j++) cout << a[top][j] << " ";
        top++;

        for (int i = top; i <= bottom; i++) cout << a[i][right] << " ";
        right--;

        if (top <= bottom) {
            for (int j = right; j >= left; j--) cout << a[bottom][j] << " ";
            bottom--;
        }

        if (left <= right) {
            for (int i = bottom; i >= top; i--) cout << a[i][left] << " ";
            left++;
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
- Line 5: `    int r, c;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> r >> c;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    vector<vector<int>> a(r, vector<int>(c));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (int i = 0; i < r; i++)`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        for (int j = 0; j < c; j++) cin >> a[i][j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    int top = 0, bottom = r - 1, left = 0, right = c - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    while (top <= bottom && left <= right) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 15: `        for (int j = left; j <= right; j++) cout << a[top][j] << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `        top++;`
  Explaination: Executes a single statement that updates program state.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `        for (int i = top; i <= bottom; i++) cout << a[i][right] << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 19: `        right--;`
  Explaination: Executes a single statement that updates program state.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `        if (top <= bottom) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 22: `            for (int j = right; j >= left; j--) cout << a[bottom][j] << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 23: `            bottom--;`
  Explaination: Executes a single statement that updates program state.
- Line 24: `        }`
  Explaination: Closes the current scope block.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `        if (left <= right) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 27: `            for (int i = bottom; i >= top; i--) cout << a[i][left] << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 28: `            left++;`
  Explaination: Executes a single statement that updates program state.
- Line 29: `        }`
  Explaination: Closes the current scope block.
- Line 30: `    }`
  Explaination: Closes the current scope block.
- Line 31: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 32: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 33: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 34: `}`
  Explaination: Closes the current scope block.

## Block 10: Q9. Boundary Traversal

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;

    vector<vector<int>> a(r, vector<int>(c));
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++) cin >> a[i][j];

    if (r == 1) {
        for (int j = 0; j < c; j++) cout << a[0][j] << " ";
        cout << "\n";
        return 0;
    }
    if (c == 1) {
        for (int i = 0; i < r; i++) cout << a[i][0] << " ";
        cout << "\n";
        return 0;
    }

    for (int j = 0; j < c; j++) cout << a[0][j] << " ";
    for (int i = 1; i < r; i++) cout << a[i][c - 1] << " ";
    for (int j = c - 2; j >= 0; j--) cout << a[r - 1][j] << " ";
    for (int i = r - 2; i >= 1; i--) cout << a[i][0] << " ";

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
- Line 5: `    int r, c;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> r >> c;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    vector<vector<int>> a(r, vector<int>(c));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (int i = 0; i < r; i++)`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        for (int j = 0; j < c; j++) cin >> a[i][j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    if (r == 1) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: `        for (int j = 0; j < c; j++) cout << a[0][j] << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 15: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: `    if (c == 1) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 18: `        for (int i = 0; i < r; i++) cout << a[i][0] << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 19: `        cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 20: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 21: `    }`
  Explaination: Closes the current scope block.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    for (int j = 0; j < c; j++) cout << a[0][j] << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 24: `    for (int i = 1; i < r; i++) cout << a[i][c - 1] << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 25: `    for (int j = c - 2; j >= 0; j--) cout << a[r - 1][j] << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 26: `    for (int i = r - 2; i >= 1; i--) cout << a[i][0] << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 27: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 28: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 29: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 30: `}`
  Explaination: Closes the current scope block.

## Block 11: Q10. Main and Secondary Diagonal Sum

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    vector<vector<long long>> a(n, vector<long long>(n));
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++) cin >> a[i][j];

    long long d1 = 0, d2 = 0;
    for (int i = 0; i < n; i++) {
        d1 += a[i][i];
        d2 += a[i][n - 1 - i];
    }

    cout << d1 << " " << d2 << "\n";
    return 0;
}
```

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
- Line 8: `    vector<vector<long long>> a(n, vector<long long>(n));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (int i = 0; i < n; i++)`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        for (int j = 0; j < n; j++) cin >> a[i][j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    long long d1 = 0, d2 = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        d1 += a[i][i];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `        d2 += a[i][n - 1 - i];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    cout << d1 << " " << d2 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 19: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 20: `}`
  Explaination: Closes the current scope block.

## Block 12: Q11. Check Symmetric Matrix

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<vector<int>> a(n, vector<int>(n));

    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++) cin >> a[i][j];

    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (a[i][j] != a[j][i]) {
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
- Line 7: `    vector<vector<int>> a(n, vector<int>(n));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    for (int i = 0; i < n; i++)`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        for (int j = 0; j < n; j++) cin >> a[i][j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        for (int j = i + 1; j < n; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `            if (a[i][j] != a[j][i]) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: `                cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 16: `                return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 17: `            }`
  Explaination: Closes the current scope block.
- Line 18: `        }`
  Explaination: Closes the current scope block.
- Line 19: `    }`
  Explaination: Closes the current scope block.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    cout << "Yes\n";`
  Explaination: Prints formatted output to standard output.
- Line 22: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 23: `}`
  Explaination: Closes the current scope block.

## Block 13: Q12. Check Identity Matrix

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    vector<vector<int>> a(n, vector<int>(n));
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++) cin >> a[i][j];

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (i == j && a[i][j] != 1) {
                cout << "No\n";
                return 0;
            }
            if (i != j && a[i][j] != 0) {
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
- Line 8: `    vector<vector<int>> a(n, vector<int>(n));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (int i = 0; i < n; i++)`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        for (int j = 0; j < n; j++) cin >> a[i][j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        for (int j = 0; j < n; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `            if (i == j && a[i][j] != 1) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: `                cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 16: `                return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 17: `            }`
  Explaination: Closes the current scope block.
- Line 18: `            if (i != j && a[i][j] != 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 19: `                cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 20: `                return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 21: `            }`
  Explaination: Closes the current scope block.
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

## Block 14: Q13. Matrix Addition

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;

    vector<vector<long long>> a(r, vector<long long>(c)), b(r, vector<long long>(c));
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++) cin >> a[i][j];
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++) cin >> b[i][j];

    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) cout << a[i][j] + b[i][j] << " ";
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
- Line 8: `    vector<vector<long long>> a(r, vector<long long>(c)), b(r, vector<long long>(c));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (int i = 0; i < r; i++)`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        for (int j = 0; j < c; j++) cin >> a[i][j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: `    for (int i = 0; i < r; i++)`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        for (int j = 0; j < c; j++) cin >> b[i][j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    for (int i = 0; i < r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        for (int j = 0; j < c; j++) cout << a[i][j] + b[i][j] << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `        cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 17: `    }`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 20: `}`
  Explaination: Closes the current scope block.

## Block 15: Q14. Matrix Multiplication

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r1, c1, r2, c2;
    cin >> r1 >> c1 >> r2 >> c2;

    if (c1 != r2) {
        cout << "Invalid\n";
        return 0;
    }

    vector<vector<long long>> a(r1, vector<long long>(c1)), b(r2, vector<long long>(c2));
    for (int i = 0; i < r1; i++)
        for (int j = 0; j < c1; j++) cin >> a[i][j];
    for (int i = 0; i < r2; i++)
        for (int j = 0; j < c2; j++) cin >> b[i][j];

    vector<vector<long long>> ans(r1, vector<long long>(c2, 0));
    for (int i = 0; i < r1; i++) {
        for (int k = 0; k < c1; k++) {
            for (int j = 0; j < c2; j++) {
                ans[i][j] += a[i][k] * b[k][j];
            }
        }
    }

    for (int i = 0; i < r1; i++) {
        for (int j = 0; j < c2; j++) cout << ans[i][j] << " ";
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
- Line 5: `    int r1, c1, r2, c2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> r1 >> c1 >> r2 >> c2;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    if (c1 != r2) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 9: `        cout << "Invalid\n";`
  Explaination: Prints formatted output to standard output.
- Line 10: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 11: `    }`
  Explaination: Closes the current scope block.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    vector<vector<long long>> a(r1, vector<long long>(c1)), b(r2, vector<long long>(c2));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 14: `    for (int i = 0; i < r1; i++)`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        for (int j = 0; j < c1; j++) cin >> a[i][j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `    for (int i = 0; i < r2; i++)`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 17: `        for (int j = 0; j < c2; j++) cin >> b[i][j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    vector<vector<long long>> ans(r1, vector<long long>(c2, 0));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 20: `    for (int i = 0; i < r1; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 21: `        for (int k = 0; k < c1; k++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 22: `            for (int j = 0; j < c2; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 23: `                ans[i][j] += a[i][k] * b[k][j];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 24: `            }`
  Explaination: Closes the current scope block.
- Line 25: `        }`
  Explaination: Closes the current scope block.
- Line 26: `    }`
  Explaination: Closes the current scope block.
- Line 27: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 28: `    for (int i = 0; i < r1; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 29: `        for (int j = 0; j < c2; j++) cout << ans[i][j] << " ";`
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

## Block 16: Q15. Search in Row-Wise and Column-Wise Sorted Matrix

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c, x;
    cin >> r >> c >> x;

    vector<vector<int>> a(r, vector<int>(c));
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++) cin >> a[i][j];

    int i = 0, j = c - 1;
    while (i < r && j >= 0) {
        if (a[i][j] == x) {
            cout << "Yes\n";
            return 0;
        }
        if (a[i][j] > x) j--;
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
- Line 5: `    int r, c, x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> r >> c >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    vector<vector<int>> a(r, vector<int>(c));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (int i = 0; i < r; i++)`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        for (int j = 0; j < c; j++) cin >> a[i][j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    int i = 0, j = c - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    while (i < r && j >= 0) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 14: `        if (a[i][j] == x) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: `            cout << "Yes\n";`
  Explaination: Prints formatted output to standard output.
- Line 16: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 17: `        }`
  Explaination: Closes the current scope block.
- Line 18: `        if (a[i][j] > x) j--;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 19: `        else i++;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 23: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 24: `}`
  Explaination: Closes the current scope block.

## Block 17: Q16. Search in Fully Sorted Matrix (Binary Search)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c, x;
    cin >> r >> c >> x;

    vector<vector<int>> a(r, vector<int>(c));
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++) cin >> a[i][j];

    int l = 0, h = r * c - 1;
    while (l <= h) {
        int m = l + (h - l) / 2;
        int val = a[m / c][m % c];
        if (val == x) {
            cout << "Yes\n";
            return 0;
        }
        if (val < x) l = m + 1;
        else h = m - 1;
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
- Line 5: `    int r, c, x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> r >> c >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    vector<vector<int>> a(r, vector<int>(c));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (int i = 0; i < r; i++)`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        for (int j = 0; j < c; j++) cin >> a[i][j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    int l = 0, h = r * c - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    while (l <= h) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 14: `        int m = l + (h - l) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: `        int val = a[m / c][m % c];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `        if (val == x) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `            cout << "Yes\n";`
  Explaination: Prints formatted output to standard output.
- Line 18: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 19: `        }`
  Explaination: Closes the current scope block.
- Line 20: `        if (val < x) l = m + 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: `        else h = m - 1;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
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

## Block 18: Q17. Set Matrix Zeroes

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;

    vector<vector<int>> a(r, vector<int>(c));
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++) cin >> a[i][j];

    vector<int> row(r, 0), col(c, 0);
    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            if (a[i][j] == 0) row[i] = col[j] = 1;
        }
    }

    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            if (row[i] || col[j]) a[i][j] = 0;
        }
    }

    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) cout << a[i][j] << " ";
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
- Line 8: `    vector<vector<int>> a(r, vector<int>(c));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (int i = 0; i < r; i++)`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        for (int j = 0; j < c; j++) cin >> a[i][j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    vector<int> row(r, 0), col(c, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 13: `    for (int i = 0; i < r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        for (int j = 0; j < c; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `            if (a[i][j] == 0) row[i] = col[j] = 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `        }`
  Explaination: Closes the current scope block.
- Line 17: `    }`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    for (int i = 0; i < r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 20: `        for (int j = 0; j < c; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 21: `            if (row[i] || col[j]) a[i][j] = 0;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 22: `        }`
  Explaination: Closes the current scope block.
- Line 23: `    }`
  Explaination: Closes the current scope block.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    for (int i = 0; i < r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 26: `        for (int j = 0; j < c; j++) cout << a[i][j] << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 27: `        cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 28: `    }`
  Explaination: Closes the current scope block.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 31: `}`
  Explaination: Closes the current scope block.

## Block 19: Q18. Matrix Reshape

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int R, C, r, c;
    cin >> R >> C >> r >> c;

    vector<vector<int>> a(R, vector<int>(C));
    for (int i = 0; i < R; i++)
        for (int j = 0; j < C; j++) cin >> a[i][j];

    if (R * C != r * c) {
        for (int i = 0; i < R; i++) {
            for (int j = 0; j < C; j++) cout << a[i][j] << " ";
            cout << "\n";
        }
        return 0;
    }

    vector<vector<int>> b(r, vector<int>(c));
    for (int k = 0; k < R * C; k++) {
        b[k / c][k % c] = a[k / C][k % C];
    }

    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) cout << b[i][j] << " ";
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
- Line 5: `    int R, C, r, c;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> R >> C >> r >> c;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    vector<vector<int>> a(R, vector<int>(C));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (int i = 0; i < R; i++)`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        for (int j = 0; j < C; j++) cin >> a[i][j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    if (R * C != r * c) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: `        for (int i = 0; i < R; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `            for (int j = 0; j < C; j++) cout << a[i][j] << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `            cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 16: `        }`
  Explaination: Closes the current scope block.
- Line 17: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    vector<vector<int>> b(r, vector<int>(c));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 21: `    for (int k = 0; k < R * C; k++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 22: `        b[k / c][k % c] = a[k / C][k % C];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: `    }`
  Explaination: Closes the current scope block.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    for (int i = 0; i < r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 26: `        for (int j = 0; j < c; j++) cout << b[i][j] << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 27: `        cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 28: `    }`
  Explaination: Closes the current scope block.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 31: `}`
  Explaination: Closes the current scope block.

## Block 20: Q19. Prefix Sum Matrix Build

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;

    vector<vector<long long>> a(r, vector<long long>(c));
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++) cin >> a[i][j];

    vector<vector<long long>> pref(r + 1, vector<long long>(c + 1, 0));

    for (int i = 1; i <= r; i++) {
        for (int j = 1; j <= c; j++) {
            pref[i][j] = a[i - 1][j - 1] + pref[i - 1][j] + pref[i][j - 1] - pref[i - 1][j - 1];
        }
    }

    for (int i = 1; i <= r; i++) {
        for (int j = 1; j <= c; j++) cout << pref[i][j] << " ";
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
- Line 8: `    vector<vector<long long>> a(r, vector<long long>(c));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (int i = 0; i < r; i++)`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        for (int j = 0; j < c; j++) cin >> a[i][j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    vector<vector<long long>> pref(r + 1, vector<long long>(c + 1, 0));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    for (int i = 1; i <= r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        for (int j = 1; j <= c; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `            pref[i][j] = a[i - 1][j - 1] + pref[i - 1][j] + pref[i][j - 1] - pref[i - 1][j - 1];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `        }`
  Explaination: Closes the current scope block.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    for (int i = 1; i <= r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 21: `        for (int j = 1; j <= c; j++) cout << pref[i][j] << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 22: `        cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 23: `    }`
  Explaination: Closes the current scope block.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 26: `}`
  Explaination: Closes the current scope block.

## Block 21: Q20. Submatrix Sum Query using Prefix Matrix

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;

    vector<vector<long long>> pref(r + 1, vector<long long>(c + 1, 0));

    for (int i = 1; i <= r; i++) {
        for (int j = 1; j <= c; j++) {
            long long x;
            cin >> x;
            pref[i][j] = x + pref[i - 1][j] + pref[i][j - 1] - pref[i - 1][j - 1];
        }
    }

    int q;
    cin >> q;
    while (q--) {
        int r1, c1, r2, c2;
        cin >> r1 >> c1 >> r2 >> c2;
        r1++, c1++, r2++, c2++;

        long long ans = pref[r2][c2] - pref[r1 - 1][c2] - pref[r2][c1 - 1] + pref[r1 - 1][c1 - 1];
        cout << ans << "\n";
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
- Line 8: `    vector<vector<long long>> pref(r + 1, vector<long long>(c + 1, 0));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    for (int i = 1; i <= r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: `        for (int j = 1; j <= c; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `            long long x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `            cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 14: `            pref[i][j] = x + pref[i - 1][j] + pref[i][j - 1] - pref[i - 1][j - 1];`
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
- Line 20: `    while (q--) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 21: `        int r1, c1, r2, c2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 22: `        cin >> r1 >> c1 >> r2 >> c2;`
  Explaination: Reads input values from standard input into variables.
- Line 23: `        r1++, c1++, r2++, c2++;`
  Explaination: Executes a single statement that updates program state.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `        long long ans = pref[r2][c2] - pref[r1 - 1][c2] - pref[r2][c1 - 1] + pref[r1 - 1][c1 - 1];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 26: `        cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 27: `    }`
  Explaination: Closes the current scope block.
- Line 28: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 29: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 30: `}`
  Explaination: Closes the current scope block.

## Block 22: Q21. Count Negatives in Sorted Matrix

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;

    vector<vector<int>> a(r, vector<int>(c));
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++) cin >> a[i][j];

    int i = r - 1, j = 0;
    long long ans = 0;

    while (i >= 0 && j < c) {
        if (a[i][j] < 0) {
            ans += (c - j);
            i--;
        } else j++;
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
- Line 8: `    vector<vector<int>> a(r, vector<int>(c));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (int i = 0; i < r; i++)`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        for (int j = 0; j < c; j++) cin >> a[i][j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    int i = r - 1, j = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    long long ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    while (i >= 0 && j < c) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 16: `        if (a[i][j] < 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `            ans += (c - j);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: `            i--;`
  Explaination: Executes a single statement that updates program state.
- Line 19: `        } else j++;`
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

## Block 23: Q22. Check Toeplitz Matrix

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;

    vector<vector<int>> a(r, vector<int>(c));
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++) cin >> a[i][j];

    for (int i = 1; i < r; i++) {
        for (int j = 1; j < c; j++) {
            if (a[i][j] != a[i - 1][j - 1]) {
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
- Line 5: `    int r, c;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> r >> c;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    vector<vector<int>> a(r, vector<int>(c));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (int i = 0; i < r; i++)`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        for (int j = 0; j < c; j++) cin >> a[i][j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    for (int i = 1; i < r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        for (int j = 1; j < c; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `            if (a[i][j] != a[i - 1][j - 1]) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: `                cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 16: `                return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 17: `            }`
  Explaination: Closes the current scope block.
- Line 18: `        }`
  Explaination: Closes the current scope block.
- Line 19: `    }`
  Explaination: Closes the current scope block.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    cout << "Yes\n";`
  Explaination: Prints formatted output to standard output.
- Line 22: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 23: `}`
  Explaination: Closes the current scope block.

## Block 24: Q23. Lucky Numbers in Matrix

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;
    vector<vector<int>> a(r, vector<int>(c));

    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++) cin >> a[i][j];

    vector<int> rowMin(r, INT_MAX), colMax(c, INT_MIN);
    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            rowMin[i] = min(rowMin[i], a[i][j]);
            colMax[j] = max(colMax[j], a[i][j]);
        }
    }

    bool found = false;
    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            if (a[i][j] == rowMin[i] && a[i][j] == colMax[j]) {
                cout << a[i][j] << " ";
                found = true;
            }
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
- Line 5: `    int r, c;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> r >> c;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<vector<int>> a(r, vector<int>(c));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    for (int i = 0; i < r; i++)`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        for (int j = 0; j < c; j++) cin >> a[i][j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    vector<int> rowMin(r, INT_MAX), colMax(c, INT_MIN);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 13: `    for (int i = 0; i < r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        for (int j = 0; j < c; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `            rowMin[i] = min(rowMin[i], a[i][j]);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `            colMax[j] = max(colMax[j], a[i][j]);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `        }`
  Explaination: Closes the current scope block.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    bool found = false;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: `    for (int i = 0; i < r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 22: `        for (int j = 0; j < c; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 23: `            if (a[i][j] == rowMin[i] && a[i][j] == colMax[j]) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 24: `                cout << a[i][j] << " ";`
  Explaination: Prints formatted output to standard output.
- Line 25: `                found = true;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 26: `            }`
  Explaination: Closes the current scope block.
- Line 27: `        }`
  Explaination: Closes the current scope block.
- Line 28: `    }`
  Explaination: Closes the current scope block.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    if (!found) cout << -1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 31: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 32: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 33: `}`
  Explaination: Closes the current scope block.

## Block 25: Q24. Number of Islands (BFS)

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
- Line 19: `            queue<pair<int,int>> q;`
  Explaination: Declares a queue (FIFO structure).
- Line 20: `            q.push({i,j});`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 21: `            g[i][j] = '0';`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `            while (!q.empty()) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 24: `                auto [x,y] = q.front(); q.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 25: `                for (int k = 0; k < 4; k++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 26: `                    int nx = x + dr[k], ny = y + dc[k];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 27: `                    if (nx>=0 && nx<r && ny>=0 && ny<c && g[nx][ny]=='1') {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 28: `                        g[nx][ny] = '0';`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 29: `                        q.push({nx,ny});`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 30: `                    }`
  Explaination: Closes the current scope block.
- Line 31: `                }`
  Explaination: Closes the current scope block.
- Line 32: `            }`
  Explaination: Closes the current scope block.
- Line 33: `        }`
  Explaination: Closes the current scope block.
- Line 34: `    }`
  Explaination: Closes the current scope block.
- Line 35: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 36: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 37: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 38: `}`
  Explaination: Closes the current scope block.

## Block 26: Q25. Flood Fill

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

    int sr, sc, newColor;
    cin >> sr >> sc >> newColor;

    int oldColor = img[sr][sc];
    if (oldColor == newColor) {
        for (int i = 0; i < r; i++) {
            for (int j = 0; j < c; j++) cout << img[i][j] << " ";
            cout << "\n";
        }
        return 0;
    }

    queue<pair<int,int>> q;
    q.push({sr, sc});
    img[sr][sc] = newColor;

    int dr[4] = {1,-1,0,0};
    int dc[4] = {0,0,1,-1};

    while (!q.empty()) {
        auto [x,y] = q.front(); q.pop();
        for (int k = 0; k < 4; k++) {
            int nx = x + dr[k], ny = y + dc[k];
            if (nx>=0 && nx<r && ny>=0 && ny<c && img[nx][ny]==oldColor) {
                img[nx][ny] = newColor;
                q.push({nx, ny});
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
- Line 12: `    int sr, sc, newColor;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    cin >> sr >> sc >> newColor;`
  Explaination: Reads input values from standard input into variables.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    int oldColor = img[sr][sc];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `    if (oldColor == newColor) {`
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
- Line 25: `    q.push({sr, sc});`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 26: `    img[sr][sc] = newColor;`
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
- Line 35: `            if (nx>=0 && nx<r && ny>=0 && ny<c && img[nx][ny]==oldColor) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 36: `                img[nx][ny] = newColor;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 37: `                q.push({nx, ny});`
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

## Block 27: Q26. Rotting Oranges

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
                    g[nx][ny]=2;
                    fresh--;
                    q.push({nx,ny});
                }
            }
        }
    }

    cout << (fresh==0 ? mins : -1) << "\n";
    return 0;
}
```

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
- Line 7: `    vector<vector<int>> g(r, vector<int>(c));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
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
- Line 32: `                    g[nx][ny]=2;`
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
- Line 40: `    cout << (fresh==0 ? mins : -1) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 41: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 42: `}`
  Explaination: Closes the current scope block.

## Block 28: Q27. 01 Matrix Nearest Zero Distance

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;

    vector<vector<int>> g(r, vector<int>(c));
    vector<vector<int>> dist(r, vector<int>(c, INT_MAX));
    queue<pair<int,int>> q;

    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            cin >> g[i][j];
            if (g[i][j] == 0) {
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
            if (nx>=0 && nx<r && ny>=0 && ny<c && dist[nx][ny] > dist[x][y] + 1) {
                dist[nx][ny] = dist[x][y] + 1;
                q.push({nx,ny});
            }
        }
    }

    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) cout << dist[i][j] << " ";
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
- Line 8: `    vector<vector<int>> g(r, vector<int>(c));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    vector<vector<int>> dist(r, vector<int>(c, INT_MAX));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 10: `    queue<pair<int,int>> q;`
  Explaination: Declares a queue (FIFO structure).
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    for (int i = 0; i < r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        for (int j = 0; j < c; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `            cin >> g[i][j];`
  Explaination: Reads input values from standard input into variables.
- Line 15: `            if (g[i][j] == 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `                dist[i][j] = 0;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `                q.push({i,j});`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 18: `            }`
  Explaination: Closes the current scope block.
- Line 19: `        }`
  Explaination: Closes the current scope block.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    int dr[4] = {1,-1,0,0};`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 23: `    int dc[4] = {0,0,1,-1};`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    while (!q.empty()) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 26: `        auto [x,y] = q.front(); q.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 27: `        for (int k = 0; k < 4; k++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 28: `            int nx = x + dr[k], ny = y + dc[k];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 29: `            if (nx>=0 && nx<r && ny>=0 && ny<c && dist[nx][ny] > dist[x][y] + 1) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 30: `                dist[nx][ny] = dist[x][y] + 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 31: `                q.push({nx,ny});`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 32: `            }`
  Explaination: Closes the current scope block.
- Line 33: `        }`
  Explaination: Closes the current scope block.
- Line 34: `    }`
  Explaination: Closes the current scope block.
- Line 35: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 36: `    for (int i = 0; i < r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 37: `        for (int j = 0; j < c; j++) cout << dist[i][j] << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 38: `        cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 39: `    }`
  Explaination: Closes the current scope block.
- Line 40: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 41: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 42: `}`
  Explaination: Closes the current scope block.

## Block 29: Q28. Count Distinct Paths in Grid (DP)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;

    vector<vector<long long>> dp(r, vector<long long>(c, 0));
    dp[0][0] = 1;

    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            if (i == 0 && j == 0) continue;
            long long up = (i > 0 ? dp[i - 1][j] : 0);
            long long left = (j > 0 ? dp[i][j - 1] : 0);
            dp[i][j] = up + left;
        }
    }

    cout << dp[r - 1][c - 1] << "\n";
    return 0;
}
```

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
- Line 8: `    vector<vector<long long>> dp(r, vector<long long>(c, 0));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    dp[0][0] = 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    for (int i = 0; i < r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        for (int j = 0; j < c; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `            if (i == 0 && j == 0) continue;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `            long long up = (i > 0 ? dp[i - 1][j] : 0);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: `            long long left = (j > 0 ? dp[i][j - 1] : 0);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `            dp[i][j] = up + left;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `        }`
  Explaination: Closes the current scope block.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    cout << dp[r - 1][c - 1] << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 21: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 22: `}`
  Explaination: Closes the current scope block.

## Block 30: Q29. Unique Paths with Obstacles

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

    vector<vector<long long>> dp(r, vector<long long>(c, 0));
    if (g[0][0] == 0) dp[0][0] = 1;

    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            if (g[i][j] == 1) {
                dp[i][j] = 0;
                continue;
            }
            if (i == 0 && j == 0) continue;
            dp[i][j] = (i > 0 ? dp[i - 1][j] : 0) + (j > 0 ? dp[i][j - 1] : 0);
        }
    }

    cout << dp[r - 1][c - 1] << "\n";
    return 0;
}
```

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
- Line 12: `    vector<vector<long long>> dp(r, vector<long long>(c, 0));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 13: `    if (g[0][0] == 0) dp[0][0] = 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    for (int i = 0; i < r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `        for (int j = 0; j < c; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 17: `            if (g[i][j] == 1) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 18: `                dp[i][j] = 0;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `                continue;`
  Explaination: Skips remaining statements in the current loop iteration.
- Line 20: `            }`
  Explaination: Closes the current scope block.
- Line 21: `            if (i == 0 && j == 0) continue;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 22: `            dp[i][j] = (i > 0 ? dp[i - 1][j] : 0) + (j > 0 ? dp[i][j - 1] : 0);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: `        }`
  Explaination: Closes the current scope block.
- Line 24: `    }`
  Explaination: Closes the current scope block.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    cout << dp[r - 1][c - 1] << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 27: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 28: `}`
  Explaination: Closes the current scope block.

## Block 31: Q30. Maximum Path Sum from Top-left to Bottom-right (Right/Down)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;

    vector<vector<long long>> a(r, vector<long long>(c));
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++) cin >> a[i][j];

    vector<vector<long long>> dp(r, vector<long long>(c, LLONG_MIN));
    dp[0][0] = a[0][0];

    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            if (i == 0 && j == 0) continue;
            long long best = LLONG_MIN;
            if (i > 0) best = max(best, dp[i - 1][j]);
            if (j > 0) best = max(best, dp[i][j - 1]);
            dp[i][j] = best + a[i][j];
        }
    }

    cout << dp[r - 1][c - 1] << "\n";
    return 0;
}
```

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
- Line 8: `    vector<vector<long long>> a(r, vector<long long>(c));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (int i = 0; i < r; i++)`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        for (int j = 0; j < c; j++) cin >> a[i][j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    vector<vector<long long>> dp(r, vector<long long>(c, LLONG_MIN));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 13: `    dp[0][0] = a[0][0];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    for (int i = 0; i < r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `        for (int j = 0; j < c; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 17: `            if (i == 0 && j == 0) continue;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 18: `            long long best = LLONG_MIN;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `            if (i > 0) best = max(best, dp[i - 1][j]);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 20: `            if (j > 0) best = max(best, dp[i][j - 1]);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: `            dp[i][j] = best + a[i][j];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: `        }`
  Explaination: Closes the current scope block.
- Line 23: `    }`
  Explaination: Closes the current scope block.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    cout << dp[r - 1][c - 1] << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 26: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 27: `}`
  Explaination: Closes the current scope block.

## Block 32: Q31. Minimum Path Sum in Grid

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;
    vector<vector<int>> a(r, vector<int>(c));
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++) cin >> a[i][j];

    vector<vector<long long>> dp(r, vector<long long>(c, LLONG_MAX));
    dp[0][0] = a[0][0];

    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            if (i == 0 && j == 0) continue;
            long long up = (i > 0 ? dp[i - 1][j] : LLONG_MAX);
            long long left = (j > 0 ? dp[i][j - 1] : LLONG_MAX);
            dp[i][j] = min(up, left) + a[i][j];
        }
    }

    cout << dp[r - 1][c - 1] << "\n";
    return 0;
}
```

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
- Line 7: `    vector<vector<int>> a(r, vector<int>(c));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (int i = 0; i < r; i++)`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: `        for (int j = 0; j < c; j++) cin >> a[i][j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    vector<vector<long long>> dp(r, vector<long long>(c, LLONG_MAX));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 12: `    dp[0][0] = a[0][0];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    for (int i = 0; i < r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        for (int j = 0; j < c; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `            if (i == 0 && j == 0) continue;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `            long long up = (i > 0 ? dp[i - 1][j] : LLONG_MAX);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: `            long long left = (j > 0 ? dp[i][j - 1] : LLONG_MAX);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `            dp[i][j] = min(up, left) + a[i][j];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `        }`
  Explaination: Closes the current scope block.
- Line 21: `    }`
  Explaination: Closes the current scope block.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    cout << dp[r - 1][c - 1] << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 24: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 25: `}`
  Explaination: Closes the current scope block.

## Block 33: Q32. Sort Each Row of Matrix

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;

    vector<vector<int>> a(r, vector<int>(c));
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++) cin >> a[i][j];

    for (int i = 0; i < r; i++) sort(a[i].begin(), a[i].end());

    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) cout << a[i][j] << " ";
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
- Line 8: `    vector<vector<int>> a(r, vector<int>(c));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (int i = 0; i < r; i++)`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        for (int j = 0; j < c; j++) cin >> a[i][j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    for (int i = 0; i < r; i++) sort(a[i].begin(), a[i].end());`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    for (int i = 0; i < r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        for (int j = 0; j < c; j++) cout << a[i][j] << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `        cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 17: `    }`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 20: `}`
  Explaination: Closes the current scope block.

## Block 34: Q33. Rotate Each Layer of Matrix by One (Clockwise)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;
    vector<vector<int>> a(r, vector<int>(c));
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++) cin >> a[i][j];

    int top = 0, left = 0, bottom = r - 1, right = c - 1;

    while (top < bottom && left < right) {
        int prev = a[top + 1][left];

        for (int j = left; j <= right; j++) swap(prev, a[top][j]);
        top++;
        for (int i = top; i <= bottom; i++) swap(prev, a[i][right]);
        right--;
        for (int j = right; j >= left; j--) swap(prev, a[bottom][j]);
        bottom--;
        for (int i = bottom; i >= top; i--) swap(prev, a[i][left]);
        left++;
    }

    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) cout << a[i][j] << " ";
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
- Line 7: `    vector<vector<int>> a(r, vector<int>(c));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (int i = 0; i < r; i++)`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: `        for (int j = 0; j < c; j++) cin >> a[i][j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    int top = 0, left = 0, bottom = r - 1, right = c - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    while (top < bottom && left < right) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 14: `        int prev = a[top + 1][left];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `        for (int j = left; j <= right; j++) swap(prev, a[top][j]);`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 17: `        top++;`
  Explaination: Executes a single statement that updates program state.
- Line 18: `        for (int i = top; i <= bottom; i++) swap(prev, a[i][right]);`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 19: `        right--;`
  Explaination: Executes a single statement that updates program state.
- Line 20: `        for (int j = right; j >= left; j--) swap(prev, a[bottom][j]);`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 21: `        bottom--;`
  Explaination: Executes a single statement that updates program state.
- Line 22: `        for (int i = bottom; i >= top; i--) swap(prev, a[i][left]);`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 23: `        left++;`
  Explaination: Executes a single statement that updates program state.
- Line 24: `    }`
  Explaination: Closes the current scope block.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    for (int i = 0; i < r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 27: `        for (int j = 0; j < c; j++) cout << a[i][j] << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 28: `        cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 29: `    }`
  Explaination: Closes the current scope block.
- Line 30: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 31: `}`
  Explaination: Closes the current scope block.

## Block 35: Q34. Story-Based Parking Lot Occupancy Grid

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;

    int total = 0, bestRow = -1, bestCount = -1;

    for (int i = 0; i < r; i++) {
        int rowCount = 0;
        for (int j = 0; j < c; j++) {
            int x;
            cin >> x;
            rowCount += x;
        }
        total += rowCount;
        if (rowCount > bestCount) {
            bestCount = rowCount;
            bestRow = i;
        }
    }

    cout << total << "\n";
    cout << bestRow << "\n";
    return 0;
}
```

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
- Line 8: `    int total = 0, bestRow = -1, bestCount = -1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    for (int i = 0; i < r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: `        int rowCount = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `        for (int j = 0; j < c; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `            int x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `            cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 15: `            rowCount += x;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `        }`
  Explaination: Closes the current scope block.
- Line 17: `        total += rowCount;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: `        if (rowCount > bestCount) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 19: `            bestCount = rowCount;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `            bestRow = i;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: `        }`
  Explaination: Closes the current scope block.
- Line 22: `    }`
  Explaination: Closes the current scope block.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    cout << total << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 25: `    cout << bestRow << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 26: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 27: `}`
  Explaination: Closes the current scope block.

## Block 36: Q35. Story-Based CCTV Visibility Grid

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;

    vector<vector<int>> a(r, vector<int>(c));
    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++) cin >> a[i][j];

    long long visible = 0;
    for (int i = 0; i < r; i++) {
        int mx = INT_MIN;
        for (int j = 0; j < c; j++) {
            if (a[i][j] > mx) {
                visible++;
                mx = a[i][j];
            }
        }
    }

    cout << visible << "\n";
    return 0;
}
```

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
- Line 8: `    vector<vector<int>> a(r, vector<int>(c));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (int i = 0; i < r; i++)`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        for (int j = 0; j < c; j++) cin >> a[i][j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    long long visible = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    for (int i = 0; i < r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        int mx = INT_MIN;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: `        for (int j = 0; j < c; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `            if (a[i][j] > mx) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `                visible++;`
  Explaination: Executes a single statement that updates program state.
- Line 18: `                mx = a[i][j];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `            }`
  Explaination: Closes the current scope block.
- Line 20: `        }`
  Explaination: Closes the current scope block.
- Line 21: `    }`
  Explaination: Closes the current scope block.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    cout << visible << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 24: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 25: `}`
  Explaination: Closes the current scope block.

## Block 37: Q36. Story-Based Robot Path in Grid Commands

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

    int sr, sc;
    cin >> sr >> sc;
    string cmd;
    cin >> cmd;

    for (char ch : cmd) {
        int nr = sr, nc = sc;
        if (ch == 'R') nc++;
        else if (ch == 'L') nc--;
        else if (ch == 'U') nr--;
        else if (ch == 'D') nr++;

        if (nr >= 0 && nr < r && nc >= 0 && nc < c && g[nr][nc] == 0) {
            sr = nr;
            sc = nc;
        }
    }

    cout << sr << " " << sc << "\n";
    return 0;
}
```

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
- Line 12: `    int sr, sc;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    cin >> sr >> sc;`
  Explaination: Reads input values from standard input into variables.
- Line 14: `    string cmd;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 15: `    cin >> cmd;`
  Explaination: Reads input values from standard input into variables.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    for (char ch : cmd) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: `        int nr = sr, nc = sc;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `        if (ch == 'R') nc++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 20: `        else if (ch == 'L') nc--;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: `        else if (ch == 'U') nr--;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 22: `        else if (ch == 'D') nr++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `        if (nr >= 0 && nr < r && nc >= 0 && nc < c && g[nr][nc] == 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 25: `            sr = nr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 26: `            sc = nc;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 27: `        }`
  Explaination: Closes the current scope block.
- Line 28: `    }`
  Explaination: Closes the current scope block.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    cout << sr << " " << sc << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 31: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 32: `}`
  Explaination: Closes the current scope block.

## Block 38: Q37. Story-Based Room Gold Collection (Max Contiguous Segment in Row)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

long long kadane(const vector<long long>& a) {
    long long cur = a[0], best = a[0];
    for (int i = 1; i < (int)a.size(); i++) {
        cur = max(a[i], cur + a[i]);
        best = max(best, cur);
    }
    return best;
}

int main() {
    int r, c;
    cin >> r >> c;

    long long ans = LLONG_MIN;
    for (int i = 0; i < r; i++) {
        vector<long long> row(c);
        for (int j = 0; j < c; j++) cin >> row[j];
        ans = max(ans, kadane(row));
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
- Line 4: `long long kadane(const vector<long long>& a) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    long long cur = a[0], best = a[0];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    for (int i = 1; i < (int)a.size(); i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 7: `        cur = max(a[i], cur + a[i]);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 8: `        best = max(best, cur);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 9: `    }`
  Explaination: Closes the current scope block.
- Line 10: `    return best;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 11: `}`
  Explaination: Closes the current scope block.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 14: `    int r, c;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: `    cin >> r >> c;`
  Explaination: Reads input values from standard input into variables.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    long long ans = LLONG_MIN;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: `    for (int i = 0; i < r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 19: `        vector<long long> row(c);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 20: `        for (int j = 0; j < c; j++) cin >> row[j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 21: `        ans = max(ans, kadane(row));`
  Explaination: Assigns computed value(s) to variable(s) for later use.
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

## Block 39: Q38. Story-Based Event Hall Seat Blocks (Largest Rectangle of 1s)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

long long histMax(const vector<int>& h) {
    int n = (int)h.size();
    stack<int> st;
    long long best = 0;

    for (int i = 0; i <= n; i++) {
        int cur = (i == n ? 0 : h[i]);
        while (!st.empty() && h[st.top()] > cur) {
            int ht = h[st.top()]; st.pop();
            int l = st.empty() ? -1 : st.top();
            long long width = i - l - 1;
            best = max(best, 1LL * ht * width);
        }
        st.push(i);
    }
    return best;
}

int main() {
    int r, c;
    cin >> r >> c;

    vector<int> h(c, 0);
    long long ans = 0;

    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            int x;
            cin >> x;
            h[j] = (x == 0 ? 0 : h[j] + 1);
        }
        ans = max(ans, histMax(h));
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
- Line 4: `long long histMax(const vector<int>& h) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    int n = (int)h.size();`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    stack<int> st;`
  Explaination: Declares a stack (LIFO structure).
- Line 7: `    long long best = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    for (int i = 0; i <= n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        int cur = (i == n ? 0 : h[i]);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `        while (!st.empty() && h[st.top()] > cur) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 12: `            int ht = h[st.top()]; st.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 13: `            int l = st.empty() ? -1 : st.top();`
  Explaination: Accesses the top element of a stack/priority-queue.
- Line 14: `            long long width = i - l - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: `            best = max(best, 1LL * ht * width);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `        }`
  Explaination: Closes the current scope block.
- Line 17: `        st.push(i);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: `    return best;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 20: `}`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 23: `    int r, c;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 24: `    cin >> r >> c;`
  Explaination: Reads input values from standard input into variables.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    vector<int> h(c, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 27: `    long long ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 28: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 29: `    for (int i = 0; i < r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 30: `        for (int j = 0; j < c; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 31: `            int x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 32: `            cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 33: `            h[j] = (x == 0 ? 0 : h[j] + 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 34: `        }`
  Explaination: Closes the current scope block.
- Line 35: `        ans = max(ans, histMax(h));`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 36: `    }`
  Explaination: Closes the current scope block.
- Line 37: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 38: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 39: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 40: `}`
  Explaination: Closes the current scope block.

## Block 40: Q39. Story-Based Virus Spread Time in Lab Grid

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;

    vector<vector<int>> g(r, vector<int>(c));
    queue<pair<int,int>> q;
    int healthy = 0;

    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            cin >> g[i][j];
            if (g[i][j] == 2) q.push({i,j});
            else if (g[i][j] == 1) healthy++;
        }
    }

    int dr[4] = {1,-1,0,0};
    int dc[4] = {0,0,1,-1};
    int mins = 0;

    while (!q.empty() && healthy > 0) {
        int sz = q.size();
        mins++;
        while (sz--) {
            auto [x,y] = q.front(); q.pop();
            for (int k = 0; k < 4; k++) {
                int nx = x + dr[k], ny = y + dc[k];
                if (nx>=0 && nx<r && ny>=0 && ny<c && g[nx][ny]==1) {
                    g[nx][ny] = 2;
                    healthy--;
                    q.push({nx,ny});
                }
            }
        }
    }

    cout << (healthy == 0 ? mins : -1) << "\n";
    return 0;
}
```

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
- Line 10: `    int healthy = 0;`
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
- Line 16: `            else if (g[i][j] == 1) healthy++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `        }`
  Explaination: Closes the current scope block.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    int dr[4] = {1,-1,0,0};`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: `    int dc[4] = {0,0,1,-1};`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 22: `    int mins = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    while (!q.empty() && healthy > 0) {`
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
- Line 33: `                    healthy--;`
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
- Line 40: `    cout << (healthy == 0 ? mins : -1) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 41: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 42: `}`
  Explaination: Closes the current scope block.

## Block 41: Q40. Story-Based Warehouse Distance to Exit (Multi-source BFS)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;

    vector<vector<int>> g(r, vector<int>(c));
    vector<vector<int>> dist(r, vector<int>(c, -1));
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
- Line 8: `    vector<vector<int>> g(r, vector<int>(c));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    vector<vector<int>> dist(r, vector<int>(c, -1));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 10: `    queue<pair<int,int>> q;`
  Explaination: Declares a queue (FIFO structure).
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    for (int i = 0; i < r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        for (int j = 0; j < c; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `            cin >> g[i][j];`
  Explaination: Reads input values from standard input into variables.
- Line 15: `            if (g[i][j] == 1) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `                dist[i][j] = 0;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `                q.push({i,j});`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 18: `            }`
  Explaination: Closes the current scope block.
- Line 19: `        }`
  Explaination: Closes the current scope block.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    int dr[4] = {1,-1,0,0};`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 23: `    int dc[4] = {0,0,1,-1};`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    while (!q.empty()) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 26: `        auto [x,y] = q.front(); q.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 27: `        for (int k = 0; k < 4; k++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 28: `            int nx = x + dr[k], ny = y + dc[k];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 29: `            if (nx>=0 && nx<r && ny>=0 && ny<c && g[nx][ny] != -1 && dist[nx][ny] == -1) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 30: `                dist[nx][ny] = dist[x][y] + 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 31: `                q.push({nx,ny});`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 32: `            }`
  Explaination: Closes the current scope block.
- Line 33: `        }`
  Explaination: Closes the current scope block.
- Line 34: `    }`
  Explaination: Closes the current scope block.
- Line 35: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 36: `    for (int i = 0; i < r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 37: `        for (int j = 0; j < c; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 38: `            if (g[i][j] == -1) cout << -1 << " ";`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 39: `            else cout << dist[i][j] << " ";`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 40: `        }`
  Explaination: Closes the current scope block.
- Line 41: `        cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 42: `    }`
  Explaination: Closes the current scope block.
- Line 43: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 44: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 45: `}`
  Explaination: Closes the current scope block.
