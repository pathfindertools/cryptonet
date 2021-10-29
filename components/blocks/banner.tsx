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
      <div className="max-w-screen-lg p-12 mx-auto">
        {data.image && (
          <img
            className=""
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
    </Section>
  );
};
