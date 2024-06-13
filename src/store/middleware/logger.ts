import { Dispatch, Middleware } from "redux";

/* eslint-disable @typescript-eslint/no-unused-vars */
const logger: Middleware<{}, any, Dispatch<any>> =
  (store) => (next) => (action) => {
    console.group(action.type);
    console.info(`dispatching: ${action}`);

    const result = next(action);
    console.log(`next state: ${store.getState()}`);
    console.groupEnd();
    return result;
  };
