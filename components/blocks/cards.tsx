import { Buttons } from "../buttons";
import { Section } from "../section";
import { Content } from "../content";

export const Card = ({ cardsColor, data }) => {
  return (
    <div
      className="flex-1 flex flex-col text-left mx-auto bg-black p-8 w-1/4"
      style={{ flexBasis: "16rem" }}
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

export const Cards = ({ data }) => {
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
        <div className={`flex gap-x-10 gap-y-8 mt-12 text-left`}>
          {data.items &&
            data.items.map(function (block, i) {
              return <Card cardsColor={data.color} key={i} data={block} />;
            })}
        </div>
      </div>
    </Section>
  );
};
