# TCS NQT Bit Manipulation: Full Questions and C++ Solutions

This document covers bit manipulation from basic to advanced in a PYQ-style format.
All questions include full statements, I/O, examples, C++ code, and complexity.

## 1) Bit Manipulation Checklist (Complete)

1. Bit basics: set, clear, toggle, check
2. Odd/even, power of 2, power of 4
3. Set-bit counting techniques
4. XOR-based uniqueness problems
5. Range XOR / AND tricks
6. Arithmetic using bits (add/subtract/multiply/divide)
7. Prefix/DP style bit counting
8. Bitmask-based subsets and state representation
9. String/array problems solvable with masks
10. Story-based bitmask permission/configuration patterns

## 2) Most Important Bit Tricks

- Check i-th bit: `(n >> i) & 1`
- Set i-th bit: `n | (1LL << i)`
- Clear i-th bit: `n & ~(1LL << i)`
- Toggle i-th bit: `n ^ (1LL << i)`
- Remove rightmost set bit: `n & (n - 1)`
- Isolate rightmost set bit: `n & -n`
- Power of 2: `n > 0 && (n & (n - 1)) == 0`
- XOR from `1..n` pattern (cycle length 4)

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

## Q1. Check i-th Bit

### Problem Statement
Given integer `N` and index `i` (0-based), print whether i-th bit is set.

### Input Format
- `N i`

### Output Format
- `1` if set, else `0`

### Example
Input:
```text
13 2
```
Output:
```text
1
```

### C++ Solution
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

### Complexity
- Time: `O(1)`
- Space: `O(1)`

---

## Q2. Set i-th Bit

### Problem Statement
Given integer `N` and index `i`, set i-th bit and print updated number.

### Input Format
- `N i`

### Output Format
- Updated value

### Example
Input:
```text
9 1
```
Output:
```text
11
```

### C++ Solution
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

### Complexity
- Time: `O(1)`
- Space: `O(1)`

---

## Q3. Clear i-th Bit

### Problem Statement
Given integer `N` and index `i`, clear i-th bit and print updated number.

### Input Format
- `N i`

### Output Format
- Updated value

### Example
Input:
```text
13 2
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
    int i;
    cin >> n >> i;

    n = n & ~(1LL << i);
    cout << n << "\n";
    return 0;
}
```

### Complexity
- Time: `O(1)`
- Space: `O(1)`

---

## Q4. Toggle i-th Bit

### Problem Statement
Given integer `N` and index `i`, toggle i-th bit.

### Input Format
- `N i`

### Output Format
- Updated value

### Example
Input:
```text
10 1
```
Output:
```text
8
```

### C++ Solution
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

### Complexity
- Time: `O(1)`
- Space: `O(1)`

---

## Q5. Check Odd or Even Using Bit

### Problem Statement
Given integer `N`, print `Odd` if odd else `Even`.

### Input Format
- One integer `N`

### Output Format
- `Odd` / `Even`

### Example
Input:
```text
27
```
Output:
```text
Odd
```

### C++ Solution
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

### Complexity
- Time: `O(1)`
- Space: `O(1)`

---

## Q6. Check Power of 2

### Problem Statement
Given integer `N`, check whether it is power of two.

### Input Format
- One integer `N`

### Output Format
- `Yes` / `No`

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

## Q7. Check Power of 4

### Problem Statement
Given integer `N`, check whether it is power of four.

### Input Format
- One integer `N`

### Output Format
- `Yes` / `No`

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

    bool power2 = (n > 0) && ((n & (n - 1)) == 0);
    bool power4 = power2 && (n & 0x5555555555555555LL);

    cout << (power4 ? "Yes" : "No") << "\n";
    return 0;
}
```

### Complexity
- Time: `O(1)`
- Space: `O(1)`

---

## Q8. Count Set Bits (Simple)

### Problem Statement
Given integer `N`, count number of set bits in binary representation.

### Input Format
- One integer `N`

### Output Format
- Count of set bits

### Example
Input:
```text
13
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

