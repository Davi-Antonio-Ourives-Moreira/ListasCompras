import { Component, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Item } from '../../interface/item';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { Console } from 'node:console';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy{
  @Input() item!: Item;

  @Output() emitirItemEditar: EventEmitter<Item> = new EventEmitter<Item>();
  @Output() emitirIdDeletar: EventEmitter<Number> = new EventEmitter<Number>()

  constructor(){}

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnDestroy(): void {
      console.log("item excluído!");
  }

  editarItem(){
    this.emitirItemEditar.emit(this.item);
  }

  deletarItem(){
    this.emitirIdDeletar.emit(Number(this.item.id));
  }

  atualizarCheckItem(){
    if (this.item.comprado == true){
      this.item.comprado = false;
    } else{
      this.item.comprado = true;
    }
  }

}
