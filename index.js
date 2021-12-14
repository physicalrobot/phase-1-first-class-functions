function callback() {
    console.log('hello');
}

function receivesAFunction(callback) {

    return callback();
}

function returnsANamedFunction() {

    return function lollipop() {
        console.log('biggie');
    };


}

function returnsAnAnonymousFunction() {

    return function () {
        console.log('hell0');
    }
}