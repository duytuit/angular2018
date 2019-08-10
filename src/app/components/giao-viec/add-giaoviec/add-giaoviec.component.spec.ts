import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGiaoviecComponent } from './add-giaoviec.component';

describe('AddGiaoviecComponent', () => {
  let component: AddGiaoviecComponent;
  let fixture: ComponentFixture<AddGiaoviecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGiaoviecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGiaoviecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
