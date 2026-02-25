# TCS_NQT_Strings_Full_Questions_Answers_CPP.md: Question Explaination (Each Question with 2 Examples)

This file explains what each question exactly asks and adds two detailed examples per question.

## Q1. Check if a String is Palindrome (Ignore case and non-alphanumeric)

### What Exactly This Question Is Asking
- In simple words: Given a string `S`, determine whether it is a palindrome when compared case-insensitively and ignoring non-alphanumeric characters.
- Core solving focus: identify symmetry logic and compare mirrored positions.

### Problem Understanding (Detailed)
Given a string `S`, determine whether it is a palindrome when compared case-insensitively and ignoring non-alphanumeric characters.

### Input Format Interpretation
- One line containing string `S`

### Output Format Interpretation
- Print `Yes` if palindrome, otherwise `No`

### Constraint Notes
- `1 <= |S| <= 2 * 10^5`

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
- Start by identifying required operation from title: `Q1. Check if a String is Palindrome (Ignore case and non-alphanumeric)`.
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

## Q2. Check if Two Strings are Anagrams

### What Exactly This Question Is Asking
- In simple words: Given two strings `A` and `B`, check if one can be rearranged to form the other.
- Core solving focus: compare character counts/frequencies exactly.

### Problem Understanding (Detailed)
Given two strings `A` and `B`, check if one can be rearranged to form the other.
Case-insensitive, spaces ignored.

### Input Format Interpretation
- Line 1: `A`
- Line 2: `B`

### Output Format Interpretation
- Print `Yes` or `No`

### Example 1 (Source-Style)
Input:
```text
Listen
Silent
```
Output:
```text
Yes
```

Detailed Explanation:
- Start by identifying required operation from title: `Q2. Check if Two Strings are Anagrams`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: `s1 = "listen", s2 = "silent"`
Walkthrough: Walkthrough: Frequency of each character matches exactly.
Expected Output: `Yes` / `true`.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q3. Pangram Check

### What Exactly This Question Is Asking
- In simple words: Given a sentence, check whether it contains every English alphabet at least once.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given a sentence, check whether it contains every English alphabet at least once.

### Input Format Interpretation
- One line containing string

### Output Format Interpretation
- Print `Yes` if pangram else `No`

### Example 1 (Source-Style)
Input:
```text
The quick brown fox jumps over the lazy dog
```
Output:
```text
Yes
```

Detailed Explanation:
- Start by identifying required operation from title: `Q3. Pangram Check`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: `s = ""` (or length 1 where allowed)
Walkthrough: Walkthrough: Validate empty/single-character handling without index errors.
Expected Output: base-case string result as defined in the question.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q4. Count Vowels, Consonants, Digits, Spaces, Special Characters

### What Exactly This Question Is Asking
- In simple words: Given a string, count: - vowels - consonants - digits - spaces - special characters
- Core solving focus: build/update counts correctly and return requested frequency metric.

### Problem Understanding (Detailed)
Given a string, count:
- vowels
- consonants
- digits
- spaces
- special characters

### Input Format Interpretation
- One line string

### Output Format Interpretation
Print 5 integers in order:
`vowels consonants digits spaces special`

### Example 1 (Source-Style)
Input:
```text
TCS NQT 2026!
```
Output:
```text
1 5 4 2 1
```

Detailed Explanation:
- Start by identifying required operation from title: `Q4. Count Vowels, Consonants, Digits, Spaces, Special Characters`.
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

## Q5. Toggle Case (Lower to Upper and Upper to Lower)

### What Exactly This Question Is Asking
- In simple words: Given a string, toggle each alphabet character's case.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given a string, toggle each alphabet character's case.

### Input Format Interpretation
- One line string

### Output Format Interpretation
- Transformed string

### Example 1 (Source-Style)
Input:
```text
AbCdeF12
```
Output:
```text
aBcDEf12
```

