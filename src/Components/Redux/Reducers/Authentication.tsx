import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL, endpoints } from "../../../Utils/Config";
import networkCall from "../../../Utils/NetworkCalls";
import { RootState } from "../store/Store";
import { User } from "./Settings";
interface IProps {
  loading: boolean;
  countrycodes: RootState | Object;
}
const initialState: IProps = {
  loading: false,
  countrycodes: [],
};

export const DeleteAccount = createAsyncThunk(
  "DeleteAccount",
  async (__, { fulfillWithValue, rejectWithValue, dispatch }) => {
    try {
      const { response, error } = await networkCall(
        `${endpoints.SIGNUP}`,
        "DELETE"
      );
      if (response) {
        return fulfillWithValue(response);
      } else if (error) {
        return rejectWithValue(error);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const SignUp = createAsyncThunk(
  "SignUp",
  async (payload: { data: FormData }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = payload;
      const response = await fetch(`${baseURL}/${endpoints.SIGNUP}`,{ 
        method:'POST',
        body:data
      } as {});
      if (response) {
        const responseData=await response.json()
        return fulfillWithValue(responseData);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const SignIn = createAsyncThunk(
  "SignIn",
  async (payload: { data: Object }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = payload;
      const { response, error } = await networkCall(
        endpoints.SIGNIN,
        "POST",
        JSON.stringify(data)
      );
      if (response) {
        return fulfillWithValue(response);
      } else if (error) {
        return rejectWithValue(error);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const Otp_Verification = createAsyncThunk(
  "OTPVerification",
  async (payload: { data: Object }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = payload;
      const { response, error } = await networkCall(
        endpoints.OTPVerification,
        "POST",
        JSON.stringify(data)
      );
      if (response) {
        return fulfillWithValue(response);
      } else if (error) {
        return rejectWithValue(error);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const Send_Otp = createAsyncThunk(
  "Send_Otp",
  async (payload: { data: Object }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = payload;
      const { response, error } = await networkCall(
        endpoints.SendOTP,
        "POST",
        JSON.stringify(data)
      );
      if (response) {
        return fulfillWithValue(response);
      } else if (error) {
        return rejectWithValue(error);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const Send_UpdateEmail_Otp = createAsyncThunk(
  "Send_UpdateEmail_Otp",
  async (payload: { data:{email:string | null} }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = payload;
      const { response, error } = await networkCall(
        `${endpoints.UpdateEmailOTP}?email=${data.email}`,
        "POST"
      );
      if (response) {
        return fulfillWithValue(response);
      } else if (error) {
        return rejectWithValue(error);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const UpdateEmail_Verify = createAsyncThunk(
  "UpdateEmail_Verify",
  async (payload: { data:Object }, { fulfillWithValue, rejectWithValue ,dispatch}) => {
    try {
      const { data } = payload;
      const { response, error } = await networkCall(
        endpoints.UpdateEmailVerify,
        "POST",
        JSON.stringify(data)
      );
      if (response) {
        dispatch(User())
        return fulfillWithValue(response);
      } else if (error) {
        return rejectWithValue(error);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const Reset_Password = createAsyncThunk(
  "Reset_Password",
  async (payload: { data: Object }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = payload;
      const { response, error } = await networkCall(
        endpoints.SetPassword,
        "PUT",
        JSON.stringify(data)
      );
      if (response) {
        return fulfillWithValue(response);
      } else if (error) {
        return rejectWithValue(error);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const CountryCodes = createAsyncThunk(
  "CountryCodes",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { response, error } = await networkCall(
        endpoints.CountryCodes,
        "GET"
      );
      if (response) {
        return fulfillWithValue(response);
      } else if (error) {
        return rejectWithValue(error);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const AuthReducer = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CountryCodes.pending, (state) => {
        state.loading = true;
      })
      .addCase(CountryCodes.fulfilled, (state, action) => {
        state.loading = false;
        state.countrycodes = action.payload;
      })
      .addCase(CountryCodes.rejected, (state) => {
        state.loading = true;
      });
  },
});

export default AuthReducer.reducer;
