import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Create_Todo } from 'src/app/contracts/create_todo';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { TodoService } from 'src/app/services/common/models/todo.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private todoService: TodoService, private alertify: AlertifyService) {
    super(spinner);
  }

  departments = new FormControl('');
  departmentList: string[] = ['Engineering', 'Design', 'Test'];

  users = new FormControl('');
  usersList: string[] = ['emirakbay', "ahmetdag"];

  selectedUsers;
  selectedDepartments;

  ngOnInit(): void {
  }

  @Output() createdProduct: EventEmitter<Create_Todo> = new EventEmitter();

  create(name: HTMLInputElement, desc: HTMLInputElement, dept: string[], user: string[], date: HTMLInputElement): void {
    this.showSpinner(SpinnerType.BallSpinClockwiseFadeRotating);
    const create_todo: Create_Todo = new Create_Todo();
    create_todo.departments = [];
    create_todo.users = [];
    create_todo.name = name.value;
    create_todo.description = desc.value;
    dept.forEach(element => {
      create_todo.departments.push(element);
    });
    user.forEach(element => {
      create_todo.users.push(element);
    });
    create_todo.endtime = new Date(date.value);

    this.todoService.create(create_todo, () => {
      this.hideSpinner(SpinnerType.BallSpinClockwiseFadeRotating);
      this.alertify.message("Todo başarıyla eklenmiştir.", {
        dismissOthers: true,
        messageType: MessageType.Success,
        position: Position.TopRight
      });
      this.createdProduct.emit(create_todo);
    }, errorMessage => {
      this.alertify.message(errorMessage, {
        dismissOthers: true,
        messageType: MessageType.Error
      })
    });
  }
  // departmentValue: DepartmentValue[] = [
  //   { value: 'engineering-1', viewValue: 'Engineering' },
  //   { value: 'design-1', viewValue: 'Design' },
  //   { value: 'test-1', viewValue: 'Test' },
  // ];
}
