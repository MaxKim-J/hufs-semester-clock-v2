import React, { ReactElement } from 'react';
import { useRecoilState } from 'recoil';
import useSemesterQuery from '@/hooks/query/useSemesterQuery';
import Atoms from '@/atoms';

function CompA(): ReactElement {
  const [semesterInfo, setSemesterInfo] = useRecoilState(
    Atoms.userSemesterInfo
  );

  const data = useSemesterQuery(semesterInfo);

  const storageAgain = () => {
    setSemesterInfo((semester: any) => ({
      ...semester,
      value: { due: 1, id: 0 },
    }));
  };

  const fetchAgain = () => {
    setSemesterInfo((semester: any) => ({
      ...semester,
      value: null,
    }));
  };

  return (
    <>
      <div>나는 컴포넌트 A라네!!!</div>
      <button type="button" onClick={fetchAgain}>
        이거 누르면 리퀘스트 쿼리 리패칭
      </button>
      <button type="button" onClick={storageAgain}>
        이거 누르면 스토리지 쿼리 리패칭
      </button>
      <div>
        {data !== undefined
          ? Object.values(data).map((d) => <div key={d.id}>{d.due}</div>)
          : null}
      </div>
    </>
  );
}

export default CompA;
