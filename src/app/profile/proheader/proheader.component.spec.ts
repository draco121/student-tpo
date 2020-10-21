import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProheaderComponent } from './proheader.component';

describe('ProheaderComponent', () => {
  let component: ProheaderComponent;
  let fixture: ComponentFixture<ProheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
