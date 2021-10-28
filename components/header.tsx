import React from "react";
import type { Pages } from "../.tina/__generated__/types";
import { lowerDash } from "../helpers/utilities";


const navList = (blocks) => {
  return blocks?.filter(block => block.navigationLabel).map(block => block.navigationLabel)
}

export const Header = (props: Pages) => {
  return (
    <section className="absolute z-10 top-0 left-0 right-0 overflow-hidden">
      <div className={`background absolute inset-0 -z-1 bg-primary opacity-0`}></div>
      <div className="max-w-screen-lg p-12 mx-auto">
          <ul className="text-white text-right list-none">
            {navList(props.blocks)?.map(function (item) {
              return (
                <li className="inline-block ml-10">
                  <a href={`#${lowerDash(item)}`}>{item}</a>
                </li>
              )
            })}
          </ul>
      </div>
    </section>
  );
};
