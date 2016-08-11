import i18n from 'meteor/universe:i18n';

i18n.addTranslations('en', {
  common: {
    next: 'Next',
    prev: 'Prev',
    application: 'Application',
  },

  errors: {
    codes: {
      fourzeroone: '401 Unauthorized :/',
      fourzerofour: '404 Page Not Found :/',
    }
  },

  notifications: {
    error: 'Error',
    errorOccurred: 'An Error occurred, try again later',
    upload: {
      success: '{$filename} uploaded successfully!',
    },
    addUser: {
      success: 'Successfull {$role} account created for {$email}',
      alreadyExists: '{$email} already has an account',
    },
    removeUser: {
      success: '{$email} account removed successfully',
      yourself: 'You can\'t remove yourself',
    },
    payment: {
      success: 'Thanks for your payment',
      alreadyPaid: 'Application was already paid, refresh the page',
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
  },

  users: {
    signup: {
      title: 'Signup',
      introduction: 'Signup here with an email address and a password of your choice with more than 7 characters',
    },
    login: {
      title: 'Login',
    },
  },

  navbar: {
    admin: 'Admin',
    applications: 'Applications',
    myApplication: 'My Application',
    login: 'Login',
    signup: 'Signup',
    logout: 'Logout'
  },

  applications: {
    title: 'Applications',
    status: {
      label: 'Status',
    },
    actions: {
      label: 'Actions',
      delete: 'Delete',
      unsubmit: 'Unsubmit',
      markAsPaid: 'Mark as paid',
      extend: 'Extend',
      approve: 'Approve',
    },
  },

  fields: {
    signature: {
      callToAction: 'Sign here',
    }
  },

  admin: {
    users: {
      addUser: {
        label: 'Add new user',
        email: {
          label: 'Email'
        },
        role: {
          label: 'Role',
          admin: 'Admin',
          committee: 'Committee',
        },
      },
      removeUser: {
        label: 'Remove user',
        confirm: 'Are you sure you want to remove this user?',
      },
    },
  },

  frontpage: {
    title: 'Material Art Fair 2017 — Online Application',
    introduction: '<p>Welcome to the online application for Material Art Fair 2017.</p><p>New applicants please click below to proceed in your language of choice.</p>',
    returningUsers: '<p>Or returning users please login to continue.</p>',
  },

  apply: {
    introduction: '<p>Thank you for your application to the fourth edition of Material Art Fair, which will take place from February 9th - 12th, 2017, at Expo Reforma in Mexico City. Please remember that the <strong>application deadline is Friday, September 23rd, 2016</strong>. No applications will be accepted after that date.</p><p>Each application will be carefully reviewed, considered, and discussed by our 2017 Selection Committee and we will send notification of their decisions to all applicants beginning in October, once their review has been completed.</p><p>Changes made to your application will be saved automatically. With your login and password you’ll be able to edit your application as many times as you wish, before signing and submitting.</p><p>Please report any errors or problems directly to us at <a href="mailto:applications@material-fair.com" class="u-inline-block">applications@material-fair.com</a>.</p>',
    completed: '{$percentage}% Complete',
    thanks: 'Thanks for your application to Material Art Fair 2017. Your application fee has been processed. The selection committee will begin reviewing applications after the deadline of September 23rd and we will begin the notification process in October.',
    closed: 'Sorry applications are now closed',
    sections: {

      // Section: Contact Information
      galleryInformation: {
        stepName: 'Gallery Information',
        title: 'Gallery Information',
        galleryName: {
          label: 'Gallery Name'
        },

        address: {
          label: 'Address',
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
          label: 'Gallery phone (with country code)',
        },

        galleryEmail: {
          label: 'Gallery email',
        },

        website: {
          label: 'Website'
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
        stepName: 'Contact Information',
        title: 'Primary contact',
        description: '<p>Please indicate the contact information for the primary person at the gallery who will be responsible for managing the fair details.</p>',
        contactName: {
          label: 'Name',
        },
        contactEmail: {
          label: 'Email',
        },
        contactPhone: {
          label: 'Mobile phone (with country code)',
        },
      },

      // Section: Proposal
      proposal: {
        stepName: 'Proposal',
        title: 'Material Art Fair 2017 Stand Proposal',
        description: '<p>In this section, you will provide information about your gallery, the artists you represent, and your proposed stand for MAF 2017. This information will be used by the Selection Committee to make an informed decision with respect to your application. There will be room on the following page to upload artist CVs and artwork images.</p>',

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
          label: 'Stand proposal'
        },
      },

      // Section: Artists
      artists: {
        stepName: 'Artists and Works',
        title: 'Proposed Artists for Material Art Fair 2017',
        label: 'Artists and Works',

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
        stepName: 'Stand Selection',
        title: 'Stand Selection',
        description: `<p>For its 2017 edition, Material Art Fair has again partnered with the Mexico City-based architectural studio, <strong>APRDELESP</strong>. This time, the fair will be divided into <strong>two floors</strong> with nearly identical layouts in which the gallery spaces are situated around a central courtyard, so that the fair’s visitors will be able to flow freely from one space to another.</p>
        <p>In the <strong>Principal Section</strong>, we have significantly expanded the variety of stands available in order to accommodate a wider range of budgets and ambitions.</p>
        <p>The <strong>Project Space</strong> stands, as always, will highlight artist and curator-run independent spaces, non-profit organizations, or galleries that have only been in operation a short time.</p>
        <p>Wall height for all stands is 3.05 meters (10 ft).</p>
        <p><strong>Stands include:</strong>
        <ul>
          <li>• Interior lighting</li>
          <li>• Stand signage</li>
          <li>• Exhibitor badges</li>
          <li>• Courtesy VIP and general admission passes</li>
          <li>• Complimentary WiFi (1 user)</li>
          <li>• Empty crate storage</li>
          <li>• Additional work storage</li></ul></p>
        <p><strong>STAND SELECTION<strong><br /><em>Please indicate any stands of interest, because quantities of each are limited. Also note that exact sizes and availability are subject to change.</em></p>`,
        label: ' ',

        project: {
          label: 'PROJECT SPACE 5 m2 (54 sq. ft), featuring two walls (3 linear meters each) $1000 usd (12 available)',
        },
        principal1: {
          label: '9 m2 (97 sq. ft.) $2700 usd (8 available)',
        },
        principal2: {
          label: '13 m2 (140 sq. ft.) $3900 usd (10 available)',
        },
        principal3: {
          label: '15 m2 (161 sq. ft.) $4500 usd (10 available)',
        },
        principal4: {
          label: '18 m2 (194 sq. ft) $5400 usd (2 available)',
        },
        principal5: {
          label: '24 m2 (258 sq. ft.) $7200 usd (2 available)',
        },
        principal6: {
          label: '31 m2 (334 sq. ft.) $9300 usd (2 available)',
        },
        principal7: {
          label: '42 m2 (452 sq. ft.) $12,600 usd (2 available)',
        },
        principal8: {
          label: '50 m2 (538 sq. ft.) $15,000 usd (4 available)',
        },
      },

      // Section: Terms and Conditions
      terms: {
        stepName: 'Terms and Conditions',
        title: 'Terms and Conditions of Participation',
        description: '1. GENERAL</p><p>Material Art Fair is a cultural event organized by Feria de Arte Material México, S.A. de C.V. (“Material Art Fair”) and will take place at Expo Reforma in Mexico City. These Terms and Conditions of Participation govern the exhibitor’s participation in Material Art Fair. Material Art Fair reserves the right to, at any time, issue other conditions, rules and regulations of participation. The terms and conditions of this Agreement shall also cover any additional days required for Exhibitor to move-in and move-out of the stand space at the Exhibition.</p><p>2. SHOW DATES</p><p>Material Art Fair will take place February 9-12, 2017 with the opening preview on Thursday, February 9, 2017.</p><p>3. LOCATION</p><p>Expo Reforma</p><p>Calle Morelos 67</p><p>Col. Juárez, Del. Cuauhtémoc, 06600</p><p>Mexico City</p><p>Mexico</p><p>4. ARTICLES ON EXHIBIT</p><p>• Painting</p><p>• Sculpture</p><p>• Works on Paper</p><p>• Photography</p><p>• Video</p><p>• Installation</p><p>5. EXHIBITION STANDARDS</p><p>Exhibitor agrees to abide by the aesthetic standards set forth by Material Art Fair. Exhibitor agrees to be bound by all rules, regulations, terms and conditions contained in the Exhibitor’s Kit, to be supplied to Exhibitor after this Agreement has been executed by Material Art Fair and the Exhibitor.</p><p>6. ADMISSION TO EXHIBITION</p><p>Material Art Fair shall be the sole and final judge of all applications and may accept or reject applications in its sole discretion. The Exhibitor guarantees that all information in his/her application is accurate and that all work submitted for exhibition is authentic. All applications will be reviewed by a selection committee, which will be the body in charge of authorizing or rejecting applications pursuant to selection criteria.</p><p>Admission will be confirmed in writing in October 2016. Material Art Fair reserves the right to cancel any application that is accepted on the basis of false information or if the exhibitor fails to comply with these Conditions, and the exhibitor will remain liable for the full stand rental and any additional charges incurred by Material Art Fair.</p><p>Exhibitors are obliged to use the stand for the duration of the fair and keep the stand sufficiently manned at all times during exhibition hours. The exhibitor will indemnify Material Art Fair, and hold Material Art Fair harmless, for and from any and all loss or damage incurred by Material Art Fair that is a result of any breach of these Conditions. Material Art Fair shall be entitled to recover from exhibitor Material Art Fair’s expenses and attorney’s fees in any action to enforce these Conditions.</p><p>Material Art Fair has the right to require complete details of a proposed exhibit and reserves the right to prohibit the exhibition of any object which does not meet the requirements of the exposition. If necessary, the removal of such objects will be at the sole risk and expense of the exhibitor.</p><p>7. ALLOCATION OF SPACE</p><p>Stand space and stand location at the exhibition will be allocated and determined by Material Art Fair and at Material Art Fair’s sole discretion. Material Art Fair may, in its discretion, change the location of allocated space, as well as slightly alter the shape of the stand if necessary.</p><p>Material Art Fair reserves the right to rearrange the layout of unoccupied areas, and to alter entrances and exits to and from the exhibition space, halls and aisles.</p><p>Material Art Fair will be entitled to change, at any time, the place allocated according to Expo Reforma’s safety regulations. Material Art Fair shall be subject, at any time, to the provisions set forth by Expo Reforma regarding space, aisles, emergency exits and other specifications.</p><p>Furthermore, Material does not represent, warrant or guarantee the final square footage of any stand space leased hereunder, it being expressly understood by Exhibitor the actual square footage of a stand leased hereunder shall be unknown until a final floor plan is received by Material. Should the final floor plan received by Material (depicting the actual stand size to be leased to Exhibitor) differ from the approximate stand square footage stated herein, the final floor plan shall control and same shall be deemed to amend and supplement this Agreement so that the square footage of the stand size depicted in the final floor plan shall replace the approximate square footage stated herein, and the rental payments hereunder will be slightly adjusted accordingly.</p><p>Additional walls, special walls, custom flooring, custom carpeting, additional signage, furniture, miscellaneous electrical services, shelving, sculpture pedestals, drayage & labor furnished for exhibitor-supplied materials are available at additional charges. Prices are to be outlined in the Exhibitor’s Kit. Exhibitor agrees to pay full costs of stand decoration and additional lighting.</p><p></p><p>8. CO-EXHIBITORS / STAND SHARING</p><p>No exhibitor may sublet his/her stand either wholly or in part. Products, exhibitors or individuals other than those specified in the exhibitor’s application may not be shown or advertised in the stand without written permission from Material Art Fair.</p><p>9. CONDITIONS OF PAYMENT</p><p>A mandatory and non-refundable $150 USD application fee will be due upon submission of the exhibitor application. This fee is not credited to the exhibitor’s account against stand rental fees. 50% of the stand rental payment will be due upon acceptance. Any remaining balance must be paid no later than November 25th, 2016. Payments are non-refundable unless Material Art Fair otherwise agrees in its discretion. In event of incomplete payment or nonpayment, Material Art Fair may cancel the exhibitor’s contract, reallocate the space and retain any payments made without any further liability or obligation to the exhibitor.</p><p>10. WITHDRAWAL FROM THE EXHIBITOR’S CONTRACT</p><p>Any exhibitor that has not occupied its space by 6:00pm on Wednesday, February 8, 2017, will forfeit that space and Material Art Fair will claim full rights to that space and retain any payments made without any further liability or obligation to the exhibitor. </p><p>Material Art Fair Cancellation Policy: Exhibitors withdrawing from the contract are subject to a penalty charge. Any stand cancellations received on or before December 2, 2016 will result in a fee to Material Art Fair equal to half the cost of the stand rental. Cancellations received on or after December 16, 2016 will result in forfeiting 100% of the stand fee to Material Art Fair.</p><p>11. INSURANCE AND EXEMPTION FROM LIABILITY</p><p>Each exhibitor should obtain insurance coverage for damage or loss to articles exhibited or to be exhibited, due to fire, theft, burglary, breakage, leakage, accident, earthquake or water damage, and the risks of transport to and from the exhibitor’s stand space. The exhibitor assumes all risk of loss related thereto. Material Art Fair will not be liable to any exhibitor for any direct, incidental or consequential damages or loss to exhibitor or his her/its property arising from or connected with exhibitor’s participation, except for damage or loss caused solely by Material Art Fair’s gross negligence.</p><p>Prior to admission to the show, each exhibitor will be required to sign a form releasing Material Art Fair, their agents and subcontractors from liability. Furthermore, the exhibitor shall indemnify and hold Material Art Fair harmless from and against any claim whatsoever for injury, loss or damage resulting from any act or omission of the exhibitor or its employees, agents, representatives, or subcontractors.</p><p>12. SECURITY</p><p>A security service for the show and the show areas will be provided 24 hours a day. Security service will commence the first day of installation and continue until the end of dismantling. Nevertheless, Material Art Fair shall not be liable for any loss or damage due to theft.</p><p>To maintain security, once set-up begins, nothing can be removed from the show premises unless accompanied by a merchandise and/or security pass, through the dismantling period. Only exhibitors may bring articles onto the premises throughout the duration of the show.</p><p>Exhibitor recognizes that by participating in Material Art Fair, it assumes security risks that cannot be eliminated by security services provided by Material Art Fair. Security for individual stands is not included. Exhibitors are strongly advised to sufficiently protect all exhibition works and obtain adequate insurance coverage.</p><p>13. ELECTRICAL SERVICES</p><p>Material Art Fair will use its best efforts to provide common area lighting and electrical service, but shall not be liable for any loss or damage due to failure or interruption of service. No exhibitor is allowed to install his her own power connections.</p><p>Fire, safety and security regulations must be adhered to.</p><p>14. MAINTENANCE</p><p>Material Art Fair will be responsible for keeping the common areas of the show site clean. Each exhibitor is responsible for the maintenance of his/her stand and will leave the stand in the same condition in which it was found, reasonable wear and tear excepted. Exhibitors will be charged a cleaning fee for any trash left in their stand or in the hallways of the fair. This includes any furniture items, pedestals, large pieces of wood, or other construction and/or packing materials.</p><p>If you have a question about how to discard of something, please contact Material Art Fair show management. All hanging devices must be removed from the wall when dismantling the stand. No holes larger than a quarter inch may be cut or drilled into the wall without prior consent of Material Art Fair. Exhibitors will be charged for any damages deemed excessive by show management.</p><p>15. GENERAL REMARKS</p><p>Material Art Fair is entitled in the case of compelling reasons or Acts of God to postpone, reschedule, shorten or extend the exhibition without liability or obligation to the exhibitor. Material Art Fair reserves the right to expel from the fair any exhibitor who violates the rules stated herein. The exhibitor will remain liable for the full amount of stand rental and any additional charges incurred.</p><p>Notwithstanding any conflict of law provisions, the laws in force in Mexico City (Ciudad de México) and the Mexican Republic shall be applicable to these Conditions and all matters arising from exhibitor’s participation in Material Art Fair.</p><p>Exhibitor agrees to the exclusive jurisdiction and venue for any legal proceedings related thereto solely in a Distrito Federal court. These Conditions and the Exhibitor’s Terms and Conditions are the final and exclusive agreement between Material and the exhibitor.</p><p>16. EXPO REFORMA</p><p>The exhibitor is also obligated to observe and respect both Expo Reforma’s general guidelines, and the specific rules set forth in connection with this event, considering the exhibitor’s noncompliance with said guidelines as a cause for rescission of the contract.</p><p>17. INDEPENDENCE</p><p>There is no employment relationship between the parties, they are different parties, releasing Material Art Fair from all liability and holding it harmless in any labor lawsuit filed by any of the exhibitor’s employees, staff or associates.</p><p>18. INTELLECTUAL PROPERTY</p><p>The exhibitor declares it has secured the authorization required to exhibit and exploit the works of art shown by the author or owner of the equity rights thereto, as well as to use the brands exhibited, releasing Material Art Fair from any and all liability in this regard.</p><p>19. GENERAL CONDITIONS</p><p>The organizer sets the general conditions such as the place, the duration, the dates, the opening hours and the ticket price of Material Art Fair and if necessary reserves the right to modify them.',

        agreement: 'I / WE HAVE READ THIS AGREEMENT ON BEHALF OF EXHIBITOR IN ITS ENTIRETY, INCLUDING THE RULES AND REGULATIONS, AND AS AGENT/S OF EXHIBITOR, AGREE THAT EXHIBITOR SHALL BE BOUND BY THE TERMS AND CONDITIONS HEREIN.',

        name: {
          label: 'Full Name',
        },

        date: {
          label: 'Date',
        },

        signature: {
          label: 'Signature',
        },
      }
    },

    submit: {
      title: 'Review and Submit',
      description: '<p>Please review the information you have submitted. You may go back and edit as necessary or log in again later to finish your application.</p><p>If you are satisfied with your application, please click “Submit” in order to pay your application fee and complete your submission. Please note that once you click the “Submit” button, you will no longer be able to make changes your application.</p>',
      confirmation: '<b>IMPORTANT</b>: Once you submit here you cannot return to edit your application. You will need to pay the application fee and your submission will be complete. Until you pay the fee your appliction is not completed.',
      button: 'Submit and go to Payment',
    },

    payment: {
      title: 'Payment',
      feeText: 'Application Fee',
      description: 'Thank you again for your application to the 2017 edition of Material Art Fair. In order to complete the submission of your application, there is a $150 USD application fee, payable by any major credit or debit card below. Please note that this charge will appear as "Conekta" on your bank or credit card statement.',
      pay: {
        label: 'Pay',
      },
      name: {
        label: 'Name as it appears on your card',
      },
      cardNumber: {
        label: 'Card number',
      },
      cvc: {
        label: 'CVC',
      },
      expirationMonth: {
        label: 'Expiration month',
      },
      expirationYear: {
        label: 'Expiration year',
      },
      address1: {
        label: 'Address line 1',
      },
      address2: {
        label: 'Address line 2',
      },
      city: {
        label: 'City',
      },
      postalCode: {
        label: 'Postal code',
      },
      state: {
        label: 'State',
      },
      country: {
        label: 'Country',
      },
      phone: {
        label: 'Telephone',
      },
      confirm: {
        label: 'By clicking the "Pay" button below, you agree to pay the $150 USD application fee. You will receive confirmation of the charge as well as confirmation that your application to Material Art Fair 2017 has been completed.',
      },
    },
  },

  single: {
    title: 'Single Application',
    edit: 'Edit this section',
    section: 'Section',
  },

  applySidebar: {
    introduction: 'Introduction',
    sections: 'Sections',
  },

  footer: {
    applaya: 'Applaya: <i>Bien hecho</i> in CDMX by Interglobal Vision for Material Art Fair 2017',
  },
});
