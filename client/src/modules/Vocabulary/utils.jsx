const WORDS_PER_PAGE = 20;

export default function calcPaginationCount(count) {
  return Math.ceil(count / WORDS_PER_PAGE);
}
