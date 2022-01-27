import { Section } from "./section";
import { Content } from "./content";


export const CardGrid = ({ data, children }) => {

  const gridCols = {
    "1": "grid-cols-1",
    "2": "grid-cols-2",
    "3": "grid-cols-3",
    "4": "grid-cols-4",
    "5": "grid-cols-5",
    "6": "grid-cols-5",
  }
  return (
    <Section
      fillStyles={data.style?.fillStyles}
      image={data.backgroundImage?.src}
      imagePosition={data.backgroundImage?.position}
      navigationLabel={data.navigationLabel}
      minHeight={data.style?.minHeight}
    >
      <div className={`max-w-screen-lg mx-auto ${data.style?.padding}`}>
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
          width = {data.style?.contentWidth}
        />
        <div className={`grid sm:block gap-10 ${gridCols[data.style?.columns]}`}>
          {children}
        </div>
      </div>
    </Section>
  );
};
