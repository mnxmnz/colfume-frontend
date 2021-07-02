import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    backgroundGray: '#FAFAFA',
    borderGray: '#929292',
  },
};

const customMediaQuery = (maxWidth: number): string => `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  1440: customMediaQuery(1440),
  768: customMediaQuery(768),
  mobile: customMediaQuery(576),
};
