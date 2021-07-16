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
}

const FilterTokens: FilterType[] = [
  {
    image: FilterRed,
    keyword: 'Red',
  },
  {
    image: FilterOrange,
    keyword: 'Orange',
  },
  {
    image: FilterVanilla,
    keyword: 'Vanilla',
  },
  {
    image: FilterGreen,
    keyword: 'Green',
  },
  {
    image: FilterSky,
    keyword: 'Sky',
  },
  {
    image: FilterPurple,
    keyword: 'Purple',
  },
  {
    image: FilterPink,
    keyword: 'Pink',
  },
  {
    image: FilterWhite,
    keyword: 'White',
  },
];

export default FilterTokens;
