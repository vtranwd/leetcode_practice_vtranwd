// leetcode add two numbers solution in javascript

// AlgoJS on YouTube
// https://youtu.be/RRD_5UKs4tw?si=mf1M4upzF81zCdSv
var addTwoNumbers = function(l1, l2) {

    let list = new ListNode(0);
    let head = List;

    let sum = 0;
    let carry = 0;

    while(l1 !==null || l2 !== null || sum !== 0){

        if(l1 !== null){
            sum += l1.val;
            l1 = l1.next;
        }

        if(l2 !== null){
            sum += l2.val;
            l2 = l2.next;
        }

        if(sum >= 10){
            carry = 1;
            sum = sum - 10;
        }

        head.next = new ListNode(sum);
        head = head.next;
        sum = carry;
        carry = 0;
    }

    return List.next;
}

// https://medium.com/@AlexanderObregon/solving-the-add-two-numbers-problem-on-leetcode-javascript-solutions-walkthrough-b530d9d44f54
// iterative approach
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null) {
        let x = (l1 !== null) ? l1.val : 0;
        let y = (l2 !== null) ? l2.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummy.next;
};

// recursive approach with carry handling
var addTwoNumbers = function(l1, l2, carry = 0) {
    if (l1 === null && l2 === null && carry === 0) return null;

    let sum = carry;
    if (l1 !== null) sum += l1.val;
    if (l2 !== null) sum += l2.val;

    let result = new ListNode(sum % 10);
    result.next = addTwoNumbers((l1 !== null) ? l1.next : null, 
                                (l2 !== null) ? l2.next : null, 
                                Math.floor(sum / 10));
    return result;
};


// space optimized iterative approach with pre-allocated nodes
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null) {
        let x = (l1 !== null) ? l1.val : 0;
        let y = (l2 !== null) ? l2.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);

        if (current.next === null) {
            current.next = new ListNode(sum % 10);
        } else {
            current.next.val = sum % 10;
        }

        current = current.next;
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummy.next;
};
