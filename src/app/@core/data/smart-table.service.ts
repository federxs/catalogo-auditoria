import { Injectable } from '@angular/core';

@Injectable()
export class SmartTableService {

    data = [
        {
            nombre: 'ISO 9001',
            categoria: 'Calidad',
            descripcion: 'Se puede certificar la 2013',
            link: 'https://es.wikipedia.org/wiki/ISO_9001'
        },
        {
            nombre: 'ISO 9002',
            categoria: 'Calidad',
            descripcion: 'Se puede certificar la 2015',
            link: 'https://es.wikipedia.org/wiki/ISO_9001'
        },
        {
            nombre: 'ISO 9003',
            categoria: 'Calidad',
            descripcion: 'Se puede certificar la 2015',
            link: 'https://es.wikipedia.org/wiki/ISO_9001'
        },
        {
            nombre: 'ISO 9004',
            categoria: 'Calidad',
            descripcion: 'Se puede certificar la 2015',
            link: 'https://es.wikipedia.org/wiki/ISO_9001'
        },
        {
            nombre: 'ISO 9005',
            categoria: 'Calidad',
            descripcion: 'Se puede certificar la 2015',
            link: 'https://es.wikipedia.org/wiki/ISO_9001'
        },

    ];

    getData() {
        return this.data;
    }
}
