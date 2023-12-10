import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addShop, editShop, removeShop} from "../store/slice/shopSlice";
import Plus from "../assets/svg/Plus";
import Button from "../components/Button";
import PencilSvg from "../assets/svg/PencilSvg";
import CrossSvg from "../assets/svg/cross";
import Modal from "../components/Modal";
import CreateModal from "../components/CreateModal";
import EditModal from "../components/EditModal";
import CustomAlert from "../components/CustomAlert";

const Shop = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [newShop, setNewShop] = useState({id: Date.now(), name: '', address: ''});
    const [editingShop, setEditingShop] = useState({id: Date.now(), name: '', address: ''});
    const [alertMessage, setAlertMessage] = useState('')
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const dispatch = useDispatch();

    const shops = useSelector((state: any) => state.shop.shops);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setNewShop({id: Date.now(), name: '', address: ''});
    };

    const handleCreateShop = () => {
        dispatch(addShop({...newShop}));
        closeModal();
    };

    const handleRemoveShop = (id: number) => {
        dispatch(removeShop(id));
    };
    const openEditModal = (shop: any) => {
        setEditingShop(shop);
        setIsEditModalOpen(true);
    };

    const closeEditModal = () => {
        setIsEditModalOpen(false);
        setEditingShop({id: 0, name: '', address: ''});
    };

    const handleEdit = () => {
        dispatch(editShop(editingShop));
        closeEditModal();
    };
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>, shopState: any) => {
        const newValue = e.target.value;

        const pattern = /work\s*5/i;

        if (!pattern.test(newValue)) {
            if (shopState === 'newShop') {
                setNewShop({...newShop, name: newValue});
            } else if (shopState === 'editingShop') {
                setEditingShop({...editingShop, name: newValue});
            }
        } else {
            setAlertMessage('Название магазина не может содержать "work 5".');
            setIsAlertVisible(true);
        }
    };

    const handleAddressChange = (e: ChangeEvent<HTMLInputElement>, shopState: any) => {
        const newValue = e.target.value;

        const pattern = /^[a-zA-Z0-9\s.,-]*$/;

        if (pattern.test(newValue)) {
            if (shopState === 'newShop') {
                setNewShop({...newShop, address: newValue});
            } else if (shopState === 'editingShop') {
                setEditingShop({...editingShop, address: newValue});
            }
        } else {
            setAlertMessage('Введите адрес на латинице.');
            setIsAlertVisible(true);
        }
    };
    return (
        <div className='w-full pl-20 pt-6 flex flex-col gap-10'>
            <div>
                <Button onClick={() => openModal()}>
                    <>
                        <Plus/>
                        Создать свой магазин
                    </>
                </Button>
            </div>
            <div>
                <h3 className='text-2xl font-medium'>Управление магазинами</h3>
            </div>
            <div className='w-[1300px] bg-white flex-1'>
                <table className='w-full'>
                    <thead>
                    <tr>
                        <th className='w-72 py-2 px-4 text-left font-medium'>№</th>
                        <th className='w-72 py-2 px-4 text-left font-medium'>Название</th>
                        <th className='w-72 py-2 px-4 text-left font-medium'>Адрес</th>
                        <th className='w-72 py-2 px-4 text-left font-medium'/>
                    </tr>
                    </thead>
                    <tbody>
                    {shops.map((shop: any, index: number) => (
                        <tr key={index} className='border-b'>
                            <td className='w-72py-2 px-4 text-left'>{index + 1}</td>
                            <td className='w-72 py-2 px-4 text-left'>{shop.name}</td>
                            <td className='w-72 py-2 px-4 text-left'>{shop.address}</td>
                            <td className='py-2 px-4 text-left flex gap-3 '>
                                <Button onClick={() => openEditModal(shop)} width={'180px'}>
                                    <>
                                        <PencilSvg/>
                                        Редактировать
                                    </>
                                </Button>
                                <Button onClick={() => handleRemoveShop(shop.id)} width={'180px'}
                                        style={{backgroundColor: '#B1B1B1'}}>
                                    <>
                                        <CrossSvg/>
                                        Удалить
                                    </>
                                </Button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                <CreateModal
                    closeModal={closeModal} handleCreateShop={handleCreateShop}
                    handleNameChange={handleNameChange} handleAddressChange={handleAddressChange}
                    newShop={newShop}
                />
            </Modal>
            <Modal isModalOpen={isEditModalOpen} setIsModalOpen={setIsEditModalOpen}>
                <EditModal
                    closeEditModal={closeEditModal}
                    handleEdit={handleEdit}
                    handleNameChange={handleNameChange}
                    handleAddressChange={handleAddressChange}
                    editingShop={editingShop}
                />
            </Modal>
            {isAlertVisible &&
             <CustomAlert message={alertMessage} onClose={() => setIsAlertVisible(false)} />
            }
        </div>
    );
};

export default Shop;
