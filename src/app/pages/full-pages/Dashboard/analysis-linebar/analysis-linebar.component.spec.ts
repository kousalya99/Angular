import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisLinebarComponent } from './analysis-linebar.component';

describe('AnalysisLinebarComponent', () => {
  let component: AnalysisLinebarComponent;
  let fixture: ComponentFixture<AnalysisLinebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisLinebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisLinebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
