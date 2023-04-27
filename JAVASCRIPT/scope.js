let globalX = 1;
console.log("outside the function: "+ globalX);

function foo(){
    globalX = 2;
    let localX =5;
    console.log("inside the function: "+ globalX);
    console.log("inside the function local x: "+ localX);
}
foo();
console.log("outside the function: "+ globalX);

