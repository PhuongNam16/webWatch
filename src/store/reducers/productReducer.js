import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProduct } from '../../services'

// First, create the thunk
export const GETPRODUCT = createAsyncThunk(
  'users/fetchByIdStatus',
  async () => {
    const response = await getProduct()
    return response.data
  }
)

// Then, handle actions in your reducers:
const productSlice = createSlice({
  name: 'product',
  initialState: { listProducts: [], isloading: false , listCart : [] },

  reducers: {
    addCart (state, action){
      state.listCart = [
        ...state.listCart,
        action.payload
      ]
        // console.log(state.listCart)
    }
  },
  extraReducers: {
    [GETPRODUCT.pending]: (state) => { // trong trạng thái đợi thực thi
        state.isloading = true;
    },
    [GETPRODUCT.fulfilled]: (state, action) => { 
        state.isloading = false;
        // console.log(action.payload);
        state.listProducts = action.payload
        // console.log('abc', state.listProducts)
        // console.log('thành công')
    },
    [GETPRODUCT.rejected]: (state, action) => {
        state.isloading = false;
        // console.log('thất bại')

 
// state.error = action.payload;
    }}
});

export const {
  addCart
  
} = productSlice.actions;
const { reducer: productReducer } = productSlice;
export default productReducer;