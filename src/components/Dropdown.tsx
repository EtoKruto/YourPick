import * as React from 'react';

interface DropdownProps {
  value: any;
  options: any;
  onChange: any;
}

const Dropdown: React.FC<DropdownProps> = ({
  value,
  options,
  onChange,
}: DropdownProps) => {
  return (
    <div>
      <select
        value={value}
        onChange={onChange}
        multiple={false}
        className="select-css"
      >
        {(options || []).map((option: any) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
