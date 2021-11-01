import { Buttons } from "../buttons";
import { CardGrid } from "../card-grid";

const TextCard = ({ data, cardstyle }) => {
  const wrapClasses = () => {
    return data.link && data.buttonLabel ? 'pb-24' : ''
  };
  const backgroundColors = {
    white: "bg-white",
    grayLight: "bg-gray-200",
    gray: "bg-gray-500",
    grayDark: "bg-gray-800",
    black: "bg-black",
    primary: "bg-primary",
    accent1: "bg-accent1",
    accent2: "bg-accent2",
    accent3: "bg-accent3",
  };
  const textColor = {
    white: "text-white",
    grayLight: "text-gray-200",
    gray: "text-gray-500",
    grayDark: "text-gray-800",
    black: "text-black",
    primary: "text-primary",
    accent1: "text-accent1",
    accent2: "text-accent2",
    accent3: "text-accent3",
  };
  const headlineClasses = () => {
    const color = data.accentColor ? data.accentColor : cardstyle?.accentColor
    return `text-2xl font-semibold m-0 ${textColor[color]}`
  };
  const backgroundClasses = {
    solid: `${backgroundColors[cardstyle?.backgroundColor]}`,
    transparent: `${backgroundColors[cardstyle?.backgroundColor]} opacity-70`,
  }

  return (
    <div className={`relative text-left p-8 mb-10 md:mb-0 border-box ${wrapClasses()} ${textColor[cardstyle?.textColor]}`}>
      <div className={`${backgroundClasses[cardstyle?.type]} absolute inset-0 -z-1`}></div>
      {data.headline && (
        <h3 className={`${headlineClasses()}`}>
          {data.headline}
        </h3>
      )}
      {data.subhead && (
        <h3 className="text-xl font-semibold mb-4">
          {data.subhead}
        </h3>
      )}
      {data.text && <p>{data.text}</p>}
      {data.link && data.buttonLabel && (
        <Buttons buttons={[{
          link: data.link,
          label: data.buttonLabel,
          textColor: 'black',
          backgroundColor: data.accentColor ? data.accentColor : cardstyle?.accentColor,
          type: 'solid'
        }]} className="absolute bottom-8" />
      )}
      {data.link && !data.buttonLabel && (
        <a href={data.link} className="absolute inset-0 z-20" />
      )}
    </div>
  );
};

export const TextCards = ({ data }) => {
  return (
    <CardGrid data={data} children={(
      data.items &&
        data.items.map(function (block, i) {
          return <TextCard key={i} data={block} cardstyle={data.cardStyle} />;
        })
    )}/>
  );
};
