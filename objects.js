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
