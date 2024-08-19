let rand;
let count=0;
 
do{
    console.log(rand);
    rand=Math.floor(Math.random()*6+1)
    count++;
}
while(rand !==6);
console.log("it took",count,"times");