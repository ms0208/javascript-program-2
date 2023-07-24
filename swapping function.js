function swap(){
    
   const prompt = require("prompt-sync")();
   var a,b;
   a = prompt("Enter your number 1 = ");
   b = prompt("Enter your number 2 = ");
    console.log("Before swapping " +a , b); 
  
    
    
    c=a;
    a=b;
    b=c;
  

    console.log("After swapping " +a , b);



}

console.log("swapping");
swap();

