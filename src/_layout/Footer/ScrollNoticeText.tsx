import { motion } from 'framer-motion';
import { fadeInAndOut } from '@style/animation';
import { Text } from '@components/fundamentals/Text';
import { useRecoilValue } from 'recoil';
import { sectionIndexAtom } from '@shared/atoms/common';

function ScrollNoticeText() {
  const sectionIndex = useRecoilValue(sectionIndexAtom);

  return (
    <>
      {sectionIndex.current === 0 && (
        <motion.div {...fadeInAndOut} css={{ marginLeft: '3rem' }}>
          <Text color="gray" size="size12">
            ▼ 아래로 스크롤하시면 위젯을 사용하실 수 있어요! ▼
          </Text>
        </motion.div>
      )}
    </>
  );
}

export default ScrollNoticeText;
