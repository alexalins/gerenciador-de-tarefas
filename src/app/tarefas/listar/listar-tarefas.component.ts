import { Component, OnInit } from '@angular/core';
import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.css']
})
export class ListarTarefasComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  remover($event: any, tarefa:Tarefa): void {
    //tirando a atualizacao ao clicar
    $event.preventDefault();
    //alert
    if(confirm('Deseja remover a tarefa "'+ tarefa.nome + '" ?')) {
      //removendo
      this.tarefaService.remover(tarefa.id);
      //atualizando lista de tarefas
      this.tarefas = this.listarTodos();
    }
  }

}
