import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { PostComponent } from './post.component';
import { ViewComponent } from './view/view.component';
const routes: Routes = [
  {
    path: "", component: PostComponent, children: [
      { path: 'index', component: IndexComponent },
      { path: ':postId/view', component: ViewComponent },
      { path: 'create', component: CreateComponent},
      { path: ':postId/edit', component: EditComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PostRoutingModule { }