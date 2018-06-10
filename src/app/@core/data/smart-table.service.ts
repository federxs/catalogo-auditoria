import {Injectable} from '@angular/core';

@Injectable()
export class SmartTableService {

  data = [
    {
      nombre: 'ISO/IEC 27000',
      categoria: 'Seguridad',
      descripcion: 'Information security management systems — Overview and vocabulary',
      link: 'https://en.wikipedia.org/wiki/ISO/IEC_27000-series',
      indice: {
        parrafo: 'The series provides best practice recommendations on information security management - the management of information risks through information security controls - within the context of an overall Information security management system (ISMS), similar in design to management systems for quality assurance (the ISO 9000 series), environmental protection (the ISO 14000 series) and other management systems.[2][3][4]\n' +
        'The series is deliberately broad in scope, covering more than just privacy, confidentiality and IT/technical/cybersecurity issues. It is applicable to organizations of all shapes and sizes. All organizations are encouraged to assess their information risks, then treat them (typically using information security controls) according to their needs, using the guidance and suggestions where relevant. Given the dynamic nature of information risk and security, the ISMS concept incorporates continuous feedback and improvement activities to respond to changes in the threats, vulnerabilities or impacts of incidents.\n' +
        'The standards are the product of ISO/IEC JTC1 (Joint Technical Committee 1) SC27 (Subcommittee 27), an international body that meets in person twice a year.\n' +
        'The ISO/IEC standards are sold directly by ISO, mostly in English, French and Chinese. Sales outlets associated with various national standards bodies also sell directly translated versions in other languages.',
        listaItemsIndice: 'Objeto y campo de aplicación: Especifica la finalidad de la norma y su uso dentro de una organización.;' +
        'Referencias normativas;' +
        'Término y definiciones: Los términos y definiciones usados se basan en la norma ISO/IEC 27000.;' +
        'Contexto de la organización: Se busca determinar las necesidades y expectativas dentro y fuera de la organización que afecten directa o indirectamente al sistema de gestión de la seguridad de la información. Adicional a esto, se debe determinar el alcance.;' +
        'Liderazgo: Habla sobre la importancia de la alta dirección y su compromiso con el sistema de gestión, estableciendo políticas, asegurando la integración de los requisitos del sistema de seguridad en los procesos de la organización, así como los recursos necesarios para su implementación y operatividad.;' +
        'Planificación: Se deben valorar, analizar y evaluar los riesgos de seguridad de acuerdo a los criterios de aceptación de riesgos, adicional mente se debe dar un tratamiento a los riesgos de la seguridad de la información. Los objetivos y los planes para logar dichos objetivos también se deben definir en este punto.;' +
        'Soporte: Se trata sobre los recursos destinados por la organización, la competencia de personal, la toma de conciencia por parte de las partes interesadas, la importancia sobre la comunicación en la organización. La importancia de la información documentada, también se trata en este punto.;' +
        'Operación: El cómo se debe planificar y controlar la operación, así como la valoración de los riesgos y su tratamiento.;' +
        'Evaluación de desempeño: Debido a la importancia del ciclo PHVA (Planificar, Hacer, Verificar, Actuar), se debe realizar un seguimiento, medición, análisis y evaluación del sistema de gestión de la información.;' +
        'Mejora: Habla sobre el tratamiento de las no conformidades, las acciones correctivas y a mejora continua.',
      },
      fechaRevision: 2018,
      esCertificable: false,
    },
    {
      nombre: 'ISO/IEC 27001',
      categoria: 'Seguridad',
      descripcion: 'Information technology - Security techniques - Information security management systems - Requirements',
      link: 'https://es.wikipedia.org/wiki/ISO/IEC_27001',
      indice: {
        parrafo: 'Especifica los requisitos necesarios para establecer, implantar, mantener y mejorar un sistema de gestión de la seguridad de la información (SGSI) según el conocido como “Ciclo de Deming”: PDCA - acrónimo de Plan, Do, Check, Act (Planificar, Hacer, Verificar, Actuar). Es consistente con las mejores prácticas descritas en ISO/IEC 27002, anteriormente conocida como ISO/IEC 17799, con orígenes en la norma BS 7799-2:2002, desarrollada por la entidad de normalización británica, la British Standards Institution (BSI).',
        listaItemsIndice: 'Objeto y campo de aplicación: Especifica la finalidad de la norma y su uso dentro de una organización.;' +
        'Referencias normativas;' +
        'Término y definiciones: Los términos y definiciones usados se basan en la norma ISO/IEC 27000.;' +
        'Contexto de la organización: Se busca determinar las necesidades y expectativas dentro y fuera de la organización que afecten directa o indirectamente al sistema de gestión de la seguridad de la información. Adicional a esto, se debe determinar el alcance.;' +
        'Liderazgo: Habla sobre la importancia de la alta dirección y su compromiso con el sistema de gestión, estableciendo políticas, asegurando la integración de los requisitos del sistema de seguridad en los procesos de la organización, así como los recursos necesarios para su implementación y operatividad.;' +
        'Planificación: Se deben valorar, analizar y evaluar los riesgos de seguridad de acuerdo a los criterios de aceptación de riesgos, adicional mente se debe dar un tratamiento a los riesgos de la seguridad de la información. Los objetivos y los planes para logar dichos objetivos también se deben definir en este punto.;' +
        'Soporte: Se trata sobre los recursos destinados por la organización, la competencia de personal, la toma de conciencia por parte de las partes interesadas, la importancia sobre la comunicación en la organización. La importancia de la información documentada, también se trata en este punto.;' +
        'Operación: El cómo se debe planificar y controlar la operación, así como la valoración de los riesgos y su tratamiento.;' +
        'Evaluación de desempeño: Debido a la importancia del ciclo PHVA (Planificar, Hacer, Verificar, Actuar), se debe realizar un seguimiento, medición, análisis y evaluación del sistema de gestión de la información.;' +
        'Mejora: Habla sobre el tratamiento de las no conformidades, las acciones correctivas y a mejora continua.',
      },
      fechaRevision: 2013,
      esCertificable: true,
    },

  ];

  getData() {
    return this.data;
  }
}
