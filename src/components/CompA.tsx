import React, { ReactElement, useState } from 'react';
import { useRecoilState } from 'recoil';
import useSemesterQuery from '@/hooks/query/useSemesterQuery';
import Atoms from '@/atoms';

function CompA(): ReactElement {
  const [semesterInfo, setSemesterInfo] = useRecoilState(
    Atoms.userSemesterInfo
  );

  const data = useSemesterQuery(semesterInfo);

  const [some, setSome] = useState(false);

  const storageAgain = () => {
    // 이거는 보기 흉하니까 세터를 하나 만들자
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
      <button
        type="button"
        onClick={() => {
          setSome((state) => !state);
        }}
      >
        그냥버튼
      </button>
      <div>{data}</div>
      <div>{some.toString()}</div>
    </>
  );
}

export default CompA;
