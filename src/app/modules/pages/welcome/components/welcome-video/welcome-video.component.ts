import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-welcome-video',
  templateUrl: './welcome-video.component.html',
  styleUrls: ['./welcome-video.component.scss'],
})
export class WelcomeVideoComponent implements AfterViewInit {
  @ViewChild('srcVideo') srcVideo!: ElementRef;
  ngAfterViewInit(): void {
    if (this.srcVideo.nativeElement) {
      this.srcVideo.nativeElement.autofocus = true;
    }
  }
}
