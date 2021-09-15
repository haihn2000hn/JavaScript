//Array
var languages = ['Java', 'Python', 'JS']

console.log(languages.length)

// var languages = new Array('Java', 'Python', 'JS', null, undefined, function() {}, {})
// console.log(languages)
// console.log(typeof languages)
// console.log(Array.isArray(languages)) //do Array khi khai báo theo kiểu new Array thì sẽ tạo ra 1 đối tượng => để kiểm tra nó có còn là mảng hay ko thf dùng isArray

// console.log(languages[2])

//Array methods

//To String
console.log(languages.toString())//biến mảng thành chuỗi

//Join
console.log(languages.join('-')) //nếu bên trong join() mà không có gì thì nó sẽ tạo ra kết quả y hệt như toString

//Pop
// console.log(languages.pop()) //xóa phần tử cuối và trả về phần tử đó
// console.log(languages.pop())
// console.log(languages.pop())
// console.log(languages.pop()) //nếu mà ko có phần tử nào mà vẫn pop thì nó sẽ trả về indefined và mảng rỗng

//Push
// console.log(languages.push('C'))

//Shift
// console.log(languages.shift()) //Xóa đi phần tử ở đầu mảng và trả lại giá trị đó

//Unshift
// console.log(languages.unshift('C')) //Thêm phần tử ở đầu mảng

//Splicing
// languages.splice(1, 1) //Xóa phần tử theo vị trí (a, b) trong đó a là nơi đặt con trỏ còn b là số lượng phần tử xóa tính từ con trỏ

// languages.splice (1, 0, 'C') //giá trị thứ 3 là thêm vào vị trí như trên phần tử mới

//Concat
var languages2 = ['C', 'C++']
console.log(languages.concat(languages2)) //hợp nhất mảng languages2 vào mảng languages

//Slicing
console.log(languages.slice(1, 2)) //dùng để cắt element cúa mảng

console.log(languages)

var numbers = [1, 2, 3, 4, 5, 6, 7]

function search(numbers, num) {
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] == num) {
            return('tim thay')
        }
    }
    return('khong thay')
}

console.log(search(numbers, 4))

//Array methods

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

// courses.forEach(function(course, index) {
//     console.log(index, course)
// })

var isFree = courses.every(function(course) {
    return course.coin === 0
}) //tất cả các phần tử trong mảng thỏa mãn chung điều kiện

console.log(isFree)

var free = courses.some(function(course) {
    return course.coin === 0
}) //ít nhất 1 phần tử trong mảng thỏa mãn điều kiện

console.log(free)

var course = courses.find(function(course) {
    return course.name === 'PHP'
}) //tìm ra phần tử thỏa mãn điều kiện đầu tiên

console.log(course)

var allCourses = courses.filter(function(course) {
    return course.name === 'PHP'
}) //tìm ra tất cả các phần tử thỏa mãn điều kiện đầu tiên

console.log(allCourses)
