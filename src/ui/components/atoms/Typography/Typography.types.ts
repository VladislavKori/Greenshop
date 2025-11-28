import { ReactNode } from "react";

export type TypographyVariants = "h1" | "h2" | "h3" | "p" | "body";

export type TypographyColors = "black" | "gray" | "primary";

export type TypographyStyles = "normal" | "italic" | "bold" | "boldItalic";

export interface TypographyProps {
    children: ReactNode | string;
    className?: string;
    variant?: TypographyVariants;
    fontStyle?: TypographyStyles;
    color?: TypographyColors;
};