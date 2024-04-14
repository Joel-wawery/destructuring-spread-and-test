function getMinMaxSum(numbers) {
    // Destructure minimum and maximum values using spread syntax
    const [min, ...rest] = numbers;
    const max = Math.max(...numbers); // Find max using spread syntax
  
    // Calculate sum using reduce with rest parameter
    const sum = rest.reduce((accumulator, value) => accumulator + value, min);
  
    // Return object with min, max, and sum properties
    return { min, max, sum };
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5];
  const result = getMinMaxSum(numbers);
  console.log(result); // { min: 1, max: 5, sum: 15 }
  