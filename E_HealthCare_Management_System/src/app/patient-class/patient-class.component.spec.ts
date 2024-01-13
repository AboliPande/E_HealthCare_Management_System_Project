import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientClassComponent } from './patient-class.component';

describe('PatientClassComponent', () => {
  let component: PatientClassComponent;
  let fixture: ComponentFixture<PatientClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
