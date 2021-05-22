import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnrollmentComponent } from 'src/crud/components/enrollment/enrollment.component';
import { DashboardComponent } from 'src/crud/components/dashboard/dashboard.component';
import { CoursesComponent } from 'src/crud/components/courses/courses.component';
import { InstitutesComponent } from 'src/crud/components/institutes/institutes.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EditComponent } from 'src/crud/components/edit/edit.component';
import { EditCourseComponent } from 'src/crud/crud-courses/edit-course/edit-course.component';
import { AddCourseComponent } from 'src/crud/crud-courses/add-course/add-course.component';
import { EditInstituteComponent } from 'src/crud/crud-institute/edit-institute/edit-institute.component';
import { AddInstituteComponent } from 'src/crud/crud-institute/add-institute/add-institute.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    EnrollmentComponent,
    DashboardComponent,
    CoursesComponent, 
    InstitutesComponent, EnrollmentComponent,
    PageNotFoundComponent,
    EditComponent,
    EditComponent,
    EditCourseComponent,
    AddCourseComponent,
    EditInstituteComponent,
    AddInstituteComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    OrderModule,
    Ng2SearchPipeModule,
    ModalModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
