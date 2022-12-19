import { Results, IRandomContact } from './../../models/randomUser';
import { RandomUserService } from './../../services/random-user.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-contact-page',
  templateUrl: './random-contact-page.component.html',
  styleUrls: ['./random-contact-page.component.scss']
})
export class RandomContactPageComponent implements OnInit {

  newContact: IRandomContact | undefined;

  constructor(private randomUserService: RandomUserService){}

  ngOnInit(): void {
    this.randomUserService.getContactRandom().subscribe(
      (response: Results) => {
        this.newContact = response.results[0]; //Se lo pasaremos al random contact
      }
    )
  }

  getNewContanct(){
    this.randomUserService.getContactRandom().subscribe(
      {
        next: (response: Results) => {
          this.newContact = response.results[0];
        },
        error: (error) => console.error(error),
        complete: () => console.info('Peticion de random contact terminada')
      }
    )
  }

  getListContancts(n: number){
    this.randomUserService.getContactsRandom(n).subscribe(
      {
        next: (response: Results) => {
          console.log(response)
        },
        error: (error) => console.error(error),
        complete: () => console.info('Peticion de random contacts terminada')
      }
    )
  }



}
