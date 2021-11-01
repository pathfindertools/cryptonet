import * as React from "react";
import { Section } from "../section";
import { Content } from "../content";

const splitCss = (data) => {
  const contentAlignments = {
    top: "",
    center: "items-center",
    bottom: "items-end",
  };
  const contentAlignment = contentAlignments[data.style?.contentAlignment]
  const direction = data.style?.flipLayout ? "flex-row" : "flex-row-reverse"
  return `sm:flex ${direction} ${contentAlignment}`
}

const contentContainerCss = (data) => {
  const margin = data.style?.flipLayout ? "mr-auto pr-12 pl-10" : "ml-auto pl-12 pr-10"
  return `max-w-screen-lg-half py-12 ${margin}`
}

const imageContainerCss = (data) => {
  const styles = {
    natural: data.style?.flipLayout ? "max-w-screen-lg-half ml-auto pl-12 pr-10 py-12" : "max-w-screen-lg-half mr-auto pr-12 pl-10 py-12",
    fitHalf: data.style?.flipLayout ? "max-w-screen-lg-half ml-auto pl-12 pr-10 " : "max-w-screen-lg-half mr-auto pr-12 pl-10",
    fillHalf: data.style?.flipLayout ? "absolute inset-0 right-4" : "absolute inset-0 left-4",
    overlap: data.style?.flipLayout ? "absolute inset-0 -right-24" : "absolute inset-0 -left-24",
  };
  return styles[data.style?.imageStyle]
}

const imageCss = (data) => {
  const styles = {
    natural: "",
    fitHalf: "",
    fillHalf: "w-full h-full object-cover object-center",
    overlap: "w-full h-full object-cover object-center",
  };
  return styles[data.style?.imageStyle]
};


export const Feature = ({ data }) => {
  return (
    <Section
      color={data.style?.backgroundColor}
      image={data.style?.backgroundImage?.src}
      navigationLabel={data.navigationLabel}
    >
      <div className={splitCss(data)}>
        <div className="flex-1 relative self-stretch">
          <div className={imageContainerCss(data)}>
            {data.image && (
              <img
                className={imageCss(data)}
                alt={data.image.alt}
                src={data.image.src}
              />
            )}
          </div>
        </div>
        <div className="flex-1 relative">
          <div className={contentContainerCss(data)}>
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
      </div>
    </Section>
  );
};
