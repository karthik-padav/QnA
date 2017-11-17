import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GkSidebarComponent } from './gk-sidebar.component';

describe('GkSidebarComponent', () => {
  let component: GkSidebarComponent;
  let fixture: ComponentFixture<GkSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GkSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GkSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
