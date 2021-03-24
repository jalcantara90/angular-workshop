import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesStructuralComponent } from './directives-structural.component';

describe('DirectivesStructuralComponent', () => {
  let component: DirectivesStructuralComponent;
  let fixture: ComponentFixture<DirectivesStructuralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesStructuralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesStructuralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
