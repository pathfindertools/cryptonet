import Markdown from "react-markdown";
import { Buttons } from "../buttons";
import { Container } from "../container";
import { Icon } from "../icon";
import { Section } from "../section";

const contentCss = (data) => {
  const textColor = {
    white: "text-white",
    grayLight: "text-gray-200",
    gray: "text-gray-500",
    grayDark: "text-gray-800",
    black: "text-black",
  };
  return `${textColor[data.style.textColor]}`;
};

export const Card = ({ cardsColor, data }) => {
  return (
    <div
      className="flex-1 flex flex-col text-left mx-auto bg-black p-8 w-1/4"
      style={{ flexBasis: "16rem" }}
    >
      {data.title && (
        <h3 className="text-2xl uppercase font-semibold text-white m-0">
          {data.title}
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
      <Container className={``} size="large">
        <div className={contentCss(data)}>
          {data.label && <h4 className="text-lg">{data.label}</h4>}
          {data.headline && <h2 className="text-4xl mb-8">{data.headline}</h2>}
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
        <div className={`flex gap-x-10 gap-y-8 text-left`}>
          {data.items &&
            data.items.map(function (block, i) {
              return <Card cardsColor={data.color} key={i} data={block} />;
            })}
        </div>
      </Container>
    </Section>
  );
};
