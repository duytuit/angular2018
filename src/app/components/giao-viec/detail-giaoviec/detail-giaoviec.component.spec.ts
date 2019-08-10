import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailGiaoviecComponent } from './detail-giaoviec.component';

describe('DetailGiaoviecComponent', () => {
  let component: DetailGiaoviecComponent;
  let fixture: ComponentFixture<DetailGiaoviecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailGiaoviecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailGiaoviecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
