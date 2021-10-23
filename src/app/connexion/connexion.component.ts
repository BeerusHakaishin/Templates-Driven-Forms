import { Component, OnInit } from '@angular/core';
import  { User } from './model/user';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

    model: User = new User()

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    //form submitted
    console.log(this.model);
  }

  

}
