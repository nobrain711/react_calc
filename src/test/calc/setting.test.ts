import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

const middleware = [thunk];
const mockStore = configureStore(middleware);
