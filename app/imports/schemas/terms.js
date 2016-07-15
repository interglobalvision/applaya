const SectionSchema = new SimpleSchema({
  accept: {
    type: Boolean,
    label: 'Terms and Conditions',
    autoValue() {
      if (!this.value) {
        this.unset();
      }
    },
  },
});

SectionSchema.messages({
  'required accept': 'Please accept the Terms and Conditions',
});

export const TermsSchema = SectionSchema;
