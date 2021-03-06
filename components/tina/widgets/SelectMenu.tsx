import React from 'react';

interface SelectMenuProps {
  options: {
    label: string,
    value: string
  }[];
  onChange: Function;
  value: string;
  className?: string;
}
export default function SelectMenu(props:SelectMenuProps) {
  const optionElements = props.options.map((option) => {
    return <option value={option.value} key={option.value}>{option.label}</option>
  });
  
  function handleChange(event) {
    props.onChange(event.target.value);
  }

  const selectClasses = `${props.className} border border-tina-gray2 text-sm p-1 h-9`;
  const selectStyles = {
    borderRadius: "var(--tina-radius-small)",
  }

  return (
    <select value={props.value} onChange={handleChange} className={selectClasses} style={selectStyles}> 
        {optionElements}
    </select>
  )
}