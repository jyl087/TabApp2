import {  Component, Input, OnInit, OnChanges,
        SimpleChange, SimpleChanges, OnDestroy } from "@angular/core";
import {  ActivatedRoute, NavigationEnd, NavigationStart,
        Router, RouterEvent,} from "@angular/router";

import { Application, ObservableArray, View } from "@nativescript/core";
import { Utils, EventData, SearchBar, SwipeGestureEventData,
        Device} from "@nativescript/core";
import { ContactsService, ContactData } from "./contacts.service";
import { ListViewEventData, SwipeActionsEventData} from "nativescript-ui-listview";
import { Subscription } from "rxjs";


@Component({
  selector: "Contacts",
  styleUrls: ["./contacts.component.css"],
  templateUrl: "./contacts.component.html",
})
export class ContactsComponent implements OnInit, OnDestroy
{
  contacts: ObservableArray<ContactData>;
  isFiltered: boolean;

  private routerSub: Subscription;


  constructor(
    private ctcSvc: ContactsService,
    private router: Router
  ) {
    this.contacts = new ObservableArray<ContactData>([]);
  }

  ngOnInit(): void
  {
    console.log("ContactsComponent ngOnInit");

    let newcts = this.ctcSvc.getItems();
    this.contacts.splice( 0, this.contacts.length, ...newcts);
    this.isFiltered = false;
  }


  ngOnDestroy()
  {
    console.log("Destroy ContactComponent");
    if (this.contacts.length)
      this.contacts.splice( 0, this.contacts.length);

    if (this.routerSub) {
      this.routerSub.unsubscribe();
      this.routerSub = null;
    }
  }

  /** ------ UI Events -------- */

  onLeftSwipeClick(ev) {
    console.log("left ");
  }

  /**
   * User has clicked on the RIGHT swipe action button (DELETE)
   * @param ev
   */
  onRightSwipeClick(ev) {
    let self = this;
    console.log("right ");
    const view = ev.object;
    const ctc = view.bindingContext as ContactData;
    if (ctc.id)
      console.log( "Delete contact "+ctc.id);
  }

  onItemSwiping(ev: SwipeActionsEventData)
  {
    const cview = ev.object;
    console.log("onSwiping", ev.data);
  }

  onSwipeCellStarted(ev: ListViewEventData)
  {
    const swipeLimits = ev.data.swipeLimits;
    const swipeView = ev.object;
    const leftItem = swipeView.getViewById<View>("mark-view");
    const rightItem = swipeView.getViewById<View>("delete-view");
    swipeLimits.left = leftItem.getMeasuredWidth();
    swipeLimits.right = rightItem.getMeasuredWidth();
    swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;

    console.log("swipe started", swipeLimits);
  }

  onSwipeCellFinished(ev)
  {
    console.log("swipe finished");
  }

  onSwipeCellChanged(ev)
  {
    console.log("swipe changed");
  }

  onParentTap(ev: EventData) {}


  /** ---- Private Helpers ---- */

  private filterContacts(filter: string)
  {
  }
}

/** -------------------- ContactSummary -------------------- */

@Component({
  selector: "contact-summary",
  templateUrl: "./contact-summary.component.html",
})
export class ContactSummaryComponent implements OnInit, OnChanges {
  @Input() contact: ContactData;

  contactDisplay: string;

  /**
   * @constructor
   */
  constructor() {
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges)
  {
    if (!this.contact) return;
  }
}
