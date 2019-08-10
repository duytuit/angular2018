import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKetquaComponent } from './add-ketqua.component';

describe('AddKetquaComponent', () => {
  let component: AddKetquaComponent;
  let fixture: ComponentFixture<AddKetquaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddKetquaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKetquaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
