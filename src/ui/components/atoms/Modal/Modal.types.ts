import { ReactNode } from "react";

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    maxWidth?: string;
    fullScreen?: boolean;
}