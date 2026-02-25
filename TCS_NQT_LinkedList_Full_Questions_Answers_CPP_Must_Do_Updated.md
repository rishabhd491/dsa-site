# TCS NQT Linked List: Full Questions and C++ Solutions (Must-Do Updated)

Source: `/Users/rishabhdubey/Documents/prep for tcsnqt/TCS_NQT_LinkedList_Full_Questions_Answers_CPP.md`

This version includes only high-priority questions for 15-day TCS NQT prep.

## Included Questions

Q1, Q2, Q4, Q6, Q8, Q9, Q10, Q11, Q12, Q14, Q15, Q16, Q18, Q21, Q25

---

This is a full Linked List document for TCS NQT coding preparation.
It covers singly linked list, doubly linked list, cycle patterns, and advanced list transformations.

## 1) Linked List Topic Checklist

1. Insert/delete/search in singly list
2. Reverse list (iterative/recursive)
3. Two-pointer core operations
4. Cycle detection and cycle start
5. Merge/sort/partition list patterns
6. K-group and pairwise transformations
7. Random pointer and multilevel variants
8. Doubly linked list operations

## Common Node Definitions

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

---

---

## Q1. Insert at Head (Singly Linked List)

### Problem Statement
Insert given value at head of list.

### C++ Solution
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

## Q2. Insert at Tail

### C++ Solution
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

## Q4. Delete Node by Position

### Problem Statement
Delete node at 1-based position `pos`.

### C++ Solution
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

## Q6. Reverse Linked List (Iterative)

### C++ Solution
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

## Q8. Middle of Linked List

### C++ Solution
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

## Q9. Remove N-th Node from End

### C++ Solution
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

## Q10. Merge Two Sorted Linked Lists

### C++ Solution
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

## Q11. Detect Cycle in Linked List

### C++ Solution
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

## Q12. Find Start of Cycle

### C++ Solution
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

## Q14. Palindrome Linked List

### C++ Solution
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

## Q15. Intersection Point of Two Linked Lists

### Problem Statement
Given two linked lists that may intersect, return intersection node value or `-1`.

### C++ Solution
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

## Q16. Add Two Numbers (Digits in Reverse Order)

### C++ Solution
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

## Q18. Remove Duplicates from Sorted Linked List

### C++ Solution
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

## Q21. Rotate Linked List Right by K

### C++ Solution
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

## Q25. Sort Linked List (Merge Sort)

### C++ Solution
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
