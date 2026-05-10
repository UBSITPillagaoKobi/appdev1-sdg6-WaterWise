import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityCard } from './facility-card';

describe('FacilityCard', () => {
  let component: FacilityCard;
  let fixture: ComponentFixture<FacilityCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacilityCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
