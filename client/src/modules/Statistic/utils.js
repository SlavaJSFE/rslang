function getAllAnswers(statistics, todayId) {
  return statistics
    .map((word) => word.userWord.optional.stat[todayId])
    .map((item) => Object.values(item))
    .map((item) => {
      if (!item[0].rightAnswers) {
        return 0;
      }
      return (
        item[0].rightAnswers + (item[0].wrongAnswers ? item[0].wrongAnswers : 0)
      );
    })
    .reduce((prev, curr) => prev + curr, 0);
}

function getAllRightAnswers(statistics, todayId) {
  return statistics
    .map((word) => word.userWord.optional.stat[todayId])
    .map((item) => Object.values(item))
    .map((item) => (item[0].rightAnswers ? item[0].rightAnswers : 0))
    .reduce((prev, curr) => prev + curr, 0);
}

export { getAllAnswers, getAllRightAnswers };
