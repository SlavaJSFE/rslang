const wordsOnPage = 20;

export default function calcCountPagination(count) {
  return Math.ceil(count / wordsOnPage);
}
