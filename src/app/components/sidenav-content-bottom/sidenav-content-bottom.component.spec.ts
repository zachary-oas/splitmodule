import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavContentBottomComponent } from './sidenav-content-bottom.component';

describe('SidenavContentBottomComponent', () => {
  let component: SidenavContentBottomComponent;
  let fixture: ComponentFixture<SidenavContentBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavContentBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavContentBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
