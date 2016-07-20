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

      }
    },
  },
});
