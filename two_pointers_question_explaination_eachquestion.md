# TCS_NQT_Two_Pointers_Full_Questions_Answers_CPP.md: Question Explaination (Each Question with 2 Examples)

This file explains what each question exactly asks and adds two detailed examples per question.

## Q1. Two Sum in Sorted Array (Indices)

### What Exactly This Question Is Asking
- In simple words: Given a sorted array and target `T`, find 1-based indices of two numbers such that sum is `T`.
- Core solving focus: apply correct ordering rule and preserve constraints/tie conditions.

### Problem Understanding (Detailed)
Given a sorted array and target `T`, find 1-based indices of two numbers such that sum is `T`.
If no such pair exists, print `-1`.

### Input Format Interpretation
- `N T`
- `N` sorted integers

### Output Format Interpretation
- `i j` (1-based) or `-1`

### Example 1 (Source-Style)
Input:
```text
5 9
2 3 4 5 7
```
Output:
```text
1 5
```

Detailed Explanation:
- Start by identifying required operation from title: `Q1. Two Sum in Sorted Array (Indices)`.
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

## Q2. Count Pairs with Given Sum in Sorted Array

### What Exactly This Question Is Asking
- In simple words: Count total index pairs `(i, j)` with `i < j` and `A[i] + A[j] = K`.
- Core solving focus: build/update counts correctly and return requested frequency metric.

### Problem Understanding (Detailed)
Count total index pairs `(i, j)` with `i < j` and `A[i] + A[j] = K`.
Array is sorted and can contain duplicates.

### Input Format Interpretation
- `N K`
- `N` sorted integers

### Output Format Interpretation
- Count of valid pairs

### Example 1 (Source-Style)
Input:
```text
6 8
1 2 3 5 5 6
```
Output:
```text
2
```

Detailed Explanation:
- Start by identifying required operation from title: `Q2. Count Pairs with Given Sum in Sorted Array`.
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

## Q3. Pair with Sum Closest to Target

### What Exactly This Question Is Asking
- In simple words: Given sorted array and target `T`, find pair whose sum is closest to `T`.
- Core solving focus: track complements or pointers and avoid invalid duplicates.

### Problem Understanding (Detailed)
Given sorted array and target `T`, find pair whose sum is closest to `T`.
Print the pair values.

### Input Format Interpretation
- `N T`
- `N` sorted integers

### Output Format Interpretation
- `x y` (pair values)

### Example 1 (Source-Style)
Input:
```text
6 10
1 3 4 7 10 12
```
Output:
```text
3 7
```

Detailed Explanation:
- Start by identifying required operation from title: `Q3. Pair with Sum Closest to Target`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: small hand-checkable values
Walkthrough: Walkthrough: Track intermediate state updates at each step to validate logic.
Expected Output: deterministic result for this compact case.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q4. Remove Duplicates from Sorted Array

### What Exactly This Question Is Asking
- In simple words: Given sorted array, remove duplicates in-place such that each element appears once.
- Core solving focus: apply correct ordering rule and preserve constraints/tie conditions.

### Problem Understanding (Detailed)
Given sorted array, remove duplicates in-place such that each element appears once.
Print new length and compacted prefix.

### Input Format Interpretation
- `N`
- `N` sorted integers

### Output Format Interpretation
- First line: new length
- Second line: unique elements

### Example 1 (Source-Style)
Input:
```text
7
1 1 2 2 3 4 4
```
Output:
```text
4
1 2 3 4
```

Detailed Explanation:
- Start by identifying required operation from title: `Q4. Remove Duplicates from Sorted Array`.
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

## Q5. Remove Duplicates Allowing At Most 2 Occurrences

### What Exactly This Question Is Asking
- In simple words: Given sorted array, keep each value at most twice in-place.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given sorted array, keep each value at most twice in-place.
Print new length and updated prefix.

### Input Format Interpretation
- `N`
- `N` sorted integers

### Output Format Interpretation
- First line: new length
- Second line: array prefix

