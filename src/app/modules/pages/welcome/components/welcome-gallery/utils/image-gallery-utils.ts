import { WelcomeImageGallery } from '../models/welcome-image-gallery';

const JOAO_PESSOA_URL = 'assets/img/gallery/joao-pessoa-paraiba.jpg';
const GRAMADO_URL = 'assets/img/gallery/lado-negro-gramado-rs.jpg';
const CANELA_URL = 'assets/img/gallery/canela-rio-grande-do-sul.jpg';
const FLORIANOPOLIS_URL = 'assets/img/gallery/florianopolis-santa-catarina.jpg';
const BLUMENAU_URL = 'assets/img/gallery/blumenau-santa-catarina.jpg';
const PETROPOLIS_URL = 'assets/img/gallery/petropolis-rj.jpg';
const PRACA_DA_LIBERDADE_URL =
  'assets/img/gallery/praca-da-liberdade-mg-bh.jpg';
const OURO_PRETO_URL = 'assets/img/gallery/ouro-preto-mg.jpg';
const DIAMANTINA_URL = 'assets/img/gallery/diamantina-mg.jpg';
const PENINSULA_DE_MARAU_URL =
  'assets/img/gallery/peninsula-de-marau-bahia.jpg';
const JERICOACOARA_URL = 'assets/img/gallery/jericoacoara-ceara.jpg';
const FERNANDO_DE_NORONHA_URL = 'assets/img/gallery/fernando-de-noronha.jpg';
const PANTANAL_URL = 'assets/img/gallery/pantanal.jpg';
const CHAPADA_DOS_VEADEIROS_URL =
  'assets/img/gallery/chapada-dos-veadeiros-goias.jpg';
const GRUTA_LAGO_AZUL_URL = 'assets/img/gallery/gruta-lago-azul-bonito-ms.jpg';

const imageUrls = [
  JOAO_PESSOA_URL,
  GRAMADO_URL,
  CANELA_URL,
  FLORIANOPOLIS_URL,
  BLUMENAU_URL,
  PETROPOLIS_URL,
  PRACA_DA_LIBERDADE_URL,
  OURO_PRETO_URL,
  DIAMANTINA_URL,
  PENINSULA_DE_MARAU_URL,
  JERICOACOARA_URL,
  FERNANDO_DE_NORONHA_URL,
  PANTANAL_URL,
  CHAPADA_DOS_VEADEIROS_URL,
  GRUTA_LAGO_AZUL_URL,
];
export class ImageGalleryUtils {
  private static imagesCache: WelcomeImageGallery[] | null = null;

  static createImage = (itemImageSrc: string) => {
    return new WelcomeImageGallery({
      itemImageSrc: itemImageSrc,
      alt: '',
      title: '',
    });
  };

  static getImages = () => {
    if (ImageGalleryUtils.imagesCache === null) {
      ImageGalleryUtils.imagesCache = imageUrls.map((itemImageSrc) =>
        ImageGalleryUtils.createImage(itemImageSrc),
      );
    }
    return ImageGalleryUtils.imagesCache;
  };
}
