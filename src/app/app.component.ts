import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component'; // Importando o componente Navbar

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],  // Certifique-se de que NavbarComponent esteja aqui
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nome-do-projeto';
}
