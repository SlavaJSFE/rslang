import React from 'react';

import server from '../../constants/constants';

const Word = ({ word }) => (
  <div>
    <img src={`${server}${word.image}`} alt="" style={{ width: '100px' }} />
    <p>{word.word}</p>
    {/* <p>{word.textMeaning}</p> */}
  </div>
);

export default Word;
