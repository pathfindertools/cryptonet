import React, { useState, useEffect, useRef } from 'react';
import SelectMenu from './SelectMenu';
import ColorPicker from './ColorPicker';

export default function BorderControl({ field, input, meta }) {
  const colors = [
    { label: "Primary", value: "border-primary"},
    { label: "Accent 1", value: "border-accent1"},
    { label: "Accent 2", value: "border-accent2"},
    { label: "Accent 3", value: "border-accent3"},
    { label: "Accent 4", value: "border-accent4"},
    { label: "White", value: "border-white"},
    { label: "Gray Light", value: "border-gray-light"},
    { label: "Gray", value: "border-gray"},
    { label: "Gray Dark", value: "border-gray-dark"},
    { label: "Black", value: "border-black"},
  ]
  const [color, setColor] = useState(getStyleMatch(colors, input.value));
  const widths = [
    { label: "0", value: "" },
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "6", value: "6" },
    { label: "8", value: "8" },
  ]
  const [width, setWidth] = useState(getStyleMatch(widths, input.value));
  const sides = [
    { label: "None", value: "" },
    { label: "All", value: "border-" },
    { label: "Top", value: "border-t-" },
    { label: "Right", value: "border-r-" },
    { label: "Bottom", value: "border-b-" },
    { label: "Left", value: "border-l-" },
    { label: "Horizontal", value: "border-x-" },
    { label: "Vertical", value: "border-y-" },
  ]
  const [side, setSide] = useState(getStyleMatch(sides, input.value));
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Update Hidden Field
    const input = inputRef.current;
    const lastValue = input.value;
    const newValue = `${color} ${side}${width}`;
    input.value = newValue;
    (input as any)._valueTracker?.setValue(lastValue);
    input.dispatchEvent(new Event("input", {bubbles: true}));
  }, [color, width, sides, inputRef.current]);

  // See if one of groups arrays styles is present in the fields value
  function getStyleMatch(options: {label: string, value: string}[], styles: string): string {
    const optionValues = options.map(option => option.value);
    const currentStyles = styles.split(" ");
    const matches = optionValues.filter(element => currentStyles.includes(element))
    return matches[0];
  }

  function handleSetColor(value: string) {
    setColor(`border-${value}`)
  }
  
  return (
    <>
      <div>
        <label className="block mb-2 overflow-hidden" style={{
          color: "var(--tina-color-grey-8)",
          fontSize: "var(--tina-font-size-1)",
          fontWeight: "600",
          letterSpacing: "0.01em",
          textOverflow: "ellipsis",
        }}>{field.label}</label>
      </div>
      <div className="flex mb-6 items-center">
        <ColorPicker value={color?.replace('border-','')} onClick={handleSetColor} className="mr-1" />
        <SelectMenu value={width} onChange={setWidth} options={widths} className="w-14 mr-1" />
        <SelectMenu value={side} onChange={setSide} options={sides} className="flex-1" />
        <input ref={inputRef} type="text" {...input}  className="hidden" />
      </div>
    </>
  )
}