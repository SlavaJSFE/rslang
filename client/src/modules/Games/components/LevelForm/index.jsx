import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import {
  setLevel,
  fetchGrupWords,
} from '../../../../redux/miniGameWords/actions';
import { DEFAULT_LEVEL } from '../../../../constants/constants';

export default function LevelForm() {
  const value = useSelector((state) => state.game.level);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setLevel(Number(event.target.value)));
    dispatch(fetchGrupWords(Number(event.target.value)));
  };

  useEffect(() => {
    dispatch(setLevel(DEFAULT_LEVEL));
    dispatch(fetchGrupWords(DEFAULT_LEVEL));
  }, []);

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Выберите уровень игры</FormLabel>
      <RadioGroup
        aria-label="level"
        name="game-level"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value={0} control={<Radio />} label="1" />
        <FormControlLabel value={1} control={<Radio />} label="2" />
        <FormControlLabel value={2} control={<Radio />} label="3" />
        <FormControlLabel value={3} control={<Radio />} label="4" />
        <FormControlLabel value={4} control={<Radio />} label="5" />
        <FormControlLabel value={5} control={<Radio />} label="6" />
      </RadioGroup>
    </FormControl>
  );
}
