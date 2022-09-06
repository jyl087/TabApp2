import { Component, OnInit } from '@angular/core'
import { ObservableArray } from '@nativescript/core';
import { ListViewEventData, RadListView, SwipeActionsEventData} from "nativescript-ui-listview";

import { Item } from './item'
import { ItemService } from './item.service'

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  //items: Array<Item>
  items: ObservableArray<Item>

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.items = this.itemService.getItems()
  }


  onListLoaded( ev)
  {
    const lv = ev.object as RadListView;
    console.log( "ListView loaded:",lv);
  }
}
