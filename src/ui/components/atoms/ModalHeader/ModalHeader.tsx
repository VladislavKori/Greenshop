import { FC } from "react";
import { ModalHeaderProps } from "./ModalHeader.types";
import CloseIcon from '@ui/assets/icons/close.svg?react';
import styles from "./style.module.scss";

export const ModalHeader: FC<ModalHeaderProps> = (props) => {
    const { onClose } = props;

    return (
        <div className={styles["head"]} onClick={onClose}>
            <CloseIcon className={styles["head-icon"]} />
        </div>
    )
}