# TCS_NQT_DP_Master_CPP.md: Line-by-Line Code Explaination

This file explains each C++ code block line-by-line from the source topic file.

## Block 1: Q1. Fibonacci Number (Tabulation)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    if (n == 0) { cout << 0 << "\n"; return 0; }
    vector<long long> dp(n + 1, 0);
    dp[1] = 1;
    for (int i = 2; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];
    cout << dp[n] << "\n";
    return 0;
}
```

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
- Line 7: `    if (n == 0) { cout << 0 << "\n"; return 0; }`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 8: `    vector<long long> dp(n + 1, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    dp[1] = 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 10: `    for (int i = 2; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: `    cout << dp[n] << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 12: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 13: `}`
  Explaination: Closes the current scope block.

## Block 2: Q2. Climbing Stairs

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    if (n <= 1) { cout << 1 << "\n"; return 0; }
    vector<long long> dp(n + 1, 0);
    dp[0] = dp[1] = 1;
    for (int i = 2; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];
    cout << dp[n] << "\n";
    return 0;
}
```

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
- Line 7: `    if (n <= 1) { cout << 1 << "\n"; return 0; }`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 8: `    vector<long long> dp(n + 1, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    dp[0] = dp[1] = 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 10: `    for (int i = 2; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: `    cout << dp[n] << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 12: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 13: `}`
  Explaination: Closes the current scope block.

## Block 3: Q3. Min Cost Climbing Stairs

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> cost(n);
    for (int i = 0; i < n; i++) cin >> cost[i];

    if (n == 1) { cout << cost[0] << "\n"; return 0; }

    vector<int> dp(n + 1, 0);
    dp[0] = 0;
    dp[1] = 0;

    for (int i = 2; i <= n; i++) {
        dp[i] = min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }

    cout << dp[n] << "\n";
    return 0;
}
```

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
- Line 7: `    vector<int> cost(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (int i = 0; i < n; i++) cin >> cost[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    if (n == 1) { cout << cost[0] << "\n"; return 0; }`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    vector<int> dp(n + 1, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 13: `    dp[0] = 0;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: `    dp[1] = 0;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    for (int i = 2; i <= n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 17: `        dp[i] = min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    cout << dp[n] << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 21: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 22: `}`
  Explaination: Closes the current scope block.

## Block 4: Q4. Frog Jump (Min Energy)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> h(n);
    for (int i = 0; i < n; i++) cin >> h[i];

    vector<int> dp(n, 0);
    for (int i = 1; i < n; i++) {
        int one = dp[i - 1] + abs(h[i] - h[i - 1]);
        int two = INT_MAX;
        if (i > 1) two = dp[i - 2] + abs(h[i] - h[i - 2]);
        dp[i] = min(one, two);
    }

    cout << dp[n - 1] << "\n";
    return 0;
}
```

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
- Line 8: `    for (int i = 0; i < n; i++) cin >> h[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    vector<int> dp(n, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 11: `    for (int i = 1; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        int one = dp[i - 1] + abs(h[i] - h[i - 1]);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `        int two = INT_MAX;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `        if (i > 1) two = dp[i - 2] + abs(h[i] - h[i - 2]);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: `        dp[i] = min(one, two);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    cout << dp[n - 1] << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 19: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 20: `}`
  Explaination: Closes the current scope block.

## Block 5: Q5. House Robber

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

long long solveLinear(const vector<int>& a) {
    int n = (int)a.size();
    if (n == 0) return 0;
    if (n == 1) return a[0];

    vector<long long> dp(n, 0);
    dp[0] = a[0];
    dp[1] = max(a[0], a[1]);

    for (int i = 2; i < n; i++) {
        dp[i] = max(dp[i - 1], dp[i - 2] + a[i]);
    }
    return dp[n - 1];
}

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    cout << solveLinear(a) << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `long long solveLinear(const vector<int>& a) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    int n = (int)a.size();`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    if (n == 0) return 0;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 7: `    if (n == 1) return a[0];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    vector<long long> dp(n, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 10: `    dp[0] = a[0];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 11: `    dp[1] = max(a[0], a[1]);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    for (int i = 2; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        dp[i] = max(dp[i - 1], dp[i - 2] + a[i]);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: `    return dp[n - 1];`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 17: `}`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 20: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 22: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 23: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    cout << solveLinear(a) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 26: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 27: `}`
  Explaination: Closes the current scope block.

## Block 6: Q6. House Robber II (Circular Street)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

long long linearRob(const vector<int>& a, int l, int r) {
    long long prev2 = 0, prev1 = 0;
    for (int i = l; i <= r; i++) {
        long long take = prev2 + a[i];
        long long skip = prev1;
        long long cur = max(take, skip);
        prev2 = prev1;
        prev1 = cur;
    }
    return prev1;
}

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    if (n == 1) { cout << a[0] << "\n"; return 0; }

    cout << max(linearRob(a, 0, n - 2), linearRob(a, 1, n - 1)) << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `long long linearRob(const vector<int>& a, int l, int r) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    long long prev2 = 0, prev1 = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    for (int i = l; i <= r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 7: `        long long take = prev2 + a[i];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 8: `        long long skip = prev1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `        long long cur = max(take, skip);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: `        prev2 = prev1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 11: `        prev1 = cur;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: `    }`
  Explaination: Closes the current scope block.
- Line 13: `    return prev1;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 14: `}`
  Explaination: Closes the current scope block.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 17: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 19: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 20: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    if (n == 1) { cout << a[0] << "\n"; return 0; }`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    cout << max(linearRob(a, 0, n - 2), linearRob(a, 1, n - 1)) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 25: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 26: `}`
  Explaination: Closes the current scope block.

## Block 7: Q7. Coin Change (Minimum Coins)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, amount;
    cin >> n >> amount;
    vector<int> coins(n);
    for (int i = 0; i < n; i++) cin >> coins[i];

    const int INF = 1e9;
    vector<int> dp(amount + 1, INF);
    dp[0] = 0;

    for (int x = 1; x <= amount; x++) {
        for (int c : coins) {
            if (x - c >= 0 && dp[x - c] != INF) {
                dp[x] = min(dp[x], dp[x - c] + 1);
            }
        }
    }

    cout << (dp[amount] == INF ? -1 : dp[amount]) << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int n, amount;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> amount;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<int> coins(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (int i = 0; i < n; i++) cin >> coins[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    const int INF = 1e9;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 11: `    vector<int> dp(amount + 1, INF);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 12: `    dp[0] = 0;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    for (int x = 1; x <= amount; x++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        for (int c : coins) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `            if (x - c >= 0 && dp[x - c] != INF) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `                dp[x] = min(dp[x], dp[x - c] + 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: `            }`
  Explaination: Closes the current scope block.
- Line 19: `        }`
  Explaination: Closes the current scope block.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    cout << (dp[amount] == INF ? -1 : dp[amount]) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 23: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 24: `}`
  Explaination: Closes the current scope block.

## Block 8: Q8. Coin Change (Number of Ways)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, amount;
    cin >> n >> amount;
    vector<int> coins(n);
    for (int i = 0; i < n; i++) cin >> coins[i];

    vector<long long> dp(amount + 1, 0);
    dp[0] = 1;

    for (int c : coins) {
        for (int x = c; x <= amount; x++) {
            dp[x] += dp[x - c];
        }
    }

    cout << dp[amount] << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int n, amount;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> amount;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<int> coins(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (int i = 0; i < n; i++) cin >> coins[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    vector<long long> dp(amount + 1, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 11: `    dp[0] = 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    for (int c : coins) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        for (int x = c; x <= amount; x++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `            dp[x] += dp[x - c];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `        }`
  Explaination: Closes the current scope block.
- Line 17: `    }`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    cout << dp[amount] << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 20: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 21: `}`
  Explaination: Closes the current scope block.

## Block 9: Q9. 0/1 Knapsack

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, W;
    cin >> n >> W;
    vector<int> wt(n), val(n);
    for (int i = 0; i < n; i++) cin >> wt[i];
    for (int i = 0; i < n; i++) cin >> val[i];

    vector<vector<int>> dp(n + 1, vector<int>(W + 1, 0));

    for (int i = 1; i <= n; i++) {
        for (int w = 0; w <= W; w++) {
            dp[i][w] = dp[i - 1][w];
            if (wt[i - 1] <= w) {
                dp[i][w] = max(dp[i][w], val[i - 1] + dp[i - 1][w - wt[i - 1]]);
            }
        }
    }

    cout << dp[n][W] << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int n, W;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> W;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<int> wt(n), val(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (int i = 0; i < n; i++) cin >> wt[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: `    for (int i = 0; i < n; i++) cin >> val[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    vector<vector<int>> dp(n + 1, vector<int>(W + 1, 0));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    for (int i = 1; i <= n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        for (int w = 0; w <= W; w++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `            dp[i][w] = dp[i - 1][w];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `            if (wt[i - 1] <= w) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `                dp[i][w] = max(dp[i][w], val[i - 1] + dp[i - 1][w - wt[i - 1]]);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: `            }`
  Explaination: Closes the current scope block.
- Line 19: `        }`
  Explaination: Closes the current scope block.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    cout << dp[n][W] << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 23: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 24: `}`
  Explaination: Closes the current scope block.

## Block 10: Q10. Unbounded Knapsack

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, W;
    cin >> n >> W;
    vector<int> wt(n), val(n);
    for (int i = 0; i < n; i++) cin >> wt[i];
    for (int i = 0; i < n; i++) cin >> val[i];

    vector<int> dp(W + 1, 0);
    for (int w = 0; w <= W; w++) {
        for (int i = 0; i < n; i++) {
            if (wt[i] <= w) dp[w] = max(dp[w], val[i] + dp[w - wt[i]]);
        }
    }

    cout << dp[W] << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int n, W;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> W;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<int> wt(n), val(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (int i = 0; i < n; i++) cin >> wt[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: `    for (int i = 0; i < n; i++) cin >> val[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    vector<int> dp(W + 1, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 12: `    for (int w = 0; w <= W; w++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `            if (wt[i] <= w) dp[w] = max(dp[w], val[i] + dp[w - wt[i]]);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: `        }`
  Explaination: Closes the current scope block.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    cout << dp[W] << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 19: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 20: `}`
  Explaination: Closes the current scope block.

## Block 11: Q11. Rod Cutting

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> price(n + 1);
    for (int i = 1; i <= n; i++) cin >> price[i];

    vector<int> dp(n + 1, 0);
    for (int len = 1; len <= n; len++) {
        for (int cut = 1; cut <= len; cut++) {
            dp[len] = max(dp[len], price[cut] + dp[len - cut]);
        }
    }

    cout << dp[n] << "\n";
    return 0;
}
```

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
- Line 7: `    vector<int> price(n + 1);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (int i = 1; i <= n; i++) cin >> price[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    vector<int> dp(n + 1, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 11: `    for (int len = 1; len <= n; len++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        for (int cut = 1; cut <= len; cut++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `            dp[len] = max(dp[len], price[cut] + dp[len - cut]);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: `        }`
  Explaination: Closes the current scope block.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    cout << dp[n] << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 18: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 19: `}`
  Explaination: Closes the current scope block.

## Block 12: Q12. Subset Sum (Decision)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, S;
    cin >> n >> S;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    vector<vector<bool>> dp(n + 1, vector<bool>(S + 1, false));
    dp[0][0] = true;

    for (int i = 1; i <= n; i++) {
        for (int s = 0; s <= S; s++) {
            dp[i][s] = dp[i - 1][s];
            if (s >= a[i - 1]) dp[i][s] = dp[i][s] || dp[i - 1][s - a[i - 1]];
        }
    }

    cout << (dp[n][S] ? "Yes" : "No") << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int n, S;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> S;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    vector<vector<bool>> dp(n + 1, vector<bool>(S + 1, false));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 11: `    dp[0][0] = true;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    for (int i = 1; i <= n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        for (int s = 0; s <= S; s++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `            dp[i][s] = dp[i - 1][s];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `            if (s >= a[i - 1]) dp[i][s] = dp[i][s] || dp[i - 1][s - a[i - 1]];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `        }`
  Explaination: Closes the current scope block.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    cout << (dp[n][S] ? "Yes" : "No") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 21: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 22: `}`
  Explaination: Closes the current scope block.

## Block 13: Q13. Partition Equal Subset Sum

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    long long total = 0;
    for (int i = 0; i < n; i++) {
        cin >> a[i];
        total += a[i];
    }

    if (total % 2) { cout << "No\n"; return 0; }
    int target = (int)(total / 2);

    vector<char> dp(target + 1, 0);
    dp[0] = 1;

    for (int x : a) {
        for (int s = target; s >= x; s--) {
            dp[s] = dp[s] || dp[s - x];
        }
    }

    cout << (dp[target] ? "Yes" : "No") << "\n";
    return 0;
}
```

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
- Line 8: `    long long total = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        cin >> a[i];`
  Explaination: Reads input values from standard input into variables.
- Line 11: `        total += a[i];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: `    }`
  Explaination: Closes the current scope block.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    if (total % 2) { cout << "No\n"; return 0; }`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: `    int target = (int)(total / 2);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    vector<char> dp(target + 1, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 18: `    dp[0] = 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    for (int x : a) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 21: `        for (int s = target; s >= x; s--) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 22: `            dp[s] = dp[s] || dp[s - x];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: `        }`
  Explaination: Closes the current scope block.
