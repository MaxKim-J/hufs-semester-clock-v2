import { useRecoilState } from 'recoil';
import { css } from '@emotion/react';
import { Text } from '@components/fundamentals/Text';
import { currentSemester } from '@shared/atoms/userSemester';
import { SwitchInput } from '@components/fundamentals/Input';
import useSemesterQuery from '@/SemesterClock/query/useSemesterQuery';

function SeasonalSettingArticle() {
  const { semesterData } = useSemesterQuery();
  const [semester, setSemester] = useRecoilState(currentSemester);

  const isSeasonalSelectable = () => {
    if (semester !== null) {
      const { id } = semester;
      return id === 'next' || id === 'seasonal';
    }
    return false;
  };

  const toggleSemester = () => {
    if (semesterData && semester) {
      const { seasonal, next } = semesterData;
      setSemester(semester.id === 'next' ? seasonal : next);
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
  margin-right: 0.5rem;
`;

const warningStyle = css`
  margin-left: 1rem;
`;

export default SeasonalSettingArticle;
