import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { ContactsComponent } from './contacts.component'
//import { ContactEditorComponent } from '~/app/shared/contact-editor.component'

const routes: Routes = [
  { path: 'default', component: ContactsComponent },
  //{ path: 'ctedit/:id', component: ContactEditorComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class ContactsRoutingModule {}
