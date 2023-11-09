import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssesmentTypeComponent } from './assesment-type.component';

describe('AssesmentTypeComponent', () => {
  let component: AssesmentTypeComponent;
  let fixture: ComponentFixture<AssesmentTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssesmentTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssesmentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
