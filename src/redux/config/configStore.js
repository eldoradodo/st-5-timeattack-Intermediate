// TODO: store 셋업하고 slice에서 import한 reducer를 할당하세요.

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice"; 

const store = configureStore({
  reducer: {
    todos : tdoReducer,
  },
});

export default store;