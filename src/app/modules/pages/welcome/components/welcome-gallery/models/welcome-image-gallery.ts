import { ImageGallery } from '../../../../../../shared/components/gallery/models/image-gallery';

export class WelcomeImageGallery implements ImageGallery {
  itemImageSrc!: string;
  alt!: string;
  title!: string;

  constructor(values: Object = []) {
    Object.assign(this, values);
  }
}