- Line 24: `    }`
  Explaination: Closes the current scope block.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    cout << (dp[target] ? "Yes" : "No") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 27: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 28: `}`
  Explaination: Closes the current scope block.

## Block 14: Q14. Count Subsets with Sum K

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, K;
    cin >> n >> K;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    vector<long long> dp(K + 1, 0);
    dp[0] = 1;

    for (int x : a) {
        for (int s = K; s >= x; s--) {
            dp[s] += dp[s - x];
        }
    }

    cout << dp[K] << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int n, K;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> K;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    vector<long long> dp(K + 1, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 11: `    dp[0] = 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    for (int x : a) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        for (int s = K; s >= x; s--) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `            dp[s] += dp[s - x];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `        }`
  Explaination: Closes the current scope block.
- Line 17: `    }`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    cout << dp[K] << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 20: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 21: `}`
  Explaination: Closes the current scope block.

## Block 15: Q15. Target Sum Ways (+/- Signs)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, T;
    cin >> n >> T;
    vector<int> a(n);

    int sum = 0;
    for (int i = 0; i < n; i++) {
        cin >> a[i];
        sum += a[i];
    }

    if ((sum + T) < 0 || (sum + T) % 2 != 0) {
        cout << 0 << "\n";
        return 0;
    }

    int S = (sum + T) / 2;
    if (S < 0) { cout << 0 << "\n"; return 0; }

    vector<long long> dp(S + 1, 0);
    dp[0] = 1;

    for (int x : a) {
        for (int s = S; s >= x; s--) {
            dp[s] += dp[s - x];
        }
    }

    cout << dp[S] << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int n, T;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> T;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    int sum = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: `        cin >> a[i];`
  Explaination: Reads input values from standard input into variables.
- Line 12: `        sum += a[i];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 13: `    }`
  Explaination: Closes the current scope block.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    if ((sum + T) < 0 || (sum + T) % 2 != 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `        cout << 0 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 17: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    int S = (sum + T) / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: `    if (S < 0) { cout << 0 << "\n"; return 0; }`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    vector<long long> dp(S + 1, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 24: `    dp[0] = 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    for (int x : a) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 27: `        for (int s = S; s >= x; s--) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 28: `            dp[s] += dp[s - x];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 29: `        }`
  Explaination: Closes the current scope block.
- Line 30: `    }`
  Explaination: Closes the current scope block.
- Line 31: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 32: `    cout << dp[S] << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 33: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 34: `}`
  Explaination: Closes the current scope block.

