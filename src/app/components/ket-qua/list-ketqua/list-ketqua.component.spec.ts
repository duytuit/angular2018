import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKetquaComponent } from './list-ketqua.component';

describe('ListKetquaComponent', () => {
  let component: ListKetquaComponent;
  let fixture: ComponentFixture<ListKetquaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListKetquaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKetquaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
