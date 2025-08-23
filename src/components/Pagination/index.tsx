import React from 'react';
import { Button } from 'antd';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div style={{ marginTop: '20px' }}>
      {pages.map((page) => (
        <Button
          key={page}
          onClick={() => onPageChange(page)}
          disabled={currentPage === page}
          style={{ marginRight: 10 }}
        >
          {page}
        </Button>
      ))}
    </div>
  );
};
