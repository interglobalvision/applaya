import i18n from 'meteor/universe:i18n';

i18n.addTranslations('es', {
  apply: {
    completed: '{$percentage}% Completado',
    sections: {

      // Section: Gallery Information
      galleryInformation: {
        title: "Información de galería/espacio",
        description: `<p class='flow-text'>Gracias por tu solicitud a la tercera edición de Material Art Fair, que se llevará a cabo a del 4 al 7 de Febrero del 2016, en el Expo Reforma en la Ciudad de México.</p>
        <p class='flow-text'>El proceso de registro <strong>concluye el viernes 18 de septiembre del 2015</strong>. No se aceptará ninguna solicitud después de esta fecha.</p>
        <p class='flow-text'>Cada solicitud será cuidadosamente revisada, considerada y analizada por nuestro comité de selección del 2016. Les haremos llegar la decisión del comité a todos los solicitantes a principios de Octubre.</p>
        <p class='flow-text'>Si en algún momento necesitas pausar y deseas continuar después con tu solicitud, por favor haz click en el botón “guardar” para no perder tu información.</p>
        <p class='flow-text'>Por favor reporta cualquier error o problema directamente con nosotros a <a href='mailto:applications@material-fair.com' class='u-inline-block'>applications@material-fair.com</a>.</p>`,
        galleryName: {
          label: 'Nombre de la Galería',
        },
        address1: {
          label: 'Dirección línea 1',
        },

        address2: {
          label: 'Dirección línea 2 (si aplica)',
          review: 'Dirección línea 2',
        },

        city: {
          label: 'Ciudad',
        },

        state: {
          label: 'Estado (si aplica)',
          review: 'Estado',
        },

        postalCode: {
          label: 'Código postal (si aplica)',
          review: 'Código postal',
        },

        country: {
          label: 'País',
        },

        galleryPhone: {
          label: 'Teléfono de la galería',
        },

        galleryEmail: {
          label: 'Correo electrónico de la galería',
        },

        website: {
          label: 'Sitio web',
        },

      },

      // Section: Contact Information
      contactInformation: {
        title: 'Contacto principal',
        description: '<p>Favor de indicar la información de contacto de la persona encargada de la galería que actuará como responsable de coordinar todo lo relacionado con la feria.</p>',

        contactName: {
          label: 'Nombre completo',
        },

        contactEmail: {
          label: 'Correo electrónico',
        },

        contactPhone: {
          label: 'Teléfono celular (con clave lada)',
        },

        twitter: {
          label: 'Twitter',
          placeholder: '@theGallery',
        },

        facebook: {
          label: 'Facebook',
          placeholder: 'facebook.com/theGallery',
        },

        tumblr: {
          label: 'Tumblr',
          placeholder: 'tumblr.com/theGallery',
        },

        instagram: {
          label: 'Instagram',
          placeholder: '@theGallery',
        },

      },

      // Section: Proposal
      proposal: {
        title: 'Propuesta de <em>stand</em> para Material Art Fair 2016',
        description: '<p>En esta sección, proporcionarás información sobre tu galería, artistas seleccionados y propuesta de stand para que el Comité de Selección genere una decisión informada con respecto a tu solicitud.</p>',

        galleryHistory: {
          label: 'Historia breve de la galería'
        },

        galleryYear: {
          label: 'Año de fundación'
        },

        participation: {
          label: 'Participación en otras ferias'
        },

        artistsRepresented: {
          label: 'Artistas representados por la galería'
        },

        standProposal: {
          label: 'Propuesta de stand'
        },

      },
      
      // Section: Artists
      artists: {
        title: 'Artistas propuestos para Material Art Fair 2017',
        label: 'Artistas',

        name: {
          label: 'Nombre de artista'
        },
        cv: {
          label: 'CV',
          specs:  'PDF o DOCX.  Max 10mb'
        },
        work: {
          label: 'Obra',

          image: {
            label: 'Imágen',
            specs: 'JPG, PNG, o GIF.  72 dpi.  Max 1200px, 4mb'
          },
          workTitle: {
            label: 'Titulo'
          },
          medium: {
            label: 'Soporte'
          },
          dimensions: {
            label: 'Medidas'
          },
          year: {
            label: 'Año'
          },
        },
      },

      // Section: Booth
      booth: {
        title: 'Selección de stand',
        description: '<p><em>TENGA EN CUENTA QUE ESTA SECCIÓN HA SIDO ACTUALIZADA PARA REFLEJAR LOS CAMBIOS EN EL CONCEPTO ARQUITECTÓNICO DE LA FERIA EN SU NUEVA SEDE, EXPO REFORMA.</em></p>\
        <p>Para su edición 2016, Material Art Fair se ha orgullosamente asociado con el despacho de arquitectura <strong>APRDELESP</strong>.</p>\
        <p>Cuestionando los cánones fundamentales de la arquitectura de las ferias de arte, en las cuáles filas uniformes de stands se interponen en un diálogo incómodo y forzado con la arquitectura pre-existente del espacio que alberga la feria, APREDELESP ha reimaginado el salón <em>Xaman-Ek</em> de Expo Reforma como un terreno baldío en el que una hermosa, autónoma y funcional edificación puede construirse.</p>\
        <p>Así se crearán docenas de espacios tipo “cubo blanco” para expositores de la <strong>Sección Principal</strong> y un espacio más abierto y experimental para expositores del área de <strong>Proyectos</strong>, así mismo habrán áreas para alimentos, bebidas, libros, conferencias y otras actividades.</p>\
        <p>Los espacios dentro del área de <strong>Proyectos</strong> de la feria están abiertos a cualquier solicitante pero se les dará preferencia a los espacios independientes liderados por artistas o curadores, organizaciones sin fines de lucro y galerías que llevan poco tiempo operando.</p>\
        <p>El diseño del área de <strong>Proyectos</strong> tiene la intención de ser abierto, sin embargo los solicitantes pueden solicitar espacio de pared si lo necesitan. Material proveerá hasta dos metros lineales de pared para espacios <em>Sencillos</em> y hasta 4 metros lineales de pared para espacios <em>Dobles</em>. Se pueden pedir paneles de pared adicionales. La altura de las paredes será de tres metros. El diseño exacto y la configuración de los espacios en el área de Proyectos se discutirá y determinará basada en las necesidades del exhibidor, pero queda ultimadamente a discreción de Material Art Fair.</p>\
        <p>Los stands de la <strong>Sección Principal</strong> tendrán cuatro paredes con dos esquinas. La altura de las paredes será de tres metros.</p>\
        <ul><strong>Precios:</strong>\
          <li>Espacios de Proyectos: $175 usd x m2</li>\
          <li>Sección Principal: $275 usd x m2</li>\
        </ul>\
        <ul><strong>El stand incluye:</strong>\
          <li>Iluminación interior</li>\
          <li>Señalética de stand</li>\
          <li>Pases/gafetes de expositor</li>\
          <li>VIP de cortesía y pases de admisión general</li>\
          <li>Conexión WiFi (1 usuario)</li>\
          <li>Bodega de tránsito</li>\
          <li>Bodega de trabajo adicional</li>\
        </ul>\
        <p><strong>Por favor verifique los tamaños del tipo de stand de su interés, ya que las cantidades de cada tipo están limitadas.</strong></p>',
        label: 'Tamaño de Stand',

        boothSingle: {
          label: 'Proyecto / Sencillo / 3 m2, $525 usd',
        },
        boothDouble: {
          label: 'Proyecto / Doble / 6 m2, $1050 usd',
        },
        boothSmall: {
          label: 'Principal / Chico / 9 m2, $2475 usd',
        },
        boothMedium: {
          label: 'Principal / Mediano / 12 m2, $3300 usd',
        },
        boothPlus: {
          label: 'Principal / Mediano Plus / 16 m2, $4400 us',
        },
        boothLarge: {
          label: 'Principal / Grande / 24 m2, $6600 usd',
        },
        boothExtra: {
          label: 'Principal / Extra Grande / Te contactaremos con más información',
        },
      },

    },
  },
});
