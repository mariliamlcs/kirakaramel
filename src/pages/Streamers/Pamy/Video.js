const src = "https://youtu.be/NZj59VBgQ-Q";

const Video = () => {
  return (
    <iframe
      width="560"
      height="315"
      src={src}
      title="Youtube Player"
      frameborder="0"
      allowFullScreen
    />
  );
};

export default Video;