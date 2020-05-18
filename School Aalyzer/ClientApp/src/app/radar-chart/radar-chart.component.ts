import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit{

  @Input() radarChartData;
  @Input() radarChartLabels;

  ngOnInit() {
    this.radarChartData = [this.radarChartData];
  }

  public radarChartOptions  = {
    responsive: true,
  };

  public ChartData = [
  ];
  public radarChartType = 'radar';
  public chartOptions: any = {
    responsive: true,
    scale: {
      ticks: {
          beginAtZero: true,
          max: 100,
          min: 0,
          stepSize: 10
      }
    }
  }
}
