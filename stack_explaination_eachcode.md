# TCS_NQT_Stack_Full_Questions_Answers_CPP.md: Line-by-Line Code Explaination

This file explains each C++ code block line-by-line from the source topic file.

## Block 1: Q1. Implement Stack Using Array

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

class StackArr {
    vector<long long> a;
public:
    void push(long long x) { a.push_back(x); }
    long long pop() {
        if (a.empty()) return -1;
        long long x = a.back();
        a.pop_back();
        return x;
    }
    long long top() const { return a.empty() ? -1 : a.back(); }
    int size() const { return (int)a.size(); }
};

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int q;
    cin >> q;
    StackArr st;

    while (q--) {
        string op;
        cin >> op;
        if (op == "PUSH") {
            long long x;
            cin >> x;
            st.push(x);
        } else if (op == "POP") {
            cout << st.pop() << "\n";
        } else if (op == "TOP") {
            cout << st.top() << "\n";
        } else {
            cout << st.size() << "\n";
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
- Line 4: `class StackArr {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 5: `    vector<long long> a;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 6: `public:`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 7: `    void push(long long x) { a.push_back(x); }`
  Explaination: Appends a new element to the end of the container.
- Line 8: `    long long pop() {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `        if (a.empty()) return -1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 10: `        long long x = a.back();`
  Explaination: Accesses the last element of a sequence container.
- Line 11: `        a.pop_back();`
  Explaination: Removes the last element from the container.
- Line 12: `        return x;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 13: `    }`
  Explaination: Closes the current scope block.
- Line 14: `    long long top() const { return a.empty() ? -1 : a.back(); }`
  Explaination: Accesses the last element of a sequence container.
- Line 15: `    int size() const { return (int)a.size(); }`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `};`
  Explaination: Closes the current class/struct/initializer block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 19: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 20: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    int q;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 23: `    cin >> q;`
  Explaination: Reads input values from standard input into variables.
- Line 24: `    StackArr st;`
  Explaination: Executes a single statement that updates program state.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    while (q--) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 27: `        string op;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 28: `        cin >> op;`
  Explaination: Reads input values from standard input into variables.
