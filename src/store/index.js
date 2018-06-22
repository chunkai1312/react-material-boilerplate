import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware as createRouterMiddleware, connectRouter } from 'connected-react-router'
import rootReducer from './reducers'

export default function configureStore (history, preloadedState) {
  const routerMiddleware = createRouterMiddleware(history)

  const middlewares = [routerMiddleware]
  const enhancers = []

  if (process.env.NODE_ENV === 'development' && !window.__REDUX_DEVTOOLS_EXTENSION__) {
    console.warn('Install Redux DevTools Extension to inspect the app state: ' +
      'https://github.com/zalmoxisus/redux-devtools-extension#installation')
  }

  const composeEnhancers = (process.env.NODE_ENV === 'development')
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose

  const store = createStore(
    connectRouter(history)(rootReducer),
    preloadedState,
    composeEnhancers(
      applyMiddleware(...middlewares),
      ...enhancers
    )
  )

  return store
}
