function depositProfit(deposit, rate, threshold) {
    // need to find out in what year a deposit of $100, at a rate of 20%, will reach $170.
    // convert 20 to percentage
    interest = (deposit * (rate/100)) + deposit;
    console.log(interest);
    // figure the subtotal 
    subTotal = deposit * interest;

    // balance
    balance = subTotal + deposit;

    // create empty array to hold values
    years = [];
}

    

depositProfit(100, 20)