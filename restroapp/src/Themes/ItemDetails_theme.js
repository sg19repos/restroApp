import {
  currencySymbol,
  GlobalFont,
  GlobalFontColor,
  GlobalThemeColor,
  themeColor,
} from "./GlobalThemes";

const ItemImage = {
  height: "50%",
  width: "100%",
};

const ItemTitle = {
  color: "#212529",
  fontFamily: "Poppins",
  fontSize: "1.1rem",
  fontWeight: "200",
  paddingBottom: "0.5rem",
};

const LightFontColor = {
  color: "#495057",
};
const ItemSubtitle = {
  color: "#495057",
  fontFamily: "Poppins",
  fontSize: "1rem",
  // marginTop: "0.5rem",
};
const ItemDescription = {
  color: "#adb5bd",
  fontFamily: "Poppins",
  fontSize: "0.75rem",
};

const ListItemFont = {
  color: "#495057",
  fontFamily: "Poppins !important",
  fontSize: "0.8rem",
};

const navBarIconsAlignment = {
  icons: {
    display: "flex",
    alignItems: "center",
  },
};

export const ThemeItemDetails = {
  color: "blue",
  ".item-image": { ...ItemImage },
  ".item-description": { ...ItemDescription },
  ".item-title": { ...ItemTitle },
  ".item-sub-title": { ...ItemSubtitle, marginTop: "0.5rem" },
  ".img-rounded-corner": { borderRadius: "5%" },
  ".global-font": { ...GlobalFont },
  ".light-font": { ...LightFontColor },
  ".list-item-font": { ...ListItemFont },
  ".currency-symbol": { ...currencySymbol },
  ".global-theme-color": { ...GlobalThemeColor },
  ".global-font-color": { ...GlobalFontColor },
  ".navbar-icons-alignment": { ...navBarIconsAlignment },
  ".search-container": {
    marginBottom: "0rem",
  },
  ".search-label": {
    display: "contents",
    alignItems: "center",
    padding: "1rem",
  },
  ".search-field": {
    width: "100%",
    "& .MuiOutlinedInput-input": {
      padding: "8px 4px",
      height: "20px",
      width: "100%",
      fontSize: "0.8rem",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: themeColor,
      },
      "&:hover fieldset": {
        borderColor: themeColor,
      },
      "&.Mui-focused fieldset": {
        borderColor: GlobalThemeColor,
      },
    },
    "& .MuiInputAdornment-root .MuiSvgIcon-root": {
      fill: themeColor,
    },
    "& .MuiInputAdornment-root .MuiIconButton-root": {
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  },
  ".menu-container": {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    height: "150px",
  },
  ".menu-item": {
    width: "70%",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "0px solid #ccc",
    borderRadius: "5%",
    margin: "0.5rem",
    height: "100px",
  },
  ".menu-item-image": {
    // width: "70%",
    margin: "auto",
    marginBottom: "1rem",
    borderRadius: "1rem",
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
  ".root": {
    // display: "flex",
    display: "block",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  ".text-align-center": {
    textAlign: "center",
  },
  ".align-center": {
    align: "center",
  },
  ".loading-page-container": {
    backgroundColor: "#774936",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "opacity 0.5s ease-out",
    opacity: 1,
  },
  ".fade-out": {
    opacity: 0, // Fade-out opacity
  },
  ".loading-image": {
    width: "200px",
    height: "200px",
    padding: "20% 0%",
  },
  ".chip-button": {
    backgroundImage: "linear-gradient(45deg, #93c47d 30%, #6aa84f 90%)",
    color: "white",
    fontWeight: "bold",
  },
};
