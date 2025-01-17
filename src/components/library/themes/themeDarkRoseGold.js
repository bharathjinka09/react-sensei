import { rgba } from "polished";
import themeDefault from "./themeDefault";

const colorLabel = rgba("white", 0.57);
const colorText = rgba("white", 0.96);

export default {
  id: "darkRoseGold",
  ...themeDefault,
  borderRadius: "1rem",
  colorBackground: "#242424",
  colorNavbar: "#100f10",
  colorNavbarLabel: colorLabel,
  colorNavbarLink: colorText,
  colorText: colorText,
  colorLabel: colorLabel,
  colorBorder: "#393939",
  colorPrimary: "#ce828e",
  colorPrimaryText: colorText,
  colorAccent: "#f7f7f7",
  colorAccentText: "#1B1B1B",
  colorCardBackground: "#1B1B1B",
  colorDefaultBackground: "#2D2D2D",
  colorDefaultText: colorText,
  colorDisabledBackground: "#3d3d3d",
  colorDisabledText: "#6b6666",
  colorCode: "#242424",
  boxShadowLogo: "none",
};
