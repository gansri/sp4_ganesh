import { createStore } from "redux";

import { appReducer as counter } from "./appReducer";

const appStore = createStore(counter);

export default appStore;
