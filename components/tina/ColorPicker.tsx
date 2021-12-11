import React, { useState, useRef, useEffect } from 'react';

interface ColorPickerProps {
  options: {
    label: string,
    value: string
  }[];
  onClick: Function;
  value: string;
  className?: string;
}
export default function ColorPicker(props:ColorPickerProps) {
  const [isActive, setIsActive] = useState(false)
  const clickOutsideRef = useRef(null);

  const handleClickOutside = e => {
    if (!clickOutsideRef.current.contains(e.target)) {
      setIsActive(false);
    }
  };
  function handleClick(newValue) {
    props.onClick(newValue)
    setIsActive(false)
  }
  function togglePicker() {
    setIsActive(!isActive)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });
  

  const pickerClasses = `absolute left-0 w-44 p-2 z-20 border shadow bg-white grid grid-cols-5 gap-2`
  const pickerStyles = {
      display: isActive ? "grid" : "none",
      top: "calc(100% + 8px)",
      borderRadius: "3px",
      borderColor: "var(--tina-color-grey-2)",
  }

  const colorChipClasses = `border-box absolute w-6 h-6 rounded-sm ${props.value?.replace('text-', 'bg-')}`
  const colorChipStyles = {
      border: props.value === "text-white" ? "1px solid var(--tina-color-grey-2)" : "",
      top: "5px",
      left: "5px",
  }

  const buttonClasses = `relative cursor-pointer text-sm font-bold border py-1 px-2 h-9 w-9 rounded ${props.className}`;
  const buttonStyles = {
    borderColor: "var(--tina-color-grey-2)",
    color: isActive ? "var(--tina-color-primary)" : "var(--tina-color-grey-8)",
    backgroundColor: "white",
  }

  const pickerOptions = props.options.map((option) => {
    const borderStyles = option.value === "text-white" ? {border: "1px solid var(--tina-color-grey-2"} : {}
    return <div
      onClick={() => handleClick(option.value)}
      style={borderStyles}
      className={`w-6 h-6 cursor-pointer rounded-sm ${(option.value)?.replace('text-', 'bg-')}`}
      key={option.value}
    ></div>
  });

  return (
    <div id="colorpicker" ref={clickOutsideRef} onClick={togglePicker} className={buttonClasses} style={buttonStyles}>
      <div className={colorChipClasses} style={colorChipStyles}></div>
      <div className={pickerClasses} style={pickerStyles}>
        {pickerOptions}
      </div>
    </div>
  )
}