### Example 1 (Source-Style)
Input:
```text
10
1 1 1 2 2 3 3 3 3 4
```
Output:
```text
7
1 1 2 2 3 3 4
```

Detailed Explanation:
- Start by identifying required operation from title: `Q5. Remove Duplicates Allowing At Most 2 Occurrences`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: small hand-checkable values
Walkthrough: Walkthrough: Track intermediate state updates at each step to validate logic.
Expected Output: deterministic result for this compact case.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q6. Move All Zeros to End (Stable)

### What Exactly This Question Is Asking
- In simple words: Move all zeros to end while maintaining order of non-zero elements.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Move all zeros to end while maintaining order of non-zero elements.

### Input Format Interpretation
- `N`
- `N` integers

### Output Format Interpretation
- Updated array

### Example 1 (Source-Style)
Input:
```text
7
0 1 0 3 12 0 5
```
Output:
```text
1 3 12 5 0 0 0
```

Detailed Explanation:
- Start by identifying required operation from title: `Q6. Move All Zeros to End (Stable)`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: small hand-checkable values
Walkthrough: Walkthrough: Track intermediate state updates at each step to validate logic.
Expected Output: deterministic result for this compact case.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q7. Partition Negatives and Non-Negatives

### What Exactly This Question Is Asking
- In simple words: Rearrange array so all negative numbers come before non-negative numbers.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Rearrange array so all negative numbers come before non-negative numbers.
Order inside groups is not required.

### Input Format Interpretation
- `N`
- `N` integers

### Output Format Interpretation
- Rearranged array

### Example 1 (Source-Style)
Input:
```text
6
-1 3 -2 4 0 -5
```
Output (one valid):
```text
-1 -5 -2 4 0 3
```

Detailed Explanation:
- Start by identifying required operation from title: `Q7. Partition Negatives and Non-Negatives`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: small hand-checkable values
Walkthrough: Walkthrough: Track intermediate state updates at each step to validate logic.
Expected Output: deterministic result for this compact case.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q8. Sort Colors (0,1,2)

### What Exactly This Question Is Asking
- In simple words: Given array containing only `0`, `1`, `2`, sort in one pass.
- Core solving focus: apply correct ordering rule and preserve constraints/tie conditions.

### Problem Understanding (Detailed)
Given array containing only `0`, `1`, `2`, sort in one pass.

### Input Format Interpretation
- `N`
- `N` integers

### Output Format Interpretation
- Sorted array

### Example 1 (Source-Style)
Input:
```text
8
2 0 2 1 1 0 2 0
```
Output:
```text
0 0 0 1 1 2 2 2
```

Detailed Explanation:
- Start by identifying required operation from title: `Q8. Sort Colors (0,1,2)`.
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

## Q9. Squares of Sorted Array

### What Exactly This Question Is Asking
- In simple words: Given sorted array (may include negatives), return sorted squares.
- Core solving focus: apply correct ordering rule and preserve constraints/tie conditions.

### Problem Understanding (Detailed)
Given sorted array (may include negatives), return sorted squares.

### Input Format Interpretation
- `N`
- `N` sorted integers

### Output Format Interpretation
- Sorted squared array

### Example 1 (Source-Style)
Input:
```text
5
-4 -1 0 3 10
```
Output:
```text
0 1 9 16 100
```

Detailed Explanation:
- Start by identifying required operation from title: `Q9. Squares of Sorted Array`.
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

## Q10. Reverse a String In-Place

### What Exactly This Question Is Asking
- In simple words: Reverse string in-place using two pointers.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Reverse string in-place using two pointers.

### Input Format Interpretation
- One string (no spaces)

### Output Format Interpretation
- Reversed string

### Example 1 (Source-Style)
Input:
```text
coding
```
Output:
```text
gnidoc
```

