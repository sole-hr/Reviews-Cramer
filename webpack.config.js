var path = require("path");
var SRC_DIR = path.join(__dirname, "/client/src");
var DIST_DIR = path.join(__dirname, "/client/dist");

module.exports = {
  entry: {
    components: [
       `${SRC_DIR}/components/reviewGen.jsx`,
       `${SRC_DIR}/components/flipArrow.jsx`,
       `${SRC_DIR}/components/sign-in.jsx`,
       `${SRC_DIR}/components/sliders.jsx`,
      `${SRC_DIR}/components/AvgStarGen.jsx`,
      `${SRC_DIR}/index.jsx`
    ]
  },
  output: {
    filename: "[name]-bundle.js",
    path: DIST_DIR
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
