import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css'],
})
export class StudentsTableComponent implements OnInit {
  @Input() selectedCourse: string = '';
  studentsList: any = [
    { id: '01', name: 'Idan Guy', course: 'Angular' },
    { id: '02', name: 'Sharon Tal', course: 'Angular' },
    { id: '03', name: 'Yuval Shir', course: 'Python' },
    { id: '04', name: 'Adam Gil', course: 'Java' },
    { id: '05', name: 'Amir Ravve', course: 'Python' },
    { id: '06', name: 'Ravit Levi', course: 'MongoDB' },
    { id: '07', name: 'Liav Cohen', course: 'Java' },
    { id: '08', name: 'Yossi Ben', course: 'Angular' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
