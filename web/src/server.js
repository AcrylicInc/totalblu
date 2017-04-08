// import path from 'path'
// import Express from 'express'
// import React from 'react'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux' 
// import App from './containers/App'
// import routes from './router';

// import { renderToString } from 'react-dom/server'

// const app = Express()
// const port = 3000

// app.use('/static', Express.static('static'));

// app.use(handleRender)

// function renderFullPage(html, preloadedState) {
//   return `
//     <!doctype html>
//     <html>
//       <head>
//         <title>Redux Universal Example</title>
//       </head>
//       <body>
//         <div id="root">${html}</div>
//         <script>
//           // WARNING: See the following for security issues around embedding JSON in HTML:
//           // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
//           window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
//         </script>
//         <script src="/static/bundle.js"></script>
//       </body>
//     </html>
//     `
// }

// function handleRender(req, res) {
//   // Create a new Redux store instance

//   // Read the counter from the request, if provided
//   let preloadedState = { 'test' : 'tset' }

//   const store = createStore(TotalbluHR, preloadedState)

//   // Render the component to a string
//   const html = renderToString(
//     <Provider store={store}>
//       routes
//     </Provider>
//   )

//   // Grab the initial state from our Redux store
//   const finalState  = store.getState()

//   // Send the rendered page back to the client
//   res.send(renderFullPage(html, finalState))
// }

// app.listen(port)

// //http://redux.js.org/docs/recipes/ServerRendering.html