Detailed Explanation:
- Start by identifying required operation from title: `Q10. Reverse a String In-Place`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: small hand-checkable values
Walkthrough: Walkthrough: Track intermediate state updates at each step to validate logic.
Expected Output: deterministic result for this compact case.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q11. Reverse Only Vowels in String

### What Exactly This Question Is Asking
- In simple words: Reverse only vowels in string, keep all other characters fixed.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Reverse only vowels in string, keep all other characters fixed.

### Input Format Interpretation
- One string (no spaces)

### Output Format Interpretation
- Transformed string

### Example 1 (Source-Style)
Input:
```text
leetcode
```
Output:
```text
leotcede
```

Detailed Explanation:
- Start by identifying required operation from title: `Q11. Reverse Only Vowels in String`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: small hand-checkable values
Walkthrough: Walkthrough: Track intermediate state updates at each step to validate logic.
Expected Output: deterministic result for this compact case.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q12. Valid Palindrome (Ignore Non-Alphanumeric)

### What Exactly This Question Is Asking
- In simple words: Given string, check if palindrome ignoring non-alphanumeric characters and case.
- Core solving focus: identify symmetry logic and compare mirrored positions.

### Problem Understanding (Detailed)
Given string, check if palindrome ignoring non-alphanumeric characters and case.

### Input Format Interpretation
- Full line string

### Output Format Interpretation
- `Yes` / `No`

### Example 1 (Source-Style)
Input:
```text
A man, a plan, a canal: Panama
```
Output:
```text
Yes
```

Detailed Explanation:
- Start by identifying required operation from title: `Q12. Valid Palindrome (Ignore Non-Alphanumeric)`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: `s = "abba"`
Walkthrough: Walkthrough: Compare first-last and inward pairs; all pairs match.
Expected Output: `Yes` / `true`.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q13. Valid Palindrome II (Delete At Most One Character)

### What Exactly This Question Is Asking
- In simple words: Given string, check whether it can be palindrome by deleting at most one character.
- Core solving focus: identify symmetry logic and compare mirrored positions.

### Problem Understanding (Detailed)
Given string, check whether it can be palindrome by deleting at most one character.

### Input Format Interpretation
- One string

### Output Format Interpretation
- `Yes` / `No`

### Example 1 (Source-Style)
Input:
```text
abca
```
Output:
```text
Yes
```

Detailed Explanation:
- Start by identifying required operation from title: `Q13. Valid Palindrome II (Delete At Most One Character)`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: `s = "abba"`
Walkthrough: Walkthrough: Compare first-last and inward pairs; all pairs match.
Expected Output: `Yes` / `true`.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q14. Merge Two Sorted Arrays (Classic)

### What Exactly This Question Is Asking
- In simple words: Given sorted arrays `A` and `B`, print merged sorted array.
- Core solving focus: apply correct ordering rule and preserve constraints/tie conditions.

### Problem Understanding (Detailed)
Given sorted arrays `A` and `B`, print merged sorted array.

### Input Format Interpretation
- `N M`
- `N` integers
- `M` integers

### Output Format Interpretation
- merged sorted sequence

### Example 1 (Source-Style)
Input:
```text
4 3
1 3 5 7
2 4 6
```
Output:
```text
1 2 3 4 5 6 7
```

Detailed Explanation:
- Start by identifying required operation from title: `Q14. Merge Two Sorted Arrays (Classic)`.
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

## Q15. Merge Sorted Array In-Place (A has extra space)

### What Exactly This Question Is Asking
- In simple words: Array `A` has size `N+M`, first `N` elements valid and sorted.
- Core solving focus: apply correct ordering rule and preserve constraints/tie conditions.

### Problem Understanding (Detailed)
Array `A` has size `N+M`, first `N` elements valid and sorted.
Array `B` has `M` sorted elements. Merge into `A` in-place.

### Input Format Interpretation
- `N M`
- `N` values for A valid prefix
- `M` values for B

### Output Format Interpretation
- merged `A`

### Example 1 (Source-Style)
Input:
```text
3 3
1 2 4
2 5 6
```
Output:
```text
1 2 2 4 5 6
```