- Line 29: `        if (op == "PUSH") {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 30: `            long long x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 31: `            cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 32: `            st.push(x);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 33: `        } else if (op == "POP") {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 34: `            cout << st.pop() << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 35: `        } else if (op == "TOP") {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 36: `            cout << st.top() << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 37: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 38: `            cout << st.size() << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 39: `        }`
  Explaination: Closes the current scope block.
- Line 40: `    }`
  Explaination: Closes the current scope block.
- Line 41: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 42: `}`
  Explaination: Closes the current scope block.

## Block 2: Q2. Implement Stack Using Linked List

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Node {
    long long val;
    Node* next;
    Node(long long v): val(v), next(nullptr) {}
};

class StackLL {
    Node* head = nullptr;
    int sz = 0;
public:
    void push(long long x) {
        Node* n = new Node(x);
        n->next = head;
        head = n;
        sz++;
    }
    long long pop() {
        if (!head) return -1;
        long long x = head->val;
        Node* t = head;
        head = head->next;
        delete t;
        sz--;
        return x;
    }
    long long top() const { return head ? head->val : -1; }
    int size() const { return sz; }
};

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int q;
    cin >> q;
    StackLL st;

    while (q--) {
        string op;
        cin >> op;
        if (op == "PUSH") {
            long long x;
            cin >> x;
            st.push(x);
        } else if (op == "POP") cout << st.pop() << "\n";
        else if (op == "TOP") cout << st.top() << "\n";
        else cout << st.size() << "\n";
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
- Line 4: `struct Node {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 5: `    long long val;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    Node* next;`
  Explaination: Executes a single statement that updates program state.
- Line 7: `    Node(long long v): val(v), next(nullptr) {}`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 8: `};`
  Explaination: Closes the current class/struct/initializer block.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `class StackLL {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 11: `    Node* head = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: `    int sz = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `public:`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 14: `    void push(long long x) {`
  Explaination: Function declaration/definition header specifying return type, name, and parameters.
- Line 15: `        Node* n = new Node(x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `        n->next = head;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `        head = n;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: `        sz++;`
  Explaination: Executes a single statement that updates program state.
- Line 19: `    }`
  Explaination: Closes the current scope block.
- Line 20: `    long long pop() {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: `        if (!head) return -1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 22: `        long long x = head->val;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 23: `        Node* t = head;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 24: `        head = head->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 25: `        delete t;`
  Explaination: Executes a single statement that updates program state.
- Line 26: `        sz--;`
  Explaination: Executes a single statement that updates program state.
- Line 27: `        return x;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 28: `    }`
  Explaination: Closes the current scope block.
- Line 29: `    long long top() const { return head ? head->val : -1; }`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 30: `    int size() const { return sz; }`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 31: `};`
  Explaination: Closes the current class/struct/initializer block.
- Line 32: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 33: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 34: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 35: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 36: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 37: `    int q;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 38: `    cin >> q;`
  Explaination: Reads input values from standard input into variables.
- Line 39: `    StackLL st;`
  Explaination: Executes a single statement that updates program state.
- Line 40: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 41: `    while (q--) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 42: `        string op;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 43: `        cin >> op;`
  Explaination: Reads input values from standard input into variables.
- Line 44: `        if (op == "PUSH") {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 45: `            long long x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 46: `            cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 47: `            st.push(x);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 48: `        } else if (op == "POP") cout << st.pop() << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 49: `        else if (op == "TOP") cout << st.top() << "\n";`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 50: `        else cout << st.size() << "\n";`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 51: `    }`
  Explaination: Closes the current scope block.
- Line 52: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 53: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 54: `}`
  Explaination: Closes the current scope block.

## Block 3: Q3. Valid Parentheses

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

bool match(char a, char b) {
    return (a=='('&&b==')') || (a=='['&&b==']') || (a=='{'&&b=='}');
}

int main() {
    string s;
    cin >> s;

    stack<char> st;
    for (char c : s) {
        if (c=='(' || c=='[' || c=='{') st.push(c);
        else {
            if (st.empty() || !match(st.top(), c)) {
                cout << "No\n";
                return 0;
            }
            st.pop();
        }
    }

    cout << (st.empty() ? "Yes" : "No") << "\n";
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
- Line 4: `bool match(char a, char b) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    return (a=='('&&b==')') || (a=='['&&b==']') || (a=='{'&&b=='}');`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 6: `}`
  Explaination: Closes the current scope block.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 9: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 10: `    cin >> s;`
  Explaination: Reads input values from standard input into variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    stack<char> st;`
  Explaination: Declares a stack (LIFO structure).
- Line 13: `    for (char c : s) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        if (c=='(' || c=='[' || c=='{') st.push(c);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: `        else {`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 16: `            if (st.empty() || !match(st.top(), c)) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `                cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 18: `                return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 19: `            }`
  Explaination: Closes the current scope block.
- Line 20: `            st.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 21: `        }`
  Explaination: Closes the current scope block.
- Line 22: `    }`
  Explaination: Closes the current scope block.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    cout << (st.empty() ? "Yes" : "No") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 25: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 26: `}`
  Explaination: Closes the current scope block.

## Block 4: Q4. Detect Redundant Parentheses

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin >> s;
    stack<char> st;

    for (char c : s) {
        if (c == ')') {
            bool hasOp = false;
            while (!st.empty() && st.top() != '(') {
                char t = st.top(); st.pop();
                if (t=='+' || t=='-' || t=='*' || t=='/' ) hasOp = true;
            }
            if (!st.empty()) st.pop();
            if (!hasOp) {
                cout << "Yes\n";
                return 0;
            }
        } else {
            st.push(c);
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
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 6: `    cin >> s;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    stack<char> st;`
  Explaination: Declares a stack (LIFO structure).
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    for (char c : s) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        if (c == ')') {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 11: `            bool hasOp = false;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `            while (!st.empty() && st.top() != '(') {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 13: `                char t = st.top(); st.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 14: `                if (t=='+' || t=='-' || t=='*' || t=='/' ) hasOp = true;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: `            }`
  Explaination: Closes the current scope block.
- Line 16: `            if (!st.empty()) st.pop();`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `            if (!hasOp) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 18: `                cout << "Yes\n";`
  Explaination: Prints formatted output to standard output.
- Line 19: `                return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 20: `            }`
  Explaination: Closes the current scope block.
- Line 21: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 22: `            st.push(c);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 23: `        }`
  Explaination: Closes the current scope block.
- Line 24: `    }`
  Explaination: Closes the current scope block.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    cout << "No\n";`
  Explaination: Prints formatted output to standard output.
- Line 27: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 28: `}`
  Explaination: Closes the current scope block.

## Block 5: Q5. Min Stack

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

class MinStack {
    stack<long long> st, mn;
public:
    void push(long long x) {
        st.push(x);
        if (mn.empty()) mn.push(x);
        else mn.push(min(mn.top(), x));
    }
    long long pop() {
        if (st.empty()) return -1;
        long long x = st.top();
        st.pop();
        mn.pop();
        return x;
    }
    long long top() const { return st.empty() ? -1 : st.top(); }
    long long getMin() const { return mn.empty() ? -1 : mn.top(); }
};

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int q;
    cin >> q;
    MinStack st;

    while (q--) {
        string op;
        cin >> op;
        if (op == "PUSH") {
            long long x;
            cin >> x;
            st.push(x);
        } else if (op == "POP") cout << st.pop() << "\n";
        else if (op == "TOP") cout << st.top() << "\n";
        else cout << st.getMin() << "\n";
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
- Line 4: `class MinStack {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 5: `    stack<long long> st, mn;`
  Explaination: Declares a stack (LIFO structure).
- Line 6: `public:`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 7: `    void push(long long x) {`
  Explaination: Function declaration/definition header specifying return type, name, and parameters.
- Line 8: `        st.push(x);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 9: `        if (mn.empty()) mn.push(x);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 10: `        else mn.push(min(mn.top(), x));`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 11: `    }`
  Explaination: Closes the current scope block.
- Line 12: `    long long pop() {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `        if (st.empty()) return -1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `        long long x = st.top();`
  Explaination: Accesses the top element of a stack/priority-queue.
- Line 15: `        st.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 16: `        mn.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 17: `        return x;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: `    long long top() const { return st.empty() ? -1 : st.top(); }`
  Explaination: Accesses the top element of a stack/priority-queue.
- Line 20: `    long long getMin() const { return mn.empty() ? -1 : mn.top(); }`
  Explaination: Accesses the top element of a stack/priority-queue.
- Line 21: `};`
  Explaination: Closes the current class/struct/initializer block.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 24: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 25: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `    int q;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 28: `    cin >> q;`
  Explaination: Reads input values from standard input into variables.
- Line 29: `    MinStack st;`
  Explaination: Executes a single statement that updates program state.
- Line 30: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 31: `    while (q--) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 32: `        string op;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 33: `        cin >> op;`
  Explaination: Reads input values from standard input into variables.
- Line 34: `        if (op == "PUSH") {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 35: `            long long x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 36: `            cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 37: `            st.push(x);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 38: `        } else if (op == "POP") cout << st.pop() << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 39: `        else if (op == "TOP") cout << st.top() << "\n";`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 40: `        else cout << st.getMin() << "\n";`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 41: `    }`
  Explaination: Closes the current scope block.
- Line 42: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 43: `}`
  Explaination: Closes the current scope block.

## Block 6: Q6. Evaluate Postfix Expression

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<string> tok(n);
    for (auto &x : tok) cin >> x;

    stack<long long> st;
    for (string t : tok) {
        if (t=="+"||t=="-"||t=="*"||t=="/") {
            long long b = st.top(); st.pop();
            long long a = st.top(); st.pop();
            if (t=="+") st.push(a+b);
            else if (t=="-") st.push(a-b);
            else if (t=="*") st.push(a*b);
            else st.push(a/b);
        } else st.push(stoll(t));
    }

    cout << st.top() << "\n";
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
- Line 7: `    vector<string> tok(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &x : tok) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    stack<long long> st;`
  Explaination: Declares a stack (LIFO structure).
- Line 11: `    for (string t : tok) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        if (t=="+"||t=="-"||t=="*"||t=="/") {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: `            long long b = st.top(); st.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 14: `            long long a = st.top(); st.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 15: `            if (t=="+") st.push(a+b);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `            else if (t=="-") st.push(a-b);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `            else if (t=="*") st.push(a*b);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 18: `            else st.push(a/b);`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 19: `        } else st.push(stoll(t));`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    cout << st.top() << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 23: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 24: `}`
  Explaination: Closes the current scope block.

## Block 7: Q7. Infix to Postfix Conversion

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int prec(char c) {
    if (c=='^') return 3;
    if (c=='*' || c=='/') return 2;
    if (c=='+' || c=='-') return 1;
    return -1;
}

int main() {
    string s;
    cin >> s;

    stack<char> st;
    string out;

    for (char c : s) {
        if (isalnum((unsigned char)c)) out.push_back(c);
        else if (c=='(') st.push(c);
        else if (c==')') {
            while (!st.empty() && st.top()!='(') {
                out.push_back(st.top()); st.pop();
            }
            if (!st.empty()) st.pop();
        } else {
            while (!st.empty() && st.top()!='(' &&
                   (prec(st.top()) > prec(c) || (prec(st.top())==prec(c) && c!='^'))) {
                out.push_back(st.top()); st.pop();
            }
            st.push(c);
        }
    }

    while (!st.empty()) {
        out.push_back(st.top()); st.pop();
    }

    cout << out << "\n";
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
- Line 4: `int prec(char c) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    if (c=='^') return 3;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    if (c=='*' || c=='/') return 2;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 7: `    if (c=='+' || c=='-') return 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 8: `    return -1;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 9: `}`
  Explaination: Closes the current scope block.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 12: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 13: `    cin >> s;`
  Explaination: Reads input values from standard input into variables.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    stack<char> st;`
  Explaination: Declares a stack (LIFO structure).
- Line 16: `    string out;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    for (char c : s) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 19: `        if (isalnum((unsigned char)c)) out.push_back(c);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 20: `        else if (c=='(') st.push(c);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: `        else if (c==')') {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 22: `            while (!st.empty() && st.top()!='(') {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 23: `                out.push_back(st.top()); st.pop();`
  Explaination: Appends a new element to the end of the container.
- Line 24: `            }`
  Explaination: Closes the current scope block.
- Line 25: `            if (!st.empty()) st.pop();`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 26: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 27: `            while (!st.empty() && st.top()!='(' &&`
  Explaination: Loop that repeats while the given condition remains true.
- Line 28: `                   (prec(st.top()) > prec(c) || (prec(st.top())==prec(c) && c!='^'))) {`
  Explaination: Accesses the top element of a stack/priority-queue.
- Line 29: `                out.push_back(st.top()); st.pop();`
  Explaination: Appends a new element to the end of the container.
- Line 30: `            }`
  Explaination: Closes the current scope block.
- Line 31: `            st.push(c);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 32: `        }`
  Explaination: Closes the current scope block.
- Line 33: `    }`
  Explaination: Closes the current scope block.
- Line 34: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 35: `    while (!st.empty()) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 36: `        out.push_back(st.top()); st.pop();`
  Explaination: Appends a new element to the end of the container.
- Line 37: `    }`
  Explaination: Closes the current scope block.
- Line 38: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 39: `    cout << out << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 40: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 41: `}`
  Explaination: Closes the current scope block.

## Block 8: Q8. Evaluate Infix Expression

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int prec(char c) {
    if (c=='+' || c=='-') return 1;
    if (c=='*' || c=='/') return 2;
    return 0;
}

long long apply(long long a, long long b, char op) {
    if (op=='+') return a+b;
    if (op=='-') return a-b;
    if (op=='*') return a*b;
    return a/b;
}

int main() {
    string s;
    cin >> s;

    stack<long long> vals;
    stack<char> ops;

    for (int i = 0; i < (int)s.size(); i++) {
        if (isdigit((unsigned char)s[i])) {
            long long num = 0;
            while (i < (int)s.size() && isdigit((unsigned char)s[i])) {
                num = num * 10 + (s[i]-'0');
                i++;
            }
            i--;
            vals.push(num);
        } else if (s[i]=='(') ops.push('(');
        else if (s[i]==')') {
            while (!ops.empty() && ops.top()!='(') {
                long long b = vals.top(); vals.pop();
                long long a = vals.top(); vals.pop();
                vals.push(apply(a,b,ops.top()));
                ops.pop();
            }
            if (!ops.empty()) ops.pop();
        } else {
            while (!ops.empty() && prec(ops.top()) >= prec(s[i])) {
                long long b = vals.top(); vals.pop();
                long long a = vals.top(); vals.pop();
                vals.push(apply(a,b,ops.top()));
                ops.pop();
            }
            ops.push(s[i]);
        }
    }

    while (!ops.empty()) {
        long long b = vals.top(); vals.pop();
        long long a = vals.top(); vals.pop();
        vals.push(apply(a,b,ops.top()));
        ops.pop();
    }

    cout << vals.top() << "\n";
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
- Line 4: `int prec(char c) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    if (c=='+' || c=='-') return 1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `    if (c=='*' || c=='/') return 2;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 7: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 8: `}`
  Explaination: Closes the current scope block.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `long long apply(long long a, long long b, char op) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    if (op=='+') return a+b;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 12: `    if (op=='-') return a-b;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: `    if (op=='*') return a*b;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `    return a/b;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 15: `}`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 18: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 19: `    cin >> s;`
  Explaination: Reads input values from standard input into variables.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `    stack<long long> vals;`
  Explaination: Declares a stack (LIFO structure).
- Line 22: `    stack<char> ops;`
  Explaination: Declares a stack (LIFO structure).
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    for (int i = 0; i < (int)s.size(); i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 25: `        if (isdigit((unsigned char)s[i])) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 26: `            long long num = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 27: `            while (i < (int)s.size() && isdigit((unsigned char)s[i])) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 28: `                num = num * 10 + (s[i]-'0');`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 29: `                i++;`
  Explaination: Executes a single statement that updates program state.
- Line 30: `            }`
  Explaination: Closes the current scope block.
- Line 31: `            i--;`
  Explaination: Executes a single statement that updates program state.
- Line 32: `            vals.push(num);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 33: `        } else if (s[i]=='(') ops.push('(');`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 34: `        else if (s[i]==')') {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 35: `            while (!ops.empty() && ops.top()!='(') {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 36: `                long long b = vals.top(); vals.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 37: `                long long a = vals.top(); vals.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 38: `                vals.push(apply(a,b,ops.top()));`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 39: `                ops.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 40: `            }`
  Explaination: Closes the current scope block.
- Line 41: `            if (!ops.empty()) ops.pop();`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 42: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 43: `            while (!ops.empty() && prec(ops.top()) >= prec(s[i])) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 44: `                long long b = vals.top(); vals.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 45: `                long long a = vals.top(); vals.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 46: `                vals.push(apply(a,b,ops.top()));`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 47: `                ops.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 48: `            }`
  Explaination: Closes the current scope block.
- Line 49: `            ops.push(s[i]);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 50: `        }`
  Explaination: Closes the current scope block.
- Line 51: `    }`
  Explaination: Closes the current scope block.
- Line 52: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 53: `    while (!ops.empty()) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 54: `        long long b = vals.top(); vals.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 55: `        long long a = vals.top(); vals.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 56: `        vals.push(apply(a,b,ops.top()));`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 57: `        ops.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 58: `    }`
  Explaination: Closes the current scope block.
- Line 59: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 60: `    cout << vals.top() << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 61: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 62: `}`
  Explaination: Closes the current scope block.

## Block 9: Q9. Next Greater Element (Right)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<long long> a(n), ans(n, -1);
    for (auto &x : a) cin >> x;

    stack<int> st;
    for (int i = n - 1; i >= 0; i--) {
        while (!st.empty() && a[st.top()] <= a[i]) st.pop();
        if (!st.empty()) ans[i] = a[st.top()];
        st.push(i);
    }

    for (auto x : ans) cout << x << " ";
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
- Line 5: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<long long> a(n), ans(n, -1);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    stack<int> st;`
  Explaination: Declares a stack (LIFO structure).
- Line 11: `    for (int i = n - 1; i >= 0; i--) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        while (!st.empty() && a[st.top()] <= a[i]) st.pop();`
  Explaination: Loop that repeats while the given condition remains true.
- Line 13: `        if (!st.empty()) ans[i] = a[st.top()];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `        st.push(i);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    for (auto x : ans) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 19: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 20: `}`
  Explaination: Closes the current scope block.

## Block 10: Q10. Next Greater Element Circular

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n), ans(n, -1);
    for (auto &x : a) cin >> x;

    stack<int> st;
    for (int i = 2*n - 1; i >= 0; i--) {
        int idx = i % n;
        while (!st.empty() && st.top() <= a[idx]) st.pop();
        if (i < n && !st.empty()) ans[idx] = st.top();
        st.push(a[idx]);
    }

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
- Line 5: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<int> a(n), ans(n, -1);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    stack<int> st;`
  Explaination: Declares a stack (LIFO structure).
- Line 11: `    for (int i = 2*n - 1; i >= 0; i--) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        int idx = i % n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `        while (!st.empty() && st.top() <= a[idx]) st.pop();`
  Explaination: Loop that repeats while the given condition remains true.
- Line 14: `        if (i < n && !st.empty()) ans[idx] = st.top();`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: `        st.push(a[idx]);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    for (int x : ans) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 19: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 20: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 21: `}`
  Explaination: Closes the current scope block.

## Block 11: Q11. Previous Smaller Element

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<long long> a(n), ans(n, -1);
    for (auto &x : a) cin >> x;

    stack<long long> st;
    for (int i = 0; i < n; i++) {
        while (!st.empty() && st.top() >= a[i]) st.pop();
        if (!st.empty()) ans[i] = st.top();
        st.push(a[i]);
    }

    for (auto x : ans) cout << x << " ";
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
- Line 5: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<long long> a(n), ans(n, -1);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    stack<long long> st;`
  Explaination: Declares a stack (LIFO structure).
- Line 11: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        while (!st.empty() && st.top() >= a[i]) st.pop();`
  Explaination: Loop that repeats while the given condition remains true.
- Line 13: `        if (!st.empty()) ans[i] = st.top();`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `        st.push(a[i]);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    for (auto x : ans) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 19: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 20: `}`
  Explaination: Closes the current scope block.

## Block 12: Q12. Stock Span

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> p(n), span(n);
    for (auto &x : p) cin >> x;

    stack<int> st;
    for (int i = 0; i < n; i++) {
        while (!st.empty() && p[st.top()] <= p[i]) st.pop();
        span[i] = st.empty() ? (i + 1) : (i - st.top());
        st.push(i);
    }

    for (int x : span) cout << x << " ";
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
- Line 5: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<int> p(n), span(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &x : p) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    stack<int> st;`
  Explaination: Declares a stack (LIFO structure).
- Line 11: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        while (!st.empty() && p[st.top()] <= p[i]) st.pop();`
  Explaination: Loop that repeats while the given condition remains true.
- Line 13: `        span[i] = st.empty() ? (i + 1) : (i - st.top());`
  Explaination: Accesses the top element of a stack/priority-queue.
- Line 14: `        st.push(i);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    for (int x : span) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 19: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 20: `}`
  Explaination: Closes the current scope block.

## Block 13: Q13. Daily Temperatures

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> t(n), ans(n, 0);
    for (auto &x : t) cin >> x;

    stack<int> st;
    for (int i = n - 1; i >= 0; i--) {
        while (!st.empty() && t[st.top()] <= t[i]) st.pop();
        if (!st.empty()) ans[i] = st.top() - i;
        st.push(i);
    }

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
- Line 5: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<int> t(n), ans(n, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &x : t) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    stack<int> st;`
  Explaination: Declares a stack (LIFO structure).
- Line 11: `    for (int i = n - 1; i >= 0; i--) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        while (!st.empty() && t[st.top()] <= t[i]) st.pop();`
  Explaination: Loop that repeats while the given condition remains true.
- Line 13: `        if (!st.empty()) ans[i] = st.top() - i;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `        st.push(i);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    for (int x : ans) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 19: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 20: `}`
  Explaination: Closes the current scope block.

## Block 14: Q14. Largest Rectangle in Histogram

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<long long> h(n);
    for (auto &x : h) cin >> x;

    stack<int> st;
    long long best = 0;

    for (int i = 0; i <= n; i++) {
        long long curH = (i == n ? 0 : h[i]);
        while (!st.empty() && h[st.top()] > curH) {
            long long ht = h[st.top()]; st.pop();
            int l = st.empty() ? -1 : st.top();
            long long width = i - l - 1;
            best = max(best, ht * width);
        }
        st.push(i);
    }

    cout << best << "\n";
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
- Line 7: `    vector<long long> h(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &x : h) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    stack<int> st;`
  Explaination: Declares a stack (LIFO structure).
- Line 11: `    long long best = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    for (int i = 0; i <= n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        long long curH = (i == n ? 0 : h[i]);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: `        while (!st.empty() && h[st.top()] > curH) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 16: `            long long ht = h[st.top()]; st.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 17: `            int l = st.empty() ? -1 : st.top();`
  Explaination: Accesses the top element of a stack/priority-queue.
- Line 18: `            long long width = i - l - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `            best = max(best, ht * width);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `        }`
  Explaination: Closes the current scope block.
- Line 21: `        st.push(i);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 22: `    }`
  Explaination: Closes the current scope block.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    cout << best << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 25: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 26: `}`
  Explaination: Closes the current scope block.

## Block 15: Q15. Maximal Rectangle in Binary Matrix

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `long long histMax(const vector<int>& h) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 5: `    int n = (int)h.size();`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    stack<int> st;`
  Explaination: Declares a stack (LIFO structure).
- Line 7: `    long long best = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    for (int i = 0; i <= n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        int cur = (i == n ? 0 : h[i]);`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `        while (!st.empty() && h[st.top()] > cur) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 12: `            int ht = h[st.top()]; st.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 13: `            int l = st.empty() ? -1 : st.top();`
  Explaination: Accesses the top element of a stack/priority-queue.
- Line 14: `            long long width = i - l - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 15: `            best = max(best, 1LL * ht * width);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `        }`
  Explaination: Closes the current scope block.
- Line 17: `        st.push(i);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: `    return best;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 20: `}`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 23: `    int r, c;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 24: `    cin >> r >> c;`
  Explaination: Reads input values from standard input into variables.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    vector<int> h(c, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 27: `    long long ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 28: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 29: `    for (int i = 0; i < r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 30: `        for (int j = 0; j < c; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 31: `            int x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 32: `            cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 33: `            h[j] = (x == 0 ? 0 : h[j] + 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 34: `        }`
  Explaination: Closes the current scope block.
- Line 35: `        ans = max(ans, histMax(h));`
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

## Block 16: Q16. Trap Rain Water (Stack Method)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> h(n);
    for (auto &x : h) cin >> x;

    stack<int> st;
    long long water = 0;

    for (int i = 0; i < n; i++) {
        while (!st.empty() && h[i] > h[st.top()]) {
            int mid = st.top(); st.pop();
            if (st.empty()) break;
            int l = st.top();
            int width = i - l - 1;
            int ht = min(h[l], h[i]) - h[mid];
            water += 1LL * width * ht;
        }
        st.push(i);
    }

    cout << water << "\n";
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
- Line 7: `    vector<int> h(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &x : h) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    stack<int> st;`
  Explaination: Declares a stack (LIFO structure).
- Line 11: `    long long water = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        while (!st.empty() && h[i] > h[st.top()]) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 15: `            int mid = st.top(); st.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 16: `            if (st.empty()) break;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `            int l = st.top();`
  Explaination: Accesses the top element of a stack/priority-queue.
- Line 18: `            int width = i - l - 1;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `            int ht = min(h[l], h[i]) - h[mid];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 20: `            water += 1LL * width * ht;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: `        }`
  Explaination: Closes the current scope block.
- Line 22: `        st.push(i);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 23: `    }`
  Explaination: Closes the current scope block.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    cout << water << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 26: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 27: `}`
  Explaination: Closes the current scope block.

