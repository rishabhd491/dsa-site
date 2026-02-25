# TCS_NQT_Queue_Full_Questions_Answers_CPP.md: Line-by-Line Code Explaination

This file explains each C++ code block line-by-line from the source topic file.

## Block 1: Q1. Implement Queue Using Circular Array

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

class CQueue {
    vector<long long> a;
    int head = 0, tail = 0, sz = 0, cap;
public:
    CQueue(int c): a(c), cap(c) {}
    bool enqueue(long long x) {
        if (sz == cap) return false;
        a[tail] = x;
        tail = (tail + 1) % cap;
        sz++;
        return true;
    }
    long long dequeue() {
        if (sz == 0) return -1;
        long long x = a[head];
        head = (head + 1) % cap;
        sz--;
        return x;
    }
    long long front() const { return sz ? a[head] : -1; }
    int size() const { return sz; }
};

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int cap, q;
    cin >> cap >> q;
    CQueue qu(cap);

    while (q--) {
        string op;
        cin >> op;
        if (op == "ENQUEUE") {
            long long x;
            cin >> x;
            qu.enqueue(x);
        } else if (op == "DEQUEUE") cout << qu.dequeue() << "\n";
        else if (op == "FRONT") cout << qu.front() << "\n";
        else cout << qu.size() << "\n";
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
- Line 4: `class CQueue {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 5: `    vector<long long> a;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 6: `    int head = 0, tail = 0, sz = 0, cap;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `public:`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 8: `    CQueue(int c): a(c), cap(c) {}`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 9: `    bool enqueue(long long x) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: `        if (sz == cap) return false;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 11: `        a[tail] = x;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: `        tail = (tail + 1) % cap;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 13: `        sz++;`
  Explaination: Executes a single statement that updates program state.
- Line 14: `        return true;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: `    long long dequeue() {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: `        if (sz == 0) return -1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 18: `        long long x = a[head];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `        head = (head + 1) % cap;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `        sz--;`
  Explaination: Executes a single statement that updates program state.
- Line 21: `        return x;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 22: `    }`
  Explaination: Closes the current scope block.
- Line 23: `    long long front() const { return sz ? a[head] : -1; }`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 24: `    int size() const { return sz; }`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 25: `};`
  Explaination: Closes the current class/struct/initializer block.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 28: `    ios::sync_with_stdio(false);`
  Explaination: Speeds up input/output by disabling synchronization with C stdio.
- Line 29: `    cin.tie(nullptr);`
  Explaination: Unties `cin` from `cout` to avoid unnecessary flushes during input.
- Line 30: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 31: `    int cap, q;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 32: `    cin >> cap >> q;`
  Explaination: Reads input values from standard input into variables.
- Line 33: `    CQueue qu(cap);`
  Explaination: Executes a single statement that updates program state.
- Line 34: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 35: `    while (q--) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 36: `        string op;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 37: `        cin >> op;`
  Explaination: Reads input values from standard input into variables.
- Line 38: `        if (op == "ENQUEUE") {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 39: `            long long x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 40: `            cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 41: `            qu.enqueue(x);`
  Explaination: Executes a single statement that updates program state.
- Line 42: `        } else if (op == "DEQUEUE") cout << qu.dequeue() << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 43: `        else if (op == "FRONT") cout << qu.front() << "\n";`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 44: `        else cout << qu.size() << "\n";`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 45: `    }`
  Explaination: Closes the current scope block.
- Line 46: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 47: `}`
  Explaination: Closes the current scope block.

## Block 2: Q2. Implement Queue Using Linked List

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

struct Node {
    long long val;
    Node* next;
    Node(long long v): val(v), next(nullptr) {}
};

class QueueLL {
    Node* f = nullptr;
    Node* b = nullptr;
    int sz = 0;
public:
    void enqueue(long long x) {
        Node* n = new Node(x);
        if (!b) f = b = n;
        else {
            b->next = n;
            b = n;
        }
        sz++;
    }
    long long dequeue() {
        if (!f) return -1;
        long long x = f->val;
        Node* t = f;
        f = f->next;
        if (!f) b = nullptr;
        delete t;
        sz--;
        return x;
    }
    long long front() const { return f ? f->val : -1; }
    int size() const { return sz; }
};

int main() {
    int q;
    cin >> q;
    QueueLL qu;

    while (q--) {
        string op;
        cin >> op;
        if (op == "ENQUEUE") {
            long long x;
            cin >> x;
            qu.enqueue(x);
        } else if (op == "DEQUEUE") cout << qu.dequeue() << "\n";
        else if (op == "FRONT") cout << qu.front() << "\n";
        else cout << qu.size() << "\n";
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
- Line 10: `class QueueLL {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 11: `    Node* f = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: `    Node* b = nullptr;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 13: `    int sz = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `public:`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 15: `    void enqueue(long long x) {`
  Explaination: Function declaration/definition header specifying return type, name, and parameters.
- Line 16: `        Node* n = new Node(x);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: `        if (!b) f = b = n;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 18: `        else {`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 19: `            b->next = n;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `            b = n;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: `        }`
  Explaination: Closes the current scope block.
- Line 22: `        sz++;`
  Explaination: Executes a single statement that updates program state.
- Line 23: `    }`
  Explaination: Closes the current scope block.
- Line 24: `    long long dequeue() {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 25: `        if (!f) return -1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 26: `        long long x = f->val;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 27: `        Node* t = f;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 28: `        f = f->next;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 29: `        if (!f) b = nullptr;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 30: `        delete t;`
  Explaination: Executes a single statement that updates program state.
- Line 31: `        sz--;`
  Explaination: Executes a single statement that updates program state.
- Line 32: `        return x;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 33: `    }`
  Explaination: Closes the current scope block.
- Line 34: `    long long front() const { return f ? f->val : -1; }`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 35: `    int size() const { return sz; }`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 36: `};`
  Explaination: Closes the current class/struct/initializer block.
- Line 37: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 38: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 39: `    int q;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 40: `    cin >> q;`
  Explaination: Reads input values from standard input into variables.
- Line 41: `    QueueLL qu;`
  Explaination: Executes a single statement that updates program state.
- Line 42: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 43: `    while (q--) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 44: `        string op;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 45: `        cin >> op;`
  Explaination: Reads input values from standard input into variables.
