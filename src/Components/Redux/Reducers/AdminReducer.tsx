import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL, endpoints } from "../../../Utils/Config";
import networkCall from "../../../Utils/NetworkCalls";
import { RootState } from "../store/Store";
interface IProps {
  loading: boolean;
  AdminProperties: RootState | Object;
  AdminCustomer: RootState | Object;
  CustomerProperties:[],
  ContactUsQueries:[],
  ContactUsQuery:[],
  overview:[],
  AdminDashboard:[],
  Download:string
}
const initialState: IProps = {
  loading: false,
  AdminProperties: [],
  AdminCustomer: [],
  CustomerProperties:[],
  ContactUsQueries:[],
  ContactUsQuery:[],
  overview:[],
  AdminDashboard:[],
  Download:''
};
export const Property = createAsyncThunk(
    "Property",
    async (payload:{data:{bathrooms:string | number,priceLessThan:string | null,category:string | null,priceGreaterThan:string | null,Date:string,status:string,bedrooms:string | number,page:number,apartmentName:string,orderBy:string,sortBy:string}}, { fulfillWithValue, rejectWithValue }) => {
      try {
        const { data } = payload
    
        const bedrooms=data.bedrooms===0?'':`&bedrooms=${data.bedrooms}`
      const bathrooms=data.bathrooms===0?'':`&bathrooms=${data.bathrooms}`
      const Date=data.Date===""?'':`&startDate=${data.Date}`
      const priceLessThan=data.priceLessThan===null?'':`&priceLessThan=${data.priceLessThan}`
      const category=data.category===null?'':`&category=${data.category}`
      const apartmentName=data.apartmentName===''?'':`&apartmentName=${data.apartmentName}`
      const priceGreaterThan=data.priceGreaterThan===null?'':`&priceGreaterThan=${data.priceGreaterThan}`
        const { response, error } = await networkCall(
          `${endpoints.AdminProperties}?status=${data.status}&page=${data.page}&pageSize=7&orderBy=desc&sortBy=id&${category}${priceLessThan}${priceGreaterThan}${apartmentName}${bedrooms}${bathrooms}${Date}`,
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

  export const Customer = createAsyncThunk(
    "Customer",
    async (payload:{data:{page:number,name:string,status:string | boolean}}, { fulfillWithValue, rejectWithValue }) => {
      try {
        const { data } = payload
        const status=data.status===""?"":`status=${data.status}&`
        const { response, error } = await networkCall(
          `${endpoints.AdminCustomer}?${status}page=${data.page}&pageSize=5&name=${data.name}`,
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
  export const CustomerProperties = createAsyncThunk(
    "CustomerProperties",
    async (payload:{data:{page:number,status:string,orderBy:string}}, { fulfillWithValue, rejectWithValue }) => {
      try {
        const id=localStorage.getItem('id')
        const {data}=payload
        const status=data.status===""?"":`&status=${data.status}`
        const { response, error } = await networkCall(
          `${endpoints.CustomerProperties}?page=${data.page}&pageSize=5&orderBy=${data.orderBy}&sortBy=id${status}&sellerId=${id}`,
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


  export const ContactUsQueries = createAsyncThunk(
    "ContactUsQueries",
    async (payload:{data:{page:number,sort:string}}, { fulfillWithValue, rejectWithValue }) => {
      try {
        const {data}=payload
        const { response, error } = await networkCall(
          `${endpoints.ContactUsQueries}?page=${data.page}&pageSize=5&sort=id&sort=${data.sort}`,
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

  export const ContactUsQuery = createAsyncThunk(
    "ContactUsQuery",
    async (__, { fulfillWithValue, rejectWithValue }) => {
      try {
       const id=localStorage.getItem("id")
        const { response, error } = await networkCall(
          `${endpoints.ContactUsQuery}?id=${id}`,
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


  export const Reply = createAsyncThunk(
    "Reply",
    async (payload:{data:{reply:string}}, { fulfillWithValue, rejectWithValue }) => {
      try {
       const id=localStorage.getItem("id")
       const {data}=payload
        const { response, error } = await networkCall(
          `${endpoints.Reply}?queruId=${id}&reply=${data.reply}`,
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
  export const DeleteQuery = createAsyncThunk(
    "DeleteQuery",
    async (__, { fulfillWithValue, rejectWithValue }) => {
      try {
       const id=localStorage.getItem("id")
    
        const { response, error } = await networkCall(
          `${endpoints.ContactUsQuery}?id=${id}`,
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

  export const DeleteQueries = createAsyncThunk(
    "DeleteQueries",
    async (__, { fulfillWithValue, rejectWithValue,dispatch }) => {
      try {
        const { response, error } = await networkCall(
          `${endpoints.ContactUsQueries}`,
          "DELETE"
        );
        if (response) {
          const data={
            page:1,
            sort:'desc'
          }
          dispatch(ContactUsQueries({data:data}))
          return fulfillWithValue(response);
        } else if (error) {
          return rejectWithValue(error);
        }
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

  export const AdminOverview = createAsyncThunk(
    "AdminOverview",
    async (__, { fulfillWithValue, rejectWithValue,dispatch }) => {
      try {
        const { response, error } = await networkCall(
          `${endpoints.AdminOverview}`,
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

  export const AdminDashboard = createAsyncThunk(
    "AdminDashboard",
    async (payload:{data:{country:string}}, { fulfillWithValue, rejectWithValue,dispatch }) => {
      try {
        const {data}=payload 
         const Country=data.country===""?"":`?country=India`
        const { response, error } = await networkCall(
          `${endpoints.AdminDashboard}?country=India`,
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


  export const DeleteUser = createAsyncThunk(
    "DeleteUser",
    async (payload:{data:{status:boolean}}, { fulfillWithValue, rejectWithValue }) => {
      try {
       const id=localStorage.getItem("id")
        const {data}=payload
        const { response, error } = await networkCall(
          `${endpoints.SIGNUP}/${id}?status=${data.status}`,
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
  export const Exports_data = createAsyncThunk(
    "Exports_data",
    async (payload:{data:Object}, { fulfillWithValue, rejectWithValue }) => {
      try {
        const {data}=payload
        const { response, error } = await networkCall(
          `${endpoints.Exports}`,
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
  export const Exports_data1 = createAsyncThunk(
    "Exports_data1",
    async (payload:{data:{status:string}}, { fulfillWithValue, rejectWithValue }) => {
      try {
        const {data}=payload
        const { response, error } = await networkCall(
          `${endpoints.Exports1}?status=${data.status}`,
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
export const AdminReducer = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Property.pending, (state) => {
        state.loading = true;
      })
      .addCase(Property.fulfilled, (state, action) => {
        state.loading = false;
        state.AdminProperties = action.payload;
      })
      .addCase(Property.rejected, (state) => {
        state.loading = true;
      });

      builder
      .addCase(Customer.pending, (state) => {
        state.loading = true;
      })
      .addCase(Customer.fulfilled, (state, action) => {
        state.loading = false;
        state.AdminCustomer = action.payload;
      })
      .addCase(Customer.rejected, (state) => {
        state.loading = true;
      });

      builder
      .addCase(CustomerProperties.pending, (state) => {
        state.loading = true;
      })
      .addCase(CustomerProperties.fulfilled, (state, action) => {
        state.loading = false;
        state.CustomerProperties = action.payload;
      })
      .addCase(CustomerProperties.rejected, (state) => {
        state.loading = true;
      });

      builder
      .addCase(ContactUsQueries.pending, (state) => {
        state.loading = true;
      })
      .addCase(ContactUsQueries.fulfilled, (state, action) => {
        state.loading = false;
        state.ContactUsQueries = action.payload;
      })
      .addCase(ContactUsQueries.rejected, (state) => {
        state.loading = true;
      });
      builder
      .addCase(ContactUsQuery.pending, (state) => {
        state.loading = true;
      })
      .addCase(ContactUsQuery.fulfilled, (state, action) => {
        state.loading = false;
        state.ContactUsQuery = action.payload;
      })
      .addCase(ContactUsQuery.rejected, (state) => {
        state.loading = true;
      });

      builder
      .addCase(AdminOverview.pending, (state) => {
        state.loading = true;
      })
      .addCase(AdminOverview.fulfilled, (state, action) => {
        state.loading = false;
        state.overview = action.payload;
      })
      .addCase(AdminOverview.rejected, (state) => {
        state.loading = true;
      });

      builder
      .addCase(AdminDashboard.pending, (state) => {
        state.loading = true;
      })
      .addCase(AdminDashboard.fulfilled, (state, action) => {
        state.loading = false;
        state.AdminDashboard = action.payload;
      })
      .addCase(AdminDashboard.rejected, (state) => {
        state.loading = true;
      });
      builder
      .addCase(Exports_data.pending, (state) => {
        state.loading = true;
      })
      .addCase(Exports_data.fulfilled, (state, action) => {
        state.loading = false;
        state.Download = action.payload;
      })
      .addCase(Exports_data.rejected, (state) => {
        state.loading = true;
      });
  },
});

export default AdminReducer.reducer;
