# TCS_NQT_Greedy_Full_Questions_Answers_CPP.md: Line-by-Line Code Explaination

This file explains each C++ code block line-by-line from the source topic file.

## Block 1: Q1. Assign Cookies (Maximum Content Children)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, m;
    cin >> n >> m;
    vector<int> g(n), s(m);
    for (int i = 0; i < n; i++) cin >> g[i];
    for (int i = 0; i < m; i++) cin >> s[i];

    sort(g.begin(), g.end());
    sort(s.begin(), s.end());

    int i = 0, j = 0, ans = 0;
    while (i < n && j < m) {
        if (s[j] >= g[i]) {
            ans++;
            i++;
            j++;
        } else {
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
- Line 5: `    int n, m;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> m;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<int> g(n), s(m);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (int i = 0; i < n; i++) cin >> g[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: `    for (int i = 0; i < m; i++) cin >> s[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    sort(g.begin(), g.end());`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 12: `    sort(s.begin(), s.end());`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    int i = 0, j = 0, ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: `    while (i < n && j < m) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 16: `        if (s[j] >= g[i]) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `            ans++;`
  Explaination: Executes a single statement that updates program state.
- Line 18: `            i++;`
  Explaination: Executes a single statement that updates program state.
- Line 19: `            j++;`
  Explaination: Executes a single statement that updates program state.
- Line 20: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 21: `            j++;`
  Explaination: Executes a single statement that updates program state.
- Line 22: `        }`
  Explaination: Closes the current scope block.
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

## Block 2: Q2. Lemonade Change

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    int five = 0, ten = 0;

    for (int i = 0; i < n; i++) {
        int bill;
        cin >> bill;

        if (bill == 5) {
            five++;
        } else if (bill == 10) {
            if (five == 0) {
                cout << "No\n";
                return 0;
            }
            five--;
            ten++;
        } else {
            if (ten > 0 && five > 0) {
                ten--;
                five--;
            } else if (five >= 3) {
                five -= 3;
            } else {
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
- Line 7: `    int five = 0, ten = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        int bill;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `        cin >> bill;`
  Explaination: Reads input values from standard input into variables.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `        if (bill == 5) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `            five++;`
  Explaination: Executes a single statement that updates program state.
- Line 15: `        } else if (bill == 10) {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 16: `            if (five == 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `                cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 18: `                return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 19: `            }`
  Explaination: Closes the current scope block.
- Line 20: `            five--;`
  Explaination: Executes a single statement that updates program state.
- Line 21: `            ten++;`
  Explaination: Executes a single statement that updates program state.
- Line 22: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 23: `            if (ten > 0 && five > 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 24: `                ten--;`
  Explaination: Executes a single statement that updates program state.
- Line 25: `                five--;`
  Explaination: Executes a single statement that updates program state.
- Line 26: `            } else if (five >= 3) {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 27: `                five -= 3;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 28: `            } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 29: `                cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 30: `                return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 31: `            }`
  Explaination: Closes the current scope block.
- Line 32: `        }`
  Explaination: Closes the current scope block.
- Line 33: `    }`
  Explaination: Closes the current scope block.
- Line 34: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 35: `    cout << "Yes\n";`
  Explaination: Prints formatted output to standard output.
- Line 36: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 37: `}`
  Explaination: Closes the current scope block.

## Block 3: Q3. Minimum Coins (Canonical Denominations)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long A;
    cin >> A;
    vector<int> den = {2000, 500, 200, 100, 50, 20, 10, 5, 2, 1};

    long long cnt = 0;
    for (int d : den) {
        cnt += A / d;
        A %= d;
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
- Line 5: `    long long A;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> A;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<int> den = {2000, 500, 200, 100, 50, 20, 10, 5, 2, 1};`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    long long cnt = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: `    for (int d : den) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: `        cnt += A / d;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: `        A %= d;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 13: `    }`
  Explaination: Closes the current scope block.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    cout << cnt << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 16: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 17: `}`
  Explaination: Closes the current scope block.

## Block 4: Q4. Fractional Knapsack

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Item {
    double v, w;
};

int main() {
    int n;
    double W;
    cin >> n >> W;

    vector<Item> a(n);
    for (int i = 0; i < n; i++) cin >> a[i].v >> a[i].w;

    sort(a.begin(), a.end(), [](const Item& x, const Item& y) {
        return (x.v / x.w) > (y.v / y.w);
    });

    double ans = 0.0;
    for (auto &it : a) {
        if (W <= 0) break;
        if (it.w <= W) {
            ans += it.v;
            W -= it.w;
        } else {
            ans += (it.v / it.w) * W;
            W = 0;
        }
    }

    cout << fixed << setprecision(6) << ans << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `struct Item {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 5: `    double v, w;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `};`
  Explaination: Closes the current class/struct/initializer block.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 9: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: `    double W;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    cin >> n >> W;`
  Explaination: Reads input values from standard input into variables.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    vector<Item> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 14: `    for (int i = 0; i < n; i++) cin >> a[i].v >> a[i].w;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    sort(a.begin(), a.end(), [](const Item& x, const Item& y) {`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 17: `        return (x.v / x.w) > (y.v / y.w);`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 18: `    });`
  Explaination: Executes a single statement that updates program state.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    double ans = 0.0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: `    for (auto &it : a) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 22: `        if (W <= 0) break;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 23: `        if (it.w <= W) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 24: `            ans += it.v;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 25: `            W -= it.w;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 26: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 27: `            ans += (it.v / it.w) * W;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 28: `            W = 0;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 29: `        }`
  Explaination: Closes the current scope block.
- Line 30: `    }`
  Explaination: Closes the current scope block.
- Line 31: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 32: `    cout << fixed << setprecision(6) << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 33: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 34: `}`
  Explaination: Closes the current scope block.