## Block 16: Q16. Longest Increasing Subsequence (LIS)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    vector<int> dp(n, 1);
    int ans = 0;

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < i; j++) {
            if (a[j] < a[i]) dp[i] = max(dp[i], dp[j] + 1);
        }
        ans = max(ans, dp[i]);
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
- Line 7: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    vector<int> dp(n, 1);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 11: `    int ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        for (int j = 0; j < i; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `            if (a[j] < a[i]) dp[i] = max(dp[i], dp[j] + 1);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `        }`
  Explaination: Closes the current scope block.
- Line 17: `        ans = max(ans, dp[i]);`
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

## Block 17: Q17. Maximum Sum Increasing Subsequence

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    vector<long long> dp(n);
    long long ans = LLONG_MIN;

    for (int i = 0; i < n; i++) {
        dp[i] = a[i];
        for (int j = 0; j < i; j++) {
            if (a[j] < a[i]) dp[i] = max(dp[i], dp[j] + a[i]);
        }
        ans = max(ans, dp[i]);
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
- Line 7: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    vector<long long> dp(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 11: `    long long ans = LLONG_MIN;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        dp[i] = a[i];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `        for (int j = 0; j < i; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `            if (a[j] < a[i]) dp[i] = max(dp[i], dp[j] + a[i]);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `        }`
  Explaination: Closes the current scope block.
- Line 18: `        ans = max(ans, dp[i]);`
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

## Block 18: Q18. Longest Common Subsequence (LCS)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string a, b;
    cin >> a >> b;

    int n = (int)a.size(), m = (int)b.size();
    vector<vector<int>> dp(n + 1, vector<int>(m + 1, 0));

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            if (a[i - 1] == b[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
            else dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
        }
    }

    cout << dp[n][m] << "\n";
    return 0;
}
```

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
- Line 8: `    int n = (int)a.size(), m = (int)b.size();`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    vector<vector<int>> dp(n + 1, vector<int>(m + 1, 0));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    for (int i = 1; i <= n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        for (int j = 1; j <= m; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `            if (a[i - 1] == b[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `            else dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 15: `        }`
  Explaination: Closes the current scope block.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    cout << dp[n][m] << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 19: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 20: `}`
  Explaination: Closes the current scope block.

## Block 19: Q19. Longest Common Substring

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string a, b;
    cin >> a >> b;

    int n = (int)a.size(), m = (int)b.size();
    vector<vector<int>> dp(n + 1, vector<int>(m + 1, 0));
    int ans = 0;

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            if (a[i - 1] == b[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
                ans = max(ans, dp[i][j]);
            } else {
                dp[i][j] = 0;
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
- Line 5: `    string a, b;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 6: `    cin >> a >> b;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    int n = (int)a.size(), m = (int)b.size();`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    vector<vector<int>> dp(n + 1, vector<int>(m + 1, 0));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 10: `    int ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    for (int i = 1; i <= n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        for (int j = 1; j <= m; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `            if (a[i - 1] == b[j - 1]) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: `                dp[i][j] = 1 + dp[i - 1][j - 1];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `                ans = max(ans, dp[i][j]);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `            } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 18: `                dp[i][j] = 0;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `            }`
  Explaination: Closes the current scope block.
- Line 20: `        }`
  Explaination: Closes the current scope block.
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

## Block 20: Q20. Edit Distance

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string a, b;
    cin >> a >> b;

    int n = (int)a.size(), m = (int)b.size();
    vector<vector<int>> dp(n + 1, vector<int>(m + 1, 0));

    for (int i = 0; i <= n; i++) dp[i][0] = i;
    for (int j = 0; j <= m; j++) dp[0][j] = j;

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            if (a[i - 1] == b[j - 1]) dp[i][j] = dp[i - 1][j - 1];
            else dp[i][j] = 1 + min({dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]});
        }
    }

    cout << dp[n][m] << "\n";
    return 0;
}
```

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
- Line 8: `    int n = (int)a.size(), m = (int)b.size();`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    vector<vector<int>> dp(n + 1, vector<int>(m + 1, 0));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    for (int i = 0; i <= n; i++) dp[i][0] = i;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `    for (int j = 0; j <= m; j++) dp[0][j] = j;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    for (int i = 1; i <= n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        for (int j = 1; j <= m; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `            if (a[i - 1] == b[j - 1]) dp[i][j] = dp[i - 1][j - 1];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `            else dp[i][j] = 1 + min({dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]});`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 18: `        }`
  Explaination: Closes the current scope block.
- Line 19: `    }`
  Explaination: Closes the current scope block.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    cout << dp[n][m] << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 22: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 23: `}`
  Explaination: Closes the current scope block.

## Block 21: Q21. Distinct Subsequences Count

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string s, t;
    cin >> s >> t;

    int n = (int)s.size(), m = (int)t.size();
    vector<vector<unsigned long long>> dp(n + 1, vector<unsigned long long>(m + 1, 0));

    for (int i = 0; i <= n; i++) dp[i][0] = 1;

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            dp[i][j] = dp[i - 1][j];
            if (s[i - 1] == t[j - 1]) dp[i][j] += dp[i - 1][j - 1];
        }
    }

    cout << dp[n][m] << "\n";
    return 0;
}
```

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
- Line 8: `    int n = (int)s.size(), m = (int)t.size();`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    vector<vector<unsigned long long>> dp(n + 1, vector<unsigned long long>(m + 1, 0));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    for (int i = 0; i <= n; i++) dp[i][0] = 1;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    for (int i = 1; i <= n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        for (int j = 1; j <= m; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `            dp[i][j] = dp[i - 1][j];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `            if (s[i - 1] == t[j - 1]) dp[i][j] += dp[i - 1][j - 1];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `        }`
  Explaination: Closes the current scope block.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    cout << dp[n][m] << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 21: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 22: `}`
  Explaination: Closes the current scope block.

## Block 22: Q22. Longest Palindromic Subsequence

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin >> s;
    int n = (int)s.size();

    vector<vector<int>> dp(n, vector<int>(n, 0));
    for (int i = 0; i < n; i++) dp[i][i] = 1;

    for (int len = 2; len <= n; len++) {
        for (int i = 0; i + len - 1 < n; i++) {
            int j = i + len - 1;
            if (s[i] == s[j]) {
                dp[i][j] = (len == 2) ? 2 : dp[i + 1][j - 1] + 2;
            } else {
                dp[i][j] = max(dp[i + 1][j], dp[i][j - 1]);
            }
        }
    }

    cout << dp[0][n - 1] << "\n";
    return 0;
}
```

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
- Line 7: `    int n = (int)s.size();`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    vector<vector<int>> dp(n, vector<int>(n, 0));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 10: `    for (int i = 0; i < n; i++) dp[i][i] = 1;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    for (int len = 2; len <= n; len++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        for (int i = 0; i + len - 1 < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `            int j = i + len - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: `            if (s[i] == s[j]) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `                dp[i][j] = (len == 2) ? 2 : dp[i + 1][j - 1] + 2;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `            } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 18: `                dp[i][j] = max(dp[i + 1][j], dp[i][j - 1]);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `            }`
  Explaination: Closes the current scope block.
