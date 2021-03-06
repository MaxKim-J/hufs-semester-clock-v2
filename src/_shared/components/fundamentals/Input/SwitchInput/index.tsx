import { MouseEvent, KeyboardEvent } from 'react';
import { css } from '@emotion/react';
import { colorTable } from '@style/variables';

type SwitchProps = {
  checked: boolean;
  onToggle: (isChecked: boolean) => void;
  title: string;
  disabled?: boolean;
};

function SwitchInput({
  disabled = false,
  checked,
  onToggle,
  title,
}: SwitchProps) {
  const handleChange = (e: MouseEvent<HTMLDivElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onToggle(!checked);
  };

  const handleEnterKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'enter') {
      if (disabled) {
        e.preventDefault();
        return;
      }
      onToggle(!checked);
    }
  };

  return (
    <div
      role="checkbox"
      css={switchBackgroundStyle(checked)}
      aria-checked={checked}
      aria-label={title}
      onClick={handleChange}
      onKeyDown={(e) => handleEnterKeyDown(e)}
    >
      <div
        css={
          disabled
            ? disabledSwitchCursorStyle(checked)
            : enabledSwitchCursorStyle(checked)
        }
      />
    </div>
  );
}

const switchBackgroundStyle = (isChecked: boolean) => css`
  position: relative;
  background-color: ${isChecked ? colorTable.lightBlue : colorTable.lightGray};
  border-radius: 25px;
  width: 45px;
  height: 25px;
`;

const switchCursorStyle = (isChecked: boolean) => css`
  position: absolute;
  transition: transform 0.5s;
  border-radius: 20px;
  width: 20px;
  height: 20px;
  transform: translate(${isChecked ? 22.5 : 2.5}px, 2.5px);
`;

const enabledSwitchCursorStyle = (isChecked: boolean) => css`
  ${switchCursorStyle(isChecked)}
  background-color: ${isChecked ? colorTable.white : colorTable.darkGray};
`;

const disabledSwitchCursorStyle = (isChecked: boolean) => css`
  ${switchCursorStyle(isChecked)}
  background-color: ${colorTable.gray}
`;

export default SwitchInput;
