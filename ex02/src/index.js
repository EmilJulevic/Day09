function myFunction(myParametar) {

    if (myParametar) {
        return "The parametar is true!";
    }

    return "The parametar is false!";

}

console.log(myFunction(true));
console.log(myFunction(false));
module.exports = myFunction;