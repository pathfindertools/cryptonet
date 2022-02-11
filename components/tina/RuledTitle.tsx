import React from 'react';

export default function RuledTitle({ field, input, meta }) {

  return (
    <>
      <div className="relative mb-5">
        <div className="absolute top-2 -left-5 -right-5 border-t border-tina-gray2"></div>
        <h2 className="text-tina-gray8 font-bold pt-7" style={{
          fontSize: "var(--tina-font-size-2)",
          textOverflow: "ellipsis",
        }}>{field.label}</h2>
      </div>
    </>
  )
}
