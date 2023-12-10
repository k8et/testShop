import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Shop {
    id: number;
    name: string;
    address: string;
}

export interface ShopState {
    shops: Shop[];
}

const initialState: ShopState = {
    shops: [],
};

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        addShop: (state, action: PayloadAction<Shop>) => {
            state.shops.push(action.payload);
        },
        removeShop: (state, action: PayloadAction<number>) => {
            state.shops = state.shops.filter(shop => shop.id !== action.payload);
        },
        editShop: (state, action: PayloadAction<Shop>) => {
            const { id, name, address } = action.payload;
            const shopToEdit = state.shops.find(shop => shop.id === id);
            if (shopToEdit) {
                shopToEdit.name = name;
                shopToEdit.address = address;
            }
        },
    },
});

export const { addShop, removeShop, editShop } = shopSlice.actions;
export default shopSlice.reducer;
