import {ChangeEvent} from "react";

export interface CreateModalProps {
    closeModal: () => void;
    handleCreateShop: () => void;
    handleNameChange: (e: ChangeEvent<HTMLInputElement>, shopState: string) => void;
    handleAddressChange: (e: ChangeEvent<HTMLInputElement>, shopState: string) => void;
    newShop: {
        name: string;
        address: string;
    };
}