Detailed Explanation:
- Start by identifying required operation from title: `Q15. Merge Sorted Array In-Place (A has extra space)`.
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

## Q16. Intersection of Two Sorted Arrays with Multiplicity

### What Exactly This Question Is Asking
- In simple words: Given two sorted arrays, print common elements considering duplicates.
- Core solving focus: apply correct ordering rule and preserve constraints/tie conditions.

### Problem Understanding (Detailed)
Given two sorted arrays, print common elements considering duplicates.

### Input Format Interpretation
- `N M`
- `N` sorted integers
- `M` sorted integers

### Output Format Interpretation
- intersection values (or `-1`)

### Example 1 (Source-Style)
Input:
```text
5 5
1 2 2 3 4
2 2 3 5 6
```
Output:
```text
2 2 3
```

Detailed Explanation:
- Start by identifying required operation from title: `Q16. Intersection of Two Sorted Arrays with Multiplicity`.
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

## Q17. Check if S is Subsequence of T

### What Exactly This Question Is Asking
- In simple words: Given strings `S` and `T`, check whether `S` is a subsequence of `T`.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given strings `S` and `T`, check whether `S` is a subsequence of `T`.

### Input Format Interpretation
- `S`
- `T`

### Output Format Interpretation
- `Yes` / `No`

### Example 1 (Source-Style)
Input:
```text
ace
abcde
```
Output:
```text
Yes
```

Detailed Explanation:
- Start by identifying required operation from title: `Q17. Check if S is Subsequence of T`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: small hand-checkable values
Walkthrough: Walkthrough: Track intermediate state updates at each step to validate logic.
Expected Output: deterministic result for this compact case.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q18. Backspace String Compare

### What Exactly This Question Is Asking
- In simple words: Given strings `A` and `B` where `#` means backspace, check if both become equal.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given strings `A` and `B` where `#` means backspace, check if both become equal.

### Input Format Interpretation
- `A`
- `B`

### Output Format Interpretation
- `Yes` / `No`

### Example 1 (Source-Style)
Input:
```text
ab#c
ad#c
```
Output:
```text
Yes
```

Detailed Explanation:
- Start by identifying required operation from title: `Q18. Backspace String Compare`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: small hand-checkable values
Walkthrough: Walkthrough: Track intermediate state updates at each step to validate logic.
Expected Output: deterministic result for this compact case.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q19. Container With Most Water

### What Exactly This Question Is Asking
- In simple words: Given heights array, choose two lines that with x-axis forms container storing maximum water.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given heights array, choose two lines that with x-axis forms container storing maximum water.

### Input Format Interpretation
- `N`
- `N` non-negative integers

### Output Format Interpretation
- Maximum area

### Example 1 (Source-Style)
Input:
```text
9
1 8 6 2 5 4 8 3 7
```
Output:
```text
49
```

Detailed Explanation:
- Start by identifying required operation from title: `Q19. Container With Most Water`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: small hand-checkable values
Walkthrough: Walkthrough: Track intermediate state updates at each step to validate logic.
Expected Output: deterministic result for this compact case.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q20. Trapping Rain Water

### What Exactly This Question Is Asking
- In simple words: Given elevation map, compute trapped rainwater.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given elevation map, compute trapped rainwater.

### Input Format Interpretation
- `N`
- `N` non-negative integers

### Output Format Interpretation
- Water units

### Example 1 (Source-Style)
Input:
```text
12
0 1 0 2 1 0 1 3 2 1 2 1
```
Output:
```text
6
```

Detailed Explanation:
- Start by identifying required operation from title: `Q20. Trapping Rain Water`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: small hand-checkable values
Walkthrough: Walkthrough: Track intermediate state updates at each step to validate logic.
Expected Output: deterministic result for this compact case.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q21. 3Sum (Unique Triplets Summing to 0)

