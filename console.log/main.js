// alert ('Hello')

// confirm('Xac nhan')

prompt('xac nhan')

// console.log('day la log')

// setTimeout(function() {
//     alert('Thong bao')
// }, 3000) //đặt thời gian delay có đơn vị ms

// setInterval(function() {
//     console.log(Math.random())
// }, 1000)

// var a = 1;
// var b = 2;

// var isSuccess = a > b;

// console.log(isSuccess);


//String
var fullName1 = 'Long Hai' //ưu tiên dùng

var fullname2 = new String('Long Hai') //Khởi tạo 1 đối tượng => typeof thì ra object

//String methods

var myString = 'Tu hoc JS JS JS!'

//Length
console.log(myString.length)

//index
console.log(myString.indexOf('JS', 11))
console.log(myString.search('JS'))

//Cut String
console.log(myString.slice(3, 6))
console.log(myString.slice(-3, -1))

//Replace
console.log(myString.replace('JS', 'Javascript')) // thay thành /JS/g để thay thế tất cả các từ JS trong string

//Convert to upper case
console.log(myString.toUpperCase())

//Convert to lower case
console.log(myString.toLowerCase())

//Trim
console.log(myString.trim()) //loại bỏ cách dấu cách đầu và cuối

//Split
var symbols = 'A, B, C, D'

console.log(symbols.split(', ')) //tìm ra phần tử chung giữa các từ để 

//Get a character bt index
console.log(myString.charAt(10))

//Number
var result = 20 / 'A'
console.log(isNaN(result))

var number = 3.5

console.log(number.toFixed()) //.5 thì làm tròn lên, còn < .5 thì làm tròn xuống

console.log(number.toFixed(2)) //làm tròn tới 2 chữ số sau dấu phẩy

var num = 2
var num2 = 4/2

if (num === num2) { //=== giống như == nhưng 2 giá trị phải giống nhau ở cả kiểu dữ liệu
    console.log('true')
}

else {
    console.log('false')
}