import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionsLinebarComponent } from './submissions-linebar.component';

describe('SubmissionsLinebarComponent', () => {
  let component: SubmissionsLinebarComponent;
  let fixture: ComponentFixture<SubmissionsLinebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionsLinebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionsLinebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
