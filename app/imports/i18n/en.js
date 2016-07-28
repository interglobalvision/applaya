import i18n from 'meteor/universe:i18n';

i18n.addTranslations('en', {
  fields: {
    signature: {
      callToAction: 'Sign here',
    }
  },

  admin: {
    users: {
      addUser: {
        email: {
          label: 'Email'
        },
        role: {
          label: 'Role'
        }
      }
    }
  },

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

      // Section: Terms and Conditions
      terms: {
        title: 'Terms and Conditions of Participation',
        description: '<p>1. GENERAL</p>\
        <p>Material Art Fair is a cultural event organized by Feria de Arte Material México, S.A. de C.V. (“Material Art Fair”) and will take place at Expo Reforma in Mexico City. These Terms and Conditions of Participation govern the exhibitor’s participation in Material Art Fair. Material Art Fair reserves the right to, at any time, issue other conditions, rules and regulations of participation. The terms and conditions of this Agreement shall also cover any additional days required for Exhibitor to move-in and move-out of the booth space at the Exhibition.</p>\
        <p>2. SHOW DATES</p>\
        <p>Material Art Fair will take place February 4-7, 2016 with the opening preview on Thursday, February 4, 2016.</p>\
        <p>3. LOCATION</p>\
        <p>Expo Reforma</p>\
        <p>Calle Morelos 67</p>\
        <p>Col. Juarez, Del. Cuauhtemoc, 06600 </p>\
        <p>Mexico City, D.F.</p>\
        <p>Mexico</p>\
        <p>4. ARTICLES ON EXHIBIT</p>\
        <p>• Painting</p>\
        <p>• Sculpture</p>\
        <p>• Works on Paper</p>\
        <p>• Photography</p>\
        <p>• Video</p>\
        <p>• Installation</p>\
        <p>5. EXHIBITION STANDARDS</p>\
        <p>Exhibitor agrees to abide by the aesthetic standards set forth by Material Art Fair. Exhibitor agrees to be bound by all rules, regulations, terms and conditions contained in the Exhibitor’s Kit, to be supplied to Exhibitor after this Agreement has been executed by Material Art Fair and the Exhibitor.</p>\
        <p>6. ADMISSION TO EXHIBITION</p>\
        <p>Material Art Fair shall be the sole and final judge of all applications and may accept or reject applications in its sole discretion. The Exhibitor guarantees that all information in his/her application is accurate and that all work submitted for exhibition is authentic. All applications will be reviewed by a selection committee, which will be the body in charge of authorizing or rejecting applications pursuant to selection criteria. </p>\
        <p>Admission will be confirmed in writing after October 1st, 2015. Material Art Fair reserves the right to cancel any application that is accepted on the basis of false information or if the exhibitor fails to comply with these Conditions, and the exhibitor will remain liable for the full booth rental and any additional charges incurred by Material Art Fair.</p>\
        <p>Exhibitors are obliged to use the booth for the duration of the fair and keep the booth sufficiently manned at all times during exhibition hours. The exhibitor will indemnify Material Art Fair, and hold Material Art Fair harmless, for and from any and all loss or damage incurred by Material Art Fair that is a result of any breach of these Conditions. Material Art Fair shall be entitled to recover from exhibitor Material Art Fair’s expenses and attorney’s fees in any action to enforce these Conditions.</p>\
        <p>Material Art Fair has the right to require complete details of a proposed exhibit and reserves the right to prohibit the exhibition of any object which does not meet the requirements of the exposition. If necessary, the removal of such objects will be at the sole risk and expense of the exhibitor.</p>\
        <p>7. ALLOCATION OF SPACE</p>\
        <p>Booth space and booth location at the exhibition will be allocated and determined by Material Art Fair and at Material Art Fair’s sole discretion. Material Art Fair may, in its discretion, change the location of allocated space, as well as slightly alter the shape of the booth if necessary.</p>\
        <p>Material Art Fair reserves the right to rearrange the layout of unoccupied areas, and to alter entrances and exits to and from the exhibition space, halls and aisles. </p>\
        <p>Material Art Fair will be entitled to change, at any time, the place allocated according to Expo Reforma’s safety regulations. Material Art Fair shall be subject, at any time, to the provisions set forth by Expo Reforma regarding space, aisles, emergency exits and other specifications.</p>\
        <p>Furthermore, Material does not represent, warrant or guarantee the final square footage of any booth space leased hereunder, it being expressly understood by Exhibitor the actual square footage of a booth leased hereunder shall be unknown until a final floor plan is received by Material. Should the final floor plan received by Material (depicting the actual booth size to be leased to Exhibitor) differ from the approximate booth square footage stated herein, the final floor plan shall control and same shall be deemed to amend and supplement this Agreement so that the square footage of the booth size depicted in the final floor plan shall replace the approximate square footage stated herein, and the rental payments hereunder will be slightly adjusted accordingly.</p>\
        <p>Additional walls, special walls, custom flooring, custom carpeting, additional signage, furniture, miscellaneous electrical services, shelving, sculpture pedestals, drayage & labor furnished for exhibitor-supplied materials are available at additional charges. Prices are to be outlined in the Exhibitor’s Kit. Exhibitor agrees to pay full costs of booth decoration and additional lighting.</p>\
        <p>8. CO-EXHIBITORS / BOOTH SHARING</p>\
        <p>No exhibitor may sublet his/her booth either wholly or in part. Products, exhibitors or individuals other than those specified in the exhibitor’s application may not be shown or advertised in the booth without written permission from Material Art Fair.</p>\
        <p>9. CONDITIONS OF PAYMENT</p>\
        <p>A mandatory and non-refundable $125 USD application fee will be due upon submission of the exhibitor application. 50% of the booth rental payment will be due upon acceptance. Any remaining balance must be paid no later than November 20th, 2015. Payments are non-refundable unless Material Art Fair otherwise agrees in its discretion. In event of incomplete payment or nonpayment, Material Art Fair may cancel the exhibitor’s contract, reallocate the space and retain any payments made without any further liability or obligation to the exhibitor.</p>\
        <p>10. WITHDRAWAL FROM THE EXHIBITOR’S CONTRACT</p>\
        <p>Any exhibitor that has not occupied its space by 6:00pm on Wednesday, February 3, 2016, will forfeit that space and Material Art Fair will claim full rights to that space and retain any payments made without any further liability or obligation to the exhibitor.</p>\
        <p>Material Art Fair Cancellation Policy: Exhibitors withdrawing from the contract are subject to a penalty charge. Any booth cancellations received on or before December 1, 2015 will result in a fee to Material Art Fair equal to half the cost of the booth rental. Cancellations received on or after December 30, 2015 will result in forfeiting 100% of the booth fee to Material Art Fair.</p>\
        <p>11. INSURANCE AND EXEMPTION FROM LIABILITY</p>\
        <p>Each exhibitor should obtain insurance coverage for damage or loss to articles exhibited or to be exhibited, due to fire, theft, burglary, breakage, leakage, accident or water damage, and the risks of transport to and from the exhibitor’s booth space. The exhibitor assumes all risk of loss related thereto. Material Art Fair will not be liable to any exhibitor for any direct, incidental or consequential damages or loss to exhibitor or his her/its property arising from or connected with exhibitor’s participation, except for damage or loss caused solely by Material Art Fair’s gross negligence.</p>\
        <p>Prior to admission to the show, each exhibitor will be required to sign a form releasing Material Art Fair, their agents and subcontractors from liability. Furthermore, the exhibitor shall indemnify and hold Material Art Fair harmless from and against any claim whatsoever for injury, loss or damage resulting from any act or omission of the exhibitor or its employees, agents, representatives, or subcontractors.</p>\
        <p>12. SECURITY</p>\
        <p>A security service for the show and the show areas will be provided 24 hours a day. Security service will commence the first day of installation and continue until the end of dismantling. Nevertheless, Material Art Fair shall not be liable for any loss or damage due to theft.</p>\
        <p>To maintain security, once set-up begins, nothing can be removed from the show premises unless accompanied by a merchandise and/or security pass, through the dismantling period. Only exhibitors may bring articles onto the premises throughout the duration of the show.  </p>\
        <p>Exhibitor recognizes that by participating in Material Art Fair, it assumes security risks that cannot be eliminated by security services provided by Material Art Fair. Security for individual booths is not included. Exhibitors are strongly advised to sufficiently protect all exhibition works and obtain adequate insurance coverage.</p>\
        <p>13. ELECTRICAL SERVICES</p>\
        <p>Material Art Fair will use its best efforts to provide common area lighting and electrical service, but shall not be liable for any loss or damage due to failure or interruption of service. No exhibitor is allowed to install his her own power connections.</p>\
        <p>Fire, safety and security regulations must be adhered to.</p>\
        <p>14. MAINTENANCE</p>\
        <p>Material Art Fair will be responsible for keeping the common areas of the show site clean. Each exhibitor is responsible for the maintenance of his/her booth and will leave the booth in the same condition in which it was found, reasonable wear and tear excepted. Exhibitors will be charged a cleaning fee for any trash left in their booth or in the hallways of the fair. This includes any furniture items, pedestals, large pieces of wood, or other construction and/or packing materials.</p>\
        <p>If you have a question about how to discard of something, please contact Material Art Fair show management. All hanging devices must be removed from the wall when dismantling the booth. No holes larger than a quarter inch may be cut or drilled into the wall without prior consent of Material Art Fair. Exhibitors will be charged for any damages deemed excessive by show management.</p>\
        <p>15. GENERAL REMARKS</p>\
        <p>Material Art Fair is entitled in the case of compelling reasons or Acts of God to postpone, reschedule, shorten or extend the exhibition without liability or obligation to the exhibitor. Material Art Fair reserves the right to expel from the fair any exhibitor who violates the rules stated herein. The exhibitor will remain liable for the full amount of booth rental and any additional charges incurred.</p>\
        <p>Notwithstanding any conflict of law provisions, the laws in force in Mexico City (Distrito Federal) and the Mexican Republic shall be applicable to these Conditions and all matters arising from exhibitor’s participation in Material Art Fair.</p>\
        <p>Exhibitor agrees to the exclusive jurisdiction and venue for any legal proceedings related thereto solely in a Distrito Federal court. These Conditions and the Exhibitor’s Terms and Conditions are the final and exclusive agreement between Material and the exhibitor.</p>\
        <p>16. EXPO REFORMA</p>\
        <p>The exhibitor is also obligated to observe and respect both Expo Reforma’s general guidelines, and the specific rules set forth in connection with this event, considering the exhibitor’s noncompliance with said guidelines as a cause for rescission of the contract.</p>\
        <p>17. INDEPENDENCE</p>\
        <p>There is no employment relationship between the parties, they are different parties, releasing Material Art Fair from all liability and holding it harmless in any labor lawsuit filed by any of the exhibitor’s employees, staff or associates.</p>\
        <p>18. INTELLECTUAL PROPERTY</p>\
        <p>The exhibitor declares it has secures the authorization required to exhibit and exploit the works of art shown by the author or owner of the equity rights thereto, as well as to use the brands exhibited, releasing Material Art Fair from any and all liability in this regard.</p>\
        <p>19. GENERAL CONDITIONS</p>\
        <p>The organizer sets the general conditions such as the place, the duration, the dates, the opening hours and the ticket price of Material Art Fair and if necessary reserves the right to modify them.</p>\
        <p>July, 2015</p>\
        <p>Material Art Fair</p>\
        <p>Feria de Arte Material México S.A. de C.V.</p>',

        agreement: 'I / WE HAVE READ THIS AGREEMENT ON BEHALF OF EXHIBITOR IN ITS ENTIRETY, INCLUDING THE RULES AND REGULATIONS, AND AS AGENT/S OF EXHIBITOR, AGREE THAT EXHIBITOR SHALL BE BOUND BY THE TERMS AND CONDITIONS HEREIN.',

        signature: {
          label: 'Signature',
        },
      }
    },
  },
});