## Block 17: Q17. Simplify Unix Path

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string path;
    cin >> path;

    vector<string> st;
    string token;

    for (int i = 0; i <= (int)path.size(); i++) {
        if (i == (int)path.size() || path[i] == '/') {
            if (token == "..") {
                if (!st.empty()) st.pop_back();
            } else if (!token.empty() && token != ".") {
                st.push_back(token);
            }
            token.clear();
        } else {
            token.push_back(path[i]);
        }
    }

    if (st.empty()) {
        cout << "/\n";
        return 0;
    }

    string ans;
    for (auto &s : st) ans += "/" + s;
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
- Line 5: `    string path;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 6: `    cin >> path;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    vector<string> st;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    string token;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    for (int i = 0; i <= (int)path.size(); i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        if (i == (int)path.size() || path[i] == '/') {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: `            if (token == "..") {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `                if (!st.empty()) st.pop_back();`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: `            } else if (!token.empty() && token != ".") {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 16: `                st.push_back(token);`
  Explaination: Appends a new element to the end of the container.
- Line 17: `            }`
  Explaination: Closes the current scope block.
- Line 18: `            token.clear();`
  Explaination: Executes a single statement that updates program state.
- Line 19: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 20: `            token.push_back(path[i]);`
  Explaination: Appends a new element to the end of the container.
- Line 21: `        }`
  Explaination: Closes the current scope block.
- Line 22: `    }`
  Explaination: Closes the current scope block.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    if (st.empty()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 25: `        cout << "/\n";`
  Explaination: Prints formatted output to standard output.
- Line 26: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 27: `    }`
  Explaination: Closes the current scope block.
- Line 28: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 29: `    string ans;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 30: `    for (auto &s : st) ans += "/" + s;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 31: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 32: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 33: `}`
  Explaination: Closes the current scope block.

## Block 18: Q18. Decode String (k[encoded])

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin >> s;

    stack<int> cnt;
    stack<string> st;

    string cur = "";
    int num = 0;

    for (char c : s) {
        if (isdigit((unsigned char)c)) {
            num = num * 10 + (c - '0');
        } else if (c == '[') {
            cnt.push(num);
            st.push(cur);
            num = 0;
            cur = "";
        } else if (c == ']') {
            int times = cnt.top(); cnt.pop();
            string prev = st.top(); st.pop();

            string rep;
            rep.reserve(cur.size() * times);
            while (times--) rep += cur;
            cur = prev + rep;
        } else {
            cur.push_back(c);
        }
    }

    cout << cur << "\n";
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
- Line 8: `    stack<int> cnt;`
  Explaination: Declares a stack (LIFO structure).
- Line 9: `    stack<string> st;`
  Explaination: Declares a stack (LIFO structure).
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    string cur = "";`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 12: `    int num = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    for (char c : s) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        if (isdigit((unsigned char)c)) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `            num = num * 10 + (c - '0');`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `        } else if (c == '[') {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 18: `            cnt.push(num);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 19: `            st.push(cur);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 20: `            num = 0;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: `            cur = "";`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 22: `        } else if (c == ']') {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 23: `            int times = cnt.top(); cnt.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 24: `            string prev = st.top(); st.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `            string rep;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 27: `            rep.reserve(cur.size() * times);`
  Explaination: Executes a single statement that updates program state.
- Line 28: `            while (times--) rep += cur;`
  Explaination: Loop that repeats while the given condition remains true.
- Line 29: `            cur = prev + rep;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 30: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 31: `            cur.push_back(c);`
  Explaination: Appends a new element to the end of the container.
- Line 32: `        }`
  Explaination: Closes the current scope block.
- Line 33: `    }`
  Explaination: Closes the current scope block.
- Line 34: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 35: `    cout << cur << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 36: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 37: `}`
  Explaination: Closes the current scope block.

## Block 19: Q19. Remove K Digits to Form Smallest Number

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
    string ans = st.substr(i);

    cout << (ans.empty() ? "0" : ans) << "\n";
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
- Line 25: `    string ans = st.substr(i);`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `    cout << (ans.empty() ? "0" : ans) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 28: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 29: `}`
  Explaination: Closes the current scope block.

## Block 20: Q20. Asteroid Collision

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> a(n);
    for (auto &x : a) cin >> x;

    vector<int> st;

    for (int x : a) {
        bool alive = true;
        while (alive && x < 0 && !st.empty() && st.back() > 0) {
            if (st.back() < -x) st.pop_back();
            else if (st.back() == -x) {
                st.pop_back();
                alive = false;
            } else alive = false;
        }
        if (alive) st.push_back(x);
    }

    for (int x : st) cout << x << " ";
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
- Line 5: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    vector<int> st;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    for (int x : a) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        bool alive = true;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `        while (alive && x < 0 && !st.empty() && st.back() > 0) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 15: `            if (st.back() < -x) st.pop_back();`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `            else if (st.back() == -x) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `                st.pop_back();`
  Explaination: Removes the last element from the container.
- Line 18: `                alive = false;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `            } else alive = false;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `        }`
  Explaination: Closes the current scope block.
- Line 21: `        if (alive) st.push_back(x);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 22: `    }`
  Explaination: Closes the current scope block.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    for (int x : st) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 25: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 26: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 27: `}`
  Explaination: Closes the current scope block.

