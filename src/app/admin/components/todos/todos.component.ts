import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Create_Todo } from 'src/app/contracts/create_todo';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner);
  }

  ngOnInit(): void {
    // this.showSpinner(SpinnerType.BallSpinClockwiseFadeRotating);
  }

  @ViewChild(ListComponent) listComponents: ListComponent

  createdTodo(createdTodo: Create_Todo) {
    this.listComponents.getProducts();
  }
}
