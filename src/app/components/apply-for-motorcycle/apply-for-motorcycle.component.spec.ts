import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyForMotorcycleComponent } from './apply-for-motorcycle.component';

describe('ApplyForMotorcycleComponent', () => {
  let component: ApplyForMotorcycleComponent;
  let fixture: ComponentFixture<ApplyForMotorcycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplyForMotorcycleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyForMotorcycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
