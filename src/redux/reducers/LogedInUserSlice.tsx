import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../Store";

export interface LogedInUserState {
  firstName: string;
  lastName: string;
  token: string;
  email: string;
}

const initialState: LogedInUserState = {
  firstName: "",
  lastName: "",
  token: "",
  email: "",
};

export const userSlice = createSlice({
  name: "logedInUser",
  initialState,
  reducers: {
    updateUserInfo: (state, action: PayloadAction<LogedInUserState>) => {
      state.firstName = action.payload.firstName;
    },
    resetUserInfo: (state) => initialState,
  },
});

export const { updateUserInfo, resetUserInfo } = userSlice.actions;

export const selectLogedInUserInfo = (state: RootState) => state.logedInUser;

export default userSlice.reducer;
