import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobMatchesComponent } from './job-matches.component';

describe('JobMatchesComponent', () => {
  let component: JobMatchesComponent;
  let fixture: ComponentFixture<JobMatchesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobMatchesComponent]
    });
    fixture = TestBed.createComponent(JobMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
