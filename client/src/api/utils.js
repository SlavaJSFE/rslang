function generateReqBody(optional, field, value) {
  const reqBody = {
    wordsPerDay: 5,
    optional: {
      ...optional,
      [field]: value,
    },
  };
  return reqBody;
}

export default generateReqBody;
