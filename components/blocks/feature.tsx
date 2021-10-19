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
    natural: "w-full py-24",
    fitHalf: "w-full py-24",
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

const labelOrder = (data) => {
  const labelOrder = {
    labelHeadingsContent: "order-1",
    labelContentHeadings: "order-1",
    headingsLabelContent: "order-2",
    headingsContentLabel: "order-3",
    contentLabelHeadings: "order-2",
    contentHeadingsLabel: "order-3",
  };
  return `${labelOrder[data.style?.contentOrder]}`;
}

const headingOrder = (data) => {
  const headingOrder = {
    labelHeadingsContent: "order-2",
    labelContentHeadings: "order-3",
    headingsLabelContent: "order-1",
    headingsContentLabel: "order-1",
    contentLabelHeadings: "order-3",
    contentHeadingsLabel: "order-2",
  };
  return `${headingOrder[data.style?.contentOrder]}`;
}

const bodyOrder = (data) => {
  const bodyOrder = {
    labelHeadingsContent: "order-3",
    labelContentHeadings: "order-2",
    headingsLabelContent: "order-3",
    headingsContentLabel: "order-2",
    contentLabelHeadings: "order-1",
    contentHeadingsLabel: "order-1",
  };
  return `${bodyOrder[data.style?.contentOrder]}`;
}

export const Feature = ({ data }) => {
  return (
    <Section
      color={data.style?.backgroundColor}
      image={data.style?.backgroundImage?.src}
    >
      <Container size="none" className={containerCss(data)}>
        <div className={`flex flex-col ${contentCss(data)}`}>
          {data.label && <h4 className={`text-lg ${labelOrder(data)}`}>{data.label}</h4>}
          {data.headline && <h2 className={`text-4xl ${headingOrder(data)}`}>{data.headline}</h2>}
          {data.subhead && <h3 className={`text-2xl ${headingOrder(data)}`}>{data.subhead}</h3>}
          {data.body && (
            <div className={`text-base mt-8 items-center ${bodyOrder(data)}`}>
              <Markdown>{data.body}</Markdown>
            </div>
          )}
          {data.buttons && (
            <Buttons
              parentColor={data.style?.textColor}
              buttons={data.buttons}
              className="mt-8 order-4"
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
