# TCS NQT Maths and Numbers: Full Questions and C++ Solutions

This is a complete Maths + Number Theory preparation document for TCS NQT.
It includes basic, intermediate, and advanced number-based coding patterns in a solved format.

## 1) Topic Checklist (Complete Coverage)

1. Digit-based problems
2. Number property checks (palindrome, Armstrong, perfect, strong, etc.)
3. Prime and divisor problems
4. GCD/LCM and array versions
5. Modular arithmetic and fast power
6. Number system conversion
7. Sequences and series (AP/GP/Fibonacci)
8. Combinatorics basics (`nCr`)
9. Range counting with inclusion-exclusion
10. Advanced number theory basics (totient, digit count in factorial)

## 2) Important Formula Sheet

- `gcd(a,b)`: Euclid algorithm
- `lcm(a,b) = (a / gcd(a,b)) * b`
- Trailing zeros in `n!`: `n/5 + n/25 + n/125 + ...`
- Sum of first `n` AP terms: `n/2 * (2a + (n-1)d)`
- Sum of first `n` GP terms:
  - if `r = 1`: `n * a`
  - else: `a * (r^n - 1) / (r - 1)`
- Digital root:
  - if `n = 0`, answer `0`
  - else `1 + (n - 1) % 9`
- Inclusion-Exclusion for divisibility by `a` or `b` up to `x`:
  - `x/a + x/b - x/lcm(a,b)`

## 3) Reusable C++ Template

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

---

## Q1. Count Digits of a Number

### Problem Statement
Given an integer `N`, count how many digits it has.

### Input Format
- One integer `N`

### Output Format
- One integer: number of digits

### Constraints
- `-10^18 <= N <= 10^18`

### Example
Input:
```text
10590
```
Output:
```text
5
```

### C++ Solution
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

### Complexity
- Time: `O(d)` where `d` is number of digits
- Space: `O(1)`

---

## Q2. Sum of Digits

### Problem Statement
Given an integer `N`, find sum of its digits.

### Input Format
- One integer `N`

### Output Format
- Sum of digits

### Example
Input:
```text
48291
```
Output:
```text
24
```

### C++ Solution
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

### Complexity
- Time: `O(d)`
- Space: `O(1)`

---

## Q3. Reverse a Number

### Problem Statement
Given an integer `N`, reverse its digits.

### Input Format
- One integer `N`

### Output Format
- Reversed number

### Example
Input:
```text
12340
```
Output:
```text
4321
```

### C++ Solution
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

### Complexity
- Time: `O(d)`
- Space: `O(1)`

---

## Q4. Check Palindrome Number

### Problem Statement
Given an integer `N`, check whether it is palindrome.

### Input Format
- One integer `N`

### Output Format
- Print `Yes` or `No`

### Example
Input:
```text
12321
```
Output:
```text
Yes
```

### C++ Solution
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

### Complexity
- Time: `O(d)`
- Space: `O(1)`

---

## Q5. Maximum and Minimum Digit in a Number

### Problem Statement
Given integer `N`, find maximum and minimum digit.

### Input Format
- One integer `N`

### Output Format
- `minDigit maxDigit`

### Example
Input:
```text
503908
```
Output:
```text
0 9
```

### C++ Solution
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

### Complexity
- Time: `O(d)`
- Space: `O(1)`

---

## Q6. Check Armstrong Number

### Problem Statement
A number is Armstrong if sum of each digit raised to power `number_of_digits` equals the number.
Check if `N` is Armstrong.

### Input Format
- One integer `N`

### Output Format
- `Yes` or `No`

### Example
Input:
```text
153
```
Output:
```text
Yes
```

### C++ Solution
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

### Complexity
- Time: `O(d * p)`
- Space: `O(1)`

---

## Q7. Check Perfect Number

### Problem Statement
A number is perfect if sum of proper divisors equals the number.
Check if `N` is perfect.

### Input Format
- One integer `N`

### Output Format
- `Yes` or `No`

### Example
Input:
```text
28
```
Output:
```text
Yes
```

### C++ Solution
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

### Complexity
- Time: `O(sqrt(n))`
- Space: `O(1)`

---

## Q8. Check Strong Number

### Problem Statement
A number is strong if sum of factorial of its digits equals the number.

### Input Format
- One integer `N`

### Output Format
- `Yes` or `No`

