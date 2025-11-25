import { FC } from "react";
import { TypographyProps } from "./Typography.types";
import styles from "./style.module.scss";
import clsx from "clsx";

export const Typography: FC<TypographyProps> = (props) => {
    const { 
        children, 
        className, 
        variant = "body", 
        color = "black",
        fontStyle = "normal"
    } = props;

    return (
        <p className={clsx(
            className,
            styles[`variant-${variant}`],
            styles[`color-${color}`],
            styles[`style-${fontStyle}`]
        )}>
            {children}
        </p>
    )
}