## Block 5: Q5. Activity Selection

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<pair<int,int>> a(n);
    for (int i = 0; i < n; i++) {
        int s, e;
        cin >> s >> e;
        a[i] = {e, s};
    }

    sort(a.begin(), a.end());

    int ans = 0;
    int lastEnd = INT_MIN;
    for (auto &x : a) {
        int e = x.first, s = x.second;
        if (s >= lastEnd) {
            ans++;
            lastEnd = e;
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
- Line 7: `    vector<pair<int,int>> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: `        int s, e;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: `        cin >> s >> e;`
  Explaination: Reads input values from standard input into variables.
- Line 11: `        a[i] = {e, s};`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: `    }`
  Explaination: Closes the current scope block.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    sort(a.begin(), a.end());`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    int ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: `    int lastEnd = INT_MIN;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: `    for (auto &x : a) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 19: `        int e = x.first, s = x.second;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 20: `        if (s >= lastEnd) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: `            ans++;`
  Explaination: Executes a single statement that updates program state.
- Line 22: `            lastEnd = e;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: `        }`
  Explaination: Closes the current scope block.
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

## Block 6: Q6. N Meetings in One Room (Count + Order)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Meet {
    int s, e, idx;
};

int main() {
    int n;
    cin >> n;
    vector<int> start(n), endt(n);
    for (int i = 0; i < n; i++) cin >> start[i];
    for (int i = 0; i < n; i++) cin >> endt[i];

    vector<Meet> m(n);
    for (int i = 0; i < n; i++) m[i] = {start[i], endt[i], i + 1};

    sort(m.begin(), m.end(), [](const Meet& a, const Meet& b) {
        if (a.e == b.e) return a.idx < b.idx;
        return a.e < b.e;
    });

    vector<int> chosen;
    int last = -1;
    for (auto &x : m) {
        if (x.s > last) {
            chosen.push_back(x.idx);
            last = x.e;
        }
    }

    cout << chosen.size() << "\n";
    for (int x : chosen) cout << x << " ";
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
- Line 4: `struct Meet {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 5: `    int s, e, idx;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `};`
  Explaination: Closes the current class/struct/initializer block.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 9: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 11: `    vector<int> start(n), endt(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 12: `    for (int i = 0; i < n; i++) cin >> start[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `    for (int i = 0; i < n; i++) cin >> endt[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    vector<Meet> m(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 16: `    for (int i = 0; i < n; i++) m[i] = {start[i], endt[i], i + 1};`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    sort(m.begin(), m.end(), [](const Meet& a, const Meet& b) {`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 19: `        if (a.e == b.e) return a.idx < b.idx;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 20: `        return a.e < b.e;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 21: `    });`
  Explaination: Executes a single statement that updates program state.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    vector<int> chosen;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 24: `    int last = -1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 25: `    for (auto &x : m) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 26: `        if (x.s > last) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 27: `            chosen.push_back(x.idx);`
  Explaination: Appends a new element to the end of the container.
- Line 28: `            last = x.e;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 29: `        }`
  Explaination: Closes the current scope block.
- Line 30: `    }`
  Explaination: Closes the current scope block.
- Line 31: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 32: `    cout << chosen.size() << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 33: `    for (int x : chosen) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 34: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 35: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 36: `}`
  Explaination: Closes the current scope block.

## Block 7: Q7. Minimum Platforms (Railway)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> arr(n), dep(n);
    for (int i = 0; i < n; i++) cin >> arr[i];
    for (int i = 0; i < n; i++) cin >> dep[i];

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
- Line 8: `    for (int i = 0; i < n; i++) cin >> arr[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: `    for (int i = 0; i < n; i++) cin >> dep[i];`
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

## Block 8: Q8. Meeting Rooms II (Minimum Rooms)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<pair<int,int>> a(n);
    for (int i = 0; i < n; i++) cin >> a[i].first >> a[i].second;

    sort(a.begin(), a.end());
    priority_queue<int, vector<int>, greater<int>> pq;

    for (auto &it : a) {
        int s = it.first, e = it.second;
        if (!pq.empty() && pq.top() <= s) pq.pop();
        pq.push(e);
    }

    cout << pq.size() << "\n";
    return 0;
}
```

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
- Line 7: `    vector<pair<int,int>> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (int i = 0; i < n; i++) cin >> a[i].first >> a[i].second;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    sort(a.begin(), a.end());`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 11: `    priority_queue<int, vector<int>, greater<int>> pq;`
  Explaination: Declares a heap-based priority queue.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    for (auto &it : a) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        int s = it.first, e = it.second;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: `        if (!pq.empty() && pq.top() <= s) pq.pop();`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `        pq.push(e);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 17: `    }`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    cout << pq.size() << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 20: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 21: `}`
  Explaination: Closes the current scope block.

## Block 9: Q9. Erase Overlap Intervals

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<pair<int,int>> a(n);
    for (int i = 0; i < n; i++) cin >> a[i].first >> a[i].second;

    sort(a.begin(), a.end(), [](auto &x, auto &y) {
        if (x.second == y.second) return x.first < y.first;
        return x.second < y.second;
    });

    int keep = 0;
    int lastEnd = INT_MIN;
    for (auto &it : a) {
        if (it.first >= lastEnd) {
            keep++;
            lastEnd = it.second;
        }
    }

    cout << (n - keep) << "\n";
    return 0;
}
```

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
- Line 7: `    vector<pair<int,int>> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (int i = 0; i < n; i++) cin >> a[i].first >> a[i].second;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    sort(a.begin(), a.end(), [](auto &x, auto &y) {`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 11: `        if (x.second == y.second) return x.first < y.first;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 12: `        return x.second < y.second;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 13: `    });`
  Explaination: Executes a single statement that updates program state.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    int keep = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `    int lastEnd = INT_MIN;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: `    for (auto &it : a) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: `        if (it.first >= lastEnd) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 19: `            keep++;`
  Explaination: Executes a single statement that updates program state.
- Line 20: `            lastEnd = it.second;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: `        }`
  Explaination: Closes the current scope block.
- Line 22: `    }`
  Explaination: Closes the current scope block.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    cout << (n - keep) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 25: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 26: `}`
  Explaination: Closes the current scope block.

## Block 10: Q10. Minimum Arrows to Burst Balloons

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<pair<long long,long long>> a(n);
    for (int i = 0; i < n; i++) cin >> a[i].first >> a[i].second;

    sort(a.begin(), a.end(), [](auto &x, auto &y) {
        if (x.second == y.second) return x.first < y.first;
        return x.second < y.second;
    });

    int arrows = 0;
    long long pos = LLONG_MIN;

    for (auto &b : a) {
        if (arrows == 0 || b.first > pos) {
            arrows++;
            pos = b.second;
        }
    }

    cout << arrows << "\n";
    return 0;
}
```

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
- Line 7: `    vector<pair<long long,long long>> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (int i = 0; i < n; i++) cin >> a[i].first >> a[i].second;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    sort(a.begin(), a.end(), [](auto &x, auto &y) {`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 11: `        if (x.second == y.second) return x.first < y.first;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 12: `        return x.second < y.second;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 13: `    });`
  Explaination: Executes a single statement that updates program state.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    int arrows = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `    long long pos = LLONG_MIN;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    for (auto &b : a) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 19: `        if (arrows == 0 || b.first > pos) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 20: `            arrows++;`
  Explaination: Executes a single statement that updates program state.
- Line 21: `            pos = b.second;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: `        }`
  Explaination: Closes the current scope block.
