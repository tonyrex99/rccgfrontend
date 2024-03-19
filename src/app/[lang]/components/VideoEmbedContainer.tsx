import VideoEmbed, { VideoEmbedProps } from "./VideoEmbed";
interface VideoEmbedContainerProps {
  data: {
    videos: VideoEmbedProps[];
  };
}

export default function VideoEmbedContainer({
  data,
}: VideoEmbedContainerProps) {
  return (
    <div className="  relative justify-between h-full w-full gap-4 mx-auto md:px-20 flex md:flex-row flex-col ">
      {data?.videos?.map((video: any, index: number) => (
        <VideoEmbed data={video} key={index} />
      ))}
    </div>
  );
}
