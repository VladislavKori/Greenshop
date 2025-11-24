import { CSSProperties, FC } from 'react';
import styles from './style.module.scss';
import { BlogCard } from '@ui/components/molecules';
import { MiniBlogMockData } from './MiniBlog.mock';

export const MiniBlog: FC = () => {
  return (
    <div className={styles["blog"]} >
      <div className={styles["blog-header"]}>
        <h1 className={styles["blog-title"]}>Our Blog Posts</h1>
        <p className={styles["blog-subtitle"]}>
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
      </div>

      <ul className={styles["blog-list"]}>
        {MiniBlogMockData.map(post => (
          <BlogCard {...post} />
        ))}
      </ul>
    </div>
  );
}