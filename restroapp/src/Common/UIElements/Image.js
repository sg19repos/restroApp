import React from "react";
import ImagesList from "../Images/index";

const ImageComponent = (imageProps) => {
  let { name, height, width, roundedCorners, className } = imageProps || {};
  return (
    <img
      src={ImagesList[name]}
      alt={name}
      height={height}
      width={width}
      className={`${
        roundedCorners ? className + " img-rounded-corner" : className
      }`}
    />
  );
};

export default ImageComponent;
