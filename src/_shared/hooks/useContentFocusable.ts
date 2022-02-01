import { useEffect, RefObject } from 'react';
import { useRecoilValue } from 'recoil';
import { sectionIndexAtom } from '@shared/atoms/common';

type UseContentFocusableOptions = {
  searchRef: RefObject<HTMLElement | null>;
  focusableIndex: number;
};

const useContentFocusable = ({
  searchRef,
  focusableIndex,
}: UseContentFocusableOptions) => {
  const sectionIndex = useRecoilValue(sectionIndexAtom);

  useEffect(() => {
    if (searchRef.current !== null) {
      // eslint-disable-next-line no-undef
      const focusableElems: NodeListOf<HTMLButtonElement | HTMLAnchorElement> =
        searchRef.current?.querySelectorAll('a[href], button');

      focusableElems.forEach((elem) => {
        elem.tabIndex = focusableIndex === sectionIndex.current ? 0 : -1;
      });
    }
  }, [sectionIndex, searchRef, focusableIndex]);
};

export default useContentFocusable;
