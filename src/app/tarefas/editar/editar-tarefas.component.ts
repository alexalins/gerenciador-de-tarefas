import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-editar-tarefas',
  templateUrl: './editar-tarefas.component.html',
  styleUrls: ['./editar-tarefas.component.css']
})
export class EditarTarefasComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm; //para criar uma referencia
  tarefa: Tarefa;

  constructor(
    private tarefaService: TarefaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //pegando o id que passa na rota
    // + para passar pra numerico
    const id = +this.route.snapshot.params["id"];
    //bucando tarefa
    this.tarefa = this.tarefaService.buscarPorId(id);
  }

  atualizar(): void {
    //se for valido
    if(this.formTarefa.form.valid) {
      //atualiza a tarefa
      this.tarefaService.atualizar(this.tarefa);
      //muda a rota
      this.router.navigate(['/tarefas']);
    }
  }
}
