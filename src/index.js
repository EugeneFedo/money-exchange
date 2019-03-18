// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let coins = {};
    let halfs;
    let quarters;
    let dimes;
    let nickels;
    let pennies;
    let remainder;
    if (currency > 10000) {
        coins.error = "You are rich, my friend! We don't have so much coins for exchange";
    } else if (currency >= 50) {
        halfs = Math.floor(currency / 50);
        coins.H = halfs;
        remainder = currency % 50;
        if (remainder >= 25) {
          quarters = Math.floor(remainder / 25);
          coins.Q = quarters;
          remainder = remainder % 25;
        }
        if (remainder >= 10) {
            dimes = Math.floor(remainder / 10);
            coins.D = dimes;
            remainder = remainder % 10;
        }
        if (remainder >= 5) {
              nickels = Math.floor(remainder / 5);
              coins.N = nickels;
              remainder = remainder % 5;
        }
        if (remainder >= 1) {
                pennies = Math.floor(remainder / 1);
                coins.P = pennies;
    }} else if (currency >= 25) {
          quarters = Math.floor(currency / 25);
          coins.Q = quarters;
          remainder = currency % 25;
          if (remainder >= 10) {
            dimes = Math.floor(remainder / 10);
            coins.D = dimes;
            remainder = remainder % 10;
          }
          if (remainder >= 5) {
              nickels = Math.floor(remainder / 5);
              coins.N = nickels;
              remainder = remainder % 5;
          }
          if (remainder >= 1) {
                pennies = Math.floor(remainder / 1);
                coins.P = pennies;
    }} else if (currency >= 10) {
            dimes = Math.floor(currency / 10);
            coins.D = dimes;
            remainder = currency % 10;
            if (remainder >= 5) {
              nickels = Math.floor(remainder / 5);
              coins.N = nickels;
              remainder = remainder % 5;
            }
            if (remainder >= 1) {
                pennies = Math.floor(remainder / 1);
                coins.P = pennies;
    }} else if (currency >= 5) {
              nickels = Math.floor(currency / 5);
              coins.N = nickels;
              remainder = currency % 5;
              if (remainder >= 1) {
                pennies = Math.floor(remainder / 1);
                coins.P = pennies;
    }} else if (currency >= 1) {
              pennies = Math.floor(currency / 1);
              coins.P = pennies;
}
  return coins;
}
    


