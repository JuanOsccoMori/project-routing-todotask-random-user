import { IRandomContact } from 'src/app/models/randomUser';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  token: string | null = null;
  contactSelectionate: IRandomContact | undefined;

  constructor(private router: Router){}

  ngOnInit(): void {

    this.token = sessionStorage.getItem('token');

    // Leemos del estado del historial de navegacion
    if (history.state.data) {
      console.log(history.state.data);
      this.contactSelectionate = history.state.data
    }
  }

  navigationToContacts(): void {

    let navigationExtras: NavigationExtras = {
      queryParams: {
        genere: 'all'
      }
    }

    this.router.navigate(['/dashboard/contacts'], navigationExtras);
  }

}
