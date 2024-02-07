import { applyMiddleware, createStore, compose } from "redux";
import reducers from "./reducers";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import PokemonEpic from "./pokemon/PokemonEpic";

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
    }
  }
  
  export default function initStore() {
    const epicMiddleware = createEpicMiddleware();
    const middleWare = applyMiddleware(epicMiddleware);
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducers, composeEnhancers(middleWare));
    const epics = combineEpics(...PokemonEpic);
    epicMiddleware.run(epics);
    return store;
  }
  
  export const store = initStore();