import { formatDate } from '@shared/utils/formatHelper';
import { Text } from '@components/fundamentals/Text';
import { SemesterValue } from '@shared/services/api/types';
import { css } from '@emotion/react';

type SemesterInfoProps = {
  semester: SemesterValue;
};

function SemesterInfo({ semester }: SemesterInfoProps) {
  return (
    <Text css={semesterTextStyle}>
      {semester.title}학기 {semester.act}({formatDate(new Date(semester.due))}
      )까지
    </Text>
  );
}

const semesterTextStyle = css`
  text-align: center;
`;

export default SemesterInfo;
