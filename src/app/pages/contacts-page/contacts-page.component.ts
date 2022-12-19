import { Results } from './../../models/randomUser';
import { RandomUserService } from './../../services/random-user.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IRandomContact } from 'src/app/models/randomUser';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  loading: boolean = true;
  filterGenere: string = 'all';
  listRandomContacts: IRandomContact[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactUserService: RandomUserService
    ){}

  ngOnInit(): void {

    // Obtenenmos los Query params
    this.route.queryParams.subscribe((params: any) => {
      console.log('query params', params.genere);

      // Obteniendo la lista de contactos
      if (params.genere) {
        this.filterGenere = params.genere

        if (params.genere === 'female' || params.genere == 'male') {
          // Implementamos para obtener la lista de contactos aleatoria
          this.contactUserService.getContactsRandom(10, params.genere).subscribe(
            {
              next: (response: Results) => {
                response.results.forEach(
                  (randomContact: IRandomContact, index: number) => {
                    this.listRandomContacts.push(randomContact)
                  }
                )
                console.log(this.listRandomContacts)

              },
              error: (error) => console.error(error),
              complete: () => {
                console.info('Peticion de random contacts terminada');
                this.loading = false;
              }
            }
          );
        } else {
          // Implementamos para obtener la lista de contactos aleatoria
          this.contactUserService.getContactsRandom(10).subscribe(
            {
              next: (response: Results) => {
                response.results.forEach(
                  (randomContact: IRandomContact, index: number) => {
                    this.listRandomContacts.push(randomContact)
                  }
                )
                console.log(this.listRandomContacts);

              },
              error: (error) => console.error(error),
              complete: () => {
                console.info('Peticion de random contacts terminada');
                this.loading = false;
              }
            }
          );
        }
      }

    })
  }
  // leemos del estado del historial de navegacion
  backToHome(contact: IRandomContact){
    let navigationExtras: NavigationExtras = {
      state: {
        data: contact
      }
    }

    this.router.navigate(['/dashboard'], navigationExtras)
  }
}
