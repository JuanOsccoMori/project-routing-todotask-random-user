import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

// Desing
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactsDetailPageComponent } from './pages/contacts-detail-page/contacts-detail-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NameCompletePipe } from './pipes/name-complete.pipe';
import { RandomUserComponent } from './components/random-user/random-user.component';
import { RandomContactPageComponent } from './pages/random-contact-page/random-contact-page.component';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';
import { KanbanTasksComponent } from './components/kanban-tasks/kanban-tasks.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    ContactsPageComponent,
    ContactsDetailPageComponent,
    LoginFormComponent,
    NameCompletePipe,
    RandomUserComponent,
    RandomContactPageComponent,
    NavComponent,
    DashboardComponent,
    TasksPageComponent,
    KanbanTasksComponent,
    TaskComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // For mularios reactivos: Reactive forms
    ReactiveFormsModule,
    // Importando el modulo de material
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
