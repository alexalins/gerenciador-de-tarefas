import { Routes} from '@angular/router';
import { CadastrarTarefaComponent } from './cadastrar';
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
  },
  { //setando tarefas listar
    path: 'tarefas/cadastrar',
    component: CadastrarTarefaComponent
  }
];
