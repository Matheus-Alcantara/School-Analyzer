import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-student-analyzer',
  templateUrl: './student-analyzer.component.html',
  styleUrls: ['./student-analyzer.component.css']
})
export class StudentAnalyzerComponent {

  Data;
  public isCollapsed = true;

  constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
    http.get(baseUrl + 'api/RadarChart/GetRadarChartData').subscribe(result => {
      this.Data = result.json();
    }, error => console.error(error));
  }
}

class Data {
  RadarChartData: RadarChartData[];
}

class ChartData {
  data: Array<number>;
  label: string;
}

class RadarChartData {
  chartData: ChartData[];
  chartLabels: string[];
}



