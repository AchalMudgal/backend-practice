arr =[
    {
        id : 41,
        name : "ravi"
    },
    {
        id : 4,
        name: "ram"
    },
    {
        id : 9,
        name : "chandni"
    }
]
 console.log(arr);
 arr.sort((a,b) => a.id - b.id);//THIS WAS FOR INCREASING ORDER BUT FOR DECREASING ORDER WE CAN USE__B.ID-A.ID
 console.log(arr);