import { ReactNode } from "react";

export type TypographyVariants = "h1" | "h2" | "body";

export type TypographyColors = "black" | "gray" | "primary";

export interface TypographyProps {
    children: ReactNode | string;
    className?: string;
    variant?: TypographyVariants;
    color?: TypographyColors;
};