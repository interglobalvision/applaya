import React, { Component } from 'react';

import i18n from 'meteor/universe:i18n';
import { autoParagraph } from '/imports/lib/misc.js';

import { StepsInfo } from '/imports/lib/steps.js';

import { Rating } from '/imports/components/committee/rating.jsx';

const T = i18n.createComponent();

export class SingleLayout extends Component {
  render() {
    if (!this.props.user) {
      return <Accounts.ui.LoginForm />;
    }

    let roleSpecificNav;
    if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
      roleSpecificNav = <SingleAdminNav />;
    } else if (this.props.application.status.paid) { // Display ratings only on paid applications
      roleSpecificNav = <SingleCommitteeNav applicationId={this.props.application._id} rating={this.props.rating ? this.props.rating.value : 0} />;
    }

    return (
      <section id="application-single" className='row'>
        <div className='fluid-col s-12'>
          <h1><T>single.title</T></h1>
          {this.props.sections.map((section, key) => (
            <SingleSection section={section} key={key} />
          ))}
          {roleSpecificNav}
        </div>
      </section>
    );
  }
}

export class SingleSection extends Component {
  renderEditLink() {
    if (Roles.userIsInRole(Meteor.userId(), 'applicant')) {
      let url = '/apply/section/' + this.props.section.step;
      return (
        <a href={url} className='button'><T>single.edit</T></a>
      );
    } else {
      return null;
    }
  }
  
  render() {

    let validatedString = this.props.section.validated.toString();

    // console.log(this.props.section);
    let stepIndex = this.props.section.step - 1;
    let step = StepsInfo[stepIndex];
    let data = this.props.section.data;

    return (
      <div className="single-application-section">
        <h3><T>single.section</T> {this.props.section.step}: {step.name}</h3>
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
                  { data.twitter ? <div><h4>Twitter</h4><p>{data.twitter}</p></div> : false }
                  { data.facebook ? <div><h4>Facebook</h4><p>{data.facebook}</p></div> : false }
                  { data.instagram ? <div><h4>Instagram</h4><p>{data.instagram}</p></div> : false }
                </section>
              );
            case 'contact-information':
              return (
                <section>
                  <h4><T>apply.sections.contactInformation.contactName.label</T></h4>
                  <p>{data.contactName}</p>
                  <h4>Email</h4>
                  <p><a href={'mailto:' + data.contactEmail}>{data.contactEmail}</a></p>
                  { data.contactPhone ? <div><h4>Tel</h4><p>{data.contactPhone}</p></div> : false }
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
                    { booths.project ? <li>✔︎  <T>apply.sections.booth.project.label</T></li> : false}
                    { booths.principal1 ? <li>✔︎  <T>apply.sections.booth.principal1.label</T></li> : false}
                    { booths.principal2 ? <li>✔︎  <T>apply.sections.booth.principal2.label</T></li> : false}
                    { booths.principal3 ? <li>✔︎  <T>apply.sections.booth.principal3.label</T></li> : false}
                    { booths.principal4 ? <li>✔︎  <T>apply.sections.booth.principal4.label</T></li> : false}
                    { booths.principal5 ? <li>✔︎  <T>apply.sections.booth.principal5.label</T></li> : false}
                    { booths.principal6 ? <li>✔︎  <T>apply.sections.booth.principal6.label</T></li> : false}
                    { booths.principal7 ? <li>✔︎  <T>apply.sections.booth.principal7.label</T></li> : false}
                    { booths.principal8 ? <li>✔︎  <T>apply.sections.booth.principal8.label</T></li> : false}
                  </ul>
                </section>
              );
            case 'terms-and-conditions':
              return (
                <section>
                  <h4><T>apply.sections.terms.signature.label</T></h4>
                  <p>
                  { data.name ? <span>{data.name}<br/></span> : false}
                  { data.date ? <span>{data.date}</span> : false}
                  </p>
                  { data.signature ? <img src={data.signature} /> : false}
                </section>
              );
          }
        })()}
        {this.renderEditLink()}
      </div>
    );
  }
};

export class SingleArtist extends Component {
  render() {
    const artist = this.props.artist;

    if (artist) {
      return (
        <section className='single-application-artist'>
          <h4>{artist.name}</h4>
          { artist.cv ? <p>{'📄'} <a href={artist.cv.file.url} rel='noopener' target='_blank'>{artist.cv.file.name}</a></p> : false }
          {artist.work.map( (work, key) => (
            <SingleWork work={work} key={key} />
          ))}
        </section>
      );
    }

    return '';
  }
};

export class SingleWork extends Component {
  render() {
    const work = this.props.work;
    if (work) {
      return (
        <section className='single-application-artist-work'>
          { work.image ? <img className='single-application-artist-work-image' src={work.image.file.url} alt={work.image.file.name} /> : false }
          <ul>
            <li><T>apply.sections.artists.work.workTitle.label</T>: {work.workTitle}</li>
            <li><T>apply.sections.artists.work.medium.label</T>: {work.medium}</li>
            <li><T>apply.sections.artists.work.dimensions.label</T>: {work.dimensions}</li>
            <li><T>apply.sections.artists.work.year.label</T>: {work.year}</li>
          </ul>
        </section>
      );
    }
    return '';
  }
};

export class SingleAdminNav extends Component {
  render() {

    return (
      <nav className='margin-top-basic'>
        <h2>Admin</h2>
        <ul>
          <li><button>Unsubmit Application</button></li>
          <li><button>Mark Application Paid</button></li>
          <li><button>Delete Application</button></li>
        </ul>
      </nav>
    );
  }
}

export class SingleCommitteeNav extends Component {
  render() {

    return (
      <nav>
        <h3>Committee nav</h3>
        <Rating rating={this.props.rating} applicationId={this.props.applicationId} />
      </nav>
    );
  }
}
