const path = require("path")
// const webpack = require("webpack")
// const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@@": path.resolve(__dirname, "static"),
      }
    },
    // plugins: [
    //   new NodePolyfillPlugin(),
    //   new webpack.ContextReplacementPlugin(
    //     /@emurgo\/cardano-serialization-lib-browser/
    //   ),
    // ],
    // experiments: {
    //   asyncWebAssembly: true,
    // },
    // module: {
    //   rules: [
    //     {
    //       test: /\.wasm$/,
    //       type: "webassembly/async",
    //     },
    //   ],
    // },
  })
}