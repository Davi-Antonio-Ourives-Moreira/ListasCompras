import { Injectable } from '@angular/core';
import { Item } from '../interface/item';

@Injectable({
  providedIn: 'root'
})
export class ListaComprasServiceService {

  private listaDeCompra: Item[] = [
    {
      "id": 1,
      "nome": "Queijo prato",
      "data": "Segunda-feira (31/10/2022) às 08:30",
      "comprado": false
    },
    {
      "id": 2,
      "nome": "Leite integral",
      "data": "Segunda-feira (31/10/2022) às 08:30",
      "comprado": false
    },
    {
      "id": 3,
      "nome": "Mamão papaia",
      "data": "Segunda-feira (31/10/2022) às 08:30",
      "comprado": true
    },
  ]

  constructor() {
    console.log('Instanciando dependências necessárias para o serviço.');
  }

  getListaDeCompra(){
    return this.listaDeCompra;
  }

  criarLista(nomeItem: string, data: Date){
    const criarId = Math.floor(Math.random() * 1000000);

    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']

    const diaSemana = diasSemana[data.getDay()];

    const dia = data.getDate();
    const mes = Number(data.getMonth())+1;
    const ano = data.getFullYear();

    const hora = data.getHours();
    const minutos = data.getMinutes();

    const dataFormatada = (mes < 10) ?  `${diaSemana} (${dia}/0${mes}/${ano}) às ${hora}:${minutos}` : `${diaSemana} (${dia}/${mes}/${ano}) às ${hora}:${minutos}`;

    const item: Item = {
      id: criarId,
      nome: nomeItem,
      data: dataFormatada,
      comprado: false
    }

    return item
  }

  adicionarItemLista(nomeItem: string){
    const dataAtual = new Date();

    const item = this.criarLista(nomeItem, dataAtual);

    this.listaDeCompra.push(item);
  }

  editarItemLista(itemAntigo: Item, nomeEditadoItem: string){
    const itemEditado: Item =  {
      id: itemAntigo.id,
      nome: nomeEditadoItem,
      data: itemAntigo.data,
      comprado: itemAntigo.comprado
    }

    const id = itemAntigo.id;

    this.listaDeCompra.splice(Number(id)-1, 1, itemEditado);
  }
}
