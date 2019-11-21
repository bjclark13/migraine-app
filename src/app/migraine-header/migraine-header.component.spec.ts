import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MigraineHeaderComponent } from './migraine-header.component';

describe('MigraineHeaderComponent', () => {
  let component: MigraineHeaderComponent;
  let fixture: ComponentFixture<MigraineHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MigraineHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MigraineHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
