import { useRecoilValue, useSetRecoilState } from 'recoil';
import { css } from '@emotion/react';
import { Text } from '@components/fundamentals/Text';
import { spaceTable } from '@style/variables';
import { currentSemester, isUserSeasonal } from '@shared/atoms/userSemester';
import { SwitchInput } from '@components/fundamentals/Input';
import useSemesterQuery from '@/SemesterClock/query/useSemesterQuery';
import { isClockUnexpired } from '@/SemesterClock/utils/clockHelper';

function SeasonalSettingArticle() {
  const { semesterData } = useSemesterQuery();
  const semester = useRecoilValue(currentSemester);
  const setIsSeasonal = useSetRecoilState(isUserSeasonal);

  const isSeasonalSelectable = () => {
    if (semester !== null && semesterData) {
      return isClockUnexpired(new Date(semesterData.seasonal.due));
    }
    return false;
  };

  const toggleSemester = () => {
    if (semester) {
      setIsSeasonal((state) => ({
        ...state,
        value: semester.id === 'next',
      }));
    }
  };

  return (
    <article css={seasonalSettingStyle}>
      {semester !== null && (
        <>
          <Text css={seasonalTextStyle}>계절학기를 듣고 있어요!</Text>;
          <SwitchInput
            checked={semester.id === 'seasonal'}
            onToggle={toggleSemester}
            title="계절학기 전환 스위치"
            disabled={!isSeasonalSelectable()}
          />
          {!isSeasonalSelectable() && (
            <Text css={warningStyle} size="size12" color="red">
              계절학기 수강 기간이 아닙니다.
            </Text>
          )}
        </>
      )}
    </article>
  );
}

const seasonalSettingStyle = css`
  display: flex;
  align-items: center;
`;

const seasonalTextStyle = css`
  margin-right: ${spaceTable.size8};
`;

const warningStyle = css`
  margin-left: ${spaceTable.size16};
`;

export default SeasonalSettingArticle;