### Example
Input:
```text
145
```
Output:
```text
Yes
```

### C++ Solution
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

### Complexity
- Time: `O(d)`
- Space: `O(1)`

---

## Q9. Check Prime Number

### Problem Statement
Check whether integer `N` is prime.

### Input Format
- One integer `N`

### Output Format
- `Yes` if prime, else `No`

### Example
Input:
```text
29
```
Output:
```text
Yes
```

### C++ Solution
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

### Complexity
- Time: `O(sqrt(n))`
- Space: `O(1)`

---

## Q10. Print All Primes in Range [L, R]

### Problem Statement
Given `L` and `R`, print all prime numbers in that inclusive range.
If none, print `-1`.

### Input Format
- Two integers `L R`

### Output Format
- Primes separated by space or `-1`

### Constraints
- `1 <= L <= R <= 10^7`

### Example
Input:
```text
10 30
```
Output:
```text
11 13 17 19 23 29
```

### C++ Solution
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

### Complexity
- Time: `O(R log log R)`
- Space: `O(R)`

---

## Q11. Prime Factorization

### Problem Statement
Print prime factors of `N` in non-decreasing order.

### Input Format
- One integer `N`

### Output Format
- Prime factors separated by space

### Example
Input:
```text
84
```
Output:
```text
2 2 3 7
```

### C++ Solution
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

### Complexity
- Time: `O(sqrt(n))`
- Space: `O(1)`

---

## Q12. Count Number of Divisors

### Problem Statement
Given `N`, count how many positive divisors it has.

### Input Format
- One integer `N`

### Output Format
- Number of divisors

### Example
Input:
```text
36
```
Output:
```text
9
```

### C++ Solution
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

### Complexity
- Time: `O(sqrt(n))`
- Space: `O(1)`

---

## Q13. Sum of Divisors

### Problem Statement
Given `N`, compute sum of all positive divisors.

### Input Format
- One integer `N`

### Output Format
- Sum of divisors

### Example
Input:
```text
12
```
Output:
```text
28
```

### C++ Solution
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

### Complexity
- Time: `O(sqrt(n))`
- Space: `O(1)`

---

## Q14. Check if Number is Sum of Two Primes

### Problem Statement
Given integer `N`, determine whether it can be represented as sum of two prime numbers.

### Input Format
- One integer `N`

### Output Format
- `Yes` or `No`

### Example
Input:
```text
34
```
Output:
```text
Yes
```

### C++ Solution
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

### Complexity
- Time: `O(n log log n)`
- Space: `O(n)`

---

## Q15. GCD and LCM of Two Numbers

### Problem Statement
Given `A` and `B`, find GCD and LCM.

### Input Format
- Two integers `A B`

### Output Format
- `gcd lcm`

### Example
Input:
```text
12 18
```
Output:
```text
6 36
```

### C++ Solution
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

### Complexity
- Time: `O(log(min(a,b)))`
- Space: `O(1)`

---

## Q16. GCD of an Array

### Problem Statement
Given array of `N` integers, find gcd of all elements.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
- GCD of all numbers

### Example
Input:
```text
4
24 36 60 84
```
Output:
```text
12
```

### C++ Solution
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

### Complexity
- Time: `O(n log V)`
- Space: `O(1)`

---

## Q17. LCM of an Array

### Problem Statement
Given array of `N` positive integers, compute LCM of all.
If overflow beyond signed 64-bit, print `-1`.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
- LCM or `-1`

### Example
Input:
```text
3
4 6 8
```
Output:
```text
24
```

### C++ Solution
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

### Complexity
- Time: `O(n log V)`
- Space: `O(1)`

---

## Q18. Modular Exponentiation (a^b mod m)

### Problem Statement
Given `a`, `b`, `m`, compute `(a^b) % m` efficiently.

### Input Format
- Three integers `a b m`

### Output Format
- One integer

### Example
Input:
```text
2 10 1000
```
Output:
```text
24
```

### C++ Solution
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

### Complexity
- Time: `O(log b)`
- Space: `O(1)`

---

## Q19. Decimal to Binary Conversion

### Problem Statement
Convert decimal integer `N` to binary representation.

### Input Format
- One non-negative integer `N`

### Output Format
- Binary string

### Example
Input:
```text
13
```
Output:
```text
1101
```

