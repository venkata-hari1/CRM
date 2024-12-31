import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseURL, endpoints } from "../../../Utils/Config";
import networkCall from "../../../Utils/NetworkCalls";
import { RootState } from "../store/Store";
import { SalesData } from "./Seller";
type IProps = {
  loading: boolean,
  data: [],
  recentlyAddeded:RootState | Object,
  DiscoverMoreRent:RootState | Object,
  PropertyDetails:{
    data:{
      id:null,
      houseNo: null | string;
      bathrooms:null,
      bedrooms:null,
      images:string[],
      locality:string,
      city:string,
      state:string,
      country:string,
      pincode:string,
      ownerName:string,
      ownercity:string,
      ownerstate:string,
      ownerCountry:string,
      squareFeet:string,
      repairQuality:string,
      status:string,
      description:string,
      ownerPhoto:string,
      ownerMobileNumber:string,
      ownerEmail:string,
      apartmentName:string,
      laundry:string,
      cooling:string,
      heating:string,
      propertyType:string,
      availableDate:string,
      yearBuild:string,
      size:string,
      parkingArea:string,
      lotSize:string,
      securityDeposit:string,
      price:null | number,
      isLike:null | boolean
    }
  },
  MyPurchases:RootState | Object
  MyRequest:RootState | Object
  SimilarListing:[]
  PrivacyPolicyData:{}
  TermsAndConditionData:{}
  SellerProperties:[],
  bedrooms:[],
  contactus:[]
}
const initialState: IProps = {
  loading: false,
  data: [],
  TermsAndConditionData:{},
  recentlyAddeded: [],
  DiscoverMoreRent:[],
  MyPurchases:[],
  MyRequest:[],
  SimilarListing:[],
  PrivacyPolicyData:{},
  SellerProperties:[],
  bedrooms:[],
  contactus:[],
  PropertyDetails:{
    data:{
      id:null,
      houseNo:"",
      locality:'',
      bathrooms:null,
      bedrooms:null,
      images:[],
      isLike:null,
      city:'',
      state:'',
      country:'',
      pincode:'',
      ownerName:'',
      ownercity:'',
      ownerstate:'',
      ownerCountry:'',
      squareFeet:'',
      repairQuality:'',
      status:'',
      description:'',
      ownerPhoto:'',
      ownerMobileNumber:'',
      ownerEmail:'',
      apartmentName:'',
      laundry:'',
      cooling:'',
      heating:'',
      propertyType:'',
      availableDate:'',
      yearBuild:'',
      size:'',
      parkingArea:'',
      lotSize:'',
      securityDeposit:'',
      price:null
    }
  }
}
export const Reviews = createAsyncThunk("Reviews",
  async (payload:{data:Object},{ getState, rejectWithValue, fulfillWithValue }
  ) => {
    const {data}=payload
    const { response, error } = await networkCall(
      endpoints.Reviews,
      "POST",
      JSON.stringify(data)
    );
    if (response) {
      return fulfillWithValue(response);
    } else {
      return rejectWithValue(error);
    }
  }
);
export const Contact_US = createAsyncThunk(
  "Contact_US",
  async (__, { fulfillWithValue, rejectWithValue }) => {
    try {
     
      const { response, error } = await networkCall(
        `${endpoints.Contact_US}`,
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
export const Properties = createAsyncThunk("Properties", async (payload: { data:{radius:string | null,orderBy:string,bedrooms:string | null,apartmentName:string,priceLessThan:string,page:Number,moveInDate:string,pageSize:number,category:string | null,longitude:string | null,lattitude:string | null} }, { fulfillWithValue, rejectWithValue, dispatch }) => {
  try {
    const { data } = payload;
    const search = data.moveInDate
    const URL = search === '' ? '' : `&moveInDate=${data.moveInDate}`
    const price=data.priceLessThan===undefined?"":`&priceLessThan=${data.priceLessThan}`
    const token=localStorage.getItem('token')
    const name=data.apartmentName===undefined?"":`apartmentName=${data.apartmentName}&`
    const storedData = localStorage.getItem('lookingupid');
    const LookingUpId = storedData ? JSON.parse(storedData) : '';
    const radius=localStorage.getItem('radius');
    const bedrooms=data.bedrooms==='' || data.bedrooms===null?'':`&bedrooms=${data.bedrooms}`
    const orderBy=data.orderBy===""?`&orderBy=desc`:`&orderBy=${data.orderBy}`
    const category=data.category===null || data.category===""?"":`&category=${data.category}`
    const headers: {[key: string]: string} = {}; 
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${baseURL}/${endpoints.PropertySearch}?${name}page=${data.page}&pageSize=${data.pageSize}${orderBy}&sortBy=id${category}&lookinUpId=${LookingUpId}&lattitude=${data.lattitude}&longitude=${data.longitude}${URL}${price}${bedrooms}&radius=${data.radius}`, {
      method: 'GET',
      headers: headers,
    } as {});
    if (response) {
      const responseData = await response.json()
      return fulfillWithValue(responseData);
    }
  } catch (error) {
    return rejectWithValue(error);
  }
})

export const recentlyAddeded = createAsyncThunk("recentlyAddeded", async (payload: { data:{page:number,pageSize:number,lookinUpId:string | null} }, { fulfillWithValue, rejectWithValue, dispatch }) => {
  try {
    const { data } = payload;
    const token=localStorage.getItem('token')
    const response = await fetch(`${baseURL}/${endpoints.RecentlyAdded}?page=${data.page}&size=${data.pageSize}&lookingupId=${data.lookinUpId}`, {
      method: 'GET',
      headers:{
        Authorization:`Bearer ${token}`
      },
    } as {});
    if (response) {
      const responseData = await response.json()
      return fulfillWithValue(responseData);
    }
  } catch (error) {
    return rejectWithValue(error);
  }
})
export const PropertyDetails = createAsyncThunk("PropertyDetails", async (__, { fulfillWithValue, rejectWithValue, dispatch }) => {
  try {
    const id=JSON.parse(localStorage.getItem('propertyId') || '')
    const token=localStorage.getItem('token')
    const response = await fetch(`${baseURL}/${endpoints.Properties}/${id}`, {
      method: 'GET',
      headers:{
        Authorization:`Bearer ${token}`
      },
    } as {});
    if (response) {
      const responseData = await response.json()
      return fulfillWithValue(responseData);
    }
  } catch (error) {
    return rejectWithValue(error);
  }
})

export const MyPurchases = createAsyncThunk("MyPurchases", async (payload:{data:{page:number,status:string}}, { fulfillWithValue, rejectWithValue, dispatch }) => {
  try {
   const {data}=payload
   const status=data.status==="" || data.status==="All"?"":`&status=${data.status}`
    const token=localStorage.getItem('token')
    const response = await fetch(`${baseURL}/${endpoints.MyPurchases}?page=${data.page}&pageSize=5${status}`, {
      method: 'GET',
      headers:{
        Authorization:`Bearer ${token}`
      },
    } as {});
    if (response) {
      const responseData = await response.json()
      return fulfillWithValue(responseData);
    }
  } catch (error) {
    return rejectWithValue(error);
  }
})

export const MyRequest = createAsyncThunk("MyRequest", async (payload:{data:{page:number,status:string}}, { fulfillWithValue, rejectWithValue, dispatch }) => {
  try {
    const {data}=payload
    const token=localStorage.getItem('token')
    const status=data.status==="" || data.status==="All"?"":`&status=${data.status}`
    const response = await fetch(`${baseURL}/${endpoints.MyRequest}?page=${data.page}&pageSize=3${status}`, {
      method: 'GET',
      headers:{
        Authorization:`Bearer ${token}`
      },
    } as {});
    if (response) {
      const responseData = await response.json()
      return fulfillWithValue(responseData);
    }
  } catch (error) {
    return rejectWithValue(error);
  }
})

export const SimilarListing = createAsyncThunk(
  "SimilarListing",
  async (payload:{data:{page:number}}, { fulfillWithValue, rejectWithValue }) => {
    try {
      const {data}=payload
      const city=localStorage.getItem('city')
      const lookingupId=JSON.parse(localStorage.getItem('lookingupid') || '')
      const { response, error } = await networkCall(
        `${endpoints.SimilarListing}?city=${city}&page=${data.page}&size=3&sort=id&sort=asc&lookingupId=${lookingupId}`,
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
export const RequestTour = createAsyncThunk(
  "RequestTour",
  async (payload:{data:{selectDate:Date | string,price:number | null,tourType:string | null}}, { fulfillWithValue, rejectWithValue }) => {
    try {
      const {data}=payload
      const propertyId=JSON.parse(localStorage.getItem('propertyId') || '')
      const { response, error } = await networkCall(
        `${endpoints.Tour}?selectDate=${data.selectDate}&price=${data.price}&propertyId=${propertyId}&tourType=${data.tourType}`,
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

export const Send_Contact = createAsyncThunk(
  "Send_Contact",
  async (payload:{data:Object}, { fulfillWithValue, rejectWithValue }) => {
    try {
      const {data}=payload
      const { response, error } = await networkCall(
        `${endpoints.Contact}`,
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
export const PrivacyPolicyController = createAsyncThunk(
  "PrivacyPolicy",
  async (payload:{data:{privacyPolicy:string}}, { dispatch,fulfillWithValue, rejectWithValue }) => {
    try {
      const {data}=payload
      const { response, error } = await networkCall(
        `${endpoints.PrivacyPolicy}`,
        "POST",
        JSON.stringify(data)
      );
      if (response) {
        dispatch(PrivacyPolicyData())
        return fulfillWithValue(response);
      } else if (error) {
        return rejectWithValue(error);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const UpdatePrivacyPolicyController = createAsyncThunk(
  "UpdatePrivacyPolicyController",
  async (payload:{data:{privacyPolicy:string}}, {dispatch, fulfillWithValue, rejectWithValue }) => {
    try {
      const id=  localStorage.getItem("termsid")
      const {data}=payload
      const { response, error } = await networkCall(
        `${endpoints.PrivacyPolicy}/${id}`,
        "PUT",
        JSON.stringify(data)
      );
      if (response) {
        dispatch(PrivacyPolicyData())
        return fulfillWithValue(response);
      } else if (error) {
        return rejectWithValue(error);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const PrivacyPolicyData = createAsyncThunk(
  "PrivacyPolicyData",
  async (__, { fulfillWithValue, rejectWithValue }) => {
    try {
     
      const { response, error } = await networkCall(
        `${endpoints.PrivacyPolicy}`,
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
export const TermsAndConditionController = createAsyncThunk(
  "TermsAndConditionController",
  async (payload:{data:{termsAndConditions:string}}, { dispatch,fulfillWithValue, rejectWithValue }) => {
    try {
      const {data}=payload
      const { response, error } = await networkCall(
        `${endpoints.TermsAndConditions}`,
        "POST",
        JSON.stringify(data)
      );
      if (response) {
        dispatch(TermsAndConditionData())
        return fulfillWithValue(response);
      } else if (error) {
        return rejectWithValue(error);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const UpdateTermsAndConditionController = createAsyncThunk(
  "UpdateTermsAndConditionController",
  async (payload:{data:{termsAndConditions:string}}, {dispatch, fulfillWithValue, rejectWithValue }) => {
    try {
      const id=  localStorage.getItem("termsid")
      const {data}=payload
      const { response, error } = await networkCall(
        `${endpoints.TermsAndConditions}/${id}`,
        "PUT",
        JSON.stringify(data)
      );
      if (response) {
        dispatch(TermsAndConditionData())
        return fulfillWithValue(response);
      } else if (error) {
        return rejectWithValue(error);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const TermsAndConditionData = createAsyncThunk(
  "TermsAndConditionData",
  async (__, { fulfillWithValue, rejectWithValue }) => {
    try {
     
      const { response, error } = await networkCall(
        `${endpoints.TermsAndConditions}`,
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
export const DiscoverMoreRent = createAsyncThunk(
  "DiscoverMoreRent",
  async (payload:{data:{page:number}}, { fulfillWithValue, rejectWithValue }) => {
    try {
      const {data}=payload
     const lookingupid=localStorage.getItem('lookingupid')
      const { response, error } = await networkCall(
        `${endpoints.DiscoverMoreRent}?page=${data.page}&size=5&sort=id&sort=asc&lookingupId=${lookingupid}`,
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

export const SellerProperties = createAsyncThunk(
  "SellerProperties",
  async (payload:{data:{bathrooms:string | number,category:string | null,priceGreaterThan:string | null,priceLessThan:string | null,bedrooms:string | number,page:number,Date:string,status:string,state:string,country:string,pagesize:string | number}}, { fulfillWithValue, rejectWithValue }) => {
    try {
      const {data}=payload
      const priceLessThan=data.priceLessThan===null?'':`&priceLessThan=${data.priceLessThan}`
      const category=data.category===null?'':`&category=${data.category}`
      const priceGreaterThan=data.priceGreaterThan===null?'':`&priceGreaterThan=${data.priceGreaterThan}`
      const bedrooms=data.bedrooms===0?'':`&bedrooms=${data.bedrooms}`
      const bathrooms=data.bathrooms===0?'':`&bathrooms=${data.bathrooms}`
      const Country=data.country===""?"":`&country=${data.country}`
      const State=data.state===""?"":`&state=${data.state}`
      const AppertmentName=data.Date===""?"":`&apartmentName=${data.Date}`
      const status=data.status==="" || data.status==="All"?"":`status=${data.status}`
      const { response, error } = await networkCall(
        `${endpoints.SellerProperties}?${status}${AppertmentName}${Country}${State}&page=${data.page}&pageSize=${data.pagesize}&orderBy=desc&sortBy=id${category}${priceLessThan}${priceGreaterThan}${bedrooms}${bathrooms}`,
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

export const ListInformation = createAsyncThunk(
  "ListInformation",
  async (payload:{data:{id:number | null,propertyType:string,bedrooms:number | null,baths:number | null,squareFeet:string | number | null,noOfFloors:number | null,propertyFloor:string |number | null,amenitites:string,description:string,price:number | null,leaseDuration:string | number | null,securityDeposit:string | number | null,availableDate:string,yearBuild:string,parkingArea:string,laundry:string,repairQuality:string,availableStatus:string}}, { fulfillWithValue,dispatch, rejectWithValue }) => {
    try {
     const {data}=payload
     const securityDeposit=data.securityDeposit===""?"":`&${data.securityDeposit}`
     const leaseDuration=data.leaseDuration===""?"":`&${data.leaseDuration}`
     const propertyFloor=data.propertyFloor===null || data.propertyFloor===""?"":`&propertyFloor=${data.propertyFloor}`
      const { response, error } = await networkCall(
        `${endpoints.ListInformation}/${data.id}?propertyType=${data.propertyType}&bedrooms=${data.bedrooms}&baths=${data.baths}&squareFeet=${data.squareFeet}&noOfFloors=${data.noOfFloors}${propertyFloor}&amenitites=${data.amenitites}&description=${data.description}&price=${data.price}${leaseDuration}${securityDeposit}&availableDate=${data.availableDate}&yearBuild=${data.yearBuild}&parkingArea=${data.parkingArea}&laundry=${data.laundry}&repairQuality=${data.repairQuality}&availableStatus=${data.availableStatus}`,
        "PUT"
      );
      if (response) {
        dispatch(PropertyDetails())
        return fulfillWithValue(response);
      } else if (error) {
        return rejectWithValue(error);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const PropertyImages = createAsyncThunk("Properties", async (payload: { data:FormData }, { fulfillWithValue, rejectWithValue, dispatch }) => {
  try {
    const { data } = payload;
    const token=localStorage.getItem('token')
    const id=JSON.parse(localStorage.getItem('propertyId') || '')
    const response = await fetch(`${baseURL}/${endpoints.PropertyImages}/${id}`, {
      method: 'PUT',
      body:data,
      headers:{
        Authorization:`Bearer ${token}`
      },
    } as {});
    if (response) {
      const responseData = await response.json()
      return fulfillWithValue(responseData);
    }
  } catch (error) {
    return rejectWithValue(error);
  }
})


export const BedRooms = createAsyncThunk(
  "BedRooms",
  async (__, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { response, error } = await networkCall(
        `${endpoints.BedRooms}`,
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

export const DeleteProperty = createAsyncThunk(
  "DeleteProperty",
  async (__, { fulfillWithValue, rejectWithValue,dispatch }) => {
    try {
      const id=localStorage.getItem("lookingupid")
      const { response, error } = await networkCall(
        `${endpoints.DeleteProperty}/${id}`,
        "DELETE"
      );
      if (response) {
        const data = {
          page: 1,
          status: '',
          name: '',
          bathrooms: 0,
          bedrooms: 0,
          Date: '',
          priceLessThan:null,
          priceGreaterThan:null,
          category:null
        }
     
        dispatch(SalesData({ data: data }))
     
        return fulfillWithValue(response);
      } else if (error) {
        return rejectWithValue(error);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const DeleteProperty1 = createAsyncThunk(
  "DeleteProperty",
  async (payload:{data:any}, { fulfillWithValue, rejectWithValue,dispatch }) => {
    try {
      const {data}=payload
      const id=localStorage.getItem("lookingupid")
      const { response, error } = await networkCall(
        `${endpoints.DeleteProperty}/${id}`,
        "DELETE"
      );
      if (response) { 
        const data1={        
            state:data.state,
            country:data.country,
            status:data.status,
            page:1,
            pagesize:data.pagesize,
            bathrooms:data.bathroom,
            bedrooms:data.bedroom,
            Date:'',
            priceLessThan:data.minPrice,
            priceGreaterThan:data.maxPrice,
            category:data.Category
        }
  
        dispatch(SellerProperties({data:data1}))
        return fulfillWithValue(response);
      } else if (error) {
        return rejectWithValue(error);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const DeleteImage = createAsyncThunk(
  "DeleteImage",
  async (payload:{data:{image:string}}, { fulfillWithValue, rejectWithValue, dispatch }) => {
    try {
      const { data } = payload;
      const id=localStorage.getItem("propertyId")
      const response = await fetch(`${baseURL}/${endpoints.PropertyImage}/${id}?propertyImagePath=${data.image}`, {
        method: 'DELETE',
        body: data,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      } as {});
      if (response) {
        dispatch(PropertyDetails())
        const responseData = await response.json()
        return fulfillWithValue(responseData);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const PropertySlice = createSlice({
  name: "CustomerSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(Contact_US.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(Contact_US.fulfilled, (state, action) => {
      state.contactus = action.payload
      state.loading = false
    })
    builder.addCase(Contact_US.rejected, (state, action) => {
      state.loading = true
    })

    builder.addCase(BedRooms.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(BedRooms.fulfilled, (state, action) => {
      state.bedrooms = action.payload
      state.loading = false
    })
    builder.addCase(BedRooms.rejected, (state, action) => {
      state.loading = true
    })
    builder.addCase(Properties.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(Properties.fulfilled, (state, action) => {
      state.data = action.payload
      state.loading = false
    })
    builder.addCase(Properties.rejected, (state, action) => {
      state.loading = true
    })
    builder.addCase(recentlyAddeded.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(recentlyAddeded.fulfilled, (state, action) => {
      state.recentlyAddeded = action.payload
      state.loading = false
    })
    builder.addCase(recentlyAddeded.rejected, (state, action) => {
      state.loading = true
    })
    builder.addCase(PropertyDetails.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(PropertyDetails.fulfilled, (state, action) => {
      state.PropertyDetails = action.payload
      state.loading = false
    })
    builder.addCase(PropertyDetails.rejected, (state, action) => {
      state.loading = true
    })

    builder.addCase(MyPurchases.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(MyPurchases.fulfilled, (state, action) => {
      state.MyPurchases = action.payload
      state.loading = false
    })
    builder.addCase(MyPurchases.rejected, (state, action) => {
      state.loading = true
    })

    builder.addCase(MyRequest.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(MyRequest.fulfilled, (state, action) => {
      state.MyRequest = action.payload
      state.loading = false
    })
    builder.addCase(MyRequest.rejected, (state, action) => {
      state.loading = true
    })

    builder.addCase(SimilarListing.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(SimilarListing.fulfilled, (state, action) => {
      state.SimilarListing = action.payload
      state.loading = false
    })
    builder.addCase(SimilarListing.rejected, (state, action) => {
      state.loading = true
    })

    builder.addCase(PrivacyPolicyData.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(PrivacyPolicyData.fulfilled, (state, action) => {
      state.PrivacyPolicyData = action.payload
      state.loading = false
    })
    builder.addCase(PrivacyPolicyData.rejected, (state, action) => {
      state.loading = true
    })

    builder.addCase(TermsAndConditionData.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(TermsAndConditionData.fulfilled, (state, action) => {
      state.TermsAndConditionData = action.payload
      state.loading = false
    })
    builder.addCase(TermsAndConditionData.rejected, (state, action) => {
      state.loading = true
    })

    builder.addCase(DiscoverMoreRent.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(DiscoverMoreRent.fulfilled, (state, action) => {
      state.DiscoverMoreRent = action.payload
      state.loading = false
    })
    builder.addCase(DiscoverMoreRent.rejected, (state, action) => {
      state.loading = true
    })

    builder.addCase(SellerProperties.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(SellerProperties.fulfilled, (state, action) => {
      state.SellerProperties = action.payload
      state.loading = false
    })
    builder.addCase(SellerProperties.rejected, (state, action) => {
      state.loading = true
    })
  }
})
export default PropertySlice.reducer