import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTripComponent } from './details-trip.component';

describe('DetailsTripComponent', () => {
  let component: DetailsTripComponent;
  let fixture: ComponentFixture<DetailsTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
