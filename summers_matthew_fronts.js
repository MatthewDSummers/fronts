class Node {
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
function noList(sll){
    if(sll.head == null){
        return null
    }
}
class LinkedList {
    constructor(){
        this.head = null;
    }
    front(){
        if(this.head == null){
            return null
        }

        return this.head.data
    }


    removeFront(){
        if (!this.head){
            return null
        }
        let removed = this.head;
        this.head = removed.next;
        removed.next = null;
        return this.head
    }

    addFront(val){
        var new_node = new Node(val);

        if(this.head == null){
            return null
        }
        
        new_node.next = this.head;
        this.head = new_node;

        return this.head
    }
}

var node1 = new Node(9)
var sll_one = new LinkedList()
var empty = new LinkedList()

sll_one.head = node1


console.log("The SLL is:", sll_one)

// FRONT
console.log("Value of front is", sll_one.front())
console.log("Empty list is:", empty.front())

// ADD FRONT 
console.log(sll_one.addFront(99))
console.log(sll_one.addFront(29))

// REMOVE FRONT
console.log("The SLL is:", sll_one)

console.log(sll_one.removeFront())