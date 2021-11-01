import * as React from "react";
import { Section } from "../section";
import { Content } from "../content";

export const Banner = ({ data }) => {
  return (
    <Section
      color={data.style?.backgroundColor}
      image={data.style?.backgroundImage?.src}
      navigationLabel={data.navigationLabel}
    >
      <div className="max-w-screen-lg md:p-12 p-6 mx-auto">
        <div className={`mx-auto ${data.style?.width === "narrow" ? "md:w-2/3" : "w-full"}`}>
          {data.image && (
            <img
              className=" md:mt-12 mt-6"
              alt={data.image.alt}
              src={data.image.src}
            />
          )}
          <Content
            label = {data.label}
            headline = {data.headline}
            subhead = {data.subhead}
            body = {data.body}
            buttons = {data.buttons}
            color = {data.style?.textColor}
            alignment = {data.style?.textAlignment}
            order = {data.style?.contentOrder}
          />
        </div>
      </div>
    </Section>
  );
};
