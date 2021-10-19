import Link from "next/link";
import * as React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { ThemeContext } from "./theme";

export const Buttons = ({
  parentColor = "default",
  className = "",
  buttons,
}) => {
  const theme = React.useContext(ThemeContext);

  return (
    <div className={`flex-inline flex-wrap gap-2 ${className}`}>
      {buttons &&
        buttons.map(function (button, index) {
          let element = null;
          if (button.type === "button") {
            element = (
              <Link key={index} href={button.link ? button.link : "/"}>
                <button
                  className={`relative bg-primary text-black px-7 py-3 font-semibold text-lg rounded whitespace-nowrap mx-3 first:ml-0 last:mr-0`}
                >
                  {button.label}
                  {button.icon && (
                    <BiRightArrowAlt
                      className={`ml-1 -mr-1 w-6 h-6 opacity-80`}
                    />
                  )}
                </button>
              </Link>
            );
          }
          if (button.type === "link" || button.type === "linkExternal") {
            element = (
              <Link key={index} href={button.link ? button.link : "/"} passHref>
                <a
                  className={`group inline-flex items-center font-semibold text-lg transition duration-150 ease-out ${
                    parentColor === "primary"
                      ? `text-white  hover:text-gray-50`
                      : linkButtonColorClasses[theme.color]
                  }`}
                  style={{
                    textShadow: `0 3px 7px rgba(var(--color-rgb-blue-400),0.2)`,
                  }}
                >
                  {button.label}
                  {button.icon && (
                    <BiRightArrowAlt
                      className={`ml-0 mr-0 w-6 h-6 opacity-80`}
                    />
                  )}
                </a>
              </Link>
            );
          }
          return element;
        })}
    </div>
  );
};
