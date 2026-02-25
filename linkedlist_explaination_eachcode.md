# TCS_NQT_LinkedList_Full_Questions_Answers_CPP.md: Line-by-Line Code Explaination

This file explains each C++ code block line-by-line from the source topic file.

## Block 1: General

### Original Code
```cpp
struct ListNode {
    int val;
    ListNode* next;
    ListNode(int v): val(v), next(nullptr) {}
};

struct DNode {
    int val;
    DNode* prev;
    DNode* next;
    DNode(int v): val(v), prev(nullptr), next(nullptr) {}
};
```

### Line-by-Line Explaination
- Line 1: `struct ListNode {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 2: `    int val;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 3: `    ListNode* next;`
  Explaination: Executes a single statement that updates program state.
- Line 4: `    ListNode(int v): val(v), next(nullptr) {}`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 5: `};`
  Explaination: Closes the current class/struct/initializer block.
- Line 6: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 7: `struct DNode {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 8: `    int val;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    DNode* prev;`
  Explaination: Executes a single statement that updates program state.
- Line 10: `    DNode* next;`
  Explaination: Executes a single statement that updates program state.
- Line 11: `    DNode(int v): val(v), prev(nullptr), next(nullptr) {}`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 12: `};`
  Explaination: Closes the current class/struct/initializer block.

## Block 2: Q1. Insert at Head (Singly Linked List)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int v): val(v), next(nullptr) {}
};

int main() {
    int n;
    cin >> n;

    ListNode* head = nullptr;
    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        ListNode* node = new ListNode(x);
        node->next = head;
        head = node;
    }

    for (ListNode* cur = head; cur; cur = cur->next) cout << cur->val << " ";
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
- Line 4: `struct ListNode {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 5: `    int val;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    ListNode* next;`
  Explaination: Executes a single statement that updates program state.
- Line 7: `    ListNode(int v): val(v), next(nullptr) {}`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 8: `};`
  Explaination: Closes the current class/struct/initializer block.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 11: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    ListNode* head = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `        int x; cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 17: `        ListNode* node = new ListNode(x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: `        node->next = head;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `        head = node;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    for (ListNode* cur = head; cur; cur = cur->next) cout << cur->val << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 23: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 24: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 25: `}`
  Explaination: Closes the current scope block.

## Block 3: Q2. Insert at Tail

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int v): val(v), next(nullptr) {}
};

int main() {
    int n;
    cin >> n;

    ListNode* head = nullptr;
    ListNode* tail = nullptr;

    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        ListNode* node = new ListNode(x);
        if (!head) head = tail = node;
        else {
            tail->next = node;
            tail = node;
        }
    }

    for (ListNode* cur = head; cur; cur = cur->next) cout << cur->val << " ";
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
- Line 4: `struct ListNode {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 5: `    int val;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    ListNode* next;`
  Explaination: Executes a single statement that updates program state.
- Line 7: `    ListNode(int v): val(v), next(nullptr) {}`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 8: `};`
  Explaination: Closes the current class/struct/initializer block.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 11: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    ListNode* head = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `    ListNode* tail = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: `        int x; cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 19: `        ListNode* node = new ListNode(x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `        if (!head) head = tail = node;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: `        else {`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 22: `            tail->next = node;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: `            tail = node;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 24: `        }`
  Explaination: Closes the current scope block.
- Line 25: `    }`
  Explaination: Closes the current scope block.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `    for (ListNode* cur = head; cur; cur = cur->next) cout << cur->val << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 28: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 29: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 30: `}`
  Explaination: Closes the current scope block.

## Block 4: Q3. Insert at Position (1-based)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int v): val(v), next(nullptr) {}
};

int main() {
    int n;
    cin >> n;

    ListNode dummy(0);
    ListNode* tail = &dummy;
    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        tail->next = new ListNode(x);
        tail = tail->next;
    }

    int pos, x;
    cin >> pos >> x;

    ListNode* cur = &dummy;
    for (int i = 1; i < pos && cur; i++) cur = cur->next;

    if (cur) {
        ListNode* node = new ListNode(x);
        node->next = cur->next;
        cur->next = node;
    }

    for (ListNode* p = dummy.next; p; p = p->next) cout << p->val << " ";
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
- Line 4: `struct ListNode {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 5: `    int val;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    ListNode* next;`
  Explaination: Executes a single statement that updates program state.
- Line 7: `    ListNode(int v): val(v), next(nullptr) {}`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 8: `};`
  Explaination: Closes the current class/struct/initializer block.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 11: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    ListNode dummy(0);`
  Explaination: Executes a single statement that updates program state.
- Line 15: `    ListNode* tail = &dummy;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 17: `        int x; cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 18: `        tail->next = new ListNode(x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `        tail = tail->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    int pos, x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 23: `    cin >> pos >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    ListNode* cur = &dummy;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 26: `    for (int i = 1; i < pos && cur; i++) cur = cur->next;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 27: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 28: `    if (cur) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 29: `        ListNode* node = new ListNode(x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 30: `        node->next = cur->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 31: `        cur->next = node;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 32: `    }`
  Explaination: Closes the current scope block.
- Line 33: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 34: `    for (ListNode* p = dummy.next; p; p = p->next) cout << p->val << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 35: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 36: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 37: `}`
  Explaination: Closes the current scope block.

## Block 5: Q4. Delete Node by Position

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int v): val(v), next(nullptr) {}
};

int main() {
    int n;
    cin >> n;

    ListNode dummy(0);
    ListNode* t = &dummy;
    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        t->next = new ListNode(x);
        t = t->next;
    }

    int pos;
    cin >> pos;

    ListNode* cur = &dummy;
    for (int i = 1; i < pos && cur->next; i++) cur = cur->next;

    if (cur->next) cur->next = cur->next->next;

    for (ListNode* p = dummy.next; p; p = p->next) cout << p->val << " ";
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
- Line 4: `struct ListNode {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 5: `    int val;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    ListNode* next;`
  Explaination: Executes a single statement that updates program state.
- Line 7: `    ListNode(int v): val(v), next(nullptr) {}`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 8: `};`
  Explaination: Closes the current class/struct/initializer block.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 11: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    ListNode dummy(0);`
  Explaination: Executes a single statement that updates program state.
- Line 15: `    ListNode* t = &dummy;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 17: `        int x; cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 18: `        t->next = new ListNode(x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `        t = t->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    int pos;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 23: `    cin >> pos;`
  Explaination: Reads input values from standard input into variables.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    ListNode* cur = &dummy;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 26: `    for (int i = 1; i < pos && cur->next; i++) cur = cur->next;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 27: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 28: `    if (cur->next) cur->next = cur->next->next;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    for (ListNode* p = dummy.next; p; p = p->next) cout << p->val << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 31: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 32: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 33: `}`
  Explaination: Closes the current scope block.

## Block 6: Q5. Search in Linked List

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };

int main() {
    int n;
    cin >> n;

    Node* head = nullptr;
    Node* tail = nullptr;

    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        Node* node = new Node(x);
        if (!head) head = tail = node;
        else {
            tail->next = node;
            tail = node;
        }
    }

    int key;
    cin >> key;

    int idx = 1;
    for (Node* p = head; p; p = p->next, idx++) {
        if (p->val == key) {
            cout << idx << "\n";
            return 0;
        }
    }

    cout << -1 << "\n";
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
- Line 4: `struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };`
  Explaination: Executes a single statement that updates program state.
- Line 5: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 6: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 7: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 8: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    Node* head = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 11: `    Node* tail = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        int x; cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 15: `        Node* node = new Node(x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `        if (!head) head = tail = node;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `        else {`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 18: `            tail->next = node;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `            tail = node;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `        }`
  Explaination: Closes the current scope block.
