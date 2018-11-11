import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MayDungComponent } from './may-dung.component';

describe('MayDungComponent', () => {
  let component: MayDungComponent;
  let fixture: ComponentFixture<MayDungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MayDungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MayDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
