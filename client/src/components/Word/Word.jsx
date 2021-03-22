import React from 'react';

const Word = ({ word }) => {
  return (
    <div>
      {/* <img src={word.img} alt="" /> */}
      <p>{word.word}</p>
    </div>
  );
};

export default Word;
