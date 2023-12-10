import React from 'react';
import WarningSvg from '../assets/svg/WarningSvg';
import {CreateModalProps} from "../intarface/CreateModalProps";


const CreateModal: React.FC<CreateModalProps> = (props) => {
    const {
        closeModal,
        handleCreateShop,
        handleNameChange,
        handleAddressChange,
        newShop
    } = props
    return (
        <div className='flex flex-col gap-5'>
            <h2 className='text-lg text-whiteBlack font-medium'>Создать магазин</h2>
            <div className='flex gap-5'>
                <div className='flex flex-col'>
                    <label className='text-sm font-medium text-whiteBlack'>Название магазина</label>
                    <input
                        className='text-xs text-whiteBlack border rounded p-2 w-[274px] border-whiteGray'
                        type="text"
                        placeholder="Название"
                        value={newShop.name}
                        maxLength={30}
                        onChange={(e) => handleNameChange(e, 'newShop')}
                    />
                </div>
                <div className='flex flex-col'>
                    <label className='text-sm font-medium'>Адрес</label>
                    <input
                        className='text-xs text-whiteBlack border rounded p-2 w-[274px] border-whiteGray'
                        type="text"
                        placeholder="Адрес"
                        value={newShop.address}
                        maxLength={30}
                        onChange={(e) => handleAddressChange(e, 'newShop')}
                    />
                </div>
            </div>
            <div className='flex items-center'>
                <WarningSvg/>
                <p className='text-sm text-blackGray font-medium'>
                    В названии домена разрешены латиница и “-”, запрещается использовать словосочетание Work 5.
                    После создания магазина Вы сможете прикрутить свой домен (например ivangrozniy.ru).
                    Подробнее по <span className='text-purpleCustom'>ссылке</span>
                </p>
            </div>
            <div className='flex gap-2'>
                <button
                    className='h-9 w-40 bg-whiteGray rounded font-normal text-white text-sm'
                    onClick={closeModal}
                >
                    Отмена
                </button>
                <button
                    className='h-9 w-40 bg-blackGreen rounded font-normal text-white text-sm'
                    onClick={handleCreateShop}
                >
                    Создать
                </button>
            </div>
        </div>
    );
};

export default CreateModal;
