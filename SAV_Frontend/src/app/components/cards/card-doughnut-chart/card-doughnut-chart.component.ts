import { Component, OnInit, AfterViewInit } from "@angular/core";
import Chart, { ChartConfiguration, plugins } from 'chart.js/auto';

@Component({
  selector: "app-card-doughnut-chart",
  templateUrl: "./card-doughnut-chart.component.html",
})
export class CardDoughnutChartComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {
    const config: ChartConfiguration<'doughnut'> = {
      type: 'doughnut', // Remplacez 'line' par 'doughnut'
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        datasets: [
          {
            label: `${new Date().getFullYear()}`,
            backgroundColor: [
              '#4c51bf',
              '#ff6384',
              '#36a2eb',
              '#cc65fe',
              '#ffce56',
              '#2ecc71',
              '#e74c3c',
            ],
            borderColor: '#fff',
            data: [65, 78, 66, 44, 56, 67, 75],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Sales Distribution',
            color: 'white',
          },
          legend: {
            labels: {
              color: 'white',
            },
            position: 'bottom',
          },
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                return `${tooltipItem.label}: ${tooltipItem.raw}`;
              },
            },
          },
        },
      },
    };
    
    const canvas = document.getElementById('doughnut-chart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      new Chart(ctx, config);
    }
  }
}
// const config: ChartConfiguration<'line'> = {
//   type: 'line', // Type de graphique explicitement défini comme 'line'
//   data: {
//     labels: [
//       'January',
//       'February',
//       'March',
//       'April',
//       'May',
//       'June',
//       'July',
//     ],
//     datasets: [
//       {
//         label: `${new Date().getFullYear()}`,
//         backgroundColor: '#4c51bf',
//         borderColor: '#4c51bf',
//         data: [65, 78, 66, 44, 56, 67, 75],
//         fill: false,
//       },
//       {
//         label: `${new Date().getFullYear()}`,
//         backgroundColor: '#fff',
//         borderColor: '#fff',
//         data: [40, 68, 86, 74, 56, 60, 87],
//         fill: false,
//       },
//     ],
//   },
//   options: {
//     maintainAspectRatio: false,
//     responsive: true,
//     plugins: {
//       title: {
//         display: false,
//         text: 'Sales Charts',
//         color: 'white',
//       },
//       legend: {
//         labels: {
//           color: 'white',
//         },
//         align: 'end',
//         position: 'bottom',
//       },
//       tooltip: {
//         mode: 'index',
//         intersect: false,
//       },
      
//     },
//     hover: {
//       mode: 'nearest',
//       intersect: true,
//     },
//     scales: {
//       x: {
//         ticks: {
//           color: 'rgba(255,255,255,.7)',
//         },
//         title: {
//           display: false,
//           text: 'Month',
//           color: 'white',
//         },
//         grid: {
//           display: false,
//           color: 'rgba(33, 37, 41, 0.3)',
//         },
//       },
//       y: {
//         ticks: {
//           color: 'rgba(255,255,255,.7)',
//         },
//         title: {
//           display: false,
//           text: 'Value',
//           color: 'white',
//         },
//         grid: {
//           // drawBorder: false,
//         },
//       },
//     },
//   },
// };

// const canvas = document.getElementById('line-chart') as HTMLCanvasElement;
// const ctx = canvas.getContext('2d');
// if (ctx) {
//   new Chart(ctx, config);
// }
// }