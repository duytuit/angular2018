import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKetquaComponent } from './edit-ketqua.component';

describe('EditKetquaComponent', () => {
  let component: EditKetquaComponent;
  let fixture: ComponentFixture<EditKetquaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditKetquaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditKetquaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
