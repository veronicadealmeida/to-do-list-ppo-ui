import { NgModule } from '@angular/core';
// import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { TaskViewComponent } from './task-view/task-view.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'task-view-', component: TaskViewComponent },
  { path: 'task', component: TaskComponent },
];

// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// export const routing: ModuleWithProviders<RouterModule> =
//   RouterModule.forRoot(routes);
