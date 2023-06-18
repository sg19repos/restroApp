import { GlobalFont } from "./GlobalThemes";

const stickyFooterContainer = {
  backgroundColor: "#774936",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
};

const stickyFooterContent = {
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "opacity 0.5s ease-out",
  opacity: 1,
};
const footer = {
  backgroundColor: "#ffffff",
  // display: "flex",
  justifyContent: "space-between",
  padding: "0.25rem 1rem",
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
};
const totalButton = {
  backgroundColor: "#774936",
  color: "#ffffff",
  textTransform: "capitalize",
};

export const ThemeStickyFooter = {
  color: "blue",
  ".text-align-center": {
    textAlign: "center",
  },
  ".align-center": {
    align: "center",
  },
  ".sticky-footer-container": {
    ...stickyFooterContainer,
  },
  ".footer": {
    ...footer,
  },
  ".total-button": {
    ...totalButton,
  },
  ".global-font": { ...GlobalFont },
};
