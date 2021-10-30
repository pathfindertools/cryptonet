import { CardGrid } from "../card-grid";

const PhotoCard = ({ data, cardstyle }) => {
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
  const backgroundGradient = {
    white: "bg-gradient-to-r from-white to-gray-200",
    grayLight: "bg-gradient-to-r from-gray-200 to-gray-400",
    gray: "bg-gradient-to-r from-gray-500 to-gray-700",
    grayDark: "bg-gradient-to-r from-gray-800 to-gray-900",
    black: "bg-gradient-to-r from-black to-black",
    primary: "bg-gradient-to-r from-primary to-black",
    accent1: "bg-gradient-to-r from-accent1 to-black",
    accent2: "bg-gradient-to-r from-accent2 to-black",
    accent3: "bg-gradient-to-r from-accent3 to-black",
  };
  const textColors = {
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

  const contentClasses = (cardStyle) => {
    const typeClasses = {
      solid: `${backgroundColors[cardstyle?.backgroundColor]}`,
      fadeH: `${backgroundGradient[cardstyle?.backgroundColor]}`,
    }
    return `${typeClasses[cardStyle?.type]} ${textColors[cardstyle?.textColor]}`
  }

  return (
    <div className="flex flex-col">
      <div>
        {data.image && (
          <img
            alt={data.image.alt}
            src={data.image.src}
          />
        )}
      </div>
      <div
        className={`${contentClasses(cardstyle)} flex-1 text-left p-4 border-box`}
      >
        {data.headline && (
          <h3 className="text-2xl uppercase font-semibold  m-0">
            {data.headline}
          </h3>
        )}
        {data.subhead && (
          <h3 className="text-base font-semibold ">
            {data.subhead}
          </h3>
        )}
        {data.text && <p>{data.text}</p>}
      </div>
    </div>
  );
};

export const PhotoCards = ({ data }) => {
  return (
    <CardGrid data={data} children={(
      data.items &&
        data.items.map(function (block, i) {
          return <PhotoCard key={i} data={block} cardstyle={data.cardStyle} />;
        })
    )}/>
  );
};
