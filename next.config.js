/* eslint-disable */
const withCss = require("@zeit/next-css");

module.exports = withCss({
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style\/css.*?/;
      const origExternals = [...config.externals];
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback();
          if (typeof origExternals[0] === "function") {
            origExternals[0](context, request, callback);
          } else {
            callback();
          }
        },
        ...(typeof origExternals[0] === "function" ? [] : origExternals)
      ];

      config.module.rules.unshift({
        test: antStyles,
        use: "null-loader"
      });
    }
    return config;
  }
});

/*



OLD:




const withCSS = require("@zeit/next-css");

if (typeof require !== "undefined") {
  require.extensions[".css"] = file => {};
}

module.exports = {
  //target: "serverless",
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    return config;
  }
};

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    url: true
  }
});

module.exports = () => {

  const withLess = require("@zeit/next-less");
  const lessToJS = require("less-vars-to-js");
  const fs = require("fs");
  const path = require("path");
  // Where your antd-custom.less file lives
  const themeVariables = lessToJS(
    fs.readFileSync(
      path.resolve(__dirname, "./assets/antd-custom.less"),
      "utf8"
    )
  );
  // fix: prevents error when .less files are required by node
  if (typeof require !== "undefined") {
    require.extensions[".less"] = file => {};
  }
  return withLess({
    lessLoaderOptions: {
      javascriptEnabled: true,
      modifyVars: themeVariables // make your antd custom effective
    }
  });
};


*/
