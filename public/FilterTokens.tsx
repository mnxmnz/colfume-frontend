import {
  FilterRed,
  FilterOrange,
  FilterVanilla,
  FilterGreen,
  FilterBlue,
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
    image: FilterBlue,
    keyword: 'Blue',
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
