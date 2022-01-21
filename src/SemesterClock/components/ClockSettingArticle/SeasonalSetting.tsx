import { useMemo, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { css } from '@emotion/react';
import { Text } from '@components/fundamentals/Text';
import { spaceTable } from '@style/variables';
import { Semesters } from '@shared/services/api/types';
import { SwitchInput } from '@components/fundamentals/Input';
import { isUserSeasonal } from '../../atoms';
import useSemesterQuery from '@/SemesterClock/queries/useSemesterQuery';
import { isClockUnexpired } from '@/SemesterClock/utils/clockHelper';

function SeasonalSetting() {
  const semesters = useSemesterQuery() as Semesters;
  const [isSeasonal, setIsSeasonal] = useRecoilState(isUserSeasonal);

  const isSeasonalSelectable = useMemo(
    () => isClockUnexpired(new Date(semesters.seasonal.due)),
    [semesters]
  );

  const toggleSemester = useCallback(() => {
    setIsSeasonal((state) => ({
      ...state,
      value: !state.value,
    }));
  }, [setIsSeasonal]);

  return (
    <div css={seasonalSettingStyle}>
      <Text css={seasonalTextStyle}>계절학기를 듣고 있어요!</Text>
      <SwitchInput
        checked={isSeasonal.value as boolean}
        onToggle={toggleSemester}
        title="계절학기 전환 스위치"
        disabled={!isSeasonalSelectable}
      />
      {!isSeasonalSelectable && (
        <Text css={warningStyle} size="size12" color="gray">
          계절학기 수강 기간이 아닙니다.
        </Text>
      )}
    </div>
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

export default SeasonalSetting;
