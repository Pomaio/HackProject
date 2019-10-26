import { Component, OnInit } from '@angular/core';

const data = [
  {title: 'Введение', description: 'Первые шаги. Тест проверки знаний'},
  {title: 'От простого к сложному', description: 'Вы начинаете развитие.......'},
  {title: 'Постичь дзен', description: 'Для вас нет ничего невозможного'}];

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

export class TasksComponent implements OnInit {

  topics: object[];
  constructor() { }

  ngOnInit() {
    this.topics = data;
  }

}
