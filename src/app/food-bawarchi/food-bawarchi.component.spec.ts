import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodBawarchiComponent } from './food-bawarchi.component';

describe('FoodBawarchiComponent', () => {
  let component: FoodBawarchiComponent;
  let fixture: ComponentFixture<FoodBawarchiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodBawarchiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodBawarchiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
