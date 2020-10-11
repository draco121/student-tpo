import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillformComponent } from './fillform.component';

describe('FillformComponent', () => {
  let component: FillformComponent;
  let fixture: ComponentFixture<FillformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
