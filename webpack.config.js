import TerserPlugin from "terser-webpack-plugin";

module.exports = {
  optimization: {
    minimizer: [new TerserPlugin({ extractComments: false })],
  },
};
