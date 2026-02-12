//some()
let numbers = [101,102,103,104,105]
let q1 = numbers.some(function(el){
    return el > 104
})
console.log(q1) //true

//every()
let q2 = numbers.every(function(el){
    return el > 100 }) 
console.log(q2) //true   

//find()
let q3 = numbers.find(function(el){
    return el > 102 
})
console.log(q3) //103

//findIndex()
let q4 = numbers.findIndex(function(el){
    return el > 102 
})
console.log(q4) //2

//objects

//properties and methods

let info = {
    firstName : "mayuri",
    lastName : "kalegore",
    age:23,

}


// retrive (dot notation and bracket)
console.log(info.firstName)
console.log(info['firstName'])

// update (dot notation and bracket)
info.firstName = "richa"
info['firstName'] = "shalini"
console.log(info)

// add  (dot notation and bracket)

info.city = "pune"
info['language'] = "marathi"
console.log(info)

// delete (dot notation and bracket)

delete info.city
delete info['language']
console.log(info)

let info2 = {
    firstName : "mayuri",
    lastName : "kalegore",
    age:23,
    rollNo : 45

}
console.log(Object.keys(info2)) //['firstName', 'lastName', 'age', 'rollNo']
console.log(Object.values(info2)) //['mayuri', 'kalegore', 23, 45]

info= {
    firstName : "mayuri",
    lastName : "kalegore",
    age:23,
    rollNo : 45

}
let obj3 = Object.assign(info2,{city:"pune",language:"marathi"})
console.log(obj3)


info3 = {
    name:"sohel",
    role:"tester",
    exp:5
};

Object.freeze(info3)
info3.exp2 = 4
console.log(info3)