import { createStore } from "redux";
import { loadState, savedState } from "../utils/local-storage";
import throttle from "lodash/throttle";
import { rootReducer } from "../redux/reducers";

export const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.subscribe(
    throttle(() => {
      savedState({
        todos: store.getState().todos,
        theme: store.getState().theme,
      });
    }, 1000)
  );

  return store;
};

// export const store = createStore(todoReducer);