- Line 23: `    }`
  Explaination: Closes the current scope block.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    cout << arrows << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 26: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 27: `}`
  Explaination: Closes the current scope block.

## Block 11: Q11. Merge Overlapping Intervals

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<pair<int,int>> a(n);
    for (int i = 0; i < n; i++) cin >> a[i].first >> a[i].second;

    sort(a.begin(), a.end());
    vector<pair<int,int>> ans;

    for (auto &it : a) {
        if (ans.empty() || ans.back().second < it.first) {
            ans.push_back(it);
        } else {
            ans.back().second = max(ans.back().second, it.second);
        }
    }

    cout << ans.size() << "\n";
    for (auto &x : ans) cout << x.first << " " << x.second << "\n";
    return 0;
}
```

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
- Line 7: `    vector<pair<int,int>> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (int i = 0; i < n; i++) cin >> a[i].first >> a[i].second;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    sort(a.begin(), a.end());`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 11: `    vector<pair<int,int>> ans;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    for (auto &it : a) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        if (ans.empty() || ans.back().second < it.first) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: `            ans.push_back(it);`
  Explaination: Appends a new element to the end of the container.
- Line 16: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 17: `            ans.back().second = max(ans.back().second, it.second);`
  Explaination: Accesses the last element of a sequence container.
- Line 18: `        }`
  Explaination: Closes the current scope block.
- Line 19: `    }`
  Explaination: Closes the current scope block.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    cout << ans.size() << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 22: `    for (auto &x : ans) cout << x.first << " " << x.second << "\n";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 23: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 24: `}`
  Explaination: Closes the current scope block.

## Block 12: Q12. Insert Interval

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<pair<int,int>> a(n);
    for (int i = 0; i < n; i++) cin >> a[i].first >> a[i].second;
    pair<int,int> cur;
    cin >> cur.first >> cur.second;

    vector<pair<int,int>> res;
    int i = 0;

    while (i < n && a[i].second < cur.first) res.push_back(a[i++]);

    while (i < n && a[i].first <= cur.second) {
        cur.first = min(cur.first, a[i].first);
        cur.second = max(cur.second, a[i].second);
        i++;
    }
    res.push_back(cur);

    while (i < n) res.push_back(a[i++]);

    cout << res.size() << "\n";
    for (auto &x : res) cout << x.first << " " << x.second << "\n";
    return 0;
}
```

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
- Line 7: `    vector<pair<int,int>> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (int i = 0; i < n; i++) cin >> a[i].first >> a[i].second;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: `    pair<int,int> cur;`
  Explaination: Executes a single statement that updates program state.
- Line 10: `    cin >> cur.first >> cur.second;`
  Explaination: Reads input values from standard input into variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    vector<pair<int,int>> res;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 13: `    int i = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    while (i < n && a[i].second < cur.first) res.push_back(a[i++]);`
  Explaination: Loop that repeats while the given condition remains true.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    while (i < n && a[i].first <= cur.second) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 18: `        cur.first = min(cur.first, a[i].first);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `        cur.second = max(cur.second, a[i].second);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `        i++;`
  Explaination: Executes a single statement that updates program state.
- Line 21: `    }`
  Explaination: Closes the current scope block.
- Line 22: `    res.push_back(cur);`
  Explaination: Appends a new element to the end of the container.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    while (i < n) res.push_back(a[i++]);`
  Explaination: Loop that repeats while the given condition remains true.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    cout << res.size() << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 27: `    for (auto &x : res) cout << x.first << " " << x.second << "\n";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 28: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 29: `}`
  Explaination: Closes the current scope block.

## Block 13: Q13. Job Sequencing with Deadlines

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Job {
    int d, p;
};

int main() {
    int n;
    cin >> n;
    vector<Job> jobs(n);
    int maxD = 0;
    for (int i = 0; i < n; i++) {
        cin >> jobs[i].d >> jobs[i].p;
        maxD = max(maxD, jobs[i].d);
    }

    sort(jobs.begin(), jobs.end(), [](const Job& a, const Job& b) {
        return a.p > b.p;
    });

    vector<int> slot(maxD + 1, -1);
    int cnt = 0;
    long long profit = 0;

    for (int i = 0; i < n; i++) {
        for (int t = jobs[i].d; t >= 1; t--) {
            if (slot[t] == -1) {
                slot[t] = i;
                cnt++;
                profit += jobs[i].p;
                break;
            }
        }
    }

    cout << cnt << " " << profit << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `struct Job {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 5: `    int d, p;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `};`
  Explaination: Closes the current class/struct/initializer block.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 9: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 11: `    vector<Job> jobs(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 12: `    int maxD = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        cin >> jobs[i].d >> jobs[i].p;`
  Explaination: Reads input values from standard input into variables.
- Line 15: `        maxD = max(maxD, jobs[i].d);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    sort(jobs.begin(), jobs.end(), [](const Job& a, const Job& b) {`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 19: `        return a.p > b.p;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 20: `    });`
  Explaination: Executes a single statement that updates program state.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    vector<int> slot(maxD + 1, -1);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 23: `    int cnt = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 24: `    long long profit = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 27: `        for (int t = jobs[i].d; t >= 1; t--) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 28: `            if (slot[t] == -1) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 29: `                slot[t] = i;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 30: `                cnt++;`
  Explaination: Executes a single statement that updates program state.
