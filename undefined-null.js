let first;
// console.log(first)

function second(x, y) {
    const sum = x + y;
}
// console.log(second(10, 5))

function add(a, b) {
    const sum = a + b;
    return;
}
// console.log(add(5, 10))

function add1(a, b) {
    const sum = a + b;
    if (b < 10) {
        return;
    }
    return sum;
}
// console.log(add1(5, 8));

function double(a, b) {
    const result = a * 2;
    // console.log(b)
    return result;
}
double(5)

const fifth = {
    name: 'Shahadad', age: 21
}
// console.log(fifth.heigth)
const sixth = [12, 25, 763, 782];
// console.log(sixth[4])

delete sixth[2];
// console.log(sixth)
// console.log(sixth[2])

const a = undefined;
// console.log(a)