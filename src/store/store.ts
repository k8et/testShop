import { configureStore } from '@reduxjs/toolkit';
import shopReducer from './slice/shopSlice';

const store = configureStore({
    reducer: {
        shop: shopReducer,
    },
});

export default store;