- Line 21: `    }`
  Explaination: Closes the current scope block.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    int key;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 24: `    cin >> key;`
  Explaination: Reads input values from standard input into variables.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    int idx = 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 27: `    for (Node* p = head; p; p = p->next, idx++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 28: `        if (p->val == key) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 29: `            cout << idx << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 30: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 31: `        }`
  Explaination: Closes the current scope block.
- Line 32: `    }`
  Explaination: Closes the current scope block.
- Line 33: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 34: `    cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 35: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 36: `}`
  Explaination: Closes the current scope block.

## Block 7: Q6. Reverse Linked List (Iterative)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };

int main() {
    int n;
    cin >> n;
    Node* head = nullptr;
    Node* tail = nullptr;

    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        Node* node = new Node(x);
        if (!head) head = tail = node;
        else tail->next = node, tail = node;
    }

    Node* prev = nullptr;
    Node* cur = head;

    while (cur) {
        Node* nxt = cur->next;
        cur->next = prev;
        prev = cur;
        cur = nxt;
    }

    head = prev;
    for (Node* p = head; p; p = p->next) cout << p->val << " ";
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
- Line 4: `struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };`
  Explaination: Executes a single statement that updates program state.
- Line 5: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 6: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 7: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 8: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 9: `    Node* head = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 10: `    Node* tail = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        int x; cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 14: `        Node* node = new Node(x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `        if (!head) head = tail = node;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `        else tail->next = node, tail = node;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 17: `    }`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    Node* prev = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `    Node* cur = head;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    while (cur) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 23: `        Node* nxt = cur->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 24: `        cur->next = prev;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 25: `        prev = cur;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 26: `        cur = nxt;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 27: `    }`
  Explaination: Closes the current scope block.
- Line 28: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 29: `    head = prev;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 30: `    for (Node* p = head; p; p = p->next) cout << p->val << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 31: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 32: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 33: `}`
  Explaination: Closes the current scope block.

## Block 8: Q7. Reverse Linked List (Recursive)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };

Node* rev(Node* head) {
    if (!head || !head->next) return head;
    Node* nh = rev(head->next);
    head->next->next = head;
    head->next = nullptr;
    return nh;
}

int main() {
    int n;
    cin >> n;
    Node* head = nullptr;
    Node* tail = nullptr;

    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        Node* node = new Node(x);
        if (!head) head = tail = node;
        else tail->next = node, tail = node;
    }

    head = rev(head);
    for (Node* p = head; p; p = p->next) cout << p->val << " ";
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
- Line 4: `struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };`
  Explaination: Executes a single statement that updates program state.
- Line 5: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 6: `Node* rev(Node* head) {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 7: `    if (!head || !head->next) return head;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 8: `    Node* nh = rev(head->next);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 9: `    head->next->next = head;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 10: `    head->next = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 11: `    return nh;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 12: `}`
  Explaination: Closes the current scope block.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 15: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 17: `    Node* head = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: `    Node* tail = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 21: `        int x; cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 22: `        Node* node = new Node(x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: `        if (!head) head = tail = node;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 24: `        else tail->next = node, tail = node;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 25: `    }`
  Explaination: Closes the current scope block.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `    head = rev(head);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 28: `    for (Node* p = head; p; p = p->next) cout << p->val << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 29: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 30: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 31: `}`
  Explaination: Closes the current scope block.

## Block 9: Q8. Middle of Linked List

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };

int main() {
    int n;
    cin >> n;

    Node* head = nullptr;
    Node* tail = nullptr;
    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        Node* node = new Node(x);
        if (!head) head = tail = node;
        else tail->next = node, tail = node;
    }

    Node* slow = head;
    Node* fast = head;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
    }

    cout << (slow ? slow->val : -1) << "\n";
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
- Line 4: `struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };`
  Explaination: Executes a single statement that updates program state.
- Line 5: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 6: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 7: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 8: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    Node* head = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 11: `    Node* tail = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        int x; cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 14: `        Node* node = new Node(x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `        if (!head) head = tail = node;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `        else tail->next = node, tail = node;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 17: `    }`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    Node* slow = head;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `    Node* fast = head;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: `    while (fast && fast->next) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 22: `        slow = slow->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: `        fast = fast->next->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 24: `    }`
  Explaination: Closes the current scope block.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    cout << (slow ? slow->val : -1) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 27: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 28: `}`
  Explaination: Closes the current scope block.

## Block 10: Q9. Remove N-th Node from End

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };

int main() {
    int n;
    cin >> n;

    Node dummy(0);
    Node* t = &dummy;

    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        t->next = new Node(x);
        t = t->next;
    }

    int k;
    cin >> k;

    Node* fast = &dummy;
    for (int i = 0; i < k && fast; i++) fast = fast->next;

    Node* slow = &dummy;
    while (fast && fast->next) {
        fast = fast->next;
        slow = slow->next;
    }

    if (slow->next) slow->next = slow->next->next;

    for (Node* p = dummy.next; p; p = p->next) cout << p->val << " ";
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
- Line 4: `struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };`
  Explaination: Executes a single statement that updates program state.
- Line 5: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 6: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 7: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 8: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    Node dummy(0);`
  Explaination: Executes a single statement that updates program state.
- Line 11: `    Node* t = &dummy;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        int x; cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 15: `        t->next = new Node(x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `        t = t->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `    }`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    int k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 20: `    cin >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    Node* fast = &dummy;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: `    for (int i = 0; i < k && fast; i++) fast = fast->next;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    Node* slow = &dummy;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 26: `    while (fast && fast->next) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 27: `        fast = fast->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 28: `        slow = slow->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 29: `    }`
  Explaination: Closes the current scope block.
- Line 30: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 31: `    if (slow->next) slow->next = slow->next->next;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 32: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 33: `    for (Node* p = dummy.next; p; p = p->next) cout << p->val << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 34: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 35: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 36: `}`
  Explaination: Closes the current scope block.

## Block 11: Q10. Merge Two Sorted Linked Lists

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };

Node* readList(int n) {
    Node* h = nullptr;
    Node* t = nullptr;
    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        Node* node = new Node(x);
        if (!h) h = t = node;
        else t->next = node, t = node;
    }
    return h;
}

int main() {
    int n, m;
    cin >> n >> m;
    Node* a = readList(n);
    Node* b = readList(m);

    Node dummy(0);
    Node* t = &dummy;

    while (a && b) {
        if (a->val <= b->val) t->next = a, a = a->next;
        else t->next = b, b = b->next;
        t = t->next;
    }
    t->next = a ? a : b;

    for (Node* p = dummy.next; p; p = p->next) cout << p->val << " ";
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
- Line 4: `struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };`
  Explaination: Executes a single statement that updates program state.
- Line 5: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 6: `Node* readList(int n) {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 7: `    Node* h = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 8: `    Node* t = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 9: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        int x; cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 11: `        Node* node = new Node(x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: `        if (!h) h = t = node;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: `        else t->next = node, t = node;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 14: `    }`
  Explaination: Closes the current scope block.
- Line 15: `    return h;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 16: `}`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 19: `    int n, m;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 20: `    cin >> n >> m;`
  Explaination: Reads input values from standard input into variables.
- Line 21: `    Node* a = readList(n);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: `    Node* b = readList(m);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    Node dummy(0);`
  Explaination: Executes a single statement that updates program state.
