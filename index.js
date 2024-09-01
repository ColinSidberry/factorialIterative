function factorialIterative(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}














// Example usage:
console.log(factorialIterative(3)); // Output: 6

// ---------------------------------------------------

function factorialRecursive(n) {
  if (n < 0) {
      throw new Error("Factorial is not defined for negative numbers");
  }
  if (n === 0 || n === 1) {
      return 1;
  }
  return n * factorialRecursive(n - 1);
}














// Example usage:
console.log(factorialRecursive(3)); // Output: 6
