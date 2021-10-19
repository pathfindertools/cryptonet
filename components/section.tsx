import React from "react";
import { ThemeContext } from "./theme";

export const Section = ({
  children,
  color = "",
  className = "",
  image = "",
}) => {
  const theme = React.useContext(ThemeContext);

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

  return (
    <section
      className={`relative body-font overflow-hidden ${sectionColorCss[color]} ${className}`}
    >
      <div className={`background absolute inset-0`}>
        {image && <img className="w-full h-full object-cover" src={image} />}
      </div>
      <div className={`relative z-10`}>{children}</div>
    </section>
  );
};
