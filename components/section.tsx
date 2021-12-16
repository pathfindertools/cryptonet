import React from "react";
import { lowerDash } from "../helpers/utilities"

export const Section = ({
  children,
  navigationLabel = "",
  className = "",
  image = "",
  imagePosition = "",
  minHeight= "",
  fillStyles="",
}) => {

  const sectionId = navigationLabel ? { id: lowerDash(navigationLabel) } : {}
  const sectionStyle = { minHeight: minHeight ? `${minHeight}px` : 'auto' }

  return (
    <section
      { ...sectionId }
      className={`relative ${className}`}
      style={sectionStyle}
    >
      <div className={`background absolute inset-0 -z-1 ${fillStyles}`}>
        {image && <img className={`w-full h-full object-cover ${imagePosition}`} src={image} />}
      </div>
      {children}
    </section>
  );
};
