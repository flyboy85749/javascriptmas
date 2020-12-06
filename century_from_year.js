function centuryFromYear(num) {
    console.log("enter a year");
    switch (num) {
        case 1:
            if (num >= 1 && num <= 100) {
                console.log(`Year ${num} is in the 1st century`);
            }
            break;
        default:
            console.log(`Year ${num} is not in the 1st century`);

    }
}

console.log(centuryFromYear(99));