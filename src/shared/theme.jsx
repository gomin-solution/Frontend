const calcRem = (size) => `${size / 16}rem`;

const Colors = {
  gray1: "#CDCDCD",
  gray2: "#939393",
  gray3: "#737878",
  bg1: "#FCFCFB",
  bg2: "#E9F3F2",
  bg3: "#DCE7E7",
  foot: "#EAF0EF",
  blueGreen1: "#A7EFF0",
  blueGreen2: "#00A1A3",
  blueGreen3: "#19696A",
  blueGray1: "#F1F5F4",
  blueGray2: "#D6E6E5",
  blueGray3: "#4A6363",
};

const fontSizes = {
  xsm: calcRem(12),
  sm: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(24),
};

const fontWeights = {
  base: 500,
  lg: 600,
  xl: 700,
};

const paddings = {
  xsm: calcRem(10),
  sm: calcRem(12),
  base: calcRem(14),
  lg: calcRem(16),
  xl: calcRem(18),
  xxl: calcRem(20),
};

const margins = {
  xxsm: calcRem(8),
  xsm: calcRem(10),
  sm: calcRem(12),
  base: calcRem(14),
  lg: calcRem(16),
  xl: calcRem(18),
  xxl: calcRem(20),
};

export const theme = {
  Colors,
  fontSizes,
  fontWeights,
  paddings,
  margins,
};

export default theme;
