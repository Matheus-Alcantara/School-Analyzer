import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http'

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {

  public chart: BarChartData;
  public chartLabels: any[] = [
    "1ºgrade",
    "2ºgrade",
    "3ºgrade",
    "4ºgrade",
    "5ºgrade",
    "6ºgrade",
    "7ºgrade",
    "8ºgrade",
    "9ºgrade"
  ]
  public chartLegend = false;
  public chartType = 'bar';
  public chartOptions: any = {
    responsive: true,
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true
          }
      }]
    }
  }

  constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
      http.get(baseUrl + 'api/BarChart/GetBarChartData').subscribe(result => {
          this.chart = result.json() as BarChartData;
        }, error => console.error(error));
  }
}

interface ChartData2 {
  data: Array<number>;
  Label: string;
}

interface BarChartData {
  chartData2List: ChartData2[];
  barChartLabels: string[];
}
