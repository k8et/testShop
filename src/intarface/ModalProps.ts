import {ReactElement} from "react";

export interface ModalProps {
    isModalOpen: boolean,
    children: ReactElement,
    setIsModalOpen: (b: boolean) => void

}