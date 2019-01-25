import { ChartData, ChartDataItem } from '../types';

const average = (array: number[]) => array.reduce((a, b) => a + b, 0) / array.length;

export const getLineData = (moodData: ChartData) => {
  return moodData
    .reduce((res: ChartData, moodInfo: ChartDataItem) => {
      return [
        ...res,
        {
          x: moodInfo.x,
          y: average(moodData.reduce((moods: number[], val: ChartDataItem) => {
            if (moodInfo.x !== val.x) {
              return moods;
            }
            return [...moods, val.y]
          }, []))
        }
      ]
    }, []);
};

export const getChartData = (moodData: ChartData, lineData: ChartData) => ({
  datasets: [
    {
      data: moodData,
      label: 'Mood',
      radius: 4
    },
    {
      label: 'Line',
      type: 'line',
      tension: 0.2,
      fill: false,
      showLine: true,
      data: lineData
    }
  ]
});
