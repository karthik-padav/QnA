import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AptitudeSidebarComponent } from './aptitude-sidebar.component';

describe('AptitudeSidebarComponent', () => {
  let component: AptitudeSidebarComponent;
  let fixture: ComponentFixture<AptitudeSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AptitudeSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AptitudeSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
