import { getAllDate } from '../../pages/statisticsPage/utils';

export default function calcRightAnswersByWord(statistics) {
  const resultArr = [];
  // const datesArr = getAllDate(statistics);
  // datesArr.forEach((date, idx) => {
  //   const date2 = date.replaceAll('"', '');
  //   resultArr[idx] = statistics
  //     .map((word) => word.userWord.optional.stat[date2])
  //     .filter((item) => item !== undefined)
  //     .map((item) => Object.values(item))
  //     .map((item) => (item[0].rightAnswers ? item[0].rightAnswers : 0))
  //     .reduce((prev, curr) => prev + curr, 0);
  // });
  return 5;
}
