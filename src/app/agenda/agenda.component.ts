import { AgendasService } from './../agendas.service';
import { Agendas } from './../agenda';
import { Component } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  agendas: Agendas[] = []
  constructor(private service: AgendasService){}
  ngOnInit(): void{
    this.loadBooks();
  }
  loadBooks(){
    this.service.getAgendas().subscribe({
      next: data => this.agendas = data
    })
  }}
