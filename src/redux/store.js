import { createStore } from "redux";
import { rootreducer } from "./rootreducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootreducer,composeWithDevTools());

export default store;