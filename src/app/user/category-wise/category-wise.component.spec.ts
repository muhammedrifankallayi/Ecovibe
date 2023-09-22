import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryWiseComponent } from './category-wise.component';

describe('CategoryWiseComponent', () => {
  let component: CategoryWiseComponent;
  let fixture: ComponentFixture<CategoryWiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryWiseComponent]
    });
    fixture = TestBed.createComponent(CategoryWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
