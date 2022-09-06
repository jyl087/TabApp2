import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule }   from '@nativescript/angular'
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular'

import { HomeRoutingModule }          from './home-routing.module'
import { HomeComponent, CallSummaryComponent } from './home.component'

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptUIListViewModule,
    HomeRoutingModule,
   ],

  declarations: [
    HomeComponent,
    CallSummaryComponent
  ],

  schemas: [
    NO_ERRORS_SCHEMA
  ],
})
export class HomeModule {}
