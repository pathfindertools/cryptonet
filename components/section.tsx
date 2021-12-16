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

  const sectionColorCss = {
    white: "bg-white",
    grayLight: "bg-gray-200",
    gray: "bg-gray-500",
    grayDark: "bg-gray-800",
    black: "bg-black",
    primary: "bg-primary",
    accent1: "bg-accent1",
    accent2: "bg-accent2",
    accent3: "bg-accent3",
  };

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
