import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSidebarComponent } from './quiz-sidebar.component';

describe('QuizSidebarComponent', () => {
  let component: QuizSidebarComponent;
  let fixture: ComponentFixture<QuizSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
