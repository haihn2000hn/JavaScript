var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'Python',
        coin: 1000
    },
    {
        id: 3,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 0
    },
    {
        id: 5,
        name: 'C, C++',
        coin: 200
    },
    {
        id: 6,
        name: 'PHP',
        coin: 100
    }
]

//Map
var newCourses = courses.map(function(course, index, originArray) {
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,
        // originArray: originArray
    }
}) //Map sẽ giúp ta tạo ra 1 mảng mới dựa trên mảng cũ

console.log(newCourses)

//Reduce

function coinHandler(accumulator, currentValue, currentIndex, originArray) {
    return accumulator + currentValue.coin
}

var totalCoin = courses.reduce(coinHandler, 0) //0 là giá trị khởi tạo, nếu không có giá trị khởi tạo thì nó sẽ coi phần tử đầu tiên của mảng là giá trị khởi tạo. Nếu không có giá trị khởi tạo thì accumulator sẽ có giá trị là phần tử 1, còn currentValue sẽ là phần tử 2.

console.log(totalCoin)


//example
// var number = [1, 2, 3, 4, 5]

// var sum = number.reduce(function(a, b) {
//     console.log(a, b)
//     return a + b
// },0)

// console.log(sum)


//includes() method
var title = 'RResponsive web design'

console.log(title.includes('Responsive', 1)) //đối số sẽ chỉ vị trí bắt đầu (có thể bỏ)

var names = ['Hai', 'Viet', 'Long', 'Huong', 'Chi']

console.log(names.includes('Hai', 1))

var languages = [
    'Java',
    ,
    'HTML, CSS',
    'Python'
] 

languages.length = 5

for (var index in languages) {
    console.log(index) //in ra index của phần tử thực, tức là không tính các phần tử empty
}

var array = ['a', 'b', 'c', 'a', 'b', 'c']
console.log([...(new Set(array))])