import { ReactChild, useState, WheelEvent, Suspense } from 'react';
import { motion } from 'framer-motion';
import { css } from '@emotion/react';
import debounce from 'lodash.debounce';
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

  const handleWheel = debounce(
    (e: WheelEvent<HTMLElement>) => {
      const { deltaY, deltaX } = e;
      if (deltaX !== 0) return;
      if (deltaY < 0 && sectionIndex.current === 0) return;
      if (deltaY > 0 && sectionIndex.current === sections.length - 1) return;
      setSectionIndex((s) => {
        const current = deltaY < 0 ? s.current - 1 : s.current + 1;
        return {
          current,
          max: Math.max(s.max, current),
        };
      });
    },
    0,
    { leading: true }
  );

  return (
    <>
      <motion.section
        onWheel={handleWheel}
        animate={{ y: `${-(sectionIndex.current * 100)}vh` }}
        transition={{ ease: 'easeOut', duration: 0.5 }}
      >
        {sections.map((section) => (
          <section key={section.id} css={splitSectionStyle}>
            {sectionIndex.max >= section.id && (
              <Suspense fallback={null}>{section.content}</Suspense>
            )}
          </section>
        ))}
      </motion.section>
      <nav css={navigationStyle}>
        {sections.map((section) => (
          <DotSwitch
            key={section.id}
            id={section.id}
            activateId={sectionIndex.current}
            tooltip={section.name}
            onClick={() => {
              setSectionIndex((state) => ({ ...state, current: section.id }));
            }}
          />
        ))}
      </nav>
    </>
  );
}

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
