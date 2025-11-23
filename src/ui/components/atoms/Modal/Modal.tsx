import {createPortal} from 'react-dom'
import {motion} from 'framer-motion'
import { ReactNode } from 'react';

const modalRoot = document.querySelector('#modal-root');

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

interface IModalProps {
  children: ReactNode
}

function Modal({children}: IModalProps) {
  return createPortal( (
    <motion.div
      className="modal__bg-blur"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div className='modal' variants={item}>
        {children}
      </motion.div>
    </motion.div>
  ), modalRoot!)
}

export default Modal