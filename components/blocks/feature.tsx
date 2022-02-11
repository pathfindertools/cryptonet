import * as React from "react";
import { Section } from "../section";
import { Content } from "../content";

/* Return the string with any word containing the substring removed */
const removeSubstring = (value: string, substring: string) => {
  return value?.split(" ").filter(item => item.indexOf(substring) === -1).join(" ") || ""
}
/* Return a the first word containing the substring */
const getSubstring = (value: string, substring: string) => {
  const match = value?.split(" ").find(item => item.includes(substring))
  return match
}

const contentContainerCss = (data) => {
  const isFlipped = data.style?.alignment?.split(' ').includes('flex-row')
  const margin = isFlipped ? "mr-auto" : "ml-auto"
  const padding = data.style?.padding
  return `max-w-desktop-half sm:w-full ${margin} ${padding}`
}

const imageContainerCss = (data) => {
  const isFlipped = data.style?.alignment?.split(' ').includes('flex-row')
  const hasMobileClasses = getSubstring(data.style?.padding, "sm:") ? true : false;
  const heightStyle = data.image?.fit === "none" ? "" : "h-full sm:h-auto"  
  const opposingEdgePadding = getSubstring(data.style?.padding, isFlipped ? "pr" : "pl")?.replace(isFlipped ? "pr-" : "pl-", "")
  const desktopPaddingTop = data.style?.padding?.split(" ").find(item => item.includes("pt"))
  const desktopPaddingBottom = data.style?.padding?.split(" ").find(item => item.includes("pb"))
  const desktopPaddingEdge = isFlipped ? `pl-${opposingEdgePadding}` : `pr-${opposingEdgePadding}`
  const desktopPadding = `${desktopPaddingTop} ${desktopPaddingBottom} ${desktopPaddingEdge}`
  const mobilePadding = "sm:p-0"
  const styles = {
    padding: `image-container max-w-desktop-half ${heightStyle} ${desktopPadding} ${mobilePadding} ${isFlipped ? 'ml-auto' : 'mr-auto'}`,
    half: `${heightStyle} max-w-desktop-half ${isFlipped ? 'ml-auto' : 'mr-auto'}`,
    halfEdge: `absolute inset-0 sm:inset-auto sm:relative ${isFlipped ? 'right-4' : 'left-4'}`,
    overlap: `absolute inset-0 sm:inset-auto sm:relative ${isFlipped ? '-right-24' : '-left-24'}`,
  };
  return styles[data.image?.imageStyle]
}

const imageColumnCss = (data) => {
  const getAlignV = () => {
    if (data.image?.position?.includes("top")) {
      return "self-start"
    }
    if (data.image?.position?.includes("bottom")) {
      return "self-end"
    }
    return "self-center"
  }
  const styles = {
    padding: data.image?.fit === "none" ? "" : "self-stretch",
    half: data.image?.fit === "none" ? "" : "self-stretch",
    halfEdge: "self-stretch",
    overlap: "self-stretch",
  }
  return `${getAlignV()} ${styles[data.image?.imageStyle]}`
}

const imageCss = (data) => {
  const getAlignH = () => {
    if (data.image?.position?.includes("right")) {
      return "ml-auto"
    }
    if (data.image?.position?.includes("left")) {
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
  return styles[data.image?.fit]
};

export const Feature = ({ data }) => {
  return (
    <Section
      fillStyles={data.style?.fillStyles}
      image={data.backgroundImage?.src}
      imagePosition={data.backgroundImage?.position}
      navigationLabel={data.navigationLabel}
    >
      <div className={`flex sm:flex-col ${data.style?.alignment} ${data.style?.minHeight}`}>
        <div className={`flex-1 relative ${imageColumnCss(data)}`}>
          <div className={`${imageContainerCss(data)}`}>
            {data.image?.src && (
              <img
                className={`${imageCss(data)} ${data.image?.position}`}
                alt={data.image?.alt}
                src={data.image?.src}
              />
            )}
          </div>
        </div>
        <div className="flex-1 relative">
          <div className={`${contentContainerCss(data)}`}>
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
              alignment = {data.style?.alignment}
              order = {data.style?.contentOrder}
              width = {data.style?.contentWidth}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
