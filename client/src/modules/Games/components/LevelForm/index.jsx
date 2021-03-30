import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { setLevel } from '../../../../redux/miniGameWords/actions';

export default function LevelForm() {
  const value = useSelector((state) => state.game.level);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setLevel(event.target.value));
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Выберите уровень игры</FormLabel>
      <RadioGroup aria-label="level" name="game-level" value={value} onChange={handleChange}>
        <FormControlLabel value="0" control={<Radio />} label="1" />
        <FormControlLabel value="1" control={<Radio />} label="2" />
        <FormControlLabel value="2" control={<Radio />} label="3" />
        <FormControlLabel value="3" control={<Radio />} label="4" />
        <FormControlLabel value="4" control={<Radio />} label="5" />
        <FormControlLabel value="5" control={<Radio />} label="6" />
      </RadioGroup>
    </FormControl>
  );
}
