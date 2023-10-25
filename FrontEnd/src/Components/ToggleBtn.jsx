import React, { useState } from 'react';

const ToggleButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="flex cursor-pointer select-none items-center">
      <div className="relative">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle}
          className="sr-only"
        />
        <div className={`box block h-8 w-14 rounded-full ${isChecked ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
        <div className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${isChecked ? 'translate-x-full' : ''}`}></div>
      </div>
    </label>
  );
};

export default ToggleButton;
