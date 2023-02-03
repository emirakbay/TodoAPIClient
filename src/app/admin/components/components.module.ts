import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosModule } from './todos/todos.module';
import { UserModule } from './user/user.module';
import { DashboardModule } from './dashboard/dashboard.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TodosModule,
    UserModule,
    DashboardModule
  ]
})
export class ComponentsModule { }
