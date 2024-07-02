import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

// as this is async function functon so we cannot call this funcion directly in redux reducer
// because redux in nature conpletly synchoronous so we use thunks
// The createAsyncThunks produce three additional action type
//   1.for depending promis state
//   2.for fullfilled state
//   3.for rejected state
//   so we need to handle this three cases in our reducers
export const fetchAddress = createAsyncThunk(
  "user/fetchAddress",
  async function () {
    // 1) We get the user's geolocation position
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) Then we return an object with the data that we are interested in
    //payload for the fullfilled state
    return { position, address };
  }
);

const initialState = {
  userName: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  status: "idle",
  position: {},
  address: "",
  error: "",
  reducers: {
    updateName(state, action) {
      state.userName = action.payload;
    },
  },
  //lec-11 react-pizza last section
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = "idle";
      })
      //if we click on dont allow location then this rejected state will be called
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      }),
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;
