import * as moment from 'moment';
import { Post } from '../../services/api/Post'

export default (posts: Post[]) => ({
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
      label: (data: any) => {
        return `Message: ${posts[data.index].message}`;
      },
      title: (data: any) => {
        return `Auth: ${posts[data[0].index].authorName}`;
      },
      afterTitle: (data: any) => {
        return moment(posts[data[0].index].publicationTime).format('DD/MM/YYYY');
      },
      footer: (data: any) => {
        return `[start icon]: ${posts[data[0].index].mood}`;
      }
    }
  },
  scales: {
    xAxes: [{
      ticks: {
        callback: (value: Date) => moment(value).format('DD MMM')
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
});
