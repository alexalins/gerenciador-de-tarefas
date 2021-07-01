import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarefasRoutes } from './tarefas';

export const routes: Routes = [
  //sentado um padrao
  {
    path: '',
    redirectTo: '/tarefas/listar',
    pathMatch: 'full'
  },
  ...TarefasRoutes //setando as rotas de tarefas
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
