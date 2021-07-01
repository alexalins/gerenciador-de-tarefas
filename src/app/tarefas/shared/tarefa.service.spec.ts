import { TestBed } from '@angular/core/testing';
import { Tarefa } from './tarefa.model';

import { TarefaService } from './tarefa.service';

describe('TarefaService', () => {
  let service: TarefaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarefaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve garatir que o localSotarage ta vazio', () => {
    let tarefas: Tarefa[] = service.listarTodos();
    expect(tarefas).toBeNull;
  });

  it('Deve garatir que salvou tarefa', () => {
    let tarefa: Tarefa = new Tarefa();
    tarefa.nome = "Meu teste deverar passar aqui";
    tarefa.concluida = false;
    service.cadastrar(tarefa);
    let tarefas: Tarefa[] = service.listarTodos();
    expect(tarefas.length > 1).toBeTrue;
  });

  it('Deve garatir que salvou tarefa 2', () => {
    let tarefa: Tarefa = new Tarefa();
    tarefa.nome = "Meu teste 2";
    tarefa.concluida = true;
    service.cadastrar(tarefa);
    let tarefas: Tarefa[] = service.listarTodos();
    expect(tarefas.length > 1).toBeTrue;
  });

  it('Deve garatir que limpa o localSotarage', () => {
    service.apagarTudo();
    let tarefas: Tarefa[] = service.listarTodos();
    expect(tarefas).toBeNull;
  });
});
