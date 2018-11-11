import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YeucaufilmComponent } from './yeucaufilm.component';

describe('YeucaufilmComponent', () => {
  let component: YeucaufilmComponent;
  let fixture: ComponentFixture<YeucaufilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YeucaufilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YeucaufilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
