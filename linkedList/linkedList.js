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
        this.length = 0
    }
    insertAtStart(data){
        let newNode = new Node(data);// CREATE A NEW NODE WITH DATA
        newNode.next = this.head;//ATTACH NEW NODE AT THE START OR CURRENT HEAD
        this.head = newNode;//UPDATE THE HEAD POINTER TO NEW NODE 
        this.length++; 
    }
    printLinkedList(){
        let currNode = this.head;

        while(currNode != null){
            console.log(currNode.data);
            currNode = currNode.next;
        }
    }

    insertAtPostion(x,data){

        if(x == 0){
            this.insertAtStart(data);
            return;
        }
        if(x > this.length){
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
        let curr = this.head;
        while(curr.next != null){
            curr = curr.next;
        }

        let newNode = new Node(data);
        curr.next = newNode;
        this.length++;
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