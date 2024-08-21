const cartItems=[
    {
        productName:"Laptop",
        priceperunit:50000,
        quantity:5,
    },
    {
        productName:"mouse",
        priceperunit:10000,
        quantity:10,
    }
  
]
function calculateTotalost(){
    let totalcost=0;
    cartItems.forEach((item)=>{
        totalcost=totalcost+item.priceperunit*item.quantity;
    });

    console.log("The total cost of the cart item is:",totalcost);
        
}

calculateTotalost()
function calculateTotalCostUsingReduce(){
    const totalcost=cartItems.reduce((previousValue,currentItem)=>{
        return previousValue+currentItem.priceperunit*currentItem.quantity
    },0);
    console.log("the total cost of shopping cart",totalcost);
}
calculateTotalCostUsingReduce();