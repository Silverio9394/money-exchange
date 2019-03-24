// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
   if (currency > 10000) {
       return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
   if (currency <= 0) {
       return {};
   } 
   if (currency > 0 && currency <= 10000) {
    let H, Q, D, N, P;
    currency1 = currency % 50; 
    H = (currency - currency1) / 50; 
    
    currency2 = currency1 % 25;
    Q = (currency1 - currency2) / 25;
    
    currency3 = currency2 % 10;
    D = (currency2 - currency3) / 10;
   
    currency4 = currency3 % 5;
    N = (currency3 - currency4) / 5;
    
    P = currency4;

   var currencyResult = {
    'H':H,"Q":Q,"D":D,"N":N,"P":P  
}
   
   if ( H == 0 ){
     delete currencyResult.H;
 } 
   if ( Q == 0 ){
    delete currencyResult.Q;
}
   if ( D == 0 ){
    delete currencyResult.D;
}
   if ( N == 0 ){
    delete currencyResult.N;
}
   if ( P == 0 ){
    delete currencyResult.P;
}
   }
   return currencyResult;
   }
   
   
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