- Line 25: `    Node* t = &dummy;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `    while (a && b) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 28: `        if (a->val <= b->val) t->next = a, a = a->next;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 29: `        else t->next = b, b = b->next;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 30: `        t = t->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 31: `    }`
  Explaination: Closes the current scope block.
- Line 32: `    t->next = a ? a : b;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 33: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 34: `    for (Node* p = dummy.next; p; p = p->next) cout << p->val << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 35: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 36: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 37: `}`
  Explaination: Closes the current scope block.

## Block 12: Q11. Detect Cycle in Linked List

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };

int main() {
    int n;
    cin >> n;

    vector<Node*> nodes;
    nodes.reserve(n);

    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        nodes.push_back(new Node(x));
    }

    for (int i = 0; i + 1 < n; i++) nodes[i]->next = nodes[i + 1];

    int pos;
    cin >> pos;
    if (n > 0 && pos >= 0 && pos < n) nodes[n - 1]->next = nodes[pos];

    Node* slow = (n ? nodes[0] : nullptr);
    Node* fast = (n ? nodes[0] : nullptr);

    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) {
            cout << "Yes\n";
            return 0;
        }
    }

    cout << "No\n";
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
- Line 4: `struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };`
  Explaination: Executes a single statement that updates program state.
- Line 5: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 6: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 7: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 8: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    vector<Node*> nodes;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 11: `    nodes.reserve(n);`
  Explaination: Executes a single statement that updates program state.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        int x; cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 15: `        nodes.push_back(new Node(x));`
  Explaination: Appends a new element to the end of the container.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    for (int i = 0; i + 1 < n; i++) nodes[i]->next = nodes[i + 1];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    int pos;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: `    cin >> pos;`
  Explaination: Reads input values from standard input into variables.
- Line 22: `    if (n > 0 && pos >= 0 && pos < n) nodes[n - 1]->next = nodes[pos];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    Node* slow = (n ? nodes[0] : nullptr);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 25: `    Node* fast = (n ? nodes[0] : nullptr);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `    while (fast && fast->next) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 28: `        slow = slow->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 29: `        fast = fast->next->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 30: `        if (slow == fast) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 31: `            cout << "Yes\n";`
  Explaination: Prints formatted output to standard output.
- Line 32: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 33: `        }`
  Explaination: Closes the current scope block.
- Line 34: `    }`
  Explaination: Closes the current scope block.
- Line 35: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 36: `    cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 37: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 38: `}`
  Explaination: Closes the current scope block.

## Block 13: Q12. Find Start of Cycle

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };

int main() {
    int n;
    cin >> n;

    vector<Node*> nodes;
    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        nodes.push_back(new Node(x));
    }
    for (int i = 0; i + 1 < n; i++) nodes[i]->next = nodes[i + 1];

    int pos;
    cin >> pos;
    if (n && pos >= 0 && pos < n) nodes[n - 1]->next = nodes[pos];

    Node* head = (n ? nodes[0] : nullptr);
    Node* slow = head;
    Node* fast = head;
    bool cyc = false;

    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) { cyc = true; break; }
    }

    if (!cyc) {
        cout << -1 << "\n";
        return 0;
    }

    slow = head;
    while (slow != fast) {
        slow = slow->next;
        fast = fast->next;
    }

    cout << slow->val << "\n";
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
- Line 4: `struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };`
  Explaination: Executes a single statement that updates program state.
- Line 5: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 6: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 7: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 8: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    vector<Node*> nodes;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 11: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        int x; cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 13: `        nodes.push_back(new Node(x));`
  Explaination: Appends a new element to the end of the container.
- Line 14: `    }`
  Explaination: Closes the current scope block.
- Line 15: `    for (int i = 0; i + 1 < n; i++) nodes[i]->next = nodes[i + 1];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    int pos;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: `    cin >> pos;`
  Explaination: Reads input values from standard input into variables.
- Line 19: `    if (n && pos >= 0 && pos < n) nodes[n - 1]->next = nodes[pos];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    Node* head = (n ? nodes[0] : nullptr);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: `    Node* slow = head;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: `    Node* fast = head;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 24: `    bool cyc = false;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    while (fast && fast->next) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 27: `        slow = slow->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 28: `        fast = fast->next->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 29: `        if (slow == fast) { cyc = true; break; }`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 30: `    }`
  Explaination: Closes the current scope block.
- Line 31: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 32: `    if (!cyc) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 33: `        cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 34: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 35: `    }`
  Explaination: Closes the current scope block.
- Line 36: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 37: `    slow = head;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 38: `    while (slow != fast) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 39: `        slow = slow->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 40: `        fast = fast->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 41: `    }`
  Explaination: Closes the current scope block.
- Line 42: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 43: `    cout << slow->val << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 44: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 45: `}`
  Explaination: Closes the current scope block.

## Block 14: Q13. Remove Cycle from Linked List

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };

int main() {
    int n;
    cin >> n;

    vector<Node*> nodes;
    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        nodes.push_back(new Node(x));
    }
    for (int i = 0; i + 1 < n; i++) nodes[i]->next = nodes[i + 1];

    int pos;
    cin >> pos;
    if (n && pos >= 0 && pos < n) nodes[n - 1]->next = nodes[pos];

    Node* head = (n ? nodes[0] : nullptr);
    Node* slow = head;
    Node* fast = head;

    bool cyc = false;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) { cyc = true; break; }
    }

    if (cyc) {
        slow = head;
        if (slow == fast) {
            while (fast->next != slow) fast = fast->next;
            fast->next = nullptr;
        } else {
            while (slow->next != fast->next) {
                slow = slow->next;
                fast = fast->next;
            }
            fast->next = nullptr;
        }
    }

    for (Node* p = head; p; p = p->next) cout << p->val << " ";
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
- Line 4: `struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };`
  Explaination: Executes a single statement that updates program state.
- Line 5: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 6: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 7: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 8: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    vector<Node*> nodes;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 11: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        int x; cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 13: `        nodes.push_back(new Node(x));`
  Explaination: Appends a new element to the end of the container.
- Line 14: `    }`
  Explaination: Closes the current scope block.
- Line 15: `    for (int i = 0; i + 1 < n; i++) nodes[i]->next = nodes[i + 1];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    int pos;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: `    cin >> pos;`
  Explaination: Reads input values from standard input into variables.
- Line 19: `    if (n && pos >= 0 && pos < n) nodes[n - 1]->next = nodes[pos];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    Node* head = (n ? nodes[0] : nullptr);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: `    Node* slow = head;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: `    Node* fast = head;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    bool cyc = false;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 26: `    while (fast && fast->next) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 27: `        slow = slow->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 28: `        fast = fast->next->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 29: `        if (slow == fast) { cyc = true; break; }`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 30: `    }`
  Explaination: Closes the current scope block.
- Line 31: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 32: `    if (cyc) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 33: `        slow = head;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 34: `        if (slow == fast) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 35: `            while (fast->next != slow) fast = fast->next;`
  Explaination: Loop that repeats while the given condition remains true.
- Line 36: `            fast->next = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 37: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 38: `            while (slow->next != fast->next) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 39: `                slow = slow->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 40: `                fast = fast->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 41: `            }`
  Explaination: Closes the current scope block.
- Line 42: `            fast->next = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 43: `        }`
  Explaination: Closes the current scope block.
- Line 44: `    }`
  Explaination: Closes the current scope block.
- Line 45: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 46: `    for (Node* p = head; p; p = p->next) cout << p->val << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 47: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 48: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 49: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 50: `}`
  Explaination: Closes the current scope block.

## Block 15: Q14. Palindrome Linked List

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };

Node* rev(Node* h) {
    Node* p = nullptr;
    while (h) {
        Node* n = h->next;
        h->next = p;
        p = h;
        h = n;
    }
    return p;
}

