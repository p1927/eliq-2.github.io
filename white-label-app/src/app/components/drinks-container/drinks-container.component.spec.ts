import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksContainerComponent } from './drinks-container.component';

describe('DrinksContainerComponent', () => {
  let component: DrinksContainerComponent;
  let fixture: ComponentFixture<DrinksContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinksContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinksContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
