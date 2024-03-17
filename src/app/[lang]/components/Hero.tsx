import Link from "next/link";
import Image from "next/image";
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";
import { renderButtonStyle } from "../utils/render-button-style";
import { getContrastColor } from "../utils/text-color-finder";
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
      } inset-0 bg-cover bg-center `}
    >
      <div
        style={{
          backgroundColor: data?.bgImageOverlay,
          opacity: data?.bgImageOverlayOpacity / 100,
        }}
        className={` absolute inset-0  w-full h-full  flex`}
      />
      <div className="container relative flex flex-col xjustify-center p-6 gap-2 mx-auto xsm:py-12 xlg:py-24 md:flex-row xlg:justify items-center justify-between py-12">
        <div
          className={`sm:order-2 ${
            data?.swapImagePosition ? "md:order-2" : "md:order-1 "
          }  flex flex-col justify-center p-6 text-center rounded-lg xmd:max-w-sm  lg:max-w-md xl:max-w-lg lg:text-left xw-full w-[73.5%] xmd:w-1/2 ${" "}${
            data?.swapImagePosition
          } `}
        >
          <HighlightedText
            text={data?.title}
            classNames="text-4xl font-bold leading-none mb-8  "
            color={`dark:text-secondary text-${
              data?.bgImageOverlay
                ? getContrastColor(data?.bgImageOverlay)
                : "black"
            } `}
          />

          <HighlightedText
            text={data?.description}
            classNames={`tmt-6 mb-8  sm:mb-12 `}
            style={{
              color:
                data?.bgImageOverlay && getContrastColor(data?.bgImageOverlay),
            }}
            color={`dark:text-${
              data?.bgImageOverlay
                ? getContrastColor(data?.bgImageOverlay)
                : "white" + " !important"
            } text-${
              data?.bgImageOverlay
                ? getContrastColor(data?.bgImageOverlay)
                : "black"
            } `}
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
            data?.swapImagePosition ? "md:order-1" : "md:order-2 "
          }   sm:order-1 flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128  `}
        >
          <img
            src={imgUrl || ""}
            alt={data?.picture?.data?.attributes?.alternativeText || ""}
            className="object-contain ah-72 h-full w-full asm:h-80 alg:h-96 xl:h-112 2xl:h-128 xw-full xh-full xmd:h-auto"
          />
        </div>
      </div>
    </section>
  );
}
