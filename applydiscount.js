function applyDiscount(order){
    const discountAmount=order.ordertotal*order.discountPercentage;
    const grossAmount=order.ordertotal-discountAmount;
    return{
        ordertotal:order.ordertotal,
        discountPercentage:order.discountPercentage,
        grossAmount:grossAmount,
    }
}
const sampleOrder={
    ordertotal:1000,
    discountPercentage:0.1
}
const updateOrder=applyDiscount(sampleOrder);
console.log(sampleOrder);
console.log(updateOrder);
