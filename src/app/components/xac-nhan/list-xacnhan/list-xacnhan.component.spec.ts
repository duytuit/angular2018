import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListXacnhanComponent } from './list-xacnhan.component';

describe('ListXacnhanComponent', () => {
  let component: ListXacnhanComponent;
  let fixture: ComponentFixture<ListXacnhanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListXacnhanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListXacnhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
