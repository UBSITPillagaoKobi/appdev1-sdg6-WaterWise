import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanitationAccessTrackerComponent } from './sanitation-access-tracker.component';

describe('SanitationAccessTrackerComponent', () => {
  let component: SanitationAccessTrackerComponent;
  let fixture: ComponentFixture<SanitationAccessTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SanitationAccessTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanitationAccessTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
