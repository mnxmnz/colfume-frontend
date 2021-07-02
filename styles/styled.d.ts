import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      backgroundGray: string;
      borderGray: string;
    };
  }
}
