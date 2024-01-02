import Card, { CardProps } from "./Card";

interface CardsWidgetProps {
  data: {
    cards: CardProps[];
  };
}
/** {data?.cards?.map((card: CardProps, index: number) => (
        <Card data={{ index: index, ...card }} />
      ))} */
function CardsWidget({ data }: CardsWidgetProps) {
  return (
    <div className="container  self-center relative flex  gap-4 px-4 w-full justify  sm:py-5  flex-col  md:flex-row ">
      hello
    </div>
  );
}

export default CardsWidget;
