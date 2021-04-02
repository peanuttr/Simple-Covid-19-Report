import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidtrackerComponent } from './covidtracker.component';

describe('CovidtrackerComponent', () => {
  let component: CovidtrackerComponent;
  let fixture: ComponentFixture<CovidtrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidtrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidtrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
