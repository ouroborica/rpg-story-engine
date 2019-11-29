import path from "path"
import { Configuration, HotModuleReplacementPlugin } from "webpack"

/**
 * Config options shared between the client and the server.
 */
const shared: Configuration = {
  devtool: `eval`,
  mode: `development`,
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        loader: `babel-loader`,
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [`.tsx`, `.ts`, `.js`],
  },
  plugins: [new HotModuleReplacementPlugin()],
}

/**
 * Client webpack config.
 */
const client: Configuration = {
  ...shared,
  name: `client`,
  entry: {
    main: `./client`,
  },
  output: {
    path: path.resolve(__dirname, `dist`, `client`),
  },
  target: `web`,
}

/**
 * Server webpack config.
 */
const server: Configuration = {
  ...shared,
  name: `server`,
  entry: {
    main: `./server`,
  },
  output: {
    path: path.resolve(__dirname, `dist`, `server`),
  },
  target: `node`,
}

export default [client, server]
