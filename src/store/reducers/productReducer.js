import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getProduct, pagination, searchProductByName} from '../../services';

// First, create the thunk
export const GETPRODUCT = createAsyncThunk (
  'users/fetchByIdStatus',
  async () => {
    const response = await getProduct ();
    return response.data;
  }
);
export const SEARCHPRODUCT = createAsyncThunk (
  'users/fetchByIdStatus',
  async params => {
    const response = await searchProductByName (params);
    return response.data;
  }
);

export const PAGINATIONPRODUCT = createAsyncThunk (
  'users/fetchByIdStatus',
  async params => {
    const response = await pagination(params);
    return response.data;
  }
);

// Then, handle actions in your reducers:
const productSlice = createSlice ({
  name: 'product',
  initialState: {listProducts: [], isloading: false, listCart: [], sum: 0},

  reducers: {
    addCart (state, action) {
      state.listCart = [...state.listCart, action.payload];
      state.sum = state.listCart.reduce (
        (accumulator, currentValue) => accumulator + currentValue.price,
        0
      );
      // console.log ('Tong tien ', state.sum);
    },
    deletedCart (state, action) {
      state.listCart = state.listCart.filter (
        listCart => listCart._id !== action.payload
      );
    },
  },
  extraReducers: {
    [GETPRODUCT.pending]: state => {
      // trong trạng thái đợi thực thi
      state.isloading = true;
    },
    [GETPRODUCT.fulfilled]: (state, action) => {
      state.isloading = false;
      state.listProducts = action.payload;
    },
    [GETPRODUCT.rejected]: (state, action) => {
      state.isloading = false;
    },
    [SEARCHPRODUCT.pending]: state => {
      // trong trạng thái đợi thực thi
      state.isloading = true;
    },
    [SEARCHPRODUCT.fulfilled]: (state, action) => {
      state.isloading = false;
      console.log (action.payload);
      state.listProducts = action.payload;
    },
    [SEARCHPRODUCT.rejected]: (state, action) => {
      state.isloading = false;
    },
    [PAGINATIONPRODUCT.pending]: state => {
      // trong trạng thái đợi thực thi
      state.isloading = true;
    },
    [PAGINATIONPRODUCT.fulfilled]: (state, action) => {
      state.isloading = false;
      // console.log(action.payload);
      state.listProducts = action.payload;
      console.log('abc', state.listProducts)
      console.log('thành công')
    },
    [PAGINATIONPRODUCT.rejected]: (state, action) => {
      state.isloading = false;
      console.log('thất bại')
      state.error = action.payload;
    },
  },
});

export const {addCart, deletedCart} = productSlice.actions;
const {reducer: productReducer} = productSlice;
export default productReducer;
