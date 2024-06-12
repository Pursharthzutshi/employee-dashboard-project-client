import { configureStore } from "@reduxjs/toolkit";
import SignUpSlicer from "./slicers/SignUpSlicer";
import LoginSlicer from "./slicers/LoginSlicer";
import AddEmployeesTaskSlicer from "./slicers/AddEmployeesTaskSlicer";
import ShowEmployeesDialogBoxSlicer from "./slicers/ShowEmployeesDialogBoxSlicer";
// import BoardSlicer from "../components/slicers/BoardSlicer";
// import counterSlice from "./slices/counter";

export const store = configureStore({
  reducer: {
    SignUpSlicer:SignUpSlicer,
    LoginSlicer:LoginSlicer,
    AddEmployeesTaskSlicer:AddEmployeesTaskSlicer,
    ShowEmployeesDialogBoxSlicer:ShowEmployeesDialogBoxSlicer
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;