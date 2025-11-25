import { Breadcrumbs } from '@ui/components/molecules';
import { BlogList } from '@ui/components/organisms';
import { FC } from 'react';

export const BlogPage: FC = () => {
  return (<>
    <Breadcrumbs items={['blog']} />
    <BlogList />
  </>)
}