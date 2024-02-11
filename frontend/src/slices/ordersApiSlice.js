import { apiSlice } from './apiSlice'; 
import { OREDRS_URL  } from "./constants";

export const ordersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (order) => ({
                url: OREDRS_URL,
                method: 'POST',
                body: { ...order},
            }),
        }),
    }),
}); 


export const { useCreateOrderMutation } = ordersApiSlice; 