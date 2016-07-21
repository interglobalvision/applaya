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
    },
  },
});
