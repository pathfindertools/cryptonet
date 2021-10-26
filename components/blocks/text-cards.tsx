import { Buttons } from "../buttons";
import { CardGrid } from "../card-grid";

const TextCard = ({ data }) => {
  const wrapClasses = () => {
    return data.link && data.buttonLabel ? 'pb-24' : ''
  };

  return (
    <div
      className={`relative text-left p-8 border-box bg-black ${wrapClasses()}`}
    >
      {data.headline && (
        <h3 className="text-2xl uppercase font-semibold text-white m-0">
          {data.headline}
        </h3>
      )}
      {data.subhead && (
        <h3 className="text-xl font-semibold text-white mb-4">
          {data.subhead}
        </h3>
      )}
      {data.text && <p className="text-white ">{data.text}</p>}
      {data.link && data.buttonLabel &&
        <Buttons buttons={[{
          link: data.link,
          label: data.buttonLabel,
          textColor: 'black',
          backgroundColor: 'primary',
          type: 'solid'
        }]} className="absolute bottom-8 w-full" />}
    </div>
  );
};

export const TextCards = ({ data }) => {
  return (
    <CardGrid data={data} children={(
      data.items &&
        data.items.map(function (block, i) {
          return <TextCard key={i} data={block} />;
        })
    )}/>
  );
};
