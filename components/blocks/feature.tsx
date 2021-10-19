import * as React from "react";
import Markdown from "react-markdown";
import { Buttons } from "../buttons";
import { Container } from "../container";
import { Section } from "../section";

const containerCss = (data) => {
  const flexDirection = data.style?.flipLayout
    ? "flex-row-reverse"
    : "flex-row";
  const imageStyle = {
    natural: "py-12",
    fitHalf: "",
    fillHalf: "",
    overlap: "",
  };
  const contentAlignment = {
    top: "",
    center: "items-center ",
    bottom: "items-end",
  };
  const styles = [
    flexDirection,
    imageStyle[data.style?.imageStyle],
    contentAlignment[data.style?.contentAlignment],
  ];
  return `relative flex gap-8 ${styles.join(" ")}`;
};

const contentCss = (data) => {
  const textColor = {
    white: "text-white",
    grayLight: "text-gray-200",
    gray: "text-gray-500",
    grayDark: "text-gray-800",
    black: "text-black",
  };
  const textAlignment = {
    left: "",
    center: "text-center",
    right: "text-right",
  };
  const imageStyle = {
    natural: "w-full",
    fitHalf: "w-full",
    fillHalf: data.style?.flipLayout
      ? "w-1/2 ml-1/2 pl-8 py-24"
      : "w-full pr-8 py-24",
    overlap: data.style?.flipLayout
      ? "w-1/2 ml-1/2 z-10 py-24"
      : "w-1/2 mr-1/2 z-10 py-24",
  };
  const styles = [
    imageStyle[data.style?.imageStyle],
    textColor[data.style?.textColor],
    textAlignment[data.style?.textAlignment],
  ];
  return styles.join(" ");
};

const imageWrapCss = (data) => {
  const imageStyle = {
    natural: "w-full",
    fitHalf: "w-full",
    fillHalf: data.style?.flipLayout
      ? "absolute inset-0 right-1/2"
      : "absolute inset-0 left-1/2",
    overlap: data.style?.flipLayout
      ? "absolute inset-0 right-1/3"
      : "absolute inset-0 left-1/3",
  };
  return `${imageStyle[data.style?.imageStyle]}`;
};

const imageCss = (data) => {
  const imageStyle = {
    natural: "",
    fitHalf: "",
    fillHalf: "w-full h-full object-cover object-center",
    overlap: "w-full h-full object-cover object-center",
  };
  return `${imageStyle[data.style?.imageStyle]}`;
};

export const Feature = ({ data }) => {
  return (
    <Section
      color={data.style?.backgroundColor}
      image={data.style?.backgroundImage?.src}
    >
      <Container size="none" className={containerCss(data)}>
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
              parentColor={data.style?.textColor}
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
