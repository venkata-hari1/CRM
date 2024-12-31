import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { baseURL, endpoints } from "../../../Utils/Config";
import networkCall from "../../../Utils/NetworkCalls";
import { RootState } from "../store/Store";
type IProps={
  loading:boolean,
  user:{
    data:{
      name:string,
      email:string,
      mobile:string
    }
  }
}
const initialState={
    loading:false,
    user:{
      data:{
       name:'',
       email:'',
       mobile:'',
       photo:''
      }
    }
}
export const Settings=createAsyncThunk("Settings",async(payload:{data:FormData},{fulfillWithValue,rejectWithValue})=>{
    try {
        const { data } = payload;
        const response = await fetch(`${baseURL}/${endpoints.SIGNUP}`,{ 
          method:'POST',
          body:data,
          headers:{
            Authorization:localStorage.getItem('token')
          }
        } as {});
        if (response) {
          const responseData=await response.json()
          return fulfillWithValue(responseData);
        }
      } catch (error) {
        return rejectWithValue(error);
      }
})

export const UpdateProfile=createAsyncThunk("UpdateProfile",async(payload:{data:FormData},{fulfillWithValue,rejectWithValue,dispatch})=>{
  try {
      const { data } = payload;
      const response = await fetch(`${baseURL}/${endpoints.SIGNUP}`,{ 
        method:'PUT',
        body:data,
        headers:{
          Authorization:`Bearer ${localStorage.getItem('token')}`
        }
      } as {});
      if (response) {
        dispatch(User())
        const responseData=await response.json()
        return fulfillWithValue(responseData);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
})
export const User = createAsyncThunk(
    "User",
    async (_, { fulfillWithValue, rejectWithValue }) => {
      try {
        const { response, error } = await networkCall(
          endpoints.GET_Users,
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
  export const ChangePassword = createAsyncThunk(
    "ChangePassword",
    async (payload: { data: Object }, { fulfillWithValue, rejectWithValue }) => {
      try {
        const { data } = payload;
        const { response, error } = await networkCall(
          endpoints.ChangePassword,
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
export const CustomerSlice=createSlice({
    name:"CustomerSlice",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(User.pending,(state,action)=>{
         state.loading=true
        })
        builder.addCase(User.fulfilled,(state,action)=>{
            state.user=action.payload
            state.loading=false
           })
        builder.addCase(User.rejected,(state,action)=>{
            state.loading=true
           })
    }
})
export default CustomerSlice.reducer