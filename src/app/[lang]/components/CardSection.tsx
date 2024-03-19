import Card from "./Card";
import { Picture } from "./Hero";
interface Cards {
  data: {
    id: number;
    title: string;
    description?: string;
    borderColor?: string;
    borderPosition: string;
    picture: Picture;
    imageOverlay?: string;
    imageOverlayOpacity?: string;
    imagePosition?: string;
  };
}
interface CardsWidgetProps {
  data: {
    cards: Cards[];
  };
}

/***/
function CardsWidget({ data }: CardsWidgetProps) {
  return (
    <div className="container self-center relative flex gap-4 px-4  w-full justify sm:py-5 flex-col mx-auto mb-16 md:flex-row">
      {data?.cards?.map((card: any, index: number) => (
        <Card data={card} key={index} />
      ))}
    </div>
  );
}

export default CardsWidget;
