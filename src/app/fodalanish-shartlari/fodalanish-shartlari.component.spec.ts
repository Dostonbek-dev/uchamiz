import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FodalanishShartlariComponent } from './fodalanish-shartlari.component';

describe('FodalanishShartlariComponent', () => {
  let component: FodalanishShartlariComponent;
  let fixture: ComponentFixture<FodalanishShartlariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FodalanishShartlariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FodalanishShartlariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
