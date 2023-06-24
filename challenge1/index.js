// const myArr = ["value1" , "value2"];
// // let myvar1 = myArr[0];
// // let myvar2 = myArr[1];
// // console.log("value of myvar1",myvar1);
// // console.log("value of myvar2",myvar2);
// // let [myvar1,myvar2] = myArr;
// [myArr[0],myArr[1]] = [myArr[1],myArr[0]];
// console.log(myArr[1]);
// console.log(myArr[0]);

const response = {
    // data:[
    //     {id:1,name:'Emma'},
    //     {id:2,name:'Jessica'},
    //     {id:3,name:'Caisey'},
        
    // ],
    arr:[1,2,34,3]
};

const {arr} = response;
const [user1,user2,user3,...newArr] = arr;
console.log(newArr)
console.log('user1' +  user1)
console.log('user2' +  user2)
console.log('user3' +  user3)