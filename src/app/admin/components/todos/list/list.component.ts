import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { List_Todo } from 'src/app/contracts/list.todo';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { TodoService } from 'src/app/services/common/models/todo.service';

declare var $: any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private todosService: TodoService, private alertifyService: AlertifyService) {
    super(spinner);
  }

  displayedColumns: string[] = ['name', 'description', 'users', 'departments', 'endtime', 'createdDate', 'edit', 'delete'];

  dataSource: MatTableDataSource<List_Todo> = null;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  async getProducts() {
    this.showSpinner(SpinnerType.BallAtom);
    const allTodos: { totalCount: number; todos: List_Todo[] } = await this.todosService.read(this.paginator ? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5, () => this.hideSpinner(SpinnerType.BallAtom), errorMessage => this.alertifyService.message(errorMessage.toString(), {
      dismissOthers: true,
      delay: 2000,
      messageType: MessageType.Error,
      position: Position.TopRight
    }));
    this.dataSource = new _MatTableDataSource<List_Todo>(allTodos.todos);
    this.paginator.length = allTodos.totalCount;
    // this.dataSource.paginator = this.paginator;
  }

  async ngOnInit() {
    await this.getProducts();
  }

  async pageChanged() {
    await this.getProducts();
  }

  delete(id, event) {
    const img: HTMLImageElement = event.srcElement;
    $(img.parentElement.parentElement).fadeOut(2000);
  }
}