### C++ Solution
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

### Complexity
- Time: `O(log n)`
- Space: `O(log n)`

---

## Q20. Binary to Decimal Conversion

### Problem Statement
Given a binary string, convert it to decimal.

### Input Format
- Binary string `S`

### Output Format
- Decimal value

### Example
Input:
```text
101101
```
Output:
```text
45
```

### C++ Solution
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

### Complexity
- Time: `O(|S|)`
- Space: `O(1)`

---

## Q21. Check Power of Two

### Problem Statement
Given integer `N`, check whether it is a power of 2.

### Input Format
- One integer `N`

### Output Format
- `Yes` or `No`

### Example
Input:
```text
64
```
Output:
```text
Yes
```

### C++ Solution
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

### Complexity
- Time: `O(1)`
- Space: `O(1)`

---

## Q22. AP: Nth Term and Sum of First N Terms

### Problem Statement
Given first term `a`, common difference `d`, and `n`, find:
1. nth term
2. sum of first n terms

### Input Format
- `a d n`

### Output Format
- `nthTerm sum`

### Example
Input:
```text
2 3 5
```
Output:
```text
14 40
```

### C++ Solution
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

### Complexity
- Time: `O(1)`
- Space: `O(1)`

---

## Q23. GP: Nth Term and Sum of First N Terms

### Problem Statement
Given first term `a`, common ratio `r`, and `n`, find nth term and sum of first n terms.

### Input Format
- `a r n`

### Output Format
- `nthTerm sum` (floating precision)

### Example
Input:
```text
3 2 4
```
Output:
```text
24 45
```

### C++ Solution
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

### Complexity
- Time: `O(log n)`
- Space: `O(1)`

---

## Q24. Fibonacci Nth Term (Iterative)

### Problem Statement
Given `N`, find nth Fibonacci (0-indexed): `F0=0`, `F1=1`.

### Input Format
- One integer `N`

### Output Format
- `F(N)`

### Example
Input:
```text
10
```
Output:
```text
55
```

### C++ Solution
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

### Complexity
- Time: `O(n)`
- Space: `O(1)`

---

## Q25. Fibonacci Nth Term Mod 1e9+7 (Fast Doubling)

### Problem Statement
Given very large `N` (`<= 10^18`), compute `F(N) mod 1e9+7`.

### Input Format
- One integer `N`

### Output Format
- `F(N) mod 1000000007`

### Example
Input:
```text
50
```
Output:
```text
586268941
```

### C++ Solution
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

### Complexity
- Time: `O(log n)`
- Space: `O(log n)` recursion stack

---

## Q26. Factorial of Large Number

### Problem Statement
Given `N` (`0 <= N <= 5000`), print `N!` exactly.

### Input Format
- One integer `N`

### Output Format
- Exact value of `N!`

### Example
Input:
```text
10
```
Output:
```text
3628800
```

### C++ Solution
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

### Complexity
- Time: roughly `O(n * digits_in_n_factorial)`
- Space: `O(digits_in_n_factorial)`

---

## Q27. Trailing Zeros in Factorial

### Problem Statement
Given `N`, compute number of trailing zeros in `N!`.

### Input Format
- One integer `N`

### Output Format
- Number of trailing zeros

### Example
Input:
```text
100
```
Output:
```text
24
```

### C++ Solution
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

### Complexity
- Time: `O(log_5 n)`
- Space: `O(1)`

---

## Q28. Compute nCr mod 1e9+7

### Problem Statement
Given `n` and `r`, compute `nCr mod 1e9+7`.

### Input Format
- Two integers `n r`

### Output Format
- `nCr mod 1e9+7`

### Constraints
- `0 <= r <= n <= 10^6`

### Example
Input:
```text
5 2
```
Output:
```text
10
```

### C++ Solution
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

### Complexity
- Time: `O(n + log MOD)`
- Space: `O(n)`

---

## Q29. Story-Based: Count Product Codes with No Repeated Digits in [L, R]

### Problem Statement
Given product code range `[L, R]`, count how many numbers have no repeated digit.

### Input Format
- Two integers `L R`

### Output Format
- Count

### Example
Input:
```text
10 25
```
Output:
```text
14
```

### C++ Solution
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

### Complexity
- Time: `O((R-L+1) * digits)`
- Space: `O(1)`

---

