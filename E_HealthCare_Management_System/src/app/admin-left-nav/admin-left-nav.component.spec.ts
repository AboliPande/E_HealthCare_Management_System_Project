import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLeftNavComponent } from './admin-left-nav.component';

describe('AdminLeftNavComponent', () => {
  let component: AdminLeftNavComponent;
  let fixture: ComponentFixture<AdminLeftNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLeftNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLeftNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
