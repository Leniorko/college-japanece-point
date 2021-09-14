import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "inspector";
import { GameInterface } from "../pages/Search";

interface cartStateInterface {
  value: Array<GameInterface>;
}

const initialState: cartStateInterface = {
  value: [],
};

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://japanese-point.herokuapp.com/api/v1/search",
  }),
  endpoints: (builder) => ({
    getEntireCart: builder.query({
      query: (body) => ({
        method: "POST",
        url: "/",
        body: {
          isInCart: true,
        },
      }),
    }),
  }),
});

export const useGetGamesInCart = cartApi.endpoints.getEntireCart.useQuery;
