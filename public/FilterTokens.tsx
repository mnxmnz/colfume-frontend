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
  marginRight: string;
  width: string;
  url: string;
}

const FilterTokens: FilterType[] = [
  {
    image: FilterRed,
    keyword: 'Red',
    marginRight: '2.8rem',
    width: '106rem',
    url: '/',
  },
  {
    image: FilterOrange,
    keyword: 'Orange',
    marginRight: '2.7rem',
    width: '78rem',
    url: '/',
  },
  {
    image: FilterVanilla,
    keyword: 'Vanilla',
    marginRight: '1.9rem',
    width: '77rem',
    url: '/',
  },
  {
    image: FilterGreen,
    keyword: 'Green',
    marginRight: '2.8rem',
    width: '77rem',
    url: '/',
  },
  {
    image: FilterBlue,
    keyword: 'Blue',
    marginRight: '4.1rem',
    width: '77rem',
    url: '/',
  },
  {
    image: FilterPurple,
    keyword: 'Purple',
    marginRight: '3.4rem',
    width: '65rem',
    url: '/',
  },
  {
    image: FilterPink,
    keyword: 'Pink',
    marginRight: '3.4rem',
    width: '85rem',
    url: '/',
  },
  {
    image: FilterWhite,
    keyword: 'White',
    marginRight: '0rem',
    width: '75rem',
    url: '/',
  },
];

export default FilterTokens;