Detailed Explanation:
- Start by identifying required operation from title: `Q5. Toggle Case (Lower to Upper and Upper to Lower)`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: `s = ""` (or length 1 where allowed)
Walkthrough: Walkthrough: Validate empty/single-character handling without index errors.
Expected Output: base-case string result as defined in the question.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q6. Remove Spaces from a String

### What Exactly This Question Is Asking
- In simple words: Given a string, remove all space characters.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given a string, remove all space characters.

### Input Format Interpretation
- One line string

### Output Format Interpretation
- String after removing spaces

### Example 1 (Source-Style)
Input:
```text
prep for tcs nqt
```
Output:
```text
prepfortcsnqt
```

Detailed Explanation:
- Start by identifying required operation from title: `Q6. Remove Spaces from a String`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: `s = ""` (or length 1 where allowed)
Walkthrough: Walkthrough: Validate empty/single-character handling without index errors.
Expected Output: base-case string result as defined in the question.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q7. Reverse Words in a Sentence

### What Exactly This Question Is Asking
- In simple words: Given a sentence with possible extra spaces, reverse the order of words.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given a sentence with possible extra spaces, reverse the order of words.
Keep exactly one space between words in output.

### Input Format Interpretation
- One line string

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
- Start by identifying required operation from title: `Q7. Reverse Words in a Sentence`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: `s = ""` (or length 1 where allowed)
Walkthrough: Walkthrough: Validate empty/single-character handling without index errors.
Expected Output: base-case string result as defined in the question.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q8. Check if a String is Substring of Another

### What Exactly This Question Is Asking
- In simple words: Given two strings `Text` and `Pattern`, determine if `Pattern` appears in `Text`.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given two strings `Text` and `Pattern`, determine if `Pattern` appears in `Text`.

### Input Format Interpretation
- Line 1: `Text`
- Line 2: `Pattern`

### Output Format Interpretation
- Print `Yes` or `No`

### Example 1 (Source-Style)
Input:
```text
interviewpreparation
prepare
```
Output:
```text
Yes
```

Detailed Explanation:
- Start by identifying required operation from title: `Q8. Check if a String is Substring of Another`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: `s = ""` (or length 1 where allowed)
Walkthrough: Walkthrough: Validate empty/single-character handling without index errors.
Expected Output: base-case string result as defined in the question.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q9. Count Number of Occurrences of a Substring (Overlapping allowed)

### What Exactly This Question Is Asking
- In simple words: Given string `S` and pattern `P`, count occurrences of `P` in `S`.
- Core solving focus: build/update counts correctly and return requested frequency metric.

### Problem Understanding (Detailed)
Given string `S` and pattern `P`, count occurrences of `P` in `S`.
Overlapping matches should also be counted.

### Input Format Interpretation
- Line 1: `S`
- Line 2: `P`

### Output Format Interpretation
- Integer count

### Example 1 (Source-Style)
Input:
```text
aaaaa
aa
```
Output:
```text
4
```

Detailed Explanation:
- Start by identifying required operation from title: `Q9. Count Number of Occurrences of a Substring (Overlapping allowed)`.
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

## Q10. Longest Common Prefix of N Strings

### What Exactly This Question Is Asking
- In simple words: Given `N` strings, find the longest common prefix shared by all.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given `N` strings, find the longest common prefix shared by all.
If none exists, print `-1`.

### Input Format Interpretation
- First line: integer `N`
- Next `N` lines: one string each

### Output Format Interpretation
- Longest common prefix or `-1`

### Example 1 (Source-Style)
Input:
```text
3
flower
flow
flight
```
Output:
```text
fl
```

Detailed Explanation:
- Start by identifying required operation from title: `Q10. Longest Common Prefix of N Strings`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: `s = ""` (or length 1 where allowed)
Walkthrough: Walkthrough: Validate empty/single-character handling without index errors.
Expected Output: base-case string result as defined in the question.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q11. First Non-Repeating Character

### What Exactly This Question Is Asking
- In simple words: Given a string, print the first character that appears exactly once.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given a string, print the first character that appears exactly once.
If none, print `-1`.

### Input Format Interpretation
- One line string

### Output Format Interpretation
- Character or `-1`

