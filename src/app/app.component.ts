import { Component } from '@angular/core';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TodoAPIClient';

  constructor(private toastrService: CustomToastrService) { }
}

// $.get("https://localhost:5001/api/Todos", data => {
//   console.log(data);
// })