let a = 10
console.log(a)
const b =20
console.log(b)
//b=34

//let and cosnt are block scoped

{
    let a1 = 35
    console.log(a1)
}
{
    const b1 = 67
    console.log(b1)
}


//datatypes

let c = 10
console.log(typeof c)

const d = 13.5
console.log(typeof d)

const e = "hello"
console.log(typeof e)   

const f = true
console.log(typeof f)

const g = null
console.log(typeof g)

const arr = [1,5.6,9,"hi",false]
console.log(typeof arr)

const obj = {
    name:"abc",
     age:25
}

const APIvalue = null
let varone;
console.log(varone)

//map - collection of key value pairs
//difference beteween object and map
//in map keys can be of any datatype
//in object keys are of string datatype
let mapA = new Map([
    [1,'admin'],
    [2,'user' ],
    [3,'guest'],
    [4,'superadmin'],
    [5,'tester']
])
//set - collection of unique values
let setA = new Set([1,2,3,4,5,5,4,3,2,1])
console.log(setA)