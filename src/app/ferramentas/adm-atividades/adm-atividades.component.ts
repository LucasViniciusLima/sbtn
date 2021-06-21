import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Atividade } from './atividade.model';


@Component({
  selector: 'app-adm-atividades',
  templateUrl: './adm-atividades.component.html',
  styleUrls: ['./adm-atividades.component.css']
})
export class AdmAtividadesComponent implements OnInit {


  atividadesList: any[] = new Array();

  atividade: Atividade = new Atividade('', '', 2, 2);


  constructor() {

  }

  ngOnInit(): void {
  }

  deleteAtividade(numId:number){
    this.atividadesList.splice(numId,1);
  }

  criarNovaAtividade() {
    if (this.atividade.titulo != '') {
      var atividade = new Atividade(this.atividade.titulo, this.atividade.descricao, this.atividade.urgencia, this.atividade.importancia);
      this.atividadesList.push(atividade);
      this.atividade = new Atividade('','',2,2);
    }    
  }

  getNoToDo() {
    var arr = new Array();

    for (let i = 0; i < this.atividadesList.length; i++) {
      if (this.atividadesList[i].urgencia <= 4 && this.atividadesList[i].importancia <= 4) arr.push({item: this.atividadesList[i], id: i});
    }

    return arr;
  }

  getDelegate(){
    var arr = new Array();

    for (let i = 0; i < this.atividadesList.length; i++) {
      if (this.atividadesList[i].urgencia >= 5 && this.atividadesList[i].importancia <=4) arr.push({item: this.atividadesList[i], id: i});
    }

    return arr;
  }

  getDo(){
    var arr = new Array();

    for (let i = 0; i < this.atividadesList.length; i++) {
      if (this.atividadesList[i].urgencia < 7 && this.atividadesList[i].importancia >= 5) arr.push({item: this.atividadesList[i], id: i});
    }

    return arr;
  }

  getDoNow(){
    var arr = new Array();

    for (let i = 0; i < this.atividadesList.length; i++) {
      if (this.atividadesList[i].urgencia >= 7 && this.atividadesList[i].importancia >= 5) arr.push({item: this.atividadesList[i], id: i});
    }

    return arr;
  }

  deleteItem(id: number){
    this.atividadesList.splice(id,1);
  }

}