### Complexity
- Time: `O(number of bits)`
- Space: `O(1)`

---

## Q9. Count Set Bits (Brian Kernighan)

### Problem Statement
Count set bits using `n = n & (n - 1)` optimization.

### Input Format
- One integer `N`

### Output Format
- Count of set bits

### Example
Input:
```text
13
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

### Complexity
- Time: `O(number of set bits)`
- Space: `O(1)`

---

## Q10. Rightmost Set Bit Value

### Problem Statement
Given integer `N`, print value of rightmost set bit.
If `N = 0`, print `0`.

### Input Format
- One integer `N`

### Output Format
- Value of rightmost set bit

### Example
Input:
```text
12
```
Output:
```text
4
```

### C++ Solution
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

### Complexity
- Time: `O(1)`
- Space: `O(1)`

---

## Q11. Position of Rightmost Set Bit

### Problem Statement
Given integer `N`, print 1-based index of rightmost set bit.
If `N=0`, print `-1`.

### Input Format
- One integer `N`

### Output Format
- Position or `-1`

### Example
Input:
```text
18
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

### Complexity
- Time: `O(trailing zeros)`
- Space: `O(1)`

---

## Q12. Clear Rightmost Set Bit

### Problem Statement
Given integer `N`, clear its rightmost set bit and print result.

### Input Format
- One integer `N`

### Output Format
- Updated number

### Example
Input:
```text
12
```
Output:
```text
8
```

### C++ Solution
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

### Complexity
- Time: `O(1)`
- Space: `O(1)`

---

## Q13. Set Rightmost Unset Bit

### Problem Statement
Given integer `N`, set its rightmost unset bit.

### Input Format
- One integer `N`

### Output Format
- Updated value

### Example
Input:
```text
10
```
Output:
```text
11
```

### C++ Solution
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

### Complexity
- Time: `O(1)`
- Space: `O(1)`

---

## Q14. Toggle Bits in Range [L, R]

### Problem Statement
Given integer `N` and bit positions `L` and `R` (0-based, `L <= R`), toggle all bits in that range.

### Input Format
- `N L R`

### Output Format
- Updated value

### Example
Input:
```text
17 1 3
```
Output:
```text
31
```

### C++ Solution
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

### Complexity
- Time: `O(1)`
- Space: `O(1)`

---

## Q15. Swap Two Numbers Without Temp (XOR)

### Problem Statement
Swap two integers without using third variable.

### Input Format
- `A B`

### Output Format
- `B A`

### Example
Input:
```text
7 11
```
Output:
```text
11 7
```

### C++ Solution
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

### Complexity
- Time: `O(1)`
- Space: `O(1)`

---

## Q16. Single Number (Others Appear Twice)

### Problem Statement
Given array where all elements appear twice except one, find unique element.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
- Unique number

### Example
Input:
```text
7
2 5 2 7 5 9 9
```
Output:
```text
7
```

### C++ Solution
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

### Complexity
- Time: `O(n)`
- Space: `O(1)`

---

## Q17. Two Unique Numbers (Others Appear Twice)

### Problem Statement
Given array where exactly two elements appear once and all others appear twice, print the two unique numbers in ascending order.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
- Two unique numbers sorted

### Example
Input:
```text
8
1 2 3 2 1 4 5 4
```
Output:
```text
3 5
```

### C++ Solution
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

### Complexity
- Time: `O(n)`
- Space: `O(1)`

---

## Q18. Single Number (Others Appear Thrice)

### Problem Statement
Given array where every element appears exactly 3 times except one, find that single element.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
- Unique number

### Example
Input:
```text
7
2 2 3 2 5 5 5
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

### Complexity
- Time: `O(63 * n)`
- Space: `O(1)`

---

## Q19. Missing Number from 0..N

### Problem Statement
Given `N` and array of size `N` containing distinct numbers from `0..N` with one missing, find missing number.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
- Missing number

### Example
Input:
```text
5
0 1 2 4 5
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

