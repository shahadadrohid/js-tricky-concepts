function add(a, b) {
    const sum = a + b;
    if (sum > 10) {
        let mood = 'happy';
    }
    // Block scope only when declare let and const
    console.log(mood)
    return sum;
}
const sum = add(5, 10);
// Local scope 
// console.log(a)

// Global scope 
const favNumber = 10;
