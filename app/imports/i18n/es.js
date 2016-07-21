import i18n from 'meteor/universe:i18n';

i18n.addTranslations('es', {
  fields: {
    signature: {
      callToAction: 'Firma aquí',
    }
  },

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

      // Section: Terms and Conditions
      terms: {
        title: 'Terminos y Condiciones de Participación',
        description: '<p>1. GENERAL</p>\
        <p>Material Art Fair es un evento cultural organizado por Feria de Arte Material México, S.A. de C.V. (“Material Art Fair”) y se llevará a cabo en el Expo Reforma de la Ciudad de México. Estos términos y condiciones de participación gobiernan la participación de los expositores en Material Art Fair. Material Art Fair se reserva el derecho de, en cualquier momento,  emitir otras condiciones, reglas y reglamentos de participación. Los términos y condiciones  de este contrato también cubrirán cualquier día adicional requerido por los expositores para entrar o salir del stand dentro de la exposición.</p>\
        <p>2. FECHAS DE EXPOSICIÓN</p>\
        <p>Material Art Fair se llevará a cabo del 4 al 7 de Febrero del 2016 con una inauguración previa a la apertura al público el Jueves, 4 de Febrero del  2016.</p>\
        <p>3. UBICACIÓN</p>\
        <p>Expo Reforma</p>\
        <p>Calle Morelos 67</p>\
        <p>Col. Juarez, Del. Cuauhtemoc, 06600</p>\
        <p>Mexico City, D.F.</p>\
        <p>Mexico</p>\
        <p>4. ARTICULOS EN EXPOSICIÓN</p>\
        <p>• Pintura</p>\
        <p>• Escultura</p>\
        <p>• Obra sobre papel</p>\
        <p>• Fotografía</p>\
        <p>• Video</p>\
        <p>• Instalación</p>\
        <p>5. ESTANDARES DE EXPOSICION</p>\
        <p>El expositor accede a respetar los estándares estéticos propuestos por  Material Art Fair. El expositor accede a seguir todas las reglas, reglamentos, términos y condiciones que contiene el kit para expositores, que será proporcionado al expositor después de haber firmado su contrato con Material Art Fair.</p>\
        <p>6. ENTRADA A LA EXPOSICION</p>\
        <p>Material Art Fair será el juez único y definitivo de todas las aplicaciones y puede aceptar o rechazar las solicitudes a discreción.</p>\
        <p>El expositor garantiza que toda la información en su aplicación es exacta y que todo el trabajo presentado para su exposición es auténtico. Todas las aplicaciones serán revisadas por el comité de selección mismo que estará encargado de autorizar o rechazar a las solicitudes de acuerdo a los criterios de selección.</p>\
        <p>La aceptación se confirmará por escrito después del 1 de octubre del 2015. Material Art Fair se reserva el derecho de cancelar cualquier aplicación que sea aceptada si la  información proporcionada es falsa o si el expositor no cumple con las condiciones estipuladas. El expositor seguirá siendo responsable del alquiler completo de stand y de los cargos adicionales incurridos por Material Art Fair.</p>\
        <p>Los expositores están obligados a utilizar el stand durante la duración de la feria, manteniéndolo limpio y atendido en todo momento durante las horas de exposición. El expositor deberá indemnizar a Material Art Fair y poner a la Feria de Arte Material como no responsable, con referencia a cualquier pérdida o daño sufrido como resultado de cualquier incumplimiento de estas condiciones durante la exposición. Material Art Fair tendrá derecho a recuperar de los expositores los gastos de la feria y honorarios de abogados para ejercer cualquier acción legal que obligue a cumplir estas Condiciones.</p>\
        <p>Material Art Fair tiene el derecho de solicitar información a detalle sobre la exposición propuesta y se reserva el derecho de prohibir la exhibición de cualquier objeto que no cumpla con los requisitos de la exposición. Si es necesario, se eliminarán este tipo de objetos, los riesgos y consecuencias derivados de esto correrán por cuenta del expositor.</p>\
        <p>7. ASIGNACIÓN DE ESPACIOS</p>\
        <p>El espacio y ubicación de los stands será asignado y determinado por Material Art Fair y bajo la discreción de Material Art Fair solamente. Material Art Fair podrá, a discreción, cambiar la ubicación del stand asignado, así como alterar ligeramente el tamaño del stand si se considera necesario.</p>\
        <p>Material Art Fair se reserva el derecho de cambiar el diseño de la distribución de las áreas que no estén ocupadas y de alterar  las entradas y salidas hacia y desde el espacio de exposición en la sala y sus pasillos.</p>\
        <p>Material Art Fair tendrá derecho de cambiar, en cualquier momento, el lugar asignado de acuerdo a las normas de seguridad del Expo Reforma. Material Art Fair estará sujeta, en todo momento, a las disposiciones establecidas por el Expo Reforma en cuanto espacio, pasillos, salidas de emergencia y otras especificaciones.</p>\
        <p>Además, Material no representa ni garantiza los metros cuadrados exactos de cualquier stand arrendado, entendiéndose expresamente por el expositor que los metros cuadrados reales de un stand arrendado a continuación, serán desconocidos hasta que surja el plano final que Material Art Fair enviará. En caso de que el plano definitivo recibido por Material (que represente el tamaño del stand real que será arrendado por el expositor) difiere al del stand de los metros cuadrados aproximados que indica este documento, el plano final deberán controlar y el mismo se considerará una modificación y un complemento al presente contrato para que los metros cuadrados del tamaño del stand representado en el plano final reemplacen los metros cuadrados aproximados que indica en este documento, y los pagos de alquiler a continuación serán ajustado ligeramente en consecuencia.</p>\
        <p>Los muros, paredes adicionales especiales, pisos, alfombrado, señalización adicional, muebles, servicios eléctricos diversos, estanterías, pedestales para esculturas, acarreo y trabajos para arreglar el stand estarán disponibles con un costo extra. Los precios vendrán en el Kit del Expositor. Así mismo el expositor se compromete a pagar los costos completos de la decoración de stand y la iluminación adicional.</p>\
        <p>8. CO-EXPOSITORES / STAND COMPARTIDO</p>\
        <p>Ningún expositor podrá subarrendar su stand completo o en partes. Los productos, expositores o personas distintas de las especificadas en la solicitud del expositor no se pueden mostrar o anunciar en el stand sin autorización escrita de Material Art Fair.</p>\
        <p>9. CONDICIONES DE PAGO</p>\
        <p>Se cobrará una tasa de solicitud obligatoria y no reembolsable de $125 USD para enviar la aplicación del expositor. Material requiere del 50% del pago de alquiler de stand inmediatamente después de ser aceptado. Cualquier saldo restante debe ser pagado a más tardar el 20 de noviembre del 2015. Los pagos son no-reembolsables al menos que Material Art Fair acuerde lo contrario de forma personal con cada expositor. En caso de pago incompleto o falta de pago, Material Art Fair se reserva el derecho de  cancelar el contrato del expositor, y reasignar el espacio o retener cualquier pago hecho sin ninguna otra responsabilidad u obligación hacia el expositor.</p>\
        <p>10. RESCISIÓN Y CANCELACIÓN DEL CONTRATO DEL EXPOSITOR</p>\
        <p>Cualquier expositor que no haya ocupado su espacio antes de las 6:00 pm del Miércoles, 03 de febrero 2016, perderá su lugar y Material Art Fair reclamará  de pleno derecho de uso del espacio designado y retendrá cualquier pago hecho sin ninguna otra responsabilidad u obligación hacia el expositor.</p>\
        <p>Política de cancelación de Material Art Fair: Los expositores que quieran rescindir del contrato están sujetos a un cargo por penalización. Cualquier cancelación de stand recibido en o antes del 01 de diciembre 2015 se traducirá en una cuota para Material Art Fair equivalente a la mitad del costo del alquiler de stand. Las cancelaciones recibidas a partir del 30 de diciembre 2015 darán lugar a perder el 100% de la cuota de stand para Material Art Fair.</p>\
        <p>11. SEGUROS Y EXENCIÓN DE RESPONSABILIDAD</p>\
        <p>Cada expositor debe de contar con cobertura de seguro por daños o pérdidas a los artículos expuestos o que se expondrán, en caso de incendio, robo, robo, rotura, fugas, accidentes o daños por agua, y los riesgos de transporte desde y hacia el espacio del stand del expositor. El expositor asume todo el riesgo de pérdida relacionada con el mismo. Material Art Fair no será responsable de ningún expositor por cualquier daño o perjuicio, directo, incidental o consecuente al expositor o su / su propiedad resultantes de o relacionados con la participación de expositores, a excepción de los daños o pérdidas causados únicamente por negligencia grave de Material Art Fair.</p>\
        <p>Antes de entrar a la feria, se requerirá que cada expositor que firme un formulario liberando a Material Art Fair, sus agentes y subcontratistas de cualquier responsabilidad. Además, el expositor deberá indemnizar y mantener Material Art Fair de y contra cualquier reclamo por daños, pérdidas o daños que resulten de cualquier acto u omisión del expositor o sus empleados, agentes, representantes o subcontratistas.</p>\
        <p>12. SEGURIDAD</p>\
        <p>Se proporcionará un servicio de seguridad para el evento y las áreas de exposición las 24 horas del día. El servicio de seguridad iniciará el primer día de la instalación y continuará hasta el final del desmontaje. Sin embargo, Material Art Fair no será responsable por cualquier pérdida o daño debido a robo o extravío.</p>\
        <p>Al ponerse en marcha la instalación, se sugiere que para mantener la seguridad, nada pueda ser retirado del espacio de exposición si no van acompañados por una mercancía y / o pase de seguridad, a través del período de desmantelamiento. Sólo los expositores podrán traer artículos al espacio durante toda la duración de la feria.</p>\
        <p>Los expositores reconocen que al participar en Material Art Fair, asumen los riesgos de seguridad que no pueden ser eliminados por los servicios de seguridad proporcionados por Material Art Fair. La seguridad para stands individuales no está incluída. Se recomienda a los expositores a proteger suficientemente todas las obras de exposición y pertenencias en general y obtener una cobertura de seguro adecuada.</p>\
        <p>13. SERVICIOS ELECTRICOS</p>\
        <p>Material Art Fair hará sus mejores esfuerzos para proporcionar la iluminación en el área común y el servicio eléctrico, pero no será responsable por cualquier pérdida o daño debido a un fallo o interrupción del servicio. No se permite al expositor instalar sus propias conexiones de eléctricas.</p>\
        <p>Las normas de seguridad deben respetarse.</p>\
        <p>14. MANTENIMIENTO</p>\
        <p>Material Art Fair será responsable de mantener las áreas comunes de la exposición limpias. Cada expositor es responsable del mantenimiento de su / su stand y saldrá del stand en el mismo estado en el que se lo encontró, exceptuando los desgastes razonables. Los expositores se les cobrará una tarifa de limpieza por cualquier basura dejada en su stand o en los pasillos de la feria. Esto incluye cualquier artículos de muebles, pedestales, piezas grandes de madera, u otro tipo de construcción y/o materiales de embalaje.</p>\
        <p>Si usted tiene alguna pregunta acerca de cómo desechar algo, por favor póngase en contacto con nuestro personal. Todos los dispositivos que cuelgan deben ser retirados de la pared en el momento del desmontaje del stand. No deberá haber agujeros más grandes de un cuarto de pulgada mismos que puedan ser cortados o perforados en la pared sin el consentimiento previo de Material Art Fair. Los expositores deberán pagar y hacerse responsables por los daños que se consideren excesivos por los organizadores.</p>\
        <p>15. OBSERVACIONES GENERALES</p>\
        <p>Material Art Fair tiene derecho, en el caso de razones de peso o actos de Dios para posponer, reprogramar, acortar o extender la exposición sin responsabilidad u obligación hacia el expositor. Material Art Fair se reserva el derecho de expulsar del recinto a cualquier expositor que viole las reglas establecidas en este documento. El expositor seguirá siendo responsable por el importe total de alquiler de stand y cargos adicionales incurridos.</p>\
        <p>A pesar de cualquier conflicto de disposiciones legales, las leyes vigentes en la Ciudad de México y la República Mexicana serán aplicables a estas Condiciones y todas las cuestiones derivadas de la participación del expositor en Material Art Fair.</p>\
        <p>El expositor está de acuerdo con la jurisdicción exclusiva y lugar de celebración de cualquier procedimiento legal relacionado al mismo únicamente en un tribunal de la Ciudad de México. Estos Términos y Condiciones del expositor son el acuerdo final y exclusivo entre Material y el expositor.</p>\
        <p>16. EXPO REFORMA</p>\
        <p>El expositor también está obligado a observar y respetar tanto las directrices generales del Expo Reforma, y las normas específicas establecidas en el marco de este evento, teniendo en cuenta el incumplimiento del expositor con dichas directrices como una causa de rescisión del contrato.</p>\
        <p>17. INDEPENDENCIA</p>\
        <p>No existe una relación laboral entre las partes, que son diferentes partidos, liberando Material Art Fair de toda responsabilidad y la sujetan inofensivo en cualquier demanda laboral interpuesta por cualquiera de los empleados, el personal del expositor o asociados.</p>\
        <p>18. PROPIEDAD INTELECTUAL</p>\
        <p>El expositor declara que asegura la autorización requerida para exhibir y explotar las obras de arte que se muestran por el autor o propietario de los derechos de participación a los mismos, así como el uso de las marcas exhibidas, liberando Material Art Fair de cualquier y toda responsabilidad a este respecto.</p>\
        <p>19. CONDICIONES GENERALES</p>\
        <p>El organizador fija las condiciones generales, tales como el lugar, la duración, las fechas, los horarios de apertura y el precio del boleto de entrada a Material Art Fair y se reserva el derecho de modificarlas si es necesario. </p>\
        <p>Julio, 2015</p>\
        <p>Material Art Fair</p>\
        <p>Feria de Arte Material México S.A. de C.V.</p>',

        agreement: 'HE / HEMOS LEÍDO ESTE ACUERDO EN NOMBRE DEL EXPOSITOR EN SU TOTALIDAD, INCLUYENDO LAS NORMAS Y REGLAMENTOS, Y COMO AGENTE / S DE EXPOSITOR, CONVIENEN EN QUE EL EXPOSITOR DEBERÁ ESTAR OBLIGADO POR LOS TÉRMINOS Y CONDICIONES AQUÍ.',

        signature: {
          label: 'Firma',
        },
      }
    },
  },
});
