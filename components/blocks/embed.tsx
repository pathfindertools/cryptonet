import * as React from "react";
import { Section } from "../section";

export const Embed = ({ data }) => {
  const padding = data.style?.padding
  const width = data.style?.fullWidth ? "" : "max-w-desktop-full mx-auto"

  return (
    <Section
      fillStyles={data.style?.fillStyles}
      image={data.backgroundImage?.src}
      imagePosition={data.backgroundImage?.position}
      navigationLabel={data.navigationLabel}
    >
      <div className={`${width} ${padding} ${data.style?.minHeight}`}>
        <div dangerouslySetInnerHTML={{ __html: data.markup }}></div>
      </div>
    </Section>
  );
};
