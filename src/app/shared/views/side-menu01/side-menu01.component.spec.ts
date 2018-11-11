import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenu01Component } from './side-menu01.component';

describe('SideMenu01Component', () => {
  let component: SideMenu01Component;
  let fixture: ComponentFixture<SideMenu01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideMenu01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenu01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
