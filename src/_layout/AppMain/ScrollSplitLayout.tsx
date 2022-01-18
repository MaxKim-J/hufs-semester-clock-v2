import { ReactChild, WheelEvent, Suspense, useCallback } from 'react';
import { css } from '@emotion/react';
import DotSwitch from '@components/fundamentals/DotSwitch';
import { spaceTable } from '@style/variables';
import { useRecoilState } from 'recoil';
import { sectionIndexAtom } from '@shared/atoms/common';
import { motion } from 'framer-motion';
import DoubleArrow from '@shared/images/double-down-arrow.svg';

type Section = {
  id: number;
  name: string;
  content: ReactChild;
};

type ScrollSplitLayoutProps = {
  sections: Section[];
};

function ScrollSplitLayout({ sections }: ScrollSplitLayoutProps) {
  const [sectionIndex, setSectionIndex] = useRecoilState(sectionIndexAtom);

  const changeIndex = useCallback(
    (index: number) => {
      setSectionIndex((s) => ({
        current: index,
        max: Math.max(s.max, index),
      }));
    },
    [setSectionIndex]
  );

  const wheelHandler = (e: WheelEvent<HTMLElement>) => {
    const { deltaY, deltaX } = e;
    if (deltaX !== 0) return;
    if (deltaY < 0 && sectionIndex.current === 0) return;
    if (deltaY > 0 && sectionIndex.current === sections.length - 1) return;
    changeIndex(
      deltaY < 0 ? sectionIndex.current - 1 : sectionIndex.current + 1
    );
  };

  return (
    <>
      <div onWheel={wheelHandler} css={splitWrapperStyle(sectionIndex.current)}>
        {sections.map((section) => (
          <section key={section.id} css={splitSectionStyle}>
            {sectionIndex.max >= section.id && (
              <Suspense fallback={null}>{section.content}</Suspense>
            )}
          </section>
        ))}
      </div>
      <nav css={navigationStyle}>
        {sections.map((section) => (
          <DotSwitch
            key={section.id}
            id={section.id}
            activateId={sectionIndex.current}
            tooltip={section.name}
            onClick={() => {
              changeIndex(section.id);
            }}
          />
        ))}
      </nav>
      {sectionIndex.current === 0 && (
        <motion.img
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 5 }}
          transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1 }}
          css={scrollArrowStyle}
          src={DoubleArrow}
          alt="스크롤 화살표"
        />
      )}
    </>
  );
}

const splitWrapperStyle = (index: number) => css`
  transform: translateY(${-index * 100}vh);
  transition: transform 0.5s cubic-bezier(0.23, 0.81, 0.12, 1.11);
`;

const splitSectionStyle = css`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const navigationStyle = css`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 1%;
  top: 45%;
  button:first-of-type {
    margin-bottom: ${spaceTable.size8};
  }
`;

const scrollArrowStyle = css`
  position: absolute;
  bottom: 2%;
  left: 48.75%;
`;

export default ScrollSplitLayout;
