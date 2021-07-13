import {
  SampleImg,
  IconMainCol,
  IconSubColRed,
  IconSubColVanilla,
  IconSubColGreen,
} from '../../assets';

interface ImgType {
  height: number;
  src: string;
  width: number;
}

interface DataType {
  mainImage: ImgType;
  mainColor: ImgType;
  infos: object;
  images: ImgType[];
  mood: string[];
  style: string[];
  levels: string[];
  description: string;
}

const SampleData: DataType = {
  mainImage: SampleImg,
  mainColor: IconMainCol,
  infos: {
    brandName: 'Brand name',
    productName: '한글로 제품명 표기',
    volume: 100,
    price: '00,000',
  },
  images: [IconSubColRed, IconSubColVanilla, IconSubColGreen],
  mood: ['무드', '무드'],
  style: ['스타일', '스타일', '스타일'],
  levels: [
    '오렌지,오렌지,오렌지, 오렌지',
    '오렌지,오렌지,오렌지, 오렌지',
    '오렌지,오렌지,오렌지, 오렌지',
  ],
  description:
    '이 향수는 오렌지처럼 발랄한 향을 가지고 있습니다.\n처음에는 오렌지,오렌지,오렌지, 오렌지향, 시간이 조금 지나면 오렌지,오렌지,오렌지, 오렌지향, 마지막으로 오렌지,오렌지,오렌지, 오렌지향을 느낄 수 있어요. 마치 스웨덴 튤립 축제에 놀러가 자전거를 타고 돌아다닐 때 날 것 같은 느낌이랍니다. 마치 스웨덴 튤립 축제에 놀러가 자전거를 타고 돌아다닐 때 날 것 같은 느낌이랍니다. (최대 5줄)',
};

export default SampleData;
