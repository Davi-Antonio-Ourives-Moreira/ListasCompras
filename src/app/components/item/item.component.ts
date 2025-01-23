import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Item } from '../../interface/item';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit, OnChanges{
  @Input() item!: Item;

  @Output() emitirItemEditar: EventEmitter<Item> = new EventEmitter<Item>();

  constructor(){}

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  editarItem(){
    this.emitirItemEditar.emit(this.item);
  }

}
