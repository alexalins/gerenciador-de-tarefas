import { Routes} from '@angular/router';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefasComponent } from './editar';
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
  { //setando tarefas cadastrar
    path: 'tarefas/cadastrar',
    component: CadastrarTarefaComponent
  },
  { //setando tarefas editar + id da tarefa
    path: 'tarefas/editar/:id',
    component: EditarTarefasComponent
  }
];