### Complexity
- Time: `O(n)`
- Space: `O(1)`

---

## Q20. XOR from 1 to N

### Problem Statement
Given `N`, compute XOR of all numbers from `1` to `N`.

### Input Format
- One integer `N`

### Output Format
- XOR value

### Example
Input:
```text
7
```
Output:
```text
0
```

### C++ Solution
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

### Complexity
- Time: `O(1)`
- Space: `O(1)`

---

## Q21. XOR in Range [L, R]

### Problem Statement
Given `L` and `R`, compute XOR of all numbers from `L` to `R`.

### Input Format
- `L R`

### Output Format
- XOR value

### Example
Input:
```text
3 9
```
Output:
```text
2
```

### C++ Solution
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

### Complexity
- Time: `O(1)`
- Space: `O(1)`

---

## Q22. Bitwise AND of Range [L, R]

### Problem Statement
Given `L` and `R`, compute bitwise AND of all numbers in range `[L, R]`.

### Input Format
- `L R`

### Output Format
- AND value

### Example
Input:
```text
5 7
```
Output:
```text
4
```

### C++ Solution
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

### Complexity
- Time: `O(log(max(L,R)))`
- Space: `O(1)`

---

## Q23. Add Two Integers Without '+'

### Problem Statement
Compute `A + B` using bit operations only.

### Input Format
- `A B`

### Output Format
- Sum

### Example
Input:
```text
12 15
```
Output:
```text
27
```

### C++ Solution
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

### Complexity
- Time: `O(number of bits)`
- Space: `O(1)`

---

## Q24. Subtract Two Integers Without '-'

### Problem Statement
Compute `A - B` using bit operations.

### Input Format
- `A B`

### Output Format
- Difference

### Example
Input:
```text
20 7
```
Output:
```text
13
```

### C++ Solution
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

### Complexity
- Time: `O(number of bits)`
- Space: `O(1)`

---

## Q25. Multiply Using Bit Shifts

### Problem Statement
Compute `A * B` using shifts and addition.

### Input Format
- `A B`

### Output Format
- Product

### Example
Input:
```text
13 9
```
Output:
```text
117
```

### C++ Solution
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

### Complexity
- Time: `O(number of bits in B)`
- Space: `O(1)`

---

## Q26. Integer Division Using Bits

### Problem Statement
Compute integer division `A / B` without using `/`, `%`, `*`.
Truncate toward zero.

### Input Format
- `A B`

### Output Format
- Quotient

### Example
Input:
```text
43 5
```
Output:
```text
8
```

### C++ Solution
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

### Complexity
- Time: `O(64)`
- Space: `O(1)`

---

## Q27. Count Total Set Bits from 1 to N (Optimized)

### Problem Statement
Given `N`, find total set bits in binary representations of all numbers from `1` to `N`.

### Input Format
- One integer `N`

### Output Format
- Total count

### Example
Input:
```text
5
```
Output:
```text
7
```

### C++ Solution
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

### Complexity
- Time: `O(log n)`
- Space: `O(log n)` recursion

---

## Q28. Count Bits for Every Number 0..N

### Problem Statement
For each integer `i` from `0` to `N`, output number of set bits in `i`.

### Input Format
- One integer `N`

### Output Format
- `N+1` integers

### Example
Input:
```text
5
```
Output:
```text
0 1 1 2 1 2
```

### C++ Solution
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

### Complexity
- Time: `O(n)`
- Space: `O(n)`

---

## Q29. Most Significant Set Bit Position

### Problem Statement
Given positive integer `N`, print 1-based position of most significant set bit.
If `N=0`, print `-1`.

### Input Format
- One integer `N`

### Output Format
- Position or `-1`

