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

const splitStyle = (data) => {
  return {
    minHeight: data.style?.minHeight ? `${data.style?.minHeight}px` : 'auto'
  }
};

const contentContainerCss = (data) => {
  const margin = data.style?.flipLayout ? "md:mr-auto md:pr-12 md:pl-10 px-6" : "md:ml-auto md:pl-12 md:pr-10 px-6"
  return `md:max-w-screen-lg-half md:py-12 py-0 ${margin}`
}

const imageColumnCss = (data) => {
  const getAlignV = () => {
    if (data.image.position?.includes("top")) {
      return "self-start"
    }
    if (data.image.position?.includes("bottom")) {
      return "self-end"
    }
    return "self-center"
  }
  const styles = {
    padding: data.image.fit === "none" ? "" : "self-stretch",
    half: data.image.fit === "none" ? "" : "self-stretch",
    halfEdge: "self-stretch",
    overlap: "self-stretch",
  }
  return `${getAlignV()} ${styles[data.image.imageStyle]}`
}
const imageContainerCss = (data) => {
  const heightStyle = data.image.fit === "none" ? "" : "md:h-full"
  const styles = {
    padding: data.style?.flipLayout ? `${heightStyle} max-w-screen-lg-half ml-auto md:pl-12 md:pr-10 px-6 py-12` : `${heightStyle} max-w-screen-lg-half mr-auto pr-12 pl-10 py-12`,
    half: data.style?.flipLayout ? `${heightStyle} max-w-screen-lg-half ml-auto md:pl-12 md:pr-10 px-6` : `${heightStyle} max-w-screen-lg-half mr-auto pr-12 pl-10`,
    halfEdge: data.style?.flipLayout ? `md:absolute md:inset-0 md:right-4` : `md:absolute md:inset-0 md:left-4`,
    overlap: data.style?.flipLayout ? `md:absolute md:inset-0 md:-right-24` : `md:absolute md:inset-0 md:-left-24`,
  };
  return styles[data.image.imageStyle]
}

const imageCss = (data) => {
  const getAlignH = () => {
    if (data.image.position?.includes("right")) {
      return "ml-auto"
    }
    if (data.image.position?.includes("left")) {
      return "mr-auto"
    }
    return "m-auto"
  }

  const styles = {
    none: `${getAlignH()}`,
    scaleDown: "w-full h-full object-scale-down",
    contain: "w-full h-full object-contain",
    cover: "w-full h-full object-cover",
  };
  return styles[data.image.fit]
};

export const Feature = ({ data }) => {
  return (
    <Section
      fillStyles={data.style?.fillStyles}
      image={data.backgroundImage?.src}
      imagePosition={data.backgroundImage?.position}
      navigationLabel={data.navigationLabel}
      minHeight={data.style?.minHeight}
    >
      <div className={splitCss(data)} style={splitStyle(data)}>
        <div className={`flex-1 relative ${imageColumnCss(data)}`}>
          <div className={`border-2 border-white ${imageContainerCss(data)}`}>
            {data.image.src && (
              <img
                className={`border border-gray-light ${imageCss(data)} ${data.image.position}`}
                alt={data.image.alt}
                src={data.image.src}
              />
            )}
          </div>
        </div>
        <div className="flex-1 relative">
          <div className={`border-2 border-white ${contentContainerCss(data)}`}>
            <Content
              label = {data.label}
              headline = {data.headline}
              subhead = {data.subhead}
              body = {data.body}
              buttons = {data.buttons}
              labelStyles = {data.style?.labelStyles}
              headlineStyles = {data.style?.headlineStyles}
              subheadStyles = {data.style?.subheadStyles}
              textStyles = {data.style?.textStyles}
              alignment = {data.style?.textAlignment}
              order = {data.style?.contentOrder}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
