import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Shoe } from '../../shoe-list.meta';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-shoe-item',
  imports: [DecimalPipe],
  templateUrl: './shoe-item.component.html',
  styleUrl: './shoe-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoeItemComponent {
  readonly shoe = input.required<Shoe>();

  openShoeDetail = output<number>();

  onOpenShoeDetail() {
    this.openShoeDetail.emit(this.shoe().id);
  }
}
