import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule } from '@angular/common/http';
import { AddResourceComponent } from './Resource/add-resource/add-resource.component';
import { UpdateResourceComponent } from './Resource/update-resource/update-resource.component';
import { ResourceDetailsComponent } from './Resource/resource-details/resource-details.component';
import { AssignResourceComponent } from './Assignment/assign-resource/assign-resource.component';
import { StatusFilterPipe } from './Filters/status-filter.pipe';
import { AssignmentsComponent } from './Assignment/assignments/assignments.component';
import { AddMaintechnologyComponent } from './Maintechnology/add-maintechnology/add-maintechnology.component';
import { MainTechnologyComponent } from './Maintechnology/main-technology/main-technology.component';
import { UpdateAssignmentComponent } from './Assignment/update-assignment/update-assignment.component';
import { AssignmentDetailsComponent } from './Assignment/assignment-details/assignment-details.component';
import { ResourceFilterPipe } from './Filters/resource-filter.pipe';
import { AssignmentPipePipe } from './Filters/assignment-pipe.pipe';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AddResourceComponent,
    UpdateResourceComponent,
    ResourceDetailsComponent,
    AssignResourceComponent,
    StatusFilterPipe,
    AssignmentsComponent,
    AddMaintechnologyComponent,
    MainTechnologyComponent,
    UpdateAssignmentComponent,
    AssignmentDetailsComponent,
    ResourceFilterPipe,
    AssignmentPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
