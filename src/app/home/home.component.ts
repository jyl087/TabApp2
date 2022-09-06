import {
  ChangeDetectorRef, Component, Input, NgZone, OnChanges, OnDestroy, OnInit,
  AfterViewChecked, SimpleChanges} from "@angular/core";
import {  ActionBar, EventData, ObservableArray,
  Application, ApplicationEventData, ApplicationSettings, AndroidApplication,
} from "@nativescript/core";
import { registerElement, RouterExtensions } from "@nativescript/angular";

import { RadListView, ListViewEventData, LoadOnDemandListViewEventData,
} from "nativescript-ui-listview";

import { CallsService, CallData } from './calls.service';


@Component({
  selector: "Home",
  styleUrls: ["./home.component.css"],
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit, OnDestroy
{
  fitems: ObservableArray<CallData>;
  fStart: number;
  fEnd: number;
  fGroups: string;

  /** @var string */
  whoami: string;

  refreshing: boolean;
  lastRefresh: number;
  subkey: string;

  constructor(
    private routerExtns: RouterExtensions,
    private ngZone: NgZone,
    private callSvc: CallsService
  ) {
    this.whoami = "";
    this.fitems = new ObservableArray([]);
  }

  /**
   * ngOnInit
   */
  ngOnInit(): void
  {
    let calls = this.callSvc.getItems();
    this.fitems.splice( 0, 0, ...calls);
  }

  ngOnDestroy()
  {
    if (this.fitems.length > 0)
      this.fitems.splice( 0,this.fitems.length);
  }

  /** ------------ UI Interaction ---------------- */

  public onStartPullToRefresh(ev: ListViewEventData)
  {
    const lv: RadListView = ev.object as RadListView;
    console.log("REFRESH!");
    setTimeout(
      () => {
        lv.notifyPullToRefreshFinished();
      }, 500
    );
  }

  public onLoadMoreItems(ev: LoadOnDemandListViewEventData)
  {
    let lv: RadListView = ev.object;
    console.log("LOAD MORE");

    setTimeout(
      () => {
        lv.notifyLoadOnDemandFinished( true);
      }, 500
    );
  }

  public onListLoaded(ev)
  {
    let rlv: RadListView = ev.object as RadListView;
    console.log("Home RadListView loaded!", rlv);
  }


  private onBackPressed(args: any)
  {
    console.log("HOME: Back Pressed!");
    try
    {
      this.ngZone.run(() => {
        args.cancel = true;
        if (this.routerExtns.canGoBack()) {
          this.routerExtns.back();
        } else {
          console.log("No way: can't go back!!!!");
        }
      });
    } catch (err) {
      console.log(err);
    }
  }
}


/** -------------------- CallSummary -------------------- */

@Component({
  selector: "call-summary",
  styleUrls: ["./home.component.css"],
  templateUrl: "./call-summary.component.html",
})
export class CallSummaryComponent implements OnInit, OnChanges
{
  @Input() call: CallData;

  hidden: boolean;
  callIcon: string;
  summary: string;
  puser: string;
  contactDisplay: string;
  subkey: string;

  /**
   * @constructor
   */
  constructor(
      private callsSvc: CallsService,
      private cd: ChangeDetectorRef
  ) {
      this.callIcon = "call_received";
      this.summary = "";
      this.puser = "";
      this.contactDisplay = "";
      this.subkey = "";
  }

  ngOnInit()
  {
  }

  ngOnChanges(changes: SimpleChanges)
  {
      if (!this.call) return;
      this.contactDisplay = "";
      if (this.call.id)
      {
          const myid = this.call.id;
          console.log("chatSumm onChanges:"+myid+" "+this.call.from);
      }
  }

  ngOnDestroy()
  {
  }
}
