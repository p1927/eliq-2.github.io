import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansiveViewComponent } from './expansive-view.component';

describe('ExpansiveViewComponent', () => {
  let component: ExpansiveViewComponent;
  let fixture: ComponentFixture<ExpansiveViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpansiveViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpansiveViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