## Block 21: Q21. Celebrity Problem

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<vector<int>> m(n, vector<int>(n));
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) cin >> m[i][j];
    }

    stack<int> st;
    for (int i = 0; i < n; i++) st.push(i);

    while (st.size() > 1) {
        int a = st.top(); st.pop();
        int b = st.top(); st.pop();
        if (m[a][b]) st.push(b);
        else st.push(a);
    }

    int c = st.top();

    for (int i = 0; i < n; i++) {
        if (i == c) continue;
        if (m[c][i] || !m[i][c]) {
            cout << -1 << "\n";
            return 0;
        }
    }

    cout << c << "\n";
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
- Line 7: `    vector<vector<int>> m(n, vector<int>(n));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: `        for (int j = 0; j < n; j++) cin >> m[i][j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `    }`
  Explaination: Closes the current scope block.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    stack<int> st;`
  Explaination: Declares a stack (LIFO structure).
- Line 13: `    for (int i = 0; i < n; i++) st.push(i);`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 15: `    while (st.size() > 1) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 16: `        int a = st.top(); st.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 17: `        int b = st.top(); st.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 18: `        if (m[a][b]) st.push(b);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 19: `        else st.push(a);`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    int c = st.top();`
  Explaination: Accesses the top element of a stack/priority-queue.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 25: `        if (i == c) continue;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 26: `        if (m[c][i] || !m[i][c]) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 27: `            cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 28: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 29: `        }`
  Explaination: Closes the current scope block.
- Line 30: `    }`
  Explaination: Closes the current scope block.
- Line 31: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 32: `    cout << c << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 33: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 34: `}`
  Explaination: Closes the current scope block.

