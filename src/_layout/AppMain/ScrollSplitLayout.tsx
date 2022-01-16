import { ReactChild, useState, WheelEvent, Suspense, useCallback } from 'react';
import { css } from '@emotion/react';
import DotSwitch from '@components/fundamentals/DotSwitch';
import { spaceTable } from '@style/variables';

type Section = {
  id: number;
  name: string;
  content: ReactChild;
};

type ScrollSplitLayoutProps = {
  sections: Section[];
};

function ScrollSplitLayout({ sections }: ScrollSplitLayoutProps) {
  const [sectionIndex, setSectionIndex] = useState<{
    current: number;
    max: number;
  }>({ current: 0, max: 0 });

  const changeIndex = useCallback((index: number) => {
    setSectionIndex((s) => ({
      current: index,
      max: Math.max(s.max, index),
    }));
  }, []);

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

export default ScrollSplitLayout;
