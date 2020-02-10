import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdealJobComponent } from './ideal-job.component';

describe('IdealJobComponent', () => {
  let component: IdealJobComponent;
  let fixture: ComponentFixture<IdealJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdealJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdealJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
