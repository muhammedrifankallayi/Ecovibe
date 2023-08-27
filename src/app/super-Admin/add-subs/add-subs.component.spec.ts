import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubsComponent } from './add-subs.component';

describe('AddSubsComponent', () => {
  let component: AddSubsComponent;
  let fixture: ComponentFixture<AddSubsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSubsComponent]
    });
    fixture = TestBed.createComponent(AddSubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
