import React from 'react';
import { Pagination } from 'react-bootstrap';

import { createPages } from '../../utils/createPages';

import type { FC } from 'react';
import type { IPaginationComponent } from './types';

export const PaginationComponent: FC<IPaginationComponent> = ({
  totalCount,
  currentPage,
  onClickSelectedPage,
  onClickFirstPage,
  onClickLastPage,
  onClickNextPage,
  onClickPrevPage,
}) => {
  const pages: number[] = [];
  const qtyPages = Math.ceil(totalCount / 8);
  createPages(pages, qtyPages, currentPage);

  return (
    <div>
      <Pagination>
        <Pagination.First
          disabled={currentPage === 1}
          onClick={onClickFirstPage}
        />
        <Pagination.Prev
          disabled={currentPage === 1}
          onClick={onClickPrevPage}
        />

        {pages.map(page => (
          <Pagination.Item
            key={page}
            active={page === currentPage}
            onClick={() => onClickSelectedPage(page)}
          >
            {page}
          </Pagination.Item>
        ))}

        <Pagination.Next
          disabled={currentPage === qtyPages}
          onClick={onClickNextPage}
        />
        <Pagination.Last
          disabled={currentPage === qtyPages}
          onClick={onClickLastPage}
        />
      </Pagination>
    </div>
  );
};