int main() {
    int n;
    cin >> n;

    Node* head = nullptr;
    Node* tail = nullptr;
    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        Node* node = new Node(x);
        if (!head) head = tail = node;
        else tail->next = node, tail = node;
    }

    Node* slow = head;
    Node* fast = head;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
    }

    Node* second = rev(slow);
    Node* p1 = head;
    Node* p2 = second;
    bool ok = true;

    while (p2) {
        if (p1->val != p2->val) { ok = false; break; }
        p1 = p1->next;
        p2 = p2->next;
    }

    cout << (ok ? "Yes" : "No") << "\n";
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
- Line 4: `struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };`
  Explaination: Executes a single statement that updates program state.
- Line 5: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 6: `Node* rev(Node* h) {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 7: `    Node* p = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 8: `    while (h) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 9: `        Node* n = h->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 10: `        h->next = p;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 11: `        p = h;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: `        h = n;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 13: `    }`
  Explaination: Closes the current scope block.
- Line 14: `    return p;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 15: `}`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 18: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    Node* head = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: `    Node* tail = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 24: `        int x; cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 25: `        Node* node = new Node(x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 26: `        if (!head) head = tail = node;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 27: `        else tail->next = node, tail = node;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 28: `    }`
  Explaination: Closes the current scope block.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    Node* slow = head;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 31: `    Node* fast = head;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 32: `    while (fast && fast->next) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 33: `        slow = slow->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 34: `        fast = fast->next->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 35: `    }`
  Explaination: Closes the current scope block.
- Line 36: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 37: `    Node* second = rev(slow);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 38: `    Node* p1 = head;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 39: `    Node* p2 = second;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 40: `    bool ok = true;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 41: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 42: `    while (p2) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 43: `        if (p1->val != p2->val) { ok = false; break; }`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 44: `        p1 = p1->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 45: `        p2 = p2->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 46: `    }`
  Explaination: Closes the current scope block.
- Line 47: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 48: `    cout << (ok ? "Yes" : "No") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 49: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 50: `}`
  Explaination: Closes the current scope block.

## Block 16: Q15. Intersection Point of Two Linked Lists

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };

int len(Node* h) {
    int l = 0;
    while (h) l++, h = h->next;
    return l;
}

int main() {
    int n1, n2;
    cin >> n1 >> n2;

    vector<Node*> a(n1), b(n2);
    for (int i = 0; i < n1; i++) {
        int x; cin >> x;
        a[i] = new Node(x);
        if (i) a[i - 1]->next = a[i];
    }
    for (int i = 0; i < n2; i++) {
        int x; cin >> x;
        b[i] = new Node(x);
        if (i) b[i - 1]->next = b[i];
    }

    int joinA, joinB;
    cin >> joinA >> joinB; // -1 -1 means no intersection
    if (joinA >= 0 && joinA < n1 && joinB >= 0 && joinB < n2) {
        b[joinB]->next = a[joinA];
    }

    Node* h1 = n1 ? a[0] : nullptr;
    Node* h2 = n2 ? b[0] : nullptr;

    int l1 = len(h1), l2 = len(h2);
    while (l1 > l2) h1 = h1->next, l1--;
    while (l2 > l1) h2 = h2->next, l2--;

    while (h1 && h2 && h1 != h2) {
        h1 = h1->next;
        h2 = h2->next;
    }

    cout << (h1 ? h1->val : -1) << "\n";
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
- Line 4: `struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };`
  Explaination: Executes a single statement that updates program state.
- Line 5: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 6: `int len(Node* h) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    int l = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 8: `    while (h) l++, h = h->next;`
  Explaination: Loop that repeats while the given condition remains true.
- Line 9: `    return l;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 10: `}`
  Explaination: Closes the current scope block.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 13: `    int n1, n2;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `    cin >> n1 >> n2;`
  Explaination: Reads input values from standard input into variables.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    vector<Node*> a(n1), b(n2);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 17: `    for (int i = 0; i < n1; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: `        int x; cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 19: `        a[i] = new Node(x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `        if (i) a[i - 1]->next = a[i];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: `    }`
  Explaination: Closes the current scope block.
- Line 22: `    for (int i = 0; i < n2; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 23: `        int x; cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 24: `        b[i] = new Node(x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 25: `        if (i) b[i - 1]->next = b[i];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 26: `    }`
  Explaination: Closes the current scope block.
- Line 27: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 28: `    int joinA, joinB;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 29: `    cin >> joinA >> joinB; // -1 -1 means no intersection`
  Explaination: Reads input values from standard input into variables.
- Line 30: `    if (joinA >= 0 && joinA < n1 && joinB >= 0 && joinB < n2) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 31: `        b[joinB]->next = a[joinA];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 32: `    }`
  Explaination: Closes the current scope block.
- Line 33: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 34: `    Node* h1 = n1 ? a[0] : nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 35: `    Node* h2 = n2 ? b[0] : nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 36: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 37: `    int l1 = len(h1), l2 = len(h2);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 38: `    while (l1 > l2) h1 = h1->next, l1--;`
  Explaination: Loop that repeats while the given condition remains true.
- Line 39: `    while (l2 > l1) h2 = h2->next, l2--;`
  Explaination: Loop that repeats while the given condition remains true.
- Line 40: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 41: `    while (h1 && h2 && h1 != h2) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 42: `        h1 = h1->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 43: `        h2 = h2->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 44: `    }`
  Explaination: Closes the current scope block.
- Line 45: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 46: `    cout << (h1 ? h1->val : -1) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 47: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 48: `}`
  Explaination: Closes the current scope block.

## Block 17: Q16. Add Two Numbers (Digits in Reverse Order)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };

Node* readList(int n) {
    Node* h = nullptr;
    Node* t = nullptr;
    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        Node* node = new Node(x);
        if (!h) h = t = node;
        else t->next = node, t = node;
    }
    return h;
}

int main() {
    int n, m;
    cin >> n >> m;
    Node* a = readList(n);
    Node* b = readList(m);

    Node dummy(0);
    Node* t = &dummy;
    int carry = 0;

    while (a || b || carry) {
        int s = carry;
        if (a) s += a->val, a = a->next;
        if (b) s += b->val, b = b->next;

        t->next = new Node(s % 10);
        t = t->next;
        carry = s / 10;
    }

    for (Node* p = dummy.next; p; p = p->next) cout << p->val << " ";
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
- Line 4: `struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };`
  Explaination: Executes a single statement that updates program state.
- Line 5: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 6: `Node* readList(int n) {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 7: `    Node* h = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 8: `    Node* t = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 9: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        int x; cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 11: `        Node* node = new Node(x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: `        if (!h) h = t = node;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: `        else t->next = node, t = node;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 14: `    }`
  Explaination: Closes the current scope block.
- Line 15: `    return h;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 16: `}`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 19: `    int n, m;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 20: `    cin >> n >> m;`
  Explaination: Reads input values from standard input into variables.
- Line 21: `    Node* a = readList(n);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: `    Node* b = readList(m);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    Node dummy(0);`
  Explaination: Executes a single statement that updates program state.
- Line 25: `    Node* t = &dummy;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 26: `    int carry = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 27: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 28: `    while (a || b || carry) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 29: `        int s = carry;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 30: `        if (a) s += a->val, a = a->next;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 31: `        if (b) s += b->val, b = b->next;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 32: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 33: `        t->next = new Node(s % 10);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 34: `        t = t->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 35: `        carry = s / 10;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 36: `    }`
  Explaination: Closes the current scope block.
- Line 37: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 38: `    for (Node* p = dummy.next; p; p = p->next) cout << p->val << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 39: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 40: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 41: `}`
  Explaination: Closes the current scope block.

## Block 18: Q17. Odd Even Linked List

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };

