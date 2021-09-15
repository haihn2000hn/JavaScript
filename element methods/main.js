var headingNode = document.getElementById('headingNode')
console.log({
    element: headingNode
})

var node = document.getElementsByClassName('node')
console.log(node)

var box = document.querySelector('.box-1') //chỉ lấy được 1
console.log(box)
console.log(box.getElementsByTagName('li'))

var h3Element = document.getElementsByTagName('h3')[0]
console.log(h3Element)

// var h3Elements = document.querySelector('h3')
// console.log(h3Elements[0])