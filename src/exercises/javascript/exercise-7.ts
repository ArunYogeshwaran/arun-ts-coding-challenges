/**
 * Implement a function that takes an array and groups the values into
 * two arrays: one with truthy values and the other with falsy values.
 *
 * Note: Use `reduce` array method.
 *
 * Input: [0, "hello", false, 42, "", null]
 * Output: {"truthy": ["hello", 42], "falsy": [0, false, "", null]}
 */
export const exercise7 = (
  input: TValue[]
): { truthy: TValue[]; falsy: TValue[] } => {
  const truthyArray: TValue[] = [];
  const falsyArray: TValue[] = [];

  for (const value of input) {
    if (value) {
      truthyArray.push(value);
    } else {
      falsyArray.push(value);
    }
  }
  
  return { truthy: truthyArray, falsy: falsyArray };
};

type TValue = string | number | object | null | undefined | boolean;
