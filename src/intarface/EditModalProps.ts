import {ChangeEvent} from "react";

interface Shop {
    name: string;
    address: string;
}

export interface EditModalProps {
    editingShop: Shop;
    handleNameChange: (e: ChangeEvent<HTMLInputElement>, shopState: string) => void;
    handleAddressChange: (e: ChangeEvent<HTMLInputElement>, shopState: string) => void;
    closeEditModal: () => void;
    handleEdit: () => void;
}