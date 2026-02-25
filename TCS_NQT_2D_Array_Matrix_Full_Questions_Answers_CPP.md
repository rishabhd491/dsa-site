# TCS NQT 2D Arrays and Matrix: Full Questions and C++ Solutions

This document is a complete matrix/2D-array preparation pack for TCS NQT.
It covers traversal, transformation, searching, prefix sums, simulation, and story-based matrix questions.

## 1) 2D Matrix Topic Checklist

1. Input/output and basic traversals
2. Row/column based computations
3. Diagonal and boundary traversals
4. Matrix transformation (transpose/rotate)
5. Sorted matrix search patterns
6. Prefix-sum matrix and range queries
7. BFS/DFS on grid basics
8. Simulation/story matrix patterns

## 2) Common Utilities

```cpp
#include <bits/stdc++.h>
using namespace std;

bool inBounds(int r, int c, int R, int C) {
    return r >= 0 && r < R && c >= 0 && c < C;
}
```

---

## Q1. Sum of All Elements in Matrix

### Problem Statement
Given `R x C` matrix, find sum of all elements.

### Input Format
- `R C`
- `R` lines each with `C` integers

### Output Format
- total sum

### Example
Input:
```text
2 3
1 2 3
4 5 6
```
Output:
```text
21
```

### C++ Solution
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

## Q2. Row-wise and Column-wise Sum

### Problem Statement
Print sum of each row and each column.

### Input Format
- `R C`
- matrix elements

### Output Format
- First line: row sums
- Second line: column sums

### C++ Solution
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

## Q3. Largest and Smallest Element in Matrix

### Problem Statement
Find minimum and maximum element in a matrix.

### C++ Solution
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

## Q4. Matrix Transpose

### Problem Statement
Given matrix `R x C`, print transpose `C x R`.

### C++ Solution
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

## Q5. In-Place Transpose of Square Matrix

### Problem Statement
Transpose an `N x N` matrix in-place.

### C++ Solution
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

## Q6. Rotate Matrix 90 Degree Clockwise

### Problem Statement
Rotate an `N x N` matrix by 90 degrees clockwise in-place.

### C++ Solution
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

## Q7. Rotate Matrix 90 Degree Anti-Clockwise

### C++ Solution
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

## Q8. Spiral Traversal

### Problem Statement
Print elements of matrix in spiral order.

### C++ Solution
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

## Q9. Boundary Traversal

### Problem Statement
Print boundary elements of matrix in clockwise order.

### C++ Solution
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

## Q10. Main and Secondary Diagonal Sum

### Problem Statement
For square matrix, compute main diagonal sum and secondary diagonal sum.

### C++ Solution
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

## Q11. Check Symmetric Matrix

### Problem Statement
Check if a square matrix is symmetric (`A == A^T`).

### C++ Solution
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

## Q12. Check Identity Matrix

### C++ Solution
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

## Q13. Matrix Addition

### C++ Solution
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

## Q14. Matrix Multiplication

### Problem Statement
Multiply `A (R1 x C1)` and `B (R2 x C2)` if `C1 == R2`.

### C++ Solution
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

## Q15. Search in Row-Wise and Column-Wise Sorted Matrix

### Problem Statement
Matrix is sorted in rows and columns. Search target `x` and print `Yes/No`.

### C++ Solution
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

## Q16. Search in Fully Sorted Matrix (Binary Search)

### Problem Statement
Matrix rows are sorted and first element of each row > last of previous row.
Search target.

### C++ Solution
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

## Q17. Set Matrix Zeroes

### Problem Statement
If any cell is zero, set its entire row and column to zero.

### C++ Solution
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

## Q18. Matrix Reshape

### Problem Statement
Reshape matrix `R x C` to `r x c` preserving row-order if possible else print original.

### C++ Solution
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

## Q19. Prefix Sum Matrix Build

### Problem Statement
Build prefix sum matrix `pref` where `pref[i][j]` is sum of submatrix `(0,0)` to `(i,j)`.

