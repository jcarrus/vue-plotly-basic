module.exports = {
  publicPath: "./",
  chainWebpack: config => {
    config.module
      .rule("js-plotly")
      .test(/\.js$/)
      .use("ify-loader")
      .loader("ify-loader")
      .end();
    config.resolve.alias.set("plotly.js$", "plotly.js-basic-dist-min");
  }
};
