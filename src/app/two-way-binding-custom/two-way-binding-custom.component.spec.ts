import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBindingCustomComponent } from './two-way-binding-custom.component';

describe('TwoWayBindingCustomComponent', () => {
  let component: TwoWayBindingCustomComponent;
  let fixture: ComponentFixture<TwoWayBindingCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayBindingCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayBindingCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
