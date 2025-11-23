import React from 'react';

import './style.css'

interface IBreadcrumbsProps {
  items: string[];
}

function Breadcrumbs({ items }: IBreadcrumbsProps) {
  return(
    <h1 className="currentpage">
      <span className="currentpage__bold" >Home</span>
      {items.map(item => {
        return ` / ${item}`
      })}
    </h1>
  );
}

export default Breadcrumbs;
