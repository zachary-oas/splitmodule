import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavContentTopComponent } from './sidenav-content-top.component';

describe('SidenavContentTopComponent', () => {
  let component: SidenavContentTopComponent;
  let fixture: ComponentFixture<SidenavContentTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavContentTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavContentTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
