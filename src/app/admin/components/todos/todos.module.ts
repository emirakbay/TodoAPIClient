import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DeleteDirective } from 'src/app/directives/admin/delete.directive';

@NgModule({
  declarations: [
    TodosComponent,
    CreateComponent,
    ListComponent,
    DeleteDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: TodosComponent }
    ]),
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class TodosModule { }
