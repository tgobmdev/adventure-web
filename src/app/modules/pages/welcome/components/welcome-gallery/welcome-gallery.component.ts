import { Component, OnInit } from '@angular/core';
import { WelcomeImageGallery } from './models/welcome-image-gallery';
import { ImageGalleryUtils } from './utils/image-gallery-utils';

@Component({
  selector: 'app-welcome-gallery',
  templateUrl: './welcome-gallery.component.html',
})
export class WelcomeGalleryComponent implements OnInit {
  images!: WelcomeImageGallery[];
  constructor() {}
  ngOnInit(): void {
    this.images = ImageGalleryUtils.getImages();
  }
}