- Line 46: `        if (op == "ENQUEUE") {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 47: `            long long x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 48: `            cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 49: `            qu.enqueue(x);`
  Explaination: Executes a single statement that updates program state.
- Line 50: `        } else if (op == "DEQUEUE") cout << qu.dequeue() << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 51: `        else if (op == "FRONT") cout << qu.front() << "\n";`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 52: `        else cout << qu.size() << "\n";`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 53: `    }`
  Explaination: Closes the current scope block.
- Line 54: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 55: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 56: `}`
  Explaination: Closes the current scope block.

## Block 3: Q3. Queue Using Two Stacks

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

class Queue2Stacks {
    stack<long long> in, out;
    void shift() {
        if (out.empty()) {
            while (!in.empty()) {
                out.push(in.top());
                in.pop();
            }
        }
    }
public:
    void enqueue(long long x) { in.push(x); }
    long long dequeue() {
        shift();
        if (out.empty()) return -1;
        long long x = out.top(); out.pop();
        return x;
    }
    long long front() {
        shift();
        return out.empty() ? -1 : out.top();
    }
};

int main() {
    int q;
    cin >> q;
    Queue2Stacks qu;

    while (q--) {
        string op;
        cin >> op;
        if (op == "ENQUEUE") {
            long long x;
            cin >> x;
            qu.enqueue(x);
        } else if (op == "DEQUEUE") cout << qu.dequeue() << "\n";
        else cout << qu.front() << "\n";
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
- Line 4: `class Queue2Stacks {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 5: `    stack<long long> in, out;`
  Explaination: Declares a stack (LIFO structure).
- Line 6: `    void shift() {`
  Explaination: Function declaration/definition header specifying return type, name, and parameters.
- Line 7: `        if (out.empty()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 8: `            while (!in.empty()) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 9: `                out.push(in.top());`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 10: `                in.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 11: `            }`
  Explaination: Closes the current scope block.
- Line 12: `        }`
  Explaination: Closes the current scope block.
- Line 13: `    }`
  Explaination: Closes the current scope block.
- Line 14: `public:`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 15: `    void enqueue(long long x) { in.push(x); }`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 16: `    long long dequeue() {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: `        shift();`
  Explaination: Executes a single statement that updates program state.
- Line 18: `        if (out.empty()) return -1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 19: `        long long x = out.top(); out.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 20: `        return x;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 21: `    }`
  Explaination: Closes the current scope block.
- Line 22: `    long long front() {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 23: `        shift();`
  Explaination: Executes a single statement that updates program state.
- Line 24: `        return out.empty() ? -1 : out.top();`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 25: `    }`
  Explaination: Closes the current scope block.
- Line 26: `};`
  Explaination: Closes the current class/struct/initializer block.
- Line 27: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 28: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 29: `    int q;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 30: `    cin >> q;`
  Explaination: Reads input values from standard input into variables.
- Line 31: `    Queue2Stacks qu;`
  Explaination: Executes a single statement that updates program state.
- Line 32: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 33: `    while (q--) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 34: `        string op;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 35: `        cin >> op;`
  Explaination: Reads input values from standard input into variables.
- Line 36: `        if (op == "ENQUEUE") {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 37: `            long long x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 38: `            cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 39: `            qu.enqueue(x);`
  Explaination: Executes a single statement that updates program state.
- Line 40: `        } else if (op == "DEQUEUE") cout << qu.dequeue() << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 41: `        else cout << qu.front() << "\n";`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 42: `    }`
  Explaination: Closes the current scope block.
- Line 43: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 44: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 45: `}`
  Explaination: Closes the current scope block.

## Block 4: Q4. Stack Using Two Queues

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

class Stack2Queues {
    queue<long long> q1, q2;
public:
    void push(long long x) {
        q2.push(x);
        while (!q1.empty()) {
            q2.push(q1.front());
            q1.pop();
        }
        swap(q1, q2);
    }
    long long pop() {
        if (q1.empty()) return -1;
        long long x = q1.front(); q1.pop();
        return x;
    }
    long long top() {
        if (q1.empty()) return -1;
        return q1.front();
    }
};

int main() {
    int q;
    cin >> q;
    Stack2Queues st;

    while (q--) {
        string op;
        cin >> op;
        if (op == "PUSH") {
            long long x;
            cin >> x;
            st.push(x);
        } else if (op == "POP") cout << st.pop() << "\n";
        else cout << st.top() << "\n";
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
- Line 4: `class Stack2Queues {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 5: `    queue<long long> q1, q2;`
  Explaination: Declares a queue (FIFO structure).
- Line 6: `public:`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 7: `    void push(long long x) {`
  Explaination: Function declaration/definition header specifying return type, name, and parameters.
- Line 8: `        q2.push(x);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 9: `        while (!q1.empty()) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 10: `            q2.push(q1.front());`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 11: `            q1.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 12: `        }`
  Explaination: Closes the current scope block.
- Line 13: `        swap(q1, q2);`
  Explaination: Executes a single statement that updates program state.
- Line 14: `    }`
  Explaination: Closes the current scope block.
- Line 15: `    long long pop() {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 16: `        if (q1.empty()) return -1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `        long long x = q1.front(); q1.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 18: `        return x;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 19: `    }`
  Explaination: Closes the current scope block.
- Line 20: `    long long top() {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: `        if (q1.empty()) return -1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 22: `        return q1.front();`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 23: `    }`
  Explaination: Closes the current scope block.
- Line 24: `};`
  Explaination: Closes the current class/struct/initializer block.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 27: `    int q;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 28: `    cin >> q;`
  Explaination: Reads input values from standard input into variables.
- Line 29: `    Stack2Queues st;`
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
- Line 39: `        else cout << st.top() << "\n";`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 40: `    }`
  Explaination: Closes the current scope block.
- Line 41: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 42: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 43: `}`
  Explaination: Closes the current scope block.

## Block 5: Q5. Design Circular Queue

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

class MyCircularQueue {
    vector<int> a;
    int h = 0, t = 0, sz = 0, cap;
public:
    MyCircularQueue(int k): a(k), cap(k) {}
    bool enQueue(int x) {
        if (sz == cap) return false;
        a[t] = x;
        t = (t + 1) % cap;
        sz++;
        return true;
    }
    bool deQueue() {
        if (sz == 0) return false;
        h = (h + 1) % cap;
        sz--;
        return true;
    }
    int Front() const { return sz ? a[h] : -1; }
    int Rear() const { return sz ? a[(t - 1 + cap) % cap] : -1; }
    bool isFull() const { return sz == cap; }
    bool isEmpty() const { return sz == 0; }
};

int main() {
    int k, q;
    cin >> k >> q;
    MyCircularQueue qu(k);

    while (q--) {
        string op;
        cin >> op;
        if (op == "ENQUEUE") {
            int x; cin >> x;
            cout << (qu.enQueue(x) ? "true" : "false") << "\n";
        } else if (op == "DEQUEUE") cout << (qu.deQueue() ? "true" : "false") << "\n";
        else if (op == "FRONT") cout << qu.Front() << "\n";
        else if (op == "REAR") cout << qu.Rear() << "\n";
        else if (op == "ISFULL") cout << (qu.isFull() ? "true" : "false") << "\n";
        else cout << (qu.isEmpty() ? "true" : "false") << "\n";
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
- Line 4: `class MyCircularQueue {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 5: `    vector<int> a;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 6: `    int h = 0, t = 0, sz = 0, cap;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `public:`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 8: `    MyCircularQueue(int k): a(k), cap(k) {}`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 9: `    bool enQueue(int x) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: `        if (sz == cap) return false;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 11: `        a[t] = x;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: `        t = (t + 1) % cap;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 13: `        sz++;`
  Explaination: Executes a single statement that updates program state.
- Line 14: `        return true;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: `    bool deQueue() {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: `        if (sz == 0) return false;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 18: `        h = (h + 1) % cap;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `        sz--;`
  Explaination: Executes a single statement that updates program state.
- Line 20: `        return true;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 21: `    }`
  Explaination: Closes the current scope block.
- Line 22: `    int Front() const { return sz ? a[h] : -1; }`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 23: `    int Rear() const { return sz ? a[(t - 1 + cap) % cap] : -1; }`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 24: `    bool isFull() const { return sz == cap; }`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 25: `    bool isEmpty() const { return sz == 0; }`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 26: `};`
  Explaination: Closes the current class/struct/initializer block.
- Line 27: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 28: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 29: `    int k, q;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 30: `    cin >> k >> q;`
  Explaination: Reads input values from standard input into variables.
- Line 31: `    MyCircularQueue qu(k);`
  Explaination: Executes a single statement that updates program state.
- Line 32: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 33: `    while (q--) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 34: `        string op;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 35: `        cin >> op;`
  Explaination: Reads input values from standard input into variables.
- Line 36: `        if (op == "ENQUEUE") {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 37: `            int x; cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 38: `            cout << (qu.enQueue(x) ? "true" : "false") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 39: `        } else if (op == "DEQUEUE") cout << (qu.deQueue() ? "true" : "false") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 40: `        else if (op == "FRONT") cout << qu.Front() << "\n";`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 41: `        else if (op == "REAR") cout << qu.Rear() << "\n";`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 42: `        else if (op == "ISFULL") cout << (qu.isFull() ? "true" : "false") << "\n";`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 43: `        else cout << (qu.isEmpty() ? "true" : "false") << "\n";`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 44: `    }`
  Explaination: Closes the current scope block.
- Line 45: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 46: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 47: `}`
  Explaination: Closes the current scope block.

## Block 6: Q6. First Non-Repeating Character in Stream

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin >> s;

    vector<int> freq(256, 0);
    queue<char> q;
    string out;

    for (char c : s) {
        freq[(unsigned char)c]++;
        q.push(c);

        while (!q.empty() && freq[(unsigned char)q.front()] > 1) q.pop();
        out.push_back(q.empty() ? '#' : q.front());
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
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    string s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 6: `    cin >> s;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    vector<int> freq(256, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 9: `    queue<char> q;`
  Explaination: Declares a queue (FIFO structure).
- Line 10: `    string out;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    for (char c : s) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        freq[(unsigned char)c]++;`
  Explaination: Executes a single statement that updates program state.
- Line 14: `        q.push(c);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `        while (!q.empty() && freq[(unsigned char)q.front()] > 1) q.pop();`
  Explaination: Loop that repeats while the given condition remains true.
- Line 17: `        out.push_back(q.empty() ? '#' : q.front());`
  Explaination: Appends a new element to the end of the container.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    cout << out << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 21: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 22: `}`
  Explaination: Closes the current scope block.

## Block 7: Q7. Reverse First K Elements of Queue

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    queue<int> q;
    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        q.push(x);
    }

    if (k > n) k = n;
    stack<int> st;

    for (int i = 0; i < k; i++) {
        st.push(q.front());
        q.pop();
    }

    while (!st.empty()) {
        q.push(st.top());
        st.pop();
    }

    for (int i = 0; i < n - k; i++) {
        q.push(q.front());
        q.pop();
    }

    while (!q.empty()) {
        cout << q.front() << " ";
        q.pop();
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
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    queue<int> q;`
  Explaination: Declares a queue (FIFO structure).
- Line 9: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: `        int x; cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 11: `        q.push(x);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 12: `    }`
  Explaination: Closes the current scope block.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    if (k > n) k = n;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: `    stack<int> st;`
  Explaination: Declares a stack (LIFO structure).
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    for (int i = 0; i < k; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 18: `        st.push(q.front());`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 19: `        q.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    while (!st.empty()) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 23: `        q.push(st.top());`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 24: `        st.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 25: `    }`
  Explaination: Closes the current scope block.
- Line 26: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 27: `    for (int i = 0; i < n - k; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 28: `        q.push(q.front());`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 29: `        q.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 30: `    }`
  Explaination: Closes the current scope block.
- Line 31: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 32: `    while (!q.empty()) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 33: `        cout << q.front() << " ";`
  Explaination: Prints formatted output to standard output.
