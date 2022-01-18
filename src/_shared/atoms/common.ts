import { atom } from 'recoil';

type SectionIndex = {
  current: number;
  max: number;
};

export const sectionIndexAtom = atom<SectionIndex>({
  key: 'sectionIndexAtom',
  default: { current: 0, max: 0 },
});
