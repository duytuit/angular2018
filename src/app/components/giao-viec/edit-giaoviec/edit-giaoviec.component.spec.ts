import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGiaoviecComponent } from './edit-giaoviec.component';

describe('EditGiaoviecComponent', () => {
  let component: EditGiaoviecComponent;
  let fixture: ComponentFixture<EditGiaoviecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGiaoviecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGiaoviecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
