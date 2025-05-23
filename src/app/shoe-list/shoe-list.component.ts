import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { Shoe, SHOE_LIST } from './shoe-list.meta';
import { ShoeItemComponent } from './components/shoe-item/shoe-item.component';
import { ShoeDetailComponent } from './components/shoe-detail/shoe-detail.component';

@Component({
  selector: 'app-shoes-list',
  imports: [ShoeItemComponent, ShoeDetailComponent],
  templateUrl: './shoe-list.component.html',
  styleUrl: './shoe-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoeListComponent {
  shoes = signal<Shoe[]>(SHOE_LIST);
  selectedShoeId = signal<number | null>(null);

  selectedShoe = computed(() => {
    const id = this.selectedShoeId();

    if (id === null) {
      return null;
    }

    return this.shoes().find((shoe) => shoe.id === id) ?? null;
  })

  onShoeDetailsOpen(id: number) {
    this.selectedShoeId.set(id);
  }

  onShoeDetailsClose() {
    this.selectedShoeId.set(null);
  }
}
