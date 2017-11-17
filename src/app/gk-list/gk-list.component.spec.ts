import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GkListComponent } from './gk-list.component';

describe('GkListComponent', () => {
  let component: GkListComponent;
  let fixture: ComponentFixture<GkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GkListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
