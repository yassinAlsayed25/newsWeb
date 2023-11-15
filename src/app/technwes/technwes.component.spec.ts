import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnwesComponent } from './technwes.component';

describe('TechnwesComponent', () => {
  let component: TechnwesComponent;
  let fixture: ComponentFixture<TechnwesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnwesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnwesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
