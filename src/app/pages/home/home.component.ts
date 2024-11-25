import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}

  // Méthode pour rediriger vers le formulaire
  goToForm() {
    this.router.navigate(['/form']); // Assurez-vous que la route '/form' existe
  }
}
