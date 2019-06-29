const first = () => {
    const greet = "hi";
    const second = (greet) => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();


// Closure - a function ran, the function executed. It is never going
// to execute again but it is going to remmeber that there are references to
// those variable so the child always has access to the parent scope.

// Currying
const multiply = (a, b) => a * b;
const curriedMultiple = (a) => (b) => a * b;
curriedMultiple(3)(4);

constMultiplyBy5 = curriedMultiple(5);

// Compose

const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num +1;

compose(sum, sum)(5);

// Determinastic function -- functional purity