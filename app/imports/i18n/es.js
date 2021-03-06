import i18n from 'meteor/universe:i18n';

i18n.addTranslations('es', {
  common: {
    next: 'Siguiente',
    prev: 'Anterior',
    application: 'Aplicación',
  },

  errors: {
    codes: {
      fourzeroone: '401 No autorizado :/',
      fourzerofour: '404 No encontramos lo que estas buscando :/',
    }
  },

  notifications: {
    error: 'Error',
    errorOccurred: 'Ha ocurrido un Error, intentalo mas tarde',
    upload: {
      success: '{$filename} cargado exitosamente',
    },
    addUser: {
      success: 'Cuenta de {$role} para {$email} creada existosamente',
      alreadyExists: '{$email} ya tiene una cuenta',
    },
    removeUser: {
      success: 'Cuenta {$email} eliminada',
      yourself: 'No te puedes eliminar a ti mismo',
    },
    payment: {
      success: 'Gracias por tu pago',
      alreadyPaid: 'Tu aplicación ya estaba pagada, por favor refresca la pagina',
    },
    delete: {
      confirm: 'Are you sure you want to delete this application and user?!',
      success: 'Application and user deleted',
    },
    unsubmit: {
      confirm: 'Are you sure you want to unsubmit this application?',
      success: 'Application unsubmitted',
    },
    markPaid: {
      confirm: 'Are you sure you want to mark this application paid?',
      success: 'Application marked as paid',
    },
    extend: {
      confirm: 'Are you sure you want to extend this application\' deadline?',
      success: 'Application marked as extended',
    },
  },

  users: {
    signup: {
      title: 'Registrarse',
      introduction: 'Registrate aquí con un email y la contraseña de tu elección de más de 7 caracteres',
    },
    login: {
      title: 'Entrar',
    },
  },

  upload: {
    chooseFile: 'Cargar Archivo',
    uploading: 'Cargando...',
    specs: {
      file: 'PDF o DOCX.  Max 10MB',
      images: 'JPG, PNG, o GIF.  72 dpi.  Max 1200px, 4MB',
    },
  },

  navbar: {
    admin: 'Admin',
    applications: 'Aplicaciones',
    myApplication: 'Mi Aplicación',
    login: 'Entrar',
    signup: 'Registrarse',
    logout: 'Salir'
  },

  applications: {
    title: 'Aplicaciones',
    status: {
      label: 'Estatus',
    },
    rating: {
      label: 'Calificación',
      average: {
        label: 'Promedio',
      },
      userRating: {
        label: 'Tu calificación',
      },
    },
    actions: {
      label: 'Acciones',
      delete: 'Eliminar',
      unsubmit: 'Anular',
      markAsPaid: 'Marcar como pagado',
      extend: 'Extender',
      approve: 'Aprobar',
    },
  },

  fields: {
    signature: {
      callToAction: 'Firma aquí',
    }
  },

  admin: {
    users: {
      addUser: {
        label: 'Añadir nuevo usuario',
        name: {
          label: 'Full name',
        },
        email: {
          label: 'Email'
        },
        role: {
          label: 'Rol',
          admin: 'Administrador',
          committee: 'Comité',
        },
      },
      removeUser: {
        label: 'Eliminar Usuario',
        confirm: '¿Estas seguro que deseas eliminar este usuario?',
      },
    }
  },

  frontpage: {
    title: 'Material Art Fair 2017 — Solicitud en línea',
    introduction: '<p>Bienvenidos a la solicitud en línea de Material Art Fair 2017.</p><p>Usuarios nuevos, favor de seleccionar tu idioma de preferencia para continuar.</p>',
    returningUsers: '<p>Usuarios registrados, favor de iniciar sesión para continuar.</p>',
  },

  apply: {
    introduction: `<p>Gracias por aplicar a la cuarta edición de Material Art Fair, que se llevará a cabo de 9 a 12 de febrero de 2017, en Expo Reforma en la Ciudad de México.</p><p>El proceso de solicitud <strong>concluye viernes, 23 de septiembre de 2016.</strong> No se aceptará ninguna solicitud después de esa fecha.</p><p>Nuestro comité de selección de 2017 revisará, considerará y analizará cada solicitud cuidadosamente. En octubre, entregaremos las decisiones del comité a todos los solicitantes.</p><p>Los cambios a tu solicitud se guardarán automáticamente. Con tu usuario y contraseña, podrás ingresar las veces que quieras a editar tu solicitud, antes de firmar y entregar.</p><p>Cualquier error o problema, por favor comunícate directamente con nosotros al siguiente correo: <a href="mailto:applications@material-fair.com">applications@material-fair.com.</a></p>`,
    startLink: 'Comienza tu aplicación',
    completed: '{$percentage}% Completado',
    thanks: 'Gracias por tu solicitud a Material Art Fair 2017. Tu tasa de solicitud ha sido procesado exitosamente. El comité de selección va a empezar a revisar las solicitudes después de la fecha límite del 23 de septiembre y comenzarámos a notificar a los solicitantes en Octubre.',
    closed: 'Sorry applications are now closed',
    sections: {

      // Section: Gallery Information
      galleryInformation: {
        stepName: "Información de galería",
        title: "Información de galería/espacio",
        galleryName: {
          label: 'Nombre de la Galería',
        },
        address: {
          label: 'Dirección',
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
          label: 'Teléfono de la galería (con clave lada)',
        },

        galleryEmail: {
          label: 'Correo electrónico de la galería',
        },

        website: {
          label: 'Sitio web',
        },

        twitter: {
          label: 'Twitter'
        },

        facebook: {
          label: 'Facebook'
        },

        instagram: {
          label: 'Instagram'
        },

      },

      // Section: Contact Information
      contactInformation: {
        stepName: 'Contacto',
        title: 'Contacto principal',
        description: '<p>Favor de indicar datos de contacto para la persona en la galería encargada de coordinar participación en la feria.</p>',

        contactName: {
          label: 'Nombre completo',
        },

        contactEmail: {
          label: 'Correo electrónico',
        },

        contactPhone: {
          label: 'Teléfono celular (con prefijo internacional)',
        },

      },

      // Section: Proposal
      proposal: {
        stepName: 'Propuesta',
        title: 'Propuesta de stand para Material Art Fair 2017',
        description: '<p>En esta sección, darás información sobre tu galería, los artistas que representas y tu propuesta de stand para MAF 2017. Nuestro Comité de Selección utilizará esta información para tomar una decisión informada con respecto a tu solicitud. En la siguiente página tendrás espacio para subir currículos de los artistas e imágenes de obras.</p>',

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
        stepName: 'Artistas y Obras',
        title: 'Artistas propuestos para Material Art Fair 2017',
        label: 'Artistas y Obras',

        name: {
          label: 'Nombre de artista'
        },
        cv: {
          label: 'CV',
        },
        work: {
          label: 'Obra',

          image: {
            label: 'Imagen',
          },
          workTitle: {
            label: 'Título'
          },
          medium: {
            label: 'Técnica'
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
        stepName: 'Selección de stand',
        title: 'Selección de stand',
        description: `<p>Para la edición de 2017, Material Art Fair ha renovado su colaboración con <strong>APRDELESP</strong>, estudio de arquitectura con base en la Ciudad de México. En esta ocasión, la feria estará dividida en <strong>dos plantas</strong> con planos casi idénticos. Los espacios expositivos rodearán un patio central y los visitantes de la feria podrán moverse libremente entre ellos.</p>
        <p>Hemos ampliado considerablemente la variedad de stands en oferta en el <strong>Área Principal</strong>, con el fin de acomodar a un rango más amplio de presupuestos y ambiciones.</p>
        <p>Los <strong>Project Spaces</strong>, como siempre, destacarán espacios independientes dirigidos por artistas y curadores, proyectos sin fines de lucro y galerías muy jóvenes, con corto tiempo en operación.</p>
        <p>La altura de los muros en todos los stands es de 3 metros.</p>
        <p><strong>Los stands incluyen:</strong>
        <ul>
          <li>• Iluminación interior</li>
          <li>• Señalética</li>
          <li>• Gafetes para expositores</li>
          <li>• Entradas de cortesía: entradas VIP y entrada general</li>
          <li>• WiFi gratuito (1 usuario)</li>
          <li>• Almacenaje de empaques vacíos</li>
          <li>• Almacenaje adicional para obras</li>
        </ul></p>
        <p><strong>SELECCIÓN DE STANDS<strong><br /><em>La cantidad de stands de cada categoría es limitada: por favor indiquen todos los stands que sean de interés. Favor de tomar en cuenta: los tamaños exactos y su disponibilidad están sujetos a cambios.</em></p>`,
        label: ' ',

        project: {
          label: 'PROJECT SPACE 5 m2 (54 pies cuadrados), con dos muros (3 metros lineales cada uno) $1000 usd (12 disponibles)',
        },
        principal1: {
          label: '9 m2 (97 pies cuadrados) $2700 usd (8 disponibles)',
        },
        principal2: {
          label: '13 m2 (140 pies cuadrados) $3900 usd (10 disponibles)',
        },
        principal3: {
          label: '15 m2 (161 pies cuadrados)  $4500 usd (10 disponibles)',
        },
        principal4: {
          label: '18 m2 (194 pies cuadrados) $5400 usd (2 disponibles)',
        },
        principal5: {
          label: '24 m2 (258 pies cuadrados.) $7200 usd (2 disponibles)',
        },
        principal6: {
          label: '31 m2 (334 pies cuadrados.) $9300 usd (2 disponibles)',
        },
        principal7: {
          label: '42 m2 (452 pies cuadrados.) $12,600 usd (2 disponibles)',
        },
        principal8: {
          label: '50 m2 (538 pies cuadrados.) $15,000 usd (4 disponibles)',
        },
      },

      // Section: Terms and Conditions
      terms: {
        stepName: 'Términos y condiciones',
        title: 'Términos y Condiciones de Participación',
        description: '<p>1. GENERAL</p><p>Material Art Fair es un evento cultural organizado por Feria de Arte Material México, S.A. de C.V. (“Material Art Fair”) y se llevará a cabo en Expo Reforma en la Ciudad de México. Estos términos y condiciones de participación gobiernan la participación de los expositores en Material Art Fair. Material Art Fair se reserva el derecho de, en cualquier momento, emitir otras condiciones, reglas y reglamentos de participación. Los términos y condiciones de este contrato también cubrirán cualquier día adicional requerido por los expositores para instalar y desmontar el stand dentro de la exposición.</p><p>2. FECHAS DE EXPOSICIÓN</p><p>Material Art Fair se llevará a cabo de 9 a 12 de febrero del 2017 con una inauguración previa a la apertura al público el jueves, 9 de febrero del 2017.</p><p>3. UBICACIÓN</p><p>Expo Reforma</p><p>Calle Morelos 67</p><p>Col. Juárez, Del. Cuauhtémoc, 06600</p><p>Ciudad de México</p><p>México</p><p>4. ARTÍCULOS EN EXPOSICIÓN</p><p>• Pintura</p><p>• Escultura</p><p>• Obra sobre papel</p><p>• Fotografía</p><p>• Video</p><p>• Instalación</p><p>5. ESTÁNDARES DE EXPOSICIÓN</p><p>El expositor accede a respetar los estándares estéticos propuestos por Material Art Fair. El expositor accede a seguir todas las reglas, reglamentos, términos y condiciones que contiene el kit para expositores, que será proporcionado al expositor después de haber firmado este contrato con Material Art Fair.</p><p>6. ENTRADA A LA EXPOSICION</p><p>Material Art Fair será el juez único y definitivo de todas las aplicaciones y puede aceptar o rechazar las solicitudes a su discreción. El expositor garantiza que toda la información en su aplicación es correcta y que todo el trabajo presentado para su exposición es auténtico. Todas las aplicaciones serán revisadas por el comité de selección mismo que estará encargado de autorizar o rechazar a las solicitudes de acuerdo a los criterios de selección.</p><p>La aceptación se confirmará por escrito durante octubre del 2016. Material Art Fair se reserva el derecho de cancelar cualquier aplicación que sea aceptada si la información proporcionada es falsa o si el expositor no cumple con las Condiciones estipuladas. El expositor seguirá siendo responsable del alquiler completo de stand y de los cargos adicionales incurridos por Material Art Fair.</p><p>Los expositores están obligados a utilizar el stand durante la duración de la feria, manteniéndolo limpio y atendido en todo momento durante las horas de exposición. El expositor deberá indemnizar a Material Art Fair y poner a la Feria de Arte Material como no responsable, con referencia a cualquier pérdida o daño sufrido como resultado de cualquier incumplimiento de estas condiciones durante la exposición. Material Art Fair tendrá derecho a </p><p>recuperar de los expositores los gastos de la feria y honorarios de abogados para ejercer cualquier acción legal que obligue a cumplir estas Condiciones.</p><p>Material Art Fair tiene el derecho de solicitar información detallada sobre la exposición propuesta y se reserva el derecho de prohibir la exhibición de cualquier objeto que no cumpla con los requisitos de la exposición. Si es necesario, se eliminarán este tipo de objetos, los riesgos y consecuencias derivados de esto correrán por cuenta del expositor.</p><p>7. ASIGNACIÓN DE ESPACIOS</p><p>El espacio y ubicación de los stands será asignado y determinado por Material Art Fair y bajo la discreción de Material Art Fair solamente. Material Art Fair podrá, a discreción, cambiar la ubicación del stand asignado, así como alterar ligeramente el tamaño del stand si se considera necesario.</p><p>Material Art Fair se reserva el derecho de cambiar el diseño de la distribución de las áreas que no estén ocupadas y de alterar las entradas y salidas hacia y desde el espacio de exposición en la sala y sus pasillos.</p><p>Material Art Fair tendrá derecho de cambiar, en cualquier momento, el lugar asignado de acuerdo a las normas de seguridad del Expo Reforma. Material Art Fair estará sujeta, en todo momento, a las disposiciones establecidas por el Expo Reforma en cuanto espacio, pasillos, salidas de emergencia y otras especificaciones.</p><p>Además, Material no representa ni garantiza los metros cuadrados exactos de cualquier stand arrendado, entendiéndose expresamente por el expositor que los metros cuadrados reales de un stand arrendado a continuación, serán desconocidos hasta que surja el plano final que Material Art Fair enviará. En caso de que el plano definitivo recibido por Material (que represente el tamaño del stand real que será arrendado por el expositor) difiere al del stand de los metros cuadrados aproximados que indica este documento, el plano final deberán controlar y el mismo se considerará una modificación y un complemento al presente contrato para que los metros cuadrados del tamaño del stand representado en el plano final reemplacen los metros cuadrados aproximados que indica en este documento, y los pagos de alquiler a continuación serán ajustado ligeramente en consecuencia.</p><p>Los muros, paredes adicionales especiales, pisos, alfombrado, señalización adicional, muebles, servicios eléctricos diversos, estanterías, pedestales para esculturas, acarreo y trabajos para arreglar el stand estarán disponibles con un costo extra. Los precios vendrán en el Kit del Expositor. Así mismo el expositor se compromete a pagar los costos completos de la decoración de stand y la iluminación adicional.</p><p>8. CO-EXPOSITORES / STAND COMPARTIDO</p><p>Ningún expositor podrá subarrendar su stand completamente o en partes. Los productos, expositores o personas distintas de las especificadas en la solicitud del expositor no se pueden mostrar o anunciar en el stand sin autorización escrita de Material Art Fair.</p><p>9. CONDICIONES DE PAGO</p><p>Se cobrará una tasa de solicitud obligatoria y no reembolsable de $150 USD para enviar la aplicación del expositor. Esta tasa no se acredita a la cuenta de alquiler de stand. Material requiere del 50% del pago de alquiler de stand inmediatamente después de ser aceptado. Cualquier saldo restante debe ser pagado a más tardar el 25 de noviembre del 2016. Los pagos son no-reembolsables al menos que Material Art Fair acuerde lo contrario de forma personal con cada expositor. En caso de pago incompleto o falta de pago, Material Art Fair se reserva el derecho de cancelar el contrato del expositor, y reasignar el espacio o retener cualquier pago hecho sin ninguna otra responsabilidad u obligación hacia el expositor.</p><p>10. RESCISIÓN Y CANCELACIÓN DEL CONTRATO DEL EXPOSITOR</p><p>Cualquier expositor que no haya ocupado su espacio antes de las 6:00 pm del Miércoles, 08 de febrero 2017, perderá su lugar y Material Art Fair reclamará de pleno derecho de uso del espacio designado y retendrá cualquier pago hecho sin ninguna otra responsabilidad u obligación hacia el expositor.</p><p>Política de cancelación de Material Art Fair: Los expositores que quieran rescindir del contrato están sujetos a un cargo por penalización. Cualquier cancelación de stand recibido en o antes del 02 de diciembre 2016 se traducirá en una cuota para Material Art Fair equivalente a la mitad del costo del alquiler de stand. Las cancelaciones recibidas a partir del 16 de diciembre 2016 darán lugar a perder el 100% de la cuota de stand para Material Art Fair.</p><p>11. SEGUROS Y EXENCIÓN DE RESPONSABILIDAD</p><p>Cada expositor debe de contar con cobertura de seguro por daños o pérdidas a los artículos expuestos o que se expondrán, en caso de incendio, robo, hurto, rotura, fugas, accidentes, temblores o daños por agua, y los riesgos de transporte desde y hacia el espacio del stand del expositor. El expositor asume todo el riesgo de pérdida relacionada con el mismo. Material Art Fair no será responsable de ningún expositor por cualquier daño o perjuicio, directo, incidental o consecuente al expositor o su propiedad resultantes de o relacionados con la participación de expositores, a excepción de los daños o pérdidas causados únicamente por negligencia grave de Material Art Fair.</p><p>Antes de entrar a la feria, se requerirá que cada expositor firme un formulario liberando a Material Art Fair, sus agentes y subcontratistas de cualquier responsabilidad. Además, el expositor deberá indemnizar y mantener Material Art Fair de y contra cualquier reclamo por daños, pérdidas o daños que resulten de cualquier acto u omisión del expositor o sus empleados, agentes, representantes o subcontratistas.</p><p>12. SEGURIDAD</p><p>Se proporcionará un servicio de seguridad para el evento y las áreas de exposición las 24 horas del día. El servicio de seguridad iniciará el primer día de la instalación y continuará hasta el final del desmontaje. Sin embargo, Material Art Fair no será responsable por cualquier pérdida o daño debido a robo o extravío.</p><p>Con el fin de mantener seguridad, comenzando con el periodo de instalación nada podrá ser retirado del espacio de exposición si no va acompañado por un pase de mercancía y / o pase de seguridad, hasta concluir el período de desmontaje. Sólo los expositores podrán traer artículos al espacio durante toda la duración de la feria.</p><p>Los expositores reconocen que al participar en Material Art Fair, asumen los riesgos de seguridad que no pueden ser eliminados por los servicios de seguridad proporcionados por Material Art Fair. La seguridad para stands individuales no está incluida. Se recomienda enfáticamente a los expositores a proteger suficientemente todas las obras de exposición y pertenencias en general y obtener una cobertura de seguro adecuada.</p><p>13. SERVICIOS ELECTRICOS</p><p>Material Art Fair hará sus mejores esfuerzos para proporcionar la iluminación en el área común y el servicio eléctrico, pero no será responsable por cualquier pérdida o daño debido a un fallo o interrupción del servicio. No se permite al expositor instalar sus propias conexiones eléctricas.</p><p>Las normas de prevención contra incendios y seguridad deben respetarse.</p><p>14. MANTENIMIENTO</p><p>Material Art Fair será responsable de mantener las áreas comunes de la exposición limpias. Cada expositor es responsable del mantenimiento de su stand dejará su stand en el mismo estado en el que se lo encontró, exceptuando los desgastes razonables. Se les cobrará una tarifa de limpieza a los Expositores por cualquier basura dejada en su stand o en los pasillos de la feria. Esto incluye artículos de mueblería, pedestales, piezas grandes de madera, u otros materiales de construcción y/o de embalaje.</p><p>Si tiene alguna duda acerca de cómo desechar algo, por favor póngase en contacto con los gerentes de Material Art Fair. Todos los dispositivos colgantes deben ser retirados de la pared en el momento del desmontaje del stand. Agujeros que midan más de un cuarto de pulgada no podrán ser cortados o perforados en la pared sin el previo consentimiento de Material Art Fair. Los expositores serán responsables y cobrados por daños considerados excesivos por los organizadores.</p><p>15. OBSERVACIONES GENERALES</p><p>Material Art Fair tiene derecho, en el caso de razones de peso o actos de Dios para posponer, reprogramar, reducir o extender la exposición sin responsabilidad u obligación hacia el expositor. Material Art Fair se reserva el derecho de expulsar del recinto a cualquier expositor que viole las reglas establecidas en este documento. El expositor seguirá siendo responsable por el importe total de alquiler de stand y cargos adicionales incurridos.</p><p>A pesar de cualquier conflicto de disposiciones legales, las leyes vigentes en la Ciudad de México y la República Mexicana serán aplicables a estas Condiciones y todas las cuestiones derivadas de la participación del expositor en Material Art Fair.</p><p>El expositor accede la jurisdicción exclusiva y lugar de celebración de cualquier procedimiento legal relacionado al mismo únicamente en un tribunal de la Ciudad de México. Estos Términos y Condiciones del expositor son el acuerdo final y exclusivo entre Material y el expositor.</p><p>16. EXPO REFORMA</p><p>El expositor también está obligado a observar y respetar tanto las directrices generales de Expo Reforma, y las normas específicas establecidas en el marco de este evento, teniendo en cuenta el incumplimiento del expositor con dichas directrices como una causa de rescisión del contrato.</p><p>17. INDEPENDENCIA</p><p>No existe una relación laboral entre las partes, que son diferentes partes, liberando Material Art Fair de toda responsabilidad y considerada como inofensiva en cualquier demanda laboral interpuesta por cualquiera de los empleados del expositor, su personal o sus asociados.</p><p>18. PROPIEDAD INTELECTUAL</p><p>El expositor declara que ha asegurado la autorización requerida para exhibir y explotar las obras de arte que se muestran por el autor o propietario de los derechos de participación a los mismos, así como el uso de las marcas exhibidas, liberando Material Art Fair de cualquier y toda responsabilidad a este respecto.</p><p>19. CONDICIONES GENERALES</p><p>El organizador fija las condiciones generales, tales como el lugar, la duración, las fechas, los horarios de apertura y el precio del boleto de entrada a Material Art Fair y se reserva el derecho de modificarlas si es necesario.</p>',
        agreement: 'HE / HEMOS LEÍDO ESTE ACUERDO EN NOMBRE DEL EXPOSITOR EN SU TOTALIDAD, INCLUYENDO LAS NORMAS Y REGLAMENTOS, Y COMO AGENTE / S DE EXPOSITOR, CONVIENEN EN QUE EL EXPOSITOR DEBERÁ ESTAR OBLIGADO POR LOS TÉRMINOS Y CONDICIONES AQUÍ.',

        name: {
          label: 'Nombre completo',
        },

        date: {
          label: 'Fecha',
        },

        signature: {
          label: 'Firma',
        },
      }
    },

    submit: {
      title: 'Revisar y enviar',
      description: '<p>En esta sección podrás revisar toda la información de tu solicitud. Por favor confirma que cada sección está completa y correcta, antes de enviar y pagar. No podrás hacer cambios después de enviar tu solicitud. Tu solicitud no estará completa hasta finalizar el pago.</p>',
      confirmation: '<b>IMPORTANTE</b>: Una vez enviada tu aplicación, no podrás regresar a editar tu solicitud. Al pagar la tasa de solicitud, la solicitud estará finalizada. La solicitud se considerará incompleta hasta finalizar el pago.',
      button: 'Enviar e ir a Pago',
    },

    payment: {
      title: 'Pago de tasa de solicitud',
      feeText: 'Tasa de solicitud',
      description: 'Muchísimas gracias por solicitar participación en la edición 2017 de Material Art Fair. Para finalizar tu registro, se cobra un monto de $150 USD. El cargo es obligatorio y no reembolsable. Toma en cuenta que este cargo aparecerá como "Conekta" en tu estado de cuenta bancaria o tarjeta de crédito.',
      pay: {
        label: 'Pagar',
      },

      name: {
        label: 'Nombre como aparece en la tarjeta',
      },
      cardNumber: {
        label: 'Numero de tarjeta',
      },
      cvc: {
        label: 'CVC',
      },
      expirationMonth: {
        label: 'Mes de expiración',
      },
      expirationYear: {
        label: 'Año de expiración',
      },
      address1: {
        label: 'Dirección línea 1',
      },
      address2: {
        label: 'Dirección línea 2',
      },
      city: {
        label: 'Ciudad',
      },
      postalCode: {
        label: 'Código postal',
      },
      state: {
        label: 'Estado',
      },
      country: {
        label: 'País',
      },
      phone: {
        label: 'Teléfono',
      },
      email: {
        label: 'Email',
      },
      confirm: {
        label: 'Al hacer click en el botón "Pagar", te comprometes a pagar la tasa de solicitud de $150 USD. Recibirás una confirmación del cargo, así como la confirmación de que tu solicitud a Material Art Fair 2017 se ha completado.',
      },
    },
  },

  single: {
    title: 'Single Application',
    edit: 'Editar esta sección',
    section: 'Sección',
  },

  applySidebar: {
    introduction: 'Introducción',
    sections: 'Secciones',
  },

  footer: {
    applaya: 'Applaya: Bien hecho en CDMX por Interglobal Vision para Material Art Fair 2017',
  },
});
