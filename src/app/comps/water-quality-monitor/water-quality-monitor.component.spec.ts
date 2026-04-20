import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterQualityMonitorComponent } from './water-quality-monitor.component';

describe('WaterQualityMonitorComponent', () => {
  let component: WaterQualityMonitorComponent;
  let fixture: ComponentFixture<WaterQualityMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaterQualityMonitorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterQualityMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
