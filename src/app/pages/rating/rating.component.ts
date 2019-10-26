import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';

export interface PeriodicElement {
  name: string;
  position: number;
  score: number;
  region: string;
}
const Student_DATA: PeriodicElement[] = new Array(30).fill(null).map((v, i) => ({
  name: faker.name.firstName(),
  position: i,
  score: faker.random.number(),
  region: faker.address.country()
}));
const Teacher_DATA: PeriodicElement[] = new Array(30).fill(null).map((v, i) => ({
  name: faker.name.firstName(),
  position: i,
  score: faker.random.number(),
  region: faker.address.country()
}));

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'score', 'region'];
  dataSource: any;
  DATA: any;
  length: any;
  constructor() { }

  ngOnInit() {
    this.DATA = Student_DATA;
    this.length = this.DATA.length;
    this.fiiterData(0);
  }
  fiiterData(page: number) {
    this.dataSource = this.DATA.slice(10 * page, 10 * (page + 1));
  }
  pageEvent(e: any) {
    console.log(e);
    this.fiiterData(e.pageIndex);
  }

  changeData(value: string) {
    this.DATA = value === 'students' ? Student_DATA : Teacher_DATA;
    this.fiiterData(0);
  }

  getStar(position: number ) {
    switch (position) {
      case 0:
        return '★'.repeat(3);
      case 1:
        return '★'.repeat(2);
      case 2:
        return '★'.repeat(1);
      default:
        return '';
    }
  }
}
