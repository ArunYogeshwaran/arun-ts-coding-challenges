/**
 * Create a function that takes any non-negative number and
 * returns it with its digits in descending order.
 * Essentially, rearrange the digits to create the highest possible number.
 *
 * Note: Use `sort` and `join` array methods
 *
 * Input: 145263
 * Output: 654321
 */
export const exercise2 = (input: number): number => {
    let sortedNumbers = input.toString().split("").sort((a, b) => parseInt(b) - parseInt(a));
    let numString = sortedNumbers.join("");
    return parseInt(numString);
};
