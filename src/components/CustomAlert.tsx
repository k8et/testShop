import React, { useEffect } from 'react';

interface CustomAlertProps {
    message: string;
    onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ message, onClose }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            onClose();
        }, 3000);

        return () => clearTimeout(timeout);
    }, [onClose]);

    return (
        <div className="fixed bottom-4  right-4 bg-green-500 text-white p-4 rounded shadow-md">
            {message}
        </div>
    );
};

export default CustomAlert;