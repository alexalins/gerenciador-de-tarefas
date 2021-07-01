import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  /**
   * retorna todas as tarefas em json
   * 
   * @returns lista de tarefas em json
   */
  listarTodos(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  /**
   * salva a nova tarefa no localStorage
   * 
   * @param tarefa nova tarefa
   */
  cadastrar(tarefa: Tarefa): void {
    //pega as tarefas
    const tarefas = this.listarTodos();
    //seta a data atual como id
    tarefa.id = new Date().getTime();
    //salva no array de tarefas
    tarefas.push(tarefa);
    //tranforma em json e salva
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  /**
   * Busca tarefa desejada passando ID
   * 
   * @param id Id da tarefa
   * @returns tarefa desejada
   */
  buscarPorId(id: number): Tarefa {
    //busca todas as tarefas
    const tarefas : Tarefa[] = this.listarTodos();
    // se estiver uma tarefa cm o msm id retorna
    return tarefas.find(tarefa => tarefa.id === id);
  }

  /**
   * Atualiza o objeto da lista
   * 
   * @param tarefa 
   */
  atualizar(tarefa: Tarefa): void {
    //busca todas as tarefas
    const tarefas : Tarefa[] = this.listarTodos();
    //interação
    tarefas.forEach( (obj, index, objs) => {
      //se achar um objeto com o msm id
      if(tarefa.id === obj.id) {
        //seta o objeto novo no antigo de acordo com o index
        objs[index] = tarefa;
      }
    });
    //atualiza o localStorage
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  /**
   * Remove a tarefa do id passado do localStorage
   * 
   * @param id Id da tarefa
   */
  remover(id: number): void {
    //busca todas as tarefas
    //let pois vamos mudar o valor
    let tarefas : Tarefa[] = this.listarTodos();
    //filtro as q nao tem esse id
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    //atualiza o localStorage
    localStorage['tarefa'] = JSON.stringify(tarefas);
  }

  /**
   * alterando o status de concluida da tarefa
   * 
   * @param id id da tarefa
   */
  alterarStatus(id: number): void {
    //busca todas as tarefas
    const tarefas: Tarefa[] = this.listarTodos();
    //interação
    tarefas.forEach((obj, index, objs) => {
      //se achar um objeto com o msm id
      if(obj.id === id) {
        //inverte o status
        objs[index].concluida = !obj.concluida;
      }
    });
    //atualiza o localStorage
    localStorage['tarefa'] = JSON.stringify(tarefas);
  }
}