### C++ Solution
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

## Q20. Submatrix Sum Query using Prefix Matrix

### Problem Statement
Answer `Q` submatrix sum queries in O(1) each after preprocessing.

### Input Format
- `R C`
- matrix
- `Q`
- Q lines: `r1 c1 r2 c2` (0-based inclusive)

### Output Format
- sum for each query

### C++ Solution
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

## Q21. Count Negatives in Sorted Matrix

### Problem Statement
Rows and columns are non-increasing. Count negative numbers.

### C++ Solution
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

## Q22. Check Toeplitz Matrix

### Problem Statement
A matrix is Toeplitz if all diagonals from top-left to bottom-right have same elements.

### C++ Solution
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

## Q23. Lucky Numbers in Matrix

### Problem Statement
A lucky number is minimum in its row and maximum in its column. Print all lucky numbers.

### C++ Solution
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

## Q24. Number of Islands (BFS)

### Problem Statement
Count connected components of 1s in binary grid (4-direction).

### C++ Solution
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

## Q25. Flood Fill

### C++ Solution
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

## Q26. Rotting Oranges

### C++ Solution
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

## Q27. 01 Matrix Nearest Zero Distance

### C++ Solution
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

## Q28. Count Distinct Paths in Grid (DP)

### Problem Statement
Count ways to go from top-left to bottom-right with only right/down moves.

### C++ Solution
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

## Q29. Unique Paths with Obstacles

### Problem Statement
Grid has `0` free and `1` blocked. Count paths top-left to bottom-right.

### C++ Solution
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

## Q30. Maximum Path Sum from Top-left to Bottom-right (Right/Down)

### C++ Solution
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

## Q31. Minimum Path Sum in Grid

### C++ Solution
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

## Q32. Sort Each Row of Matrix

### Problem Statement
Sort each row independently in non-decreasing order.

### C++ Solution
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

## Q33. Rotate Each Layer of Matrix by One (Clockwise)

### Problem Statement
Rotate each ring/layer by one step clockwise.

### C++ Solution
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

## Q34. Story-Based Parking Lot Occupancy Grid

### Problem Statement
Given `R x C` parking grid (`1` occupied, `0` free):
1. total occupied spots
2. row index with max occupancy (smallest index if tie)

### C++ Solution
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

## Q35. Story-Based CCTV Visibility Grid

### Problem Statement
Given grid of heights, a cell is visible if all cells before it in row from left are smaller.
Count visible cells row-wise.

### C++ Solution
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

## Q36. Story-Based Robot Path in Grid Commands

### Problem Statement
Given `R x C` grid with blocked cells and command string (R,L,U,D), start `(sr,sc)`.
Stop command if next move is out of bounds or blocked. Print final position.

### Input Format
- `R C`
- grid (`0` free, `1` blocked)
- `sr sc`
- command string

### Output Format
- final row and col

### C++ Solution
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

## Q37. Story-Based Room Gold Collection (Max Contiguous Segment in Row)

### Problem Statement
Each row has room gold values. For each row, find max contiguous segment sum and print global maximum.

### C++ Solution
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

## Q38. Story-Based Event Hall Seat Blocks (Largest Rectangle of 1s)

### Problem Statement
Given binary matrix representing usable seats (`1`), find largest rectangular block of usable seats.

### C++ Solution
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

## Q39. Story-Based Virus Spread Time in Lab Grid

### Problem Statement
Grid has `0` empty, `1` healthy, `2` infected. Infection spreads 4-dir each minute.
Find time to infect all healthy else `-1`.

### C++ Solution
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

## Q40. Story-Based Warehouse Distance to Exit (Multi-source BFS)

### Problem Statement
Given grid where exits are marked `1`, compute each cell’s shortest distance to any exit (walls `-1`).

### Input Format
- `R C`
- grid values (`1` exit, `0` empty, `-1` wall)

### Output Format
- distance matrix (`-1` for unreachable/wall)

### C++ Solution
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

