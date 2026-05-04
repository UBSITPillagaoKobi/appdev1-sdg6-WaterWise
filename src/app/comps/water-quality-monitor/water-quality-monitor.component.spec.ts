import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterQualityComponent } from './water-quality-monitor.component';

describe('WaterQualityMonitorComponent', () => {
  let component: WaterQualityComponent;
  let fixture: ComponentFixture<WaterQualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaterQualityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
