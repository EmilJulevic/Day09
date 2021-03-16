function myDoWhile() {
    var myNumbers = ``;
    var i = 0;
    do {
        myNumbers += i;
        if (i == 9) {
            break;
        }
        myNumbers += `, `;
        i++;

    } while (i < 10);
    return myNumbers;
}
console.log(myDoWhile());
module.expotrs = myDoWhile;