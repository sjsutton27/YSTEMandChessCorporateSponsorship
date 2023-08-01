import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TierOfSponsorsComponent } from './tier-of-sponsors.component';

describe('TierOfSponsorsComponent', () => {
  let component: TierOfSponsorsComponent;
  let fixture: ComponentFixture<TierOfSponsorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TierOfSponsorsComponent]
    });
    fixture = TestBed.createComponent(TierOfSponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
