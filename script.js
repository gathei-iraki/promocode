document.getElementById("click").onclick=function(){
    const promo=document.getElementById("promo").value;
    const amount=document.getElementById("amount").value;
    const disone=25/100;
    const distwo=27/100;
    const disthree=30/100;
    const disfour=15/100;



if(amount>20000 && promo=="KARIBU"){
    const priceone=amount*disone;
    const finalone=amount-priceone;
    document.querySelector(".details").innerText=`Discount amount is ${priceone}`;
    document.querySelector(".info").innerText=` Amount to be payed is KES ${finalone} `;

}

else if(amount<20000 && promo=="KARIBU"){
    document.querySelector(".details").innerText=`You are not eligible for a discount`;
    document.querySelector(".info").innerText=` Amount to be payed is KES ${amount} `;

}

else if(amount==20000 && promo=="KARIBU"){
    document.querySelector(".details").innerText=`You are not eligible for a discount`;
    document.querySelector(".info").innerText=` Amount to be payed is KES ${amount} `;

}

else if(amount>50000 && promo=="KARIBU"){
    const pricetwo=amount*distwo;
    const finaltwo=amount-pricetwo;
    document.querySelector(".details").innerText=` Discount amount is ${pricetwo}`;
    document.querySelector(".info").innerText=`Amount to be payed is KES ${finaltwo} `;

}





else if(amount>100000 && promo=="KARIBU"){
    const pricethree=amount*disthree;
    const finalthree=amount-pricethree;
    document.querySelector(".details").innerText=` Discount amount is ${pricethree}`;
    document.querySelector(".info").innerText=`Amount to be payed is KES ${finalthree} `;

}

else if(amount>10000 && promo=="Nairobi"){
    const pricefour=amount*disfour;
    const finalfour=amount-pricefour;
    document.querySelector(".details").innerText=` Discount amount is ${pricefour}`;
    document.querySelector(".info").innerText=`Amount to be payed is KES ${finalfour} `;

}
else if(amount<10000 && promo=="Nairobi"){
   
    document.querySelector(".details").innerText=`You are not eligible for a discount`;
    document.querySelector(".info").innerText=` Amount to be payed is KES ${amount} `;
}

else if(amount==10000 && promo=="Nairobi"){
   
    document.querySelector(".details").innerText=`You are not eligible for a discount`;
    document.querySelector(".info").innerText=` Amount to be payed is KES ${amount} `;
}

else if(typeof promo === "string" && promo.length === 0) {
    document.querySelector(".details").innerText="No discount applied"
    document.querySelector(".info").innerText=`Amount to be payed is KES ${amount} `;



}

else{
    document.querySelector(".details").innerText="Invalid promo code,No discount applied"
    document.querySelector(".info").innerText=`Amount to be payed is KES ${amount} `;
}
}