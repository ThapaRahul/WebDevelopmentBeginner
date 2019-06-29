// condition ? exp1 : exp2

function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access denied!"

var automatedAnser = "Your account # is " + (isUserValid(false) ? "1234" : "not available");

// Switch statement

function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "back":
            whatHappens = "you found a river";
            break;
        case "back":
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}