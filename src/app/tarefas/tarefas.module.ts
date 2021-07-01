import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TarefaService } from './shared';
import { ListarTarefasComponent } from './listar';


@NgModule({
  declarations: [
    ListarTarefasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ], providers: [
    TarefaService
  ]
})
export class TarefasModule { }
