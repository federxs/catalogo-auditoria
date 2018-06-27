import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
    {
        title: 'Inicio',
        icon: 'nb-home',
        link: '/pages/inicio',
        home: true,
    },
    {
        title: 'SECCIONES',
        group: true,
    },
    {
        title: 'Normas',
        icon: 'nb-compose',
        children: [
            {
                title: 'Consultar',
                link: '/pages/tables/smart-table',
            },
        ],
    },
    {
        title: 'Institutos',
        icon: 'nb-star',
        children: [
            {
                title: 'ISO',
                url: 'https://www.iso.org/home.html',
                target: '_blank',
            },
            {
                title: 'NIST',
                url: 'https://www.nist.gov/',
                target: '_blank',
            },
            {
                title: 'EIA',
                url: 'https://www.ecianow.org/standards-practices/standards/',
                target: '_blank',
            },
            {
                title: 'IEEE',
                url: 'https://www.ieee.org/standards/index.html',
                target: '_blank',
            },
            {
                title: 'COBIT 5',
                url: 'http://www.isaca.org/COBIT/Pages/COBIT-5-spanish.aspx',
                target: '_blank',
            }
        ],
    },
    {
        title: 'Auditoria',
        icon: 'nb-lightbulb',
        children: [
            {
                title: 'Que es?',
                link: '/pages/tables/smart-table6',
            },
            {
                title: 'Que tipos hay?',
                link: '/pages/tables/smart-table7',
            },
            {
                title: 'Rol del Auditor',
                link: '/pages/tables/smart-table8',
            },
        ],
    },
    {
        title: 'Contacto',
        icon: 'nb-person',
        children: [
            {
                title: 'Nosotros',
                link: '/pages/tables/smart-table12',
            },
        ],
    },
];