- Line 34: `        q.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 35: `    }`
  Explaination: Closes the current scope block.
- Line 36: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 37: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 38: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 39: `}`
  Explaination: Closes the current scope block.

## Block 8: Q8. Interleave First and Second Half of Queue

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    queue<int> q;
    for (int i = 0; i < n; i++) {
        int x; cin >> x;
        q.push(x);
    }

    queue<int> first;
    for (int i = 0; i < n / 2; i++) {
        first.push(q.front());
        q.pop();
    }

    queue<int> ans;
    while (!first.empty()) {
        ans.push(first.front()); first.pop();
        ans.push(q.front()); q.pop();
    }

    while (!ans.empty()) {
        cout << ans.front() << " ";
        ans.pop();
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
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    queue<int> q;`
  Explaination: Declares a queue (FIFO structure).
- Line 8: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: `        int x; cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 10: `        q.push(x);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 11: `    }`
  Explaination: Closes the current scope block.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    queue<int> first;`
  Explaination: Declares a queue (FIFO structure).
- Line 14: `    for (int i = 0; i < n / 2; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        first.push(q.front());`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 16: `        q.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 17: `    }`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    queue<int> ans;`
  Explaination: Declares a queue (FIFO structure).
- Line 20: `    while (!first.empty()) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 21: `        ans.push(first.front()); first.pop();`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 22: `        ans.push(q.front()); q.pop();`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 23: `    }`
  Explaination: Closes the current scope block.
- Line 24: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 25: `    while (!ans.empty()) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 26: `        cout << ans.front() << " ";`
  Explaination: Prints formatted output to standard output.
- Line 27: `        ans.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 28: `    }`
  Explaination: Closes the current scope block.
- Line 29: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 30: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 31: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 32: `}`
  Explaination: Closes the current scope block.

## Block 9: Q9. Generate Binary Numbers from 1 to N

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;

    queue<string> q;
    q.push("1");

    for (int i = 0; i < n; i++) {
        string cur = q.front(); q.pop();
        cout << cur << " ";
        q.push(cur + "0");
        q.push(cur + "1");
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
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    queue<string> q;`
  Explaination: Declares a queue (FIFO structure).
- Line 9: `    q.push("1");`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        string cur = q.front(); q.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 13: `        cout << cur << " ";`
  Explaination: Prints formatted output to standard output.
- Line 14: `        q.push(cur + "0");`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 15: `        q.push(cur + "1");`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 20: `}`
  Explaination: Closes the current scope block.

## Block 10: Q10. Sliding Window Maximum (Deque)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;
    vector<int> a(n);
    for (auto &x : a) cin >> x;

    deque<int> dq;
    for (int i = 0; i < n; i++) {
        while (!dq.empty() && dq.front() <= i - k) dq.pop_front();
        while (!dq.empty() && a[dq.back()] <= a[i]) dq.pop_back();
        dq.push_back(i);

        if (i >= k - 1) cout << a[dq.front()] << " ";
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
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    deque<int> dq;`
  Explaination: Declares a double-ended queue.
- Line 11: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        while (!dq.empty() && dq.front() <= i - k) dq.pop_front();`
  Explaination: Loop that repeats while the given condition remains true.
- Line 13: `        while (!dq.empty() && a[dq.back()] <= a[i]) dq.pop_back();`
  Explaination: Loop that repeats while the given condition remains true.
- Line 14: `        dq.push_back(i);`
  Explaination: Appends a new element to the end of the container.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `        if (i >= k - 1) cout << a[dq.front()] << " ";`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `    }`
  Explaination: Closes the current scope block.
- Line 18: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 21: `}`
  Explaination: Closes the current scope block.

## Block 11: Q11. First Negative in Every Window

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;
    vector<long long> a(n);
    for (auto &x : a) cin >> x;

    deque<int> dq;
    for (int i = 0; i < n; i++) {
        if (a[i] < 0) dq.push_back(i);
        if (i >= k - 1) {
            while (!dq.empty() && dq.front() <= i - k) dq.pop_front();
            cout << (dq.empty() ? 0 : a[dq.front()]) << " ";
        }
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
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<long long> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    deque<int> dq;`
  Explaination: Declares a double-ended queue.
