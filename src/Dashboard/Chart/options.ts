import * as moment from 'moment';

export default {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  tooltips: {
    enabled: false,
    custom(tooltip: any) {
      if (!tooltip) {
        return;
      }
      tooltip.displayColors = false;

      let el: any = document.getElementById('chartjs-tooltip');

      // Create element on first render
      if (!el) {
        el = document.createElement('div');
        el.id = 'chartjs-tooltip';
        el.innerHTML = "<table></table>";
        document.body.appendChild(el);
      }

      // Hide if no tooltip
      if (tooltip.opacity === 0) {
        el.style.opacity = 0;
        return;
      }

      // Set caret Position
      el.classList.remove('above', 'below', 'no-transform');
      if (tooltip.yAlign) {
        el.classList.add(tooltip.yAlign);
      } else {
        el.classList.add('no-transform');
      }

      function getBody(bodyItem: any) {
        return bodyItem.lines;
      }

      // Set Text
      if (tooltip.body) {
        const titleLines = tooltip.title || [];
        const bodyLines = tooltip.body.map(getBody);
        let innerHtml = '<thead style="display: flex; flex-direction: row;">';

        titleLines.forEach((title: any) => {
          console.log(title);

          innerHtml += '<tr><th>' + title + '</th></tr>';
        });

        innerHtml += '</thead><tbody>';

        bodyLines.forEach(function(body: any, i: any) {
          const colors = tooltip.labelColors[i];
          let style = 'background: #ccc';
          style += '; width: 100px';
          style += '; border-color:' + colors.borderColor;
          style += '; border-width: 2px';
          const span = '<span style="' + style + '"></span>';
          innerHtml += '<tr><td>' + span + body + '</td></tr>';
        });
        innerHtml += '</tbody>';

        console.log(innerHtml);

        const tableRoot = el.querySelector('table');
        tableRoot.innerHTML = innerHtml;
      }

      const position = (this as any)._chart.canvas.getBoundingClientRect();

      el.style.opacity = 1;
      el.style.position = 'absolute';
      el.style.left = position.left + window.pageXOffset + tooltip.caretX + 'px';
      el.style.top = position.top + window.pageYOffset + tooltip.caretY + 'px';
      // el.style.fontFamily = tooltip._bodyFontFamily;
      // el.style.fontSize = tooltip.bodyFontSize + 'px';
      // el.style.fontStyle = tooltip._bodyFontStyle;
      el.style.padding = tooltip.yPadding + 'px ' + tooltip.xPadding + 'px';
      // el.style.pointerEvents = 'none';
    },
    callbacks: {
      label: () => 'Message: I\'m happy...#happy @victoria @michael',
      title: () => 'Auth: Michael  hh:mm dd.mm',
      footer: () => '[start icon]: 4'
    }
  },
  scales: {
    xAxes: [{
      min: 0,
      stepSize: 1,
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
