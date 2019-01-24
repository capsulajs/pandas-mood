const average = (array: number[]) => array.reduce((a, b) => a + b, 0) / array.length;

export const getApproximationOfMoodData = (moonData: any[]) => {
  const averageMood = average(moonData.map())
  return moonData
    .reduce((res, val) => {

    }, {})
    .map((date) => ({ x: date, y: mean(getMoodData().filter(i => i.x === date).map(i => i.y)) }));
};
