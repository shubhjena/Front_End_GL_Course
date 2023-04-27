//arithematic operators
let x=12, y=13;
console.log(10.5 + 20.56);
console.log(y-x);
console.log(x*y);
console.log(x/y);
console.log(x%y);

//relational operators
let isBefore = "hello" <"hi";
console.log(isBefore);
console.log(1 == '1'); //return true - type unsafe
console.log(1 === '1');

//logical operators
let isRaining =true, goingWalk = true, goingByCar = false;
let takeUmbrella = isRaining && goingWalk;
console.log(takeUmbrella);

let price=42000, bankBalance= 60000, interested =true;
let willBuyPhone = price<bankBalance && interested;
console.log(willBuyPhone);

//miscellaneous operators
console.log(typeof isRaining);

let waterLogging = isRaining? true: false;