class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class circularLinkedList{
    constructor(){
        this.tail = null;
        this.length = 0;
    }

    insertIntoEmpty(data){
        if(this.tail != null){
            console.log("List is not empty");
            return this.tail;
        }

        let newNode = new Node(data);
        this.tail = newNode;
        this.tail.next = newNode;
        this.length++;
        return this.tail;
    }

    insertAtStart(data){
        if(this.tail == null){
            return this.insertIntoEmpty(data);
        }
        let newNode = new Node(data);
        newNode.next = this.tail.next;
        this.tail.next = newNode;
        this.length++;
        return this.tail;
    }

    insertAtEnd(data){
        if(this.tail == null){
            return this.insertIntoEmpty(data);
        }

        let newNode = new Node(data);
        newNode.next = this.tail.next;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this.tail;
    }
    
    insertAtPosition(x,data){
        if(x < 0 || x > this.length){
            console.log("Invalid Postion");
            return;
        }
        if( x == 0){
            return this.insertAtStart(data);
        }
        if( x == this.length){
            return this.insertAtEnd(data);
        }
        let currIdx = 0;
        let prevNode = null;
        let currNode = this.tail.next;
        while(currIdx < x){
            prevNode = currNode;
            currNode = currNode.next;
            currIdx++;
        }
        let newNode = new Node(data);
        newNode.next = currNode;
        prevNode.next = newNode;
        this.length++; 
    }

    printCircularLinkedList(){
        if(this.tail == null){
            console.log("List is empty");
            return;
        }
        let curr = this.tail.next;
        do{
            console.log(curr.data);
            curr  = curr.next;
        }while(curr != this.tail.next)
    }
}

let cll = new circularLinkedList();
cll.insertIntoEmpty(20);
cll.printCircularLinkedList();
console.log("=======================================");
cll.insertAtStart(10);
cll.printCircularLinkedList();
console.log("=======================================");
cll.insertAtEnd(50);
cll.printCircularLinkedList();
console.log("=======================================");
cll.insertAtPosition(1,30);
cll.printCircularLinkedList();
console.log("=======================================");