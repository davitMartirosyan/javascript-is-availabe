function pricePlan(a,b,c){
    if(c <= (a + b))
        return a + b - c;
    else{
        return false;
    }
}


console.log(pricePlan(4,5,5))
