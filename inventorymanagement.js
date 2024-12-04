const product=[
    {
        name:"laptop",
        price:100,
        category:"electronic",
        quantity:10,
        threshold:5,
        replenishAmount:10,
    },
    {
        name:"iphone",
        price:50,
        category:"phone",
        quantity:5,
        threshold:1,
        replenishAmount:5,
    },
];
function purchaseproduct(productName,numberpurchased){
    productToPurchase=product.find((product)=>{
        return product.name===productName;
    });
    if(!productToPurchase){
        return "product not found";
    }
    const newquantity=productToPurchase.quantity-numberpurchased;
    if(newquantity<0){
        return "we dont have enough stock";
    }
    if(newquantity<=productToPurchase.threshold){
        productToPurchase.quantity=newquantity+productToPurchase.replenishAmount;
    }


    
    return "product purchased successfully";
}
const message=purchaseproduct("laptop",5);
console.log(message);
const message2=purchaseproduct("iphone",10);
console.log(message2);
