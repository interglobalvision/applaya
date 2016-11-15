import React, { Component } from 'react';
import Alert from 'react-s-alert';

import { deleteApplication, unsubmitApplication, markPaidApplication, extendApplication } from '/imports/api/methods/adminApplicationMethods.js';

const T = i18n.createComponent();

export class ApplicationsLayout extends Component {
  renderPaginationPrev() {
    let page = parseInt(this.props.queryParams.page) || 1;
    let pagePrev = page - 1;

    if (pagePrev !== 0) {
      return (
        <a className="button" onClick={() => FlowRouter.setQueryParams({ page: pagePrev })}><T>common.prev</T></a>
      );
    } else {
      return false;
    }
  }

  renderPaginationNext() {
    let page = parseInt(this.props.queryParams.page) || 1;
    let pageNext = page + 1;

    if (pageNext) {
      return (
        <a className="button" onClick={ () => FlowRouter.setQueryParams({page: pageNext}) }><T>common.next</T></a>
      );
    } else {
      return false;
    }
  }

  render() {
    if (!this.props.user) {
      return <Accounts.ui.LoginForm />;
    }

    return (
      <section id="applications">
        <div className='row'>
          <div className='fluid-col s-12'>
            <h3><T>applications.title</T></h3>
          </div>
          <ApplicationsFilters isAdmin={this.props.isAdmin} />
          <div className='fluid-col s-12'>
            <table>
              <thead>
                <tr>
                  <td className='s-4'><T>applications.title</T></td>
                  { this.props.isAdmin ? <td className='s-2'><T>applications.status.label</T></td> : false }
                  <td className='s-1'><T>applications.rating.average.label</T></td>
                  { this.props.isAdmin ?  false : <td className='s-2'><T>applications.rating.userRating.label</T></td> }
                  { this.props.isAdmin ? <td className='s-5'><T>applications.actions.label</T></td> : false }
                </tr>
              </thead>
              <tbody>
                {this.props.applications.map((application, key) => (
                  <ApplicationsApplication _id={application._id} userId={application.userId} userEmail={application.userEmail} isAdmin={this.props.isAdmin} galleryName={application.galleryName} status={application.status} key={key} averageRating={application.averageRating} userRating={application.userRating} />
                ))}
              </tbody>
            </table>
            <nav>
              { this.renderPaginationPrev() }
              { this.renderPaginationNext() }
            </nav>
          </div>
        </div>
      </section>
    );
  }
}

export class ApplicationsFilters extends Component {
  onChange() {
    let status = this.props.isAdmin ? this.refs.status.value : null;
    let sortBy = this.refs.sortBy.value || null;
    let search = this.refs.search.value || null;

    FlowRouter.setQueryParams({
      status,
      search,
      sortBy,
      page: null,
    });

  }

  handleStatusChange() {
    let status = this.refs.status.value;

    // Status clears the search filter
    if (status) {
      this.refs.search.value = null;
    }
  }

  handleSearchChange() {
    let search = this.refs.search.value;

    // Search clears the status filter
    if (search && this.props.isAdmin) {
      this.refs.status.value = null;
    }
  }

  render() {
    return (
      <nav className='margin-bottom-small'>
        <form onChange={this.onChange.bind(this)} className='row'>
          <div className='fluid-col s-4'>
            <h5 className='margin-bottom-micro'>Search</h5>
            <input ref="search" type="text" onChange={this.handleSearchChange.bind(this)} />
          </div>
          { this.props.isAdmin ?
            <div className='fluid-col s-4'>
              <h5 className='margin-bottom-micro'>Status</h5>
              <select ref="status" onChange={this.handleStatusChange.bind(this)}>
                <option value="">All</option>
                <option value="in-process">In Process</option>
                <option value="complete">Complete</option>
                <option value="submitted">Submitted</option>
                <option value="paid">Paid</option>
              </select>
            </div>
          : false }
          <div className='fluid-col s-4'>
            <h5 className='margin-bottom-micro'>Sort</h5>
            <select ref="sortBy">
              <option value="">Date</option>
              <option value="rating-asc">Rating (low-high)</option>
              <option value="rating-desc">Rating (high-low)</option>
              <option value="gallery-asc">Gallery name (A-Z)</option>
              <option value="gallery-desc">Gallery name (Z-A)</option>
            </select>
          </div>
        </form>
      </nav>
    );
  }
}

export class ApplicationsApplication extends Component {
  clickAdminAction(method) {

    switch (method) {
      case 'deleteApplication':
        if (confirm(i18n.__('notifications.delete.confirm'))) {
          deleteApplication.call({applicationId: this.props._id, userId: this.props.userId}, (err, res) => {
            this.adminActionCallback(err, res);
          });
        }
        break;
      case 'unsubmitApplication':
        if (confirm(i18n.__('notifications.unsubmit.confirm'))) {
          unsubmitApplication.call(this.props._id, (err, res) => {
            this.adminActionCallback(err, res);
          });
        }
        break;
      case 'markPaidApplication':
        if (confirm(i18n.__('notifications.markPaid.confirm'))) {
          markPaidApplication.call(this.props._id, (err, res) => {
            this.adminActionCallback(err, res);
          });
        }
        break;
      case 'extendApplication':
        if (confirm(i18n.__('notifications.extend.confirm'))) {
          extendApplication.call(this.props._id, (err, res) => {
            this.adminActionCallback(err, res);
          });
        }
        break;
      default:
        break;
    }

  }

  adminActionCallback(err, res) {
    if (err) {
      Alert.error(err.reason);
      console.log('Error:', err);
    } else {
      Alert.success(res.message);
    }
  }

  renderStatus() {
    if (this.props.status.paid === true) {
      return ('Paid');
    } else if (this.props.status.submitted === true) {
      return ('Submitted');
    } else if (this.props.status.complete === true) {
      return ('Complete');
    } else {
      return ('In Process');
    }
  }

  render() {

    let displayName = this.props._id;

    let rating = '';

    if (!!this.props.galleryName) {
      displayName = this.props.galleryName;
    } else if (!!this.props.userEmail) {
      displayName = this.props.userEmail;
    }

    if (!!this.props.averageRating) {
      rating = this.props.averageRating;
    }

    return (
      <tr>
        <td className='table-applications-title'>
          <a href={'/application/' + this.props._id}>{displayName}</a>
        </td>
        { this.props.isAdmin ?
          <td className='table-applications-status'>
            {this.renderStatus()}
          </td>
        : false }
        <td className='table-applications-rating'>
          {rating}
        </td>
        { this.props.isAdmin ?
          <td className='table-applications-actions'>
            <button className='button-small' onClick={() => this.clickAdminAction('deleteApplication')}><T>applications.actions.delete</T></button>
            <button className='button-small' onClick={() => this.clickAdminAction('unsubmitApplication')} disabled={!this.props.status.submitted}><T>applications.actions.unsubmit</T></button>
            <button className='button-small' onClick={() => this.clickAdminAction('markPaidApplication')} disabled={this.props.status.paid}><T>applications.actions.markAsPaid</T></button>
            <button className='button-small' onClick={() => this.clickAdminAction('extendApplication')} disabled={this.props.status.extended}><T>applications.actions.extend</T></button>
          </td>
          : <td className='table-applications-user-rating'>{this.props.userRating}</td> }
      </tr>
    );
  }
}
