const dates = [
  '01/01/2019',
  '01/02/2019',
  '01/03/2019',
  '01/04/2019',
  '01/05/2019',
  '01/06/2019',
  '01/07/2019'
].map(i => new Date(i).getTime());

const day = () => dates[Math.round(Math.random() * dates.length)];
const mood = () => Math.round(Math.random() * 4);
const mean = (array: number[]) => array.reduce((a, b) => a + b, 0) / array.length;

export const getMoodData = () => Array.from(Array(50).keys()).map(() => ({ x: day(), y: mood() }));
export const getApproximationOfMoodData = () => dates
  .map((date) => ({ x: date, y: mean(getMoodData().filter(i => i.x === date).map(i => i.y)) }));
