import { Injectable } from '@angular/core';
declare var alertify: any;

@Injectable({
  providedIn: 'root'
})

export class AlertifyService {

  constructor() { }

  // message(message: string, messageType: MessageType, position: Position, delay: number = 3, dismissOthers: boolean = false) {
  //   alertify.set('notifier', 'delay', delay);
  //   alertify.set('notifier', 'position', position);
  //   const msg = alertify[messageType](message);
  //   if (dismissOthers) {
  //     msg.dismissOthers();
  //   }
  // }
  
  message(message: string, options: Partial<AlertifyOptions>) {
    alertify.set('notifier', 'delay', options.delay);
    alertify.set('notifier', 'position', options.position);
    const msg = alertify[options.messageType](message);
    if (options.dismissOthers) {
      msg.dismissOthers();
    }
  }

  dismiss() {
    alertify.dismissAll();
  }
}

export class AlertifyOptions {
  messageType: MessageType = MessageType.Message;
  position: Position = Position.BottomLeft;
  delay: number = 5;
  dismissOthers: boolean = false;
}

export enum MessageType {
  Message = "message",
  Error = "error",
  Success = "success",
  Notify = "notify",
  Warning = "warning"
}

export enum Position {
  TopCenter = "top-center",
  TopRight = "top-right",
  TopLeft = "top-left",
  BottomRight = "bottom-right",
  BottomCenter = "bottom-center",
  BottomLeft = "bottom-left",
}