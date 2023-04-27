
function greet(name,lastName){
    console.log('Hello ' + name +" "+ lastName);
}

//calculating a value
function square(number){
    return number*number;
}

greet('John','Carter');
greet('Gary', 'lee');
console.log(square(2));

//function expression syntax 
let sum2 = function (x,y){
    let result = x+y;
    return result;
};

console.log(sum2(13,15));