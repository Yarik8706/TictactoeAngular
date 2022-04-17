import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquireComponent } from './squire.component';

describe('SquireComponent', () => {
  let component: SquireComponent;
  let fixture: ComponentFixture<SquireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
