import { Component, ViewChild } from '@angular/core';
import { CourseListComponent } from './course-list/course-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'nested';

  @ViewChild('child', { static: false }) courseList!: CourseListComponent;

  studentsFlag: boolean = false;
  coursesFlag: boolean = false;
  homeFlag: boolean = true;

  showHome() {
    this.coursesFlag = false;
    this.studentsFlag = false;
    this.homeFlag = true;
  }
  showCourses() {
    this.studentsFlag = false;
    this.homeFlag = false;
    this.coursesFlag = true;
  }
  showStudents() {
    this.coursesFlag = false;
    this.homeFlag = false;
    this.studentsFlag = true;
  }
}
