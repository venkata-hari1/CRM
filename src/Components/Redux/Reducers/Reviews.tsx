import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL, endpoints } from "../../../Utils/Config";
import networkCall from "../../../Utils/NetworkCalls";
import { RootState } from "../store/Store";
interface IProps {
    loading: boolean;
    UserReviews: RootState | Object;
}
const initialState: IProps = {
    loading: false,
    UserReviews: [],
};


export const Reviews = createAsyncThunk(
    "Reviews",
    async (payload:{data:{page:number}}, { fulfillWithValue, rejectWithValue }) => {
        try {
            const {data}=payload
            const { response, error } = await networkCall(
                `${endpoints.UserReviews}?page=${data.page}&pageSize=5`,
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

export const DeleteReview = createAsyncThunk(
    "DeleteReview",
    async (__, { fulfillWithValue, rejectWithValue,dispatch }) => {
        try {
          const id=localStorage.getItem("deleteid")
            const { response, error } = await networkCall(
                `${endpoints.UserReviews}/${id}`,
                "DELETE"
            );
            if (response) {
                const data={
                    page:1
                }
                dispatch(Reviews({data:data}))
                return fulfillWithValue(response);
            } else if (error) {
                return rejectWithValue(error);
            }
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const DeleteAllReviews = createAsyncThunk(
    "DeleteAllReviews",
    async (__, { fulfillWithValue, rejectWithValue,dispatch }) => {
        try {
            const { response, error } = await networkCall(
                `${endpoints.DeleteAllReviews}`,
                "DELETE"
            );
            if (response) {
                const data={
                    page:1
                }
                dispatch(Reviews({data:data}))
                return fulfillWithValue(response);
            } else if (error) {
                return rejectWithValue(error);
            }
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const ReviewsReducer = createSlice({
    name: "AuthSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(Reviews.pending, (state) => {
                state.loading = true;
            })
            .addCase(Reviews.fulfilled, (state, action) => {
                state.loading = false;
                state.UserReviews = action.payload;
            })
            .addCase(Reviews.rejected, (state) => {
                state.loading = true;
            });

    },
});
export default ReviewsReducer.reducer;
