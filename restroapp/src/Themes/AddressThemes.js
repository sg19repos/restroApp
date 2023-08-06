import { GlobalFont, themeColor } from "./GlobalThemes";

export const AddressTheme = {
  ".address-input-fields": {
    "& .MuiInputBase-input": {
      ...GlobalFont,
    },
    "& .MuiInputLabel-root": {
      fontSize: "0.6rem", // Adjust the font size as desired
      color: themeColor,
      transform: "translateY(2rem)", // Adjust the vertical alignment
      "&.MuiInputLabel-shrink": {
        transform: "translateY(0.5rem)", // Adjust the vertical alignment when the label is shrunk (active state)
      },
      "& .MuiInput-underline:before": {
        borderBottomColor: themeColor, // Change the underline color before the input is focused
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: themeColor, // Change the underline color after the input is focused (active state)
      },
      "&.Mui-focused": {
        "& .MuiInputLabel-root": {
          color: themeColor, // Change the label color in focused state (active state)
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: themeColor, // Change the underline color in focused state (active state)
        },
      },
      ...GlobalFont,
    },
  },
  ".address-label-text": {
    ...GlobalFont,
    "font-size": "0.8rem",
  },
};