- Line 31: `                profit += jobs[i].p;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 32: `                break;`
  Explaination: Exits the nearest loop or switch block immediately.
- Line 33: `            }`
  Explaination: Closes the current scope block.
- Line 34: `        }`
  Explaination: Closes the current scope block.
- Line 35: `    }`
  Explaination: Closes the current scope block.
- Line 36: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 37: `    cout << cnt << " " << profit << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 38: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 39: `}`
  Explaination: Closes the current scope block.

## Block 14: Q14. Minimum Cost to Connect Ropes

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    priority_queue<long long, vector<long long>, greater<long long>> pq;

    for (int i = 0; i < n; i++) {
        long long x;
        cin >> x;
        pq.push(x);
    }

    long long cost = 0;
    while (pq.size() > 1) {
        long long a = pq.top(); pq.pop();
        long long b = pq.top(); pq.pop();
        long long c = a + b;
        cost += c;
        pq.push(c);
    }

    cout << cost << "\n";
    return 0;
}
```

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
- Line 7: `    priority_queue<long long, vector<long long>, greater<long long>> pq;`
  Explaination: Declares a heap-based priority queue.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        long long x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `        cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 12: `        pq.push(x);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 13: `    }`
  Explaination: Closes the current scope block.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    long long cost = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `    while (pq.size() > 1) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 17: `        long long a = pq.top(); pq.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 18: `        long long b = pq.top(); pq.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 19: `        long long c = a + b;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 20: `        cost += c;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: `        pq.push(c);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 22: `    }`
  Explaination: Closes the current scope block.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    cout << cost << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 25: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 26: `}`
  Explaination: Closes the current scope block.

## Block 15: Q15. Gas Station Circular Tour

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> gas(n), cost(n);
    for (int i = 0; i < n; i++) cin >> gas[i];
    for (int i = 0; i < n; i++) cin >> cost[i];

    int total = 0, tank = 0, start = 0;
    for (int i = 0; i < n; i++) {
        int diff = gas[i] - cost[i];
        total += diff;
        tank += diff;
        if (tank < 0) {
            start = i + 1;
            tank = 0;
        }
    }

    cout << (total >= 0 ? start : -1) << "\n";
    return 0;
}
```

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
- Line 7: `    vector<int> gas(n), cost(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (int i = 0; i < n; i++) cin >> gas[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: `    for (int i = 0; i < n; i++) cin >> cost[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    int total = 0, tank = 0, start = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        int diff = gas[i] - cost[i];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `        total += diff;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `        tank += diff;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `        if (tank < 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `            start = i + 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: `            tank = 0;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `        }`
  Explaination: Closes the current scope block.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    cout << (total >= 0 ? start : -1) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 23: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 24: `}`
  Explaination: Closes the current scope block.

## Block 16: Q16. Jump Game I (Reach Last Index)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    int far = 0;
    for (int i = 0; i < n; i++) {
        if (i > far) {
            cout << "No\n";
            return 0;
        }
        far = max(far, i + a[i]);
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
- Line 7: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    int far = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        if (i > far) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: `            cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 14: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 15: `        }`
  Explaination: Closes the current scope block.
- Line 16: `        far = max(far, i + a[i]);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `    }`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    cout << "Yes\n";`
  Explaination: Prints formatted output to standard output.
- Line 20: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 21: `}`
  Explaination: Closes the current scope block.

