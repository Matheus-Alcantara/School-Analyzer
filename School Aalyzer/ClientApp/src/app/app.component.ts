import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{

  title = 'app';

  constructor(private _httpService: Http) { }
    
  accessPointUrl: string = 'https://localhost:5001/student-analyzer';

  apiValues: string[] = [];

  ngOnInit() {
    this._httpService.get(this.accessPointUrl).subscribe(values => {
      this.apiValues = values.json() as string[];
    });
  }
}
