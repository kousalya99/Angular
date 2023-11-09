import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespondentLinebarComponent } from './respondent-linebar.component';

describe('RespondentLinebarComponent', () => {
  let component: RespondentLinebarComponent;
  let fixture: ComponentFixture<RespondentLinebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespondentLinebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespondentLinebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
