let simplearray =["hey","poudel","hi"];
    console.log(simplearray);
    simplearray.push("hero");
    console.log(simplearray);


    //popping
    poppedelement=simplearray.pop();
    console.log(simplearray);
    console.log("popped element is",poppedelement);


    //shifting element
    simplearray.shift();
    console.log(simplearray);

    //unshifting
    simplearray.unshift("mobile","tab");
    console.log(simplearray);

    //includes-return true or false
    //const doesIncludeJohnny=

    //callback functiion
    function callyouback(callback){
        const a="hello";
        callback(a);
    }
    callyouback(function (a){
        console.log(a);
    }
    
)
console.log("..............");
//foreach method
simplearray.forEach(function(x){
    console.log(x);
});
let newstring="";
simplearray.forEach(function(x,i){
    newstring = newstring+x+i;
});
console.log(newstring);

//sort method
const nayaarray=["a","b","c","d"];
nayaarray.sort();
console.log(nayaarray);
//sort method sorts inascending order.how to sort i decending order

//map method
const numberarray=[1,2,3,4,5];
const mapped =numberarray.map((x)=>{
    return x+x;
});
console.log(mapped);

//reduce method
const sumofarray=numberarray.reduce((a,b)=>{
    return a+b;

},0);
console.log(sumofarray);

//filter method
const f=numberarray.filter((a)=>{
    return a%2==0;
});
console.log(f);

//find method
const found=numberarray.find((a)=>{
    return a%2==0;
});
console.log(found);

//foreach with array object
const books=[
    {
        name:"kitaaaab",
        price:1000
    },
    {
        name:"it ends with us",
        price:200
    },
];
books.forEach((book)=>{
    console.log(book.name);
    book.name="it starts with us";
});
