import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'les1';
  text: string = '';
  status: boolean = false;
  Login: boolean = false;
  Register: boolean = false;
  Houses: boolean = false;
  Owners: boolean = false;
  index: number = -1;
  stringa: string;

  employee = {
    name: '',
    email: '',
    password: '',
    age: '',
    is_blocked: Boolean(Math.floor(Math.random()* 2))
  };

  employeeLogin = {
    email: '',
    password: ''
  };

  owners: Array<any> = [
    {
      name: 'Taras',
      email: 'qqq@dgb',
      password: '123456',
      is_blocked: true
    },
    {
      name: 'Igor',
      email: 'wer@dgb',
      password: '654321',
      is_blocked: false
    },
    {
      name: 'Dima',
      email: 'dim@dgb',
      password: '345668',
      is_blocked: true
    }
  ];

  houses: Array<any> = [
    {
      idHouse: 1,
      city: 'Lviv',
      size: 100,
      rooms: 4,
      price: 50000,
      owner: this.owners[0]
    },
    {
      idHouse: 2,
      city: 'Kyiv',
      size: 80,
      rooms: 3,
      price: 150000,
      owner: this.owners[1]
    },
    {
      idHouse: 3,
      city: 'Rivne',
      size: 103,
      rooms: 4,
      price: 30000,
      owner: this.owners[2]
    }
  ];

  onInput(ev) {
    this.text = ev.target.value;
  }

  mouseClick() {
    this.status = !this.status;
  }

  showLogin() {
    this.Login = !this.Login;
    this.Register = false
  }

  showRegister () {
    this.Register = !this.Register;
    this.Login = false
  }

  showHouses () {
    this.Houses = !this.Houses;
  }

  showOwners() {
    this.Owners = !this.Owners;
  }

  showAllInfo(id_house: number) {
    this.index = id_house
  }

  registerNewUser() {
    this.owners.push(this.employee);
    console.log(this.employee);
    console.log(this.owners);
  }

  loginUser() {
    const logIn = this.owners.find(owner =>
    this.employeeLogin.email === owner.email &&
    this.employeeLogin.password === owner.password);
    logIn ? this.stringa = 'welcome' : this.stringa = 'not user'
    // console.log(logIn ? 'welcome' : 'na hyi');
  }
}
