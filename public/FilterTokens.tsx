import {
  FilterRed,
  FilterOrange,
  FilterVanilla,
  FilterGreen,
  FilterSky,
  FilterPurple,
  FilterPink,
  FilterWhite,
} from '../assets';

interface ImgType {
  src: string;
}

interface FilterType {
  image: ImgType;
  keyword: string;
  url: string;
}

const FilterTokens: FilterType[] = [
  {
    image: FilterRed,
    keyword: 'Red',
    url: '/',
  },
  {
    image: FilterOrange,
    keyword: 'Orange',
    url: '/',
  },
  {
    image: FilterVanilla,
    keyword: 'Vanilla',
    url: '/',
  },
  {
    image: FilterGreen,
    keyword: 'Green',
    url: '/',
  },
  {
    image: FilterSky,
    keyword: 'Sky',
    url: '/',
  },
  {
    image: FilterPurple,
    keyword: 'Purple',
    url: '/',
  },
  {
    image: FilterPink,
    keyword: 'Pink',
    url: '/',
  },
  {
    image: FilterWhite,
    keyword: 'White',
    url: '/',
  },
];

export default FilterTokens;
