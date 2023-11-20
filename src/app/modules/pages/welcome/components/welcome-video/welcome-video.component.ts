import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-welcome-video',
  templateUrl: './welcome-video.component.html',
  styleUrls: ['./welcome-video.component.scss'],
})
export class WelcomeVideoComponent implements OnInit, AfterViewInit {
  @ViewChild('srcVideo') srcVideo!: ElementRef;
  videoLoaded = false;

  ngOnInit(): void {
    if (!this.videoLoaded && this.srcVideo && this.srcVideo.nativeElement) {
      this.loadVideo();
    }
  }

  ngAfterViewInit(): void {
    if (this.srcVideo.nativeElement) {
      this.srcVideo.nativeElement.autofocus = true;
    }
  }

  loadVideo = (): void => {
    const videoElement = this.srcVideo.nativeElement;
    videoElement.src = 'assets/videos/mp4/maragogi.mp4';
    videoElement.addEventListener('loadeddata', () => {
      this.videoLoaded = true;
    });
    videoElement.loop = true;
    videoElement.play();
  };
}
