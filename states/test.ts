import { atom } from 'recoil';

export const questionNumberAtom = atom({
  key: 'questionNumberAtom',
  default: 0,
});

export const modalIsOpenAtom = atom({
  key: 'modalIsOpenAtom',
  default: false,
});

export const answerAtom = atom({
  key: 'answerAtom',
  default: {},
});

export const testResultAtom = atom({
  key: 'testResultAtom',
  default: {
    palette_explanation: '',
    palette_img: '',
    palette_keyword: '',
    palette_matchColor: ['', ''],
    palette_name: '',
    palette_title: '',
    _id: '',
    palette_matchBg: '',
  },
});
