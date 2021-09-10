var nameKey = 'name';

var myInfo = {
    [nameKey]: 'Long Hai', //nếu ko có ngoặc vuông thì nó sẽ coi là thuộc tính của object luôn chứ k phải biến được truyền từ bên ngoài
    age: '21',
    address: 'Ha Noi, Viet Nam',
    getName: function() {
        return this.name //this là myInfo
    }
}

// thêm, sửa thuộc tính
myInfo.email = 'haingnlong@gmail.com'
// myInfo['e-mail'] = 'haingnlong@gmail.com'

console.log(myInfo)

delete myInfo.age

console.log(myInfo.age) //undefined do đã bị delete
console.log(myInfo[nameKey])

// trong trường hợp thuộc tính là function --> phương thức (method)
// còn lại thì là thuộc tính (property)

console.log(myInfo.getName())