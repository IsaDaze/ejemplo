import { Component } from '@angular/core';

@Component({
    selector: 'prueba',
    templateUrl: './prueba.compB.html',
    styleUrls: ['./prueba.compC.css']
})

export class prueba {
    //variablessss :0
    // {{}}
    title = 'texto de prueba';
    colores = ['rojo', 'verde', 'azul'];

}