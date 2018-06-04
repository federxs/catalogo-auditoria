import {Injectable} from '@angular/core';

@Injectable()
export class SmartTableService {

  data = [
    {
      nombre: "ISO 9001",
      categoria: "Calidad",
      descripcion: "Se puede certificar la 2013",
      link: "https://es.wikipedia.org/wiki/ISO_9001",
      indice:"<div><h3>\n" +
      "  titulo frutero\n" +
      "</h3>\n" +
      "  <p>\n" +
      "    El indisssce asdkasdfjasdjfh\n" +
      "    asdfjadsjf\n" +
      "    asdf\n" +
      "    asdf\n" +
      "    sdfdsfadfadf\n" +
      "  </p>\n" +
      "  <ul>\n" +
      "    <li>Coffee</li>\n" +
      "    <li>Tea</li>\n" +
      "    <li>Milk</li>\n" +
      "    <li>Milk</li>\n" +
      "    <li>Milk</li>\n" +
      "    <li>Milk</li>\n" +
      "    <li>Milk</li>\n" +
      "    <li>Milk</li>\n" +
      "  </ul>\n" +
      "</div>"
    },
    {
      nombre: "ISO 9002",
      categoria: "Calidad",
      descripcion: "Se puede certificar la 2015",
      link: "https://es.wikipedia.org/wiki/ISO_9001",
      indice:"<div><h3>\n" +
      "  titulo frutero\n" +
      "</h3>\n" +
      "  <p>\n" +
      "    El indice asdkasdfjasdjfh\n" +
      "    asdfjadsjf\n" +
      "    asdf\n" +
      "    asdf\n" +
      "    sdfdsfadfadf\n" +
      "  </p>\n" +
      "  <ul>\n" +
      "    <li>Coffee</li>\n" +
      "    <li>Tea</li>\n" +
      "    <li>Milk</li>\n" +
      "    <li>Milk</li>\n" +
      "    <li>Milk</li>\n" +
      "    <li>Milk</li>\n" +
      "    <li>Milk</li>\n" +
      "    <li>Milk</li>\n" +
      "  </ul>\n" +
      "</div>"
    },
    {
      nombre: "ISO 9003",
      categoria: "Calidad",
      descripcion: "Se puede certificar la 2015",
      link: "https://es.wikipedia.org/wiki/ISO_9001",
      indice:"<div><h3>\n" +
      "  titulo frutero\n" +
      "</h3>\n" +
      "  <p>\n" +
      "    El indi111ce asdkasdfjasdjfh\n" +
      "    asdfjadsjf\n" +
      "    asdf\n" +
      "    asdf\n" +
      "    sdfdsfadfadf\n" +
      "  </p>\n" +
      "  <ul>\n" +
      "    <li>Coffee</li>\n" +
      "    <li>Tea</li>\n" +
      "    <li>Milk</li>\n" +
      "    <li>Milk</li>\n" +
      "    <li>Milk</li>\n" +
      "    <li>Milk</li>\n" +
      "    <li>Milk</li>\n" +
      "    <li>Milk</li>\n" +
      "  </ul>\n" +
      "</div>"
    },
    {
      nombre: "ISO 9004",
      categoria: "Calidad",
      descripcion: "Se puede certificar la 2015",
      link: "https://es.wikipedia.org/wiki/ISO_9001",
      indice:"<div><h3>\n" +
      "  titulo frutero\n" +
      "</h3>\n" +
      "  <p>\n" +
      "    El indi4444ce asdkasdfjasdjfh\n" +
      "    asdfjadsjf\n" +
      "    asdf\n" +
      "    asdf\n" +
      "    sdfdsfadfadf\n" +
      "  </p>\n" +
      "  <ul>\n" +
      "    <li>Coffee</li>\n" +
      "    <li>Tea</li>\n" +
      "    <li>Milk</li>\n" +
      "    <li>Milk</li>\n" +
      "    <li>Milk</li>\n" +
      "    <li>Milk</li>\n" +
      "    <li>Milk</li>\n" +
      "    <li>Milk</li>\n" +
      "  </ul>\n" +
      "</div>"
    },
    {
      nombre: "ISO 9005",
      categoria: "Calidad",
      descripcion: "Se puede certificar la 2015",
      link: "https://es.wikipedia.org/wiki/ISO_9001",
      indice:"<div><h3>\n" +
      "  titulo frutero\n" +
      "</h3>\n" +
      "  <p>\n" +
      "    El ind3434ice asdkasdfjasdjfh\n" +
      "    asdfjadsjf\n" +
      "    asdf\n" +
      "    asdf\n" +
      "    sdfdsfadfadf\n" +
      "  </p>\n" +
      "  <ul>\n" +
      "    <li>Coffee</li>\n" +
      "    <li>Tea</li>\n" +
      "    <li>Milk</li>\n" +
      "    <li>Milk</li>\n" +
      "    <li>Milk</li>\n" +
      "    <li>Milk</li>\n" +
      "    <li>Milk</li>\n" +
      "    <li>Milk</li>\n" +
      "  </ul>\n" +
      "</div>"
    },

  ];

  getData() {
    return this.data;
  }
}
