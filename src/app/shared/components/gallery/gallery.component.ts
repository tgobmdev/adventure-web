import { Component, Input } from '@angular/core';
import { ImageGallery } from './models/image-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  @Input() data!: ImageGallery[];
  @Input() showItemNavigators!: boolean;
  @Input() showThumbnails!: boolean;
  @Input() showIndicators!: boolean;
  @Input() showIndicatorsOnItem!: boolean;
  @Input() containerStyle!: {};

  constructor() {}
}
