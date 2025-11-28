import { forwardRef } from "react";
import styles from "./style.module.scss";
import { ButtonProps } from "./Button.types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((
    {
        children
    },
    ref,
) => {

    return (
        <button
            className={styles["button"]}
            ref={ref}
        >
            {children}
        </button>
    )
})