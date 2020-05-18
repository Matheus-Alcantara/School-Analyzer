import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAnalyzerComponent } from './student-analyzer.component';

describe('StudentAnalyzerComponent', () => {
  let component: StudentAnalyzerComponent;
  let fixture: ComponentFixture<StudentAnalyzerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentAnalyzerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
