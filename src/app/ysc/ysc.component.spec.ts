import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YSCComponent } from './ysc.component';

describe('YSCComponent', () => {
  let component: YSCComponent;
  let fixture: ComponentFixture<YSCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YSCComponent]
    });
    fixture = TestBed.createComponent(YSCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