### Example
Input:
```text
18
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

### Complexity
- Time: `O(log n)`
- Space: `O(1)`

---

## Q30. Smallest Power of 2 Greater Than or Equal to N

### Problem Statement
Given integer `N > 0`, find smallest power of two `>= N`.

### Input Format
- One integer `N`

### Output Format
- Answer power

### Example
Input:
```text
19
```
Output:
```text
32
```

### C++ Solution
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

### Complexity
- Time: `O(1)`
- Space: `O(1)`

---

## Q31. Check Opposite Signs

### Problem Statement
Given two integers `A` and `B`, determine if they have opposite signs.

### Input Format
- `A B`

### Output Format
- `Yes` / `No`

### Example
Input:
```text
-7 11
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
    long long a, b;
    cin >> a >> b;

    cout << (((a ^ b) < 0) ? "Yes" : "No") << "\n";
    return 0;
}
```

### Complexity
- Time: `O(1)`
- Space: `O(1)`

---

## Q32. Hamming Distance Between Two Integers

### Problem Statement
Given integers `A` and `B`, find number of differing bit positions.

### Input Format
- `A B`

### Output Format
- Hamming distance

### Example
Input:
```text
10 14
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

### Complexity
- Time: `O(number of set bits in a^b)`
- Space: `O(1)`

---

## Q33. Total Hamming Distance in Array

### Problem Statement
Given array of `N` non-negative integers, compute total Hamming distance among all unordered pairs.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
- Total Hamming distance

### Example
Input:
```text
3
4 14 2
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

### Complexity
- Time: `O(31 * n)`
- Space: `O(1)`

---

## Q34. Generate All Subsets (Bitmask)

### Problem Statement
Given `N` elements, print all subsets using bitmasking.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
- One subset per line

### Example
Input:
```text
3
1 2 3
```
Output (one valid order):
```text

1
2
1 2
3
1 3
2 3
1 2 3
```

### C++ Solution
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

### Complexity
- Time: `O(n * 2^n)`
- Space: `O(1)` extra

---

## Q35. Subset Sum Existence (Bitmask, Small N)

### Problem Statement
Given array of size `N <= 20` and target `K`, check if any subset sum equals `K`.

### Input Format
- First line: `N K`
- Second line: `N` integers

### Output Format
- `Yes` / `No`

### Example
Input:
```text
4 11
2 3 7 8
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

### Complexity
- Time: `O(n * 2^n)`
- Space: `O(1)` extra

---

## Q36. Gray Code Generation (n bits)

### Problem Statement
Generate Gray code sequence for given `n` bits.

### Input Format
- One integer `n`

### Output Format
- `2^n` Gray code integers

### Example
Input:
```text
2
```
Output:
```text
0 1 3 2
```

### C++ Solution
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

### Complexity
- Time: `O(2^n)`
- Space: `O(1)` extra

---

## Q37. Check if Binary String Has Alternate Bits

### Problem Statement
Given integer `N`, check whether its binary representation has alternating bits.

### Input Format
- One integer `N`

### Output Format
- `Yes` / `No`

### Example
Input:
```text
10
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
    unsigned long long n;
    cin >> n;

    unsigned long long x = n ^ (n >> 1);
    bool ok = (x & (x + 1)) == 0;

    cout << (ok ? "Yes" : "No") << "\n";
    return 0;
}
```

### Complexity
- Time: `O(1)`
- Space: `O(1)`

---

## Q38. Find Missing and Repeating Number (XOR Method)

### Problem Statement
Given array of size `N` containing numbers `1..N` with one missing and one repeating, find both.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
- `missing repeating`

### Example
Input:
```text
5
1 2 2 4 5
```
Output:
```text
3 2
```

### C++ Solution
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

### Complexity
- Time: `O(n)`
- Space: `O(1)`

---

## Q39. Unique Lowercase Characters in String (Bitmask)

### Problem Statement
Given lowercase string, check if all characters are unique using bitmask.

### Input Format
- One lowercase string

### Output Format
- `Yes` / `No`

