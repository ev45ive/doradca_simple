import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobTestPageComponent } from './job-test-page.component';

describe('JobTestPageComponent', () => {
  let component: JobTestPageComponent;
  let fixture: ComponentFixture<JobTestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobTestPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
