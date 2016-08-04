import React, { Component } from 'react';

import i18n from 'meteor/universe:i18n';
import { autoParagraph } from '/imports/lib/misc.js';

import { StepsInfo } from '/imports/components/apply/steps.js';

const T = i18n.createComponent();

export class SingleLayout extends Component {
  render() {
    if (!this.props.user) {
      return <Accounts.ui.LoginForm />;
    }

    let roleSpecificNav;
    if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
      roleSpecificNav = <SingleAdminNav />;
    } else {
      roleSpecificNav = <SingleCommitteeNav />;
    }

    return (
      <section id="application-single">
        <h1>Single Application</h1>
        {this.props.sections.map((section, key) => (
          <SingleSection section={section} key={key} />
        ))}
        {roleSpecificNav}
      </section>
    );
  }
}

export class SingleSection extends Component {
  render() {

    let validatedString = this.props.section.validated.toString();

    // console.log(this.props.section);
    let stepIndex = this.props.section.step - 1;
    let step = StepsInfo[stepIndex];
    let data = this.props.section.data;

    return (
      <div className="single-application-section">
        <h3>Section {this.props.section.step}: {step.name}</h3>
        <h5>Validated: {validatedString}</h5>
        {(() => {
          switch (step.key) {
            case 'gallery-information':
              return (
                <section>
                  <h4><T>apply.sections.galleryInformation.galleryName.label</T></h4>
                  <p>{data.galleryName}</p>
                  <h4><T>apply.sections.galleryInformation.address.label</T></h4>
                  <p>
                    {data.address1}<br />
                    {data.address2}<br />
                    {data.city}, {data.state}<br />
                    {data.country}. {data.postalCode}
                  </p>
                  <p>Tel: {data.galleryPhone}</p>
                  <p>Email: {data.galleryEmail}</p>
                  <p><a href={data.website}>{data.website}</a></p>
                </section>
              );
            case 'contact-information':
              return (
                <section>
                  <h4><T>apply.sections.contactInformation.contactName.label</T></h4>
                  <p>{data.contactName}</p>
                  <p><a href={'mailto:' + data.contactEmail}>{data.contactEmail}</a></p>
                  { !_.isUndefined(data.contactPhone) ? <p>Tel: {data.contactPhone}</p> : false }
                  { !_.isUndefined(data.twitter) ? <p>Twitter: {data.twitter}</p> : false }
                  { !_.isUndefined(data.facebook) ? <p>Facebook: {data.facebook}</p> : false }
                  { !_.isUndefined(data.tumblr) ? <p>Tumblr: {data.tumblr}</p> : false }
                  { !_.isUndefined(data.instagram) ? <p>Instagram: {data.tumblr}</p> : false }
                </section>
              );
            case 'proposal':
              return (
                <section>
                  <h4><T>apply.sections.proposal.galleryHistory.label</T></h4>
                  <div dangerouslySetInnerHTML={autoParagraph(data.galleryHistory)} />
                  <h4><T>apply.sections.proposal.artistsRepresented.label</T></h4>
                  <div dangerouslySetInnerHTML={autoParagraph(data.artistsRepresented)} />
                  <h4><T>apply.sections.proposal.galleryYear.label</T></h4>
                  <p>{data.galleryYear}</p>
                  <h4><T>apply.sections.proposal.participation.label</T></h4>
                  <div dangerouslySetInnerHTML={autoParagraph(data.participation)} />
                  <h4><T>apply.sections.proposal.standProposal.label</T></h4>
                  <div dangerouslySetInnerHTML={autoParagraph(data.standProposal)} />
                </section>
              );
            case 'artists':
              return (
                <section>
                  {data.artists.map( (artist, key) => (
                    <SingleArtist artist={artist} key={key} />
                  ))}
                </section>
              );
            case 'booth':
              let booths = data.boothSize;
              return (
                <section>
                  <ul>
                    {!_.isUndefined(booths.boothSingle) && booths.boothSingle === true ? <li>✔︎ <T>apply.sections.booth.boothSingle.label</T></li> : false}
                    {!_.isUndefined(booths.boothDouble) && booths.boothDouble === true ? <li>✔︎ <T>apply.sections.booth.boothDouble.label</T></li> : false}
                    {!_.isUndefined(booths.boothSmall) && booths.boothSmall === true ? <li>✔︎ <T>apply.sections.booth.boothSmall.label</T></li> : false}
                    {!_.isUndefined(booths.boothMedium) && booths.boothMedium === true ? <li>✔︎ <T>apply.sections.booth.boothMedium.label</T></li> : false}
                    {!_.isUndefined(booths.boothPlus) && booths.boothPlus === true ? <li>✔︎ <T>apply.sections.booth.boothPlus.label</T></li> : false}
                    {!_.isUndefined(booths.boothLarge) && booths.boothLarge === true ? <li>✔︎ <T>apply.sections.booth.boothLarge.label</T></li> : false}
                    {!_.isUndefined(booths.boothExtra) && booths.boothExtra === true ? <li>✔︎ <T>apply.sections.booth.boothExtra.label</T></li> : false}
                  </ul>
                </section>
              );
            case 'terms-and-conditions':
              return (
                <section>
                  {!_.isUndefined(data.signature) ? <img src={data.signature} /> : false}
                </section>
              );
          }
        })()}
      </div>
    );
  }
};

export class SingleArtist extends Component {
  render() {
    const artist = this.props.artist;
    return (
      <section>
        <h4>{artist.name}</h4>
        <p><a href={artist.cv.file.url} rel='noopener' target='_blank'>CV</a></p>
        {artist.work.map( (work, key) => (
          <SingleWork work={work} key={key} />
        ))}
g     </section>
    );
  }
};

export class SingleWork extends Component {
  render() {
    const work = this.props.work;
    return (
      <section>
        <h5>{work.workTitle}</h5>
        <img src={work.image.file.url} alt={work.image.file.name} />
        <p><T>apply.sections.artists.work.medium.label</T>: {work.medium}</p>
        <p><T>apply.sections.artists.work.dimensions.label</T>: {work.dimensions}</p>
        <p><T>apply.sections.artists.work.year.label</T>: {work.year}</p>
      </section>
    );
  }
};

export class SingleAdminNav extends Component {
  render() {

    return (
      <nav>
        <h3>Admin nav</h3>
        Here goes the same method buttons as the /applications index. And maybe also something more?
      </nav>
    );
  }
}

export class SingleCommitteeNav extends Component {
  render() {

    return (
      <nav>
        <h3>Committee nav</h3>
        Here goes comments and rating functions
      </nav>
    );
  }
}