- Line 11: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        if (a[i] < 0) dq.push_back(i);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: `        if (i >= k - 1) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `            while (!dq.empty() && dq.front() <= i - k) dq.pop_front();`
  Explaination: Loop that repeats while the given condition remains true.
- Line 15: `            cout << (dq.empty() ? 0 : a[dq.front()]) << " ";`
  Explaination: Prints formatted output to standard output.
- Line 16: `        }`
  Explaination: Closes the current scope block.
- Line 17: `    }`
  Explaination: Closes the current scope block.
- Line 18: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 21: `}`
  Explaination: Closes the current scope block.

## Block 12: Q12. Sum of Min and Max in Every Window

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;
    vector<int> a(n);
    for (auto &x : a) cin >> x;

    deque<int> mx, mn;
    long long ans = 0;

    for (int i = 0; i < n; i++) {
        while (!mx.empty() && mx.front() <= i - k) mx.pop_front();
        while (!mn.empty() && mn.front() <= i - k) mn.pop_front();

        while (!mx.empty() && a[mx.back()] <= a[i]) mx.pop_back();
        while (!mn.empty() && a[mn.back()] >= a[i]) mn.pop_back();

        mx.push_back(i);
        mn.push_back(i);

        if (i >= k - 1) ans += a[mx.front()] + a[mn.front()];
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
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<int> a(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &x : a) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    deque<int> mx, mn;`
  Explaination: Declares a double-ended queue.
- Line 11: `    long long ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `        while (!mx.empty() && mx.front() <= i - k) mx.pop_front();`
  Explaination: Loop that repeats while the given condition remains true.
- Line 15: `        while (!mn.empty() && mn.front() <= i - k) mn.pop_front();`
  Explaination: Loop that repeats while the given condition remains true.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `        while (!mx.empty() && a[mx.back()] <= a[i]) mx.pop_back();`
  Explaination: Loop that repeats while the given condition remains true.
- Line 18: `        while (!mn.empty() && a[mn.back()] >= a[i]) mn.pop_back();`
  Explaination: Loop that repeats while the given condition remains true.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `        mx.push_back(i);`
  Explaination: Appends a new element to the end of the container.
- Line 21: `        mn.push_back(i);`
  Explaination: Appends a new element to the end of the container.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `        if (i >= k - 1) ans += a[mx.front()] + a[mn.front()];`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 24: `    }`
  Explaination: Closes the current scope block.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 27: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 28: `}`
  Explaination: Closes the current scope block.

## Block 13: Q13. Rotting Oranges (BFS)

### Original Code
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int r, c;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> r >> c;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<vector<int>> g(r, vector<int>(c));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    queue<pair<int,int>> q;`
  Explaination: Declares a queue (FIFO structure).
