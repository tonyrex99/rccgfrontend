"use client";
import { Slide } from "react-slideshow-image";
import { getStrapiMedia } from "../utils/api-helpers";
import Link from "next/link";
import { renderButtonStyle } from "../utils/render-button-style";
import { Button } from "../utils/model";
interface Image {
  id: number;
  attributes: {
    alternativeText: string | null;
    caption: string | null;
    url: string;
  };
}

interface SlidShowProps {
  picture?: {
    data: Image[];
  };
  files?: {
    data: Image[];
  };
  buttons?: Button[];
  overlay: {
    id?: number;
    content?: string;
    contentColor?: string;
    color?: string;
    colorOpacity: number;
    overlayText?: string;
    buttons?: Button[];
  };
}

export default function Slideshow({ data }: { data: SlidShowProps }) {
  const images = data?.picture?.data || data?.files?.data || [];

  return (
    <section className=" dark:bg-black dark:text-gray-100 relative min-h-[300px]">
      {/* Red Overlay */}
      <div
        style={{
          backgroundColor: data?.overlay?.color,
          opacity: data?.overlay?.colorOpacity / 100,
        }}
        className={`absolute top-0 left-0 w-full h-full  z-[1]`}
      ></div>
      {/* Text Overlay */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-[1] w-full ">
        <div
          style={{ color: data?.overlay?.contentColor }}
          className={`text-white text-3xl md:text-4xl font-bold my-9`}
        >
          {data?.overlay?.content}
        </div>
        {/* Watch Live Button */}
        <div className="flex flex-row space-y-4 items-center justify-center sm:flex-row sm:space-y-0 sm:space-x-4 ">
          {data?.overlay?.buttons?.map((button: Button, index: number) => (
            <Link
              key={index}
              href={button?.url}
              target={button?.newTab ? "_blank" : "_self"}
              className={renderButtonStyle(button?.type)}
            >
              <span className="text-[15px] ">{button?.text}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="slide-container w-full relative">
        <Slide duration={5000} canSwipe autoplay arrows={false} infinite>
          {images.map((fadeImage: Image, index) => {
            const imageUrl = getStrapiMedia(fadeImage.attributes.url);
            return (
              <div key={index} className="w-full aspect-[2/1] relative">
                {imageUrl && (
                  <img
                    className="w-full h-full min-h-[400px] object-cover"
                    alt={fadeImage.attributes.alternativeText || ""}
                    src={imageUrl}
                  />
                )}
              </div>
            );
          })}
        </Slide>
      </div>
    </section>
  );
}
