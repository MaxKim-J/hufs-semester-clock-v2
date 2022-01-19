import { ReactChild, WheelEvent, Suspense } from 'react';
import { css } from '@emotion/react';
import DotSwitch from '@components/fundamentals/DotSwitch';
import { spaceTable } from '@style/variables';
import { useRecoilState } from 'recoil';
import { sectionIndexAtom } from '@shared/atoms/common';
import { Heading } from '@components/fundamentals/Text';
import { readableHiddenHeading } from '@style/common';

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

  const changeIndex = (index: number) => {
    setSectionIndex((s) => ({
      current: index,
      max: Math.max(s.max, index),
    }));
  };

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
      <nav
        css={navigationStyle}
        aria-labelledby="nav-heading"
        aria-describedby="nav-describe"
      >
        <Heading tag="h1" id="nav-heading" css={readableHiddenHeading}>
          페이지 네비게이션
        </Heading>
        <p id="nav-describe" css={readableHiddenHeading}>
          다음에 위치한 버튼을 누르면 해당 페이지로 이동합니다.
        </p>
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
