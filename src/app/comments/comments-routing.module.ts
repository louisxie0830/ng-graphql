import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './comments/comments/comments.component';

const routes: Routes = [
  {
    path: '',
    component: CommentsComponent,
    data: {
      title: 'Richart - 首頁',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule {}
