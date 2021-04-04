export const setItem = (name, value) => {
  window.localStorage.setItem(name, JSON.stringify(value));
};

export const getItem = (name) => JSON.parse(window.localStorage.getItem(name) || null);

export const setRightAnswer = (word, reqBody) => {
  const words = getItem('words');
  setItem('words', {
    ...words,
    [word.id]: {
      ...word,
      userWord: {
        ...word.userWord,
        optional: {
          ...word.userWord.optional,
          rightAnswers: reqBody.optional.rightAnswers,
        },
      },
    },
  });
};

export const setWrongAnswer = (word, reqBody) => {
  const words = getItem('words');
  setItem('words', {
    ...words,
    [word.id]: {
      ...word,
      userWord: {
        ...word.userWord,
        optional: {
          ...word.userWord.optional,
          wrongAnswers: reqBody.optional.wrongAnswers,
        },
      },
    },
  });
};
