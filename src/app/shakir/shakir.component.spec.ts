import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShakirComponent } from './shakir.component';

describe('ShakirComponent', () => {
  let component: ShakirComponent;
  let fixture: ComponentFixture<ShakirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShakirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShakirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
