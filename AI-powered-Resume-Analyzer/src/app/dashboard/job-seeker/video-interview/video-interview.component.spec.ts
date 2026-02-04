import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoInterviewComponent } from './video-interview.component';

describe('VideoInterviewComponent', () => {
  let component: VideoInterviewComponent;
  let fixture: ComponentFixture<VideoInterviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoInterviewComponent]
    });
    fixture = TestBed.createComponent(VideoInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