### What Exactly This Question Is Asking
- In simple words: Given array, print all unique triplets `(a,b,c)` such that `a+b+c=0`.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given array, print all unique triplets `(a,b,c)` such that `a+b+c=0`.

### Input Format Interpretation
- `N`
- `N` integers

### Output Format Interpretation
- One triplet per line (or `-1`)

### Example 1 (Source-Style)
Input:
```text
6
-1 0 1 2 -1 -4
```
Output (one valid):
```text
-1 -1 2
-1 0 1
```

Detailed Explanation:
- Start by identifying required operation from title: `Q21. 3Sum (Unique Triplets Summing to 0)`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: small hand-checkable values
Walkthrough: Walkthrough: Track intermediate state updates at each step to validate logic.
Expected Output: deterministic result for this compact case.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q22. 3Sum Closest

### What Exactly This Question Is Asking
- In simple words: Given array and target, find sum of triplet closest to target.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given array and target, find sum of triplet closest to target.

### Input Format Interpretation
- `N target`
- `N` integers

### Output Format Interpretation
- Closest sum

### Example 1 (Source-Style)
Input:
```text
4 1
-1 2 1 -4
```
Output:
```text
2
```

Detailed Explanation:
- Start by identifying required operation from title: `Q22. 3Sum Closest`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: small hand-checkable values
Walkthrough: Walkthrough: Track intermediate state updates at each step to validate logic.
Expected Output: deterministic result for this compact case.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q23. 4Sum (Unique Quadruplets)

### What Exactly This Question Is Asking
- In simple words: Given array and target `T`, print all unique quadruplets with sum `T`.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given array and target `T`, print all unique quadruplets with sum `T`.

### Input Format Interpretation
- `N T`
- `N` integers

### Output Format Interpretation
- One quadruplet per line or `-1`

### Example 1 (Source-Style)
Input:
```text
6 0
1 0 -1 0 -2 2
```
Output (one valid):
```text
-2 -1 1 2
-2 0 0 2
-1 0 0 1
```

Detailed Explanation:
- Start by identifying required operation from title: `Q23. 4Sum (Unique Quadruplets)`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: small hand-checkable values
Walkthrough: Walkthrough: Track intermediate state updates at each step to validate logic.
Expected Output: deterministic result for this compact case.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q24. Count Triplets with Sum Less Than Target

### What Exactly This Question Is Asking
- In simple words: Given array and target `T`, count triplets `(i,j,k)` with `i<j<k` and sum `< T`.
- Core solving focus: build/update counts correctly and return requested frequency metric.

### Problem Understanding (Detailed)
Given array and target `T`, count triplets `(i,j,k)` with `i<j<k` and sum `< T`.

### Input Format Interpretation
- `N T`
- `N` integers

### Output Format Interpretation
- Count

### Example 1 (Source-Style)
Input:
```text
5 2
-1 0 2 3 -2
```
Output:
```text
2
```

Detailed Explanation:
- Start by identifying required operation from title: `Q24. Count Triplets with Sum Less Than Target`.
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

## Q25. Pair with Given Difference in Sorted Array

### What Exactly This Question Is Asking
- In simple words: Given sorted array and `K>=0`, check if there exists pair `(i,j)` (`i<j`) such that `A[j]-A[i]=K`.
- Core solving focus: apply correct ordering rule and preserve constraints/tie conditions.

### Problem Understanding (Detailed)
Given sorted array and `K>=0`, check if there exists pair `(i,j)` (`i<j`) such that `A[j]-A[i]=K`.

### Input Format Interpretation
- `N K`
- `N` sorted integers

### Output Format Interpretation
- `Yes` / `No`

### Example 1 (Source-Style)
Input:
```text
6 3
1 3 4 6 8 10
```
Output:
```text
Yes
```

Detailed Explanation:
- Start by identifying required operation from title: `Q25. Pair with Given Difference in Sorted Array`.
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

## Q26. Minimum Difference Pair from Two Sorted Arrays

