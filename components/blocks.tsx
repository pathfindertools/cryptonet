import React from "react";
import type { Pages } from "../.tina/__generated__/types";
import { Cards } from "./blocks/cards";
import { Feature } from "./blocks/feature";
import { Banner } from "./blocks/banner";
import { Embed } from "./blocks/embed";

export const Blocks = (props: Pages) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            switch (block.__typename) {
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
              case "PagesBlocksPhotoCards":
                return (
                  <React.Fragment key={i + block.__typename}>
                    <Cards data={block} />
                  </React.Fragment>
                );
              case "PagesBlocksTextCards":
                return (
                  <React.Fragment key={i + block.__typename}>
                    <Cards data={block} />
                  </React.Fragment>
                );
              case "PagesBlocksEmbed":
                return (
                  <React.Fragment key={i + block.__typename}>
                    <Embed data={block} />
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