### Example
Input:
```text
coding
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

### Complexity
- Time: `O(n)`
- Space: `O(1)`

---

## Q40. Story-Based: Access Permission Bitmask

### Problem Statement
A system encodes permissions in bits:
- bit 0: READ
- bit 1: WRITE
- bit 2: EXECUTE

Given initial mask and `Q` operations:
- `GRANT x`
- `REVOKE x`
- `CHECK x`
Print `Yes/No` for each CHECK.

### Input Format
- First line: `mask Q`
- Next `Q` lines: operation and bit index `x`

### Output Format
- For each `CHECK`, print `Yes` or `No`

### Example
Input:
```text
1 5
CHECK 0
CHECK 1
GRANT 1
CHECK 1
REVOKE 0
```
Output:
```text
Yes
No
Yes
```

### C++ Solution
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

### Complexity
- Time: `O(Q)`
- Space: `O(1)`

---

## Q41. Story-Based: Minimum Button Presses (XOR Distance)

### Problem Statement
Two binary lock states are represented as integers `A` and `B`.
One button press flips exactly one bit. Find minimum button presses to reach `B` from `A`.

### Input Format
- `A B`

### Output Format
- Minimum presses

### Example
Input:
```text
10 14
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

### Complexity
- Time: `O(number of differing bits)`
- Space: `O(1)`

---

## Q42. Maximum XOR Pair (O(n^2) for NQT constraints)

### Problem Statement
Given array, find maximum XOR value among all pairs.

### Input Format
- First line: `N`
- Second line: `N` integers

### Output Format
- Maximum XOR value

### Example
Input:
```text
6
3 10 5 25 2 8
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

### Complexity
- Time: `O(n^2)`
- Space: `O(1)`

---

## Q43. Count Subarrays with XOR = K

### Problem Statement
Given array and `K`, count number of subarrays with XOR exactly `K`.

### Input Format
- First line: `N K`
- Second line: `N` integers

### Output Format
- Count

### Example
Input:
```text
5 6
4 2 2 6 4
```
Output:
```text
4
```

### C++ Solution
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

### Complexity
- Time: `O(n)` average
- Space: `O(n)`

---

## Q44. Longest Subarray with XOR = K

### Problem Statement
Given array and `K`, find length of longest subarray with XOR equal to `K`.

### Input Format
- First line: `N K`
- Second line: `N` integers

### Output Format
- Maximum length

### Example
Input:
```text
6 5
5 6 7 8 9 10
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

### Complexity
- Time: `O(n)` average
- Space: `O(n)`

---

## Q45. Count Numbers in Array Having Exactly K Set Bits

### Problem Statement
Given array and integer `K`, count elements whose binary representation has exactly `K` set bits.

### Input Format
- First line: `N K`
- Second line: `N` non-negative integers

### Output Format
- Count

### Example
Input:
```text
6 2
3 5 7 8 9 10
```
Output:
```text
4
```

### C++ Solution
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

### Complexity
- Time: `O(n)`
- Space: `O(1)`

---

## 4) Suggested Practice Order

1. Basics (Q1-Q14)
2. XOR uniqueness block (Q16-Q21)
3. Arithmetic and range tricks (Q22-Q30)
4. Masks and combinational patterns (Q31-Q37)
5. Story + mixed advanced (Q38-Q45)

## 5) Edge-Case Checklist

- `N = 0`, `N = 1`
- Negative numbers (signed right-shift behavior)
- Large 64-bit values (`long long` / `unsigned long long`)
- Shift bounds (`1LL << i` where `i < 63`)
- Overflow in arithmetic-like bit problems

## 6) High-Priority NQT Bit Questions

1. Single number, two unique numbers (Q16-Q17)
2. Power checks and set-bit count (Q6-Q9)
3. Missing number and XOR range (Q19-Q21)
4. Subarray XOR problems (Q43-Q44)
5. Permission-mask and toggle patterns (Q14, Q40)

