import React, { Component } from 'react';

import i18n from 'meteor/universe:i18n';
import { autoParagraph } from '/imports/lib/misc.js';

import { StepsInfo } from '/imports/lib/steps.js';

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
                  <h4>Tel</h4>
                  <p>{data.galleryPhone}</p>
                  <h4>Email</h4>
                  <p>{data.galleryEmail}</p>
                  <h4>Website</h4>
                  <p><a href={data.website}>{data.website}</a></p>
                </section>
              );
            case 'contact-information':
              return (
                <section>
                  <h4><T>apply.sections.contactInformation.contactName.label</T></h4>
                  <p>{data.contactName}</p>
                  <h4>Email</h4>
                  <p><a href={'mailto:' + data.contactEmail}>{data.contactEmail}</a></p>
                  { !_.isUndefined(data.contactPhone) ? <div><h4>Tel</h4><p>{data.contactPhone}</p></div> : false }
                  { !_.isUndefined(data.twitter) ? <div><h4>Twitter</h4><p>{data.twitter}</p></div>  : false }
                  { !_.isUndefined(data.facebook) ? <div><h4>Facebook</h4><p>{data.facebook}</p></div>  : false }
                  { !_.isUndefined(data.tumblr) ? <div><h4>Tumblr</h4><p>{data.tumblr}</p></div>  : false }
                  { !_.isUndefined(data.instagram) ? <div><h4>Instagram</h4><p>{data.tumblr}</p></div>  : false }
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
                    {!_.isUndefined(booths.project) && booths.project === true ? <li>✔︎  <T>apply.sections.booth.project.label</T></li> : false}
                    {!_.isUndefined(booths.principal1) && booths.principal1 === true ? <li>✔︎  <T>apply.sections.booth.principal1.label</T></li> : false}
                    {!_.isUndefined(booths.principal2) && booths.principal2 === true ? <li>✔︎  <T>apply.sections.booth.principal2.label</T></li> : false}
                    {!_.isUndefined(booths.principal3) && booths.principal3 === true ? <li>✔︎  <T>apply.sections.booth.principal3.label</T></li> : false}
                    {!_.isUndefined(booths.principal4) && booths.principal4 === true ? <li>✔︎  <T>apply.sections.booth.principal4.label</T></li> : false}
                    {!_.isUndefined(booths.principal5) && booths.principal5 === true ? <li>✔︎  <T>apply.sections.booth.principal5.label</T></li> : false}
                    {!_.isUndefined(booths.principal6) && booths.principal6 === true ? <li>✔︎  <T>apply.sections.booth.principal6.label</T></li> : false}
                    {!_.isUndefined(booths.principal7) && booths.principal7 === true ? <li>✔︎  <T>apply.sections.booth.principal7.label</T></li> : false}
                    {!_.isUndefined(booths.principal8) && booths.principal8 === true ? <li>✔︎  <T>apply.sections.booth.principal8.label</T></li> : false}
                  </ul>
                </section>
              );
            case 'terms-and-conditions':
              return (
                <section>
                  <h4><T>apply.sections.terms.signature.label</T></h4>
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
      <section className='single-application-artist'>
        <h4>{artist.name}</h4>
        <p>{'📄'} <a href={artist.cv.file.url} rel='noopener' target='_blank'>{artist.cv.file.name}</a></p>
        {artist.work.map( (work, key) => (
          <SingleWork work={work} key={key} />
        ))}
      </section>
    );
  }
};

export class SingleWork extends Component {
  render() {
    const work = this.props.work;
    return (
      <section className='single-application-artist-work'>
        <img className='single-application-artist-work-image' src={work.image.file.url} alt={work.image.file.name} />
        <ul>
          <li><T>apply.sections.artists.work.workTitle.label</T>: {work.workTitle}</li>
          <li><T>apply.sections.artists.work.medium.label</T>: {work.medium}</li>
          <li><T>apply.sections.artists.work.dimensions.label</T>: {work.dimensions}</li>
          <li><T>apply.sections.artists.work.year.label</T>: {work.year}</li>
        </ul>
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
