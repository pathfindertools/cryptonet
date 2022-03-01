import React, { useState } from "react";
import * as ga from '../lib/ga'
import { isString, lowerDash } from "../helpers/utilities";
import { Burger } from "./burger"
import layoutData from "../content/global/index.json";

const navList = (blocks) => {
  const anchorLinks: [] = blocks?.filter(block => block.navigationLabel).map(block => block.navigationLabel);
  return anchorLinks;
}

const linkTarget = (link) => {
  const isExternalLink = isString(link) && link.charAt(0) !== '#'
  return isExternalLink ? '_blank' : ''
}

export const Header = ({
  blocks,
  data = layoutData,
}) => {
  const [navOpen, setNavOpen] = useState(false);

  const pageJump = (label) => {
    setNavOpen(!navOpen)
    ga.event({
      action: "page_jump",
      params : {
        jump_label: label
      }
    })
  }

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
  const navTextColor = data.nav?.navTextColor
  const navBackgroundColor = data.nav?.navBackgroundColor
  const navItems = data.nav?.navItems
  const navAlignmentClasses = data.nav?.navAlignment === "left" ? "text-left" : "text-right sm:text-left";
  const sectionClasses = navOpen ? "sm:h-screen" : "sm:h-10 overflow-hidden";
  const navClasses = navOpen ? "sm:opacity-100 m-0" : "sm:opacity-0 mt-4 sm:pointer-events-none";
  const backgroundClasses = navOpen ? "opacity-100" : "opacity-0";
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
      <div className={`${sectionClasses} sm:h-screen absolute z-40 top-0 left-0 right-0`}>
        <div style={backgroundStyles} className={`${backgroundClasses} ${backgroundColors[navBackgroundColor]} transition duration-400 absolute inset-0 -z-1 hidden sm:block`}></div>
        <div className="max-w-desktop-full px-12 mx-auto">
          <div className="absolute top-0 p-4 right-0 hidden sm:block" onClick={() => setNavOpen(!navOpen)}>
            <Burger color="white" isOpen={navOpen}  />
          </div>
          <ul style={navStyles} className={`${navClasses} ${textColors[navTextColor]} ${navAlignmentClasses} block list-none sm:mt-16 mt-2`}>
            {/* Page Jumps */}
            {navList(blocks)?.map(function (item, index) {
              return (
                <li className="inline-block sm:block ml-10 first:ml-0 sm:ml-0" key={index}>
                  <div className={`${backgroundColors[navTextColor]} h-px opacity-25 hidden sm:block`} />
                  <a style={linkStyles} className={"block no-underline"} href={`#${lowerDash(item)}`} onClick={ () => pageJump(item) }>{item}</a>
                </li>
              )
            })}
            {/* Manual Nav Links */}
            {navItems && navItems.map(function (item, index) {
              return (
                <li className="inline-block sm:block ml-10 first:ml-0 sm:ml-0" key={index}>
                  <div className={`${backgroundColors[navTextColor]} h-px opacity-25 hidden sm:block`} />
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
