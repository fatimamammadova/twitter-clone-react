import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id: 1,
    username: "FMammadova111",
    fullName: "Fatima Mammadova",
    avatar: "https://pbs.twimg.com/profile_images/1792620441024004096/PlgyN4Fi_400x400.jpg"
  },
  accounts: [
    {
      id: 1,
      username: "FMammadova111",
      fullName: "Fatima Mammadova",
      avatar: "https://pbs.twimg.com/profile_images/1792620441024004096/PlgyN4Fi_400x400.jpg"
    },
    {
      id: 2 ,
      username: "FatimM28402",
      fullName: "Fatimə Məmmədova",
      avatar: "https://pbs.twimg.com/profile_images/1794760923791380481/1rU0AHcx_400x400.png"
    }
  ],
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // methods which to manipulate states
    _addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (acc) => acc.id !== action.payload
      );
      if (state.currentAccount && action.payload === state.currentAccount.id) {
        this._setCurrentAccount(false);
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { _addAccount, _setCurrentAccount, _removeAccount } = auth.actions;
export default auth.reducer