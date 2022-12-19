import { IRandomContact } from 'src/app/models/randomUser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameComplete'
})
export class NameCompletePipe implements PipeTransform {

  transform(contact: IRandomContact, ...args: unknown[]): string {
    return `${contact.name.first} ${contact.name.last}`;
  }

}
