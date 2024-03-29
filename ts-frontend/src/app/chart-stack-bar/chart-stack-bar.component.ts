import {Component} from '@angular/core';
import {BaseChartComponent} from "../base-chart/base-chart.component";

@Component({
  selector: 'app-chart-stack-bar',
  templateUrl: '../base-chart/base-chart.component.html',
  styleUrl: '../base-chart/base-chart.component.css'
})
export class ChartStackBarComponent extends BaseChartComponent {
  updateChart() {
    this.chartOptions = {
      xAxis: {
        type: 'category',
        data: this.chartData.map(item => item.Letter)
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Frequency',
          type: 'bar',
          stack: 'total',
          label: {show: true},
          emphasis: {
            focus: 'series'
          },
          data: this.chartData.map(item => item.Freq)
        }
      ]
    };
  }
}
