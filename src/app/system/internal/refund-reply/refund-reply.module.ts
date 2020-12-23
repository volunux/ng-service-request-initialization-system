import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefundReplyRoutingModule } from './refund-reply-routing.module';
import { ConversationModule } from '../conversation/conversation.module';

@NgModule({
  declarations: [

  ],

  imports: [
    CommonModule,
    ConversationModule,
    RefundReplyRoutingModule
  ]

})

export class RefundReplyModule { 

}
