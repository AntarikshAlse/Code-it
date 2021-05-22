import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from 'src/crud/components/dashboard/dashboard.component';
import { CoursesComponent } from 'src/crud/components/courses/courses.component';
import { InstitutesComponent } from 'src/crud/components/institutes/institutes.component';
import { EnrollmentComponent } from 'src/crud/components/enrollment/enrollment.component';
import { EditComponent } from 'src/crud/components/edit/edit.component';
import { EditCourseComponent } from 'src/crud/crud-courses/edit-course/edit-course.component';
import { AddCourseComponent } from 'src/crud/crud-courses/add-course/add-course.component';
import { AddInstituteComponent } from 'src/crud/crud-institute/add-institute/add-institute.component';
import { EditInstituteComponent } from 'src/crud/crud-institute/edit-institute/edit-institute.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationGuard } from 'src/crud/shared/Auth/authentication.guard';

const routes: Routes = [  
 //{path:"",component:DashboardComponent},
{path:"login",component:LoginComponent},
{path:"dashboard",component:DashboardComponent,canActivate:[AuthenticationGuard]},
{path:"courses",component:CoursesComponent,canActivate:[AuthenticationGuard]},
{path:"institute",component:InstitutesComponent,canActivate:[AuthenticationGuard]},
{path:"enrollment",component:EnrollmentComponent,canActivate:[AuthenticationGuard]},
{path:'edit/:id',component:EditComponent,canActivate:[AuthenticationGuard]},
{path:'edit-courses/:id',component:EditCourseComponent,canActivate:[AuthenticationGuard]},
{path:'add-courses',component:AddCourseComponent,canActivate:[AuthenticationGuard]},
{path:'add-institute',component:AddInstituteComponent,canActivate:[AuthenticationGuard]},
{path:'edit-institute/:id',component:EditInstituteComponent,canActivate:[AuthenticationGuard]},
{ path: "**", redirectTo:'login',pathMatch:'full',
// children:[{path:"**",component:PageNotFoundComponent}] 
}];   

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
