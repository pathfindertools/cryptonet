import { Section } from "./section";
import { Content } from "./content";

export const CardGrid = ({ data, children }) => {
  const gridCols = {
    "1": "grid gap-10 grid-cols-1",
    "2": "grid gap-10 grid-cols-2",
    "3": "grid gap-10 grid-cols-3",
    "4": "grid gap-10 grid-cols-4",
    "5": "grid gap-10 grid-cols-5",
    "6": "grid gap-10 grid-cols-5",
  }
  return (
    <Section
      color={data.style?.backgroundColor}
      image={data.style?.backgroundImage?.src}
    >
      <div className="max-w-screen-lg p-12 mx-auto">
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
        <div className={`mt-12 ${gridCols[data.style?.columns]}`}>
          {children}
        </div>
      </div>
    </Section>
  );
};