- Line 10: `    int fresh = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    for (int i = 0; i < r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        for (int j = 0; j < c; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 14: `            cin >> g[i][j];`
  Explaination: Reads input values from standard input into variables.
- Line 15: `            if (g[i][j] == 2) q.push({i,j});`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 16: `            else if (g[i][j] == 1) fresh++;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `        }`
  Explaination: Closes the current scope block.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    int mins = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: `    int dr[4] = {1,-1,0,0};`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 22: `    int dc[4] = {0,0,1,-1};`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 23: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 24: `    while (!q.empty() && fresh > 0) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 25: `        int sz = q.size();`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 26: `        mins++;`
  Explaination: Executes a single statement that updates program state.
- Line 27: `        while (sz--) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 28: `            auto [x,y] = q.front(); q.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 29: `            for (int k = 0; k < 4; k++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 30: `                int nx = x + dr[k], ny = y + dc[k];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 31: `                if (nx>=0 && nx<r && ny>=0 && ny<c && g[nx][ny]==1) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 32: `                    g[nx][ny]=2;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 33: `                    fresh--;`
  Explaination: Executes a single statement that updates program state.
- Line 34: `                    q.push({nx,ny});`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 35: `                }`
  Explaination: Closes the current scope block.
- Line 36: `            }`
  Explaination: Closes the current scope block.
- Line 37: `        }`
  Explaination: Closes the current scope block.
- Line 38: `    }`
  Explaination: Closes the current scope block.
- Line 39: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 40: `    cout << (fresh==0 ? mins : -1) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 41: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 42: `}`
  Explaination: Closes the current scope block.

