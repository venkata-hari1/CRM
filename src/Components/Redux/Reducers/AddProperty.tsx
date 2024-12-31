import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL, endpoints } from "../../../Utils/Config";
import networkCall from "../../../Utils/NetworkCalls";
import { store } from "../store/Store";
import {Properties,PropertyDetails,SimilarListing,recentlyAddeded} from './Property'
const initialState = {
  loading: false,
  looking: [],
  category: [],
  subcategory: [],
  fav: [],
  FAQS: [],
  Amenities: [],
  GetData:[]
}

export const LookingUp = createAsyncThunk(
  "LookingUp",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { response, error } = await networkCall(
        endpoints.LookingUp,
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
export const Category = createAsyncThunk(
  "Category",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { response, error } = await networkCall(
        endpoints.Category,
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
export const SubCategory = createAsyncThunk(
  "SubCategory",
  async (payload: { Id: Object }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { Id } = payload
      const { response, error } = await networkCall(
        `${endpoints.SubCategory}/${Id}`,
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
export const AddProperties_Data = createAsyncThunk(
  "Properties",
  async (payload: { data: FormData }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = payload;
      const response = await fetch(`${baseURL}/${endpoints.Properties}`, {
        method: 'POST',
        body: data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      } as {});
      if (response) {
        const responseData = await response.json()
        return fulfillWithValue(responseData);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const AddFav = createAsyncThunk(
  "AddFav",
  async (payload: { data: { id:string| number | null, value: boolean } }, { fulfillWithValue, rejectWithValue, dispatch }) => {
    try {
      const { data } = payload
      const { response, error } = await networkCall(
        `${endpoints.Favorites}?propertyId=${data.id}&isTrue=${data.value}`,
        "POST"
      );
      if (response) {
        const data = {
          page: 1,
          sortBy: '',
          orderBy: '',
          lookingUpId: ''
        }
        const data2={
          page: 1,
          pageSize:3,
          lookinUpId:localStorage.getItem('lookingupid')
        }
        const data1={
          lattitude: localStorage.getItem('lat'),
          longitude: localStorage.getItem('lng'),
          lookinUpId:localStorage.getItem('lookingupid'),
          pageSize:10,
          priceLessThan:'',
          apartmentName:'',
          bedrooms:'',
          orderBy:'',
          category: '',
          moveInDate: '',
          page:1,
          radius:localStorage.getItem('radius')
        }
        const data3={
          page:1
        }
        dispatch(SimilarListing({data:data3}))
        dispatch(PropertyDetails())
        dispatch(recentlyAddeded({data:data2}))
        dispatch(Properties({data:data1}))
        dispatch(GetFav({ data: data }))
        return fulfillWithValue(response);
      } else if (error) {
        return rejectWithValue(error);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const DeleteFav = createAsyncThunk(
  "DeleteFav",
  async (__, { fulfillWithValue, rejectWithValue, dispatch }) => {
    try {
      const { response, error } = await networkCall(
        `${endpoints.Favorites}`,
        "DELETE"
      );
      if (response) {
        const data = {
          page: '',
          sortBy: '',
          orderBy: '',
          lookingUpId: ''
        }
        dispatch(GetFav({ data: data }))
        return fulfillWithValue(response);
      } else if (error) {
        return rejectWithValue(error);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const GetFav = createAsyncThunk(
  "GetFav",
  async (payload: { data: { page: string | number, sortBy: string, orderBy: string, lookingUpId: string | number } }, { dispatch, fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = payload
      const SORT = data.sortBy === '' ? '' : `sortBy=${data.sortBy}`
      const OrderBy = data.orderBy === '' ? '' : `&orderBy=${data.orderBy}&`
      const LookingUpId = data.lookingUpId === '' ? '' : `lookingUpId=${data.lookingUpId}&`
      const { response, error } = await networkCall(
        `${endpoints.Favorites + "?"}${LookingUpId}${SORT}${OrderBy}page=${data.page}&size=10`,
        "GET"
      );
      if (response) {

        return fulfillWithValue(response.data);
      } else if (error) {
        return rejectWithValue(error);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const FAQS = createAsyncThunk(
  "FAQS",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { response, error } = await networkCall(
        endpoints.Faqs,
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
export const TenentPersonalDetails = createAsyncThunk(
  "TenentPersonalDetails",
  async (payload: { data: { title: string, name: string, dateofbirth: string, grossIncome: string, email: string, phonenumber: string, movingDate: string, type: string, occupants: string } }, { fulfillWithValue, rejectWithValue, dispatch }) => {
    try {
      const { data } = payload;
      const propertyId = localStorage.getItem('propertyId')
      const { response, error } = await networkCall(
        `${endpoints.TenentPersonalDetails}?propertyId=${propertyId}&title=${data.title}&name=${data.name}&DateOfBirth=${data.dateofbirth}&email=${data.email}&phone=${data.phonenumber}&grossIncome=${data.grossIncome}&movingDate=${data.movingDate}&occupants=${data.occupants}`,
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
export const AddAddress = createAsyncThunk(
  "AddAddress",
  async (payload: { data: { address: string, state: string, city: string, country: string, pincode: string } }, { fulfillWithValue, rejectWithValue, dispatch }) => {
    try {
      const { data } = payload;
      const detailsid = localStorage.getItem('detailsid')
      const { response, error } = await networkCall(
        `${endpoints.TenentAdress}?id=${detailsid}&address=${data.address}&state=${data.state}&city=${data.city}&pincode=${data.pincode}&country=${data.country}`,
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
export const TenentVehicle = createAsyncThunk(
  "TenentVehicle",
  async (payload: { data: { vehicle: string } }, { fulfillWithValue, rejectWithValue, dispatch }) => {
    try {
      const { data } = payload;
      const detailsid = localStorage.getItem('detailsid')
      const { response, error } = await networkCall(
        `${endpoints.TenentVehicle}?id=${detailsid}&vehicle=${data.vehicle}`,
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

export const TenentAadhar = createAsyncThunk(
  "TenentAadhar",
  async (payload: { data: { adhar: string } }, { fulfillWithValue, rejectWithValue, dispatch }) => {
    try {
      const { data } = payload;
      const detailsid = localStorage.getItem('detailsid')
      const { response, error } = await networkCall(
        `${endpoints.TenentAadhar}?id=${detailsid}&adhar=${data.adhar}`,
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

export const Location_Details = createAsyncThunk(
  "Location_Details",
  async (payload: { data: { id: string | null, apartment: string, HouseNo: string, state: string | null, country: string | null, pincode: string | null, locality: string | null, city: string | null, longitudes: string | null, latitudes: string | null } }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = payload;
      const response = await fetch(`${baseURL}/${endpoints.Location}/${data.id}?city=${data.city}&longitudes=${data.longitudes}&latitudes=${data.latitudes}&apartment=${data.apartment}&locality=${data.locality}&HouseNo=${data.HouseNo}&draft=false&state=${data.state}&country=${data.country}&pincode=${data.pincode}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      } as {});
      if (response) {
        const responseData = await response.json()
        return fulfillWithValue(responseData);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


export const PropertiesUpdate = createAsyncThunk(
  "PropertiesUpdate",
  async (payload: { data:FormData}, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = payload;
      const id=JSON.parse(localStorage.getItem('propertyId') || '')
      const response = await fetch(`${baseURL}/${endpoints.Properties}/${id}`, {
        method: 'PUT',
        body:data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (response) {
        const responseData = await response.json();
        return fulfillWithValue(responseData);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const Amenities = createAsyncThunk(
  "Amenities",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { response, error } = await networkCall(
        endpoints.Amenities,
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


export const GetTenentPersonalDetails = createAsyncThunk(
  "GetTenentPersonalDetails",
  async (payload:{data:{id:string | null}}, { fulfillWithValue, rejectWithValue, dispatch }) => {
    try {
      const {data}=payload
      const { response, error } = await networkCall(
        `${endpoints.TenatApplication}?id=${data.id}`,
        "GET",
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
export const AddPropertySlice = createSlice({
  name: "AddPropertySlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(LookingUp.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(LookingUp.fulfilled, (state, action) => {
      state.looking = action.payload
      state.loading = false
    })
    builder.addCase(LookingUp.rejected, (state, action) => {
      state.loading = true
    })
    builder.addCase(Category.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(Category.fulfilled, (state, action) => {
      state.category = action.payload
      state.loading = false
    })
    builder.addCase(Category.rejected, (state, action) => {
      state.loading = true
    })
    builder.addCase(SubCategory.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(SubCategory.fulfilled, (state, action) => {
      state.subcategory = action.payload
      state.loading = false
    })
    builder.addCase(SubCategory.rejected, (state, action) => {
      state.loading = true
    })

    builder.addCase(GetFav.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(GetFav.fulfilled, (state, action) => {
      state.fav = action.payload
      state.loading = false
    })
    builder.addCase(GetFav.rejected, (state, action) => {
      state.loading = true
    })
    builder.addCase(FAQS.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(FAQS.fulfilled, (state, action) => {
      state.FAQS = action.payload
      state.loading = false
    })
    builder.addCase(FAQS.rejected, (state, action) => {
      state.loading = true
    })

    builder.addCase(Amenities.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(Amenities.fulfilled, (state, action) => {
      state.Amenities = action.payload
      state.loading = false
    })
    builder.addCase(Amenities.rejected, (state, action) => {
      state.loading = true
    })
    builder.addCase(GetTenentPersonalDetails.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(GetTenentPersonalDetails.fulfilled, (state, action) => {
      state.GetData = action.payload
      state.loading = false
    })
    builder.addCase(GetTenentPersonalDetails.rejected, (state, action) => {
      state.loading = true
    })
  }
})
export default AddPropertySlice.reducer