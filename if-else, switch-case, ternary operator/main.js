
//If - else

var date = 4;

if (date === 2) {
    console.log('Hôm nay là thứ 2')
} else if (date === 3) {
    console.log('Hôm nay là thứ 3')
} else {
    console.log('Hôm nay là thứ 4')
}

//Switch - Case

switch(date) {
    case 2: 
        console.log('Hôm nay là thứ 2')
        break
    case 3: 
        console.log('Hôm nay là thứ 3')
        break
    case 4: 
        console.log('Hôm nay là thứ 4')
        break
    default:
        console.log('Không biết')    
}

//Toán tử 3 ngôi - Ternary operator

var course = {
    name: 'JavaScript',
    coin: 100
}

// if (course.coin > 0) {
//     console.log(`${course.coin} Coins`)
// } else {
//     console.log('Miễn phí')
// }

var result = course.coin > 0 ? `${course.coin} Coins` : 'Miễn phí'
console.log(result)