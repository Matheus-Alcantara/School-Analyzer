import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { HttpModule } from '@angular/http';
import { MatToolbarModule, MatExpansionModule } from '@angular/material'

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ClassAnalyzerComponent } from './class-analyzer/class-analyzer.component';
import { StudentAnalyzerComponent } from './student-analyzer/student-analyzer.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ClassAnalyzerComponent,
    StudentAnalyzerComponent,
    BarChartComponent,
    RadarChartComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    MatExpansionModule,
    NgbModule,
    MatToolbarModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: ClassAnalyzerComponent, pathMatch: 'full' },
      { path: 'class-analyzer', component: ClassAnalyzerComponent, pathMatch: 'full' },
      { path: 'student-analyzer', component: StudentAnalyzerComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
