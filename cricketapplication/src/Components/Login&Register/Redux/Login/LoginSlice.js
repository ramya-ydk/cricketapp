import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { ReduxFetch } from "./FetchedData";

// export const employeeAsyn = createAsyncThunk("employeeDetails/ReduxFetch", async (fetchData) => {
//   const responce = await ReduxFetch(fetchData);
//   return responce.data;
// });

const initialState = JSON.parse(localStorage.getItem("EmployeeDetail")) || {
  data: { employeeID: "", email: "", name: "", token: "scsdsdsdsdsdsdad", role: "" },
  status: "idle",
};

export const employeeDetailSlice = createSlice({
  name: "employeeDetails",
  initialState,
  reducers: {
    addDetails: (state, action) => {
      state.data = action.payload;
    },
    removeDetails: (state) => {
      localStorage.removeItem("EmployeeDetail");
      state.data = { employeeID: "", email: "", name: "", token: "", role: "" };
    },
    //     extraReducer: (builder) => {
    //       builder
    //         .addCase(employeeAsyn.pending, (state) => {
    //           state.status = "loading";
    //         })
    //         .addCase(employeeAsyn.fulfilled, (state, action) => {
    //           state.status = "idle";
    //           state.data = action.payload;
    //         });
    //     },
  },
});

export const { addDetails, removeDetails } = employeeDetailSlice.actions;

export default employeeDetailSlice.reducer;
