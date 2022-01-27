/**
 * Capitalize a given word
 * @param {*} word Word to be capitalized
 * @returns Capitalized word
 */
export const capitalize = (word) => {
  return (
    String(word).charAt(0).toUpperCase() +
    String(word).toLocaleLowerCase().slice(1)
  );
};
