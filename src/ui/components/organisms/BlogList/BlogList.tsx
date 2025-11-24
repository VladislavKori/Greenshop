import { FC } from 'react';
import { BlogCard } from '@ui/components/molecules';
import styles from "./style.module.scss";
import ArrowDownIcon from '@ui/assets/icons/arrow-down.svg?react';
import { BlogListMockData } from './BlogList.mock';

export const BlogList: FC = () => {
  return (
    <div className={styles["blog"]}>
      <h2 className={styles["blog-title"]}>Our Blog Posts</h2>

      <span className={styles["blog-list-title"]}>
        Most Popular
      </span>

      <div className={styles["blog-list"]}>
        {BlogListMockData.slice(0, 2).map(post => (
          <BlogCard {...post} type="row" />
        ))}
      </div>

      <button className={styles["blog-more"]}>
        See More <ArrowDownIcon />
      </button>

      <span className={styles["blog-list-title"]}>
        All Posts
      </span>

      <div className={styles["blog-list"]}>
        {BlogListMockData.map(post => (
          <BlogCard {...post} type="row" />
        ))}

      </div>

      <button className={styles["blog-more"]}>
        See More <ArrowDownIcon />
      </button>

    </div>
  )
}
