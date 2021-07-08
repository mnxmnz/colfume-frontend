import Sample from '../assets/main/PerfumeSample.svg';

interface Img {
  height: number;
  src: string;
  width: number;
}

interface Data {
  image: Img;
  keyword: string;
  name: string;
}

const SampleData: Data[] = [
  {
    image: Sample,
    keyword: '#지적인#차분한',
    name: 'ZARA PERFUME',
  },
  {
    image: Sample,
    keyword: '#지적인#차분한',
    name: 'ZARA PERFUME',
  },
  {
    image: Sample,
    keyword: '#지적인#차분한',
    name: 'ZARA PERFUME',
  },
  {
    image: Sample,
    keyword: '#지적인#차분한',
    name: 'ZARA PERFUME',
  },
  {
    image: Sample,
    keyword: '#지적인#차분한',
    name: 'ZARA PERFUME',
  },
  {
    image: Sample,
    keyword: '#지적인#차분한',
    name: 'ZARA PERFUME',
  },
];

export default SampleData;
