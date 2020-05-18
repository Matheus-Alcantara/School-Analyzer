import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassAnalyzerComponent } from './class-analyzer.component';

describe('ClassAnalyzerComponent', () => {
  let component: ClassAnalyzerComponent;
  let fixture: ComponentFixture<ClassAnalyzerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassAnalyzerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
