import * as moment from 'moment';

export default {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  layout: {
    padding: {
      top: 25,
      bottom: 25,
      left: 25,
      right: 25
    }
  },
  tooltips: {
    custom: (tooltip) => {
      if (!tooltip) {
        return;
      }
      tooltip.displayColors = false;
    },
    callbacks: {
      label: () => 'Message: Bla bla bla bla bla...',
      title: () => 'Michael',
      footer: () => 'Mood: 4'
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
      gridLines: {
        display: false
      }
    }]
  }
};
