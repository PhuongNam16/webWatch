import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getProduct} from '../../services';

// First, create the thunk
export const GETPRODUCT = createAsyncThunk (
  'users/fetchByIdStatus',
  async () => {
    const response = await getProduct();
    return response.data;
  }
);

// Then, handle actions in your reducers:
const counterSlice = createSlice ({
  name: 'count',
  initialState: {isloading: false, listCart: [], sum: 0, value: 1},

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
    increment (state, action) {
      
      state.value++;
      // console.log(state.value);
    },
    decrement (state, action) {
      state.value--;
        // console.log(state.value);
    },
    incrementByAmount (state, action) {
      state.value += action.payload;
    },
  },
  extraReducers: {
    
  },
});

export const {increment,decrement,incrementByAmount} = counterSlice.actions;
const {reducer: counterReducer} = counterSlice;
export default counterReducer;
