import React from 'react';

import server from '../../constants/constants';

const Word = ({ word }) => {
  return (
    <div>
      <img src={`${server}${word.image}`} alt="" />
      <p>{word.word}</p>
      <p>{word.textMeaning}</p>
    </div>
  );
};

export default Word;
