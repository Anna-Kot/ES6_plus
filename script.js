//task 1 

let arr1 =[5,6,7,8,9];
let sum = arr1.reduce((start, elem) => start+elem, 0);
console.log('task_1, sum =',sum);


//task 2 

let arr2=[5,6,7,8,9];
let new_arr = arr2.map(value => value*value);
console.log('task_2, arr =', new_arr);


//task 3

let arr3 =[ 
    {name: 'Ivan', country: 'Ukraine'},
    {name: 'Petro', country: 'Ukraine'},
    {name: 'Miguel', country: 'Cuba'}
]
let check3 = arr3.every(con => con.country == 'Ukraine');
console.log('task_3, check country: every', check3);


//task 4 

let arr4 =[ 
    {name: 'Ivan', country: 'Ukraine'},
    {name: 'Petro', country: 'Ukraine'},
    {name: 'Miguel', country: 'Cuba'}
]
let check4 = arr4.some(live => live.country == 'Ukraine');
console.log('task_4, check country: some', check4);


//task 5 

let arr5 = [1, 'string', [3, 4], 5, [6, 7]];
let filter_arr =arr5.filter(function(arr){
    if(Array.isArray(arr)){
        return arr
    }
})
console.log('task_5 підмасиви', filter_arr);


//task 6 

let arr6 =[1,2,5,0,4,5,6];
let new_a = arr6.reduce(function(a,b) {
    if(b>0) {
        return a+b
    }
    console.log('task_6 сума чисел до нуля',a+b)
});
let count=1
let new_a2 = arr6.reduce(function(a,b){
    if(a+b<=10){
        count ++;
    }
    else {
        return count
    }
})
console.log('кількість елементів',new_a2)


// task 7 

let arr7 = [1, -2, 3, 0, 4, -5, 6, -11];
let numb_arr =arr7.filter(function(arr){
    if(arr>0) {
        return arr;
    }
})
let num = numb_arr.map(function(new_arr){
    return Math.sqrt(new_arr)
})
console.log('task_7 коріні з чисел',num);