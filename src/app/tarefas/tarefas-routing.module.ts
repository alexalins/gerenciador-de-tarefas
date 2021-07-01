import { Routes} from '@angular/router';
import { ListarTarefasComponent } from './listar';

export const TarefasRoutes: Routes = [
  //setando uma padrao
  {
    path: 'tarefas',
    redirectTo: 'tarefas/listar'
  },
  { //setando tarefas listar
    path: 'tarefas/listar',
    component: ListarTarefasComponent
  }
];
