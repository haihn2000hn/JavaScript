
// For loop

var array = [
    'JS',
    'Java',
    'Python'
]

var arrayLength = array.length

for (var i = 0; i < array.length; i++) {
    console.log(array[i])
}

// for of thì không sử dụng được với Object

// for (var value of array) {
//     console.log(value) 
// }

console.log('')

var myInfo = {
    name: 'Long Hai',
    age: '20',
    address: 'Ha Noi, Viet Nam'
}

// for (var key in myInfo) {
//     console.log(myInfo[key])
// }

for (var value of Object.values(myInfo)) { //do for of ko sử dụng được trong Object nên ta phải Object.values(myInfo) để biến values trong Object thành mảng
    console.log(value)
}

console.log('')

var myName = 'LongHai'
for (var key in myName) { //theo key
    console.log(myName[key]) //in ra value theo key
}

// for (var key in myName) {
//     console.log(key)
// }

// While

var i = 0

while (i < 5) {
    console.log(i)
    i++
}

console.log('')

var j = 0

do {
    j++
    console.log(j)
} while (j < 5)