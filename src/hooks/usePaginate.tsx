import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FIRST_PAGE } from '../constants';

const usePaginate = () => {
  const [currentPage, setCurrentPage] = useState(FIRST_PAGE);
  const [, setSearchParams] = useSearchParams();

  const handleUpdatePage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setSearchParams({
      page: pageNumber.toString(),
    });
  };

  const nextPage = () => {
    handleUpdatePage(currentPage + 1);
  };

  const prevPage = () => {
    handleUpdatePage(currentPage - 1);
  };

  return {
    currentPage,
    nextPage,
    prevPage,
  };
};

export default usePaginate;
