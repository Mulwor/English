interface VideoProps {
  videoId: string;
  width?: string;
  height?: string;
}

export const Video = ({videoId, width = '560', height='315'}: VideoProps) => {
  return (
    <iframe
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
}