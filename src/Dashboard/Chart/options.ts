import * as moment from 'moment';

export default {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  tooltips: {
    custom(tooltip: any) {
      if (!tooltip) {
        return;
      }
      tooltip.displayColors = false;
    },
    callbacks: {
      label: () => 'Message: I\'m happy...#happy @victoria @michael',
      title: () => 'Auth: Michael',
      afterTitle: () => 'hh:mm dd.mm',
      footer: () => '[start icon]: 4'
    }
  },
  scales: {
    xAxes: [{
      ticks: {
        callback: (value: any) => moment(value).format('DD MMM')
      },
      gridLines: {
        display: false
      }
    }],
    yAxes: [{
      ticks: {
        min: 0,
        max: 4,
        stepSize: 1
      },
      gridLines: {
        display: false
      }
    }]
  }
};
