import React, {FC} from 'react';
import {ModalProps} from "../intarface/ModalProps";


const Modal: FC<ModalProps> = (props) => {
    const {isModalOpen, children, setIsModalOpen} = props
    return (
        <>
            {isModalOpen && (
                <div className="w-screen h-screen absolute top-0 left-0 flex items-center justify-center"
                     onClick={() => setIsModalOpen(false)}>
                    <div className="flex flex-col gap-5 w-[660px] h-[305] bg-white shadow-lg p-7" onClick={e => e.stopPropagation()}>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;