## Block 22: Q22. Sort Stack Using Recursion

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

void insertSorted(stack<int>& st, int x) {
    if (st.empty() || st.top() <= x) {
        st.push(x);
        return;
    }
    int t = st.top(); st.pop();
    insertSorted(st, x);
    st.push(t);
}

void sortStack(stack<int>& st) {
    if (st.empty()) return;
    int x = st.top(); st.pop();
    sortStack(st);
    insertSorted(st, x);
}

int main() {
    int n;
    cin >> n;
    stack<int> st;
    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        st.push(x);
    }

    sortStack(st);

    while (!st.empty()) {
        cout << st.top() << " ";
        st.pop();
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
- Line 4: `void insertSorted(stack<int>& st, int x) {`
  Explaination: Function declaration/definition header specifying return type, name, and parameters.
- Line 5: `    if (st.empty() || st.top() <= x) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `        st.push(x);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 7: `        return;`
  Explaination: Executes a single statement that updates program state.
- Line 8: `    }`
  Explaination: Closes the current scope block.
- Line 9: `    int t = st.top(); st.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 10: `    insertSorted(st, x);`
  Explaination: Executes a single statement that updates program state.
- Line 11: `    st.push(t);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 12: `}`
  Explaination: Closes the current scope block.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `void sortStack(stack<int>& st) {`
  Explaination: Function declaration/definition header specifying return type, name, and parameters.
- Line 15: `    if (st.empty()) return;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `    int x = st.top(); st.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 17: `    sortStack(st);`
  Explaination: Executes a single statement that updates program state.
- Line 18: `    insertSorted(st, x);`
  Explaination: Executes a single statement that updates program state.
- Line 19: `}`
  Explaination: Closes the current scope block.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 22: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 23: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 24: `    stack<int> st;`
  Explaination: Declares a stack (LIFO structure).
- Line 25: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 26: `        int x; cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 27: `        st.push(x);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 28: `    }`
  Explaination: Closes the current scope block.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    sortStack(st);`
  Explaination: Executes a single statement that updates program state.
- Line 31: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 32: `    while (!st.empty()) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 33: `        cout << st.top() << " ";`
  Explaination: Prints formatted output to standard output.
- Line 34: `        st.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 35: `    }`
  Explaination: Closes the current scope block.
- Line 36: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 37: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 38: `}`
  Explaination: Closes the current scope block.

## Block 23: Q23. Reverse Stack Using Recursion

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

void insertBottom(stack<int>& st, int x) {
    if (st.empty()) {
        st.push(x);
        return;
    }
    int t = st.top(); st.pop();
    insertBottom(st, x);
    st.push(t);
}

void reverseStack(stack<int>& st) {
    if (st.empty()) return;
    int x = st.top(); st.pop();
    reverseStack(st);
    insertBottom(st, x);
}

int main() {
    int n;
    cin >> n;
    stack<int> st;
    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        st.push(x);
    }

    reverseStack(st);

    while (!st.empty()) {
        cout << st.top() << " ";
        st.pop();
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
- Line 4: `void insertBottom(stack<int>& st, int x) {`
  Explaination: Function declaration/definition header specifying return type, name, and parameters.
- Line 5: `    if (st.empty()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 6: `        st.push(x);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 7: `        return;`
  Explaination: Executes a single statement that updates program state.
- Line 8: `    }`
  Explaination: Closes the current scope block.
- Line 9: `    int t = st.top(); st.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 10: `    insertBottom(st, x);`
  Explaination: Executes a single statement that updates program state.
- Line 11: `    st.push(t);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 12: `}`
  Explaination: Closes the current scope block.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `void reverseStack(stack<int>& st) {`
  Explaination: Function declaration/definition header specifying return type, name, and parameters.
- Line 15: `    if (st.empty()) return;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `    int x = st.top(); st.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 17: `    reverseStack(st);`
  Explaination: Executes a single statement that updates program state.
- Line 18: `    insertBottom(st, x);`
  Explaination: Executes a single statement that updates program state.
- Line 19: `}`
  Explaination: Closes the current scope block.
- Line 20: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 21: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 22: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 23: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 24: `    stack<int> st;`
  Explaination: Declares a stack (LIFO structure).
- Line 25: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 26: `        int x; cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 27: `        st.push(x);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 28: `    }`
  Explaination: Closes the current scope block.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    reverseStack(st);`
  Explaination: Executes a single statement that updates program state.
