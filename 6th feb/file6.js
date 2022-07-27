let arr =[1,1,0,0,1,0];
let left = 0;
let right = arr.length - 1;
while(left<=right){
  if(arr[left] == 0){
    left++
  }
  else if(arr[left] == 1){
    let temp = arr[left];
    arr[left] =arr[right];
    arr[right] = temp;
    right--;
  }
}
console.log(arr);
