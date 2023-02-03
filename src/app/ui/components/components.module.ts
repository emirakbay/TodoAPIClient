import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosModule } from './todos/todos.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TodosModule,
    HomeModule,
  ]
})
export class ComponentsModule { }
