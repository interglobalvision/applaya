import i18n from 'meteor/universe:i18n';

i18n.addTranslations('en', {
  apply: {
    completed: '{$percentage}% Complete',
    sections: {

      // Section: Contact Information
      galleryInformation: {
        title: 'Gallery Information',
        description: "<p class='flow-text'>Thank you for your application to the third edition of Material Art Fair, which will take place from February 4th - 7th, 2017, at Expo Reforma in Mexico City.</p> <p class='flow-text'>Please remember that the <strong>application deadline is Friday, September 18th, 2015</strong>. No applications will be accepted after that date.</p> \
        <p class='flow-text'>Each application will be carefully reviewed, considered, and discussed by our 2017 Selection Committee and we will send notification of their decisions to all applicants beginning in early October.</p> \
        <p class='flow-text'>If at any time you need to pause and continue your application at a later moment, please click the save button so as not to lose any information.</p> \
        <p class='flow-text'>Please report any errors or problems directly to us at <a href='mailto:applications@material-fair.com' class='u-inline-block'>applications@material-fair.com</a>.</p>",
        galleryName: {
          label: 'Gallery Name'
        },

        address1: {
          label: 'Address line 1'
        },

        address2: {
          label: 'Address line 2 (if applicable)',
          review: 'Address line 2'
        },

        city: {
          label: 'City'
        },

        state: {
          label: 'State (if applicable)',
          review: 'State'
        },

        postalCode: {
          label: 'Postal code (if applicable)',
          review: 'Postal code'
        },

        country: {
          label: 'Country'
        },

        social: {
          label: 'Social networks'
        },

        galleryPhone: {
          label: 'Gallery phone',
        },

        galleryEmail: {
          label: 'Gallery email',
        },

        website: {
          label: 'Website'
        },

      },

      // Section: Contact Information
      contactInformation: {
        title: 'Primary contact',
        description: '<p class="flow-text">Please indicate the contact information for the primary person at the gallery who will be responsible for managing the fair details.</p>',
        contactName: {
          label: 'Name',
        },
        contactEmail: {
          label: 'Email',
        },
        contactPhone: {
          label: 'Mobile phone (with country code)',
        },

        twitter: {
          label: 'Twitter',
          placeholder: '@theGallery'
        },

        facebook: {
          label: 'Facebook',
          placeholder: 'facebook.com/theGallery'
        },

        tumblr: {
          label: 'Tumblr',
          placeholder: 'tumblr.com/theGallery'
        },

        instagram: {
          label: 'Instagram',
          placeholder: '@theGallery'
        },

      },

      // Section: Proposal
      proposal: {
        title: 'Material Art Fair 2017 Booth Proposal',
        description: '<p>In this section, you will provide information about your gallery, selected artists and booth proposal that will allow the Selection Committee to make an informed decision with respect to your application.</p>',

        galleryHistory: {
          label: 'Brief history of the gallery'
        },

        galleryYear: {
          label: 'Year gallery was founded'
        },

        participation: {
          label: 'Participation in other fairs'
        },

        artistsRepresented: {
          label: 'Artists represented by the gallery'
        },

        standProposal: {
          label: 'Booth proposal'
        },
      },

      // Section: Artists
      artists: {
        title: 'Proposed Artists for Material Art Fair 2016',
        label: 'Artists',

        name: {
          label: 'Artist name'
        },
        cv: {
          label: 'CV',
          specs:  'PDF o DOCX.  Max 10mb'
        },
        work: {
          label: 'Work',

          image: {
            label: 'Image',
            specs: 'JPG, PNG, or GIF.  72 dpi.  Maximum 1200px, 4mb',
          },
          workTitle: {
            label: 'Title'
          },
          medium: {
            label: 'Medium'
          },
          dimensions: {
            label: 'Dimensions'
          },
          year: {
            label: 'Year'
          },

        },
      },

      // Section: Booth
      booth: {
        title: 'Booth Selection',
        description: '<p><em>PLEASE NOTE THAT THIS SECTION HAS BEEN UPDATED TO REFLECT CHANGES IN THE FAIR’S ARCHITECTURAL CONCEPT FOR ITS NEW VENUE, EXPO REFORMA.</em></p>\
        <p>For its 2016 edition, Material Art Fair has proudly partnered with the Mexico City-based architectural studio, <strong>APRDELESP</strong>.</p>\
        <p>Questioning the fundamental tenets of art fair architecture, in which uniform rows of booths stand in an uncomfortable, forced dialogue with the existing architecture of the host space, APRDELESP has reimagined Expo Reforma’s <em>Xaman-Ek</em> salon as a vacant lot upon which a beautiful, autonomous, and purposeful building can be constructed.</p>\
        <p>This will create dozens of white cube-like spaces for exhibitors in the <strong>Principal Section</strong> and a more open and experimental space for exhibitors in the fair’s <strong>Projects</strong> area, as well as areas for food, drinks, books, conferences, and other activities.</p>\
        <p>Spaces within the fair’s <strong>Projects</strong> area are open to all applicants but preferential consideration will be given to artist and curator-run independent spaces, non-profit organizations, and galleries that have only been in operation a short time.</p>\
        <p>The layout of the <strong>Projects</strong> area is intended to be open, however applicants may request wall space, if needed. Material will provide up to 2 linear meters of wall for <em>Single spaces</em> and up to 4 linear meters of wall for <em>Double</em> spaces. Additional wall panels may be requested. Wall height is 3 meters. The exact layout and configuration of the spaces within the Projects area will be discussed and determined based on the exhibitor’s needs, but is ultimately up to Material Art Fair’s discretion.</p>\
        <p><strong>Principal Section</strong> stands will each feature four walls with two corners. Wall height is 3 meters.</p>\
        <ul><strong>Pricing:</strong>\
          <li>Project Space: $175 USD / m2</li>\
          <li>Principal Section: $275 USD / m2</li>\
        </ul>\
        <ul><strong>Stands include:</strong>\
          <li>Interior lighting</li>\
          <li>Booth signage</li>\
          <li>Exhibitor badges</li>\
          <li>Courtesy VIP and general admission passes</li>\
          <li>WiFi (1 user)</li>\
          <li>Empty storage</li>\
          <li>Additional work storage</li>\
        </ul>\
        <p><strong>Please check any booth sizes of interest, since quantities of each are limited.</strong></p>',
        label: 'Booth Size',

        boothSingle: {
          label: 'Project / Single / 3 m2 (approx. 32 sq. ft.), $525 USD',
        },
        boothDouble: {
          label: 'Project / Double / 6 m2 (approx. 64 sq. ft.), $1050 USD',
        },
        boothSmall: {
          label: 'Principal / Small / 9 m2 (approx. 97 sq. ft.), $2475 USD',
        },
        boothMedium: {
          label: 'Principal / Medium / 12 m2 (approx. 129 sq. ft.), $3300 USD',
        },
        boothPlus: {
          label: 'Principal / Medium Plus / 16 m2 (approx. 172 sq. ft.), $4400 USD',
        },
        boothLarge: {
          label: 'Principal / Large / 24 m2 (approx. 258 sq. ft.), $6600 USD',
        },
        boothExtra: {
          label: 'Principal / Extra Large / We will contact you with further details',
        },
      },
      
    },
  },
});
