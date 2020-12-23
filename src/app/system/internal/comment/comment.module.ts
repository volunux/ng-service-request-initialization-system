import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentRoutingModule } from './comment-routing.module';
import { ConversationModule } from '../conversation/conversation.module';

@NgModule({
  declarations: [

  ],

  imports: [
    CommonModule,
    ConversationModule,
    CommentRoutingModule
  ]

})

export class CommentModule { 

}
