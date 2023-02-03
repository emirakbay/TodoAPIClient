import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastr: ToastrService) { }

  message(message: string, title: string, messageType: ToastrMessageType, position: ToastrPosition) {
    this.toastr[messageType](message, title, { positionClass: position });
  }
}

export enum ToastrMessageType {
  Success = "success",
  Error = "error",
  Info = "info",
  Warning = "warning"
}

export enum ToastrPosition {
  TopLeft = "toast-top-left",
  TopRight = "toast-top-right",
  TopFullWidth = "toast-top-fullwidth",
  TopCenter = "toast-top-center",
  BottomRight = "toast-bottom-right",
  BottomLeft = "toast-bottom-left",
  BottomCenter = "toast-bottom-center",
  BottomFullWidth = "toast-bottom-fullwidth"
}