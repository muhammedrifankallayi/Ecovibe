import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomValidatorComponent } from './custom-validator.component';

describe('CustomValidatorComponent', () => {
  let component: CustomValidatorComponent;
  let fixture: ComponentFixture<CustomValidatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomValidatorComponent]
    });
    fixture = TestBed.createComponent(CustomValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