## Block 14: Q14. 01 Matrix (Nearest Zero Distance)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;
    vector<vector<int>> g(r, vector<int>(c)), dist(r, vector<int>(c, INT_MAX));

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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int r, c;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> r >> c;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<vector<int>> g(r, vector<int>(c)), dist(r, vector<int>(c, INT_MAX));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    queue<pair<int,int>> q;`
  Explaination: Declares a queue (FIFO structure).
- Line 10: `    for (int i = 0; i < r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: `        for (int j = 0; j < c; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `            cin >> g[i][j];`
  Explaination: Reads input values from standard input into variables.
- Line 13: `            if (g[i][j] == 0) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `                dist[i][j] = 0;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `                q.push({i,j});`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 16: `            }`
  Explaination: Closes the current scope block.
- Line 17: `        }`
  Explaination: Closes the current scope block.
- Line 18: `    }`
  Explaination: Closes the current scope block.
- Line 19: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 20: `    int dr[4] = {1,-1,0,0};`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: `    int dc[4] = {0,0,1,-1};`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `    while (!q.empty()) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 24: `        auto [x,y] = q.front(); q.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 25: `        for (int k = 0; k < 4; k++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 26: `            int nx = x + dr[k], ny = y + dc[k];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 27: `            if (nx>=0 && nx<r && ny>=0 && ny<c && dist[nx][ny] > dist[x][y] + 1) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 28: `                dist[nx][ny] = dist[x][y] + 1;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 29: `                q.push({nx,ny});`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 30: `            }`
  Explaination: Closes the current scope block.
- Line 31: `        }`
  Explaination: Closes the current scope block.
- Line 32: `    }`
  Explaination: Closes the current scope block.
- Line 33: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 34: `    for (int i = 0; i < r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 35: `        for (int j = 0; j < c; j++) cout << dist[i][j] << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 36: `        cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 37: `    }`
  Explaination: Closes the current scope block.
- Line 38: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 39: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 40: `}`
  Explaination: Closes the current scope block.

## Block 15: Q15. Flood Fill (BFS)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;
    vector<vector<int>> img(r, vector<int>(c));
    for (int i = 0; i < r; i++) for (int j = 0; j < c; j++) cin >> img[i][j];

    int sr, sc, color;
    cin >> sr >> sc >> color;

    int old = img[sr][sc];
    if (old != color) {
        queue<pair<int,int>> q;
        q.push({sr,sc});
        img[sr][sc] = color;

        int dr[4] = {1,-1,0,0};
        int dc[4] = {0,0,1,-1};

        while (!q.empty()) {
            auto [x,y] = q.front(); q.pop();
            for (int k = 0; k < 4; k++) {
                int nx = x + dr[k], ny = y + dc[k];
                if (nx>=0 && nx<r && ny>=0 && ny<c && img[nx][ny]==old) {
                    img[nx][ny] = color;
                    q.push({nx,ny});
                }
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

### Line-by-Line Explaination
- Line 1: `#include <bits/stdc++.h>`
  Explaination: Imports a standard library header required by this program.
- Line 2: `using namespace std;`
  Explaination: Allows using standard library names without the `std::` prefix.
- Line 3: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int r, c;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> r >> c;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<vector<int>> img(r, vector<int>(c));`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (int i = 0; i < r; i++) for (int j = 0; j < c; j++) cin >> img[i][j];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    int sr, sc, color;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    cin >> sr >> sc >> color;`
  Explaination: Reads input values from standard input into variables.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `    int old = img[sr][sc];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `    if (old != color) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 15: `        queue<pair<int,int>> q;`
  Explaination: Declares a queue (FIFO structure).
- Line 16: `        q.push({sr,sc});`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 17: `        img[sr][sc] = color;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `        int dr[4] = {1,-1,0,0};`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 20: `        int dc[4] = {0,0,1,-1};`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `        while (!q.empty()) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 23: `            auto [x,y] = q.front(); q.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 24: `            for (int k = 0; k < 4; k++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 25: `                int nx = x + dr[k], ny = y + dc[k];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 26: `                if (nx>=0 && nx<r && ny>=0 && ny<c && img[nx][ny]==old) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 27: `                    img[nx][ny] = color;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 28: `                    q.push({nx,ny});`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 29: `                }`
  Explaination: Closes the current scope block.
- Line 30: `            }`
  Explaination: Closes the current scope block.
- Line 31: `        }`
  Explaination: Closes the current scope block.
- Line 32: `    }`
  Explaination: Closes the current scope block.
- Line 33: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 34: `    for (int i = 0; i < r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 35: `        for (int j = 0; j < c; j++) cout << img[i][j] << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 36: `        cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 37: `    }`
  Explaination: Closes the current scope block.
- Line 38: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 39: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 40: `}`
  Explaination: Closes the current scope block.

## Block 16: Q16. Open the Lock (BFS)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

vector<string> nbrs(const string& s) {
    vector<string> out;
    for (int i = 0; i < 4; i++) {
        string t = s;
        t[i] = (s[i] == '9' ? '0' : s[i] + 1);
        out.push_back(t);
        t = s;
        t[i] = (s[i] == '0' ? '9' : s[i] - 1);
        out.push_back(t);
    }
    return out;
}

int main() {
    int d;
    cin >> d;
    unordered_set<string> dead;
    for (int i = 0; i < d; i++) {
        string x; cin >> x;
        dead.insert(x);
    }

    string target;
    cin >> target;

    if (dead.count("0000")) {
        cout << -1 << "\n";
        return 0;
    }

    queue<pair<string,int>> q;
    unordered_set<string> vis;
    q.push({"0000", 0});
    vis.insert("0000");

    while (!q.empty()) {
        auto [cur, dist] = q.front(); q.pop();
        if (cur == target) {
            cout << dist << "\n";
            return 0;
        }

        for (auto &nxt : nbrs(cur)) {
            if (!dead.count(nxt) && !vis.count(nxt)) {
                vis.insert(nxt);
                q.push({nxt, dist + 1});
            }
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
- Line 4: `vector<string> nbrs(const string& s) {`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 5: `    vector<string> out;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 6: `    for (int i = 0; i < 4; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 7: `        string t = s;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 8: `        t[i] = (s[i] == '9' ? '0' : s[i] + 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 9: `        out.push_back(t);`
  Explaination: Appends a new element to the end of the container.
- Line 10: `        t = s;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 11: `        t[i] = (s[i] == '0' ? '9' : s[i] - 1);`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 12: `        out.push_back(t);`
  Explaination: Appends a new element to the end of the container.
- Line 13: `    }`
  Explaination: Closes the current scope block.
- Line 14: `    return out;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 15: `}`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 18: `    int d;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 19: `    cin >> d;`
  Explaination: Reads input values from standard input into variables.
- Line 20: `    unordered_set<string> dead;`
  Explaination: Declares a hash set for fast membership checks.
- Line 21: `    for (int i = 0; i < d; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 22: `        string x; cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 23: `        dead.insert(x);`
  Explaination: Inserts element(s) at a specified position in a container.
- Line 24: `    }`
  Explaination: Closes the current scope block.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    string target;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 27: `    cin >> target;`
  Explaination: Reads input values from standard input into variables.
- Line 28: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 29: `    if (dead.count("0000")) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 30: `        cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 31: `        return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 32: `    }`
  Explaination: Closes the current scope block.
- Line 33: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 34: `    queue<pair<string,int>> q;`
  Explaination: Declares a queue (FIFO structure).
- Line 35: `    unordered_set<string> vis;`
  Explaination: Declares a hash set for fast membership checks.
- Line 36: `    q.push({"0000", 0});`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 37: `    vis.insert("0000");`
  Explaination: Inserts element(s) at a specified position in a container.
- Line 38: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 39: `    while (!q.empty()) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 40: `        auto [cur, dist] = q.front(); q.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 41: `        if (cur == target) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 42: `            cout << dist << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 43: `            return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 44: `        }`
  Explaination: Closes the current scope block.
- Line 45: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 46: `        for (auto &nxt : nbrs(cur)) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 47: `            if (!dead.count(nxt) && !vis.count(nxt)) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 48: `                vis.insert(nxt);`
  Explaination: Inserts element(s) at a specified position in a container.
- Line 49: `                q.push({nxt, dist + 1});`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 50: `            }`
  Explaination: Closes the current scope block.
- Line 51: `        }`
  Explaination: Closes the current scope block.
- Line 52: `    }`
  Explaination: Closes the current scope block.
- Line 53: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 54: `    cout << -1 << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 55: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 56: `}`
  Explaination: Closes the current scope block.

## Block 17: Q17. Recent Counter (Queue Design)

### Original Code
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

        qu.push(t);
        while (!qu.empty() && qu.front() < t - 3000) qu.pop();
        cout << qu.size() << "\n";
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
- Line 5: `    int q;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> q;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    queue<int> qu;`
  Explaination: Declares a queue (FIFO structure).
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    while (q--) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 10: `        int t;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `        cin >> t;`
  Explaination: Reads input values from standard input into variables.
- Line 12: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 13: `        qu.push(t);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 14: `        while (!qu.empty() && qu.front() < t - 3000) qu.pop();`
  Explaination: Loop that repeats while the given condition remains true.
- Line 15: `        cout << qu.size() << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 19: `}`
  Explaination: Closes the current scope block.

## Block 18: Q18. Time Needed to Buy Tickets

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;
    vector<int> t(n);
    for (auto &x : t) cin >> x;

    int ans = 0;
    for (int i = 0; i < n; i++) {
        if (i <= k) ans += min(t[i], t[k]);
        else ans += min(t[i], t[k] - 1);
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
- Line 4: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 5: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<int> t(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &x : t) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    int ans = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        if (i <= k) ans += min(t[i], t[k]);`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 13: `        else ans += min(t[i], t[k] - 1);`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 14: `    }`
  Explaination: Closes the current scope block.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    cout << ans << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 17: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 18: `}`
  Explaination: Closes the current scope block.

## Block 19: Q19. Josephus Problem (Queue Simulation)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    queue<int> q;
    for (int i = 1; i <= n; i++) q.push(i);

    while ((int)q.size() > 1) {
        for (int i = 1; i < k; i++) {
            q.push(q.front());
            q.pop();
        }
        q.pop();
    }

    cout << q.front() << "\n";
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
- Line 5: `    int n, k;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> k;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    queue<int> q;`
  Explaination: Declares a queue (FIFO structure).
- Line 9: `    for (int i = 1; i <= n; i++) q.push(i);`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    while ((int)q.size() > 1) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 12: `        for (int i = 1; i < k; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `            q.push(q.front());`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 14: `            q.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 15: `        }`
  Explaination: Closes the current scope block.
- Line 16: `        q.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 17: `    }`
  Explaination: Closes the current scope block.
- Line 18: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 19: `    cout << q.front() << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 20: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 21: `}`
  Explaination: Closes the current scope block.

## Block 20: Q20. Number of Islands (BFS)

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int r, c;
    cin >> r >> c;
    vector<string> g(r);
    for (int i = 0; i < r; i++) cin >> g[i];

    int islands = 0;
    int dr[4] = {1,-1,0,0};
    int dc[4] = {0,0,1,-1};

    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            if (g[i][j] != '1') continue;
            islands++;
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

    cout << islands << "\n";
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
- Line 5: `    int r, c;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> r >> c;`
  Explaination: Reads input values from standard input into variables.
