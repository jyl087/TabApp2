import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule, NSEmptyOutletComponent } from '@nativescript/angular'

import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component'

/*
const routes: Routes = [
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: 'items', component: ItemsComponent },
  { path: 'item/:id', component: ItemDetailComponent },
]*/

const routes: Routes = [
  {
    path: '',
    redirectTo: '/(homeTab:home/default//contactsTab:contacts/default//chatsTab:chats/default)',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: NSEmptyOutletComponent,
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    outlet: 'homeTab',
  },
  {
    path: 'contacts',
    component: NSEmptyOutletComponent,
    loadChildren: () => import('./contacts/contacts.module').then((m) => m.ContactsModule),
    outlet: 'contactsTab',
  },
/*  {
    path: 'keypad',
    component: NSEmptyOutletComponent,
    loadChildren: () => import('./keypad/keypad.module').then((m) => m.KeypadModule),
    outlet: 'keypadTab',
  },
  {
    path: 'vmail',
    component: NSEmptyOutletComponent,
    loadChildren: () => import('./vmail/vmail.module').then((m) => m.VmailModule),
    outlet: 'vmailTab',
  }, */
  {
    path: 'chats',
    component: NSEmptyOutletComponent,
    loadChildren: () => import('./chats/chats.module').then((m) => m.ChatsModule),
    outlet: 'chatsTab',
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
