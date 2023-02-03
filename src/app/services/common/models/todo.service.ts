import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable, retry } from 'rxjs';
import { Create_Todo } from 'src/app/contracts/create_todo';
import { List_Todo } from 'src/app/contracts/list.todo';
import { Todo } from 'src/app/contracts/todo';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClientService: HttpClientService) { }

  create(todo: Create_Todo, successCallBack?: any, errorCallback?: (errorMessage: string) => void) {
    this.httpClientService.post<Create_Todo>({ controller: "todos" }, todo).subscribe(result => {
      successCallBack();
    });
  }

  async read(page: number = 0, size: number = 5, successCallBack?: () => void, errorCallback?: (errorMessage: string) => void): Promise<{ totalCount: number; todos: List_Todo[] }> {
    const promiseData: Promise<{ totalCount: number; todos: List_Todo[] }> = this.httpClientService.get<{ totalCount: number; todos: List_Todo[] }>({
      controller: "todos",
      queryString: `page=${page}&size=${size}`
    }).toPromise();

    promiseData.then(d => successCallBack()).catch((errorMessage: HttpErrorResponse) => errorCallback(errorMessage.error));
    return await promiseData;
  }

  async delete(id: string) {
    const deleteObservable: Observable<any> = this.httpClientService.delete<any>({
      controller: "todos"
    }, id);

    await firstValueFrom(deleteObservable);
  }
} 
