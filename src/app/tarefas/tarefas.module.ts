import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared';
import { ListarTarefasComponent } from './listar';



@NgModule({
  declarations: [
    ListarTarefasComponent
  ],
  imports: [
    CommonModule
  ], providers: [
    TarefaService
  ]
})
export class TarefasModule { }
