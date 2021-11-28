type SelectInputProps = {
  items: string[];
  title: string;
  onChange: (value: string) => void;
};

function SelectInput({ items, onChange, title, ...props }: SelectInputProps) {
  return (
    <select
      onChange={(e) => {
        onChange(e.target.value);
      }}
      {...props}
    >
      <option value={' '}>{title}</option>
      {items.map((item, idx) => (
        <option value={item} key={`${item}-${idx}`}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default SelectInput;
