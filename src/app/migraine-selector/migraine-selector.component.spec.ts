import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MigraineSelectorComponent } from './migraine-selector.component';

describe('MigraineSelectorComponent', () => {
  let component: MigraineSelectorComponent;
  let fixture: ComponentFixture<MigraineSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MigraineSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MigraineSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
