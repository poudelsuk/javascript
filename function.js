//function

function add(x,y){
    
    return x+y;

   
}
const subtract=(x,y)=>{
    return x-y;
}
const divide=(x,y)=>x/y;
const e= add(1,2);
console.log(e);
const f=subtract(5,5);
console.log(f);
const g=divide(100,10);
console.log(g);


//...params
const printargs=(...arguments)=>{
    console.log(arguments);
}
printargs("hi");
printargs("hi","hello");
printargs(1,2,34,5,6);