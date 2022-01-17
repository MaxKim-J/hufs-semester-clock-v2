import { Link, Text } from '@components/fundamentals/Text';
import Button from '@components/fundamentals/Button';
import Emoji from '@components/fundamentals/Emoji';
import Spacer from '@/_shared/components/fundamentals/Spacer';
import { css } from '@emotion/react';
import { transparentTable } from '@style/variables';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInAndOut } from '@style/animation';
import { pickRandomMenu } from '@/TodayMenu/utils/todayMenuHelper';

function TodayMenuContent() {
  const [menu, setMenu] = useState(pickRandomMenu());

  const pickMenu = () => {
    setMenu(pickRandomMenu());
  };

  return (
    <>
      <Spacer />
      <Text color="black">뭘 드셔야 할지 모르겠다고요? 딱! 정해드립니다.</Text>
      <Spacer />
      <div css={menuSentenceStyle}>
        <Emoji size="size32" emoji="🍽" shadow />
        <Text size="size32" color="black">
          오늘
        </Text>
        <div css={menuTextStyle}>
          <motion.div key={menu.name} {...fadeInAndOut}>
            <Text size="size32" weight="bold" color="black">
              {menu.name}
            </Text>
          </motion.div>
        </div>
        <Text size="size32" color="black">
          어떠세요?
        </Text>
      </div>
      <Spacer />
      <div css={buttonWrapperStyle}>
        <Button color="black" onClick={pickMenu} size="size14">
          <Emoji emoji="🔁" size="size14" /> 메뉴 뽑기
        </Button>
        <Link
          color="black"
          size="size14"
          href={`https://map.naver.com/v5/search/${menu.name}?c=14143166.3855666,4522706.9179674,14,0,0,0,dh`}
        >
          <Emoji emoji="🔎" /> 외대 주변 메뉴 검색
        </Link>
      </div>
    </>
  );
}

const menuSentenceStyle = css`
  display: flex;
  align-items: center;
  > * {
    margin-right: 1rem;
  }
`;

const menuTextStyle = css`
  background-color: ${transparentTable.white70};
  width: 10rem;
  padding: 0.25rem;
  text-align: center;
`;

const buttonWrapperStyle = css`
  display: flex;
  align-items: center;
  button {
    margin-right: 1rem;
  }
`;

export default TodayMenuContent;
