import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-component',
  templateUrl: './layout-component.component.html',
  styleUrls: ['./layout-component.component.css'],
})
export class LayoutComponentComponent implements OnInit {
  links = [
    {
      name: 'Inicio',
      url: '',
    },
    {
      name: 'Lista',
      url: 'list',
    },
    {
      name: 'Formulario',
      url: 'form',
    },
  ];
  title = 'angular-material-example';

  constructor() {}

  ngOnInit(): void {}
}
