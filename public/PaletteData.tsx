import {
  Palette01Red,
  Palette02Orange,
  Palette03Vanilla,
  Palette04Green,
  Palette05Sky,
  Palette06Purple,
  Palette07Pink,
  Palette08White,
} from '../assets';

interface Img {
  height: number;
  src: string;
  width: number;
}

interface Data {
  image: Img;
  keyword: string;
  url: string;
}

const PaletteData: Data[] = [
  {
    image: Palette01Red,
    keyword: 'Red',
    url: '/',
  },
  {
    image: Palette02Orange,
    keyword: 'Orange',
    url: '/',
  },
  {
    image: Palette03Vanilla,
    keyword: 'Vanilla',
    url: '/',
  },
  {
    image: Palette04Green,
    keyword: 'Green',
    url: '/',
  },
  {
    image: Palette05Sky,
    keyword: 'Sky',
    url: '/',
  },
  {
    image: Palette06Purple,
    keyword: 'Purple',
    url: '/',
  },
  {
    image: Palette07Pink,
    keyword: 'Pink',
    url: '/',
  },
  {
    image: Palette08White,
    keyword: 'White',
    url: '/',
  },
];

export default PaletteData;
