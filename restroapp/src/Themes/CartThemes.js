import { GlobalFont, GlobalThemeColor } from "./GlobalThemes";

const Thumbnail = {
  marginRight: "2rem",
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  objectFit: "cover",
};

export const ThemeCart = {
  root: {
    // paddingTop: "4rem",
    paddingBottom: "4rem",
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "0.5rem",
  },
  ".thumbnail": {
    ...Thumbnail,
  },
  title: {
    fontWeight: "bold",
  },
  description: {
    color: "#fff",
    fontSize: "0.8rem",
  },
  price: {
    fontWeight: "bold",
  },
  totalContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "4rem",
  },
  total: {
    fontWeight: "400",
    ...GlobalFont,
  },
  checkoutButton: {
    marginTop: "2rem",
    ...GlobalFont,
    ...GlobalThemeColor,
  },
  paper: {
    // padding: "2rem",
    elevation: 2,
  },
};
