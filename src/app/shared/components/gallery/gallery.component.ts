import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  @Input() data!: any;
  @Input() showItemNavigators!: boolean;
  @Input() showThumbnails!: boolean;
  @Input() showIndicators!: boolean;
  @Input() showIndicatorsOnItem!: boolean;
  @Input() containerStyle!: {};

  constructor() {}
}
