import React, { useState, useEffect, useRef } from 'react';
import SelectMenu from './SelectMenu';
import ToggleButton from './ToggleButton';
import IconFontSize from './icons/IconFontSize';
import IconMargin from './icons/IconMargin';

export default function TypeControl({ field, input, meta }) {
  const colors = [
    { label: "White", value: "text-white"},
    { label: "Gray", value: "text-gray-400"},
    { label: "Black", value: "text-black"},
  ]
  const [color, setColor] = useState(getStyleMatch(colors, input.value));
  const sizes = [
    { label: "SM", value: "text-sm" },
    { label: "MD", value: "text-md" },
    { label: "LG", value: "text-lg" },
  ]
  const [size, setSize] = useState(getStyleMatch(sizes, input.value));
  const margins = [
    { label: "0", value: "mb-0" },
    { label: "1px", value: "mb-px" },
    { label: "2px", value: "mb-0.5" },
    { label: "4px", value: "mb-1" },
    { label: "6px", value: "mb-1.5" },
    { label: "8px", value: "mb-2" },
    { label: "10px", value: "mb-2.5" },
    { label: "12px", value: "mb-3" },
    { label: "14px", value: "mb-3.5" },
    { label: "16px", value: "mb-4" },
    { label: "20px", value: "mb-5" },
    { label: "24px", value: "mb-6" },
    { label: "28px", value: "mb-7" },
    { label: "32px", value: "mb-8" },
    { label: "36px", value: "mb-9" },
    { label: "40px", value: "mb-10" },
    { label: "44px", value: "mb-11" },
    { label: "48px", value: "mb-12" },
    { label: "56px", value: "mb-14" },
    { label: "64px", value: "mb-16" },
    { label: "80px", value: "mb-20" },
    { label: "96px", value: "mb-24" },
  ]
  const [margin, setMargin] = useState(getStyleMatch(margins, input.value));
  const weights = [
    { label: "B", value: "font-bold" }
  ];
  const [weight, setWeight] = useState(getStyleMatch(weights, input.value));
  const fontStyles = [
    { label: "I", value: "italic" }
  ];
  const [fontStyle, setFontStyle] = useState(getStyleMatch(weights, input.value));

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Update Hidden Field
    const input = inputRef.current;
    const lastValue = input.value;
    const newValue = `${color} ${size} ${margin} ${weight} ${fontStyle}`;
    input.value = newValue;
    (input as any)._valueTracker?.setValue(lastValue);
    input.dispatchEvent(new Event("input", {bubbles: true}));
  }, [color, size, margin, weight, fontStyle, inputRef.current]);

  // See if one of groups arrays styles is present in the fields value
  function getStyleMatch(options: {label: string, value: string}[], styles: string): string {
    const optionValues = options.map(option => option.value);
    const currentStyles = styles.split(" ");
    const matches = optionValues.filter(element => currentStyles.includes(element))
    return matches[0];
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
        <SelectMenu value={color} onChange={setColor} options={colors} className="mr-2" />
        <IconFontSize className="mr-2 ml-1" />
        <SelectMenu value={size} onChange={setSize} options={sizes} className="mr-2" />
        <IconMargin className="mr-2 ml-1" />
        <SelectMenu value={margin} onChange={setMargin} options={margins} className="mr-2" />
        <ToggleButton value={weight} onClick={setWeight} options={weights} className="w-9" />
        <input ref={inputRef} type="text" {...input}  className="hidden" />
      </div>
    </>
  )
}