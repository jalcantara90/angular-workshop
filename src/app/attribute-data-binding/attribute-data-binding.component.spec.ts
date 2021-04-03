import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDataBindingComponent } from './attribute-data-binding.component';

describe('AttributeDataBindingComponent', () => {
  let component: AttributeDataBindingComponent;
  let fixture: ComponentFixture<AttributeDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributeDataBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
