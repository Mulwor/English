import { useState } from 'react';

interface initialDataProps {
  key: string;
  english: string;
  russian: string;
}

export const usePaginatedData = (
  initialData: initialDataProps[],
  pagesData: initialDataProps[][],
) => {
  const [data, setData] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (current: number) => {
    setCurrentPage(current);
    setData(pagesData[current - 1] || initialData);
  };

  return { data, currentPage, handlePageChange };
};
