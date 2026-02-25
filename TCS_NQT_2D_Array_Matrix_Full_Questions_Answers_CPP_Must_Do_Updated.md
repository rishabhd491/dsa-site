# TCS NQT 2D Arrays and Matrix: Full Questions and C++ Solutions (Must-Do Updated)

Source: `/Users/rishabhdubey/Documents/prep for tcsnqt/TCS_NQT_2D_Array_Matrix_Full_Questions_Answers_CPP.md`

This version includes only high-priority questions for 15-day TCS NQT prep.

## Included Questions

Q1, Q4, Q6, Q8, Q10, Q15, Q16, Q17, Q19, Q20, Q24, Q25, Q26, Q27, Q29, Q31, Q39, Q40

---

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
