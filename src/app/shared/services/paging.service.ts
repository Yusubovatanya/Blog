import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagingService {
  totalResults: number;
  currentPage = 0;
  itemsOnPage: number;
  endPage: number;
  startPage = 0;
  lastPage: number;

  constructor() { }

  initPaging(): void {
    this.currentPage = 0;
    this.endPage = 0;
    this.startPage = 0;
    this.lastPage = 0;
  }

  setInitialParametersPaging(itemsOnPage: number, totalResults: number): void {
    this.itemsOnPage = itemsOnPage;
    this.totalResults = totalResults;
  }

  identLastPageService(): void {
    this.lastPage = Math.ceil(this.totalResults / this.itemsOnPage);
  }

  isLastPage(): boolean {
    if (this.lastPage === this.currentPage) {
      return true;
    } else {
      return false;
    }
  }

  identStartEndPage(): void {
    this.startPage = this.itemsOnPage * this.currentPage;
    this.endPage = this.itemsOnPage + this.startPage;
    this.currentPage++;
  }
}
