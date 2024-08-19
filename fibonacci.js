let num1=0;
let num2=1;
let nextterm;
let count =0;
while(count<10){
    nextterm=num1+num2;
    num1=num2;
    num2=nextterm;
    console.log(nextterm);
}