### Example 1 (Source-Style)
Input:
```text
aabbcdeff
```
Output:
```text
c
```

Detailed Explanation:
- Start by identifying required operation from title: `Q11. First Non-Repeating Character`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: `s = ""` (or length 1 where allowed)
Walkthrough: Walkthrough: Validate empty/single-character handling without index errors.
Expected Output: base-case string result as defined in the question.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q12. Character Frequency (Lexicographic output)

### What Exactly This Question Is Asking
- In simple words: Given a string, print frequency of each character in lexicographic order.
- Core solving focus: build/update counts correctly and return requested frequency metric.

### Problem Understanding (Detailed)
Given a string, print frequency of each character in lexicographic order.
Ignore spaces.

### Input Format Interpretation
- One line string

### Output Format Interpretation
Each line: `character frequency`

### Example 1 (Source-Style)
Input:
```text
banana
```
Output:
```text
a 3
b 1
n 2
```

Detailed Explanation:
- Start by identifying required operation from title: `Q12. Character Frequency (Lexicographic output)`.
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

## Q13. Longest Substring Without Repeating Characters

### What Exactly This Question Is Asking
- In simple words: Given a string, find the length of the longest substring with all unique characters.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given a string, find the length of the longest substring with all unique characters.

### Input Format Interpretation
- One line string

### Output Format Interpretation
- Integer length

### Example 1 (Source-Style)
Input:
```text
abcabcbb
```
Output:
```text
3
```

Detailed Explanation:
- Start by identifying required operation from title: `Q13. Longest Substring Without Repeating Characters`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: `s = ""` (or length 1 where allowed)
Walkthrough: Walkthrough: Validate empty/single-character handling without index errors.
Expected Output: base-case string result as defined in the question.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q14. Longest Palindromic Substring

### What Exactly This Question Is Asking
- In simple words: Given a string `S`, print the longest palindromic substring.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given a string `S`, print the longest palindromic substring.
If multiple answers have same max length, print any one.

### Input Format Interpretation
- One line string

### Output Format Interpretation
- Longest palindromic substring

### Example 1 (Source-Style)
Input:
```text
babad
```
Output:
```text
bab
```

Detailed Explanation:
- Start by identifying required operation from title: `Q14. Longest Palindromic Substring`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: `s = ""` (or length 1 where allowed)
Walkthrough: Walkthrough: Validate empty/single-character handling without index errors.
Expected Output: base-case string result as defined in the question.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q15. Count Palindromic Substrings

### What Exactly This Question Is Asking
- In simple words: Given a string, count all palindromic substrings.
- Core solving focus: build/update counts correctly and return requested frequency metric.

### Problem Understanding (Detailed)
Given a string, count all palindromic substrings.
Single-character substrings are palindromes.

### Input Format Interpretation
- One line string

### Output Format Interpretation
- Integer count

### Example 1 (Source-Style)
Input:
```text
aaa
```
Output:
```text
6
```

Detailed Explanation:
- Start by identifying required operation from title: `Q15. Count Palindromic Substrings`.
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

## Q16. Caesar Cipher Encryption

### What Exactly This Question Is Asking
- In simple words: Given text `S` and shift `K`, encrypt letters by shifting them by `K` positions.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given text `S` and shift `K`, encrypt letters by shifting them by `K` positions.
Preserve case. Non-letters remain unchanged.

### Input Format Interpretation
- Line 1: string `S`
- Line 2: integer `K`

### Output Format Interpretation
- Encrypted string

### Example 1 (Source-Style)
Input:
```text
Abc-XyZ
2
```
Output:
```text
Cde-ZaB
```

Detailed Explanation:
- Start by identifying required operation from title: `Q16. Caesar Cipher Encryption`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: `s = ""` (or length 1 where allowed)
Walkthrough: Walkthrough: Validate empty/single-character handling without index errors.
Expected Output: base-case string result as defined in the question.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q17. Check if One String is Rotation of Another

### What Exactly This Question Is Asking
- In simple words: Given strings `A` and `B`, check whether `B` is a rotation of `A`.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given strings `A` and `B`, check whether `B` is a rotation of `A`.

