import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './Project/projects/projects.component';
import { UpdateProjectComponent } from './Project/update-project/update-project.component';
import { ProjectDetailsComponent } from './Project/project-details/project-details.component';
import { ResourcesComponent } from './Resource/resources/resources.component';
import { AddProjectComponent } from './Project/add-project/add-project.component';
import { UpdateResourceComponent } from './Resource/update-resource/update-resource.component';
import { ResourceDetailsComponent } from './Resource/resource-details/resource-details.component';
import { AddResourceComponent } from './Resource/add-resource/add-resource.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AssignResourceComponent } from './Assignment/assign-resource/assign-resource.component';
import { AssignmentsComponent } from './Assignment/assignments/assignments.component';
import { MainTechnologyComponent } from './Maintechnology/main-technology/main-technology.component';
import { AddMaintechnologyComponent } from './Maintechnology/add-maintechnology/add-maintechnology.component';
import { AssignmentDetailsComponent } from './Assignment/assignment-details/assignment-details.component';
import { UpdateAssignmentComponent } from './Assignment/update-assignment/update-assignment.component';




const routes: Routes = [
  { path: '', redirectTo: '/project', pathMatch: 'full' },
  { path: 'project', component: ProjectsComponent },
  { path: 'maintechnologies', component: MainTechnologyComponent },
  { path: 'addmaintechnology', component: AddMaintechnologyComponent },
  { path: 'updateproject/:id', component: UpdateProjectComponent },
  { path: 'assignresource', component: AssignResourceComponent },
  { path: 'project/:id', component: ProjectDetailsComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'addproject', component: AddProjectComponent },
  { path: 'updateresource/:id', component: UpdateResourceComponent },
  { path: 'resource/:id', component: ResourceDetailsComponent },
  { path: 'addresource', component: AddResourceComponent },
  { path: 'assignments', component: AssignmentsComponent },
  { path: 'updateassignment/:id', component: UpdateAssignmentComponent },
  { path: 'assignment/:id', component: AssignmentDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// tslint:disable-next-line: max-line-length
export const routingComponents = [ProjectsComponent, ProjectDetailsComponent, ResourcesComponent,
  PageNotFoundComponent, AddProjectComponent, UpdateProjectComponent, AddResourceComponent, UpdateResourceComponent,
  ResourceDetailsComponent, AssignResourceComponent, AssignmentsComponent, MainTechnologyComponent, AssignmentDetailsComponent,
  UpdateAssignmentComponent
];