- Line 31: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 32: `    while (!st.empty()) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 33: `        cout << st.top() << " ";`
  Explaination: Prints formatted output to standard output.
- Line 34: `        st.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 35: `    }`
  Explaination: Closes the current scope block.
- Line 36: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 37: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 38: `}`
  Explaination: Closes the current scope block.

## Block 24: Q24. Validate Stack Sequences

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> pushed(n), popped(n);
    for (auto &x : pushed) cin >> x;
    for (auto &x : popped) cin >> x;

    stack<int> st;
    int j = 0;

    for (int x : pushed) {
        st.push(x);
        while (!st.empty() && j < n && st.top() == popped[j]) {
            st.pop();
            j++;
        }
    }

    cout << (j == n ? "Yes" : "No") << "\n";
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
- Line 7: `    vector<int> pushed(n), popped(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &x : pushed) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: `    for (auto &x : popped) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    stack<int> st;`
  Explaination: Declares a stack (LIFO structure).
- Line 12: `    int j = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    for (int x : pushed) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        st.push(x);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 16: `        while (!st.empty() && j < n && st.top() == popped[j]) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 17: `            st.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 18: `            j++;`
  Explaination: Executes a single statement that updates program state.
- Line 19: `        }`
  Explaination: Closes the current scope block.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    cout << (j == n ? "Yes" : "No") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 23: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 24: `}`
  Explaination: Closes the current scope block.