## Q30. Floor Square Root

### Problem Statement
Given non-negative integer `N`, find floor of `sqrt(N)`.

### Input Format
- One integer `N`

### Output Format
- `floor(sqrt(N))`

### Example
Input:
```text
27
```
Output:
```text
5
```

### C++ Solution
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

### Complexity
- Time: `O(log n)`
- Space: `O(1)`

---

## Q31. Count Numbers Divisible by A or B in [L, R]

### Problem Statement
Given `L, R, A, B`, count numbers in range `[L, R]` divisible by `A` or `B`.

### Input Format
- `L R A B`

### Output Format
- Count

### Example
Input:
```text
1 20 3 5
```
Output:
```text
9
```

### C++ Solution
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

### Complexity
- Time: `O(log(min(A,B)))` (due to lcm/gcd)
- Space: `O(1)`

---

## Q32. Digital Root (Single Digit Sum)

### Problem Statement
Repeatedly sum digits of `N` until one digit remains.

### Input Format
- One non-negative integer `N`

### Output Format
- Digital root

### Example
Input:
```text
9875
```
Output:
```text
2
```

### C++ Solution
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

### Complexity
- Time: `O(1)`
- Space: `O(1)`

---

## Q33. Check Leap Year

### Problem Statement
Given year `Y`, check whether it is leap year.

### Input Format
- One integer `Y`

### Output Format
- `Yes` or `No`

### Example
Input:
```text
2024
```
Output:
```text
Yes
```

### C++ Solution
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

### Complexity
- Time: `O(1)`
- Space: `O(1)`

---

## Q34. Days in a Month

### Problem Statement
Given month `M` (1-12) and year `Y`, print number of days in that month.

### Input Format
- `M Y`

### Output Format
- Number of days

### Example
Input:
```text
2 2024
```
Output:
```text
29
```

### C++ Solution
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

### Complexity
- Time: `O(1)`
- Space: `O(1)`

---

## Q35. Euler Totient Function phi(N)

### Problem Statement
Given integer `N`, compute Euler's Totient `phi(N)` = count of numbers in `[1..N]` coprime with `N`.

### Input Format
- One integer `N`

### Output Format
- `phi(N)`

### Example
Input:
```text
9
```
Output:
```text
6
```

### C++ Solution
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

### Complexity
- Time: `O(sqrt(n))`
- Space: `O(1)`

---

## Q36. Number of Digits in N! (Without Computing N!)

### Problem Statement
Given `N`, find number of digits in `N!` efficiently.

### Input Format
- One integer `N`

### Output Format
- Number of digits in `N!`

### Constraints
- `0 <= N <= 10^7`

### Example
Input:
```text
5
```
Output:
```text
3
```

### C++ Solution
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

### Complexity
- Time: `O(n)`
- Space: `O(1)`

---

## Q37. Check Happy Number

### Problem Statement
A happy number reaches `1` when repeatedly replaced by sum of squares of digits.
Given `N`, check if happy.

### Input Format
- One integer `N`

### Output Format
- `Yes` or `No`

### Example
Input:
```text
19
```
Output:
```text
Yes
```

### C++ Solution
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

### Complexity
- Time: small bounded iterations in practice
- Space: `O(number_of_states_seen)`

---

## Q38. Check Automorphic Number

### Problem Statement
A number `N` is automorphic if square of `N` ends with digits of `N`.

### Input Format
- One integer `N`

### Output Format
- `Yes` or `No`

### Example
Input:
```text
76
```
Output:
```text
Yes
```

### C++ Solution
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

### Complexity
- Time: `O(d)`
- Space: `O(1)`

---

## Q39. Story-Based: Minimum Time Slot that Fits Cyclic Schedule (LCM use)

### Problem Statement
Two machines repeat tasks every `A` and `B` minutes.
Find first time (in minutes) when both start together again.

### Input Format
- Two integers `A B`

### Output Format
- First common time

### Example
Input:
```text
12 18
```
Output:
```text
36
```

### C++ Solution
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

### Complexity
- Time: `O(log(min(a,b)))`
- Space: `O(1)`

---

## Q40. Story-Based: Odd-Even Vehicle Rule

### Problem Statement
Given date `D` and last digits of `N` vehicle numbers, count allowed vehicles:
- if `D` is even, allow even last digits
- if `D` is odd, allow odd last digits

