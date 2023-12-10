import React, {ChangeEvent} from 'react';
import WarningSvg from '../assets/svg/WarningSvg';

interface Shop {
    name: string;
    address: string;
}

interface EditModalProps {
    editingShop: Shop;
    handleNameChange: (e: ChangeEvent<HTMLInputElement>, shopState: string) => void;
    handleAddressChange: (e: ChangeEvent<HTMLInputElement>, shopState: string) => void;
    closeEditModal: () => void;
    handleEdit: () => void;
}

const EditModal: React.FC<EditModalProps> = (props) => {
    const {
        editingShop,
        handleNameChange,
        handleAddressChange,
        closeEditModal,
        handleEdit,
    } = props
    return (
        <div className='flex flex-col gap-5'>
            <h2 className='text-lg text-whiteBlack font-medium'>Редактировать магазин</h2>
            <div className='flex gap-5'>
                <div className='flex flex-col'>
                    <label className='text-sm font-medium text-whiteBlack'>Название магазина</label>
                    <input
                        className='text-xs text-whiteBlack border rounded p-2 w-[274px] border-whiteGray'
                        type="text"
                        placeholder="Название"
                        value={editingShop.name}
                        onChange={(e) => handleNameChange(e, 'editingShop')}
                    />
                </div>
                <div className='flex flex-col'>
                    <label className='text-sm font-medium'>Адрес</label>
                    <input
                        className='text-xs text-whiteBlack border rounded p-2 w-[274px] border-whiteGray'
                        type="text"
                        placeholder="Адрес"
                        value={editingShop.address}
                        onChange={(e) => handleAddressChange(e, 'editingShop')}
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
                <button className='h-9 w-40 bg-whiteGray rounded font-normal text-white text-sm'
                        onClick={closeEditModal}>
                    Отмена
                </button>
                <button className='h-9 w-40 bg-blackGreen rounded font-normal text-white text-sm' onClick={handleEdit}>
                    Сохранить
                </button>
            </div>
        </div>
    );
};

export default EditModal;
