import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiaoViecComponent } from './giao-viec.component';

describe('GiaoViecComponent', () => {
  let component: GiaoViecComponent;
  let fixture: ComponentFixture<GiaoViecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiaoViecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiaoViecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