## Block 17: Q17. Jump Game II (Minimum Jumps)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    if (n <= 1) { cout << 0 << "\n"; return 0; }
    if (a[0] == 0) { cout << -1 << "\n"; return 0; }

    int jumps = 0, end = 0, far = 0;
    for (int i = 0; i < n - 1; i++) {
        far = max(far, i + a[i]);
        if (i == end) {
            jumps++;
            end = far;
            if (end <= i) {
                cout << -1 << "\n";
                return 0;
            }
        }
    }

    cout << jumps << "\n";
    return 0;
}
```

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
- Line 10: `    if (n <= 1) { cout << 0 << "\n"; return 0; }`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 11: `    if (a[0] == 0) { cout << -1 << "\n"; return 0; }`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    int jumps = 0, end = 0, far = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `    for (int i = 0; i < n - 1; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        far = max(far, i + a[i]);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `        if (i == end) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `            jumps++;`
  Explaination: Executes a single statement that updates program state.
- Line 18: `            end = far;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `            if (end <= i) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 20: `                cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 21: `                return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 22: `            }`
  Explaination: Closes the current scope block.
- Line 23: `        }`
  Explaination: Closes the current scope block.
- Line 24: `    }`
  Explaination: Closes the current scope block.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    cout << jumps << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 27: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 28: `}`
  Explaination: Closes the current scope block.

## Block 18: Q18. Candy Distribution

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> r(n);
    for (int i = 0; i < n; i++) cin >> r[i];

    vector<int> c(n, 1);

    for (int i = 1; i < n; i++) {
        if (r[i] > r[i - 1]) c[i] = c[i - 1] + 1;
    }

    for (int i = n - 2; i >= 0; i--) {
        if (r[i] > r[i + 1]) c[i] = max(c[i], c[i + 1] + 1);
    }

    long long ans = 0;
    for (int x : c) ans += x;
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
- Line 7: `    vector<int> r(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (int i = 0; i < n; i++) cin >> r[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    vector<int> c(n, 1);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    for (int i = 1; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        if (r[i] > r[i - 1]) c[i] = c[i - 1] + 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `    }`
  Explaination: Closes the current scope block.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    for (int i = n - 2; i >= 0; i--) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 17: `        if (r[i] > r[i + 1]) c[i] = max(c[i], c[i + 1] + 1);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    long long ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: `    for (int x : c) ans += x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 22: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 23: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 24: `}`
  Explaination: Closes the current scope block.

## Block 19: Q19. Best Time to Buy and Sell Stock II

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> p(n);
    for (int i = 0; i < n; i++) cin >> p[i];

    long long profit = 0;
    for (int i = 1; i < n; i++) {
        if (p[i] > p[i - 1]) profit += p[i] - p[i - 1];
    }

    cout << profit << "\n";
    return 0;
}
```

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
- Line 10: `    long long profit = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    for (int i = 1; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        if (p[i] > p[i - 1]) profit += p[i] - p[i - 1];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: `    }`
  Explaination: Closes the current scope block.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    cout << profit << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 16: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 17: `}`
  Explaination: Closes the current scope block.

## Block 20: Q20. Stock Buy-Sell with Transaction Fee

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, fee;
    cin >> n >> fee;
    vector<int> p(n);
    for (int i = 0; i < n; i++) cin >> p[i];

    long long cash = 0;
    long long hold = -p[0];

    for (int i = 1; i < n; i++) {
        long long prevCash = cash;
        cash = max(cash, hold + p[i] - fee);
        hold = max(hold, prevCash - p[i]);
    }

    cout << cash << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int n, fee;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> fee;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<int> p(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (int i = 0; i < n; i++) cin >> p[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    long long cash = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    long long hold = -p[0];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    for (int i = 1; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        long long prevCash = cash;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: `        cash = max(cash, hold + p[i] - fee);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `        hold = max(hold, prevCash - p[i]);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `    }`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    cout << cash << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 20: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 21: `}`
  Explaination: Closes the current scope block.

## Block 21: Q21. Can Place Flowers

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    int placed = 0;
    for (int i = 0; i < n; i++) {
        if (a[i] == 1) continue;
        int left = (i == 0 ? 0 : a[i - 1]);
        int right = (i == n - 1 ? 0 : a[i + 1]);
        if (left == 0 && right == 0) {
            a[i] = 1;
            placed++;
        }
    }

    cout << (placed >= k ? "Yes" : "No") << "\n";
    return 0;
}
```

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
- Line 8: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    int placed = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        if (a[i] == 1) continue;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: `        int left = (i == 0 ? 0 : a[i - 1]);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `        int right = (i == n - 1 ? 0 : a[i + 1]);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: `        if (left == 0 && right == 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `            a[i] = 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `            placed++;`
  Explaination: Executes a single statement that updates program state.
- Line 18: `        }`
  Explaination: Closes the current scope block.
- Line 19: `    }`
  Explaination: Closes the current scope block.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    cout << (placed >= k ? "Yes" : "No") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 22: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 23: `}`
  Explaination: Closes the current scope block.

## Block 22: Q22. Partition Labels

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin >> s;

    vector<int> last(256, -1);
    for (int i = 0; i < (int)s.size(); i++) last[(unsigned char)s[i]] = i;

    vector<int> ans;
    int start = 0, end = 0;

    for (int i = 0; i < (int)s.size(); i++) {
        end = max(end, last[(unsigned char)s[i]]);
        if (i == end) {
            ans.push_back(end - start + 1);
            start = i + 1;
        }
    }

    cout << ans.size() << "\n";
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
- Line 5: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 6: `    cin >> s;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    vector<int> last(256, -1);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (int i = 0; i < (int)s.size(); i++) last[(unsigned char)s[i]] = i;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    vector<int> ans;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 12: `    int start = 0, end = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    for (int i = 0; i < (int)s.size(); i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        end = max(end, last[(unsigned char)s[i]]);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `        if (i == end) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `            ans.push_back(end - start + 1);`
  Explaination: Appends a new element to the end of the container.
- Line 18: `            start = i + 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `        }`
  Explaination: Closes the current scope block.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    cout << ans.size() << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 23: `    for (int x : ans) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 24: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 25: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 26: `}`
  Explaination: Closes the current scope block.

## Block 23: Q23. Remove K Digits (Smallest Number)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string num;
    int k;
    cin >> num >> k;

    string st;
    for (char c : num) {
        while (!st.empty() && k > 0 && st.back() > c) {
            st.pop_back();
            k--;
        }
        st.push_back(c);
    }

    while (k > 0 && !st.empty()) {
        st.pop_back();
        k--;
    }

    int i = 0;
    while (i < (int)st.size() && st[i] == '0') i++;
    string ans = (i == (int)st.size() ? "0" : st.substr(i));

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
- Line 5: `    string num;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 6: `    int k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    cin >> num >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    string st;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 10: `    for (char c : num) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: `        while (!st.empty() && k > 0 && st.back() > c) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 12: `            st.pop_back();`
  Explaination: Removes the last element from the container.
- Line 13: `            k--;`
  Explaination: Executes a single statement that updates program state.
- Line 14: `        }`
  Explaination: Closes the current scope block.
- Line 15: `        st.push_back(c);`
  Explaination: Appends a new element to the end of the container.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    while (k > 0 && !st.empty()) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 19: `        st.pop_back();`
  Explaination: Removes the last element from the container.
- Line 20: `        k--;`
  Explaination: Executes a single statement that updates program state.
- Line 21: `    }`
  Explaination: Closes the current scope block.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    int i = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 24: `    while (i < (int)st.size() && st[i] == '0') i++;`
  Explaination: Loop that repeats while the given condition remains true.
- Line 25: `    string ans = (i == (int)st.size() ? "0" : st.substr(i));`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 28: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 29: `}`
  Explaination: Closes the current scope block.

## Block 24: Q24. Valid Parenthesis String with `*`

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin >> s;

    int low = 0, high = 0;
    for (char c : s) {
        if (c == '(') {
            low++;
            high++;
        } else if (c == ')') {
            low = max(0, low - 1);
            high--;
        } else {
            low = max(0, low - 1);
            high++;
        }

        if (high < 0) {
            cout << "No\n";
            return 0;
        }
    }

    cout << (low == 0 ? "Yes" : "No") << "\n";
    return 0;
}
```

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
- Line 8: `    int low = 0, high = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    for (char c : s) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        if (c == '(') {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 11: `            low++;`
  Explaination: Executes a single statement that updates program state.
- Line 12: `            high++;`
  Explaination: Executes a single statement that updates program state.
- Line 13: `        } else if (c == ')') {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 14: `            low = max(0, low - 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `            high--;`
  Explaination: Executes a single statement that updates program state.
- Line 16: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 17: `            low = max(0, low - 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: `            high++;`
  Explaination: Executes a single statement that updates program state.
- Line 19: `        }`
  Explaination: Closes the current scope block.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `        if (high < 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 22: `            cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 23: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 24: `        }`
  Explaination: Closes the current scope block.
- Line 25: `    }`
  Explaination: Closes the current scope block.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `    cout << (low == 0 ? "Yes" : "No") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 28: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 29: `}`
  Explaination: Closes the current scope block.

## Block 25: Q25. Reorganize String (No Adjacent Equal)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin >> s;

    vector<int> f(256, 0);
    for (char c : s) f[(unsigned char)c]++;

    int n = (int)s.size();
    int mx = 0;
    for (int x : f) mx = max(mx, x);
    if (mx > (n + 1) / 2) {
        cout << -1 << "\n";
        return 0;
    }

    priority_queue<pair<int,char>> pq;
    for (int c = 0; c < 256; c++) {
        if (f[c] > 0) pq.push({f[c], (char)c});
    }

    string ans;
    pair<int,char> prev = {0, '#'};

    while (!pq.empty()) {
        auto cur = pq.top();
        pq.pop();

        ans.push_back(cur.second);
        cur.first--;

        if (prev.first > 0) pq.push(prev);
        prev = cur;
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
- Line 8: `    vector<int> f(256, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (char c : s) f[(unsigned char)c]++;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    int n = (int)s.size();`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    int mx = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    for (int x : f) mx = max(mx, x);`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `    if (mx > (n + 1) / 2) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: `        cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 16: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 17: `    }`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    priority_queue<pair<int,char>> pq;`
  Explaination: Declares a heap-based priority queue.
- Line 20: `    for (int c = 0; c < 256; c++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 21: `        if (f[c] > 0) pq.push({f[c], (char)c});`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 22: `    }`
  Explaination: Closes the current scope block.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    string ans;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 25: `    pair<int,char> prev = {0, '#'};`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `    while (!pq.empty()) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 28: `        auto cur = pq.top();`
  Explaination: Accesses the top element of a stack/priority-queue.
