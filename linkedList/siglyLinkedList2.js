//=========NODE CLASS 

class Node{
    constructor(value){
        this.data = value,
        this.next = null
    }
}

// let x = new Node(10);
// console.log(x.data);
// console.log(x.next);

//=========LINKED LIST CLASS

class singlyLinkedList{
    constructor(){
        this.head = null,
        this.tail = null,
        this.length = 0
    }
    insertAtStart(data){
        let newNode = new Node(data);// CREATE A NEW NODE WITH DATA
        if(this.head == null || this.length == 0){
            this.tail = newNode;
        }
        newNode.next = this.head;//ATTACH NEW NODE AT THE START OR CURRENT HEAD
        this.head = newNode;//UPDATE THE HEAD POINTER TO NEW NODE 
        this.length++; 
    }

    insertAtPostion(x,data){

        if(x == 0){
            this.insertAtStart(data);
            return;
        }
        if(x >= this.length){
            this.insertAtLast(data);
            return;
        }

        let pos =  1;
        let prev = null;
        let curr =this.head;

        while(pos < x){
            prev = curr;
            curr = curr.next;
            pos++;
        }

        let newNode = new Node(data);
        newNode.next = prev.next;
        prev.next = newNode;
        this.length++; 
    }
    insertAtLast(data){
        if(this.head == null){
            this.insertAtStart(data);
            return;
        }
        let newNode = new Node(data);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }


    updateDataAtPosition(x,data){
        if(this.head == null || this.length == 0 || x >= this.length){
            console.log("invalid position");
            return;
        }

        let curr = this.head;
        let pos = 1;
        while(pos > x){
            curr = curr.next;
        }

        curr.data = data;
    }

    deleteAtStart(){
        if(this.head == null || this.length == 0){
            console.log("no node present in linked list");
            return;
        }
        let curr = this.head;
        this.head = this.head.next;
        curr = null;
        if(this.length == 1){
            this.tail = null;
        }
        this.length--;
    }

    deleteAtPosition(x){
        if(x == 1){
            this.deleteAtStart();
            return;
        }
        else if(x == this.length){
            this.deleteAtLast();
            return;
        }
        else if(this.head == null || this.length == 0 || x > this.length-1){
            console.log("invalid position");
            return;
        }

        let count = 0;
        let curr = this.head;
        let prev = null;

        while(count < x){
            prev = curr;
            curr = curr.next;
            count++;
        }
        
        prev.next = curr.next;
        curr = null;
        this.length--;
    }
    deleteAtLast(){
        if(this.head == null || this.length == 0){
            console.log("node doesn't exist");
            return;
        }
        if(this.length == 1){
            this.head == null;
            this.tail == null;
            this.length--;
            return;
        }

        let curr = this.head;
        while(curr.next != this.tail){
            curr = curr.next;
        }

        curr.next = null;
        this.tail = curr;
        this.length--;
    }

    printLinkedList(){
        let currNode = this.head;

        while(currNode != null){
            console.log(currNode.data);
            currNode = currNode.next;
        }
    }
}

let myLinkedList = new singlyLinkedList();
console.log(myLinkedList.head);  
console.log(myLinkedList.length);


myLinkedList.insertAtStart(10);
console.log(myLinkedList.head);
console.log(myLinkedList.length);

myLinkedList.insertAtStart(20);
console.log(myLinkedList.head);
console.log(myLinkedList.length);

myLinkedList.insertAtStart(30);
console.log(myLinkedList.head);
console.log(myLinkedList.length); 

console.log("==============================")

myLinkedList.printLinkedList();

console.log("==============================")
myLinkedList.insertAtPostion(2,25);
myLinkedList.printLinkedList();

console.log("==============================")
myLinkedList.insertAtLast(55);
myLinkedList.printLinkedList();

console.log("==============================")
myLinkedList.insertAtLast(65);
myLinkedList.printLinkedList(); 

console.log("==============================")
myLinkedList.deleteAtStart();
myLinkedList.printLinkedList(); 

console.log("==============================")
myLinkedList.deleteAtPosition(3);
myLinkedList.printLinkedList();

console.log("==============================")
myLinkedList.deleteAtLast()
myLinkedList.printLinkedList();





 