function getAllDate(statistics) {
  const dataSet = new Set();
  if (statistics) {
    let dates = [];
    dates = statistics.map((word) => (Object.keys(word.userWord.optional.stat)));
    dates.map((el) => (
      // eslint-disable-next-line no-return-assign
      el.map((el2) => (dataSet.add(el2)))
    ));
  }
  return Array.from(dataSet);
}

function getAllBarValues(statistics) {
  const resultArr = [];
  if (statistics) {
    const datesArr = getAllDate(statistics);
    datesArr.forEach((date, idx) => {
      const date2 = date.replaceAll('"', '');
      resultArr[idx] = statistics
        .map((word) => word.userWord.optional.stat[date2])
        .filter((item) => item !== undefined)
        .map((item) => Object.values(item))
        .map((item) => (item[0].rightAnswers ? item[0].rightAnswers : 0))
        .reduce((prev, curr) => prev + curr, 0);
    });
  }
  return resultArr;
}

function getAllLineValues(statistics) {
  const rightAnswers = getAllBarValues(statistics);
  const resultArr = [];
  rightAnswers.forEach((value, idx) => {
    resultArr[idx] = idx === 0 ? value : resultArr[idx - 1] + value;
  });
  return resultArr;
}

export { getAllDate, getAllBarValues, getAllLineValues };
