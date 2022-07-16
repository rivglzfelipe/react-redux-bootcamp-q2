
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchAllProducts = createAsyncThunk(
  'products/fetchAllProducts',
  async () => {
    const requestResponse = await fetch(
      'https://6x8prpit9f.execute-api.us-east-1.amazonaws.com/api/products',
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'x-api-key': '94tOOmgSAz3V6Xe7f2cMuz6qjgrIXS2xq8Xbly00',
        },
      }
    );

    const { items } = await requestResponse.json();
    return items;
  }
);

const initialState = {
  products: []
};

const products= createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllProducts.fulfilled]: (state, { payload }) => {
      state.products = payload;
    
    },
  },
});

export { fetchAllProducts };
export default products.reducer;