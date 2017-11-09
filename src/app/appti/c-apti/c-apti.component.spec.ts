import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CAptiComponent } from './c-apti.component';

describe('CAptiComponent', () => {
  let component: CAptiComponent;
  let fixture: ComponentFixture<CAptiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CAptiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CAptiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
