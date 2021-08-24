import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JisComponent } from './jis.component';

describe('JisComponent', () => {
  let component: JisComponent;
  let fixture: ComponentFixture<JisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
