import Link from "next/link";
import Image from "next/image";
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";
import { renderButtonStyle } from "../utils/render-button-style";
interface Button {
  id: string;
  url: string;
  text: string;
  type: string;
  newTab: boolean;
}

export interface Picture {
  data: {
    id: string;
    attributes: {
      url: string;
      name: string;
      alternativeText: string;
    };
  };
}

interface HeroProps {
  data: {
    id: string;
    title: string;
    description: string;
    swapImagePosition: Boolean;
    backgroundImageIsFixed: Boolean;
    bgImageOverlay: string;
    bgImageOverlayOpacity: number;
    picture: Picture;
    backgroundImage: Picture;
    buttons: Button[];
  };
}

export default function Hero({ data }: HeroProps) {
  const imgUrl = getStrapiMedia(data?.picture?.data?.attributes?.url);

  return (
    <section
      style={{
        backgroundImage: `url('${getStrapiMedia(
          data?.backgroundImage?.data?.attributes?.url
        )}')`,
      }}
      className={`dark:bg-black dark:text-gray-100 relative    ${
        data?.backgroundImageIsFixed && `bg-fixed`
      } inset-0 bg-cover bg-center`}
    >
      <div
        style={{
          backgroundColor: data?.bgImageOverlay,
          opacity: data?.bgImageOverlayOpacity / 100,
        }}
        className={` absolute inset-0  w-full h-full  flex`}
      />
      <div className="container relative flex flex-col justify-center p-6 gap-2 mx-auto sm:py-12 lg:py-24 md:flex-row lg:justify">
        <div
          className={`${
            data?.swapImagePosition ? "order-2" : "order-1"
          } md:order-2 flex flex-col justify-center p-6 text-center rounded-lg md:max-w-sm  lg:max-w-md xl:max-w-lg lg:text-left  ${
            data?.swapImagePosition
          } `}
        >
          <HighlightedText
            text={data?.title}
            classNames="text-4xl font-bold leading-none mb-8  "
            color="dark:text-secondary"
          />

          <HighlightedText
            text={data?.description}
            classNames="tmt-6 mb-8  sm:mb-12"
            color="dark:text-secondary"
          />
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            {data?.buttons?.map((button: Button, index: number) => (
              <Link
                key={index}
                href={button?.url}
                target={button?.newTab ? "_blank" : "_self"}
                className={renderButtonStyle(button?.type)}
              >
                {button?.text}
              </Link>
            ))}
          </div>
        </div>
        <div
          className={`${
            data?.swapImagePosition ? "order-1" : "order-2 "
          }  md:order-1 flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128`}
        >
          <Image
            src={imgUrl || ""}
            alt={data?.picture?.data?.attributes?.alternativeText || ""}
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 "
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}