### Input Format Interpretation
- Line 1: `A`
- Line 2: `B`

### Output Format Interpretation
- Print `Yes` or `No`

### Example 1 (Source-Style)
Input:
```text
waterbottle
erbottlewat
```
Output:
```text
Yes
```

Detailed Explanation:
- Start by identifying required operation from title: `Q17. Check if One String is Rotation of Another`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: `s = ""` (or length 1 where allowed)
Walkthrough: Walkthrough: Validate empty/single-character handling without index errors.
Expected Output: base-case string result as defined in the question.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q18. Remove Duplicate Characters (Keep First Occurrence)

### What Exactly This Question Is Asking
- In simple words: Given a string, remove duplicate characters while preserving order of first occurrence.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given a string, remove duplicate characters while preserving order of first occurrence.

### Input Format Interpretation
- One line string

### Output Format Interpretation
- Deduplicated string

### Example 1 (Source-Style)
Input:
```text
programming
```
Output:
```text
progamin
```

Detailed Explanation:
- Start by identifying required operation from title: `Q18. Remove Duplicate Characters (Keep First Occurrence)`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: `s = ""` (or length 1 where allowed)
Walkthrough: Walkthrough: Validate empty/single-character handling without index errors.
Expected Output: base-case string result as defined in the question.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q19. String Compression (Run-Length Encoding)

### What Exactly This Question Is Asking
- In simple words: Given a string, compress consecutive repeating characters as `char + count`.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given a string, compress consecutive repeating characters as `char + count`.

### Input Format Interpretation
- One line string

### Output Format Interpretation
- Compressed string

### Example 1 (Source-Style)
Input:
```text
aaabbccccd
```
Output:
```text
a3b2c4d1
```

Detailed Explanation:
- Start by identifying required operation from title: `Q19. String Compression (Run-Length Encoding)`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: `s = ""` (or length 1 where allowed)
Walkthrough: Walkthrough: Validate empty/single-character handling without index errors.
Expected Output: base-case string result as defined in the question.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q20. Decode Run-Length Encoded String

### What Exactly This Question Is Asking
- In simple words: Given encoded string in format like `a3b2c10`, decode it.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given encoded string in format like `a3b2c10`, decode it.
Counts are positive integers.

### Input Format Interpretation
- One line encoded string

### Output Format Interpretation
- Decoded string

### Example 1 (Source-Style)
Input:
```text
a3b2c4
```
Output:
```text
aaabbcccc
```

Detailed Explanation:
- Start by identifying required operation from title: `Q20. Decode Run-Length Encoded String`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: `s = ""` (or length 1 where allowed)
Walkthrough: Walkthrough: Validate empty/single-character handling without index errors.
Expected Output: base-case string result as defined in the question.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q21. Story-Based: Word is the Key (Check if a word is C/C++ keyword)

### What Exactly This Question Is Asking
- In simple words: Given a word, determine whether it is a reserved keyword in C/C++.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given a word, determine whether it is a reserved keyword in C/C++.
Print `Keyword` or `Not Keyword`.

### Input Format Interpretation
- One word

### Output Format Interpretation
- `Keyword` or `Not Keyword`

### Example 1 (Source-Style)
Input:
```text
while
```
Output:
```text
Keyword
```

Detailed Explanation:
- Start by identifying required operation from title: `Q21. Story-Based: Word is the Key (Check if a word is C/C++ keyword)`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: `s = ""` (or length 1 where allowed)
Walkthrough: Walkthrough: Validate empty/single-character handling without index errors.
Expected Output: base-case string result as defined in the question.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q22. Count Words in a Sentence

### What Exactly This Question Is Asking
- In simple words: Given a sentence, count number of words.
- Core solving focus: build/update counts correctly and return requested frequency metric.

### Problem Understanding (Detailed)
Given a sentence, count number of words.
A word is a maximal sequence of non-space characters.

### Input Format Interpretation
- One line string

### Output Format Interpretation
- Integer count

