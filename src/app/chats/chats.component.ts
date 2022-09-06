/**
 * @copyright (C) 2021, Halloo Commnications, Inc.
 * All rights reserved
 */

 import { Component, OnInit, OnChanges, Input,
  SimpleChange, SimpleChanges, NgZone,
  ChangeDetectorRef, OnDestroy, AfterViewInit } from "@angular/core";

import { EventData, View, SwipeGestureEventData, SwipeDirection,
  ObservableArray } from "@nativescript/core";

import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
import { ListViewEventData, RadListView, SwipeActionsEventData} from "nativescript-ui-listview";

import { ChatsService, ChatData } from "./chats.service";
import { ContactData, ContactsService } from "../contacts/contacts.service";


@Component({
  selector: "Chat",
  styleUrls: ["./chats.component.css"],
  templateUrl: "./chats.component.html",
})
export class ChatsComponent implements OnInit, OnDestroy
{
  public fitems: ObservableArray<ChatData>;
  public lv: RadListView;
  public newCount: number;


  constructor(
      private route: ActivatedRoute,
      private routerExtensions: RouterExtensions,
      private cd: ChangeDetectorRef,
      private chatsSvc: ChatsService
  ) {
      // Use the constructor to inject shared.
      this.fitems = new ObservableArray<ChatData>([]);
      this.newCount = 0;
  }

  ngOnInit(): void
  {
      console.log("ChatsComponent ngOnInit");
      let chats = this.chatsSvc.getItems();
      this.fitems.splice( 0, this.fitems.length, ...chats);
  }

  ngOnDestroy()
  {
      this.fitems.splice(0,this.fitems.length);;
      console.log("Destroy ChatsComponent");
  }

  /** ----------- Component Interaction Handlers ------------ */


  public onListLoaded(ev: EventData): void
  {
      this.lv = ev.object as RadListView;
      console.log("ListView loaded ", this.lv);
  }

  public onLeftSwipeClick(ev)
  {
      const view = ev.object;
      const fitem = view.bindingContext as ChatData;
      console.log("left ",fitem);

      if (this.lv) this.lv.notifySwipeToExecuteFinished();
  }

  public onRightSwipeClick(ev)
  {
      let self = this;
      const view = ev.object;
      const fitem = view.bindingContext as ChatData;
      if (fitem.id)
      {
          console.log("right - Delete (" + fitem.id + ")");
      }
  }

  public onItemSwiping(ev: SwipeActionsEventData)
  {
      const cview = ev.object;
      console.log("onSwiping:",ev.data);
  }

  public onSwipeCellStarted(ev: ListViewEventData)
  {
      const swipeLimits = ev.data.swipeLimits;
      const swipeView = ev.object;
      const leftItem = swipeView.getViewById<View>("mark-view");
      const rightItem = swipeView.getViewById<View>("delete-view");
      swipeLimits.left = leftItem.getMeasuredWidth();
      swipeLimits.right = rightItem.getMeasuredWidth();
      swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;

      console.log("swipe started",swipeLimits);
  }

  public onSwipeCellFinished(ev)
  {
      console.log("swipe finished");
  }

  public onSwipeCellChanged(ev)
  {
      console.log("swipe changed");
  }

}

/** -------------------- ChatSummary -------------------- */

@Component({
  selector: "chat-summary",
  styleUrls: ["./chats.component.css"],
  templateUrl: "./chat-summary.component.html",
})
export class ChatSummaryComponent implements OnInit, OnChanges
{
  @Input() chat: ChatData;

  ctc:ContactData;
  hidden: boolean;
  callIcon: string;
  summary: string;
  tags: string;
  puser: string;
  contactDisplay: string;

  /**
   * @constructor
   */
  constructor(
      private chatsSvc: ChatsService,
      private ctcsSvc: ContactsService,
      private cd: ChangeDetectorRef
  ) {
      this.callIcon = "call_received";
      this.summary = "";
      this.tags = "";
      this.puser = "";
      this.contactDisplay = "";
      this.ctc = null;
  }

  ngOnInit()
  {
  }

  ngOnChanges(changes: SimpleChanges)
  {
      if (!this.chat)
      {
        this.ctc = null;
        return;
      }
      this.contactDisplay = "";
      if (this.chat.id)
      {
          const myid = this.chat.id;
          console.log("chatSumm onChanges:"+myid+" "+this.chat.subject);
          this.ctc = this.ctcsSvc.getItem( this.chat.contact);
      }
  }

  ngOnDestroy()
  {
  }
}