### What Exactly This Question Is Asking
- In simple words: Given two sorted arrays, find minimum absolute difference between any pair `(a, b)`.
- Core solving focus: apply correct ordering rule and preserve constraints/tie conditions.

### Problem Understanding (Detailed)
Given two sorted arrays, find minimum absolute difference between any pair `(a, b)`.

### Input Format Interpretation
- `N M`
- `N` sorted integers
- `M` sorted integers

### Output Format Interpretation
- Minimum absolute difference

### Example 1 (Source-Style)
Input:
```text
4 4
1 4 10 20
5 8 15 30
```
Output:
```text
1
```

Detailed Explanation:
- Start by identifying required operation from title: `Q26. Minimum Difference Pair from Two Sorted Arrays`.
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

## Q27. Longest Palindromic Substring (Expand Centers)

### What Exactly This Question Is Asking
- In simple words: Given string `S`, print longest palindromic substring.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given string `S`, print longest palindromic substring.

### Input Format Interpretation
- String `S`

### Output Format Interpretation
- Longest palindromic substring

### Example 1 (Source-Style)
Input:
```text
babad
```
Output (one valid):
```text
bab
```

Detailed Explanation:
- Start by identifying required operation from title: `Q27. Longest Palindromic Substring (Expand Centers)`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: small hand-checkable values
Walkthrough: Walkthrough: Track intermediate state updates at each step to validate logic.
Expected Output: deterministic result for this compact case.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q28. Shortest Unsorted Continuous Subarray

### What Exactly This Question Is Asking
- In simple words: Find length of shortest subarray that if sorted makes whole array sorted.
- Core solving focus: apply correct ordering rule and preserve constraints/tie conditions.

### Problem Understanding (Detailed)
Find length of shortest subarray that if sorted makes whole array sorted.

### Input Format Interpretation
- `N`
- `N` integers

### Output Format Interpretation
- Length

### Example 1 (Source-Style)
Input:
```text
7
2 6 4 8 10 9 15
```
Output:
```text
5
```

Detailed Explanation:
- Start by identifying required operation from title: `Q28. Shortest Unsorted Continuous Subarray`.
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

## Q29. Remove Element In-Place

### What Exactly This Question Is Asking
- In simple words: Given array and value `x`, remove all occurrences of `x` in-place.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given array and value `x`, remove all occurrences of `x` in-place.
Print new length and valid prefix.

### Input Format Interpretation
- `N x`
- `N` integers

### Output Format Interpretation
- First line: new length
- Second line: updated prefix

### Example 1 (Source-Style)
Input:
```text
6 3
3 2 2 3 4 3
```
Output:
```text
3
2 2 4
```

Detailed Explanation:
- Start by identifying required operation from title: `Q29. Remove Element In-Place`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: small hand-checkable values
Walkthrough: Walkthrough: Track intermediate state updates at each step to validate logic.
Expected Output: deterministic result for this compact case.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q30. Remove Adjacent Duplicates in String

### What Exactly This Question Is Asking
- In simple words: Given string, repeatedly remove adjacent equal characters until no such pair remains.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given string, repeatedly remove adjacent equal characters until no such pair remains.

### Input Format Interpretation
- String `S`

### Output Format Interpretation
- Reduced string

### Example 1 (Source-Style)
Input:
```text
abbaca
```
Output:
```text
ca
```

Detailed Explanation:
- Start by identifying required operation from title: `Q30. Remove Adjacent Duplicates in String`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: small hand-checkable values
Walkthrough: Walkthrough: Track intermediate state updates at each step to validate logic.
Expected Output: deterministic result for this compact case.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q31. Reverse Words in a Sentence

### What Exactly This Question Is Asking
- In simple words: Given sentence with extra spaces, reverse order of words and keep single spaces.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given sentence with extra spaces, reverse order of words and keep single spaces.

### Input Format Interpretation
- One full line

### Output Format Interpretation
- Reversed words sentence

### Example 1 (Source-Style)
Input:
```text
  i   love   coding  
```
Output:
```text
coding love i
```

