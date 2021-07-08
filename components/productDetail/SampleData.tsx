import { IconSubColRed, IconSubColVanilla, IconSubColGreen } from '../../assets';

interface ImgType {
  height: number;
  src: string;
  width: number;
}

interface DataType {
  images: ImgType[];
  filters: string[][];
}

const SampleData: DataType = {
  images: [IconSubColRed, IconSubColVanilla, IconSubColGreen],
  filters: [
    ['Mood', '무드', '무드', '무드'],
    ['Style', '스타일', '스타일', '스타일'],
  ],
};

export default SampleData;
