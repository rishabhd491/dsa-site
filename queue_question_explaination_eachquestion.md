# TCS_NQT_Queue_Full_Questions_Answers_CPP.md: Question Explaination (Each Question with 2 Examples)

This file explains what each question exactly asks and adds two detailed examples per question.

## Q1. Implement Queue Using Circular Array

### What Exactly This Question Is Asking
- In simple words: Implement `ENQUEUE`, `DEQUEUE`, `FRONT`, and `SIZE` using circular array.
- Core solving focus: follow FIFO order and handle front/rear transitions correctly.

### Problem Understanding (Detailed)
Implement `ENQUEUE`, `DEQUEUE`, `FRONT`, and `SIZE` using circular array.

### Input Format Interpretation
- `capacity Q`
- Next `Q` lines operations

### Output Format Interpretation
- Print output for `DEQUEUE`, `FRONT`, `SIZE`
- For invalid dequeue/front, print `-1`

### Example 1 (Source-Style)
Input Format
- `capacity Q`
- Next `Q` lines operations

### Output Format
- Print output for `DEQUEUE`, `FRONT`, `SIZE`
- For invalid dequeue/front, print `-1`

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

class CQueue {
    vector<long long> a;
    int head =

Detailed Explanation:
- Start by identifying required operation from title: `Q1. Implement Queue Using Circular Array`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: queue with one element `8`
Walkthrough: Walkthrough: Front/rear transitions should remain consistent after operation.
Expected Output: valid queue state and required printed result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q2. Implement Queue Using Linked List

### What Exactly This Question Is Asking
- In simple words: Use the title and provided context to infer required operation and return format.
- Core solving focus: update node links in correct order and keep head/tail references valid.

### Problem Understanding (Detailed)
Use the title and provided context to infer required operation and return format.

### Example 1 (Conceptual)
Input: Use a normal-size test case from mid-range constraints.
Walkthrough: Apply the rule in the question step-by-step and track state changes.
Expected Output: final value/structure requested by the question.

Detailed Explanation:
- Start by identifying required operation from title: `Q2. Implement Queue Using Linked List`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: queue with one element `8`
Walkthrough: Walkthrough: Front/rear transitions should remain consistent after operation.
Expected Output: valid queue state and required printed result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q3. Queue Using Two Stacks

### What Exactly This Question Is Asking
- In simple words: Implement queue operations using two stacks.
- Core solving focus: follow strict LIFO behavior and guard empty-stack cases.

### Problem Understanding (Detailed)
Implement queue operations using two stacks.

### Example 1 (Conceptual)
Input: Use a normal-size test case from mid-range constraints.
Walkthrough: Apply the rule in the question step-by-step and track state changes.
Expected Output: final value/structure requested by the question.

Detailed Explanation:
- Start by identifying required operation from title: `Q3. Queue Using Two Stacks`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: queue with one element `8`
Walkthrough: Walkthrough: Front/rear transitions should remain consistent after operation.
Expected Output: valid queue state and required printed result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q4. Stack Using Two Queues

### What Exactly This Question Is Asking
- In simple words: Implement stack operations using two queues.
- Core solving focus: follow strict LIFO behavior and guard empty-stack cases.

### Problem Understanding (Detailed)
Implement stack operations using two queues.

### Example 1 (Conceptual)
Input: Use a normal-size test case from mid-range constraints.
Walkthrough: Apply the rule in the question step-by-step and track state changes.
Expected Output: final value/structure requested by the question.

Detailed Explanation:
- Start by identifying required operation from title: `Q4. Stack Using Two Queues`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: queue with one element `8`
Walkthrough: Walkthrough: Front/rear transitions should remain consistent after operation.
Expected Output: valid queue state and required printed result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q5. Design Circular Queue

### What Exactly This Question Is Asking
- In simple words: Support operations: `ENQUEUE x`, `DEQUEUE`, `FRONT`, `REAR`, `ISFULL`, `ISEMPTY`.
- Core solving focus: follow FIFO order and handle front/rear transitions correctly.

### Problem Understanding (Detailed)
Support operations: `ENQUEUE x`, `DEQUEUE`, `FRONT`, `REAR`, `ISFULL`, `ISEMPTY`.

### Example 1 (Conceptual)
Input: Use a normal-size test case from mid-range constraints.
Walkthrough: Apply the rule in the question step-by-step and track state changes.
Expected Output: final value/structure requested by the question.

Detailed Explanation:
- Start by identifying required operation from title: `Q5. Design Circular Queue`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: queue with one element `8`
Walkthrough: Walkthrough: Front/rear transitions should remain consistent after operation.
Expected Output: valid queue state and required printed result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q6. First Non-Repeating Character in Stream

### What Exactly This Question Is Asking
- In simple words: Given stream string, for each prefix print first non-repeating character, else `#`.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given stream string, for each prefix print first non-repeating character, else `#`.

### Input Format Interpretation
- One lowercase string

### Output Format Interpretation
- Output string

### Example 1 (Source-Style)
Input:
```text
aabc
```
Output:
```text
a#bb
```

Detailed Explanation:
- Start by identifying required operation from title: `Q6. First Non-Repeating Character in Stream`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: queue with one element `8`
Walkthrough: Walkthrough: Front/rear transitions should remain consistent after operation.
Expected Output: valid queue state and required printed result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q7. Reverse First K Elements of Queue

### What Exactly This Question Is Asking
- In simple words: Reverse first `K` elements of queue and keep rest in same relative order.
- Core solving focus: follow FIFO order and handle front/rear transitions correctly.

### Problem Understanding (Detailed)
Reverse first `K` elements of queue and keep rest in same relative order.

### Input Format Interpretation
- `N K`
- `N` integers (queue front to back)

### Output Format Interpretation
- resulting queue

### Example 1 (Source-Style)
Input Format
- `N K`
- `N` integers (queue front to back)

### Output Format
- resulting queue

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    queue<int> q;
    for (int i = 0; i < n; i++) {
        int x; cin >> x

Detailed Explanation:
- Start by identifying required operation from title: `Q7. Reverse First K Elements of Queue`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: queue with one element `8`
Walkthrough: Walkthrough: Front/rear transitions should remain consistent after operation.
Expected Output: valid queue state and required printed result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q8. Interleave First and Second Half of Queue

### What Exactly This Question Is Asking
- In simple words: Given queue of even length, interleave first half and second half.
- Core solving focus: follow FIFO order and handle front/rear transitions correctly.

### Problem Understanding (Detailed)
Given queue of even length, interleave first half and second half.

### Input Format Interpretation
- `N` (even)
- `N` integers

### Output Format Interpretation
- interleaved queue

### Example 1 (Source-Style)
Input:
```text
6
1 2 3 4 5 6
```
Output:
```text
1 4 2 5 3 6
```

Detailed Explanation:
- Start by identifying required operation from title: `Q8. Interleave First and Second Half of Queue`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: queue with one element `8`
Walkthrough: Walkthrough: Front/rear transitions should remain consistent after operation.
Expected Output: valid queue state and required printed result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q9. Generate Binary Numbers from 1 to N

### What Exactly This Question Is Asking
- In simple words: Generate binary numbers from `1` to `N` using queue.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Generate binary numbers from `1` to `N` using queue.

### Input Format Interpretation
- `N`

### Output Format Interpretation
- N binary strings

### Example 1 (Source-Style)
Input:
```text
5
```
Output:
```text
1 10 11 100 101
```

Detailed Explanation:
- Start by identifying required operation from title: `Q9. Generate Binary Numbers from 1 to N`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: queue with one element `8`
Walkthrough: Walkthrough: Front/rear transitions should remain consistent after operation.
Expected Output: valid queue state and required printed result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q10. Sliding Window Maximum (Deque)

### What Exactly This Question Is Asking
- In simple words: Given array and `K`, print max of every window size `K`.
- Core solving focus: track a moving range and update answer when condition is valid.

### Problem Understanding (Detailed)
Given array and `K`, print max of every window size `K`.

### Example 1 (Conceptual)
Input: Use a normal-size test case from mid-range constraints.
Walkthrough: Apply the rule in the question step-by-step and track state changes.
Expected Output: final value/structure requested by the question.

Detailed Explanation:
- Start by identifying required operation from title: `Q10. Sliding Window Maximum (Deque)`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: queue with one element `8`
Walkthrough: Walkthrough: Front/rear transitions should remain consistent after operation.
Expected Output: valid queue state and required printed result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q11. First Negative in Every Window

### What Exactly This Question Is Asking
- In simple words: For each window size `K`, print first negative else `0`.
- Core solving focus: track a moving range and update answer when condition is valid.

### Problem Understanding (Detailed)
For each window size `K`, print first negative else `0`.

### Example 1 (Conceptual)
Input: Use a normal-size test case from mid-range constraints.
Walkthrough: Apply the rule in the question step-by-step and track state changes.
Expected Output: final value/structure requested by the question.

Detailed Explanation:
- Start by identifying required operation from title: `Q11. First Negative in Every Window`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: queue with one element `8`
Walkthrough: Walkthrough: Front/rear transitions should remain consistent after operation.
Expected Output: valid queue state and required printed result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q12. Sum of Min and Max in Every Window

### What Exactly This Question Is Asking
- In simple words: For each window, compute `min + max` and print total sum over all windows.
- Core solving focus: track a moving range and update answer when condition is valid.

### Problem Understanding (Detailed)
For each window, compute `min + max` and print total sum over all windows.

### Input Format Interpretation
- `N K`
- `N` integers

### Output Format Interpretation
- Total sum

### Example 1 (Source-Style)
Input Format
- `N K`
- `N` integers

### Output Format
- Total sum

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;
    vector<int> a(n);
    for (auto &x : a) cin >> x;

    deque<int> mx, mn;

Detailed Explanation:
- Start by identifying required operation from title: `Q12. Sum of Min and Max in Every Window`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: queue with one element `8`
Walkthrough: Walkthrough: Front/rear transitions should remain consistent after operation.
Expected Output: valid queue state and required printed result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q13. Rotting Oranges (BFS)

### What Exactly This Question Is Asking
- In simple words: In grid: `0` empty, `1` fresh, `2` rotten.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
In grid: `0` empty, `1` fresh, `2` rotten. Every minute rotten infects adjacent fresh.
Return minutes to rot all fresh, else `-1`.

### Example 1 (Conceptual)
Input: Use a normal-size test case from mid-range constraints.
Walkthrough: Apply the rule in the question step-by-step and track state changes.
Expected Output: final value/structure requested by the question.

Detailed Explanation:
- Start by identifying required operation from title: `Q13. Rotting Oranges (BFS)`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: queue with one element `8`
Walkthrough: Walkthrough: Front/rear transitions should remain consistent after operation.
Expected Output: valid queue state and required printed result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q14. 01 Matrix (Nearest Zero Distance)

### What Exactly This Question Is Asking
- In simple words: Given binary matrix, compute distance of each cell to nearest 0 using multi-source BFS.
- Core solving focus: handle row/column traversal and boundary checks safely.

### Problem Understanding (Detailed)
Given binary matrix, compute distance of each cell to nearest 0 using multi-source BFS.

### Example 1 (Conceptual)
Input: Use a normal-size test case from mid-range constraints.
Walkthrough: Apply the rule in the question step-by-step and track state changes.
Expected Output: final value/structure requested by the question.

Detailed Explanation:
- Start by identifying required operation from title: `Q14. 01 Matrix (Nearest Zero Distance)`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: queue with one element `8`
Walkthrough: Walkthrough: Front/rear transitions should remain consistent after operation.
Expected Output: valid queue state and required printed result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q15. Flood Fill (BFS)

### What Exactly This Question Is Asking
- In simple words: Given image matrix, starting cell `(sr, sc)`, replace connected component color with new color.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given image matrix, starting cell `(sr, sc)`, replace connected component color with new color.

### Example 1 (Conceptual)
Input: Use a normal-size test case from mid-range constraints.
Walkthrough: Apply the rule in the question step-by-step and track state changes.
Expected Output: final value/structure requested by the question.

Detailed Explanation:
- Start by identifying required operation from title: `Q15. Flood Fill (BFS)`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: queue with one element `8`
Walkthrough: Walkthrough: Front/rear transitions should remain consistent after operation.
Expected Output: valid queue state and required printed result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q16. Open the Lock (BFS)

### What Exactly This Question Is Asking
- In simple words: Lock has 4 wheels (`0000` start).
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Lock has 4 wheels (`0000` start). Given deadends and target, minimum moves to reach target.

### Input Format Interpretation
- `D` deadends count
- `D` deadend strings
- target string

### Output Format Interpretation
- minimum moves or `-1`

### Example 1 (Source-Style)
Input Format
- `D` deadends count
- `D` deadend strings
- target string

### Output Format
- minimum moves or `-1`

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

vector<string> nbrs(const string& s) {
    vector<string> out;
    for (int i = 0; i < 4; i++) {
        string t =

Detailed Explanation:
- Start by identifying required operation from title: `Q16. Open the Lock (BFS)`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: queue with one element `8`
Walkthrough: Walkthrough: Front/rear transitions should remain consistent after operation.
Expected Output: valid queue state and required printed result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q17. Recent Counter (Queue Design)

### What Exactly This Question Is Asking
- In simple words: Support `PING t`: return number of pings in range `[t-3000, t]`.
- Core solving focus: build/update counts correctly and return requested frequency metric.

### Problem Understanding (Detailed)
Support `PING t`: return number of pings in range `[t-3000, t]`.

### Input Format Interpretation
- `Q`
- `Q` integers `t` in increasing order

### Output Format Interpretation
- answer for each ping

### Example 1 (Source-Style)
Input Format
- `Q`
- `Q` integers `t` in increasing order

### Output Format
- answer for each ping

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int q;
    cin >> q;
    queue<int> qu;

    while (q--) {
        int t;
        cin >> t;

Detailed Explanation:
- Start by identifying required operation from title: `Q17. Recent Counter (Queue Design)`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: `arr = [4,4,2,1,4,2]`
Walkthrough: Walkthrough: Build counts and return the requested frequency-based result.
Expected Output: based on asked metric (e.g., max-frequency element/count).

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q18. Time Needed to Buy Tickets

### What Exactly This Question Is Asking
- In simple words: People in queue buy 1 ticket per turn and rejoin if still need more.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
People in queue buy 1 ticket per turn and rejoin if still need more.
Find time for person `k` to finish.

### Input Format Interpretation
- `N k`
- `N` integers tickets

### Output Format Interpretation
- total time units

### Example 1 (Source-Style)
Input Format
- `N k`
- `N` integers tickets

### Output Format
- total time units

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;
    vector<int> t(n);
    for (auto &x : t) cin >> x;

    int ans = 0;

Detailed Explanation:
- Start by identifying required operation from title: `Q18. Time Needed to Buy Tickets`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: queue with one element `8`
Walkthrough: Walkthrough: Front/rear transitions should remain consistent after operation.
Expected Output: valid queue state and required printed result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q19. Josephus Problem (Queue Simulation)

### What Exactly This Question Is Asking
- In simple words: `N` people in circle, eliminate every `K`-th.
- Core solving focus: follow FIFO order and handle front/rear transitions correctly.

### Problem Understanding (Detailed)
`N` people in circle, eliminate every `K`-th. Print survivor.

### Input Format Interpretation
- `N K`

### Output Format Interpretation
- survivor index (1-based)

### Example 1 (Source-Style)
Input Format
- `N K`

### Output Format
- survivor index (1-based)

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    queue<int> q;
    for (int i = 1; i <= n; i++) q.push(i);

Detailed Explanation:
- Start by identifying required operation from title: `Q19. Josephus Problem (Queue Simulation)`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: queue with one element `8`
Walkthrough: Walkthrough: Front/rear transitions should remain consistent after operation.
Expected Output: valid queue state and required printed result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q20. Number of Islands (BFS)

### What Exactly This Question Is Asking
- In simple words: Count islands of `1`s in binary grid (4-directional adjacency).
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Count islands of `1`s in binary grid (4-directional adjacency).

### Example 1 (Conceptual)
Input: Use a normal-size test case from mid-range constraints.
Walkthrough: Apply the rule in the question step-by-step and track state changes.
Expected Output: final value/structure requested by the question.

Detailed Explanation:
- Start by identifying required operation from title: `Q20. Number of Islands (BFS)`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: queue with one element `8`
Walkthrough: Walkthrough: Front/rear transitions should remain consistent after operation.
Expected Output: valid queue state and required printed result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q21. Moving Average from Data Stream

### What Exactly This Question Is Asking
- In simple words: Given window size `K`, for each incoming number print moving average of last at most K values.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given window size `K`, for each incoming number print moving average of last at most K values.

### Input Format Interpretation
- `K Q`
- `Q` integers

### Output Format Interpretation
- averages (2 decimal)

### Example 1 (Source-Style)
Input Format
- `K Q`
- `Q` integers

### Output Format
- averages (2 decimal)

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int k, q;
    cin >> k >> q;

    queue<long long> qu;
    long long sum = 0;

    cout << fixed <<

Detailed Explanation:
- Start by identifying required operation from title: `Q21. Moving Average from Data Stream`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: queue with one element `8`
Walkthrough: Walkthrough: Front/rear transitions should remain consistent after operation.
Expected Output: valid queue state and required printed result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q22. Implement Deque using Array

### What Exactly This Question Is Asking
- In simple words: Implement `PUSHFRONT`, `PUSHBACK`, `POPFRONT`, `POPBACK`, `FRONT`, `BACK` using circular array deque.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Implement `PUSHFRONT`, `PUSHBACK`, `POPFRONT`, `POPBACK`, `FRONT`, `BACK` using circular array deque.

### Example 1 (Conceptual)
Input: Use a normal-size test case from mid-range constraints.
Walkthrough: Apply the rule in the question step-by-step and track state changes.
Expected Output: final value/structure requested by the question.

Detailed Explanation:
- Start by identifying required operation from title: `Q22. Implement Deque using Array`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: queue with one element `8`
Walkthrough: Walkthrough: Front/rear transitions should remain consistent after operation.
Expected Output: valid queue state and required printed result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q23. Task Scheduler with Cooldown

### What Exactly This Question Is Asking
- In simple words: Given tasks as capital letters and cooldown `n`, find minimum intervals to execute all tasks.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given tasks as capital letters and cooldown `n`, find minimum intervals to execute all tasks.

### Input Format Interpretation
- string tasks
- integer n

### Output Format Interpretation
- minimum intervals

### Example 1 (Source-Style)
Input Format
- string tasks
- integer n

### Output Format
- minimum intervals

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string tasks;
    int n;
    cin >> tasks >> n;

    vector<int> f(26, 0);
    for (char c : tasks) f[c

Detailed Explanation:
- Start by identifying required operation from title: `Q23. Task Scheduler with Cooldown`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: queue with one element `8`
Walkthrough: Walkthrough: Front/rear transitions should remain consistent after operation.
Expected Output: valid queue state and required printed result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q24. Story-Based Call Center Queue Simulation

### What Exactly This Question Is Asking
- In simple words: Customers arrive with service times.
- Core solving focus: follow FIFO order and handle front/rear transitions correctly.

### Problem Understanding (Detailed)
Customers arrive with service times. One agent handles FIFO queue.
Given arrival/service arrays, print waiting time for each customer.

### Input Format Interpretation
- `N`
- `N` arrival times
- `N` service durations

### Output Format Interpretation
- waiting times

### Example 1 (Source-Style)
Input:
```text
3
0 1 2
3 2 1
```
Output:
```text
0 2 3
```

Detailed Explanation:
- Start by identifying required operation from title: `Q24. Story-Based Call Center Queue Simulation`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: queue with one element `8`
Walkthrough: Walkthrough: Front/rear transitions should remain consistent after operation.
Expected Output: valid queue state and required printed result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q25. Story-Based Print Queue Priority Simulation

### What Exactly This Question Is Asking
- In simple words: Given job priorities and target index, each step prints highest priority job at front else rotates.
- Core solving focus: follow FIFO order and handle front/rear transitions correctly.

### Problem Understanding (Detailed)
Given job priorities and target index, each step prints highest priority job at front else rotates.
Return time when target prints.

### Input Format Interpretation
- `N idx`
- `N` priorities

### Output Format Interpretation
- print order time of target (1-based)

### Example 1 (Source-Style)
Input:
```text
6 0
1 1 9 1 1 1
```
Output:
```text
5
```

Detailed Explanation:
- Start by identifying required operation from title: `Q25. Story-Based Print Queue Priority Simulation`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: queue with one element `8`
Walkthrough: Walkthrough: Front/rear transitions should remain consistent after operation.
Expected Output: valid queue state and required printed result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.
