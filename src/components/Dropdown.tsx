import React, { useState, useEffect, useRef } from 'react';

interface DropdownProps {
  options: Option[],
  selected: Option,
  onSelectedChange: any,
}

interface Option {
  label: string,
  value: string
}

const Dropdown = ({ options, selected, onSelectedChange }: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onBodyClick = (event: Event) => {
      if(ref.current?.contains(event.target as Node)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener('click', onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener('click', onBodyClick, { capture: true });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div 
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });
  
  return (
    <div ref={ref} className="ui form">
      <div className="container">
        <div className="field">
          <label className="label">Select a Color</label>
          <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
            <i className="dropdown icon"></i>
            <div className="text">{selected.label}</div>
            <div className={`menu ${open ? 'visible transition' : ''}`}>
              {renderedOptions}
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className={`ui button ${selected.value}`}>{selected.label}</button>
      </div>
    </div>
  );
};

export default Dropdown;