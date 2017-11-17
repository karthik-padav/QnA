import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AptitudeListComponent } from './aptitude-list.component';

describe('AptitudeListComponent', () => {
  let component: AptitudeListComponent;
  let fixture: ComponentFixture<AptitudeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AptitudeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AptitudeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
