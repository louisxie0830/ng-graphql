import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments/comments/comments.component';
import { SharedModule } from '@shared/shared.module';
import { CommentsRoutingModule } from './comments-routing.module';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    CommentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CommentsRoutingModule
  ]
})
export class CommentsModule { }
