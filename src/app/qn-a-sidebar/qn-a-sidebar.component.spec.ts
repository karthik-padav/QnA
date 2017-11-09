import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QnASidebarComponent } from './qn-a-sidebar.component';

describe('QnASidebarComponent', () => {
  let component: QnASidebarComponent;
  let fixture: ComponentFixture<QnASidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QnASidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QnASidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