int main() {
    int n;
    cin >> n;

    Node* head = nullptr;
    Node* tail = nullptr;
    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        Node* node = new Node(x);
        if (!head) head = tail = node;
        else tail->next = node, tail = node;
    }

    if (!head || !head->next) {
        for (Node* p = head; p; p = p->next) cout << p->val << " ";
        cout << "\n";
        return 0;
    }

    Node* odd = head;
    Node* even = head->next;
    Node* evenHead = even;

    while (even && even->next) {
        odd->next = even->next;
        odd = odd->next;
        even->next = odd->next;
        even = even->next;
    }

    odd->next = evenHead;

    for (Node* p = head; p; p = p->next) cout << p->val << " ";
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
- Line 4: `struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };`
  Explaination: Executes a single statement that updates program state.
- Line 5: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 6: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 7: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 8: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    Node* head = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 11: `    Node* tail = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        int x; cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 14: `        Node* node = new Node(x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `        if (!head) head = tail = node;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `        else tail->next = node, tail = node;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 17: `    }`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    if (!head || !head->next) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 20: `        for (Node* p = head; p; p = p->next) cout << p->val << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 21: `        cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 22: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 23: `    }`
  Explaination: Closes the current scope block.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    Node* odd = head;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 26: `    Node* even = head->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 27: `    Node* evenHead = even;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 28: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 29: `    while (even && even->next) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 30: `        odd->next = even->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 31: `        odd = odd->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 32: `        even->next = odd->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 33: `        even = even->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 34: `    }`
  Explaination: Closes the current scope block.
- Line 35: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 36: `    odd->next = evenHead;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 37: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 38: `    for (Node* p = head; p; p = p->next) cout << p->val << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 39: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 40: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 41: `}`
  Explaination: Closes the current scope block.

## Block 19: Q18. Remove Duplicates from Sorted Linked List

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };

int main() {
    int n;
    cin >> n;

    Node* head = nullptr;
    Node* tail = nullptr;
    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        Node* node = new Node(x);
        if (!head) head = tail = node;
        else tail->next = node, tail = node;
    }

    Node* cur = head;
    while (cur && cur->next) {
        if (cur->val == cur->next->val) cur->next = cur->next->next;
        else cur = cur->next;
    }

    for (Node* p = head; p; p = p->next) cout << p->val << " ";
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
- Line 4: `struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };`
  Explaination: Executes a single statement that updates program state.
- Line 5: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 6: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 7: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 8: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    Node* head = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 11: `    Node* tail = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        int x; cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 14: `        Node* node = new Node(x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `        if (!head) head = tail = node;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `        else tail->next = node, tail = node;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 17: `    }`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    Node* cur = head;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `    while (cur && cur->next) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 21: `        if (cur->val == cur->next->val) cur->next = cur->next->next;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 22: `        else cur = cur->next;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 23: `    }`
  Explaination: Closes the current scope block.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    for (Node* p = head; p; p = p->next) cout << p->val << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 26: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 27: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 28: `}`
  Explaination: Closes the current scope block.

## Block 20: Q19. Remove Duplicates from Unsorted Linked List

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };

int main() {
    int n;
    cin >> n;

    Node dummy(0);
    Node* tail = &dummy;
    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        tail->next = new Node(x);
        tail = tail->next;
    }

    unordered_set<int> seen;
    Node* prev = &dummy;
    Node* cur = dummy.next;

    while (cur) {
        if (seen.count(cur->val)) {
            prev->next = cur->next;
            cur = cur->next;
        } else {
            seen.insert(cur->val);
            prev = cur;
            cur = cur->next;
        }
    }

    for (Node* p = dummy.next; p; p = p->next) cout << p->val << " ";
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
- Line 4: `struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };`
  Explaination: Executes a single statement that updates program state.
- Line 5: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 6: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 7: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 8: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    Node dummy(0);`
  Explaination: Executes a single statement that updates program state.
- Line 11: `    Node* tail = &dummy;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        int x; cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 14: `        tail->next = new Node(x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `        tail = tail->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    unordered_set<int> seen;`
  Explaination: Declares a hash set for fast membership checks.
- Line 19: `    Node* prev = &dummy;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `    Node* cur = dummy.next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    while (cur) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 23: `        if (seen.count(cur->val)) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 24: `            prev->next = cur->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 25: `            cur = cur->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 26: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 27: `            seen.insert(cur->val);`
  Explaination: Inserts element(s) at a specified position in a container.
- Line 28: `            prev = cur;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 29: `            cur = cur->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 30: `        }`
  Explaination: Closes the current scope block.
- Line 31: `    }`
  Explaination: Closes the current scope block.
- Line 32: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 33: `    for (Node* p = dummy.next; p; p = p->next) cout << p->val << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 34: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 35: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 36: `}`
  Explaination: Closes the current scope block.

## Block 21: Q20. Segregate 0s, 1s, 2s in Linked List

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };

int main() {
    int n;
    cin >> n;

    vector<int> cnt(3, 0);
    Node* head = nullptr;
    Node* tail = nullptr;

    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        cnt[x]++;
        Node* node = new Node(x);
        if (!head) head = tail = node;
        else tail->next = node, tail = node;
    }

    Node* cur = head;
    for (int v = 0; v <= 2; v++) {
        while (cnt[v]--) {
            cur->val = v;
            cur = cur->next;
        }
    }

    for (Node* p = head; p; p = p->next) cout << p->val << " ";
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
- Line 4: `struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };`
  Explaination: Executes a single statement that updates program state.
- Line 5: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 6: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 7: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 8: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    vector<int> cnt(3, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 11: `    Node* head = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: `    Node* tail = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        int x; cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 16: `        cnt[x]++;`
  Explaination: Executes a single statement that updates program state.
- Line 17: `        Node* node = new Node(x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: `        if (!head) head = tail = node;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 19: `        else tail->next = node, tail = node;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    Node* cur = head;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: `    for (int v = 0; v <= 2; v++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 24: `        while (cnt[v]--) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 25: `            cur->val = v;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 26: `            cur = cur->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 27: `        }`
  Explaination: Closes the current scope block.
- Line 28: `    }`
  Explaination: Closes the current scope block.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    for (Node* p = head; p; p = p->next) cout << p->val << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 31: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 32: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 33: `}`
  Explaination: Closes the current scope block.

## Block 22: Q21. Rotate Linked List Right by K

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };

int main() {
    int n, k;
    cin >> n >> k;

    Node* head = nullptr;
    Node* tail = nullptr;

    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        Node* node = new Node(x);
        if (!head) head = tail = node;
        else tail->next = node, tail = node;
    }

    if (!head || !head->next || k == 0) {
        for (Node* p = head; p; p = p->next) cout << p->val << " ";
        cout << "\n";
        return 0;
    }

    int len = 1;
    Node* t = head;
    while (t->next) t = t->next, len++;

    k %= len;
    if (k == 0) {
        for (Node* p = head; p; p = p->next) cout << p->val << " ";
        cout << "\n";
        return 0;
    }

    t->next = head;
    int steps = len - k;
    Node* newTail = head;
    while (--steps) newTail = newTail->next;

    Node* newHead = newTail->next;
    newTail->next = nullptr;

    for (Node* p = newHead; p; p = p->next) cout << p->val << " ";
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
- Line 4: `struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };`
  Explaination: Executes a single statement that updates program state.
