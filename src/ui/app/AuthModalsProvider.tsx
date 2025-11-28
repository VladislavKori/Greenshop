import type { FC, ReactNode } from "react";
import { useDispatch } from "react-redux";
import { changeModalState } from "@application/state/authModalSlice";
import { useAppSelector } from "@application/store";
import { Modal, ModalHeader } from "@ui/components/atoms";
import { LoginForm, RegisterForm } from "@ui/components/molecules";

export const AuthModalsProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const modalState = useAppSelector(state => state.authModals.modalState)
    const dispatch = useDispatch();
    return (<>
        <Modal
            isOpen={modalState === "login"}
            onClose={() => dispatch(changeModalState("wait"))}
            maxWidth="500px"
        >
            <ModalHeader onClose={() => dispatch(changeModalState("wait"))} />
            <LoginForm
                onChangeForm={() => dispatch(changeModalState("register"))}
                onClose={() => dispatch(changeModalState("wait"))}
            />
        </Modal>

        <Modal
            isOpen={modalState === "register"}
            onClose={() => dispatch(changeModalState("wait"))}
            maxWidth="500px"
        >
            <ModalHeader onClose={() => dispatch(changeModalState("wait"))} />
            <RegisterForm
                onChangeForm={() => dispatch(changeModalState("login"))}
                onClose={() => dispatch(changeModalState("wait"))}
            />
        </Modal>

        {children}
    </>)
}