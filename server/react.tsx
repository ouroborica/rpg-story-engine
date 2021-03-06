import path from "path"
import React from "react"
import ReactDOMServer from "react-dom/server"
import express, { Express } from "express"

import { App } from "../client/App"

const Head = () => (
  <head>
    <title>RPG Story Engine</title>
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0" />
    <script defer src="/public/main.js"></script>
  </head>
)

const Body = () => (
  <body>
    <App />
  </body>
)

export function initReactSSR(app: Express) {
  // Serve the webpack build output.
  app.use(`/public`, express.static(path.resolve(__dirname, `..`, `dist`)))

  // Apply server-side renderng for the client.
  // We hydrate the app after rendering the initial layout.
  app.get(`/client`, (req, res) => {
    res.send(`
      <!doctype html>
      <html>
      ${ReactDOMServer.renderToStaticMarkup(<Head />)}
      ${ReactDOMServer.renderToString(<Body />)}
      </html>
    `)
  })
}
