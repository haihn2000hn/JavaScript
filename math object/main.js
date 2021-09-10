
//Math Object

console.log(Math.PI)
console.log(Math.round(1.5))
console.log(Math.abs(-4))
console.log(Math.ceil(1.2)) //chỉ làm tròn trên (phải lớn hơn 0)
console.log(Math.floor(5.9)) //chỉ làm tròn dưới
console.log(Math.min(0, 1, -20))
console.log(Math.max(10, 2, 31))
console.log(Math.random()) //số ngẫu nhiên trong khoảng từ 0 đến 1

//Math.random example

var random = Math.floor(Math.random() * 5)

var bonus = [
    '10 gold',
    '20 gold',
    '30 gold',
    '40 gold',
    '50 gold',
]

console.log(bonus[random])