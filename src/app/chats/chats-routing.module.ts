import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { ChatsComponent } from './chats.component'
//import { ChatDetailComponent } from '~/app/shared/chat-detail.component'

const routes: Routes = [
  { path: 'default', component: ChatsComponent },
  //{ path: 'item/:id', component: ChatDetailComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class ChatsRoutingModule {}
