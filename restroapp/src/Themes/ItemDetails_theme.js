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

const GlobalFont = { fontFamily: "Poppins !important" };
const GlobalThemeColor = { backgroundColor: "#774936" };
const GlobalFontColor = {
  color: "#774936",
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
};
