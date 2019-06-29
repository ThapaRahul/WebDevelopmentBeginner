var database = [
    {
        username: "andrei",
        password: "supersecret"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning!"
    },
    {
        username: "Sally",
        timeline: "Javascript is sooooo cool!"
    },
    {
        username: "Mitch",
        timeline: "Javascript is preeetyy cool!"
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");


function isUserValid(user, pass) {
    for (var i = 0; i < database.length; i++) {
        if (user === database[i].username &&
            pass === database[i].password) {
            return true;
        }
    }
    return false;
}

function signIn(user, pass) {
    if (isUserValid(user, pass)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username or password");
    }
}

signIn(userNamePrompt, passwordPrompt);





