import { Injectable } from '@angular/core'
import { ObservableArray } from '@nativescript/core'

export interface ChatData {
  id: number
  ts: number
  contact: number
  subject: string
}

@Injectable({
  providedIn: 'root',
})
export class ChatsService {
  private items = new Array<ChatData>(
    { id: 1, ts:1630155545, contact:34, subject: 'Great Goalkeeper' },
    { id: 3, ts:1630155535, contact:33, subject: 'Dynamite Defender' },
    { id: 4, ts:1630155505, contact:3,  subject: 'Marvelous Midfielder' },
    { id: 5, ts:1630155445, contact:1,  subject: 'Magic Midfielder' },
    { id: 6, ts:1630155405, contact:2,  subject: 'Mighty Midfielder' },
    { id: 7, ts:1630155345, contact:9,  subject: 'Mild Midfielder' },
    { id: 8, ts:1630155245, contact:13, subject: 'Morose Midfielder' },
    { id: 9, ts:1630155205, contact:19, subject: 'Fabulous Forward' },
    { id: 10, ts:1630155195, contact:29, subject: 'Fighting Forward' },
    { id: 11, ts:1630155185, contact:37, subject: 'Fancy Forward' },
    { id: 12, ts:1630155175, contact:28, subject: 'Midget Midfielder' },
    { id: 13, ts:1630155005, contact:21, subject: 'Glamourous Goalkeeper' },
    { id: 14, ts:1630154805, contact:21, subject: 'Dilletante Defender' },
    { id: 17, ts:1630154705, contact:23, subject: 'Fast Forward' },
    { id: 18, ts:1630154605, contact:8,  subject: 'Dreary Defender' },
    { id: 19, ts:1630154545, contact:4,  subject: 'Disheveled Defender' },
    { id: 20, ts:1630144535, contact:34, subject: 'Money Midfielder' },
    { id: 21, ts:1630143545, contact:40, subject: 'Maladjusted Midfielder' },
    { id: 22, ts:1630142545, contact:12, subject: 'Mickeymouse Midfielder' },
    { id: 23, ts:1630131545, contact:32, subject: 'Droll Defender' },
    { id: 24, ts:1630130545, contact:36, subject: 'Daft Defender' },
    { id: 25, ts:1630129545, contact:45, subject: 'Good Goalkeeper' },
    { id: 26, ts:1630108805, contact:31, subject: 'Dilletante Defender' },
    { id: 27, ts:1630108705, contact:3,  subject: 'Fast Forward' },
    { id: 28, ts:1630048605, contact:7,  subject: 'Dreary Defender' },
    { id: 29, ts:1630048545, contact:5,  subject: 'Disheveled Defender' },
    { id: 30, ts:1630047535, contact:24, subject: 'Money Midfielder' },
  )

  getItems(): ObservableArray<ChatData> {
    return new ObservableArray<ChatData>( this.items)
  }

  getItem(id: number): ChatData {
    return this.items.filter((item) => item.id === id)[0]
  }
}
