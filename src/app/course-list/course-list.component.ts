import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  coursesArr: Array<any> = [
    { number: 292100, name: 'Angular' },
    { number: 292101, name: 'Python' },
    { number: 292102, name: 'Java' },
    { number: 292103, name: 'MongoDB' },
  ];

  selectedCourse: string = '';
  showStudentComponent: Boolean = false;
  
  constructor() {}
  ngOnInit(): void {}

  showAngular(): any {
    this.selectedCourse = 'Angular';
    this.showStudentComponent = true;
  }

  showPython(): any {
    this.selectedCourse = 'Python';
    this.showStudentComponent = true;
  }
  showJava(): any {
    this.selectedCourse = 'Java';
    this.showStudentComponent = true;
  }
  showMongo(): any {
    this.selectedCourse = 'MongoDB';
    this.showStudentComponent = true;
  }
}
