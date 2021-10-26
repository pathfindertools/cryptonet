import { Buttons } from "../buttons";
import { CardGrid } from "../card-grid";

const PhotoCard = ({ data }) => {
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
