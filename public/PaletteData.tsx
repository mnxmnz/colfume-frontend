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
}

const PaletteData: Data[] = [
  {
    image: Palette01Red,
    keyword: 'Red',
  },
  {
    image: Palette02Orange,
    keyword: 'Orange',
  },
  {
    image: Palette03Vanilla,
    keyword: 'Vanilla',
  },
  {
    image: Palette04Green,
    keyword: 'Green',
  },
  {
    image: Palette05Sky,
    keyword: 'Sky',
  },
  {
    image: Palette06Purple,
    keyword: 'Purple',
  },
  {
    image: Palette07Pink,
    keyword: 'Pink',
  },
  {
    image: Palette08White,
    keyword: 'White',
  },
];

export default PaletteData;
