// function showDialog() {
//     alert('Hi')
// }

// showDialog()

//Declaration function
function writeLog(message, message2) {
    console.log(message)
    console.log(message2)
}

writeLog('Test', 'Test2')

function writeLog2() {
    var myString = ''
    // console.log(arguments) //nó là 1 đối tượng, hoạt động như mảng
    for (var param of arguments) {
        myString += `${param} - `
    }
    console.log(myString)
}

//Declatation function thì có khái niệm hoisting (có thể thực thi trước khi khai báo)

writeLog2('Log1', 'Log2', 'Log3')

//Expression function (có thể tạo tên hoặc không, thường thì đặt tên chỉ để cho dễ hiểu)
var showMessage = function() {

}

setTimeout(function() {

})

var myObject = {
    myFunction: function() {

    }
}


//Callback

function myFunction(param) {
    if (typeof param === 'function') {
        param('Callback')
    }
}

function myCallback(value) {
    console.log(value)
}

myFunction(myCallback)

//Promise: được sinh ra để có thể xử lý các thao tác bất đồng bộ (khắc phục tình trạng CallbackHell)

var promise = new Promise(
    //Executor
    function(resolve, reject) {
        //Logic
        //Thành công: resolve()
        //Thất bại: reject()
        resolve()
    }
)

promise
    .then(function() {
        console.log('Successfully!')//nếu resolve() thì sẽ nhảy vào then()
    })
    .catch(function() {
        console.log('Failure!')//nếu reject() thì sẽ nhảy vào catch()
    })
    .finally(function() {
        console.log('Done!')//nếu resolve() hoặc reject() thì đều finally()
    })