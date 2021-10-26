import { Buttons } from "../buttons";
import { Section } from "../section";
import { Content } from "../content";

const Card = ({ color, data }) => {
  return (
    <div
      className={`text-left p-8 border-box bg-black`}
    >
      {data.headline && (
        <h3 className="text-2xl uppercase font-semibold text-white m-0">
          {data.headline}
        </h3>
      )}
      {data.subhead && (
        <h3 className="text-3xl font-semibold text-white mb-4">
          {data.subhead}
        </h3>
      )}
      {data.text && <p className="text-white ">{data.text}</p>}
      {data.buttons && <Buttons buttons={data.buttons} />}
    </div>
  );
};

export const TextCards = ({ data }) => {
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
          {data.items &&
            data.items.map(function (block, i) {
              return <Card color={data.color} key={i} data={block} />;
            })}
        </div>
      </div>
    </Section>
  );
};
