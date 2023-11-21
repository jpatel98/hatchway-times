export const DOTS = "...";

function usePagination({ currentPage, totalCount, pageSize }) {
  const totalPages = Math.ceil(totalCount / pageSize);
  if (totalPages > 4) {
    if (currentPage === 1 || currentPage === 2) {
      return [1, 2, 3, DOTS, totalPages];
    } else if (currentPage === totalPages || currentPage === totalPages - 1) {
      return [1, DOTS, totalPages - 2, totalPages - 1, totalPages];
    }
    return [
      1,
      DOTS,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      DOTS,
      totalPages,
    ];
  } else if (totalPages > 3) {
    return [1, 2, 3, 4];
  } else if (totalPages > 2) {
    return [1, 2, 3];
  } else if (totalPages > 1) {
    return [1, 2];
  } else {
    return [1];
  }
}

export default usePagination;
