import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { HomeComponent } from './ui/components/home/home.component';

const routes: Routes = [
  {
    path: "admin", component: LayoutComponent, children: [
      {
        path: "", component: DashboardComponent
      },
      {
        path: "todos", loadChildren: () => import("./admin/components/todos/todos.module").then
          (module => module.TodosModule)
      },
      {
        path: "user", loadChildren: () => import("./admin/components/user/user.module").then
          (module => module.UserModule)
      }
    ]
  },
  {
    path: "", component: HomeComponent
  },
  {
    path: "todos", loadChildren: () => import("./ui/components/todos/todos.module").then
      (module => module.TodosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
