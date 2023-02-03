import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { TodoService } from 'src/app/services/common/models/todo.service';

declare var $: any;

@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {
  constructor(private spinner: NgxSpinnerService, private element: ElementRef, private _renderer: Renderer2, private productService: TodoService) {
    const img = _renderer.createElement("img");
    img.setAttribute("src", "../../../../../assets/282471_cross_remove_delete_icon (1).png");
    img.setAttribute("style", "cursor: pointer;");
    img.width = 25;
    img.height = 25;
    _renderer.appendChild(element.nativeElement, img);
  }

  @Input() id: string;
  @Output() callback: EventEmitter<any> = new EventEmitter;

  @HostListener("click")
  async onClick() {
    this.spinner.show(SpinnerType.BallAtom);
    const td: HTMLTableCellElement = this.element.nativeElement;
    await this.productService.delete(this.id);
    $(td.parentElement).fadeOut(2000, () => {
      this.callback.emit();
    });
  }
}