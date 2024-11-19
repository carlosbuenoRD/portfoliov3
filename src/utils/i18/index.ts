import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "welcome": "Hi i`m",
          "welcome_p": "I'm passionate about learning and eager to contribute to a team where I can focus on what I love most—programming. I thrive on tackling challenges, constantly pushing myself to improve, and embracing a growth mindset. For me, learning is a lifelong journey, and I’m committed to growing both personally and professionally every day.",
          "knowledge": "Knowledge",
          "knowledge_frontend": "I have experience in creating modern, accessible, and responsive web interfaces using HTML, CSS, and JavaScript. I am proficient in tools like React.js for building reusable components and efficiently managing state. Additionally, I use Next.js to develop both dynamic and static web applications. For design, I often work with Tailwind CSS, which allows me to create visually appealing and customized interfaces quickly and efficiently.",
          "knowledge_backend": "I have experience building robust and scalable backend solutions using Node.js and NestJS, focusing on creating efficient and maintainable APIs. I work with databases like MongoDB and PostgreSQL, ensuring data integrity and optimizing queries for performance. I am skilled in implementing authentication and authorization systems, managing RESTful API endpoints, and designing data models that fit business requirements",
          "skills": 'Skills',
          "experience": 'Experience',
          "experience_empanadas": 'At EmpanadasRD, I was responsible for creating and maintaining a POS system tailored to the needs of their business.Using Next.js and MongoDB, I developed a system with five roles and three different layouts designed to align with the functionalities of each role.Over time, I optimized the system to deliver better queries and provide more detailed sales information.',
          "experience_freelance": `I have created multiple projects throughout my professional career, ranging from static and dynamic websites to sites with administrative systems, e-commerce platforms, and more. Thanks to all the knowledge I've acquired in my professional field, I have successfully completed all my independent projects, applying the organization and methodology I use in my day-to-day work`,
          "experience_mepyd": 'The MEPYD was a turning point in my career, where I began to have direct contact with clients and project leaders, significantly enhancing my leadership and teamwork skills.I had the opportunity to participate in and lead large- scale projects, such as Alertdoc, a system designed to measure efficiency by processes and users.This system will be implemented in the Dominican Republic to assess the efficiency of public organizations, contributing to the strengthening of the government sector and the continuous improvement of public services.',
          "contact": 'Contact me!',
          "contact_p": 'i’ll love to hear from you. Please fill out this form or shoot me on Whatsapp.',
        }
      },
      es: {
        translation: {
          'welcome': 'Hola soy',
          'welcome_p': 'Soy un apasionado del aprendizaje y estoy emocionado por contribuir a un equipo donde pueda enfocarme en lo que más me gusta: programar. Me motiva enfrentar desafíos, esforzarme constantemente por mejorar y adoptar una mentalidad de crecimiento. Para mí, el aprendizaje es un viaje de toda la vida, y estoy comprometido a crecer tanto personal como profesionalmente cada día.',
          "knowledge": "Conocimiento",
          "knowledge_frontend": "Cuento con experiencia en la creación de interfaces web modernas, accesibles y responsivas, utilizando HTML, CSS y JavaScript. Domino herramientas como React.js para construir componentes reutilizables y manejar el estado de manera eficiente. Además, utilizo Next.js para desarrollar aplicaciones web dinámicas y estáticas, Para el diseño, suelo trabajar con Tailwind CSS, lo que me permite crear interfaces atractivas y personalizadas de forma rápida y eficiente.",
          "knowledge_backend": "Tengo experiencia construyendo soluciones backend robustas y escalables utilizando Node.js y NestJS, enfocándome en la creación de APIs eficientes y mantenibles. Trabajo con bases de datos como MongoDB y PostgreSQL, asegurando la integridad de los datos y optimizando consultas para un mejor rendimiento. Tengo habilidades en la implementación de sistemas de autenticación y autorización, la gestión de endpoints RESTful y el diseño de modelos de datos que se ajustan a los requisitos del negocio.",
          "skills": 'Habilidades',
          "experience": 'Experiencia',
          "experience_empanadas": 'En las EmpanadasRD me encargue de crear y mantener un sistema pos enfocado en las necesidades de su negocio, Utilizando nextjs y mongodb cree un sistemas con 5 roles y 3 layout diferentes enfocados en las funcionalidades de sus roles, Optimizandolo con el tiempo para tener mejores consultas e informaciones de venta',
          "experience_freelance": 'He creado multiples proyectos a lo largo de mi carrera profesional desde paginas estaticas, dinamicas, paginas con sistemas administrativos, Paginas de ventas, etc. Gracias a todo mi conocimiento adquirido en mi ambito laboral he concluido con excelentes resultados todos los proyectos independientes con las organizacion y metodologia que utilizo en mi dia a dia en el trabajo.',
          "experience_mepyd": 'El MEPYD fue un punto de inflexión en mi carrera, donde comencé a tener un contacto directo con los clientes y los líderes de proyecto, lo que impulsó significativamente mis habilidades de liderazgo y trabajo en equipo. Tuve la oportunidad de participar y liderar proyectos de gran envergadura, como Alertdoc, un sistema de medición de eficiencia por procesos y usuarios. Este sistema se implementará en la República Dominicana para evaluar la eficiencia de las organizaciones públicas, contribuyendo al fortalecimiento del sector gubernamental y la mejora continua de los servicios públicos.',
          "projects": 'Proyectos',
          "contact": 'Contactame!',
          "contact_p": 'Estare encantado de escucharte. Porfavor llena el formulario o enviame un whatsapp',
        }
      }
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

export default i18n