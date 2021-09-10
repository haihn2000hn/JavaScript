//var
// greeting = "say hello"
// console.log (greeting)
// var greeting

//var có tính chất hoisting

var greeting = "hey hi"
var times = 4

if (times > 3) {
    var greeting = "say Hello instead"
}

console.log(greeting) //"say Hello instead"


//let
let sayHi = "say Hi"
if (times > 3) {
    let hello = "say Hello"
    console.log(hello)
}
// console.log(hello)
// biến let được khai báo sẽ có scope là block scoped

let greeting1 = "say Hi";
console.log(greeting1); //"say Hi"

greeting1 = "say Hello instead";
console.log(greeting1); //"say Hello instead"

let greeting2 = "say Hi";
// let greeting2 = "say Hello instead"; // error: Identifier 'greeting' has already been declared
//let cho phép cập nhật giá chứ của biến chứ không cho phép chúng ta tái khai báo lại biến đó (trong cùng 1 block)

if (true) {
    let greeting2 = "say Hello"
    console.log(greeting2) //"say Hello"
}
console.log(greeting2) //"say Hi"

//Tuy nhiên nếu ở các block khác nhau thì việc tái khai báo biến sẽ không sinh ra lỗi

//const
const greeting3 = "say Hi";
// greeting3 = "say Hello instead"; // error : Assignment to constant variable.
// const greeting = "say Hello instead"; // error : Identifier 'greeting' has already been declared
//biến const sẽ không cho cho phép tái khai báo hay cập nhật giá trị mới


const greeting4 = {
    message : "Hello",
    number : "five"
}

greeting4.message = "say Hello instead";
console.log(greeting4); // {message:"say Hello instead",number:"five"}
//Tuy nhiên đối với trường hợp kiểu biến là reference(bao gồm object, array và function) thì tuy không thể tái khai báo hay cập nhật giá trị của biến nhưng ta vẫn có thể cập nhật giá trị cho thuộc tính của biến đó;

//Destructuring

var array = ['JS', 'Python', 'C++']

var [a, , c] = array
console.log(a, c)

var [a, ...rest] = array
console.log(rest) //lấy phần còn lại của mảng (kết quả vẫn là 1 mảng)

var course = {
    name: 'Javascript',
    price: 1000,
    // description: 'none',
    children: {
        name: 'HTML'
    }
}

var {name, price, description = 'default'} = course
console.log(name, price, description) // đối với object thì t phải lấy đúng tên thuộc tính, nếu ko kết quả sẽ là undefined
//nếu trong khai báo mà có sẵn thuộc tính nào rồi thì nó sẽ ưu tiên thuộc tính đó

var {name: parentName, children: {name}} = course

console.log(parentName) //ta phải đặt thuộc tính name của course thành parentName để ko bị name của children ghì đè
console.log(name)