import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterConservationGuideComponent } from './water-conservation-guide.component';

describe('WaterConservationGuideComponent', () => {
  let component: WaterConservationGuideComponent;
  let fixture: ComponentFixture<WaterConservationGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaterConservationGuideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaterConservationGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
