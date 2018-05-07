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
                link: '/pages/tables/smart-table1',
            },
            {
                title: 'NIST',
                link: '/pages/tables/smart-table2',
            },
            {
                title: 'EIA',
                link: '/pages/tables/smart-table3',
            },
            {
                title: 'IEEE',
                link: '/pages/tables/smart-table4',
            },
            {
                title: 'MIT',
                link: '/pages/tables/smart-table5',
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
            }
        ],
    },
    {
        title: 'Contacto',
        icon: 'nb-person',
        children: [
            {
                title: 'Nosotros',
                link: '/pages/tables/smart-table12',
            }
        ]
    }
];
