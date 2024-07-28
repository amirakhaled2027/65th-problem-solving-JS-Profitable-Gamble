//Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false

function profitableGamble(prob, prize, pay) {
    if ((prob * prize) > pay) {
        return true;
    }
    else {
        return false;
    }
}
console.log(profitableGamble(0.2, 50, 9));
console.log(profitableGamble(0.9, 1, 2));
console.log(profitableGamble(0.9, 3, 2));