import React from 'react';
import { AutoForm } from 'uniforms-unstyled';

// Import schemas
import { TermsSchema } from '/imports/schemas/terms.js';

// Import apply section base component
import { ApplySection } from '/imports/components/apply/applySection.jsx';

export class Terms extends ApplySection {
  render() {
    return (
      <div class="content">
        <h1>Terms and Conditions</h1>

        <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>
        <AutoForm
          autosave
          schema={TermsSchema}
          onSubmit={this.onSubmit.bind(this)}
          onValidate={this.onValidate.bind(this)}
          model={this.props.model} />
      </div>
    );
  }
}
