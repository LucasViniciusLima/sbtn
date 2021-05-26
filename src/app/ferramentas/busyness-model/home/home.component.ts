import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/store.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'business-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeBusynessComponent implements OnInit {

  itens: any[] = [
    {
      icone: '../../../assets/parceria.svg',
      titulo: 'Parcerias Principais',
      descricao: 'Rede de Fornecedores e parceiros que ajudam a sua empresa funcionar.',
      subitens: []
    },
    {
      icone: '../../../assets/tarefa.svg',
      titulo: 'Atividades Principais',
      descricao: 'Ações importantes que sua empresa deve realizar para fazer seu Modelo de Negócios funcionar.',
      subitens: []
    },
    {
      icone: '../../../assets/grafico-de-barras.svg',
      titulo: 'Recursos Principais',
      descricao: 'Recursos mais importantes exigidos para fazer o Modelo de Negócios funcionar',
      subitens: []
    },
    {
      icone: '../../../assets/valor.svg',
      titulo: 'Proposta de Valor',
      descricao: 'Qual seu pacote de produtos e serviços e o valor que ele possui para os clientes',
      subitens: []
    },
    {
      icone: '../../../assets/agente-de-atendimento-ao-cliente.svg',
      titulo: 'Relacionamento com o Cliente',
      descricao: 'Tipos de relação que uma empresa estabelece com Clientes para conquistá-los e mantê-los',
      subitens: []
    },
    {
      icone: '../../../assets/midia-social.svg',
      titulo: 'Canais',
      descricao: 'Como sua empresa se comunica e alcança seus Clientes para entregar sua Proposta de Valor',
      subitens: []
    },
    {
      icone: '../../../assets/engajamento-da-marca.svg',
      titulo: 'Segmento de Clientes',
      descricao: 'Quem são os Clientes que você pretende atender? Eles tem um perfil específico? Como eles estão agrupados? Onde estão localizados?',
      subitens: []
    },


    {
      icone: '../../../assets/aplicativo-de-planilha.svg',
      titulo: 'Estruturas de Custos',
      descricao: 'Todos os custos envolvidos na operação do seu Modelo de Negócios',
      subitens: []
    },

    {
      icone: '../../../assets/bolsa-de-dinheiro.svg',
      titulo: 'Receitas',
      descricao: 'Dinheiro que a empresa gera Quanto e como você vai receber dos clientes?',
      subitens: []
    },
  ];


  blocos: any[] = [
    { estilo: 'success', titulo: 'COMO?' },
    { estilo: 'danger', titulo: 'O QUE?' },
    { estilo: 'primary', titulo: 'PARA QUEM?' },
    { estilo: 'warning', titulo: 'QUANTO?' },
  ];


  constructor(private router: Router, private store: StoreService) {
    const nav = this.router.getCurrentNavigation();
    if(nav.extras.state != undefined) this.email = nav.extras.state.email;
    else this.router.navigateByUrl('/login');
  }

  subItens: any;
  email: string = '';

  ngOnInit(): void {
    this.subItens = this.store.getAllSubItensBusinessModel(this.email).then(subitens => {
      var sub = subitens as any;
      if(sub == undefined) this.store.createNewUserBusinessModel(this.email);
      else {
        this.atribuition(sub.sub00,0);
        this.atribuition(sub.sub01,1);
        this.atribuition(sub.sub02,2);
        this.atribuition(sub.sub03,3);
        this.atribuition(sub.sub04,4);
        this.atribuition(sub.sub05,5);
        this.atribuition(sub.sub06,6);
        this.atribuition(sub.sub07,7);
        this.atribuition(sub.sub08,8);
      }      
    });    
  }

  atribuition(item: any, id: number){
    if(item != undefined){
      this.itens[id].subitens = item;
    }
  }

  getIcon(id: number) {
    return this.itens[id].icone;
  }

  getTitulo(id: number) {
    return this.itens[id].titulo;
  }

  getDescricao(id: number) {
    return this.itens[id].descricao;
  }
  getSubItens(id: number) {
    return this.itens[id].subitens;
  }

  btnAction(id: number) {
    var item = this.itens[id];
    var bloco = this.getBlockById(id);
    this.router.navigateByUrl('/businessmodel/editar', {
      state: { id: id, item: item, bloco: bloco, email: this.email }
    });
  }

  getBlockById(id: number) {
    if (id < 0) return;
    if (id < 3) return this.blocos[0];
    if (id == 3) return this.blocos[1];
    if (id < 7) return this.blocos[2];
    else return this.blocos[3];
  }
  imprimir(){
    window.print();
  }
}
