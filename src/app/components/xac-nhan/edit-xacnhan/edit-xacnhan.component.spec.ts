import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditXacnhanComponent } from './edit-xacnhan.component';

describe('EditXacnhanComponent', () => {
  let component: EditXacnhanComponent;
  let fixture: ComponentFixture<EditXacnhanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditXacnhanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditXacnhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
