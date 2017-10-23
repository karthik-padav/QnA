import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlAptiComponent } from './html-apti.component';

describe('HtmlAptiComponent', () => {
  let component: HtmlAptiComponent;
  let fixture: ComponentFixture<HtmlAptiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlAptiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlAptiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
