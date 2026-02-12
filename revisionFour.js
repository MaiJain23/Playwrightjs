// includes ()
//string --- boolean
let firstname = "mayuri"
let a = firstname.includes('M')
console.log(a)
let b = firstname.includes('yu')
console.log(b)

//trim
// mayuri

let name = " mayuri "
console.log(name.length)//8
console.log(name.trim().length) //6

//toLowercCase

let city = "PUNE"
console.log(city.toLowerCase())// pune


//replace()
let info = `I am mayur and login time ${new Date()  }`
console.log(info) //Wed Feb 11 2026 16:20:10 GMT+0530 (India Standard Time)
let info2 =" i am learning js"
console.log(info2.replace("js","python")) // i am learning javascript

//

//map()

let apiValues = ['january',"january","march"]
{/* <ul>
    <li>january</li>
    <li>january</li>
    <li>march</li>
</ul> */}

let birthYear = [2006,2007,2008,2009]
let q5 = birthYear.map(function(el,index,arr){
   return 2026 - el 
})
console.log(q5)

let employee = [
    {
        fullName:"chinmay deshpande",
        companyName:"dxc"
    },
    {
        fullName:"sarika pansare",
        companyName:"bitwise"
    },
    {
        fullName:"amol rao",
        companyName:"dxc"
    }

]


let filteredDate = employee.filter(function(el){
    return el.companyName == "dxc"
})
console.log(filteredDate)

// every()
let numbers = [19,20,21,22,23]
let q3 = numbers.every(function(el){
    return el >= 19
})
console.log(q3)