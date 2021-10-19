import * as React from "react";
import Markdown from "react-markdown";
import { Buttons } from "../buttons";
import { Container } from "../container";
import { Section } from "../section";

const containerCss = (data) => {
  const flexDirection = data.flipLayout ? "flex-col-reverse" : "flex-col";
  return `relative flex gap-8 items-center ${flexDirection} `;
};

const contentCss = (data) => {
  const textColor = {
    white: "text-white",
    grayLight: "text-gray-200",
    gray: "text-gray-500",
    grayDark: "text-gray-800",
    black: "text-black",
  };
  return `${textColor[data.textColor]}`;
};

const imageWrapCss = (data) => {
  const imageStyle = {
    natural: "",
    fitHalf: "w-1/2",
    fillHalf: "w-1/2",
    overlap: "w-full",
  };
  return `${imageStyle[data.imageStyle]}`;
};

const imageCss = (data) => {
  const imageStyle = {
    natural: "",
    fitHalf: "",
    fillHalf: "",
    overlap: "",
  };
  return `${imageStyle[data.imageStyle]}`;
};

export const Banner = ({ data }) => {
  return (
    <Section
      color={data.style?.backgroundColor}
      image={data.style?.backgroundImage?.src}
    >
      <Container size="large" className={containerCss(data)}>
        <div className={contentCss(data)}>
          {data.label && <h4 className="text-lg">{data.label}</h4>}
          {data.headline && <h2 className="text-4xl">{data.headline}</h2>}
          {data.subhead && <h3 className="text-2xl">{data.subhead}</h3>}
          {data.body && (
            <div className="text-base">
              <Markdown>{data.body}</Markdown>
            </div>
          )}
          {data.buttons && (
            <Buttons
              parentColor={data.textColor}
              buttons={data.buttons}
              className="mt-8"
            />
          )}
        </div>
        {data.image && (
          <div className={imageWrapCss(data)}>
            <img
              className={imageCss(data)}
              alt={data.image.alt}
              src={data.image.src}
            />
          </div>
        )}
      </Container>
    </Section>
  );
};