- Line 5: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 6: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 7: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 8: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    Node* head = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 11: `    Node* tail = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        int x; cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 15: `        Node* node = new Node(x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `        if (!head) head = tail = node;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `        else tail->next = node, tail = node;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    if (!head || !head->next || k == 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: `        for (Node* p = head; p; p = p->next) cout << p->val << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 22: `        cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 23: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 24: `    }`
  Explaination: Closes the current scope block.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    int len = 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 27: `    Node* t = head;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 28: `    while (t->next) t = t->next, len++;`
  Explaination: Loop that repeats while the given condition remains true.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    k %= len;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 31: `    if (k == 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 32: `        for (Node* p = head; p; p = p->next) cout << p->val << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 33: `        cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 34: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 35: `    }`
  Explaination: Closes the current scope block.
- Line 36: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 37: `    t->next = head;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 38: `    int steps = len - k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 39: `    Node* newTail = head;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 40: `    while (--steps) newTail = newTail->next;`
  Explaination: Loop that repeats while the given condition remains true.
- Line 41: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 42: `    Node* newHead = newTail->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 43: `    newTail->next = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 44: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 45: `    for (Node* p = newHead; p; p = p->next) cout << p->val << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 46: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 47: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 48: `}`
  Explaination: Closes the current scope block.

## Block 23: Q22. Swap Nodes in Pairs

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };

int main() {
    int n;
    cin >> n;

    Node dummy(0);
    Node* tail = &dummy;
    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        tail->next = new Node(x);
        tail = tail->next;
    }

    Node* prev = &dummy;
    while (prev->next && prev->next->next) {
        Node* a = prev->next;
        Node* b = a->next;

        a->next = b->next;
        b->next = a;
        prev->next = b;

        prev = a;
    }

    for (Node* p = dummy.next; p; p = p->next) cout << p->val << " ";
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
- Line 4: `struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };`
  Explaination: Executes a single statement that updates program state.
- Line 5: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 6: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 7: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 8: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    Node dummy(0);`
  Explaination: Executes a single statement that updates program state.
- Line 11: `    Node* tail = &dummy;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        int x; cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 14: `        tail->next = new Node(x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `        tail = tail->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    Node* prev = &dummy;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `    while (prev->next && prev->next->next) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 20: `        Node* a = prev->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: `        Node* b = a->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `        a->next = b->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 24: `        b->next = a;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 25: `        prev->next = b;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `        prev = a;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 28: `    }`
  Explaination: Closes the current scope block.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    for (Node* p = dummy.next; p; p = p->next) cout << p->val << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 31: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 32: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 33: `}`
  Explaination: Closes the current scope block.

## Block 24: Q23. Reverse Nodes in K-Group

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };

Node* getK(Node* cur, int k) {
    while (cur && k--) cur = cur->next;
    return cur;
}

int main() {
    int n, k;
    cin >> n >> k;

    Node dummy(0);
    Node* t = &dummy;
    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        t->next = new Node(x);
        t = t->next;
    }

    Node* groupPrev = &dummy;

    while (true) {
        Node* kth = getK(groupPrev, k);
        if (!kth) break;
        Node* groupNext = kth->next;

        Node* prev = groupNext;
        Node* cur = groupPrev->next;

        while (cur != groupNext) {
            Node* nxt = cur->next;
            cur->next = prev;
            prev = cur;
            cur = nxt;
        }

        Node* tmp = groupPrev->next;
        groupPrev->next = kth;
        groupPrev = tmp;
    }

    for (Node* p = dummy.next; p; p = p->next) cout << p->val << " ";
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
- Line 4: `struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };`
  Explaination: Executes a single statement that updates program state.
- Line 5: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 6: `Node* getK(Node* cur, int k) {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 7: `    while (cur && k--) cur = cur->next;`
  Explaination: Loop that repeats while the given condition remains true.
- Line 8: `    return cur;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 9: `}`
  Explaination: Closes the current scope block.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 12: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    Node dummy(0);`
  Explaination: Executes a single statement that updates program state.
- Line 16: `    Node* t = &dummy;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: `        int x; cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 19: `        t->next = new Node(x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `        t = t->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: `    }`
  Explaination: Closes the current scope block.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    Node* groupPrev = &dummy;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    while (true) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 26: `        Node* kth = getK(groupPrev, k);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 27: `        if (!kth) break;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 28: `        Node* groupNext = kth->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `        Node* prev = groupNext;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 31: `        Node* cur = groupPrev->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 32: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 33: `        while (cur != groupNext) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 34: `            Node* nxt = cur->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 35: `            cur->next = prev;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 36: `            prev = cur;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 37: `            cur = nxt;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 38: `        }`
  Explaination: Closes the current scope block.
- Line 39: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 40: `        Node* tmp = groupPrev->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 41: `        groupPrev->next = kth;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 42: `        groupPrev = tmp;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 43: `    }`
  Explaination: Closes the current scope block.
- Line 44: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 45: `    for (Node* p = dummy.next; p; p = p->next) cout << p->val << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 46: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 47: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 48: `}`
  Explaination: Closes the current scope block.

## Block 25: Q24. Partition List Around Value X

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };

int main() {
    int n, x;
    cin >> n >> x;

    Node* head = nullptr;
    Node* tail = nullptr;

    for (int i = 0; i < n; i++) {
        int v; cin >> v;
        Node* node = new Node(v);
        if (!head) head = tail = node;
        else tail->next = node, tail = node;
    }

    Node lessD(0), geD(0);
    Node* l = &lessD;
    Node* g = &geD;

    for (Node* p = head; p; p = p->next) {
        if (p->val < x) {
            l->next = p;
            l = l->next;
        } else {
            g->next = p;
            g = g->next;
        }
    }

    g->next = nullptr;
    l->next = geD.next;

    for (Node* p = lessD.next; p; p = p->next) cout << p->val << " ";
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
- Line 4: `struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };`
  Explaination: Executes a single statement that updates program state.
- Line 5: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 6: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 7: `    int n, x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 8: `    cin >> n >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    Node* head = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 11: `    Node* tail = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        int v; cin >> v;`
  Explaination: Reads input values from standard input into variables.
- Line 15: `        Node* node = new Node(v);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `        if (!head) head = tail = node;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `        else tail->next = node, tail = node;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    Node lessD(0), geD(0);`
  Explaination: Executes a single statement that updates program state.
- Line 21: `    Node* l = &lessD;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: `    Node* g = &geD;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    for (Node* p = head; p; p = p->next) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 25: `        if (p->val < x) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 26: `            l->next = p;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 27: `            l = l->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 28: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 29: `            g->next = p;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 30: `            g = g->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 31: `        }`
  Explaination: Closes the current scope block.
- Line 32: `    }`
  Explaination: Closes the current scope block.
- Line 33: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 34: `    g->next = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 35: `    l->next = geD.next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 36: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 37: `    for (Node* p = lessD.next; p; p = p->next) cout << p->val << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 38: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 39: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 40: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 41: `}`
  Explaination: Closes the current scope block.

## Block 26: Q25. Sort Linked List (Merge Sort)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };

Node* mergeLists(Node* a, Node* b) {
    Node d(0), *t = &d;
    while (a && b) {
        if (a->val <= b->val) t->next = a, a = a->next;
        else t->next = b, b = b->next;
        t = t->next;
    }
    t->next = a ? a : b;
    return d.next;
}

Node* sortList(Node* h) {
    if (!h || !h->next) return h;

    Node* slow = h;
    Node* fast = h->next;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
    }

    Node* mid = slow->next;
    slow->next = nullptr;

    Node* left = sortList(h);
    Node* right = sortList(mid);
    return mergeLists(left, right);
}

int main() {
    int n;
    cin >> n;

    Node* h = nullptr;
    Node* t = nullptr;
    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        Node* node = new Node(x);
        if (!h) h = t = node;
        else t->next = node, t = node;
    }

    h = sortList(h);
    for (Node* p = h; p; p = p->next) cout << p->val << " ";
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
- Line 4: `struct Node { int val; Node* next; Node(int v): val(v), next(nullptr) {} };`
  Explaination: Executes a single statement that updates program state.
