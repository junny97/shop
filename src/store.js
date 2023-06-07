import { configureStore, createSlice } from '@reduxjs/toolkit';
import user from './store/userSlice';

let cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
  ],
  reducers: {
    addCount(state, action) {
      const itemIndex = state.findIndex((item) => item.id === action.payload);
      if (itemIndex !== -1) {
        state[itemIndex].count++;
      }
    },
    decreaseCount(state, action) {
      const itemIndex = state.findIndex((item) => item.id === action.payload);
      if (itemIndex !== -1) {
        state[itemIndex].count--;
      }
    },
    addItem(state, action) {
      const ItemList = [...state, action.payload];
      return ItemList;
    },
  },
});

export let { addCount, decreaseCount, addItem } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});

// state[action.payload].count++
