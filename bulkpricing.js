const product={
    name:"laptop",
    bulkpricing:[
        {
           minquantity:10,
            priceperunit:100,
            maxquantity:19
        },
        {
            minquantity:20,
            priceperunit:50,
            maxquantity:29,
        }
    ],
};
function calculatetotalprice(quantitypurchaseed){
    const pricingmodepurchased=product.bulkpricing.find((pricing)=>{
        return( quantitypurchaseed>=pricing.minquantity && quantitypurchaseed<=pricing.maxquantity);
    });
    return quantitypurchaseed*pricingmodepurchased.priceperunit;
}
//console.log(calculatetotalprice(5));
console.log(calculatetotalprice(10));
console.log(calculatetotalprice(15));
console.log(calculatetotalprice(20));
console.log(calculatetotalprice(25));