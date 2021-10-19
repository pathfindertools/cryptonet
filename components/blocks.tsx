import React from "react";
import type { Pages } from "../.tina/__generated__/types";
import { Content } from "./blocks/content";
import { Cards } from "./blocks/cards";
import { Feature } from "./blocks/feature";
import { Banner } from "./blocks/banner";

export const Blocks = (props: Pages) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            switch (block.__typename) {
              case "PagesBlocksContent":
                return (
                  <React.Fragment key={i + block.__typename}>
                    <Content data={block} />
                  </React.Fragment>
                );
              case "PagesBlocksFeature":
                return (
                  <React.Fragment key={i + block.__typename}>
                    <Feature data={block} />
                  </React.Fragment>
                );
              case "PagesBlocksBanner":
                return (
                  <React.Fragment key={i + block.__typename}>
                    <Banner data={block} />
                  </React.Fragment>
                );
              case "PagesBlocksCards":
                return (
                  <React.Fragment key={i + block.__typename}>
                    <Cards data={block} />
                  </React.Fragment>
                );
              default:
                return null;
            }
          })
        : null}
    </>
  );
};
