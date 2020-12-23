import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplyRoutingModule } from './reply-routing.module';
import { ConversationModule } from '../conversation/conversation.module';

@NgModule({
  declarations: [

  ],

  imports: [
    CommonModule,
    ConversationModule,
    ReplyRoutingModule
  ]

})

export class ReplyModule { 

}
