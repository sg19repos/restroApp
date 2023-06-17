import React from "react";
import ImagesList from "../Images/index";

const ImageComponent = (imageProps) => {
  let { name, height, width, roundedCorners } = imageProps || {};
  return (
    <img
      src={ImagesList[name]}
      alt={name}
      height={height}
      width={width}
      className={roundedCorners ? "img-rounded-corner" : null}
    />
  );
};

export default ImageComponent;
