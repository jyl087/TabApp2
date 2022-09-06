import { Component, ElementRef, ViewChild } from '@angular/core'
import { BottomNavigationBar, TabSelectedEventData } from '@nativescript-community/ui-material-bottomnavigationbar';
import { EventData } from '@nativescript/core';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent
{

  @ViewChild('maintab', {static: true})
  tabView: ElementRef;
  bottomNav: BottomNavigationBar;

  @ViewChild('topview', { static: true})
  topView: ElementRef;

  public activeTab:  number;
  public saveTab:    number;
  public tabVisible: string;


  constructor()
  {
    this.activeTab  = this.saveTab = 0;
    this.tabVisible = 'visible';
  }

  setTab( idx: number)
  {
    this.activeTab = idx;
    this.bottomNav.selectTab( idx);
  }

  /** ---- UI Interaction ----- */

  onTabChange( ev:EventData)
  {
  }

  onBottomNavigationTabSelected( ev: TabSelectedEventData)
  {
    if (ev.newIndex != this.activeTab)
    {
      this.activeTab = ev.newIndex;
      const title = this.bottomNav.items[this.activeTab].title;
      console.log( "Selected tab: "+title+", "+this.bottomNav.selectedTabIndex);
    }
  }

  onBottomNavigationTabPressed( ev: EventData)
  {
    console.log("Active tab: "+ this.activeTab);
  }

  onBottomNavigationLoaded( ev: EventData)
  {
  }


}
