import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlIqnAComponent } from './html-iqn-a.component';

describe('HtmlIqnAComponent', () => {
  let component: HtmlIqnAComponent;
  let fixture: ComponentFixture<HtmlIqnAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlIqnAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlIqnAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
