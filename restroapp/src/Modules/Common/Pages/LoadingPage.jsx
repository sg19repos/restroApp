import React, { useEffect, useState } from "react";
import ImageComponent from "../../../Common/UIElements/Image";

const LoadingPage = ({ nextPage }) => {
  const [isLoading, setIsLoading] = useState(false);

  /*useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      nextPage();
    }, 300000);

    return () => clearTimeout(timer);
  }, [nextPage]);*/

  const handleTransitionEnd = () => {
    setIsLoading(false);
  };

  return (
    <div
      className={"center-container"}
      // } ${isLoading ? "" : "fade-out"}`}
      // onTransitionEnd={handleTransitionEnd}
    >
      {/* Add your loading image here */}
      {/*{isLoading && <img src="loading.gif" alt="Loading" />}*/}

      {isLoading && (
        <ImageComponent
          className={"center-image"}
          name={"circleLogo"}
          width={"280px"}
          height={"300px"}
          roundedCorners
        />
      )}
    </div>
  );
};

export default LoadingPage;
