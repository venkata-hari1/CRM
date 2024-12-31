import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL, endpoints } from "../../../Utils/Config";
import networkCall from "../../../Utils/NetworkCalls";
import { RootState } from "../store/Store";
import { toast } from "react-toastify";
type IProps = {
  loading: boolean,
  sales: [],
  Tenates: [],
  tenate: {},
  revenue:[],
  Sale:{}
}
const initialState: IProps = {
  loading: false,
  sales: [],
  Tenates: [],
  tenate: {},
  revenue:[],
  Sale:{}
}

export const SalesData = createAsyncThunk(
  "SalesData",
  async (payload: { data: { page: number,category:string | null, priceGreaterThan:string | null, priceLessThan:string | null,bathrooms:number,bedrooms:number,Date:string,status:string,name:string } }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = payload
      const priceLessThan=data.priceLessThan===null?'':`&priceLessThan=${data.priceLessThan}`
      const category=data.category===null?'':`&category=${data.category}`
      const priceGreaterThan=data.priceGreaterThan===null?'':`&priceGreaterThan=${data.priceGreaterThan}`
      const bedrooms=data.bedrooms===0?'':`&bedrooms=${data.bedrooms}`
      const bathrooms=data.bathrooms===0?'':`&bedrooms=${data.bathrooms}`
      const status=data.status===""?"":`&status=${data.status}`
      const Date=data.Date===""?"":`&Date=${data.Date}`
      const apartmentName=data.name===""?"":`&apartmentName=${data.name}`
      const { response, error } = await networkCall(
        `${endpoints.Sales}?page=${data.page}&pageSize=5&orderBy=desc&sortBy=id${category}${priceLessThan}${priceGreaterThan}${apartmentName}${status}${Date}${bedrooms}${bathrooms}`,
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
export const TenatesData = createAsyncThunk(
  "TenatesData",
  async (payload: { data: { page: number,status:string,name:string } }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = payload
      const status=data.status==="" || data.status==="All"?"":`&status=${data.status}`
      const name=data.name===""?"":`name=${data.name}&`
      const { response, error } = await networkCall(
        `${endpoints.Tenates}?${name}page=${data.page}&pageSize=5&orderBy=desc&sortBy=id&${status}`,
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
export const TenateData = createAsyncThunk(
  "TenateData",
  async (__, { fulfillWithValue, rejectWithValue }) => {
    try {
       const id = JSON.parse(localStorage.getItem('TenatId') || "")
      const { response, error } = await networkCall(
        `${endpoints.Tenate}/${id}`,
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

export const Status = createAsyncThunk(
  "Status",
  async (payload:{data:{status:string}}, { fulfillWithValue, rejectWithValue ,dispatch}) => {
    try {
       const id = JSON.parse(localStorage.getItem('TenatId') || "")
      const {data}=payload
       const { response, error } = await networkCall(
        `${endpoints.Status}?id=${id}&status=${data.status}`,
        "PUT"
      );
      if (response) {
        const data={
          page:1,
          status:'',
          name:''
        }
        dispatch(TenatesData({data:data}))
        return fulfillWithValue(response);
      } else if (error) {
        return rejectWithValue(error);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);



export const Sales = createAsyncThunk(
  "Sales",
  async (payload:{data:{status:string}}, { fulfillWithValue, rejectWithValue ,dispatch}) => {
    try {
       const id = JSON.parse(localStorage.getItem('TenatId') || "")
      const {data}=payload
       const { response, error } = await networkCall(
        `${endpoints.Status}?id=${id}&status=${data.status}`,
        "PUT"
      );
      if (response) {
        const data={
          page:1,
          status:'',
          name:''
        }
        dispatch(TenatesData({data:data}))
        return fulfillWithValue(response);
      } else if (error) {
        return rejectWithValue(error);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const AddSales = createAsyncThunk(
  "AddSales",
  async (payload:{data:{customerEmail:string,propertyId:string | null,dateOfSale:string,paymentType:string,amount:number | null,status:string}}, { fulfillWithValue, rejectWithValue ,dispatch}) => {
    try {
      const {data}=payload
       const propertyId=data.propertyId===undefined?'':`propertyId=${data.propertyId}`
       const DataofSales=data.dateOfSale===undefined?'':`&dateOfSale=${data.dateOfSale}`
       const PaymentType=data.paymentType===undefined?'':`&paymentType=${data.paymentType}`
       const Amount=data.amount===undefined?'':`&amount=${data.amount}`
       const Status=data.status===undefined?'':`&status=${data.status}`
       const Email=data.customerEmail===undefined?'':`&customerEmail=${data.customerEmail}`
       
       const { response, error } = await networkCall(
        `${endpoints.Sales}?${propertyId}${DataofSales}${PaymentType}${Amount}${Status}${Email}`,
        "PUT"
      );
      if (response) {
        const data={
          page:1,
          status:'',
          name:'',
          bathrooms:0,
          bedrooms:0,
          Date:'',
          priceLessThan:null,
          priceGreaterThan:null,
          category:null
        }
        dispatch(SalesData({data:data}))
        return fulfillWithValue(response);
      } else if (error) {
        return rejectWithValue(error);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);



export const Revenue = createAsyncThunk(
  'Revenue',
  async (payload:{data:{type:string,year:string}}, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = payload;
      const token = localStorage.getItem('token');
      const type=data.type===""?"?revenueType=month":`?revenueType=${data.type}`
      const response = await fetch(`${baseURL}/${endpoints.Revenue}${type}&value=${data.year}`,{
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        if (response.status === 400) {
          return rejectWithValue('Bad request: Please check your input');
        } 
        else if (response.status === 404) {
          return rejectWithValue('Resource not found');
        }
        else {
          return rejectWithValue('Network response was not ok');
        }
      }
      const responseData = await response.json();
      return fulfillWithValue(responseData)
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`${error.message} 😞`, {
          autoClose: 1000,
          position: "top-right",
          hideProgressBar: false,
          bodyClassName: "black-background",
        });
      }
      throw error;
    }
  }
);
export const GetSaleData = createAsyncThunk(
  "GetSaleData",
  async (payload:{data:{id:number}}, { fulfillWithValue, rejectWithValue }) => {
    try {
      const {data}=payload
      const { response, error } = await networkCall(
        `${endpoints.GetSaleData}/${data.id}`,
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
export const SellerSlice = createSlice({
  name: "SellerSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(SalesData.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(SalesData.fulfilled, (state, action) => {
      state.sales = action.payload
      state.loading = false
    })
    builder.addCase(SalesData.rejected, (state, action) => {
      state.loading = true
    })
    builder.addCase(TenatesData.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(TenatesData.fulfilled, (state, action) => {
      state.Tenates = action.payload
      state.loading = false
    })
    builder.addCase(TenatesData.rejected, (state, action) => {
      state.loading = true
    })
    builder.addCase(TenateData.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(TenateData.fulfilled, (state, action) => {
      state.tenate = action.payload
      state.loading = false
    })
    builder.addCase(TenateData.rejected, (state, action) => {
      state.loading = true
    })

    builder.addCase(Revenue.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(Revenue.fulfilled, (state, action) => {
      state.revenue = action.payload
      state.loading = false
    })
    builder.addCase(Revenue.rejected, (state, action) => {
      state.loading = true
    })

    builder.addCase(GetSaleData.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(GetSaleData.fulfilled, (state, action) => {
      state.Sale = action.payload
      state.loading = false
    })
    builder.addCase(GetSaleData.rejected, (state, action) => {
      state.loading = true
    })
  }
})
export default SellerSlice.reducer