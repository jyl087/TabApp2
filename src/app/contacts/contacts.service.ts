import { Injectable } from '@angular/core'
import { ObservableArray } from '@nativescript/core'


export interface ContactData {
  id: number
  name: string
  role: string
}

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private items = new Array<ContactData>(
    { id: 1, name: 'Ter Stegen', role: 'Goalkeeper' },
    { id: 3, name: 'Piqué', role: 'Defender' },
    { id: 4, name: 'I. Rakitic', role: 'Midfielder' },
    { id: 5, name: 'Sergio', role: 'Midfielder' },
    { id: 6, name: 'Denis Suárez', role: 'Midfielder' },
    { id: 7, name: 'Arda', role: 'Midfielder' },
    { id: 8, name: 'A. Iniesta', role: 'Midfielder' },
    { id: 9, name: 'Suárez', role: 'Forward' },
    { id: 10, name: 'Messi', role: 'Forward' },
    { id: 11, name: 'Neymar', role: 'Forward' },
    { id: 12, name: 'Rafinha', role: 'Midfielder' },
    { id: 13, name: 'Cillessen', role: 'Goalkeeper' },
    { id: 14, name: 'Mascherano', role: 'Defender' },
    { id: 17, name: 'Paco Alcácer', role: 'Forward' },
    { id: 18, name: 'Jordi Alba', role: 'Defender' },
    { id: 19, name: 'Digne', role: 'Defender' },
    { id: 20, name: 'Sergi Roberto', role: 'Midfielder' },
    { id: 21, name: 'André Gomes', role: 'Midfielder' },
    { id: 22, name: 'Aleix Vidal', role: 'Midfielder' },
    { id: 23, name: 'Umtiti', role: 'Defender' },
    { id: 24, name: 'Mathieu', role: 'Defender' },
    { id: 25, name: 'Masip', role: 'Goalkeeper' },
    { id: 26, name: 'Cillessen', role: 'Goalkeeper' },
    { id: 27, name: 'Mascherano', role: 'Defender' },
    { id: 28, name: 'Jordi Alba', role: 'Defender' },
    { id: 29, name: 'Digne', role: 'Defender' },
    { id: 30, name: 'Sergi Roberto', role: 'Midfielder' },
    { id: 31, name: 'André Gomes', role: 'Midfielder' },
    { id: 32, name: 'Aleix Vidal', role: 'Midfielder' },
    { id: 33, name: 'Umtiti', role: 'Defender' },
    { id: 34, name: 'Mathieu', role: 'Defender' },
    { id: 35, name: 'Masip', role: 'Goalkeeper' },
    { id: 36, name: 'Cillessen', role: 'Goalkeeper' },
    { id: 37, name: 'Mascherano', role: 'Defender' },
    { id: 38, name: 'Jordi Alba', role: 'Defender' },
    { id: 39, name: 'Digne', role: 'Defender' },
    { id: 40, name: 'Sergi Roberto', role: 'Midfielder' },
    { id: 41, name: 'André Gomes', role: 'Midfielder' },
    { id: 42, name: 'Aleix Vidal', role: 'Midfielder' },
    { id: 43, name: 'Umtiti', role: 'Defender' },
    { id: 44, name: 'Mathieu', role: 'Defender' },
    { id: 45, name: 'Masip', role: 'Goalkeeper' }

  )

  getItems(): ObservableArray<ContactData> {
    return new ObservableArray<ContactData>( this.items)
  }

  getItem(id: number): ContactData {
    return this.items.filter((item) => item.id === id)[0]
  }
}
