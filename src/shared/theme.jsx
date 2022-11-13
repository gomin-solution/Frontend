const calcRem = (size) => `${size / 16}rem`;

// font-size: ${(props) => props.theme.fontSizes.xl};

const boxColors = {
  bg: "#FFFFFF",
  gray1: "#F3F3F3",
  gray2: "#D9D9D9",
  gray3: "#9F9F9F",
  gray4: "#6D6D6D",
};

const fontColors = {
  fong1: "#999999",
  fong2: "#545454",
  fong3: "#000000",
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
  sm: 400,
  base: 500,
  lg: 600,
  xl: 700,
};

const paddings = {
  xxsm: calcRem(8),
  xsm: calcRem(10),
  sm: calcRem(12),
  base: calcRem(14),
  lg: calcRem(16),
  xl: calcRem(18),
  xxl: calcRem(20),
  xxxl: calcRem(22),
  xxxxl: calcRem(24),
};

const margins = {
  xxsm: calcRem(8),
  xsm: calcRem(10),
  sm: calcRem(12),
  base: calcRem(14),
  lg: calcRem(16),
  xl: calcRem(18),
  xxl: calcRem(20),
  xxxl: calcRem(22),
  xxxxl: calcRem(24),
};

export const theme = {
  boxColors,
  fontColors,
  fontSizes,
  fontWeights,
  paddings,
  margins,
};

export default theme;