- Line 29: `        pq.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 30: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 31: `        ans.push_back(cur.second);`
  Explaination: Appends a new element to the end of the container.
- Line 32: `        cur.first--;`
  Explaination: Executes a single statement that updates program state.
- Line 33: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 34: `        if (prev.first > 0) pq.push(prev);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 35: `        prev = cur;`
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

## Block 26: Q26. Task Scheduler with Cooldown

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string tasks;
    int cool;
    cin >> tasks >> cool;

    vector<int> f(26, 0);
    for (char c : tasks) f[c - 'A']++;

    int mx = *max_element(f.begin(), f.end());
    int cntMx = 0;
    for (int x : f) if (x == mx) cntMx++;

    int ans = max((int)tasks.size(), (mx - 1) * (cool + 1) + cntMx);
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
- Line 5: `    string tasks;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 6: `    int cool;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    cin >> tasks >> cool;`
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
- Line 16: `    int ans = max((int)tasks.size(), (mx - 1) * (cool + 1) + cntMx);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 18: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 19: `}`
  Explaination: Closes the current scope block.

## Block 27: Q27. Boats to Save People

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, limit;
    cin >> n >> limit;
    vector<int> w(n);
    for (int i = 0; i < n; i++) cin >> w[i];

    sort(w.begin(), w.end());

    int i = 0, j = n - 1, boats = 0;
    while (i <= j) {
        if (w[i] + w[j] <= limit) i++;
        j--;
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
- Line 5: `    int n, limit;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> limit;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<int> w(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (int i = 0; i < n; i++) cin >> w[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    sort(w.begin(), w.end());`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    int i = 0, j = n - 1, boats = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    while (i <= j) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 14: `        if (w[i] + w[j] <= limit) i++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: `        j--;`
  Explaination: Executes a single statement that updates program state.
- Line 16: `        boats++;`
  Explaination: Executes a single statement that updates program state.
- Line 17: `    }`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    cout << boats << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 20: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 21: `}`
  Explaination: Closes the current scope block.

## Block 28: Q28. Mice and Holes (Minimum Time)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> mice(n), holes(n);
    for (int i = 0; i < n; i++) cin >> mice[i];
    for (int i = 0; i < n; i++) cin >> holes[i];

    sort(mice.begin(), mice.end());
    sort(holes.begin(), holes.end());

    int ans = 0;
    for (int i = 0; i < n; i++) {
        ans = max(ans, abs(mice[i] - holes[i]));
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
- Line 7: `    vector<int> mice(n), holes(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (int i = 0; i < n; i++) cin >> mice[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: `    for (int i = 0; i < n; i++) cin >> holes[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    sort(mice.begin(), mice.end());`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 12: `    sort(holes.begin(), holes.end());`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    int ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `        ans = max(ans, abs(mice[i] - holes[i]));`
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

## Block 29: Q29. Two City Scheduling

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Person {
    int a, b;
};

int main() {
    int n2;
    cin >> n2;
    vector<Person> p(n2);
    for (int i = 0; i < n2; i++) cin >> p[i].a >> p[i].b;

    sort(p.begin(), p.end(), [](const Person& x, const Person& y) {
        return (x.a - x.b) < (y.a - y.b);
    });

    long long ans = 0;
    int n = n2 / 2;
    for (int i = 0; i < n2; i++) {
        ans += (i < n ? p[i].a : p[i].b);
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
- Line 4: `struct Person {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 5: `    int a, b;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `};`
  Explaination: Closes the current class/struct/initializer block.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 9: `    int n2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: `    cin >> n2;`
  Explaination: Reads input values from standard input into variables.
- Line 11: `    vector<Person> p(n2);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 12: `    for (int i = 0; i < n2; i++) cin >> p[i].a >> p[i].b;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    sort(p.begin(), p.end(), [](const Person& x, const Person& y) {`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 15: `        return (x.a - x.b) < (y.a - y.b);`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 16: `    });`
  Explaination: Executes a single statement that updates program state.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    long long ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `    int n = n2 / 2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 20: `    for (int i = 0; i < n2; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 21: `        ans += (i < n ? p[i].a : p[i].b);`
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

## Block 30: Q30. Course Schedule III

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<pair<int,int>> c(n);
    for (int i = 0; i < n; i++) cin >> c[i].first >> c[i].second; // duration, deadline

    sort(c.begin(), c.end(), [](auto &x, auto &y) {
        return x.second < y.second;
    });

    priority_queue<int> pq;
    long long time = 0;

    for (auto &x : c) {
        int d = x.first, last = x.second;
        if (time + d <= last) {
            time += d;
            pq.push(d);
        } else if (!pq.empty() && pq.top() > d) {
            time -= pq.top();
            pq.pop();
            time += d;
            pq.push(d);
        }
    }

    cout << pq.size() << "\n";
    return 0;
}
```

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
- Line 7: `    vector<pair<int,int>> c(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (int i = 0; i < n; i++) cin >> c[i].first >> c[i].second; // duration, deadline`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    sort(c.begin(), c.end(), [](auto &x, auto &y) {`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 11: `        return x.second < y.second;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 12: `    });`
  Explaination: Executes a single statement that updates program state.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    priority_queue<int> pq;`
  Explaination: Declares a heap-based priority queue.
- Line 15: `    long long time = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    for (auto &x : c) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: `        int d = x.first, last = x.second;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `        if (time + d <= last) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 20: `            time += d;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: `            pq.push(d);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 22: `        } else if (!pq.empty() && pq.top() > d) {`
  Explaination: Accesses the top element of a stack/priority-queue.
- Line 23: `            time -= pq.top();`
  Explaination: Accesses the top element of a stack/priority-queue.
- Line 24: `            pq.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 25: `            time += d;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 26: `            pq.push(d);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 27: `        }`
  Explaination: Closes the current scope block.
- Line 28: `    }`
  Explaination: Closes the current scope block.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    cout << pq.size() << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 31: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 32: `}`
  Explaination: Closes the current scope block.

## Block 31: Q31. Minimum Refuel Stops

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long target, startFuel;
    int n;
    cin >> target >> startFuel >> n;

    vector<pair<long long,long long>> st(n);
    for (int i = 0; i < n; i++) cin >> st[i].first >> st[i].second;

    priority_queue<long long> pq;
    long long fuel = startFuel;
    int i = 0, stops = 0;

    while (fuel < target) {
        while (i < n && st[i].first <= fuel) {
            pq.push(st[i].second);
            i++;
        }

        if (pq.empty()) {
            cout << -1 << "\n";
            return 0;
        }

        fuel += pq.top();
        pq.pop();
        stops++;
    }

    cout << stops << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    long long target, startFuel;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    cin >> target >> startFuel >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    vector<pair<long long,long long>> st(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 10: `    for (int i = 0; i < n; i++) cin >> st[i].first >> st[i].second;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    priority_queue<long long> pq;`
  Explaination: Declares a heap-based priority queue.
- Line 13: `    long long fuel = startFuel;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `    int i = 0, stops = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    while (fuel < target) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 17: `        while (i < n && st[i].first <= fuel) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 18: `            pq.push(st[i].second);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 19: `            i++;`
  Explaination: Executes a single statement that updates program state.
- Line 20: `        }`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `        if (pq.empty()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 23: `            cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 24: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 25: `        }`
  Explaination: Closes the current scope block.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `        fuel += pq.top();`
  Explaination: Accesses the top element of a stack/priority-queue.
- Line 28: `        pq.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 29: `        stops++;`
  Explaination: Executes a single statement that updates program state.
- Line 30: `    }`
  Explaination: Closes the current scope block.
- Line 31: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 32: `    cout << stops << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 33: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 34: `}`
  Explaination: Closes the current scope block.

## Block 32: Q32. IPO (Maximize Capital)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Proj {
    int c, p;
};

int main() {
    int n, k, w;
    cin >> n >> k >> w;
    vector<int> p(n), c(n);
    for (int i = 0; i < n; i++) cin >> p[i];
    for (int i = 0; i < n; i++) cin >> c[i];

    vector<Proj> a(n);
    for (int i = 0; i < n; i++) a[i] = {c[i], p[i]};

    sort(a.begin(), a.end(), [](const Proj& x, const Proj& y) {
        return x.c < y.c;
    });

    priority_queue<int> pq;
    int i = 0;
    long long cap = w;

    for (int step = 0; step < k; step++) {
        while (i < n && a[i].c <= cap) {
            pq.push(a[i].p);
            i++;
        }
        if (pq.empty()) break;
        cap += pq.top();
        pq.pop();
    }

    cout << cap << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `struct Proj {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 5: `    int c, p;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `};`
  Explaination: Closes the current class/struct/initializer block.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 9: `    int n, k, w;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: `    cin >> n >> k >> w;`
  Explaination: Reads input values from standard input into variables.