### Example 1 (Source-Style)
Input:
```text
  tcs   nqt coding round  
```
Output:
```text
4
```

Detailed Explanation:
- Start by identifying required operation from title: `Q22. Count Words in a Sentence`.
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

## Q23. Largest Word in a Sentence

### What Exactly This Question Is Asking
- In simple words: Given a sentence, find the longest word and its length.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given a sentence, find the longest word and its length.
If tie occurs, print first occurring longest word.

### Input Format Interpretation
- One line sentence

### Output Format Interpretation
- Line 1: longest word
- Line 2: length

### Example 1 (Source-Style)
Input:
```text
practice makes coding better
```
Output:
```text
practice
8
```

Detailed Explanation:
- Start by identifying required operation from title: `Q23. Largest Word in a Sentence`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: `s = ""` (or length 1 where allowed)
Walkthrough: Walkthrough: Validate empty/single-character handling without index errors.
Expected Output: base-case string result as defined in the question.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q24. Find All Start Indices of Anagrams of Pattern in Text

### What Exactly This Question Is Asking
- In simple words: Given text `S` and pattern `P`, find all start indices where an anagram of `P` appears in `S`.
- Core solving focus: compare character counts/frequencies exactly.

### Problem Understanding (Detailed)
Given text `S` and pattern `P`, find all start indices where an anagram of `P` appears in `S`.

### Input Format Interpretation
- Line 1: `S`
- Line 2: `P`

### Output Format Interpretation
- Print indices space-separated
- If none, print `-1`

### Example 1 (Source-Style)
Input:
```text
cbaebabacd
abc
```
Output:
```text
0 6
```

Detailed Explanation:
- Start by identifying required operation from title: `Q24. Find All Start Indices of Anagrams of Pattern in Text`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: `s1 = "listen", s2 = "silent"`
Walkthrough: Walkthrough: Frequency of each character matches exactly.
Expected Output: `Yes` / `true`.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q25. Custom ATOI (String to Integer)

### What Exactly This Question Is Asking
- In simple words: Implement integer parsing similar to `atoi`: - Ignore leading spaces - Optional sign - Parse consecutive digits - Stop on first non-digit - Clamp to 32-bit signed int range
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Implement integer parsing similar to `atoi`:
- Ignore leading spaces
- Optional sign
- Parse consecutive digits
- Stop on first non-digit
- Clamp to 32-bit signed int range

### Input Format Interpretation
- One line string

### Output Format Interpretation
- Parsed integer

### Example 1 (Source-Style)
Input:
```text
   -42abc
```
Output:
```text
-42
```

Detailed Explanation:
- Start by identifying required operation from title: `Q25. Custom ATOI (String to Integer)`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: `s = ""` (or length 1 where allowed)
Walkthrough: Walkthrough: Validate empty/single-character handling without index errors.
Expected Output: base-case string result as defined in the question.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q26. Minimum Window Substring (Advanced but important pattern)

### What Exactly This Question Is Asking
- In simple words: Given strings `S` and `T`, find the smallest substring in `S` that contains all characters of `T` (including multiplicity).
- Core solving focus: track a moving range and update answer when condition is valid.

### Problem Understanding (Detailed)
Given strings `S` and `T`, find the smallest substring in `S` that contains all characters of `T` (including multiplicity).
If not possible, print `-1`.

### Input Format Interpretation
- Line 1: `S`
- Line 2: `T`

### Output Format Interpretation
- Minimum window substring or `-1`

### Example 1 (Source-Style)
Input:
```text
ADOBECODEBANC
ABC
```
Output:
```text
BANC
```

Detailed Explanation:
- Start by identifying required operation from title: `Q26. Minimum Window Substring (Advanced but important pattern)`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: `s = ""` (or length 1 where allowed)
Walkthrough: Walkthrough: Validate empty/single-character handling without index errors.
Expected Output: base-case string result as defined in the question.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q27. Group Anagrams (Advanced organization pattern)

### What Exactly This Question Is Asking
- In simple words: Given `N` strings, group anagrams together.
- Core solving focus: compare character counts/frequencies exactly.

