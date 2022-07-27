class Node{
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insertAtStart(data){
        let newNode = new Node(data);
        if(this.head == null || this.length == 0){
            this.tail = newNode;
        }
        if(this.head != null){
            this.head.prev = newNode;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    insertAtlast(data){
        let newNode = new Node(data);
        if(this.head == null || this.length == 0){
            this.insertAtStart(data);
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
    }

    insertAtPosition(x,data){
       if(x < 0 || x > this.length){
           console.log("Invalid position");
           return;
       }
       if(x == 0){
           this.insertAtStart(data);
           return;
       }
       else if(x == this.length){
           this.insertAtlast(data);
       }
       else{
           let newNode  = new Node(data);
           let curr = this.head;
           let previous = null;
           let currIndex = 0;
           while(currIndex < x){
               previous = curr;
               curr = curr.next;
               currIndex++;
           }

           previous.next = newNode;
           newNode.prev = previous;
           newNode.next = curr;
           curr.prev = newNode;
           this.length++;
       }
    }

    deleteAtStart(){
        if(this.head == null){
            return;
        }
        let temp = this.head;
        this.head = this.head.next;
        this.head.prev = null;
        temp = null;
        this.length--;
    }

    deleteAtLast(){
        if(this.tail == null){
            return;
        }
        let temp = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
        temp = null;
        this.length--;
    } 
    deleteAtPosition(x){
        if(this.head == null || x >= this.length || x<0){
            console.log("Invalid position");
            return;
        }
        if(x == 0){
            this.deleteAtLast();
            return;
        }
        else if(x == this.length-1){
            this.deleteAtLast();
            return;
        }

        let currNode = this.head;
        let prevNode = null;
        let currIdx = 0;
        while(currIdx < x){
            prevNode = currNode;
            currNode = currNode.next;
            currIdx++;
        }

        prevNode.next = currNode.next;
        currNode.next.prev = prevNode;
        currNode = null;
        this.length++;
    }

    findValueAtPosition(x){
        if( x >= this.length || x < 0){
            console.log("Invalid Position");
            return;
        }
        let currNode = this.head;
        let currIdx = 0;
        while(currIdx < x){
            currNode = currNode.next;
            currIdx++;
        }
        return currNode.data;
    }
    
    updateValueAtPostion(x,data){
        if(x >= this.length || x < 0){
            console.log("Invalid Position");
            return;
        }

        let currNode = this.head;
        let currIdx = 0;
        while(currIdx < x){
            currNode = currNode.next;
            currIdx++;
        }
        currNode.data = data;
        return currNode.data;
    }

    printDoublyLinkedList(){
        let temp = this.head;
        while(temp != null){
            console.log(temp.data);
            temp =  temp.next;
        }
    }
}

let dll = new DoublyLinkedList();
dll.insertAtStart(10);
dll.printDoublyLinkedList();
console.log("===========1====================");
dll.insertAtlast(50);
dll.printDoublyLinkedList();  
console.log("============2===================");
dll.insertAtPosition(1,20);
dll.printDoublyLinkedList();
console.log("=============3==================");
dll.insertAtPosition(2,30);
dll.printDoublyLinkedList();
console.log("==============4=================");
dll.insertAtPosition(3,40);
dll.printDoublyLinkedList();
console.log("===============5================");
dll.deleteAtStart();
dll.printDoublyLinkedList();
console.log("===============6================");
dll.deleteAtLast();
dll.printDoublyLinkedList();
console.log("===============7================");
dll.deleteAtPosition(2);
dll.printDoublyLinkedList();
console.log("================8===============");
console.log(dll.findValueAtPosition(0));
console.log("================9===============");
dll.updateValueAtPostion(1,23);
dll.printDoublyLinkedList();
console.log("=================10==============");

