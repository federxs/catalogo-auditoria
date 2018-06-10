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
    {
      nombre: 'ISO/IEC 27002',
      categoria: 'Seguridad',
      descripcion: 'Tecnología de la información - Técnicas de seguridad - Código de prácticas para los controles de seguridad de la información',
      link: 'https://es.wikipedia.org/wiki/ISO/IEC_27001',
      indice: {
        parrafo: 'Proporciona recomendaciones de las mejores prácticas en la gestión de la seguridad de la información a todos los interesados y responsables en iniciar, implantar o mantener sistemas de gestión de la seguridad de la información. La seguridad de la información se define en el estándar como -la preservación de la confidencialidad (asegurando que sólo quienes estén autorizados pueden acceder a la información), integridad (asegurando que la información y sus métodos de proceso son exactos y completos) y disponibilidad (asegurando que los usuarios autorizados tienen acceso a la información y a sus activos asociados cuando lo requieran)-.',
        listaItemsIndice: 'Políticas de Seguridad: Sobre las directrices y conjunto de políticas para la seguridad de la información. Revisión de las políticas para la seguridad de la información.; Organización de la Seguridad de la Información: Trata sobre la organización interna: asignación de responsabilidades relacionadas a la seguridad de la información, segregación de funciones, contacto con las autoridades, contacto con grupos de interés especial y seguridad de la información en la gestión de proyectos.;Seguridad de los Recursos Humanos: Comprende aspectos a tomar en cuenta antes, durante y para el cese o cambio de trabajo. Para antes de la contratación se sugiere investigar los antecedentes de los postulantes y la revisión de los términos y condiciones de los contratos. Durante la contratación se propone se traten los temas de responsabilidad de gestión, concienciación, educación y capacitación en seguridad de la información. Para el caso de despido o cambio de puesto de trabajo también deben tomarse medidas de seguridad, como lo es des habilitación o actualización de privilegios o accesos.;Gestión de los Activos: En esta parte se toca la responsabilidad sobre los activos (inventario, uso aceptable, propiedad y devolución de activos), la clasificación de la información (directrices, etiquetado y manipulación, manipulación) y manejo de los soportes de almacenamiento (gestión de soporte extraíbles, eliminación y soportes físicos en tránsito).;Control de Accesos: Se refiere a los requisitos de la organización para el control de accesos, la gestión de acceso de los usuarios, responsabilidad de los usuarios y el control de acceso a sistemas y aplicaciones.;Cifrado: Versa sobre los controles como políticas de uso de controles de cifrado y la gestión de claves.;Seguridad Física y Ambiental: Habla sobre el establecimiento de áreas seguras (perímetro de seguridad física, controles físicos de entrada, seguridad de oficinas, despacho y recursos, protección contra amenazas externas y ambientales, trabajo en áreas seguras y áreas de acceso público) y la seguridad de los equipos (emplazamiento y protección de equipos, instalaciones de suministro, seguridad del cableado, mantenimiento de equipos, salida de activos fuera de las instalaciones, seguridad de equipos y activos fuera de las instalaciones, reutilización o retiro de equipo de almacenamiento, equipo de usuario desatendido y política de puesto de trabajo y bloqueo de pantalla).;Seguridad de las Operaciones: procedimientos y responsabilidades. protección contra malware. resguardo. registro de actividad y monitorización. control del software operativo. gestión de las vulnerabilidades técnicas. coordinación de la auditoría de sistemas de información.;Seguridad de las Comunicaciones: gestión de la seguridad de la red. gestión de las transferencias de información.;Adquisición de sistemas, desarrollo y mantenimiento: requisitos de seguridad de los sistemas de información. seguridad en los procesos de desarrollo y soporte. datos para pruebas.;Relaciones con los Proveedores: seguridad de la información en las relaciones con los proveedores. gestión de la entrega de servicios por proveedores.;Gestión de Incidencias que afectan a la Seguridad de la Información: gestión de las incidencias que afectan a la seguridad de la información. mejoras.;Aspectos de Seguridad de la Información para la Gestión de la Continuidad del Negocio: continuidad de la seguridad de la información. Redundancias.;Conformidad: conformidad con requisitos legales y contractuales. Revisiones de la seguridad de la información.',
      },
      fechaRevision: 2013,
      esCertificable: false,
    },
    {
      nombre: 'OHSAS 18001',
      categoria: 'Salud',
      descripcion: 'SERIE DE EVALUACION EN SEGURIDAD Y SALUD OCUPACIONAL',
      link: 'https://es.wikipedia.org/wiki/OHSAS',
      indice: {
        parrafo: 'OHSAS 18001 es la especificación de evaluación reconocida internacionalmente para sistemas de gestión de la salud y la seguridad en el trabajo. Una selección de los organismos más importantes de comercio, organismos internacionales de normas y de certificación la han concebido para cubrir los vacíos en los que no existe ninguna norma internacional certificable por un tercero independiente.\n' +
        'OHSAS 18001 se ha concebido para ser compatible con ISO 9001 e ISO 14001 a fin de ayudar a las organizaciones a cumplir de forma eficaz con sus obligaciones relativas a la salud y la seguridad.',
        listaItemsIndice: 'Planificación para identificar, evaluar y controlar los riesgos;Programa de gestión de OHSAS;Estructura y responsabilidad;Formación, concienciación y competencia;Consultoría y comunicación;Control de funcionamiento;Preparación y respuesta ante emergencias;Medición, supervisión y mejora del rendimiento',
      },
      fechaRevision: 2007,
      esCertificable: true,
    },
    {
      nombre: 'ISO 14001',
      categoria: 'Ambiente',
      descripcion: 'Sistemas de Gestión Ambiental - Requisitos con orientación para el uso',
      link: 'https://en.wikipedia.org/wiki/ISO_14000',
      indice: {
        parrafo: 'La certificación ISO 14001 tiene el propósito de apoyar la aplicación de un plan de manejo ambiental en cualquier organización del sector público o privado. Fue creada por la Organización Internacional para Normalización (International Organization for Standardization - ISO), una red internacional de institutos de normas nacionales que trabajan en alianza con los gobiernos, la industria y representantes de los consumidores. Además de ISO 14001, existen otras normas ISO que se pueden utilizar como herramientas para proteger el ambiente, sin embargo, para obtener la certificación de protección al medio ambiente sólo se puede utilizar la norma ISO 14001. El grupo de normas ISO, que contiene diversas reglas internacionales que han sido uniformizadas y son voluntarias, se aplica ampliamente en todos los sectores de la industria',
        listaItemsIndice: 'Reducir los costes: como la norma ISO 14001 requiere un compromiso con la mejora continua del SGA, el establecimiento de objetivos de mejora ayuda a la organización a un uso más eficiente de las materias primas, ayudando así a reducir los costes;Gestión del cumplimiento de la legislación: la certificación ISO 14001 puede ayudar a reducir el esfuerzo necesario para gestionar el cumplimiento legal y a la gestión de sus riesgos ambientales;Reducir la duplicación de esfuerzos: su sistema de gestión permite integrar los requisitos de ésta y otras normas de gestión en un único sistema de negocio para reducir la duplicación de esfuerzos y los costes;Gestionar su reputación: la certificación ISO 14001 le ayuda a reducir los riesgos asociados a cualquier coste o daño a su reputación asociada a sanciones, y construye su imagen pública hacia sus clientes, organismos reguladores y principales partes interesadas;Ser el proveedor elegido y aumentar su ventaja competitiva: le permite trabajar con las empresas que valoran las organizaciones que son respetuosas con el medio ambiente;Facilidad de integración con otras normas de sistemas de gestión con la norma ISO 9001(Calidad), OHSAS 18001 (Seguridad y Salud laboral), ISO 50001 (Energía), y otras normas basadas en sistemas de gestión;',
      },
      fechaRevision: 2015,
      esCertificable: true,
    },
  ];

  getData() {
    return this.data;
  }
}