## Block 25: Q25. Story-Based Browser Navigation (Back/Forward)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int q;
    cin >> q;

    stack<string> backSt, fwdSt;
    string cur = "home";

    while (q--) {
        string op;
        cin >> op;

        if (op == "VISIT") {
            string url;
            cin >> url;
            backSt.push(cur);
            cur = url;
            while (!fwdSt.empty()) fwdSt.pop();
        } else if (op == "BACK") {
            if (!backSt.empty()) {
                fwdSt.push(cur);
                cur = backSt.top(); backSt.pop();
            }
            cout << cur << "\n";
        } else if (op == "FORWARD") {
            if (!fwdSt.empty()) {
                backSt.push(cur);
                cur = fwdSt.top(); fwdSt.pop();
            }
            cout << cur << "\n";
        } else {
            cout << cur << "\n";
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
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 6: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    int q;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 9: `    cin >> q;`
  Explaination: Reads input values from standard input into variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    stack<string> backSt, fwdSt;`
  Explaination: Declares a stack (LIFO structure).
- Line 12: `    string cur = "home";`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    while (q--) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 15: `        string op;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 16: `        cin >> op;`
  Explaination: Reads input values from standard input into variables.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `        if (op == "VISIT") {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 19: `            string url;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 20: `            cin >> url;`
  Explaination: Reads input values from standard input into variables.
- Line 21: `            backSt.push(cur);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 22: `            cur = url;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 23: `            while (!fwdSt.empty()) fwdSt.pop();`
  Explaination: Loop that repeats while the given condition remains true.
- Line 24: `        } else if (op == "BACK") {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 25: `            if (!backSt.empty()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 26: `                fwdSt.push(cur);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 27: `                cur = backSt.top(); backSt.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 28: `            }`
  Explaination: Closes the current scope block.
- Line 29: `            cout << cur << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 30: `        } else if (op == "FORWARD") {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 31: `            if (!fwdSt.empty()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 32: `                backSt.push(cur);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 33: `                cur = fwdSt.top(); fwdSt.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 34: `            }`
  Explaination: Closes the current scope block.
- Line 35: `            cout << cur << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 36: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 37: `            cout << cur << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 38: `        }`
  Explaination: Closes the current scope block.
- Line 39: `    }`
  Explaination: Closes the current scope block.
- Line 40: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 41: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 42: `}`
  Explaination: Closes the current scope block.
