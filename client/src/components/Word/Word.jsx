import React from 'react';

import { server } from '../../constants/constants';

const Word = ({ word, ...props }) => (
  <div {...props}>
    <img src={`${server}${word.image}`} alt={word.word} />
    <p>{word.word}</p>
    {/* <p>{word.textMeaning}</p> */}
  </div>
);

export default Word;
