const wordsOnPage = 20;

export default function calcCountPagination(count) {
  return Math.ceil(count / wordsOnPage);
}

export function calcLastWordIndex(wordsCount, value) {
  const lastIndex = Math.ceil((value) * 20);
  return wordsCount < lastIndex ? wordsCount : lastIndex;
}
