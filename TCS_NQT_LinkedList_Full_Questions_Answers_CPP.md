# TCS NQT Linked List: Full Questions and C++ Solutions

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

## Q3. Insert at Position (1-based)

### Problem Statement
Insert value `x` at position `pos` (1-based). If `pos > length+1`, ignore.

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

## Q5. Search in Linked List

### Problem Statement
Given key `x`, return 1-based position of first occurrence, else `-1`.

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

## Q7. Reverse Linked List (Recursive)

### C++ Solution
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

## Q13. Remove Cycle from Linked List

### Problem Statement
Given list with possible cycle (pos), remove cycle and print linear list.

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

## Q17. Odd Even Linked List

### Problem Statement
Group odd-indexed nodes followed by even-indexed nodes.

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

## Q19. Remove Duplicates from Unsorted Linked List

### C++ Solution
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

## Q20. Segregate 0s, 1s, 2s in Linked List

### C++ Solution
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

## Q22. Swap Nodes in Pairs

### C++ Solution
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

## Q23. Reverse Nodes in K-Group

### C++ Solution
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

## Q24. Partition List Around Value X

### Problem Statement
Reorder list so nodes `< x` come before nodes `>= x` preserving original order.

### C++ Solution
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

## Q26. Copy Linked List with Random Pointer

### Problem Statement
Each node has `next` and `random`. Create deep copy.
Input format simplified as arrays.

### C++ Solution
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

## Q27. Flatten Sorted Multi-Level Linked List (Bottom Pointers)

### Problem Statement
Given list where each node has `next` and sorted `bottom` list, flatten to one sorted bottom list.

### C++ Solution (core function)
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

## Q28. Doubly Linked List Insert at Head and Tail

### C++ Solution
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

## Q29. Reverse Doubly Linked List

### C++ Solution
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

## Q30. LRU Cache (HashMap + Doubly Linked List)

### Problem Statement
Design LRU cache with operations `GET key` and `PUT key value`.

### Input Format
- `capacity Q`
- Q lines operations

### Output Format
- print result for each `GET`

### C++ Solution
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

## 2) Suggested Revision Order

1. Singly basics: `Q1-Q7`
2. Two-pointer linked list core: `Q8-Q15`
3. Advanced transformations: `Q16-Q25`
4. Special structures and design: `Q26-Q30`

## 3) Edge-Case Checklist

- Empty list
- Single node list
- Remove head/tail cases
- Full duplicate lists
- k larger than length
- cycle at head

## 4) Most Important Linked List Questions

1. reverse list (`Q6`, `Q7`)
2. middle / nth from end (`Q8`, `Q9`)
3. cycle detect/start (`Q11`, `Q12`)
4. merge/sort (`Q10`, `Q25`)
5. add two numbers / reverse k-group (`Q16`, `Q23`)
6. LRU design (`Q30`)

