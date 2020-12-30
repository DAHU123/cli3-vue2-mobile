const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: "/h5",
  outputDir: "dist/h5",

  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
  },

  productionSourceMap: false,

  configureWebpack: config => {
    //调试JS
    config.devtool =
      process.env.NODE_ENV === "production" ? "none" : "eval-source-map";
  },

  devServer: {
    open: true,
    proxy: {
      "^/login": {
        target: "https://crm.huodong.hetaobiancheng.com",
        changeOrigin: true,
        // ws: true,//websocket支持
        secure: false,
        pathRewrite: {
          "^/login": "/"
        }
      },
      "^/staff": {
        target: `https://crm.huodong.hetaobiancheng.com/`,
        changeOrigin: true
      }
    }
  },

  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-px-to-viewport")({
            unitToConvert: "px",
            viewportWidth: 750,
            unitPrecision: 3,
            propList: ["*"],
            viewportUnit: "vw",
            fontViewportUnit: "vw",
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: /(\/|\\)(node_modules)(\/|\\)/
          })
        ]
      }
    }
  },

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/styles/utilCss.scss")]
    }
  }
};
