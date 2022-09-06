import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule} from '@nativescript/angular'
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular'
import { ChatsRoutingModule } from './chats-routing.module'
import { ChatsComponent, ChatSummaryComponent } from './chats.component'

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptUIListViewModule,
    ChatsRoutingModule ],

  declarations: [
    ChatsComponent,
    ChatSummaryComponent ],

  schemas: [
    NO_ERRORS_SCHEMA],
})
export class ChatsModule {}
