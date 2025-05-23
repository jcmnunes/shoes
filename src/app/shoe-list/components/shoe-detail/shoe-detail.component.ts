import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  input,
  output,
  viewChild,
} from '@angular/core';
import { Shoe } from '../../shoe-list.meta';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-shoe-detail',
  imports: [DecimalPipe],
  templateUrl: './shoe-detail.component.html',
  styleUrl: './shoe-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoeDetailComponent {
  readonly isOpen = input.required<boolean>();
  readonly shoe = input.required<Shoe | null>();

  closeShoeDetail = output();

  dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

  constructor() {
    effect(() => {
      if (this.isOpen()) {
        this.openDialog();
      } else {
        this.closeDialog();
      }
    });
  }

  openDialog() {
    this.dialog().nativeElement.showModal();
  }

  closeDialog() {
    this.dialog().nativeElement.close();
  }

  onRequestClose() {
    this.closeShoeDetail.emit();
  }
}
