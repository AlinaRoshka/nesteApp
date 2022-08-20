import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { StudentsTableComponent } from './students-table/students-table.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StudentsTableComponent,
    FooterComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
