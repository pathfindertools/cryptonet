import Markdown from "react-markdown";
import { Buttons } from "../buttons";
import { CardGrid } from "../card-grid";

const Card = ({ data, cardstyle }) => {
  const wrapClasses =  data.link && data.buttonLabel ? 'pb-20' : '';
  const backgroundClasses = {
    solid: `${cardstyle?.fillStyles}`,
    transparent: `${cardstyle?.fillStyles} opacity-70`,
    fadeH: `${cardstyle?.fillStyles}`,
  }

  return (
    <div className={`flex flex-col relative sm:mb-6 ${cardstyle?.borderStyles}`}>
      <div>
        {data.image && (
          <img
            alt={data.image.alt}
            src={data.image.src}
            className={`w-full ${cardstyle?.imageStyles}`}
          />
        )}
      </div>
      <div
        className={` ${wrapClasses} relative flex-1 text-left border-box ${cardstyle?.padding}`}
      >
        <div className={`${backgroundClasses[cardstyle?.type]} absolute inset-0 -z-1`} />
        {data.label && (
          <p className={cardstyle?.labelStyles}>{data.label}</p>
        )}
        {data.headline && (
          <h3 className={cardstyle?.headlineStyles}>{data.headline}</h3>
        )}
        {data.subhead && (
          <h4 className={cardstyle?.subheadStyles}>{data.subhead}</h4>
        )}
        {data.text && (
          <div className={`markdown ${cardstyle?.textStyles}`}>
            <Markdown>{data.text}</Markdown>
          </div>
        )}
        {data.link && data.buttonLabel && (
          <Buttons buttons={[{
            link: data.link,
            label: data.buttonLabel,
            textColor: cardstyle?.buttonType === 'link' ? cardstyle?.accentColor : cardstyle?.buttonTextColor,
            backgroundColor: data.accentColor ? data.accentColor : cardstyle?.accentColor,
            buttonFillStyles: cardstyle?.buttonFillStyles,
            type: cardstyle?.buttonType
          }]} className="absolute bottom-4" />
        )}

      </div>
      {data.link && !data.buttonLabel && (
        <a href={data.link} className="absolute inset-0 z-20" />
      )}
    </div>
  );
};

export const Cards = ({ data }) => {
  return (
    <CardGrid data={data} children={(
      data.items &&
        data.items.map(function (block, i) {
          return <Card key={i} data={block} cardstyle={data.cardStyle} />;
        })
    )}/>
  );
};
