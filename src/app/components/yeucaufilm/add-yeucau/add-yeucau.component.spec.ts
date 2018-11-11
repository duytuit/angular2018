import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddYeucauComponent } from './add-yeucau.component';

describe('AddYeucauComponent', () => {
  let component: AddYeucauComponent;
  let fixture: ComponentFixture<AddYeucauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddYeucauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddYeucauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