### Input Format
- First line: `N D`
- Second line: `N` digits (0-9)

### Output Format
- Count of allowed vehicles

### Example
Input:
```text
6 13
2 5 8 1 7 4
```
Output:
```text
3
```

### C++ Solution
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

### Complexity
- Time: `O(n)`
- Space: `O(1)`

---

## 4) Suggested Maths Practice Order

1. Basics and digit handling: `Q1-Q8`
2. Prime/divisor block: `Q9-Q14`
3. GCD/LCM and modular: `Q15-Q18`
4. Number systems and sequences: `Q19-Q25`
5. Big-number and combinatorics: `Q26-Q28`
6. Range and advanced math patterns: `Q29-Q40`

## 5) Maths Edge-Case Checklist

- `N = 0`, `N = 1`
- Negative numbers in digit-based checks
- Large inputs (`10^6`, `10^18`) and overflow handling
- `r = 1` case in GP
- `k = 0` or invalid input handling where applicable
- Prime checks for small values `0,1,2`

## 6) Most Important TCS NQT Maths Questions (Top Priority)

1. Prime, factors, divisors (`Q9-Q13`)
2. GCD/LCM (`Q15-Q17`)
3. Binary-decimal conversions (`Q19-Q20`)
4. Fibonacci, AP, GP (`Q22-Q25`)
5. Factorial/trailing zeros (`Q26-Q27`)
6. Digit and property checks (`Q1-Q8`, `Q32`, `Q33`)
7. Story-based math logic (`Q29`, `Q39`, `Q40`)


---

## Q41. Xth and Yth Prime Number Calculation (PYQ Variant)

### Problem Statement
Given two integers `X` and `Y`:
- `A` = `X`th prime number
- `B` = `Y`th prime number
Print `C = (A * B) - 1`.

### Input Format
- Two integers `X Y`

### Output Format
- Print `C`

### Example
Input:
```text
5 2
```
Output:
```text
32
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

bool isPrime(long long n) {
    if (n < 2) return false;
    if (n == 2) return true;
    if (n % 2 == 0) return false;
    for (long long d = 3; d * d <= n; d += 2) {
        if (n % d == 0) return false;
    }
    return true;
}

int main() {
    long long x, y;
    cin >> x >> y;

    if (x <= 0 || y <= 0) {
        cout << "Invalid\n";
        return 0;
    }

    long long need = max(x, y);
    long long cnt = 0, A = -1, B = -1;

    for (long long n = 2; ; n++) {
        if (isPrime(n)) {
            cnt++;
            if (cnt == x) A = n;
            if (cnt == y) B = n;
            if (cnt == need) break;
        }
    }

    cout << (A * B - 1) << "\n";
    return 0;
}
```

### Complexity
- Time: roughly `O(P * sqrt(P))` where `P` is `max(X,Y)`th prime
- Space: `O(1)`

---

## Q42. Sum of Mth to (M+N)th Prime Numbers (PYQ Variant)

### Problem Statement
Given integers `M` and `N`, compute sum of prime numbers from position `M` to position `(M + N)` in the prime sequence (1-indexed).

### Input Format
- Two integers `M N`

### Output Format
- Print the sum

### Example
Input:
```text
2 3
```
Output:
```text
26
```
Explanation:
- Prime positions 2 to 5 are `3, 5, 7, 11`
- Sum = `26`

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

bool isPrime(long long n) {
    if (n < 2) return false;
    if (n == 2) return true;
    if (n % 2 == 0) return false;
    for (long long d = 3; d * d <= n; d += 2) {
        if (n % d == 0) return false;
    }
    return true;
}