- Line 5: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 6: `Node* mergeLists(Node* a, Node* b) {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 7: `    Node d(0), *t = &d;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 8: `    while (a && b) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 9: `        if (a->val <= b->val) t->next = a, a = a->next;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 10: `        else t->next = b, b = b->next;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 11: `        t = t->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: `    }`
  Explaination: Closes the current scope block.
- Line 13: `    t->next = a ? a : b;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: `    return d.next;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 15: `}`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `Node* sortList(Node* h) {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 18: `    if (!h || !h->next) return h;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    Node* slow = h;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: `    Node* fast = h->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: `    while (fast && fast->next) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 23: `        slow = slow->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 24: `        fast = fast->next->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 25: `    }`
  Explaination: Closes the current scope block.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `    Node* mid = slow->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 28: `    slow->next = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    Node* left = sortList(h);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 31: `    Node* right = sortList(mid);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 32: `    return mergeLists(left, right);`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 33: `}`
  Explaination: Closes the current scope block.
- Line 34: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 35: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 36: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 37: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 38: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 39: `    Node* h = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 40: `    Node* t = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 41: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 42: `        int x; cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 43: `        Node* node = new Node(x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 44: `        if (!h) h = t = node;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 45: `        else t->next = node, t = node;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 46: `    }`
  Explaination: Closes the current scope block.
- Line 47: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 48: `    h = sortList(h);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 49: `    for (Node* p = h; p; p = p->next) cout << p->val << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 50: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 51: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 52: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 53: `}`
  Explaination: Closes the current scope block.

## Block 27: Q26. Copy Linked List with Random Pointer

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Node {
    int val;
    Node* next;
    Node* random;
    Node(int v): val(v), next(nullptr), random(nullptr) {}
};

int main() {
    int n;
    cin >> n;

    vector<Node*> orig(n);
    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        orig[i] = new Node(x);
        if (i) orig[i - 1]->next = orig[i];
    }

    for (int i = 0; i < n; i++) {
        int ri; cin >> ri; // -1 means null
        if (ri >= 0) orig[i]->random = orig[ri];
    }

    unordered_map<Node*, Node*> mp;
    for (int i = 0; i < n; i++) mp[orig[i]] = new Node(orig[i]->val);

    for (int i = 0; i < n; i++) {
        mp[orig[i]]->next = orig[i]->next ? mp[orig[i]->next] : nullptr;
        mp[orig[i]]->random = orig[i]->random ? mp[orig[i]->random] : nullptr;
    }

    for (int i = 0; i < n; i++) {
        int rv = mp[orig[i]]->random ? mp[orig[i]]->random->val : -1;
        cout << mp[orig[i]]->val << "(" << rv << ") ";
    }
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
- Line 4: `struct Node {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 5: `    int val;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    Node* next;`
  Explaination: Executes a single statement that updates program state.
- Line 7: `    Node* random;`
  Explaination: Executes a single statement that updates program state.
- Line 8: `    Node(int v): val(v), next(nullptr), random(nullptr) {}`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 9: `};`
  Explaination: Closes the current class/struct/initializer block.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 12: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    vector<Node*> orig(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 16: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 17: `        int x; cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 18: `        orig[i] = new Node(x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `        if (i) orig[i - 1]->next = orig[i];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 23: `        int ri; cin >> ri; // -1 means null`
  Explaination: Reads input values from standard input into variables.
- Line 24: `        if (ri >= 0) orig[i]->random = orig[ri];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 25: `    }`
  Explaination: Closes the current scope block.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `    unordered_map<Node*, Node*> mp;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 28: `    for (int i = 0; i < n; i++) mp[orig[i]] = new Node(orig[i]->val);`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 31: `        mp[orig[i]]->next = orig[i]->next ? mp[orig[i]->next] : nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 32: `        mp[orig[i]]->random = orig[i]->random ? mp[orig[i]->random] : nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 33: `    }`
  Explaination: Closes the current scope block.
- Line 34: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 35: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 36: `        int rv = mp[orig[i]]->random ? mp[orig[i]]->random->val : -1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 37: `        cout << mp[orig[i]]->val << "(" << rv << ") ";`
  Explaination: Prints formatted output to standard output.
- Line 38: `    }`
  Explaination: Closes the current scope block.
- Line 39: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 40: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 41: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 42: `}`
  Explaination: Closes the current scope block.

## Block 28: Q27. Flatten Sorted Multi-Level Linked List (Bottom Pointers)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Node {
    int val;
    Node* next;
    Node* bottom;
    Node(int v): val(v), next(nullptr), bottom(nullptr) {}
};

Node* mergeBottom(Node* a, Node* b) {
    Node d(0);
    Node* t = &d;

    while (a && b) {
        if (a->val <= b->val) {
            t->bottom = a;
            a = a->bottom;
        } else {
            t->bottom = b;
            b = b->bottom;
        }
        t = t->bottom;
        t->next = nullptr;
    }
    t->bottom = a ? a : b;
    return d.bottom;
}

Node* flatten(Node* root) {
    if (!root || !root->next) return root;
    root->next = flatten(root->next);
    return mergeBottom(root, root->next);
}

int main() {
    // Problem-specific builder omitted for brevity; function above is key logic.
    cout << "Use flatten(root) after building multilevel list\n";
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
- Line 4: `struct Node {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 5: `    int val;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    Node* next;`
  Explaination: Executes a single statement that updates program state.
- Line 7: `    Node* bottom;`
  Explaination: Executes a single statement that updates program state.
- Line 8: `    Node(int v): val(v), next(nullptr), bottom(nullptr) {}`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 9: `};`
  Explaination: Closes the current class/struct/initializer block.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `Node* mergeBottom(Node* a, Node* b) {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 12: `    Node d(0);`
  Explaination: Executes a single statement that updates program state.
- Line 13: `    Node* t = &d;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    while (a && b) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 16: `        if (a->val <= b->val) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `            t->bottom = a;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: `            a = a->bottom;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 20: `            t->bottom = b;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: `            b = b->bottom;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: `        }`
  Explaination: Closes the current scope block.
- Line 23: `        t = t->bottom;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 24: `        t->next = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 25: `    }`
  Explaination: Closes the current scope block.
- Line 26: `    t->bottom = a ? a : b;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 27: `    return d.bottom;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 28: `}`
  Explaination: Closes the current scope block.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `Node* flatten(Node* root) {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 31: `    if (!root || !root->next) return root;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 32: `    root->next = flatten(root->next);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 33: `    return mergeBottom(root, root->next);`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 34: `}`
  Explaination: Closes the current scope block.
- Line 35: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 36: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 37: `    // Problem-specific builder omitted for brevity; function above is key logic.`
  Explaination: Comment line documenting intent for the next statement(s).
- Line 38: `    cout << "Use flatten(root) after building multilevel list\n";`
  Explaination: Prints formatted output to standard output.
- Line 39: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 40: `}`
  Explaination: Closes the current scope block.

## Block 29: Q28. Doubly Linked List Insert at Head and Tail

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct DNode {
    int val;
    DNode* prev;
    DNode* next;
    DNode(int v): val(v), prev(nullptr), next(nullptr) {}
};

int main() {
    int q;
    cin >> q;

    DNode* head = nullptr;
    DNode* tail = nullptr;

    while (q--) {
        string op;
        int x;
        cin >> op >> x;

        DNode* n = new DNode(x);
        if (!head) {
            head = tail = n;
        } else if (op == "HEAD") {
            n->next = head;
            head->prev = n;
            head = n;
        } else {
            tail->next = n;
            n->prev = tail;
            tail = n;
        }
    }

    for (DNode* p = head; p; p = p->next) cout << p->val << " ";
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
- Line 4: `struct DNode {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 5: `    int val;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    DNode* prev;`
  Explaination: Executes a single statement that updates program state.
- Line 7: `    DNode* next;`
  Explaination: Executes a single statement that updates program state.
- Line 8: `    DNode(int v): val(v), prev(nullptr), next(nullptr) {}`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 9: `};`
  Explaination: Closes the current class/struct/initializer block.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 12: `    int q;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    cin >> q;`
  Explaination: Reads input values from standard input into variables.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    DNode* head = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `    DNode* tail = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    while (q--) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 19: `        string op;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 20: `        int x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: `        cin >> op >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `        DNode* n = new DNode(x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 24: `        if (!head) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 25: `            head = tail = n;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 26: `        } else if (op == "HEAD") {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 27: `            n->next = head;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 28: `            head->prev = n;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 29: `            head = n;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 30: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 31: `            tail->next = n;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 32: `            n->prev = tail;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 33: `            tail = n;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 34: `        }`
  Explaination: Closes the current scope block.
- Line 35: `    }`
  Explaination: Closes the current scope block.
- Line 36: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 37: `    for (DNode* p = head; p; p = p->next) cout << p->val << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 38: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 39: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 40: `}`
  Explaination: Closes the current scope block.