- Line 7: `    vector<string> g(r);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (int i = 0; i < r; i++) cin >> g[i];`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    int islands = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `    int dr[4] = {1,-1,0,0};`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    int dc[4] = {0,0,1,-1};`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 14: `    for (int i = 0; i < r; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: `        for (int j = 0; j < c; j++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 16: `            if (g[i][j] != '1') continue;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 17: `            islands++;`
  Explaination: Executes a single statement that updates program state.
- Line 18: `            queue<pair<int,int>> q;`
  Explaination: Declares a queue (FIFO structure).
- Line 19: `            q.push({i,j});`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 20: `            g[i][j] = '0';`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `            while (!q.empty()) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 23: `                auto [x,y] = q.front(); q.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 24: `                for (int k = 0; k < 4; k++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 25: `                    int nx = x + dr[k], ny = y + dc[k];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 26: `                    if (nx>=0 && nx<r && ny>=0 && ny<c && g[nx][ny]=='1') {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 27: `                        g[nx][ny] = '0';`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 28: `                        q.push({nx,ny});`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 29: `                    }`
  Explaination: Closes the current scope block.
- Line 30: `                }`
  Explaination: Closes the current scope block.
- Line 31: `            }`
  Explaination: Closes the current scope block.
- Line 32: `        }`
  Explaination: Closes the current scope block.
- Line 33: `    }`
  Explaination: Closes the current scope block.
- Line 34: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 35: `    cout << islands << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 36: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 37: `}`
  Explaination: Closes the current scope block.

## Block 21: Q21. Moving Average from Data Stream

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int k, q;
    cin >> k >> q;

    queue<long long> qu;
    long long sum = 0;

    cout << fixed << setprecision(2);
    while (q--) {
        long long x;
        cin >> x;
        qu.push(x);
        sum += x;

        if ((int)qu.size() > k) {
            sum -= qu.front();
            qu.pop();
        }

        cout << (double)sum / qu.size() << "\n";
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
- Line 5: `    int k, q;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> k >> q;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    queue<long long> qu;`
  Explaination: Declares a queue (FIFO structure).
- Line 9: `    long long sum = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    cout << fixed << setprecision(2);`
  Explaination: Prints formatted output to standard output.
- Line 12: `    while (q--) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 13: `        long long x;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `        cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 15: `        qu.push(x);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 16: `        sum += x;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 17: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 18: `        if ((int)qu.size() > k) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 19: `            sum -= qu.front();`
  Explaination: Accesses the front element of a queue/deque.
- Line 20: `            qu.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 21: `        }`
  Explaination: Closes the current scope block.
- Line 22: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 23: `        cout << (double)sum / qu.size() << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 24: `    }`
  Explaination: Closes the current scope block.
- Line 25: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 26: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 27: `}`
  Explaination: Closes the current scope block.

## Block 22: Q22. Implement Deque using Array

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

class ArrDeque {
    vector<int> a;
    int h = 0, t = 0, sz = 0, cap;
public:
    ArrDeque(int c): a(c), cap(c) {}

    bool pushFront(int x) {
        if (sz == cap) return false;
        h = (h - 1 + cap) % cap;
        a[h] = x;
        sz++;
        return true;
    }
    bool pushBack(int x) {
        if (sz == cap) return false;
        a[t] = x;
        t = (t + 1) % cap;
        sz++;
        return true;
    }
    int popFront() {
        if (sz == 0) return -1;
        int x = a[h];
        h = (h + 1) % cap;
        sz--;
        return x;
    }
    int popBack() {
        if (sz == 0) return -1;
        t = (t - 1 + cap) % cap;
        int x = a[t];
        sz--;
        return x;
    }
    int front() const { return sz ? a[h] : -1; }
    int back() const { return sz ? a[(t - 1 + cap) % cap] : -1; }
};

int main() {
    int cap, q;
    cin >> cap >> q;
    ArrDeque dq(cap);

    while (q--) {
        string op;
        cin >> op;
        if (op == "PUSHFRONT") {
            int x; cin >> x;
            cout << (dq.pushFront(x) ? "true" : "false") << "\n";
        } else if (op == "PUSHBACK") {
            int x; cin >> x;
            cout << (dq.pushBack(x) ? "true" : "false") << "\n";
        } else if (op == "POPFRONT") cout << dq.popFront() << "\n";
        else if (op == "POPBACK") cout << dq.popBack() << "\n";
        else if (op == "FRONT") cout << dq.front() << "\n";
        else cout << dq.back() << "\n";
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
- Line 4: `class ArrDeque {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 5: `    vector<int> a;`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 6: `    int h = 0, t = 0, sz = 0, cap;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `public:`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 8: `    ArrDeque(int c): a(c), cap(c) {}`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 9: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 10: `    bool pushFront(int x) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 11: `        if (sz == cap) return false;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 12: `        h = (h - 1 + cap) % cap;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 13: `        a[h] = x;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 14: `        sz++;`
  Explaination: Executes a single statement that updates program state.
- Line 15: `        return true;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 16: `    }`
  Explaination: Closes the current scope block.
- Line 17: `    bool pushBack(int x) {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: `        if (sz == cap) return false;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 19: `        a[t] = x;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 20: `        t = (t + 1) % cap;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 21: `        sz++;`
  Explaination: Executes a single statement that updates program state.
- Line 22: `        return true;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 23: `    }`
  Explaination: Closes the current scope block.
- Line 24: `    int popFront() {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 25: `        if (sz == 0) return -1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 26: `        int x = a[h];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 27: `        h = (h + 1) % cap;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 28: `        sz--;`
  Explaination: Executes a single statement that updates program state.
- Line 29: `        return x;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 30: `    }`
  Explaination: Closes the current scope block.
- Line 31: `    int popBack() {`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 32: `        if (sz == 0) return -1;`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 33: `        t = (t - 1 + cap) % cap;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 34: `        int x = a[t];`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 35: `        sz--;`
  Explaination: Executes a single statement that updates program state.
- Line 36: `        return x;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 37: `    }`
  Explaination: Closes the current scope block.
- Line 38: `    int front() const { return sz ? a[h] : -1; }`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 39: `    int back() const { return sz ? a[(t - 1 + cap) % cap] : -1; }`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 40: `};`
  Explaination: Closes the current class/struct/initializer block.
- Line 41: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 42: `int main() {`
  Explaination: Program entry point where execution begins.
- Line 43: `    int cap, q;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 44: `    cin >> cap >> q;`
  Explaination: Reads input values from standard input into variables.
- Line 45: `    ArrDeque dq(cap);`
  Explaination: Executes a single statement that updates program state.
- Line 46: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 47: `    while (q--) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 48: `        string op;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 49: `        cin >> op;`
  Explaination: Reads input values from standard input into variables.
- Line 50: `        if (op == "PUSHFRONT") {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 51: `            int x; cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 52: `            cout << (dq.pushFront(x) ? "true" : "false") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 53: `        } else if (op == "PUSHBACK") {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 54: `            int x; cin >> x;`
  Explaination: Reads input values from standard input into variables.
- Line 55: `            cout << (dq.pushBack(x) ? "true" : "false") << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 56: `        } else if (op == "POPFRONT") cout << dq.popFront() << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 57: `        else if (op == "POPBACK") cout << dq.popBack() << "\n";`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 58: `        else if (op == "FRONT") cout << dq.front() << "\n";`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 59: `        else cout << dq.back() << "\n";`
  Explaination: Fallback branch executed when earlier `if`/`else if` conditions fail.
