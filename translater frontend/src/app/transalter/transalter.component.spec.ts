import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransalterComponent } from './transalter.component';

describe('TransalterComponent', () => {
  let component: TransalterComponent;
  let fixture: ComponentFixture<TransalterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransalterComponent]
    });
    fixture = TestBed.createComponent(TransalterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