Detailed Explanation:
- Start by identifying required operation from title: `Q31. Reverse Words in a Sentence`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: small hand-checkable values
Walkthrough: Walkthrough: Track intermediate state updates at each step to validate logic.
Expected Output: deterministic result for this compact case.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q32. Middle of Linked List (Fast-Slow)

### What Exactly This Question Is Asking
- In simple words: Given singly linked list, return value of middle node.
- Core solving focus: update node links in correct order and keep head/tail references valid.

### Problem Understanding (Detailed)
Given singly linked list, return value of middle node.
If even length, return second middle.

### Input Format Interpretation
- `N`
- `N` integers (list values)

### Output Format Interpretation
- Middle node value

### Example 1 (Source-Style)
Input:
```text
5
1 2 3 4 5
```
Output:
```text
3
```

Detailed Explanation:
- Start by identifying required operation from title: `Q32. Middle of Linked List (Fast-Slow)`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: small hand-checkable values
Walkthrough: Walkthrough: Track intermediate state updates at each step to validate logic.
Expected Output: deterministic result for this compact case.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q33. Detect Cycle in Linked List

### What Exactly This Question Is Asking
- In simple words: Given linked list, detect whether cycle exists.
- Core solving focus: update node links in correct order and keep head/tail references valid.

### Problem Understanding (Detailed)
Given linked list, detect whether cycle exists.
Input includes cycle position `pos` (`-1` means no cycle).

### Input Format Interpretation
- `N`
- `N` node values
- `pos`

### Output Format Interpretation
- `Yes` / `No`

### Example 1 (Source-Style)
Input:
```text
4
3 2 0 -4
1
```
Output:
```text
Yes
```

Detailed Explanation:
- Start by identifying required operation from title: `Q33. Detect Cycle in Linked List`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: small hand-checkable values
Walkthrough: Walkthrough: Track intermediate state updates at each step to validate logic.
Expected Output: deterministic result for this compact case.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q34. Start Node of Cycle in Linked List

### What Exactly This Question Is Asking
- In simple words: Given linked list with possible cycle, return value at cycle start node, else `-1`.
- Core solving focus: update node links in correct order and keep head/tail references valid.

### Problem Understanding (Detailed)
Given linked list with possible cycle, return value at cycle start node, else `-1`.

### Input Format Interpretation
- `N`
- `N` node values
- `pos` (cycle start index or `-1`)

### Output Format Interpretation
- value at cycle start or `-1`

### Example 1 (Source-Style)
Input:
```text
4
3 2 0 -4
1
```
Output:
```text
2
```

Detailed Explanation:
- Start by identifying required operation from title: `Q34. Start Node of Cycle in Linked List`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: small hand-checkable values
Walkthrough: Walkthrough: Track intermediate state updates at each step to validate logic.
Expected Output: deterministic result for this compact case.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q35. Happy Number (Fast-Slow)

### What Exactly This Question Is Asking
- In simple words: A happy number ends at 1 when replaced by sum of squares of digits repeatedly.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
A happy number ends at 1 when replaced by sum of squares of digits repeatedly.
Check if `N` is happy.

### Input Format Interpretation
- One integer `N`

### Output Format Interpretation
- `Yes` / `No`

### Example 1 (Source-Style)
Input:
```text
19
```
Output:
```text
Yes
```

Detailed Explanation:
- Start by identifying required operation from title: `Q35. Happy Number (Fast-Slow)`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: small hand-checkable values
Walkthrough: Walkthrough: Track intermediate state updates at each step to validate logic.
Expected Output: deterministic result for this compact case.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q36. Find Duplicate Number (Floyd in Array)

### What Exactly This Question Is Asking
- In simple words: Array has `N+1` integers in range `1..N`, exactly one number repeats.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Array has `N+1` integers in range `1..N`, exactly one number repeats.
Find duplicate without modifying array and `O(1)` extra space.

