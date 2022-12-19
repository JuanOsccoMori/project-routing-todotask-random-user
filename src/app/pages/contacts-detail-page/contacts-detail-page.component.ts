import { IRandomContact } from 'src/app/models/randomUser';
import { IContact } from 'src/app/models/contact.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-contacts-detail-page',
  templateUrl: './contacts-detail-page.component.html',
  styleUrls: ['./contacts-detail-page.component.scss']
})
export class ContactsDetailPageComponent implements OnInit{

  id: any | undefined;
  contact: IRandomContact | undefined


  filterPrevius: string = 'all';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
        if (params.id) {
          this.id = params.id;
        }
    });

    // Vamos a leer tambien del state del contacto
    if (history.state.data) {
      this.contact = history.state.data
    }

    if (history.state.filter) {
      this.filterPrevius = history.state.filter
    }
  }

}
