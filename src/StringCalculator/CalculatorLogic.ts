export default class StringCalculatorLogic {
    add(numbers: string): number {
      if (!numbers) return 0;
  
      // Remove any quotes and normalize the string
      numbers = numbers.replace(/["']/g, '')
                      .replace(/\\n/g, '\n');
  
      let delimiter = ',|\\n'; // Default delimiters
      
      // Check for custom delimiter syntax
      if (numbers.startsWith('//')) {
        const firstNewline = numbers.indexOf('\n');
        if (firstNewline !== -1) {
          delimiter = numbers.substring(2, firstNewline);
          numbers = numbers.substring(firstNewline + 1);
        }
      }
  
      // Split by delimiter(s)
      const numArray = numbers
        .split(new RegExp(delimiter))
        .map(str => str.trim())
        .filter(str => str.length > 0)
        .map(Number);
  
      // Check for negative numbers
      const negativeNumbers = numArray.filter((num) => num < 0);
      if (negativeNumbers.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(", ")}`);
      }
  
      return numArray.reduce((sum, num) => sum + num, 0);
    }
  }