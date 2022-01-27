import React, { useState } from "react";
import type { Pages } from "../.tina/__generated__/types";
import { isString, lowerDash } from "../helpers/utilities";
import { Burger } from "./burger"

const navList = (blocks) => {
  const anchorLinks: [] = blocks?.filter(block => block.navigationLabel).map(block => block.navigationLabel);
  return anchorLinks;
}

const linkTarget = (link) => {
  const isExternalLink = isString(link) && link.charAt(0) !== '#'
  return isExternalLink ? '_blank' : ''
}

export const Header = (props: Pages) => {
  const [navOpen, setNavOpen] = useState(false);

  const textColors = {
    primary: 'text-primary',
    accent1: 'text-accent1',
    accent2: 'text-accent2',
    accent3: 'text-accent3',
    accent4: 'text-accent4',
    white: 'text-white',
    grayLight: 'text-gray-light',
    gray: 'text-gray',
    grayDark: 'text-gray-dark',
    black: 'text-black',
  };
  const backgroundColors = {
    primary: 'bg-primary',
    accent1: 'bg-accent1',
    accent2: 'bg-accent2',
    accent3: 'bg-accent3',
    accent4: 'bg-accent4',
    white: 'bg-white',
    grayLight: 'bg-gray-light',
    gray: 'bg-gray',
    grayDark: 'bg-gray-dark',
    black: 'bg-black',
  }

  const sectionClasses = navOpen ? "sm:h-screen" : "overflow-hidden";
  const navClasses = navOpen ? "opacity-100 m-0" : "opacity-0 mt-4";
  const backgroundClasses = navOpen ? "opacity-100" : "opacity-0";
  
  const navAlignmentClasses = props.nav?.navAlignment === "left" ? "text-left" : "text-right sm:text-left";
  const navStyles = { 
    transition: "opacity .4s, margin .3s",
  }
  const backgroundStyles = { 
    transition: "opacity .4s ease-out",
  }
  const linkStyles = navOpen ? { 
    lineHeight: "4rem",
    transition: "line-height .4s"
  } : {
    lineHeight: "6rem",
    transition: "line-height .4s"
  }

  return (
    <section className="relative">
      <div className={`${sectionClasses} absolute z-40 top-0 left-0 right-0`}>
      <div style={backgroundStyles} className={`${backgroundClasses} ${backgroundColors[props.nav?.navBackgroundColor]} transition duration-400 absolute inset-0 -z-1 hidden sm:block`}></div>
      <div className="max-w-screen-lg py-0 px-12 sm:mx-auto">
          <div className="absolute top-0 p-4 right-0 hidden sm:block" onClick={() => setNavOpen(!navOpen)}>
            <Burger color="white" isOpen={navOpen}  />
          </div>
          <ul style={navStyles} className={`${navClasses} ${textColors[props.nav?.navTextColor]} ${navAlignmentClasses} block list-none sm:mt-6 mt-2 opacity-100`}>
            {navList(props.blocks)?.map(function (item, index) {
              return (
                <li className="inline-block sm:block ml-10 first:ml-0" key={index}>
                  <div className={`${backgroundColors[props.nav?.navTextColor]} h-px opacity-25 hidden sm:block`} />
                  <a style={linkStyles} className={"block no-underline"} href={`#${lowerDash(item)}`} onClick={() => setNavOpen(!navOpen)}>{item}</a>
                </li>
              )
            })}
            {props?.nav?.navItems && props.nav.navItems.map(function (item, index) {
              return (
                <li className="inline-block sm:block ml-10 first:ml-0 sm:ml-0" key={index}>
                  <div className={`${backgroundColors[props.nav?.navTextColor]} h-px opacity-25 hidden sm:block`} />
                  <a style={linkStyles} className={"block no-underline"} href={item.link} target={linkTarget(item.link)} onClick={() => setNavOpen(!navOpen)}>{item.label}</a>
                </li>
              )
            })}
          </ul>
      </div>
      </div>
    </section>
  );
};
