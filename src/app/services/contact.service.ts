import { IContact } from 'src/app/models/contact.interface';
import { Injectable } from '@angular/core';
import { LIST_CONTACTS } from '../mock/contactsData.mock';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  listContacts : IContact[] = LIST_CONTACTS;

  constructor() { }

  getContacts(genere?: string): Promise<IContact[]> {
    if (genere === 'male' || genere === 'female') {
      let listFilter = this.listContacts.filter(
        (contact) => contact.genere == genere
      )
      return Promise.resolve(listFilter);
    } else if(genere === 'all') {
      return Promise.resolve(this.listContacts)
    } else {
      return Promise.reject('Filter no valid');
    }
  }

}
