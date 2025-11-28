import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FC } from 'react';
import { ModalProps } from './Modal.types';
import styles from "./style.module.scss";
import clsx from 'clsx';

const modalRoot = document.querySelector<HTMLDivElement>('#modal-root')!;

export const Modal: FC<ModalProps> = (props) => {
  const { 
    isOpen, 
    onClose, 
    children, 
    maxWidth,
    fullScreen
  } = props;

  return createPortal((
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className={styles["modal-wrapper"]}>
          <motion.div
            onClick={onClose}
            className={styles["modal-overlay"]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <div
            className={clsx(styles["modal-container"], {
              [styles["modal-container-full-screen"]]: fullScreen,
            })}
            style={{ maxWidth: maxWidth }}
            onClick={onClose}
          >
            <motion.div
              className={clsx(styles["modal-content"], {
                [styles["modal-container-full-screen"]]: fullScreen,
              })}
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              {children}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  ), modalRoot)
}