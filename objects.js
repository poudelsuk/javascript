//All about objects


let myname="sukadev";
const myage=23;
const myprofession="student";

const aboutme={
    name:"sukadev",
    age:23,
    myprofession:"student",
    hair:{
        color:"black",
        straight:false,
    },
    isfree:(time)=>{
        if(time>10){
            return true;
        }
        else{
            return false;
        }
    }
};
console.log(aboutme.name);
console.log(aboutme.age);
console.log(aboutme.hair.color);
console.log(aboutme.isfree(12));
//mutation
aboutme.age="40";
console.log(aboutme.age);
//adding new property
aboutme.hobbies=["gaming"];
console.log(aboutme.hobbies);
//deleting property
console.log(aboutme.hair);  //returns black........
delete aboutme.hair;
console.log(aboutme.hair);  //returns undefined

//array of object
const books=[
    {
        name:"kitaab"
        price:1000
    },
    {
        name:"it is book"
        edition:2014
    },
]
console.log(books[0]);
