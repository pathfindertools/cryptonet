import { Buttons } from "../buttons";
import { CardGrid } from "../card-grid";

const PhotoCard = ({ data }) => {
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
        className={`flex-1 text-left p-4 border-box bg-gray-400`}
      >
        {data.headline && (
          <h3 className="text-2xl uppercase font-semibold text-white m-0">
            {data.headline}
          </h3>
        )}
        {data.subhead && (
          <h3 className="text-base font-semibold text-white">
            {data.subhead}
          </h3>
        )}
        {data.text && <p className="text-white ">{data.text}</p>}
        {data.buttons && <Buttons buttons={data.buttons} />}
      </div>
    </div>
  );
};

export const PhotoCards = ({ data }) => {
  return (
    <CardGrid data={data} children={(
      data.items &&
        data.items.map(function (block, i) {
          return <PhotoCard key={i} data={block} />;
        })
    )}/>
  );
};
