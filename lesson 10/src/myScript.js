
 
 /*
 
 foo = null
console.log(foo)

const firstFunction = () => {
    foo = "Bar"
    console.log(foo, 1)
    // foo is bar in this scope
   const secondFunction = () => {
    foo = 10
    // foo is 10 in this scope
    console.log(foo, 2)
}
secondFunction()
}

firstFunction()

console.log("foo outside", foo)

*/

let foo = 10
console.log(foo)
foo = 20
console.log(foo)