int main() {
    long long m, n;
    cin >> m >> n;

    if (m <= 0 || n < 0) {
        cout << "Invalid\n";
        return 0;
    }

    long long L = m, R = m + n;
    long long idx = 0, ans = 0;

    for (long long x = 2; idx < R; x++) {
        if (isPrime(x)) {
            idx++;
            if (idx >= L) ans += x;
        }
    }

    cout << ans << "\n";
    return 0;
}
```

### Complexity
- Time: depends on `R`th prime generation
- Space: `O(1)`

---

## Q43. Prime Digit Sum Multiplication (PYQ Variant)

### Problem Statement
Given an integer `N`:
1. Find sum of digits `S`
2. If `S` is prime, print `S * N`
3. Else print `0`

### Input Format
- One integer `N`

### Output Format
- `S * N` if `S` prime, otherwise `0`

### Example
Input:
```text
236
```
Output:
```text
2596
```
Explanation:
- `S = 2 + 3 + 6 = 11` (prime), so output = `11 * 236`

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

bool isPrime(long long n) {
    if (n < 2) return false;
    for (long long d = 2; d * d <= n; d++) {
        if (n % d == 0) return false;
    }
    return true;
}

int main() {
    long long n;
    cin >> n;

    long long x = llabs(n);
    long long sum = 0;
    while (x > 0) {
        sum += x % 10;
        x /= 10;
    }

    if (isPrime(sum)) cout << sum * n << "\n";
    else cout << 0 << "\n";

    return 0;
}
```

### Complexity
- Time: `O(digits + sqrt(sum))`
- Space: `O(1)`

---

## Q44. Repeated Digit Sum with R Repetitions (PYQ Variant)

### Problem Statement
Given number string `N` and integer `R`:
- Repeat `N` exactly `R` times conceptually.
- Find single-digit sum (digital root) of that repeated number.
- If `R = 0`, print `0`.

### Input Format
- Line 1: number string `N`
- Line 2: integer `R`

### Output Format
- One digit result

### Example
Input:
```text
99
3
```
Output:
```text
9
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string n;
    long long r;
    cin >> n >> r;

    if (r == 0) {
        cout << 0 << "\n";
        return 0;
    }

    long long s = 0;
    for (char c : n) s += (c - '0');
    long long total = s * r;

    long long ans;
    if (total == 0) ans = 0;
    else ans = 1 + (total - 1) % 9;

    cout << ans << "\n";
    return 0;
}
```

### Complexity
- Time: `O(|N|)`
- Space: `O(1)`

---

## Q45. Sweet Seventeen - Base 17 to Decimal (PYQ Variant)

### Problem Statement
Given up to 4-digit number in base-17 (`0-9`, `A-G`), convert it to decimal.

### Input Format
- One string `S` in base-17

### Output Format
- Decimal integer

### Example
Input:
```text
23GF
```
Output:
```text
10980
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int val(char c) {
    if (c >= '0' && c <= '9') return c - '0';
    c = toupper((unsigned char)c);
    if (c >= 'A' && c <= 'G') return 10 + (c - 'A');
    return -1;
}

int main() {
    string s;
    cin >> s;

    long long ans = 0;
    for (char c : s) {
        int d = val(c);
        if (d < 0 || d >= 17) {
            cout << "Invalid\n";
            return 0;
        }
        ans = ans * 17 + d;
    }

    cout << ans << "\n";
    return 0;
}
```

### Complexity
- Time: `O(|S|)`
- Space: `O(1)`

---

## Q46. Sum of Multiplication Table (PYQ Variant)

### Problem Statement
Given integer `N`, find sum of first 10 terms of multiplication table of `N`:
`N*1 + N*2 + ... + N*10`.

### Input Format
- One integer `N`

### Output Format
- Sum value

### Example
Input:
```text
5
```
Output:
```text
275
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n;
    cin >> n;
    long long ans = 0;
    for (int i = 1; i <= 10; i++) ans += n * i;
    cout << ans << "\n";
    return 0;
}
```

### Complexity
- Time: `O(1)` (constant 10 iterations)
- Space: `O(1)`

---

## Q47. Standard Deviation of an Array (PYQ Variant)

### Problem Statement
Given array of `N` numbers, compute population standard deviation:
`sqrt( (sum((Ai - mean)^2)) / N )`.

### Input Format
- First line: `N`
- Second line: `N` numbers

### Output Format
- Standard deviation (print up to 6 decimals)

### Example
Input:
```text
5
2 4 4 4 5
```
Output:
```text
1.095445
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<double> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    if (n <= 0) {
        cout << "Invalid\n";
        return 0;
    }

    double mean = 0.0;
    for (double x : a) mean += x;
    mean /= n;

    double var = 0.0;
    for (double x : a) {
        double d = x - mean;
        var += d * d;
    }
    var /= n;

    cout << fixed << setprecision(6) << sqrt(var) << "\n";
    return 0;
}
```

### Complexity
- Time: `O(N)`
- Space: `O(1)` extra
