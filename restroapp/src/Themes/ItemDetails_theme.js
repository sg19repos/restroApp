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

const themeColor = "#774936";
const GlobalFont = { fontFamily: "Poppins !important" };
const GlobalThemeColor = { backgroundColor: themeColor };
const GlobalFontColor = {
  color: themeColor,
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
  fontFamily: "Poppins",
  fontSize: "0.8rem",
};

const currencySymbol = {
  color: "#495057",
  fontSize: "0.8rem",
};

const navBarIconsAlignment = {
  icons: {
    display: "flex",
    alignItems: "center",
  },
};

const loadingImage = {
  display: "flex",
  alignItems: "center",
  height: "100vh",
  marginLeft: "15%",
};

const centerContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};
const centerImage = {
  maxWidth: "100%",
  maxHeight: "100%",
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
  ".global-theme-color": { ...themeColor },
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
    width: "100%",
    marginBottom: "1rem",
    borderRadius: "1rem",
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
  ".loading-container": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#fff",
    transition: "opacity 0.5s ease-out", // Add fade-out transition
    opacity: 1, // Initial opacity
  },
  ".fade-out": {
    opacity: 0, // Fade-out opacity
  },
  ".image-container": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ".image": {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  ".loading-image": { ...loadingImage },
  ".center-container": { ...centerContainer },
  ".center-image": {
    ...centerImage,
  },
};
