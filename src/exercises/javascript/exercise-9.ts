/**
 * Implement a function that takes a synchronous function as a parameter and returns an asynchronous function.
 * The returned async function should delay its execution by a specified number of milliseconds (provided as a second parameter)
 * and then resolve with the same result as the original function.
 *
 * Input: A synchronous function and a delay in milliseconds
 * Output: An async function that delays for the specified time and returns the result of the original function as a promise.
 */
export const exercise9 = <T>(
  fn: SyncFunction<T>,
  delay: number
): ((...args: Parameters<SyncFunction<T>>) => Promise<T>) => {
  // I understand this on a high level, but I would like to understand the details of how this works.
  return async (...args: Parameters<SyncFunction<T>>): Promise<T> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(fn(...args));
      }, delay);
    });
  };
};

type SyncFunction<T> = (...args: any[]) => T;