- Line 20: `        }`
  Explaination: Closes the current scope block.
- Line 21: `    }`
  Explaination: Closes the current scope block.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    cout << dp[0][n - 1] << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 24: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 25: `}`
  Explaination: Closes the current scope block.

## Block 23: Q23. Minimum Insertions to Make Palindrome

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin >> s;
    string r = s;
    reverse(r.begin(), r.end());

    int n = (int)s.size();
    vector<vector<int>> dp(n + 1, vector<int>(n + 1, 0));

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            if (s[i - 1] == r[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
            else dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
        }
    }

    int lps = dp[n][n];
    cout << (n - lps) << "\n";
    return 0;
}
```

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
- Line 7: `    string r = s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 8: `    reverse(r.begin(), r.end());`
  Explaination: Reverses elements in the specified range.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    int n = (int)s.size();`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    vector<vector<int>> dp(n + 1, vector<int>(n + 1, 0));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    for (int i = 1; i <= n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        for (int j = 1; j <= n; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `            if (s[i - 1] == r[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `            else dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 17: `        }`
  Explaination: Closes the current scope block.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    int lps = dp[n][n];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: `    cout << (n - lps) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 22: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 23: `}`
  Explaination: Closes the current scope block.

## Block 24: Q24. Unique Paths in Grid

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int m, n;
    cin >> m >> n;

    vector<vector<long long>> dp(m, vector<long long>(n, 0));
    for (int i = 0; i < m; i++) dp[i][0] = 1;
    for (int j = 0; j < n; j++) dp[0][j] = 1;

    for (int i = 1; i < m; i++) {
        for (int j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    cout << dp[m - 1][n - 1] << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int m, n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> m >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    vector<vector<long long>> dp(m, vector<long long>(n, 0));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (int i = 0; i < m; i++) dp[i][0] = 1;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `    for (int j = 0; j < n; j++) dp[0][j] = 1;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    for (int i = 1; i < m; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        for (int j = 1; j < n; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `        }`
  Explaination: Closes the current scope block.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    cout << dp[m - 1][n - 1] << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 19: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 20: `}`
  Explaination: Closes the current scope block.

## Block 25: Q25. Unique Paths with Obstacles

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int m, n;
    cin >> m >> n;
    vector<vector<int>> g(m, vector<int>(n));
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) cin >> g[i][j];
    }

    vector<vector<long long>> dp(m, vector<long long>(n, 0));
    if (g[0][0] == 1) { cout << 0 << "\n"; return 0; }
    dp[0][0] = 1;

    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (g[i][j] == 1) {
                dp[i][j] = 0;
                continue;
            }
            if (i > 0) dp[i][j] += dp[i - 1][j];
            if (j > 0) dp[i][j] += dp[i][j - 1];
        }
    }

    cout << dp[m - 1][n - 1] << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int m, n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> m >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<vector<int>> g(m, vector<int>(n));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (int i = 0; i < m; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: `        for (int j = 0; j < n; j++) cin >> g[i][j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `    }`
  Explaination: Closes the current scope block.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    vector<vector<long long>> dp(m, vector<long long>(n, 0));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 13: `    if (g[0][0] == 1) { cout << 0 << "\n"; return 0; }`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `    dp[0][0] = 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    for (int i = 0; i < m; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 17: `        for (int j = 0; j < n; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: `            if (g[i][j] == 1) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 19: `                dp[i][j] = 0;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `                continue;`
  Explaination: Skips remaining statements in the current loop iteration.
- Line 21: `            }`
  Explaination: Closes the current scope block.
- Line 22: `            if (i > 0) dp[i][j] += dp[i - 1][j];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 23: `            if (j > 0) dp[i][j] += dp[i][j - 1];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 24: `        }`
  Explaination: Closes the current scope block.
- Line 25: `    }`
  Explaination: Closes the current scope block.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `    cout << dp[m - 1][n - 1] << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 28: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 29: `}`
  Explaination: Closes the current scope block.

## Block 26: Q26. Minimum Path Sum

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int m, n;
    cin >> m >> n;
    vector<vector<int>> a(m, vector<int>(n));
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) cin >> a[i][j];
    }

    vector<vector<int>> dp(m, vector<int>(n, 0));
    dp[0][0] = a[0][0];

    for (int i = 1; i < m; i++) dp[i][0] = dp[i - 1][0] + a[i][0];
    for (int j = 1; j < n; j++) dp[0][j] = dp[0][j - 1] + a[0][j];

    for (int i = 1; i < m; i++) {
        for (int j = 1; j < n; j++) {
            dp[i][j] = a[i][j] + min(dp[i - 1][j], dp[i][j - 1]);
        }
    }

    cout << dp[m - 1][n - 1] << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int m, n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> m >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<vector<int>> a(m, vector<int>(n));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (int i = 0; i < m; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: `        for (int j = 0; j < n; j++) cin >> a[i][j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `    }`
  Explaination: Closes the current scope block.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    vector<vector<int>> dp(m, vector<int>(n, 0));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 13: `    dp[0][0] = a[0][0];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    for (int i = 1; i < m; i++) dp[i][0] = dp[i - 1][0] + a[i][0];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `    for (int j = 1; j < n; j++) dp[0][j] = dp[0][j - 1] + a[0][j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    for (int i = 1; i < m; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 19: `        for (int j = 1; j < n; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 20: `            dp[i][j] = a[i][j] + min(dp[i - 1][j], dp[i][j - 1]);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: `        }`
  Explaination: Closes the current scope block.
- Line 22: `    }`
  Explaination: Closes the current scope block.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    cout << dp[m - 1][n - 1] << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 25: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 26: `}`
  Explaination: Closes the current scope block.

## Block 27: Q27. Triangle Minimum Path Sum

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<vector<int>> t(n);
    for (int i = 0; i < n; i++) {
        t[i].resize(i + 1);
        for (int j = 0; j <= i; j++) cin >> t[i][j];
    }

    vector<int> dp = t[n - 1];
    for (int i = n - 2; i >= 0; i--) {
        for (int j = 0; j <= i; j++) {
            dp[j] = t[i][j] + min(dp[j], dp[j + 1]);
        }
    }

    cout << dp[0] << "\n";
    return 0;
}
```

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
- Line 7: `    vector<vector<int>> t(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: `        t[i].resize(i + 1);`
  Explaination: Executes a single statement that updates program state.
- Line 10: `        for (int j = 0; j <= i; j++) cin >> t[i][j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: `    }`
  Explaination: Closes the current scope block.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    vector<int> dp = t[n - 1];`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 14: `    for (int i = n - 2; i >= 0; i--) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        for (int j = 0; j <= i; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `            dp[j] = t[i][j] + min(dp[j], dp[j + 1]);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `        }`
  Explaination: Closes the current scope block.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    cout << dp[0] << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 21: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 22: `}`
  Explaination: Closes the current scope block.

## Block 28: Q28. Decode Ways

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin >> s;
    int n = (int)s.size();
    if (n == 0 || s[0] == '0') { cout << 0 << "\n"; return 0; }

    vector<long long> dp(n + 1, 0);
    dp[0] = 1;
    dp[1] = 1;

    for (int i = 2; i <= n; i++) {
        if (s[i - 1] != '0') dp[i] += dp[i - 1];
        int two = (s[i - 2] - '0') * 10 + (s[i - 1] - '0');
        if (two >= 10 && two <= 26) dp[i] += dp[i - 2];
    }

    cout << dp[n] << "\n";
    return 0;
}
```

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
- Line 7: `    int n = (int)s.size();`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 8: `    if (n == 0 || s[0] == '0') { cout << 0 << "\n"; return 0; }`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    vector<long long> dp(n + 1, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 11: `    dp[0] = 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: `    dp[1] = 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    for (int i = 2; i <= n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        if (s[i - 1] != '0') dp[i] += dp[i - 1];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `        int two = (s[i - 2] - '0') * 10 + (s[i - 1] - '0');`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: `        if (two >= 10 && two <= 26) dp[i] += dp[i - 2];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    cout << dp[n] << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 21: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 22: `}`
  Explaination: Closes the current scope block.

## Block 29: Q29. Matrix Chain Multiplication (Minimum Multiplications)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> p(n);
    for (int i = 0; i < n; i++) cin >> p[i];

    int m = n - 1;
    vector<vector<long long>> dp(m + 1, vector<long long>(m + 1, 0));

    for (int len = 2; len <= m; len++) {
        for (int i = 1; i + len - 1 <= m; i++) {
            int j = i + len - 1;
            dp[i][j] = LLONG_MAX;
            for (int k = i; k < j; k++) {
                long long cost = dp[i][k] + dp[k + 1][j] + 1LL * p[i - 1] * p[k] * p[j];
                dp[i][j] = min(dp[i][j], cost);
            }
        }
    }

    cout << dp[1][m] << "\n";
    return 0;
}
```

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
- Line 8: `    for (int i = 0; i < n; i++) cin >> p[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    int m = n - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    vector<vector<long long>> dp(m + 1, vector<long long>(m + 1, 0));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    for (int len = 2; len <= m; len++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        for (int i = 1; i + len - 1 <= m; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `            int j = i + len - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `            dp[i][j] = LLONG_MAX;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `            for (int k = i; k < j; k++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: `                long long cost = dp[i][k] + dp[k + 1][j] + 1LL * p[i - 1] * p[k] * p[j];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `                dp[i][j] = min(dp[i][j], cost);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `            }`
  Explaination: Closes the current scope block.
- Line 21: `        }`
  Explaination: Closes the current scope block.
- Line 22: `    }`
  Explaination: Closes the current scope block.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    cout << dp[1][m] << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 25: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 26: `}`
  Explaination: Closes the current scope block.

## Block 30: Q30. Maximum Subarray Sum (Kadane)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<long long> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

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
- Line 5: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    long long cur = a[0], best = a[0];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    for (int i = 1; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        cur = max(a[i], cur + a[i]);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 13: `        best = max(best, cur);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: `    }`
  Explaination: Closes the current scope block.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    cout << best << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 17: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 18: `}`
  Explaination: Closes the current scope block.

## Block 31: Q31. Maximum Product Subarray

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<long long> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    long long mx = a[0], mn = a[0], ans = a[0];
    for (int i = 1; i < n; i++) {
        if (a[i] < 0) swap(mx, mn);
        mx = max(a[i], mx * a[i]);
        mn = min(a[i], mn * a[i]);
        ans = max(ans, mx);
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
- Line 8: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    long long mx = a[0], mn = a[0], ans = a[0];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    for (int i = 1; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        if (a[i] < 0) swap(mx, mn);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: `        mx = max(a[i], mx * a[i]);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: `        mn = min(a[i], mn * a[i]);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `        ans = max(ans, mx);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 19: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 20: `}`
  Explaination: Closes the current scope block.

## Block 32: Q32. Stock Buy-Sell with Cooldown

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> p(n);
    for (int i = 0; i < n; i++) cin >> p[i];

    if (n == 0) { cout << 0 << "\n"; return 0; }

    long long hold = -p[0];
    long long sold = 0;
    long long rest = 0;

    for (int i = 1; i < n; i++) {
        long long prevHold = hold;
        long long prevSold = sold;
        long long prevRest = rest;

        hold = max(prevHold, prevRest - p[i]);
        sold = prevHold + p[i];
        rest = max(prevRest, prevSold);
    }

    cout << max(sold, rest) << "\n";
    return 0;
}
```

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
- Line 8: `    for (int i = 0; i < n; i++) cin >> p[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    if (n == 0) { cout << 0 << "\n"; return 0; }`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    long long hold = -p[0];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    long long sold = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `    long long rest = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    for (int i = 1; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 17: `        long long prevHold = hold;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: `        long long prevSold = sold;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `        long long prevRest = rest;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `        hold = max(prevHold, prevRest - p[i]);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: `        sold = prevHold + p[i];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: `        rest = max(prevRest, prevSold);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 24: `    }`
  Explaination: Closes the current scope block.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    cout << max(sold, rest) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 27: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 28: `}`
  Explaination: Closes the current scope block.
