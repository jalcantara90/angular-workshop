import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesAttributesComponent } from './directives-attributes.component';

describe('DirectivesAttributesComponent', () => {
  let component: DirectivesAttributesComponent;
  let fixture: ComponentFixture<DirectivesAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesAttributesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
