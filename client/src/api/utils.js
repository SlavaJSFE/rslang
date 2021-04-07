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

export function getVocabularyFilter(typeWords) {
  switch (typeWords) {
    case 'studied': return { $or: [{ 'userWord.difficulty': 'medium' }, { 'userWord.difficulty': 'hard' }] };
    case 'difficult': return { $and: [{ 'userWord.difficulty': 'hard' }] };
    case 'deleted': return { $and: [{ 'userWord.difficulty': 'easy' }] };
    default: return { $or: [{ 'userWord.difficulty': 'easy' }, { 'userWord.difficulty': 'hard' }] };
  }
}