## 3) Suggested Revision Order

1. Matrix basics and transformations: `Q1-Q14`
2. Search and prefix sums: `Q15-Q23`
3. Grid BFS/DP core: `Q24-Q31`
4. Story-based matrix applications: `Q32-Q40`

## 4) Edge-Case Checklist

- single row/column matrices
- non-square vs square-only operations
- all-zero/all-one grids
- empty reachable area in BFS
- out-of-bound moves in simulations
- overflow in matrix sums (`long long`)

## 5) Most Important 2D/Matrix Questions

1. transpose/rotate/spiral (`Q4-Q8`)
2. sorted matrix search (`Q15-Q16`)
3. prefix matrix queries (`Q19-Q20`)
4. islands/flood-fill/rotting BFS (`Q24-Q27`)
5. max rectangle of 1s (`Q38`)


---

## Q41. Zigzag Matrix Printing (PYQ Variant)

### Problem Statement
Given an `R x C` matrix, print elements in row-wise zigzag order:
- Row 0: left to right
- Row 1: right to left
- Row 2: left to right, and so on.

### Input Format
- First line: `R C`
- Next `R` lines: `C` integers each

### Output Format
- Print zigzag traversal in one line

### Example
Input:
```text
3 3
1 2 3
4 5 6
7 8 9
```
Output:
```text
1 2 3 6 5 4 7 8 9
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int r, c;
    cin >> r >> c;
    vector<vector<long long>> a(r, vector<long long>(c));

    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++)
            cin >> a[i][j];

    for (int i = 0; i < r; i++) {
        if (i % 2 == 0) {
            for (int j = 0; j < c; j++) cout << a[i][j] << " ";
        } else {
            for (int j = c - 1; j >= 0; j--) cout << a[i][j] << " ";
        }
    }
    cout << "\n";
    return 0;
}
```

### Complexity
- Time: `O(R*C)`
- Space: `O(1)` extra

---

## Q42. Matrix Row Prime Validation (PYQ Variant)

### Problem Statement
Given an `R x C` matrix, validate rows using this rule:
Each row must contain at least one prime number.
- If all rows satisfy rule, print `Valid`
- Else print `Invalid`

### Input Format
- First line: `R C`
- Next `R` lines: matrix elements

### Output Format
- `Valid` or `Invalid`

### Example
Input:
```text
3 3
4 6 8
5 10 12
9 11 14
```
Output:
```text
Invalid
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
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int r, c;
    cin >> r >> c;
    vector<vector<long long>> a(r, vector<long long>(c));

    for (int i = 0; i < r; i++)
        for (int j = 0; j < c; j++)
            cin >> a[i][j];

    for (int i = 0; i < r; i++) {
        bool ok = false;
        for (int j = 0; j < c; j++) {
            if (isPrime(a[i][j])) {
                ok = true;
                break;
            }
        }
        if (!ok) {
            cout << "Invalid\n";
            return 0;
        }
    }

    cout << "Valid\n";
    return 0;
}
```

### Complexity
- Time: `O(R*C*sqrt(V))` where `V` is element magnitude
- Space: `O(1)` extra

---

## Q43. Matrix Minimum Finder (PYQ Variant)

### Problem Statement
Given an `R x C` matrix, find:
1. minimum value
2. row index
3. column index
(Use 0-based indexing, first occurrence if multiple)

### Input Format
- First line: `R C`
- Next `R` lines: matrix values

### Output Format
- `minValue row col`

### Example
Input:
```text
2 3
5 9 1
4 7 3
```
Output:
```text
1 0 2
```

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int r, c;
    cin >> r >> c;

    long long mn = LLONG_MAX;
    int mr = -1, mc = -1;

    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            long long x;
            cin >> x;
            if (x < mn) {
                mn = x;
                mr = i;
                mc = j;
            }
        }
    }

    cout << mn << " " << mr << " " << mc << "\n";
    return 0;
}
```

### Complexity
- Time: `O(R*C)`
- Space: `O(1)` extra
