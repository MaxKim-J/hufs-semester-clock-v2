import { css } from '@emotion/react';
import { colorTable, spaceTable } from '@style/variables';
import { ChangeEvent } from 'react';

type SelectInputItem = {
  key: string | number;
  value: string;
};

type SelectInputProps = {
  items: SelectInputItem[];
  title: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

function SelectInput({ items, title, onChange }: SelectInputProps) {
  return (
    <select css={selectStyle} onChange={onChange} defaultValue="">
      <option disabled value="">
        {title}
      </option>
      {items.map((item) => (
        <option value={item.value} key={item.key}>
          {item.value}
        </option>
      ))}
    </select>
  );
}

const selectStyle = css`
  background-color: transparent;
  color: ${colorTable.white};
  border: 2px solid ${colorTable.white};
  padding: ${spaceTable.size4} ${spaceTable.size8};
`;

export default SelectInput;