- Line 60: `    }`
  Explaination: Closes the current scope block.
- Line 61: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 62: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 63: `}`
  Explaination: Closes the current scope block.

## Block 23: Q23. Task Scheduler with Cooldown

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string tasks;
    int n;
    cin >> tasks >> n;

    vector<int> f(26, 0);
    for (char c : tasks) f[c - 'A']++;

    int mx = *max_element(f.begin(), f.end());
    int cnt = 0;
    for (int x : f) if (x == mx) cnt++;

    int part = (mx - 1) * (n + 1) + cnt;
    cout << max((int)tasks.size(), part) << "\n";
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
- Line 5: `    string tasks;`
  Explaination: Declares a string variable used for text storage/manipulation.
- Line 6: `    int n;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 7: `    cin >> tasks >> n;`
  Explaination: Reads input values from standard input into variables.
- Line 8: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 9: `    vector<int> f(26, 0);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 10: `    for (char c : tasks) f[c - 'A']++;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 11: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 12: `    int mx = *max_element(f.begin(), f.end());`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 13: `    int cnt = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 14: `    for (int x : f) if (x == mx) cnt++;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 15: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 16: `    int part = (mx - 1) * (n + 1) + cnt;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 17: `    cout << max((int)tasks.size(), part) << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 18: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 19: `}`
  Explaination: Closes the current scope block.

## Block 24: Q24. Story-Based Call Center Queue Simulation

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<long long> arr(n), srv(n), wait(n);
    for (auto &x : arr) cin >> x;
    for (auto &x : srv) cin >> x;

    long long finish = 0;
    for (int i = 0; i < n; i++) {
        if (finish <= arr[i]) {
            wait[i] = 0;
            finish = arr[i] + srv[i];
        } else {
            wait[i] = finish - arr[i];
            finish += srv[i];
        }
    }

    for (auto x : wait) cout << x << " ";
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
- Line 7: `    vector<long long> arr(n), srv(n), wait(n);`
  Explaination: Declares a dynamic array (vector), optionally with size and initial values.
- Line 8: `    for (auto &x : arr) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 9: `    for (auto &x : srv) cin >> x;`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    long long finish = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 12: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 13: `        if (finish <= arr[i]) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 14: `            wait[i] = 0;`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 15: `            finish = arr[i] + srv[i];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 16: `        } else {`
  Explaination: Performs this step as part of the algorithm's control or data flow.
- Line 17: `            wait[i] = finish - arr[i];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 18: `            finish += srv[i];`
  Explaination: Assigns computed value(s) to variable(s) for later use.
- Line 19: `        }`
  Explaination: Closes the current scope block.
- Line 20: `    }`
  Explaination: Closes the current scope block.
- Line 21: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 22: `    for (auto x : wait) cout << x << " ";`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 23: `    cout << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 24: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 25: `}`
  Explaination: Closes the current scope block.

## Block 25: Q25. Story-Based Print Queue Priority Simulation

### Original Code
```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int n, idx;
    cin >> n >> idx;

    queue<pair<int,int>> q;
    priority_queue<int> pq;

    for (int i = 0; i < n; i++) {
        int p; cin >> p;
        q.push({p, i});
        pq.push(p);
    }

    int time = 0;
    while (!q.empty()) {
        auto cur = q.front(); q.pop();
        if (cur.first == pq.top()) {
            time++;
            pq.pop();
            if (cur.second == idx) {
                cout << time << "\n";
                return 0;
            }
        } else q.push(cur);
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
- Line 5: `    int n, idx;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 6: `    cin >> n >> idx;`
  Explaination: Reads input values from standard input into variables.
- Line 7: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 8: `    queue<pair<int,int>> q;`
  Explaination: Declares a queue (FIFO structure).
- Line 9: `    priority_queue<int> pq;`
  Explaination: Declares a heap-based priority queue.
- Line 10: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 11: `    for (int i = 0; i < n; i++) {`
  Explaination: Loop that iterates over a range of values while updating loop variables.
- Line 12: `        int p; cin >> p;`
  Explaination: Reads input values from standard input into variables.
- Line 13: `        q.push({p, i});`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 14: `        pq.push(p);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 15: `    }`
  Explaination: Closes the current scope block.
- Line 16: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 17: `    int time = 0;`
  Explaination: Declares primitive variable(s), optionally with initialization.
- Line 18: `    while (!q.empty()) {`
  Explaination: Loop that repeats while the given condition remains true.
- Line 19: `        auto cur = q.front(); q.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 20: `        if (cur.first == pq.top()) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 21: `            time++;`
  Explaination: Executes a single statement that updates program state.
- Line 22: `            pq.pop();`
  Explaination: Removes the next element from stack/queue/priority-queue.
- Line 23: `            if (cur.second == idx) {`
  Explaination: Checks a condition and executes this branch when the condition is true.
- Line 24: `                cout << time << "\n";`
  Explaination: Prints formatted output to standard output.
- Line 25: `                return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 26: `            }`
  Explaination: Closes the current scope block.
- Line 27: `        } else q.push(cur);`
  Explaination: Pushes a new element into stack/queue/priority-queue.
- Line 28: `    }`
  Explaination: Closes the current scope block.
- Line 29: ``
  Explaination: Blank line used to separate logical blocks and improve readability.
- Line 30: `    return 0;`
  Explaination: Returns control (and optionally a value) from the current function.
- Line 31: `}`
  Explaination: Closes the current scope block.
