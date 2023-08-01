import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateSponsorBenefitsComponent } from './corporate-sponsor-benefits.component';

describe('CorporateSponsorBenefitsComponent', () => {
  let component: CorporateSponsorBenefitsComponent;
  let fixture: ComponentFixture<CorporateSponsorBenefitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorporateSponsorBenefitsComponent]
    });
    fixture = TestBed.createComponent(CorporateSponsorBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