### Problem Understanding (Detailed)
Given `N` strings, group anagrams together.
Print each group in one line.

### Input Format Interpretation
- First line: `N`
- Next `N` lines: strings

### Output Format Interpretation
- Each line: strings belonging to one anagram group

### Example 1 (Source-Style)
Input:
```text
6
eat
tea
tan
ate
nat
bat
```
Output (one valid format):
```text
eat tea ate
tan nat
bat
```

Detailed Explanation:
- Start by identifying required operation from title: `Q27. Group Anagrams (Advanced organization pattern)`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: `s1 = "listen", s2 = "silent"`
Walkthrough: Walkthrough: Frequency of each character matches exactly.
Expected Output: `Yes` / `true`.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q28. Sort Characters by Frequency

### What Exactly This Question Is Asking
- In simple words: Given a string `S`, sort characters in decreasing order of frequency.
- Core solving focus: build/update counts correctly and return requested frequency metric.

### Problem Understanding (Detailed)
Given a string `S`, sort characters in decreasing order of frequency.
If two characters have same frequency, sort by lexicographic order.

### Input Format Interpretation
- One line: string `S`

### Output Format Interpretation
- Rearranged string

### Example 1 (Source-Style)
Input:
```text
tree
```
Output (one valid):
```text
eert
```

Detailed Explanation:
- Start by identifying required operation from title: `Q28. Sort Characters by Frequency`.
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

## Q29. Sort Words by Length

### What Exactly This Question Is Asking
- In simple words: Given a sentence, sort its words by increasing length.
- Core solving focus: apply correct ordering rule and preserve constraints/tie conditions.

### Problem Understanding (Detailed)
Given a sentence, sort its words by increasing length.
If lengths tie, preserve original order (stable behavior).

### Input Format Interpretation
- One line sentence

### Output Format Interpretation
- Sorted words in one line

### Example 1 (Source-Style)
Input:
```text
tcs nqt coding round practice
```
Output:
```text
tcs nqt round coding practice
```

Detailed Explanation:
- Start by identifying required operation from title: `Q29. Sort Words by Length`.
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

## Q30. Lexicographic Sort Ignoring Case

### What Exactly This Question Is Asking
- In simple words: Given `N` strings, sort them lexicographically ignoring case.
- Core solving focus: apply correct ordering rule and preserve constraints/tie conditions.

### Problem Understanding (Detailed)
Given `N` strings, sort them lexicographically ignoring case.
If two strings are equal ignoring case, keep original case-sensitive order among them.

### Input Format Interpretation
- First line: `N`
- Next `N` lines: strings

### Output Format Interpretation
- `N` lines: sorted strings

### Example 1 (Source-Style)
Input:
```text
5
Banana
apple
Cat
ant
APP
```
Output:
```text
ant
APP
apple
Banana
Cat
```

Detailed Explanation:
- Start by identifying required operation from title: `Q30. Lexicographic Sort Ignoring Case`.
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

## Q31. Valid Parentheses ((), {}, [])

### What Exactly This Question Is Asking
- In simple words: Given a string containing only bracket characters, check if it is valid.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given a string containing only bracket characters, check if it is valid.
A valid string has correct order and matching bracket types.

### Input Format Interpretation
- One line string

### Output Format Interpretation
- Print `Yes` if valid else `No`

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
- Start by identifying required operation from title: `Q31. Valid Parentheses ((), {}, [])`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: `s = ""` (or length 1 where allowed)
Walkthrough: Walkthrough: Validate empty/single-character handling without index errors.
Expected Output: base-case string result as defined in the question.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q32. Minimum Additions to Make Parentheses Valid

### What Exactly This Question Is Asking
- In simple words: Given a parentheses string containing `(` and `)`, find minimum insertions needed to make it valid.
- Core solving focus: prove why local optimal choice leads to global optimum.

### Problem Understanding (Detailed)
Given a parentheses string containing `(` and `)`, find minimum insertions needed to make it valid.

