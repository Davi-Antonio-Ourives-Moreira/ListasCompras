import { Component, OnInit } from '@angular/core';
import { InputComponent } from './components/input/input.component';
import { Item } from './interface/item';
import { ListaComprasServiceService } from './service/lista-compras-service.service';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './components/item/item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputComponent, CommonModule, ItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ListasCompras';

  listasCompras!: Array<Item>;

  itemEditar!: Item;

  constructor(
    private service: ListaComprasServiceService
  ){}

  ngOnInit(): void {
      this.listasCompras = this.service.getListaDeCompra()
  }

  editarItem(ev: Item){
    this.itemEditar = ev;
  }
}
