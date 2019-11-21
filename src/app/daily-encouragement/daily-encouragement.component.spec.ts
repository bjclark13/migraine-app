import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyEncouragementComponent } from './daily-encouragement.component';

describe('DailyEncouragementComponent', () => {
  let component: DailyEncouragementComponent;
  let fixture: ComponentFixture<DailyEncouragementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyEncouragementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyEncouragementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