- Line 11: `    vector<int> p(n), c(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 12: `    for (int i = 0; i < n; i++) cin >> p[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `    for (int i = 0; i < n; i++) cin >> c[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    vector<Proj> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 16: `    for (int i = 0; i < n; i++) a[i] = {c[i], p[i]};`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    sort(a.begin(), a.end(), [](const Proj& x, const Proj& y) {`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 19: `        return x.c < y.c;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 20: `    });`
  Explaination: Executes a single statement that updates program state.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    priority_queue<int> pq;`
  Explaination: Declares a heap-based priority queue.
- Line 23: `    int i = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 24: `    long long cap = w;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    for (int step = 0; step < k; step++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 27: `        while (i < n && a[i].c <= cap) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 28: `            pq.push(a[i].p);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 29: `            i++;`
  Explaination: Executes a single statement that updates program state.
- Line 30: `        }`
  Explaination: Closes the current scope block.
- Line 31: `        if (pq.empty()) break;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 32: `        cap += pq.top();`
  Explaination: Accesses the top element of a stack/priority-queue.
- Line 33: `        pq.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 34: `    }`
  Explaination: Closes the current scope block.
- Line 35: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 36: `    cout << cap << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 37: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 38: `}`
  Explaination: Closes the current scope block.

## Block 33: Q33. Queue Reconstruction by Height

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<pair<int,int>> p(n);
    for (int i = 0; i < n; i++) cin >> p[i].first >> p[i].second;

    sort(p.begin(), p.end(), [](auto &a, auto &b) {
        if (a.first == b.first) return a.second < b.second;
        return a.first > b.first;
    });

    vector<pair<int,int>> ans;
    for (auto &x : p) {
        ans.insert(ans.begin() + x.second, x);
    }

    for (auto &x : ans) cout << x.first << " " << x.second << "\n";
    return 0;
}
```

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
- Line 7: `    vector<pair<int,int>> p(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (int i = 0; i < n; i++) cin >> p[i].first >> p[i].second;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    sort(p.begin(), p.end(), [](auto &a, auto &b) {`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 11: `        if (a.first == b.first) return a.second < b.second;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 12: `        return a.first > b.first;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 13: `    });`
  Explaination: Executes a single statement that updates program state.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    vector<pair<int,int>> ans;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 16: `    for (auto &x : p) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 17: `        ans.insert(ans.begin() + x.second, x);`
  Explaination: Inserts element(s) at a specified position in a container.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    for (auto &x : ans) cout << x.first << " " << x.second << "\n";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 21: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 22: `}`
  Explaination: Closes the current scope block.

## Block 34: Q34. Largest Number from Array

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<string> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    sort(a.begin(), a.end(), [](const string& x, const string& y) {
        return x + y > y + x;
    });

    if (!a.empty() && a[0] == "0") {
        cout << "0\n";
        return 0;
    }

    string ans;
    for (auto &s : a) ans += s;
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
- Line 7: `    vector<string> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (int i = 0; i < n; i++) cin >> a[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    sort(a.begin(), a.end(), [](const string& x, const string& y) {`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 11: `        return x + y > y + x;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 12: `    });`
  Explaination: Executes a single statement that updates program state.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    if (!a.empty() && a[0] == "0") {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: `        cout << "0\n";`
  Explaination: Prints formatted output to standard output.
- Line 16: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 17: `    }`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    string ans;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 20: `    for (auto &s : a) ans += s;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 21: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 22: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 23: `}`
  Explaination: Closes the current scope block.

## Block 35: Q35. Minimize Maximum Difference Between Heights

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;
    vector<int> h(n);
    for (int i = 0; i < n; i++) cin >> h[i];

    sort(h.begin(), h.end());
    int ans = h[n - 1] - h[0];

    int small = h[0] + k;
    int big = h[n - 1] - k;
    if (small > big) swap(small, big);

    for (int i = 1; i < n - 1; i++) {
        int sub = h[i] - k;
        int add = h[i] + k;

        if (sub >= small || add <= big) continue;

        if (big - sub <= add - small) {
            small = sub;
        } else {
            big = add;
        }
    }

    cout << min(ans, big - small) << "\n";
    return 0;
}
```

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
- Line 7: `    vector<int> h(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (int i = 0; i < n; i++) cin >> h[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    sort(h.begin(), h.end());`
  Explaination: Sorts a range in ascending order or with a custom comparator.
- Line 11: `    int ans = h[n - 1] - h[0];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    int small = h[0] + k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `    int big = h[n - 1] - k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: `    if (small > big) swap(small, big);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    for (int i = 1; i < n - 1; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: `        int sub = h[i] - k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `        int add = h[i] + k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `        if (sub >= small || add <= big) continue;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `        if (big - sub <= add - small) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 24: `            small = sub;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 25: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 26: `            big = add;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 27: `        }`
  Explaination: Closes the current scope block.
- Line 28: `    }`
  Explaination: Closes the current scope block.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    cout << min(ans, big - small) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 31: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 32: `}`
  Explaination: Closes the current scope block.

## Block 36: Q36. Minimum Patches to Cover Range [1, N]

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int m;
    long long N;
    cin >> m >> N;
    vector<long long> nums(m);
    for (int i = 0; i < m; i++) cin >> nums[i];

    long long miss = 1;
    int i = 0;
    int patches = 0;

    while (miss <= N) {
        if (i < m && nums[i] <= miss) {
            miss += nums[i];
            i++;
        } else {
            miss += miss;
            patches++;
        }
    }

    cout << patches << "\n";
    return 0;
}
```

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int m;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    long long N;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    cin >> m >> N;`
  Explaination: Reads input values from standard input into variables.
- Line 8: `    vector<long long> nums(m);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    for (int i = 0; i < m; i++) cin >> nums[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    long long miss = 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    int i = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    int patches = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    while (miss <= N) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 16: `        if (i < m && nums[i] <= miss) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `            miss += nums[i];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: `            i++;`
  Explaination: Executes a single statement that updates program state.
- Line 19: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 20: `            miss += miss;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: `            patches++;`
  Explaination: Executes a single statement that updates program state.
- Line 22: `        }`
  Explaination: Closes the current scope block.
- Line 23: `    }`
  Explaination: Closes the current scope block.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    cout << patches << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 26: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 27: `}`
  Explaination: Closes the current scope block.
