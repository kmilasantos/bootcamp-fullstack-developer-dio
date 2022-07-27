import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { PipesExampleComponent } from './pages/pipes-example/pipes-example.component';
import { TodoListComponent } from './pages/todo/todo-list/todo-list.component';
import { UsersFormComponent } from './pages/users/users-form/users-form.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';

const routes: Routes = [
  { path: '', component: UsersListComponent},
  { path: 'form', component: UsersFormComponent},
  { path: 'form/:id', component: UsersFormComponent},
  { path: 'data-binding', component: DataBindingComponent},
  { path: 'todo', component: TodoListComponent},
  { path: 'pipes', component: PipesExampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
