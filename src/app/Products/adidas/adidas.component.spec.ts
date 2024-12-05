import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdidasComponent } from './adidas.component';

describe('AdidasComponent', () => {
  let component: AdidasComponent;
  let fixture: ComponentFixture<AdidasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdidasComponent]
    });
    fixture = TestBed.createComponent(AdidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
