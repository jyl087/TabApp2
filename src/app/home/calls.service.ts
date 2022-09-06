import { Injectable } from '@angular/core'
import { ObservableArray } from '@nativescript/core'

export interface CallData {
  id: number;
  from: string;
  tel: string;
}

@Injectable({
  providedIn: 'root',
})
export class CallsService {
  private items = new Array<CallData>(
    { id: 1, from: 'Ter Stegen', tel: '12125551234' },
    { id: 3, from: 'Piqué', tel: '13105552345' },
    { id: 4, from: 'I. Rakitic', tel: '14155551212' },
    { id: 5, from: 'Sergio', tel: '16175550011' },
    { id: 6, from: 'Denis Suárez', tel: '13525550123' },
    { id: 7, from: 'Arda', tel: '19045550101' },
    { id: 8, from: 'A. Iniesta', tel: '15035551093' },
    { id: 9, from: 'Suárez', tel: '14125550909' },
    { id: 10, from: 'Messi', tel: '15305559999' },
    { id: 11, from: 'Neymar', tel: '12015554321' },
    { id: 12, from: 'Rafinha', tel: '12325551234' },
    { id: 13, from: 'Cillessen', tel: '15255550123' },
    { id: 14, from: 'Mascherano', tel: '16075551212' },
    { id: 17, from: 'Paco Alcácer', tel: '19065553210' },
    { id: 18, from: 'Jordi Alba', tel: '18885550101' },
    { id: 19, from: 'Digne', tel: '13585550000' },
    { id: 20, from: 'Sergi Roberto', tel: '14085551111' },
    { id: 21, from: 'André Gomes', tel: '18045553333' },
    { id: 22, from: 'Aleix Vidal', tel: '17075552222' },
    { id: 23, from: 'Umtiti', tel: '17175551111' },
    { id: 24, from: 'Mathieu', tel: '17375559999' },
    { id: 25, from: 'Masip', tel: '16165558888' }
  )

  getItems(): ObservableArray<CallData> {
    return new ObservableArray<CallData>( this.items)
  }

  getItem(id: number): CallData {
    return this.items.filter((item) => item.id === id)[0]
  }
}
