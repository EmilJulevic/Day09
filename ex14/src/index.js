function myForLoop1() {
    var evenNumbers = ``;
    var count = 1;
    for (var i = 0; i < 10; i += 2) {
        if (count == 5) {
            evenNumbers += i;
            break;
        }
        evenNumbers += i;
        evenNumbers += `, `;
    }
    return evenNumbers;
}
function myForLoop2() {
    var evenInverseNumbers = ``;
    var count = 1;
    for (var i = 8; i >= 0; i -= 2) {
        if (count == 5) {
            evenInverseNumbers += i;
            break;
        }
        evenInverseNumbers += i;
        evenInverseNumbers += `, `;
    }
    return evenInverseNumbers;
}

module.expotrs = {
    myForLoop1,
    myForLoop2
};
console.log(myForLoop1());
console.log(myForLoop2());
