import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HosterReqComponent } from './hoster-req.component';

describe('HosterReqComponent', () => {
  let component: HosterReqComponent;
  let fixture: ComponentFixture<HosterReqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HosterReqComponent]
    });
    fixture = TestBed.createComponent(HosterReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
