import { GlobalFont } from "./GlobalThemes";

export const ImagePlaceHolderTheme = {
  ".global-font": { ...GlobalFont },
  ".root": {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#495057",
  },
  ".image": {
    width: "100%",
    height: "auto",
  },
};
