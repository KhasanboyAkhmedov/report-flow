import React from 'react';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: () => void;
  id?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange, id }) => {
  return (
    <label htmlFor={id} className="relative inline-flex items-center cursor-pointer">
      <input
        id={id}
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={onChange}
      />
      <div
        className={`
          w-11 h-6 rounded-full transition-colors duration-200
          bg-surface-container-highest
          peer-focus:outline-none
          peer-checked:bg-primary
          relative
          after:content-[''] after:absolute after:top-[2px] after:left-[2px]
          after:bg-white after:rounded-full after:h-5 after:w-5
          after:transition-all after:duration-200
          peer-checked:after:translate-x-5
        `}
      />
    </label>
  );
};

export default ToggleSwitch;
