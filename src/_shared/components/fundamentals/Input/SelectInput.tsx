import { css } from '@emotion/react';
import { colorTable } from '@/_shared/styles/variables';

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
  padding: 0.25rem 0.5rem;
`;

export default SelectInput;
