import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YeucauComponent } from './yeucau.component';

describe('YeucauComponent', () => {
  let component: YeucauComponent;
  let fixture: ComponentFixture<YeucauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YeucauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YeucauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
