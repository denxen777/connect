export const createPages = (
  pages: number[],
  pagesCount: number,
  currentPage: number
) => {
  if (pagesCount > 5) {
    if (currentPage > 4) {
      for (let i = currentPage - 3; i <= currentPage + 1; i++) {
        pages.push(i);
        if (i === pagesCount) break;
      }
    } else {
      for (let i = 1; i <= 5; i++) {
        pages.push(i);
        if (i === pagesCount) break;
      }
    }
  } else {
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
  }
};
