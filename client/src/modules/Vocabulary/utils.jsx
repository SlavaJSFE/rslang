export const wordsOnPage = 20;
export const startWordOnPage = 0;
export const primaryPage = 1;

export default function calcCountPagination(count) {
  return Math.ceil(count / wordsOnPage);
}

export function calcLastWordIndex(wordsCount, value) {
  const lastIndex = Math.ceil((value) * wordsOnPage);
  return wordsCount < lastIndex ? wordsCount : lastIndex;
}
