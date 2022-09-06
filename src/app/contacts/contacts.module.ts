import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular'
import { ContactsRoutingModule } from './contacts-routing.module'
import { ContactsComponent, ContactSummaryComponent } from './contacts.component'

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptUIListViewModule,
    ContactsRoutingModule,
  ],
  declarations: [
    ContactsComponent,
    ContactSummaryComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
})
export class ContactsModule {}
