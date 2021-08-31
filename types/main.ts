export interface ISizeProps {
  size: {
    width: number;
  };
}

export interface IContentProps {
  title: string;
  content: string;
  paddingTitle: string;
  paddingContent: string;
  paddingBottom: string;
}

export interface IMoodData {
  message: string;
  moods: string[];
  styles: string[];
}

export interface IRawMoodData {
  mood_name?: string;
  style_name?: string;
}

export interface IRecommendProps {
  idx: number;
  datum: string[];
}

export interface IRecommendData {
  _id: number;
  moods: string;
  perfume_name: string;
  perfume_img: string;
}

export interface IArrowProps {
  id: string;
  className?: string;
  style?: object;
  onClick?: () => void;
}

export interface ISlideProps {
  slideName: string;
  length: number;
  data: object;
  isMobile?: boolean;
}

export interface ISlideData {
  keyword: string;
  image: HTMLImageElement;
}

export interface IThemeProps {
  title: string;
  list: string[];
}
