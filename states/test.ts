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
  default: '',
});
