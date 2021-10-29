import React, { useState } from "react";
import type { Pages } from "../.tina/__generated__/types";
import { lowerDash } from "../helpers/utilities";
import { Burger } from "./burger"

const navList = (blocks) => {
  return blocks?.filter(block => block.navigationLabel).map(block => block.navigationLabel)
}

export const Header = (props: Pages) => {
  const [navOpen, setNavOpen] = useState(false);

  const sectionClasses = navOpen ? "h-screen overflow-scroll md:h-auto" : "overflow-hidden";
  const navClasses = navOpen ? "opacity-100 m-0" : "opacity-0 mt-4";
  const navStyles = { 
    transition: "opacity .4s, margin .3s",
  }
  const backgroundClasses = navOpen ? "opacity-100" : "opacity-0";
  const backgroundStyles = { 
    transition: "opacity .4s ease-out",
  }
  const linkStyles = navOpen ? { 
    "line-height": "4rem",
    transition: "line-height .4s"
  } : {
    "line-height": "6rem",
    transition: "line-height .4s"
  }

  return (
    <section className={`${sectionClasses} absolute z-10 top-0 left-0 right-0`}>
      <div style={backgroundStyles} className={`${backgroundClasses} transition duration-400 absolute inset-0 -z-1 bg-black md:hidden`}></div>
      <div className="max-w-screen-lg p-12 md:py-0 mx-auto">
          <div className="absolute top-0 p-4 right-0 md:hidden" onClick={() => setNavOpen(!navOpen)}>
            <Burger color="white" isOpen={navOpen}  />
          </div>
          <ul style={navStyles} className={`${navClasses} block text-white list-none mt-6 md:mt-2 md:text-right md:opacity-100`}>
            {navList(props.blocks)?.map(function (item) {
              return (
                <li className="md:inline-block md:ml-10">
                  <div className="bg-white h-px opacity-25 md:hidden" />
                  <a style={linkStyles} className={"block no-underline"} href={`#${lowerDash(item)}`} onClick={() => setNavOpen(!navOpen)}>{item}</a>
                </li>
              )
            })}
          </ul>
      </div>
    </section>
  );
};
