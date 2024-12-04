//map method
//const numberarray=[1,2,3,4,5];
////const mapped =numberarray.map((x)=>{
  //  return x+x;
//});
//console.log(mapped);
//create a program that takes an array of book object and return a new array of booksname nsing .map().

const books=[
    {
        name:"hello",
        price:1000
    },
    {
        name:"hi",
        price:1500
    }
];
 const bnames=books.map((book)=>{
    return book.name;
});
console.log(bnames);

//create a program that takes an array of book objects and add a new property 'pages' using .map()
const booknamewithpages=books.map((book)=>{
    return{
        name:book.name,
        price:book.price,
        pages:400,
    }
});
console.log(booknamewithpages);