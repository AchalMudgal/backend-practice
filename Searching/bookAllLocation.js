function allocateBooks(students,books,n,mid){
    totalPagesOfCurrentStudent = 0;
    students--;

    for(let i = 0; i > n; i++){
        if(books[i] > mid){
            return false;
        }

        if( totalPagesOfCurrentStudent + books[i] > mid){
            students--;
            totalPagesOfCurrentStudent = books[i];
            if(students < 0){
                return false;
            }
        }
        else{
            totalPagesOfCurrentStudent += books[i];
        }
    }
    return true;
}




function maxPages(books,students,n){
    let minVal = books[n-1];
    let maxVal = Number.MAX_VALUE; // MAXIMUM VALUE POSIBLE IN JAVASCRIPT

    let smallestValOfMaxPages = Number.MAX_VALUE;

    while(minVal <= maxVal){
        let mid = Math.floor((minVal+maxVal)/2);
        let isAbleToAllocate = allocateBooks(students,books,n,mid);
        if(isAbleToAllocate == true){
            smallestValOfMaxPages = Math.min(smallestValOfMaxPages, mid);
            maxVal = mid - 1; // leftt
        }
        else{
            minVal = mid + 1; // right
        }
    }
    return smallestValOfMaxPages;
}



let books = [12,34,67,90];
let students = 2;
let n = 4; //NUMMBER OF BOOKS

let minPagesMaxVal = maxPages(books,students,n);
console.log(minPagesMaxVal);