### Input Format Interpretation
- `N` (logical max value)
- `N+1` integers

### Output Format Interpretation
- Duplicate number

### Example 1 (Source-Style)
Input:
```text
4
1 3 4 2 2
```
Output:
```text
2
```

Detailed Explanation:
- Start by identifying required operation from title: `Q36. Find Duplicate Number (Floyd in Array)`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: small hand-checkable values
Walkthrough: Walkthrough: Track intermediate state updates at each step to validate logic.
Expected Output: deterministic result for this compact case.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q37. Remove N-th Node from End of Linked List

### What Exactly This Question Is Asking
- In simple words: Given linked list and integer `N`, remove N-th node from end and print resulting list.
- Core solving focus: update node links in correct order and keep head/tail references valid.

### Problem Understanding (Detailed)
Given linked list and integer `N`, remove N-th node from end and print resulting list.

### Input Format Interpretation
- `L` (list size)
- `L` integers
- `N`

### Output Format Interpretation
- Updated list

### Example 1 (Source-Style)
Input:
```text
5
1 2 3 4 5
2
```
Output:
```text
1 2 3 5
```

Detailed Explanation:
- Start by identifying required operation from title: `Q37. Remove N-th Node from End of Linked List`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: small hand-checkable values
Walkthrough: Walkthrough: Track intermediate state updates at each step to validate logic.
Expected Output: deterministic result for this compact case.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q38. Palindrome Linked List

### What Exactly This Question Is Asking
- In simple words: Check if linked list values form palindrome.
- Core solving focus: identify symmetry logic and compare mirrored positions.

### Problem Understanding (Detailed)
Check if linked list values form palindrome.

### Input Format Interpretation
- `N`
- `N` integers

### Output Format Interpretation
- `Yes` / `No`

### Example 1 (Source-Style)
Input:
```text
5
1 2 3 2 1
```
Output:
```text
Yes
```

Detailed Explanation:
- Start by identifying required operation from title: `Q38. Palindrome Linked List`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: `s = "abba"`
Walkthrough: Walkthrough: Compare first-last and inward pairs; all pairs match.
Expected Output: `Yes` / `true`.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q39. Story-Based: Rescue Boats (Min Boats)

### What Exactly This Question Is Asking
- In simple words: Each boat can carry at most 2 people and total weight <= `limit`.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Each boat can carry at most 2 people and total weight <= `limit`.
Find minimum number of boats.

### Input Format Interpretation
- `N limit`
- `N` weights

### Output Format Interpretation
- Minimum boats

### Example 1 (Source-Style)
Input:
```text
4 5
1 2 2 3
```
Output:
```text
3
```

Detailed Explanation:
- Start by identifying required operation from title: `Q39. Story-Based: Rescue Boats (Min Boats)`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: small hand-checkable values
Walkthrough: Walkthrough: Track intermediate state updates at each step to validate logic.
Expected Output: deterministic result for this compact case.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q40. Story-Based: Max Valid Pairings Under Capacity

### What Exactly This Question Is Asking
- In simple words: Given sorted skill levels and max allowed difference `D`, pair people (`i,j`) at most once each with `|a[i]-a[j]|<=D`.
- Core solving focus: track complements or pointers and avoid invalid duplicates.

### Problem Understanding (Detailed)
Given sorted skill levels and max allowed difference `D`, pair people (`i,j`) at most once each with `|a[i]-a[j]|<=D`.
Maximize number of pairs.

### Input Format Interpretation
- `N D`
- `N` sorted integers

### Output Format Interpretation
- Maximum number of pairs

### Example 1 (Source-Style)
Input:
```text
7 2
1 2 3 5 6 8 9
```
Output:
```text
3
```

Detailed Explanation:
- Start by identifying required operation from title: `Q40. Story-Based: Max Valid Pairings Under Capacity`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: small hand-checkable values
Walkthrough: Walkthrough: Track intermediate state updates at each step to validate logic.
Expected Output: deterministic result for this compact case.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.
