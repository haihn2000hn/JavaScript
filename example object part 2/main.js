
//Object constructor


// var User = function(firstName, lastName, avatar) {
function User(firstName, lastName, avatar) {
    this.firstName = firstName
    this.lastName = lastName
    this.avatar = avatar

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`//this ở đây là getName
    }
}

var author = new User('Hai', 'Nguyen', 'Avatar')
var user = new User('Viet', 'Ha', 'Avatar 1')
var user2 = new User('Viet', 'Ha', 'Avatar 2')

User.prototype.email = 'abc@gmail.com' //dùng để thêm thuộc tính trong Object constructor
User.prototype.getEmail = function() {
    return this.email;
}

console.log(author.constructor === User)

author.title = 'Chia se'
user.comment = 'Rat hay'

console.log(author)
console.log(user)
console.log(user.email)
console.log(user2.getEmail())
console.log(author.getName())
