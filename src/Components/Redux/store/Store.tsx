import { configureStore } from '@reduxjs/toolkit';
import LandingReducer from '../Reducers/LandingReducer'
import AuthReducer  from '../Reducers/Authentication'
import CustomerReducer from '../Reducers/Settings';
import AddPropertyReducer from '../Reducers/AddProperty';
import AdminReducer from "../Reducers/AdminReducer"
import ReviewsReducer from "../Reducers/Reviews"
import PropertyReducer from '../Reducers/Property';
import SellerReducer from '../Reducers/Seller'
export const store=configureStore({
    reducer:{
        LandingReducer,
        AuthReducer,
        CustomerReducer,
        AddPropertyReducer,
        AdminReducer,
        ReviewsReducer,
        PropertyReducer,
        SellerReducer
    }
})
export type AppDispatch=typeof store.dispatch
export type RootState=ReturnType<typeof store.getState>
