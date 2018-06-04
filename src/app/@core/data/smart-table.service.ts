import {Injectable} from '@angular/core';

@Injectable()
export class SmartTableService {

  data = [
    {
      nombre: 'ISO 9001',
      categoria: 'Calidad',
      descripcion: 'Se puede certificar la 2013',
      link: 'https://es.wikipedia.org/wiki/ISO_9001',
      indice: {
        parrafo: 'Esta norma 1 tiene aocmo cpararfor aesta coass',
        listaItemsIndice: ['item1a',
          'item2',
          'item3',
          'item4',
        ],
      },
      listaItems: 'item1a item2 item3 item4',
    },
    {
      nombre: 'ISO 9002',
      categoria: 'Calidad',
      descripcion: 'Se puede certificar la 2015',
      link: 'https://es.wikipedia.org/wiki/ISO_9001',
      indice: {
        parrafo: 'Esta norma 2 tiene aocmo cpararfor aesta coass',
        listaItemsIndice: ['item1b',
          'item2',
          'item3',
          'item4',
        ],
      },
      listaItems: 'item1e item2 item3 item4',
    },
    {
      nombre: 'ISO 9003',
      categoria: 'Calidad',
      descripcion: 'Se puede certificar la 2015',
      link: 'https://es.wikipedia.org/wiki/ISO_9001',
      indice: {
        parrafo: 'Esta norma 3 tiene aocmo cpararfor aesta coass',
        listaItemsIndice: ['item1c',
          'item2',
          'item3',
          'item4',
        ],
      },
      listaItems: 'item1c item2 item3 item4',
    },
    {
      nombre: 'ISO 9004',
      categoria: 'Calidad',
      descripcion: 'Se puede certificar la 2015',
      link: 'https://es.wikipedia.org/wiki/ISO_9001',
      indice: {
        parrafo: 'Esta norma 4 tiene aocmo cpararfor aesta coass',
        listaItemsIndice: ['item1d',
          'item2',
          'item3',
          'item4',
        ],
      },
      listaItems: 'item1e item2 item3 item4',
    },
    {
      nombre: 'ISO 9005',
      categoria: 'Calidad',
      descripcion: 'Se puede certificar la 2015',
      link: 'https://es.wikipedia.org/wiki/ISO_9001',
      indice: {
        parrafo: 'Esta norma 5 tiene aocmo cpararfor aesta coass',
        listaItemsIndice: ['item1e',
          'item2',
          'item3',
          'item4',
        ],
      },
      listaItems: 'item1e item2 item3 item4',
    },
    {
      nombre: 'ISO 9005',
      categoria: 'Calidad',
      descripcion: 'Se puede certificar la 2015',
      link: 'https://es.wikipedia.org/wiki/ISO_9001',
      indice: {
        parrafo: 'Esta norma 5 tiene aocmo cpararfor aesta coass',
        listaItemsIndice: ['item1e',
          'item2',
          'item3',
          'item4',
        ],
      },
      listaItems: 'item1e item2 item3 item4',
    },
    {
      nombre: 'ISO 9005',
      categoria: 'Calidad',
      descripcion: 'Se puede certificar la 2015',
      link: 'https://es.wikipedia.org/wiki/ISO_9001',
      indice: {
        parrafo: 'Esta norma 5 tiene aocmo cpararfor aesta coass',
        listaItemsIndice: ['item1e',
          'item2',
          'item3',
          'item4',
        ],
      },
      listaItems: 'item1e item2 item3 item4',
    },
    {
      nombre: 'ISO 9005',
      categoria: 'Calidad',
      descripcion: 'Se puede certificar la 2015',
      link: 'https://es.wikipedia.org/wiki/ISO_9001',
      indice: {
        parrafo: 'Esta norma 5 tiene aocmo cpararfor aesta coass',
        listaItemsIndice: ['item1e',
          'item2',
          'item3',
          'item4',
        ],
      },
      listaItems: 'item1e item2 item3 item4',
    },
    {
      nombre: 'ISO 9005',
      categoria: 'Calidad',
      descripcion: 'Se puede certificar la 2015',
      link: 'https://es.wikipedia.org/wiki/ISO_9001',
      indice: {
        parrafo: 'Esta norma 5 tiene aocmo cpararfor aesta coass',
        listaItemsIndice: ['item1e',
          'item2',
          'item3',
          'item4',
        ],
      },
      listaItems: 'item1e item2 item3 item4',
    },
    {
      nombre: 'ISO 9005',
      categoria: 'Calidad',
      descripcion: 'Se puede certificar la 2015',
      link: 'https://es.wikipedia.org/wiki/ISO_9001',
      indice: {
        parrafo: 'Esta norma 5 tiene aocmo cpararfor aesta coass',
        listaItemsIndice: ['item1e',
          'item2',
          'item3',
          'item4',
        ],
      },
      listaItems: 'item1e item2 item3 item4',
    },
    {
      nombre: 'ISO 9005',
      categoria: 'Calidad',
      descripcion: 'Se puede certificar la 2015',
      link: 'https://es.wikipedia.org/wiki/ISO_9001',
      indice: {
        parrafo: 'Esta norma 5 tiene aocmo cpararfor aesta coass',
        listaItemsIndice: ['item1e',
          'item2',
          'item3',
          'item4',
        ],
      },
      listaItems: 'item1e item2 item3 item4',
    },
    {
      nombre: 'ISO 9005',
      categoria: 'Calidad',
      descripcion: 'Se puede certificar la 2015',
      link: 'https://es.wikipedia.org/wiki/ISO_9001',
      indice: {
        parrafo: 'Esta norma 5 tiene aocmo cpararfor aesta coass',
        listaItemsIndice: ['item1e',
          'item2',
          'item3',
          'item4',
        ],
      },
      listaItems: 'item1e item2 item3 item4',
    },
    {
      nombre: 'ISO 9005',
      categoria: 'Calidad',
      descripcion: 'Se puede certificar la 2015',
      link: 'https://es.wikipedia.org/wiki/ISO_9001',
      indice: {
        parrafo: 'Esta norma 5 tiene aocmo cpararfor aesta coass',
        listaItemsIndice: ['item1e',
          'item2',
          'item3',
          'item4',
        ],
      },
      listaItems: 'item1e item2 item3 item4',
    },
    {
      nombre: 'ISO 9005',
      categoria: 'Calidad',
      descripcion: 'Se puede certificar la 2015',
      link: 'https://es.wikipedia.org/wiki/ISO_9001',
      indice: {
        parrafo: 'Esta norma 5 tiene aocmo cpararfor aesta coass',
        listaItemsIndice: ['item1e',
          'item2',
          'item3',
          'item4',
        ],
      },
      listaItems: 'item1e item2 item3 item4',
    },
    {
      nombre: 'ISO 9005',
      categoria: 'Calidad',
      descripcion: 'Se puede certificar la 2015',
      link: 'https://es.wikipedia.org/wiki/ISO_9001',
      indice: {
        parrafo: 'Esta norma 5 tiene aocmo cpararfor aesta coass',
        listaItemsIndice: ['item1e',
          'item2',
          'item3',
          'item4',
        ],
      },
      listaItems: 'item1e item2 item3 item4',
    },
    {
      nombre: 'ISO 9005',
      categoria: 'Calidad',
      descripcion: 'Se puede certificar la 2015',
      link: 'https://es.wikipedia.org/wiki/ISO_9001',
      indice: {
        parrafo: 'Esta norma 5 tiene aocmo cpararfor aesta coass',
        listaItemsIndice: ['itemass',
          'item2',
          'item3',
          'item4',
        ],
      },
      listaItems: 'itemass item2 item3 item4',
    },
    {
      nombre: 'ISO 9005',
      categoria: 'Calidad',
      descripcion: 'Se puede certificar la 2015',
      link: 'https://es.wikipedia.org/wiki/ISO_9001',
      indice: {
        parrafo: 'Esta norma 5 tiene aocmo cpararfor aesta coass',
        listaItemsIndice: ['item1e',
          'item2',
          'item3',
          'item4',
        ],
      },
      listaItems: 'item1e item2 item3 item4',
    },
    {
      nombre: 'ISO 9005',
      categoria: 'Calidad',
      descripcion: 'Se puede certificar la 2015',
      link: 'https://es.wikipedia.org/wiki/ISO_9001',
      indice: {
        parrafo: 'Esta norma 5 tiene aocmo cpararfor aesta coass',
        listaItemsIndice: ['item1e',
          'item2',
          'item3',
          'item4',
        ],
      },
      listaItems: 'item1e item2 item3 item4',
    },
    {
      nombre: 'ISO 9005',
      categoria: 'Calidad',
      descripcion: 'Se puede certificar la 2015',
      link: 'https://es.wikipedia.org/wiki/ISO_9001',
      indice: {
        parrafo: 'Esta norma 5 tiene aocmo cpararfor aesta coass',
        listaItemsIndice: ['item1e',
          'item2',
          'item3',
          'item4',
        ],
      },
      listaItems: 'item1e item2 item3 item4',
    },
    {
      nombre: 'ISO 9005',
      categoria: 'Calidad',
      descripcion: 'Se puede certificar la 2015',
      link: 'https://es.wikipedia.org/wiki/ISO_9001',
      indice: {
        parrafo: 'Esta norma 5 tiene aocmo cpararfor aesta coass',
        listaItemsIndice: ['item1e',
          'item2',
          'item3',
          'item4',
        ],
      },
      listaItems: 'item1e item2 item3 item4',
    },
    {
      nombre: 'ISO 9005',
      categoria: 'Calidad',
      descripcion: 'Se puede certificar la 2015',
      link: 'https://es.wikipedia.org/wiki/ISO_9001',
      indice: {
        parrafo: 'Esta norma 5 tiene aocmo cpararfor aesta coass',
        listaItemsIndice: ['item1e',
          'item2',
          'item3',
          'item4',
        ],
      },
      listaItems: 'item1e item2 item3 item4',
    },
    {
      nombre: 'ISO 9005',
      categoria: 'Calidad',
      descripcion: 'Se puede certificar la 2015',
      link: 'https://es.wikipedia.org/wiki/ISO_9001',
      indice: {
        parrafo: 'Esta norma 5 tiene aocmo cpararfor aesta coass',
        listaItemsIndice: ['item1e',
          'item2',
          'item3',
          'item4',
        ],
      },
      listaItems: 'item1e item2 item3 item4',
    },
    {
      nombre: 'ISO 9005',
      categoria: 'Calidad',
      descripcion: 'Se puede certificar la 2015',
      link: 'https://es.wikipedia.org/wiki/ISO_9001',
      indice: {
        parrafo: 'Esta norma 5 tiene aocmo cpararfor aesta coass',
        listaItemsIndice: ['item1e',
          'item2',
          'item3',
          'item4',
        ],
      },
      listaItems: 'item1e item2 item3 item4',
    },

  ];

  getData() {
    return this.data;
  }
}
