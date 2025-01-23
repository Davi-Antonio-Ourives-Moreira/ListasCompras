import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ListaComprasServiceService } from '../../service/lista-compras-service.service';
import { Item } from '../../interface/item';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent implements OnInit, OnChanges {
  valorItem!: string;

  @Input() itemEditar!: Item;

  editando = false;

  textoBotao = 'Salvar item';

  constructor(
    private service: ListaComprasServiceService
  ){}

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['itemEditar'].firstChange){
      this.editando = true;
      this.textoBotao = "Editar item";
      this.valorItem = this.itemEditar.nome;
    }
  }

  adicionarItem(){
    this.service.adicionarItemLista(this.valorItem);
    this.limparCampo();
  }

  editarItem(){
    this.service.editarItemLista(this.itemEditar, this.valorItem);
    this.limparCampo()
  }

  limparCampo(){
    this.editando = false;
    this.textoBotao = 'Salvar item';

    this.valorItem = '';
  }
}
