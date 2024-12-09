import { Component } from '@angular/core';
import { Agenda } from './agenda';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  agenda : Agenda[] = [
    { "id"      : 1,
      "namecommitment"    : "Salao de Beleza",
      "localcommitment"   : "Avenida Laranjeiras,100, Itu-SP",
      "data": "08/12/2024"
    },
    { "id"      : 2,
      "namecommitment"    : "Prova Economia",
      "localcommitment"   : "Fatec Itu",
      "data": "09/12/2024"
    },
    { "id"      : 3,
      "namecommitment"    : "Dentista",
      "localcommitment"   : "Rua Floriano Peixoto, 884 - Centro, Itu-SP",
      "data": "11/12/2024"
    },
    {
      "id"      : 4,
      "namecommitment"    : "Cinema",
      "localcommitment"   : "Plaza Shopping Itu",
      "data": "14/12/2024"
    }
 ];

}
