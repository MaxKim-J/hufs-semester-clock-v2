import { css } from '@emotion/react';
import { colorTable, spaceTable } from '@style/variables';

type SelectInputProps = {
  items: string[];
  title: string;
  onChange: (value: string) => void;
};

function SelectInput({ items, onChange, title }: SelectInputProps) {
  return (
    <select
      css={selectStyle}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    >
      <option disabled selected value={' '}>
        {title}
      </option>
      {items.map((item, idx) => (
        <option value={item} key={`${item}-${idx}`}>
          {item}
        </option>
      ))}
    </select>
  );
}

const selectStyle = css`
  background-color: transparent;
  color: ${colorTable.white};
  border: 2px solid ${colorTable.white};
  padding: ${spaceTable.xSmall} ${spaceTable.small};
`;

export default SelectInput;
