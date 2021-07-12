import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    gray1: '#FAFAFA',
    gray2: '#F3F3F3',
    gray3: '#D4D4D4',
    black: '#3E3E3E',
    white: '#FFFFFF',
    borderGray: '#929292',
  },
};

const customMediaQuery = (maxWidth: number): string => `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  1440: customMediaQuery(1440),
  768: customMediaQuery(768),
  mobile: customMediaQuery(375),
};
