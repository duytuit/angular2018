import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamFilmComponent } from './cam-film.component';

describe('CamFilmComponent', () => {
  let component: CamFilmComponent;
  let fixture: ComponentFixture<CamFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
