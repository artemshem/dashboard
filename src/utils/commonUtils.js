
import { DateTime } from 'luxon';

export const capitalize = (value) => {
  let word = value.split('');
  word[0] = word[0].toUpperCase();
  return word.join('');
}