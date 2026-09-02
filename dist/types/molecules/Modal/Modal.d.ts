import React from 'react';
export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: React.ReactNode;
    children: React.ReactNode;
}
declare function Modal({ isOpen, onClose, title, children }: ModalProps): React.JSX.Element | null;
export default Modal;
