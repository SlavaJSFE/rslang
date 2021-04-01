import React from 'react';

import { server } from '../../constants/constants';

export default function ImageComponent(image) {
  return (
    <img src={`${server}/${image.image}`} alt="word" />
  );
}
