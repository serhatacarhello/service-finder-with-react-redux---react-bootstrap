import { configureStore } from "@reduxjs/toolkit";

import categoryReducer from "../reducers/categorySlice";

const store = configureStore({
  /*
    Generally give name ends with 'State' because we are going to use this property name for state
    */
  reducer: {
    categoryState: categoryReducer,
  },
});

export default store;
