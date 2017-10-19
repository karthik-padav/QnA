import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApptiComponent } from './appti.component';

describe('ApptiComponent', () => {
  let component: ApptiComponent;
  let fixture: ComponentFixture<ApptiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApptiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApptiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
