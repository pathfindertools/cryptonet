import React from "react";
import { lowerDash } from "../helpers/utilities"

export const Section = ({
  children,
  navigationLabel = "",
  className = "",
  image = "",
  imagePosition = "",
  fillStyles="",
}) => {

  const sectionId = navigationLabel ? { id: lowerDash(navigationLabel) } : {}

  return (
    <section
      { ...sectionId }
      className={`relative ${className}`}
    >
      <div className={`background absolute inset-0 -z-1 ${fillStyles}`}>
        {image && <img className={`w-full h-full object-cover ${imagePosition}`} src={image} />}
      </div>
      {children}
    </section>
  );
};
