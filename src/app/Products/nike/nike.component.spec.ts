import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NikeComponent } from './nike.component';

describe('NikeComponent', () => {
  let component: NikeComponent;
  let fixture: ComponentFixture<NikeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NikeComponent]
    });
    fixture = TestBed.createComponent(NikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
