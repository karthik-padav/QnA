import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewQComponent } from './interview-q.component';

describe('InterviewQComponent', () => {
  let component: InterviewQComponent;
  let fixture: ComponentFixture<InterviewQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
