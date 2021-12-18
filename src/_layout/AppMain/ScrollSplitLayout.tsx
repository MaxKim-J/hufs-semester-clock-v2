import { ReactChild, useState, WheelEvent } from 'react';
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
  const [sectionIndex, setSectionIndex] = useState<number>(0);

  const handleWheel = debounce(
    (e: WheelEvent<HTMLElement>) => {
      const { deltaY, deltaX } = e;
      if (deltaX !== 0) return;
      if (deltaY < 0 && sectionIndex === 0) return;
      if (deltaY > 0 && sectionIndex === sections.length - 1) return;
      setSectionIndex((s) => (deltaY < 0 ? s - 1 : s + 1));
    },
    0,
    { leading: true }
  );

  return (
    <>
      <motion.section
        onWheel={(e) => {
          handleWheel(e);
        }}
        animate={{ y: `${-(sectionIndex * 100)}vh` }}
        transition={{ ease: 'easeOut', duration: 0.5 }}
      >
        {sections.map((section) => (
          <section key={section.id} css={splitSectionStyle}>
            {section.content}
          </section>
        ))}
      </motion.section>
      <nav css={navigationStyle}>
        {sections.map((section) => (
          <DotSwitch
            key={section.id}
            id={section.id}
            activateId={sectionIndex}
            tooltip={section.name}
            onClick={() => {
              setSectionIndex(section.id);
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
  button:first-child {
    margin-bottom: ${spaceTable.size8};
  }
`;

export default ScrollSplitLayout;