### Input Format Interpretation
- One line string

### Output Format Interpretation
- Integer answer

### Example 1 (Source-Style)
Input:
```text
()))((
```
Output:
```text
4
```

Detailed Explanation:
- Start by identifying required operation from title: `Q32. Minimum Additions to Make Parentheses Valid`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: `s = ""` (or length 1 where allowed)
Walkthrough: Walkthrough: Validate empty/single-character handling without index errors.
Expected Output: base-case string result as defined in the question.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q33. Rotation Count (Left Rotations Needed)

### What Exactly This Question Is Asking
- In simple words: Given strings `A` and `B` of same length, find how many left rotations of `A` are needed to make it equal to `B`.
- Core solving focus: build/update counts correctly and return requested frequency metric.

### Problem Understanding (Detailed)
Given strings `A` and `B` of same length, find how many left rotations of `A` are needed to make it equal to `B`.
If impossible, print `-1`.

### Input Format Interpretation
- Line 1: `A`
- Line 2: `B`

### Output Format Interpretation
- Rotation count or `-1`

### Example 1 (Source-Style)
Input:
```text
abcde
cdeab
```
Output:
```text
2
```

Detailed Explanation:
- Start by identifying required operation from title: `Q33. Rotation Count (Left Rotations Needed)`.
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

## Q34. Minimum Circular Shift Distance (Left or Right)

### What Exactly This Question Is Asking
- In simple words: Given strings `A` and `B` of equal length, return minimum number of circular shifts (left or right) needed to transform `A` into `B`.
- Core solving focus: prove why local optimal choice leads to global optimum.

### Problem Understanding (Detailed)
Given strings `A` and `B` of equal length, return minimum number of circular shifts (left or right) needed to transform `A` into `B`.
If impossible, print `-1`.

### Input Format Interpretation
- Line 1: `A`
- Line 2: `B`

### Output Format Interpretation
- Minimum shifts or `-1`

### Example 1 (Source-Style)
Input:
```text
abcde
deabc
```
Output:
```text
2
```

Detailed Explanation:
- Start by identifying required operation from title: `Q34. Minimum Circular Shift Distance (Left or Right)`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: `s = ""` (or length 1 where allowed)
Walkthrough: Walkthrough: Validate empty/single-character handling without index errors.
Expected Output: base-case string result as defined in the question.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q35. Replace All Vowels with '*'

### What Exactly This Question Is Asking
- In simple words: Given a string, replace all vowels (`a,e,i,o,u` in both cases) with `*`.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given a string, replace all vowels (`a,e,i,o,u` in both cases) with `*`.

### Input Format Interpretation
- One line string

### Output Format Interpretation
- Transformed string

### Example 1 (Source-Style)
Input:
```text
TCS NQT Coding
```
Output:
```text
TCS NQT C*d*ng
```

Detailed Explanation:
- Start by identifying required operation from title: `Q35. Replace All Vowels with '*'`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: `s = ""` (or length 1 where allowed)
Walkthrough: Walkthrough: Validate empty/single-character handling without index errors.
Expected Output: base-case string result as defined in the question.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q36. Mask Digits Except Last 4

### What Exactly This Question Is Asking
- In simple words: Given a string, mask all digits except the last 4 digits in the full string.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given a string, mask all digits except the last 4 digits in the full string.
Replace masked digits with `X`.

### Input Format Interpretation
- One line string

### Output Format Interpretation
- Masked string

### Example 1 (Source-Style)
Input:
```text
Card: 1234-5678-9012-3456
```
Output:
```text
Card: XXXX-XXXX-XXXX-3456
```

Detailed Explanation:
- Start by identifying required operation from title: `Q36. Mask Digits Except Last 4`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: `s = ""` (or length 1 where allowed)
Walkthrough: Walkthrough: Validate empty/single-character handling without index errors.
Expected Output: base-case string result as defined in the question.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q37. Character Substitution Using Mapping

