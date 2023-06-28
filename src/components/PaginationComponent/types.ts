export interface IPaginationComponent {
  totalCount: number;
  currentPage: number;
  onClickSelectedPage: (page: number) => void;
  onClickFirstPage: () => void;
  onClickLastPage: () => void;
  onClickNextPage: () => void;
  onClickPrevPage: () => void;
}