## Block 30: Q29. Reverse Doubly Linked List

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct DNode {
    int val;
    DNode* prev;
    DNode* next;
    DNode(int v): val(v), prev(nullptr), next(nullptr) {}
};

int main() {
    int n;
    cin >> n;

    DNode* head = nullptr;
    DNode* tail = nullptr;

    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        DNode* node = new DNode(x);
        if (!head) head = tail = node;
        else tail->next = node, node->prev = tail, tail = node;
    }

    DNode* cur = head;
    DNode* temp = nullptr;
    while (cur) {
        temp = cur->prev;
        cur->prev = cur->next;
        cur->next = temp;
        cur = cur->prev;
    }

    if (temp) head = temp->prev;

    for (DNode* p = head; p; p = p->next) cout << p->val << " ";
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
- Line 4: `struct DNode {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 5: `    int val;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    DNode* prev;`
  Explaination: Executes a single statement that updates program state.
- Line 7: `    DNode* next;`
  Explaination: Executes a single statement that updates program state.
- Line 8: `    DNode(int v): val(v), prev(nullptr), next(nullptr) {}`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 9: `};`
  Explaination: Closes the current class/struct/initializer block.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 12: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    DNode* head = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `    DNode* tail = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 19: `        int x; cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 20: `        DNode* node = new DNode(x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: `        if (!head) head = tail = node;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 22: `        else tail->next = node, node->prev = tail, tail = node;`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 23: `    }`
  Explaination: Closes the current scope block.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    DNode* cur = head;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 26: `    DNode* temp = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 27: `    while (cur) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 28: `        temp = cur->prev;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 29: `        cur->prev = cur->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 30: `        cur->next = temp;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 31: `        cur = cur->prev;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 32: `    }`
  Explaination: Closes the current scope block.
- Line 33: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 34: `    if (temp) head = temp->prev;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 35: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 36: `    for (DNode* p = head; p; p = p->next) cout << p->val << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 37: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 38: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 39: `}`
  Explaination: Closes the current scope block.

## Block 31: Q30. LRU Cache (HashMap + Doubly Linked List)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

class LRUCache {
    int cap;
    list<pair<int,int>> dq; // front is most recent
    unordered_map<int, list<pair<int,int>>::iterator> mp;

public:
    LRUCache(int c): cap(c) { mp.reserve(2 * c + 1); }

    int get(int key) {
        if (!mp.count(key)) return -1;
        auto it = mp[key];
        int val = it->second;
        dq.splice(dq.begin(), dq, it);
        mp[key] = dq.begin();
        return val;
    }

    void put(int key, int value) {
        if (mp.count(key)) {
            auto it = mp[key];
            it->second = value;
            dq.splice(dq.begin(), dq, it);
            mp[key] = dq.begin();
            return;
        }

        if ((int)dq.size() == cap) {
            auto last = dq.back();
            mp.erase(last.first);
            dq.pop_back();
        }

        dq.push_front({key, value});
        mp[key] = dq.begin();
    }
};

int main() {
    int cap, q;
    cin >> cap >> q;

    LRUCache cache(cap);

    while (q--) {
        string op;
        cin >> op;
        if (op == "GET") {
            int k; cin >> k;
            cout << cache.get(k) << "\n";
        } else {
            int k, v;
            cin >> k >> v;
            cache.put(k, v);
        }
    }

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
- Line 4: `class LRUCache {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 5: `    int cap;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    list<pair<int,int>> dq; // front is most recent`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 7: `    unordered_map<int, list<pair<int,int>>::iterator> mp;`
  Explaination: Declares a hash map for average O(1) key-based operations.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `public:`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 10: `    LRUCache(int c): cap(c) { mp.reserve(2 * c + 1); }`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    int get(int key) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `        if (!mp.count(key)) return -1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `        auto it = mp[key];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `        int val = it->second;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `        dq.splice(dq.begin(), dq, it);`
  Explaination: Executes a single statement that updates program state.
- Line 17: `        mp[key] = dq.begin();`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: `        return val;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 19: `    }`
  Explaination: Closes the current scope block.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    void put(int key, int value) {`
  Explaination: Function declaration/definition header specifying return type, name, and parameters.
- Line 22: `        if (mp.count(key)) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 23: `            auto it = mp[key];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 24: `            it->second = value;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 25: `            dq.splice(dq.begin(), dq, it);`
  Explaination: Executes a single statement that updates program state.
- Line 26: `            mp[key] = dq.begin();`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 27: `            return;`
  Explaination: Executes a single statement that updates program state.
- Line 28: `        }`
  Explaination: Closes the current scope block.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `        if ((int)dq.size() == cap) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 31: `            auto last = dq.back();`
  Explaination: Accesses the last element of a sequence container.
- Line 32: `            mp.erase(last.first);`
  Explaination: Removes selected element(s) from a container.
- Line 33: `            dq.pop_back();`
  Explaination: Removes the last element from the container.
- Line 34: `        }`
  Explaination: Closes the current scope block.
- Line 35: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 36: `        dq.push_front({key, value});`
  Explaination: Executes a single statement that updates program state.
- Line 37: `        mp[key] = dq.begin();`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 38: `    }`
  Explaination: Closes the current scope block.
- Line 39: `};`
  Explaination: Closes the current class/struct/initializer block.
- Line 40: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 41: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 42: `    int cap, q;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 43: `    cin >> cap >> q;`
  Explaination: Reads input values from standard input into variables.
- Line 44: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 45: `    LRUCache cache(cap);`
  Explaination: Executes a single statement that updates program state.
- Line 46: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 47: `    while (q--) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 48: `        string op;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 49: `        cin >> op;`
  Explaination: Reads input values from standard input into variables.
- Line 50: `        if (op == "GET") {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 51: `            int k; cin >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 52: `            cout << cache.get(k) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 53: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 54: `            int k, v;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 55: `            cin >> k >> v;`
  Explaination: Reads input values from standard input into variables.
- Line 56: `            cache.put(k, v);`
  Explaination: Executes a single statement that updates program state.
- Line 57: `        }`
  Explaination: Closes the current scope block.
- Line 58: `    }`
  Explaination: Closes the current scope block.
- Line 59: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 60: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 61: `}`
  Explaination: Closes the current scope block.