### What Exactly This Question Is Asking
- In simple words: Given source string `S`, mapping string `FROM`, and mapping string `TO` of same length, replace each character `FROM[i]` in `S` by `TO[i]`.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given source string `S`, mapping string `FROM`, and mapping string `TO` of same length,
replace each character `FROM[i]` in `S` by `TO[i]`.
Characters not present in mapping remain unchanged.

### Input Format Interpretation
- Line 1: `S`
- Line 2: `FROM`
- Line 3: `TO`

### Output Format Interpretation
- Transformed string

### Example 1 (Source-Style)
Input:
```text
attack at dawn
atcn
ozxy
```
Output:
```text
ozzozk oz dowy
```

Detailed Explanation:
- Start by identifying required operation from title: `Q37. Character Substitution Using Mapping`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: `s = ""` (or length 1 where allowed)
Walkthrough: Walkthrough: Validate empty/single-character handling without index errors.
Expected Output: base-case string result as defined in the question.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q38. Count Tokens with Multiple Delimiters

### What Exactly This Question Is Asking
- In simple words: Given a string and a delimiter set, count how many tokens (words) are present.
- Core solving focus: build/update counts correctly and return requested frequency metric.

### Problem Understanding (Detailed)
Given a string and a delimiter set, count how many tokens (words) are present.
A token is a maximal sequence of non-delimiter characters.

### Input Format Interpretation
- Line 1: string `S`
- Line 2: delimiter string `D` (every character in `D` is considered delimiter)

### Output Format Interpretation
- Integer token count

### Example 1 (Source-Style)
Input:
```text
tcs,nqt;coding|round
,;|
```
Output:
```text
4
```

Detailed Explanation:
- Start by identifying required operation from title: `Q38. Count Tokens with Multiple Delimiters`.
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

## Q39. Tokenize and Print Tokens (Multiple Delimiters)

### What Exactly This Question Is Asking
- In simple words: Given a string and delimiter set, split and print all tokens in separate lines.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given a string and delimiter set, split and print all tokens in separate lines.
If no token exists, print `-1`.

### Input Format Interpretation
- Line 1: string `S`
- Line 2: delimiter set `D`

### Output Format Interpretation
- One token per line or `-1`

### Example 1 (Source-Style)
Input:
```text
hello,,tcs;nqt|prep
,;|
```
Output:
```text
hello
tcs
nqt
prep
```

Detailed Explanation:
- Start by identifying required operation from title: `Q39. Tokenize and Print Tokens (Multiple Delimiters)`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: `s = ""` (or length 1 where allowed)
Walkthrough: Walkthrough: Validate empty/single-character handling without index errors.
Expected Output: base-case string result as defined in the question.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.

---

## Q40. Sum of Numeric Tokens from Mixed Delimiter String

### What Exactly This Question Is Asking
- In simple words: Given a string containing integers separated by mixed delimiters, extract all integer tokens and print their sum.
- Core solving focus: map story/rules to exact operations and apply them in strict order.

### Problem Understanding (Detailed)
Given a string containing integers separated by mixed delimiters, extract all integer tokens and print their sum.
Delimiters and non-digit separators can be mixed (`,`, `;`, `|`, space, etc.).

### Input Format Interpretation
- One line string

### Output Format Interpretation
- Sum of all integer tokens

### Example 1 (Source-Style)
Input:
```text
10,20;5|100 7
```
Output:
```text
142
```

Detailed Explanation:
- Start by identifying required operation from title: `Q40. Sum of Numeric Tokens from Mixed Delimiter String`.
- Parse input exactly in the expected format and map it to variables/containers.
- Apply algorithmic rule repeatedly until full input is processed.
- Return/print result in exact output format (single value / array / string / structure).

### Example 2 (Edge/Variant Case)
Input: `s = ""` (or length 1 where allowed)
Walkthrough: Walkthrough: Validate empty/single-character handling without index errors.
Expected Output: base-case string result as defined in the question.

Detailed Explanation:
- This second example stresses a boundary or tricky variant of the same question.
- Validate index bounds, empty/single-item behavior, and strict output formatting.
- Confirm final result remains correct even in minimal/extreme configurations.
