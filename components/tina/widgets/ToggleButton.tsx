import React from 'react';

interface ToggleButtonProps {
  options: {
    label: string,
    value: string
  }[];
  onClick: Function;
  value: string;
  className?: string;
}
export default function ToggleButton(props:ToggleButtonProps) {
  const isActive = props.options[0].value === props.value && props.value != undefined;

  function handleClick() {
    const optionValue = props.options[0].value;
    const value = props.value
    const newValue = (value === optionValue) ? "" : optionValue;
    props.onClick(newValue);
  }

  const buttonClasses = ` py-1 px-2 h-9 bg-white text-sm font-bold border rounded ${props.className} `;
  const buttonStyles = {
    borderColor: "var(--tina-color-grey-2)",
    boxShadow: isActive ? "inset 0 0 2px var(--tina-color-grey-3)" : "",
    color: isActive ? "var(--tina-color-primary)" : "var(--tina-color-grey-8)",
  }

  return (
    <button onClick={handleClick}  className={buttonClasses} style={buttonStyles}>{props.options[0].label}</button>
  )
}