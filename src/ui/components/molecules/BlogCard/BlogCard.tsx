import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import { BlogCardProps } from "./BlogCard.types";
import ArrowRightIcon from "@ui/assets/icons/arrow-right.svg?react";
import { getMonthDayFromDate } from "./BlogCard.utils";
import clsx from "clsx";

export const BlogCard: FC<BlogCardProps> = (props) => {
    const { id, preview, createdAt, description, readTimeMin, title, type = "card" } = props;

    return (
        <div className={clsx(
            styles["card"],
            type === "row" && styles["card-row"]
        )}>
            <div className={styles["card-preview"]}>
                <img src={preview} alt="preview" />
            </div>

            <div className={styles["card-info"]}>
                <p className={styles["card-time"]}>
                    {getMonthDayFromDate(createdAt)} I Чтение на {readTimeMin} минут
                </p>
                <h1 className={styles["card-title"]}>
                    {title}
                </h1>
                <p className={styles["card-description"]}>
                    {description}
                </p>

                <Link className={styles["card-link"]} to={`/blog/${id}`}>
                    <p className={styles["card-link-text"]}>Read More</p>
                    <ArrowRightIcon className={styles["card-link-arrow"]} />
                </Link>
            </div>
        </div>
    )
}