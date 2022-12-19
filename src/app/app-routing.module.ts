import { RandomContactPageComponent } from './pages/random-contact-page/random-contact-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ContactsDetailPageComponent } from './pages/contacts-detail-page/contacts-detail-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomePageComponent,
        canActivate: [ AuthGuard ]
      },
      {
        path: 'contacts',
        component: ContactsPageComponent,
        canActivate: [ AuthGuard ]
      },
      {
        path: 'contacts/:id',
        component: ContactsDetailPageComponent,
        canActivate: [ AuthGuard ]
      },
      {
        path: 'random',
        component: RandomContactPageComponent,
        canActivate: [ AuthGuard ]
      },
      {
        path: 'tasks',
        component: TasksPageComponent,
        canActivate: [ AuthGuard ]
      }
    ]
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
