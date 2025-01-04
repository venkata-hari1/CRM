import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store/Store'
import networkCall from '../../../Utils/NetworkCalls'
import { endpoints } from '../../../Utils/Config'
type IProps = {
    data: [],
    Id: number,
    auth: string,
    profile: string,
    ProfileId: number,
    ProfileStep: number,
    AdminId: number,
    activestep: number,
    personal_details: [],
    getSalesData: {},
    pincodedata: [],
    addreesdata: [],
    loading: boolean,
    userNotifications:[],
    links:{},
    dailogbox:boolean,
    store_id:number[],
    value:any
}
const initialState: IProps = {
    userNotifications:[],
    pincodedata: [],
    addreesdata: [],
    data: [],
    personal_details: [],
    Id: 1,
    auth: '',
    profile: '',
    ProfileId: 1,
    ProfileStep: 1,
    AdminId: 1,
    getSalesData: {},
    activestep: 0,
    loading: false,
    links:{},
    dailogbox:false,
    store_id:[],
    value:[],
}
export const GetLinks = createAsyncThunk(
    "GetLinks",
    async (__, { fulfillWithValue, rejectWithValue,dispatch }) => {
        try {
            const { response, error } = await networkCall(
                endpoints.Links,
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
export const UpdateLinks = createAsyncThunk(
    "UpdateLinks",
    async (payload: { data: Object }, { fulfillWithValue, rejectWithValue,dispatch }) => {
        try {

            const { data } = payload
            const { response, error } = await networkCall(
                endpoints.Links,
                "PUT",
                JSON.stringify(data)
            );
            if (response) {
                dispatch(GetLinks())
                return fulfillWithValue(response);
            } else if (error) {
                return rejectWithValue(error);
            }
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const AddLinks = createAsyncThunk(
    "AddLinks",
    async (payload: { data: Object }, { fulfillWithValue, rejectWithValue,dispatch }) => {
        try {

            const { data } = payload
            const { response, error } = await networkCall(
                endpoints.Links,
                "POST",
                JSON.stringify(data)
            );
            if (response) {
                dispatch(GetLinks())
                return fulfillWithValue(response);
            } else if (error) {
                return rejectWithValue(error);
            }
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const DeleteLinks = createAsyncThunk(
    "DeleteLinks",
    async (__, { fulfillWithValue, rejectWithValue,dispatch }) => {
        try {
            const { response, error } = await networkCall(
                endpoints.Links,
                "DELETE"
            );
            if (response) {
                dispatch(GetLinks())
                return fulfillWithValue(response);
            } else if (error) {
                return rejectWithValue(error);
            }
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const getpincode = createAsyncThunk("getpincode", async (payload: { data: { pincode: string } }, { fulfillWithValue, rejectWithValue }) => {
    try {
        const { data } = payload
        const response = await fetch(`https://api.postalpincode.in/pincode/${data.pincode}`, {
            method: 'GET',

        })
        if (response) {
            const responseData = await response.json()
            return fulfillWithValue(responseData)
        }
    }
    catch (error) {
        return rejectWithValue(error)
    }
})
export const AddAddress = createAsyncThunk(
    "AddAddress",
    async (payload: { data: Object }, { fulfillWithValue, rejectWithValue,dispatch }) => {
        try {

            const { data } = payload
            const { response, error } = await networkCall(
                endpoints.Address,
                "POST",
                JSON.stringify(data)
            );
            if (response) {
                dispatch(GetAddress())
                return fulfillWithValue(response);
            } else if (error) {
                return rejectWithValue(error);
            }
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const EditAddress = createAsyncThunk(
    "EditAddress",
    async (payload: { data: Object }, { fulfillWithValue, rejectWithValue,dispatch }) => {
        try {
            const { data } = payload
            const id=localStorage.getItem('updateid')
            const { response, error } = await networkCall(
                `${endpoints.Address}/${id}`,
                "PUT",
                JSON.stringify(data)
            );
            if (response) {
                dispatch(GetAddress())
                return fulfillWithValue(response);
            } else if (error) {
                return rejectWithValue(error);
            }
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const DeleteAddress = createAsyncThunk(
    "DeleteAddress",
    async (__, { fulfillWithValue, rejectWithValue,dispatch }) => {
        try {
           
            const id=localStorage.getItem('updateid')
            const { response, error } = await networkCall(
                `${endpoints.Address}/${id}`,
                "DELETE"
            );
            if (response) {
                dispatch(GetAddress())
                return fulfillWithValue(response);
            } else if (error) {
                return rejectWithValue(error);
            }
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const GetAddress = createAsyncThunk(
    "GetAddress",
    async (__, { fulfillWithValue, rejectWithValue }) => {
        try {
            const { response, error } = await networkCall(
                endpoints.Address,
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
export const PrimaryAddress = createAsyncThunk(
    "PrimaryAddress",
    async (payload:{data:{id:string | number | null}}, { fulfillWithValue, rejectWithValue,dispatch }) => {
        try {
            const {data}=payload
            const { response, error } = await networkCall(
                `${endpoints.PrimaryAddress}/${data.id}`,
                "PUT"
            );
            if (response) {
                dispatch(GetAddress())
                return fulfillWithValue(response);
            } else if (error) {
                return rejectWithValue(error);
            }
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const Notifications = createAsyncThunk(
    "Notifications",
    async (payload:{data:{pageSize:number}}, { fulfillWithValue, rejectWithValue }) => {
        try {
            const {data}=payload
            const { response, error } = await networkCall(
                `${endpoints.UserNotification}?page=1&pageSize=${data.pageSize}`,
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

export const UsersNotification = createAsyncThunk(
    "UsersNotification",
    async (payload: { data:{value:boolean} }, { fulfillWithValue, rejectWithValue,dispatch }) => {
        try {
            const { data } = payload
          
            const { response, error } = await networkCall(
                `${endpoints.UserNotifications}?gloabalFlag=${data.value}`,
                "PUT"
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
export const MarkAllReadNotifications = createAsyncThunk(
    "MarkAllReadNotifications",
    async (__, { fulfillWithValue, rejectWithValue,dispatch }) => {
        try {
            
            const { response, error } = await networkCall(
                `${endpoints.UserNotification}`,
                "PUT"
            );
            if (response) {
                const data={
                    pageSize:3
                }
                dispatch(Notifications({data:data}))
                return fulfillWithValue(response);
            } else if (error) {
                return rejectWithValue(error);
            }
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const DeleteAllReadNotifications = createAsyncThunk(
    "DeleteAllReadNotifications",
    async (__, { fulfillWithValue, rejectWithValue,dispatch }) => {
        try {
            
            const { response, error } = await networkCall(
                `${endpoints.UserNotification}`,
                "DELETE"
            );
            if (response) {
                const data={
                    pageSize:3
                }
                dispatch(Notifications({data:data}))
                return fulfillWithValue(response);
            } else if (error) {
                return rejectWithValue(error);
            }
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const LandingSlice = createSlice({
    name: 'LandingSlice',
    initialState,
    reducers: {
          Store_Id: (state:any, action) => {
            const id = action.payload;
  
            // Check if the ID exists in the store_id array
            if (state.store_id.includes(id)) {
              // Remove the ID if it exists
              state.store_id = state.store_id.filter((item: any) => item !== id);
            } else {
              // Add the ID if it does not exist
              state.store_id.push(id);
            }
          },
          Value: (state, action) => {
            state.value = [...state.store_id];
          },
        Dailog_Box:(state,action)=>{
            state.dailogbox=action.payload
        },
        GetSalesData: (state, action) => {
            state.getSalesData = action.payload
        },
        getPersonalDetails: (state, action) => {
            state.personal_details = action.payload
        },
        getData: (state, action) => {
            state.data = action.payload
        },
        getId: (state, action) => {
            state.Id = action.payload

        },
        getAuth: (state, action) => {
            state.auth = action.payload
        },
        getProfile: (state, action) => {
            state.profile = action.payload
        },
        getProfileId: (state, action) => {
            state.ProfileId = action.payload
        },
        getProfileStep: (state, action) => {
            state.ProfileStep = action.payload
        },
        AdminId: (state, action) => {
            state.AdminId = action.payload
        },
        getActiveSteps: (state, action) => {
            state.activestep = action.payload
        },

    },
    extraReducers: bulider => {
        bulider.addCase(GetLinks.pending, (state, action) => {
            state.loading = true
        })
        bulider.addCase(GetLinks.fulfilled, (state, action) => {
            state.links = action.payload
            state.loading = false
        })
        bulider.addCase(GetLinks.rejected, (state, action) => {
            state.loading = true
        })

        bulider.addCase(getpincode.pending, (state, action) => {
            state.loading = true
        })
        bulider.addCase(getpincode.fulfilled, (state, action) => {
            state.pincodedata = action.payload
            state.loading = false
        })
        bulider.addCase(getpincode.rejected, (state, action) => {
            state.loading = true
        })

        bulider.addCase(GetAddress.pending, (state, action) => {
            state.loading = true
        })
        bulider.addCase(GetAddress.fulfilled, (state, action) => {
            state.addreesdata = action.payload
            state.loading = false
        })
        bulider.addCase(GetAddress.rejected, (state, action) => {
            state.loading = true
        })

        bulider.addCase(Notifications.pending, (state, action) => {
            state.loading = true
        })
        bulider.addCase(Notifications.fulfilled, (state, action) => {
            state.userNotifications = action.payload
            state.loading = false
        })
        bulider.addCase(Notifications.rejected, (state, action) => {
            state.loading = true
        })
    }
})
export const {Value,Store_Id, Dailog_Box,getPersonalDetails, GetSalesData, getProfileStep, getProfileId, getActiveSteps, getData, getId, AdminId, getAuth, getProfile } = LandingSlice.actions
export default LandingSlice.reducer