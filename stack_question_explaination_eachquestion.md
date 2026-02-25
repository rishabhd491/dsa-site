# TCS_NQT_Stack_Full_Questions_Answers_CPP.md: Question Explaination (Each Question with 2 Examples)

This file explains what each question exactly asks and adds two detailed examples per question.

## Q1. Implement Stack Using Array

### What Exactly This Question Is Asking
- In simple words: Implement push, pop, top, and size for a stack using array.
- Core solving focus: follow strict LIFO behavior and guard empty-stack cases.

### Problem Understanding (Detailed)
Implement push, pop, top, and size for a stack using array.

### Input Format Interpretation
- First line: `Q`
- Next `Q` lines:
  - `PUSH x`
  - `POP`
  - `TOP`
  - `SIZE`

### Output Format Interpretation
- For `POP` and `TOP`, print returned value or `-1` if empty
- For `SIZE`, print stack size

### Example 1 (Source-Style)
Input Format
- First line: `Q`
- Next `Q` lines:
  - `PUSH x`
  - `POP`
  - `TOP`
  - `SIZE`

### Output Format
- For `POP` and `TOP`, print returned value or `-1` if empty
- For `SIZE`, print stack size

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

class StackArr {
    vector<long long> a;
public

Detailed Explanation:
- Start by identifying required operation from title: `Q1. Implement Stack Using Array`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: stack with one element `5`
Walkthrough: Walkthrough: Push/pop/peek logic should handle size-1 without underflow.
Expected Output: operation-specific single-element result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q2. Implement Stack Using Linked List

### What Exactly This Question Is Asking
- In simple words: Implement stack operations using linked list.
- Core solving focus: update node links in correct order and keep head/tail references valid.

### Problem Understanding (Detailed)
Implement stack operations using linked list.

### Example 1 (Conceptual)
Input: Use a normal-size test case from mid-range constraints.
Walkthrough: Apply the rule in the question step-by-step and track state changes.
Expected Output: final value/structure requested by the question.

Detailed Explanation:
- Start by identifying required operation from title: `Q2. Implement Stack Using Linked List`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: stack with one element `5`
Walkthrough: Walkthrough: Push/pop/peek logic should handle size-1 without underflow.
Expected Output: operation-specific single-element result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q3. Valid Parentheses

### What Exactly This Question Is Asking
- In simple words: Given a bracket string containing `()[]{}`, check if it is valid.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given a bracket string containing `()[]{}`, check if it is valid.

### Input Format Interpretation
- One string `S`

### Output Format Interpretation
- `Yes` or `No`

### Example 1 (Source-Style)
Input:
```text
{[()]}
```
Output:
```text
Yes
```

Detailed Explanation:
- Start by identifying required operation from title: `Q3. Valid Parentheses`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: stack with one element `5`
Walkthrough: Walkthrough: Push/pop/peek logic should handle size-1 without underflow.
Expected Output: operation-specific single-element result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q4. Detect Redundant Parentheses

### What Exactly This Question Is Asking
- In simple words: Given expression with brackets and operators, check if redundant brackets exist.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given expression with brackets and operators, check if redundant brackets exist.

### Input Format Interpretation
- Expression string `S`

### Output Format Interpretation
- `Yes` if redundant else `No`

### Example 1 (Source-Style)
Input:
```text
((a+b))
```
Output:
```text
Yes
```

Detailed Explanation:
- Start by identifying required operation from title: `Q4. Detect Redundant Parentheses`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: stack with one element `5`
Walkthrough: Walkthrough: Push/pop/peek logic should handle size-1 without underflow.
Expected Output: operation-specific single-element result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q5. Min Stack

### What Exactly This Question Is Asking
- In simple words: Design stack supporting `PUSH`, `POP`, `TOP`, `GETMIN` in O(1).
- Core solving focus: follow strict LIFO behavior and guard empty-stack cases.

### Problem Understanding (Detailed)
Design stack supporting `PUSH`, `POP`, `TOP`, `GETMIN` in O(1).

### Input Format Interpretation
- First line `Q`
- Queries: `PUSH x`, `POP`, `TOP`, `GETMIN`

### Output Format Interpretation
- Print outputs for `POP`, `TOP`, `GETMIN`; `-1` when invalid

### Example 1 (Source-Style)
Input Format
- First line `Q`
- Queries: `PUSH x`, `POP`, `TOP`, `GETMIN`

### Output Format
- Print outputs for `POP`, `TOP`, `GETMIN`; `-1` when invalid

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

class MinStack {
    stack<long long> st, mn;
public:
    void push(long long

Detailed Explanation:
- Start by identifying required operation from title: `Q5. Min Stack`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: stack with one element `5`
Walkthrough: Walkthrough: Push/pop/peek logic should handle size-1 without underflow.
Expected Output: operation-specific single-element result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q6. Evaluate Postfix Expression

### What Exactly This Question Is Asking
- In simple words: Evaluate postfix expression tokens.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Evaluate postfix expression tokens.

### Input Format Interpretation
- First line: `N`
- Second line: `N` space-separated tokens (`+,-,*,/` and integers)

### Output Format Interpretation
- Expression value

### Example 1 (Source-Style)
Input:
```text
5
2 1 + 3 *
```
Output:
```text
9
```

Detailed Explanation:
- Start by identifying required operation from title: `Q6. Evaluate Postfix Expression`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: stack with one element `5`
Walkthrough: Walkthrough: Push/pop/peek logic should handle size-1 without underflow.
Expected Output: operation-specific single-element result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q7. Infix to Postfix Conversion

### What Exactly This Question Is Asking
- In simple words: Convert infix expression (single-letter operands, +,-,*,/,^, brackets) to postfix.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Convert infix expression (single-letter operands, +,-,*,/,^, brackets) to postfix.

### Input Format Interpretation
- Infix string

### Output Format Interpretation
- Postfix string

### Example 1 (Source-Style)
Input:
```text
a+b*(c-d)
```
Output:
```text
abcd-*+
```

Detailed Explanation:
- Start by identifying required operation from title: `Q7. Infix to Postfix Conversion`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: stack with one element `5`
Walkthrough: Walkthrough: Push/pop/peek logic should handle size-1 without underflow.
Expected Output: operation-specific single-element result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q8. Evaluate Infix Expression

### What Exactly This Question Is Asking
- In simple words: Evaluate infix expression containing non-negative integers and operators `+,-,*,/` with parentheses.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Evaluate infix expression containing non-negative integers and operators `+,-,*,/` with parentheses.

### Input Format Interpretation
- One expression string without spaces

### Output Format Interpretation
- Result integer

### Example 1 (Source-Style)
Input Format
- One expression string without spaces

### Output Format
- Result integer

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int prec(char c) {
    if (c=='+' || c=='-') return 1;
    if (c=='*' || c=='/') return 2;
    return 0;
}

long long apply

Detailed Explanation:
- Start by identifying required operation from title: `Q8. Evaluate Infix Expression`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: stack with one element `5`
Walkthrough: Walkthrough: Push/pop/peek logic should handle size-1 without underflow.
Expected Output: operation-specific single-element result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q9. Next Greater Element (Right)

### What Exactly This Question Is Asking
- In simple words: For each array element, find next greater element to its right else `-1`.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
For each array element, find next greater element to its right else `-1`.

### Input Format Interpretation
- `N`
- `N` integers

### Output Format Interpretation
- NGE array

### Example 1 (Source-Style)
Input Format
- `N`
- `N` integers

### Output Format
- NGE array

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<long long> a(n), ans(n, -1);
    for (auto &x : a) cin >> x;

    stack<int> st

Detailed Explanation:
- Start by identifying required operation from title: `Q9. Next Greater Element (Right)`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: stack with one element `5`
Walkthrough: Walkthrough: Push/pop/peek logic should handle size-1 without underflow.
Expected Output: operation-specific single-element result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q10. Next Greater Element Circular

### What Exactly This Question Is Asking
- In simple words: Given circular array, find next greater element for each index.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given circular array, find next greater element for each index.

### Example 1 (Conceptual)
Input: Use a normal-size test case from mid-range constraints.
Walkthrough: Apply the rule in the question step-by-step and track state changes.
Expected Output: final value/structure requested by the question.

Detailed Explanation:
- Start by identifying required operation from title: `Q10. Next Greater Element Circular`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: stack with one element `5`
Walkthrough: Walkthrough: Push/pop/peek logic should handle size-1 without underflow.
Expected Output: operation-specific single-element result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q11. Previous Smaller Element

### What Exactly This Question Is Asking
- In simple words: For each element, find previous smaller element to left else `-1`.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
For each element, find previous smaller element to left else `-1`.

### Example 1 (Conceptual)
Input: Use a normal-size test case from mid-range constraints.
Walkthrough: Apply the rule in the question step-by-step and track state changes.
Expected Output: final value/structure requested by the question.

Detailed Explanation:
- Start by identifying required operation from title: `Q11. Previous Smaller Element`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: stack with one element `5`
Walkthrough: Walkthrough: Push/pop/peek logic should handle size-1 without underflow.
Expected Output: operation-specific single-element result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q12. Stock Span

### What Exactly This Question Is Asking
- In simple words: For each day price, span = number of consecutive previous days with price <= today.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
For each day price, span = number of consecutive previous days with price <= today.

### Input Format Interpretation
- `N`
- `N` prices

### Output Format Interpretation
- spans

### Example 1 (Source-Style)
Input Format
- `N`
- `N` prices

### Output Format
- spans

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> p(n), span(n);
    for (auto &x : p) cin >> x;

    stack<int> st;
    for (in

Detailed Explanation:
- Start by identifying required operation from title: `Q12. Stock Span`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: stack with one element `5`
Walkthrough: Walkthrough: Push/pop/peek logic should handle size-1 without underflow.
Expected Output: operation-specific single-element result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q13. Daily Temperatures

### What Exactly This Question Is Asking
- In simple words: For each day, find number of days until a warmer temperature.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
For each day, find number of days until a warmer temperature. If none, `0`.

### Example 1 (Conceptual)
Input: Use a normal-size test case from mid-range constraints.
Walkthrough: Apply the rule in the question step-by-step and track state changes.
Expected Output: final value/structure requested by the question.

Detailed Explanation:
- Start by identifying required operation from title: `Q13. Daily Temperatures`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: stack with one element `5`
Walkthrough: Walkthrough: Push/pop/peek logic should handle size-1 without underflow.
Expected Output: operation-specific single-element result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q14. Largest Rectangle in Histogram

### What Exactly This Question Is Asking
- In simple words: Given bar heights, find max rectangle area.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given bar heights, find max rectangle area.

### Example 1 (Conceptual)
Input: Use a normal-size test case from mid-range constraints.
Walkthrough: Apply the rule in the question step-by-step and track state changes.
Expected Output: final value/structure requested by the question.

Detailed Explanation:
- Start by identifying required operation from title: `Q14. Largest Rectangle in Histogram`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: stack with one element `5`
Walkthrough: Walkthrough: Push/pop/peek logic should handle size-1 without underflow.
Expected Output: operation-specific single-element result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q15. Maximal Rectangle in Binary Matrix

### What Exactly This Question Is Asking
- In simple words: Given binary matrix, find area of largest rectangle containing only `1`s.
- Core solving focus: handle row/column traversal and boundary checks safely.

### Problem Understanding (Detailed)
Given binary matrix, find area of largest rectangle containing only `1`s.

### Input Format Interpretation
- `R C`
- `R` lines each containing `C` binary values

### Output Format Interpretation
- max area

### Example 1 (Source-Style)
Input Format
- `R C`
- `R` lines each containing `C` binary values

### Output Format
- max area

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

long long histMax(const vector<int>& h) {
    int n = (int)h.size();
    stack<int> st;
    long long best = 0;

    for (int i =

Detailed Explanation:
- Start by identifying required operation from title: `Q15. Maximal Rectangle in Binary Matrix`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: stack with one element `5`
Walkthrough: Walkthrough: Push/pop/peek logic should handle size-1 without underflow.
Expected Output: operation-specific single-element result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q16. Trap Rain Water (Stack Method)

### What Exactly This Question Is Asking
- In simple words: Given heights array, compute trapped water using stack.
- Core solving focus: follow strict LIFO behavior and guard empty-stack cases.

### Problem Understanding (Detailed)
Given heights array, compute trapped water using stack.

### Example 1 (Conceptual)
Input: Use a normal-size test case from mid-range constraints.
Walkthrough: Apply the rule in the question step-by-step and track state changes.
Expected Output: final value/structure requested by the question.

Detailed Explanation:
- Start by identifying required operation from title: `Q16. Trap Rain Water (Stack Method)`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: stack with one element `5`
Walkthrough: Walkthrough: Push/pop/peek logic should handle size-1 without underflow.
Expected Output: operation-specific single-element result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q17. Simplify Unix Path

### What Exactly This Question Is Asking
- In simple words: Simplify absolute Unix path with `.`, `..`, and extra `/`.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Simplify absolute Unix path with `.`, `..`, and extra `/`.

### Input Format Interpretation
- Path string

### Output Format Interpretation
- Canonical path

### Example 1 (Source-Style)
Input:
```text
/a/./b/../../c/
```
Output:
```text
/c
```

Detailed Explanation:
- Start by identifying required operation from title: `Q17. Simplify Unix Path`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: stack with one element `5`
Walkthrough: Walkthrough: Push/pop/peek logic should handle size-1 without underflow.
Expected Output: operation-specific single-element result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q18. Decode String (k[encoded])

### What Exactly This Question Is Asking
- In simple words: Decode strings like `3[a2[c]]`.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Decode strings like `3[a2[c]]`.

### Input Format Interpretation
- Encoded string

### Output Format Interpretation
- Decoded string

### Example 1 (Source-Style)
Input:
```text
3[a2[c]]
```
Output:
```text
accaccacc
```

Detailed Explanation:
- Start by identifying required operation from title: `Q18. Decode String (k[encoded])`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: stack with one element `5`
Walkthrough: Walkthrough: Push/pop/peek logic should handle size-1 without underflow.
Expected Output: operation-specific single-element result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q19. Remove K Digits to Form Smallest Number

### What Exactly This Question Is Asking
- In simple words: Given numeric string and integer `k`, remove exactly `k` digits to form smallest possible number.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given numeric string and integer `k`, remove exactly `k` digits to form smallest possible number.

### Input Format Interpretation
- Numeric string `num`
- Integer `k`

### Output Format Interpretation
- Smallest number string

### Example 1 (Source-Style)
Input:
```text
1432219
3
```
Output:
```text
1219
```

Detailed Explanation:
- Start by identifying required operation from title: `Q19. Remove K Digits to Form Smallest Number`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: stack with one element `5`
Walkthrough: Walkthrough: Push/pop/peek logic should handle size-1 without underflow.
Expected Output: operation-specific single-element result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q20. Asteroid Collision

### What Exactly This Question Is Asking
- In simple words: Given moving asteroids (sign = direction, abs = size), return final state.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given moving asteroids (sign = direction, abs = size), return final state.

### Input Format Interpretation
- `N`
- `N` integers

### Output Format Interpretation
- Remaining asteroids in order (or blank)

### Example 1 (Source-Style)
Input Format
- `N`
- `N` integers

### Output Format
- Remaining asteroids in order (or blank)

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (auto &x : a) cin >> x;

    v

Detailed Explanation:
- Start by identifying required operation from title: `Q20. Asteroid Collision`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: stack with one element `5`
Walkthrough: Walkthrough: Push/pop/peek logic should handle size-1 without underflow.
Expected Output: operation-specific single-element result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q21. Celebrity Problem

### What Exactly This Question Is Asking
- In simple words: Given `N x N` matrix `M` (`M[i][j]=1` means i knows j), find celebrity (known by everyone, knows no one), else `-1`.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given `N x N` matrix `M` (`M[i][j]=1` means i knows j), find celebrity (known by everyone, knows no one), else `-1`.

### Input Format Interpretation
- `N`
- `N` lines each with `N` values

### Output Format Interpretation
- celebrity index or `-1`

### Example 1 (Source-Style)
Input Format
- `N`
- `N` lines each with `N` values

### Output Format
- celebrity index or `-1`

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<vector<int>> m(n, vector<int>(n));
    for (int i = 0; i < n; i++

Detailed Explanation:
- Start by identifying required operation from title: `Q21. Celebrity Problem`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: stack with one element `5`
Walkthrough: Walkthrough: Push/pop/peek logic should handle size-1 without underflow.
Expected Output: operation-specific single-element result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q22. Sort Stack Using Recursion

### What Exactly This Question Is Asking
- In simple words: Sort stack in increasing order using recursion only.
- Core solving focus: apply correct ordering rule and preserve constraints/tie conditions.

### Problem Understanding (Detailed)
Sort stack in increasing order using recursion only.

### Input Format Interpretation
- `N`
- `N` integers (top is last input)

### Output Format Interpretation
- Sorted stack from top to bottom

### Example 1 (Source-Style)
Input Format
- `N`
- `N` integers (top is last input)

### Output Format
- Sorted stack from top to bottom

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

void insertSorted(stack<int>& st, int x) {
    if (st.empty() || st.top() <= x) {
        st.push(x);

Detailed Explanation:
- Start by identifying required operation from title: `Q22. Sort Stack Using Recursion`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: `arr = [9,1,7,3]`
Walkthrough: Walkthrough: Apply the exact sorting condition (ascending/custom comparator).
Expected Output: ordered sequence following question rule.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q23. Reverse Stack Using Recursion

### What Exactly This Question Is Asking
- In simple words: Reverse stack using recursion only.
- Core solving focus: follow strict LIFO behavior and guard empty-stack cases.

### Problem Understanding (Detailed)
Reverse stack using recursion only.

### Input Format Interpretation
- `N`
- `N` integers

### Output Format Interpretation
- Stack from top to bottom after reverse

### Example 1 (Source-Style)
Input Format
- `N`
- `N` integers

### Output Format
- Stack from top to bottom after reverse

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

void insertBottom(stack<int>& st, int x) {
    if (st.empty()) {
        st.push(x);
        return

Detailed Explanation:
- Start by identifying required operation from title: `Q23. Reverse Stack Using Recursion`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: stack with one element `5`
Walkthrough: Walkthrough: Push/pop/peek logic should handle size-1 without underflow.
Expected Output: operation-specific single-element result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q24. Validate Stack Sequences

### What Exactly This Question Is Asking
- In simple words: Given pushed and popped sequences, check if popped order is valid stack pop order.
- Core solving focus: follow strict LIFO behavior and guard empty-stack cases.

### Problem Understanding (Detailed)
Given pushed and popped sequences, check if popped order is valid stack pop order.

### Input Format Interpretation
- `N`
- pushed sequence
- popped sequence

### Output Format Interpretation
- `Yes` / `No`

### Example 1 (Source-Style)
Input Format
- `N`
- pushed sequence
- popped sequence

### Output Format
- `Yes` / `No`

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> pushed(n), popped(n);
    for (auto &x : pushed) cin >> x;
    for (aut

Detailed Explanation:
- Start by identifying required operation from title: `Q24. Validate Stack Sequences`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: stack with one element `5`
Walkthrough: Walkthrough: Push/pop/peek logic should handle size-1 without underflow.
Expected Output: operation-specific single-element result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q25. Story-Based Browser Navigation (Back/Forward)

### What Exactly This Question Is Asking
- In simple words: Simulate browser with commands: - `VISIT url` - `BACK` - `FORWARD` - `CURRENT` Initially at `home`.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Simulate browser with commands:
- `VISIT url`
- `BACK`
- `FORWARD`
- `CURRENT`
Initially at `home`.

### Input Format Interpretation
- `Q`
- `Q` command lines

### Output Format Interpretation
- For `BACK`, `FORWARD`, `CURRENT`, print current page

### Example 1 (Source-Style)
Input Format
- `Q`
- `Q` command lines

### Output Format
- For `BACK`, `FORWARD`, `CURRENT`, print current page

### C++ Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int q;
    c

Detailed Explanation:
- Start by identifying required operation from title: `Q25. Story-Based Browser Navigation (Back/Forward)`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: stack with one element `5`
Walkthrough: Walkthrough: Push/pop/peek logic should handle size-1 without underflow.
Expected Output: operation-specific single-element result.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.
