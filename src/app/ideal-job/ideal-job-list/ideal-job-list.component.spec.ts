import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdealJobListComponent } from './ideal-job-list.component';

describe('IdealJobListComponent', () => {
  let component: IdealJobListComponent;
  let fixture: ComponentFixture<IdealJobListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdealJobListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdealJobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
