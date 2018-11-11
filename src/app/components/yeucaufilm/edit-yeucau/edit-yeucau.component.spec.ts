import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditYeucauComponent } from './edit-yeucau.component';

describe('EditYeucauComponent', () => {
  let component: EditYeucauComponent;
  let fixture: ComponentFixture<EditYeucauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditYeucauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditYeucauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
