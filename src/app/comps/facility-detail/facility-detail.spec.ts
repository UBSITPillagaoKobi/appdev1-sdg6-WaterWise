import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityDetail } from './facility-detail';

describe('FacilityDetail', () => {
  let component: FacilityDetail;
  let fixture: ComponentFixture<FacilityDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacilityDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacilityDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
