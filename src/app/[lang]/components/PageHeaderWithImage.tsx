import { Picture } from "../utils/model";
import { getStrapiMedia } from "../utils/api-helpers";

interface PageHeaderWithImageProps {
  data: {
    heading: string;
    text?: string;
    picture: Picture;
    overlayColor: string;
    overlayOpacity: number;
    isImageFixed: boolean;
    additionalStyles: string;
  };
}

const PageHeaderWithImage = ({ data }: PageHeaderWithImageProps) => {
  const imgUrl = getStrapiMedia(data?.picture?.data?.attributes?.url);
  const JSONObject: any = data?.additionalStyles;

  const containerStyle = {
    background: `${
      data.isImageFixed ? "fixed " : ""
    }linear-gradient(rgba(${hexToRgb(data.overlayColor)}, ${
      data.overlayOpacity / 100
    }), rgba(${hexToRgb(data.overlayColor)}, ${
      data.overlayOpacity / 100
    })), url(${imgUrl}) center/cover`,
  };

  return (
    <div
      className={`relative h-[300px] md:h-[500px]  ${JSONObject?.pageHeaderWithImage} `}
      style={{
        ...containerStyle,
        backgroundAttachment: data.isImageFixed ? "fixed " : "",
        ...JSONObject?.imageStyle,
      }}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
        {data.text && (
          <span className="dark:text-secondary font-bold">{data.text}</span>
        )}
        <h2 className="text-4xl my-4 lg:text-5xl font-bold font-heading">
          {data.heading}
        </h2>
      </div>
    </div>
  );
};

// Helper function to convert hex color to RGB
export const hexToRgb = (hex: string): string => {
  if (!hex) {
    return "";
  }
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
};

export default PageHeaderWithImage;
