import { Picture } from "./Hero";
import { getStrapiMedia } from "../utils/api-helpers";
export interface CardProps {
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
    additionalStyles: string;
  };
}

function renderBorderPostion(type: string) {
  switch (type) {
    case "top":
      return "border-t-[12px]";
    case "bottom":
      return "border-b-[12px]";
    case "left":
      return "border-l-[12px]";
    case "right":
      return "border-r-[12px]";

    default:
      return "border-t-[12px]";
  }
}
export default function Card({ data }: CardProps) {
  const JSONObject: any = data?.additionalStyles;

  return (
    <div
      key={data?.id + data?.title + data?.description}
      style={{
        backgroundImage: `url('${getStrapiMedia(
          data?.picture?.data?.attributes?.url
        )}')`,
        backgroundPosition: data?.imagePosition || "bottom center",
        backgroundSize: "cover",
        borderColor: data?.borderColor || "var(--primary-color)",
      }}
      className={` ${renderBorderPostion(data?.borderPosition)} border-[${
        data?.borderColor || "#d95a2a"
      }] relative md:h-[478px] h-[260px]  w-[100%] flex  p-10 items-end   ${
        JSONObject?.card
      }  `}
    >
      <div
        key={data?.id + data?.title + data?.description}
        style={{
          backgroundColor: data?.imageOverlay || "blue",
          opacity: Number(data?.imageOverlayOpacity || 60) / 100,
        }}
        className={` absolute   w-full h-full inset-0  flex`}
      />

      <div
        key={data?.id + data?.title + data?.description}
        className={`flex flex-col mb-12 z-20`}
      >
        <h3 className={` text-[25px]  text-white font-bold mb-2 `}>
          {data?.title}
        </h3>
        <p className={` text-[20px] font-normal  text-white`}>
          {data?.description}
        </p>
      </div>
    </div>
  );
}
