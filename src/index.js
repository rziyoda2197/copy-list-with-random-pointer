class Node {
    constructor(val, next, random) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
}

function copyList(head) {
    if (!head) return null;

    let map = new Map();
    let current = head;

    while (current) {
        map.set(current, new Node(current.val, current.next, current.random));
        current = current.next;
    }

    current = head;

    while (current) {
        if (current.next) {
            current.next = map.get(current.next);
        }
        if (current.random) {
            current.random = map.get(current.random);
        }
        current = current.next;
    }

    return map.get(head);
}
