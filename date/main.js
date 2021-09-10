
// Date object

var now = new Date() //new để khởi tạo object

console.log(now)

var year = now.getFullYear()
var month = now.getMonth() + 1 //do tháng được quy ước từ 0 đến 11
var date = now.getDate()
var hours = now.getHours()
var minutes = now.getMinutes()
var seconds = now.getSeconds()

console.log(now.getDay() + 1)//thứ 2 là 1, thứ 3 là 2.. nên ta sẽ cộng thêm 1 => Chủ nhật = 1

console.log(`${date}/${month}/${year}`)